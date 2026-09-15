import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { makeToon } from './style.js'

export class WeaponSystem {
  constructor(scene, player, callbacks) {
    this.scene = scene
    this.player = player
    this.callbacks = callbacks
    this.unlocked = new Set(['pistol'])
    this.guns = { pistol: this.makeGun('pistol') }
    this.active = 'pistol'
    this.kick = 0
    this.tracer = null
    this.mouseHeld = false
    this.adsHeld = false

    // 后坐力状态
    this.punch = 0
    this.camTiltX = 0   // 相机上下旋转（后坐力上跳）
    this.camYaw = 0     // 相机左右旋转
    this.shake = 0      // 屏幕抖动强度
    this.shakeDecay = 0

    this.flash = new THREE.PointLight(0xffcc66, 0, 6)
    this.flash.position.set(0, 0, -0.4)
    player.gunGroup.add(this.flash)

    this.muzzle = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 6, 6),
      new THREE.MeshBasicMaterial({ color: 0xfff2a0, transparent: true, opacity: 0 })
    )
    this.muzzle.position.set(0, 0, -0.42)
    player.gunGroup.add(this.muzzle)

    this.sparks = []
    this.sparkGeo = new THREE.BoxGeometry(0.05, 0.05, 0.05)
    for (let i = 0; i < 30; i++) {
      const m = new THREE.Mesh(this.sparkGeo, new THREE.MeshBasicMaterial({ color: 0xffe08a, transparent: true }))
      m.visible = false
      scene.add(m)
      this.sparks.push({ mesh: m, vel: new THREE.Vector3(), life: 0 })
    }
    this.updateModel()

    window.addEventListener('mousedown', (e) => {
      if (!this.player.controls?.isLocked) return
      if (e.button === 0) { this.mouseHeld = true; this.fire() }
      if (e.button === 2) this.adsHeld = true
    })
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouseHeld = false
      if (e.button === 2) this.adsHeld = false
    })
    window.addEventListener('contextmenu', (e) => e.preventDefault())
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyR') this.reload()
      const n = parseInt(e.key, 10)
      if (n >= 1 && n <= 3) this.switchTo(this.keys[n - 1])
    })
  }

  get keys() { return ['pistol', 'shotgun', 'rifle'] }

  makeGun(key) {
    const d = CONFIG.weapon[key]
    return {
      key, label: d.label, damage: d.damage, fireInterval: d.fireInterval,
      magSize: d.magSize, reloadTime: d.reloadTime, ammo: d.magSize,
      pellets: d.pellets || 1, spread: d.spread || 0,
      auto: !!d.auto, adsFov: d.adsFov || 0,
      reloading: false, reloadTimer: 0, fireTimer: 0,
      recoil: d.recoil || { kick: 0.1, camY: 0.01, camYaw: 0.005, shakeAmp: 0.003, shakeFreq: 15 },
    }
  }

  get gun() { return this.guns[this.active] }

  switchTo(key) {
    if (!this.unlocked.has(key) || this.active === key) return
    this.guns[this.active].reloading = false
    this.active = key
    this.updateModel()
    this.callbacks.onWeaponChange?.(this.gun)
  }

  unlock(key) {
    if (this.unlocked.has(key)) return false
    this.unlocked.add(key)
    this.guns[key] = this.makeGun(key)
    this.switchTo(key)
    return true
  }

  updateModel() {
    const old = this.player.gunModel
    if (old) { this.player.gunGroup.remove(old); old.traverse((o) => o.isMesh && o.geometry.dispose()) }
    const group = new THREE.Group()
    for (const part of CONFIG.gunShape[this.active]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(...part.size), makeToon(part.color))
      m.position.set(...part.pos)
      group.add(m)
    }
    this.player.gunGroup.add(group)
    this.player.gunModel = group
  }

  fire() {
    const g = this.gun
    if (g.reloading || g.fireTimer > 0 || g.ammo <= 0) {
      if (g.ammo <= 0 && !g.reloading) this.reload()
      return
    }
    g.ammo--
    g.fireTimer = g.fireInterval

    // 枪身后坐：瞬间向后，缓速回弹
    this.kick = 1

    // 相机后坐：上跳 + 左右微偏
    const rc = g.recoil
    this.punch = rc.camY          // 快速上跳
    this.camTiltX = rc.camY * 0.6 // 相机倾斜
    this.camYaw = (Math.random() - 0.5) * rc.camYaw * 2 // 随机左右偏

    // 屏幕震感
    this.shake = rc.shakeAmp
    this.shakeDecay = 1 / rc.shakeFreq

    this.flash.intensity = 3
    this.muzzle.material.opacity = 1

    const from = this.player.gunGroup.getWorldPosition(new THREE.Vector3())
    const baseDir = this.player.camera.getWorldDirection(new THREE.Vector3())
    const dir0 = baseDir.clone()
    const targets = this.callbacks.getEnemies()
    let anyHit = false

    for (let i = 0; i < g.pellets; i++) {
      const dir = g.pellets === 1 ? dir0 : this.jitter(dir0, g.spread)
      const hit = this.rayHit(from, dir, targets)
      if (hit) {
        anyHit = true
        this.callbacks.onHit(hit.root, g.damage)
        this.setTracer(from, hit.point)
        this.spawnSparks(hit.point)
      }
    }
    if (!anyHit) {
      const assist = this.aimAssist(from, baseDir, targets)
      if (assist) {
        this.callbacks.onHit(assist.root, g.damage * (g.pellets === 1 ? 1 : 0.6))
        this.setTracer(from, assist.point)
        this.spawnSparks(assist.point)
      } else {
        this.setTracer(from, from.clone().add(baseDir.clone().multiplyScalar(100)))
      }
    }
    this.callbacks.onShot()
  }

  jitter(dir, spread) {
    const v = dir.clone()
    const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize()
    const up = new THREE.Vector3().crossVectors(right, dir).normalize()
    const a = Math.random() * Math.PI * 2
    const r = Math.random() * spread
    v.addScaledVector(right, Math.cos(a) * r)
    v.addScaledVector(up, Math.sin(a) * r)
    return v.normalize()
  }

  rayHit(from, dir, targets) {
    const ray = new THREE.Raycaster(from, dir, 0, 200)
    const hitList = ray.intersectObjects(targets, true)
    if (hitList.length === 0) return null
    const root = this.findEnemyRoot(hitList[0].object)
    return root ? { root, point: hitList[0].point } : null
  }

  findEnemyRoot(obj) {
    let o = obj
    while (o) { if (o.userData.enemyGroup) return o; o = o.parent }
    return null
  }

  aimAssist(from, dir, targets) {
    const maxAngle = THREE.MathUtils.degToRad(CONFIG.weapon.assistAngle)
    let best = null
    let bestAngle = maxAngle
    for (const t of targets) {
      const root = this.findEnemyRoot(t)
      if (!root) continue
      const c = root.position.clone()
      c.y += root.userData.centerHeight || 0.5
      const to = c.sub(from)
      const d = to.length()
      if (d > CONFIG.weapon.assistRange || d < 0.5) continue
      const angle = to.normalize().angleTo(dir)
      if (angle <= bestAngle) { bestAngle = angle; best = { root, point: from.clone().add(dir.clone().multiplyScalar(d)) } }
    }
    return best
  }

  spawnSparks(point) {
    for (const s of this.sparks) {
      if (s.life > 0) continue
      s.life = 0.35
      s.mesh.position.copy(point)
      s.mesh.visible = true
      const a = Math.random() * Math.PI * 2
      const sp = 3 + Math.random() * 5
      s.vel.set(Math.cos(a) * sp, 2 + Math.random() * 4, Math.sin(a) * sp)
      break
    }
  }

  setTracer(from, end) {
    if (this.tracer) { this.scene.remove(this.tracer); this.tracer.geometry.dispose(); this.tracer.material.dispose() }
    this.tracer = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([from, end]),
      new THREE.LineBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.9 })
    )
    this.tracer.userData.life = 0.05
    this.scene.add(this.tracer)
  }

  reload() {
    const g = this.gun
    if (g.reloading || g.ammo === g.magSize) return
    g.reloading = true
    g.reloadTimer = g.reloadTime
    this.callbacks.onReload?.()
  }

  updateAds(dt) {
    const g = this.gun
    const target = this.adsHeld && g.adsFov ? g.adsFov : CONFIG.view.fov
    this.player.camera.fov += (target - this.player.camera.fov) * Math.min(1, dt * 10)
    this.player.camera.updateProjectionMatrix()
  }

  update(dt) {
    const g = this.gun
    if (g.auto && this.mouseHeld) this.fire()
    this.updateAds(dt)
    if (g.fireTimer > 0) g.fireTimer -= dt

    // 相机后坐恢复（三角洲风格：快回正）
    this.punch = Math.max(0, this.punch - dt * 0.6)
    this.player.cameraRecoilY = this.punch

    // 相机倾斜恢复（快）
    this.camTiltX *= Math.max(0, 1 - dt * 8)
    this.player.cameraTiltX = this.camTiltX

    // 相机偏转恢复（快）
    this.camYaw *= Math.max(0, 1 - dt * 7)
    this.player.cameraYawOffset = this.camYaw

    // 屏幕震感衰减（更快）
    if (this.shake > 0) {
      this.shake *= Math.max(0, 1 - dt * this.shakeDecay * 10)
      if (this.shake < 0.0001) this.shake = 0
    }
    this.player.screenShake = this.shake

    const ads = this.adsHeld && g.adsFov
    const sway = ads ? Math.sin(performance.now() * 0.0022) * 0.004 : 0
    const targetY = (ads ? -0.18 : -0.4) + sway
    const targetX = (ads ? 0 : 0.25) + Math.cos(performance.now() * 0.0019) * 0.003
    this.player.gunGroup.position.x += (targetX - this.player.gunGroup.position.x) * Math.min(1, dt * 12)
    this.player.gunGroup.position.y += (targetY - this.player.gunGroup.position.y) * Math.min(1, dt * 12)

    // 枪身后坐恢复（线性，持续0.4秒）
    const targetZ = -0.5
    const kickAmt = g.recoil.kick || 0.1
    if (this.kick > 0) {
      this.kick = Math.max(0, this.kick - dt * 2.5)  // 0.4s 恢复
      this.player.gunGroup.position.z = targetZ + this.kick * kickAmt
    } else {
      this.player.gunGroup.position.z += (targetZ - this.player.gunGroup.position.z) * Math.min(1, dt * 12)
    }

    this.flash.intensity = Math.max(0, this.flash.intensity - dt * 40)
    this.muzzle.material.opacity = Math.max(0, this.muzzle.material.opacity - dt * 22)
    for (const s of this.sparks) {
      if (s.life <= 0) continue
      s.life -= dt
      s.mesh.position.addScaledVector(s.vel, dt)
      s.vel.y -= 12 * dt
      s.mesh.material.opacity = s.life / 0.35
      if (s.life <= 0) s.mesh.visible = false
    }
    if (g.reloading) {
      g.reloadTimer -= dt
      this.player.gunGroup.rotation.x = -0.6 * Math.sin(Math.min(1, 1 - g.reloadTimer / g.reloadTime) * Math.PI)
      if (g.reloadTimer <= 0) { g.ammo = g.magSize; g.reloading = false; this.player.gunGroup.rotation.x = 0 }
    }
    if (this.tracer) {
      this.tracer.userData.life -= dt
      if (this.tracer.userData.life <= 0) {
        this.scene.remove(this.tracer)
        this.tracer.geometry.dispose()
        this.tracer.material.dispose()
        this.tracer = null
      }
    }
  }

  applyUpgrade(key) {
    const g = this.gun
    if (key === 'damage') g.damage += 5
    if (key === 'rof') g.fireInterval = Math.max(0.15, g.fireInterval * 0.8)
    if (key === 'mag') g.magSize += 3
  }

  getAmmoText() { const g = this.gun; return g.reloading ? '换弹中…' : `${g.magSize} / ${g.ammo}` }
  getReloadHint() { return this.gun.reloading ? '换弹中…' : 'R 换弹' }
  getGunName() { return this.gun.label }
  getGunDisplay() { return `${this.gun.label}（${this.keys.indexOf(this.active) + 1}）` }

  resetUpgrades() {
    this.unlocked = new Set(['pistol'])
    this.guns = { pistol: this.makeGun('pistol') }
    this.active = 'pistol'
    this.updateModel()
  }
}
