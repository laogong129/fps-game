import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
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

    // 预加载三把枪的 GLB 模型
    this.models = {}
    this.muzzleOffset = 0.15
    for (const key of this.keys) {
      const cfg = CONFIG.gunModel[key]
      if (!cfg) continue
      new GLTFLoader().load(cfg.file, (gltf) => {
        this.models[key] = gltf.scene
        if (this.active === key) this.updateModel()
      }, undefined, (err) => console.warn('加载枪模失败', key, err))
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
    if (old) {
      this.player.gunGroup.remove(old)
      // 方块兜底几何可释放；GLB 克隆与源模型共享几何，不能 dispose
      if (!old.userData.__glb) old.traverse((o) => o.isMesh && o.geometry.dispose())
    }
    const cfg = CONFIG.gunModel[this.active]
    const src = this.models[this.active]
    const group = new THREE.Group()
    // 真实 GLB 枪模（含缩放/旋转/位置）
    if (src && cfg) {
      const clone = src.clone(true)
      const [rx, ry, rz] = cfg.rot
      clone.scale.setScalar(cfg.scale)
      clone.rotation.set((rx * Math.PI) / 180, (ry * Math.PI) / 180, (rz * Math.PI) / 180)
      clone.position.set(...cfg.pos)
      clone.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false } })
      group.add(clone)
      group.userData.__glb = true
    } else if (CONFIG.gunShape[this.active]) {
      // 模型未加载完成前的方块兜底
      for (const part of CONFIG.gunShape[this.active]) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(...part.size), makeToon(part.color))
        m.position.set(...part.pos)
        group.add(m)
      }
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
    this.kick = 1
    this.flash.intensity = 3
    this.muzzle.material.opacity = 1

    // 判定射线从相机出发（严格过准星），视觉曳光从枪口出发（观感自然）
    const rayFrom = this.player.camera.getWorldPosition(new THREE.Vector3())
    const tracerFrom = this.player.gunGroup.getWorldPosition(new THREE.Vector3())
    const baseDir = this.player.camera.getWorldDirection(new THREE.Vector3())
    const dir0 = baseDir.clone()
    const targets = this.callbacks.getEnemies()
    let anyHit = false

    for (let i = 0; i < g.pellets; i++) {
      const dir = g.pellets === 1 ? dir0 : this.jitter(dir0, g.spread)
      const hit = this.rayHit(rayFrom, dir, targets)
      if (hit) {
        anyHit = true
        this.callbacks.onHit(hit.root, g.damage, hit)
        this.setTracer(tracerFrom, hit.point)
        this.spawnSparks(hit.point)
      }
    }
    if (!anyHit) {
      this.setTracer(tracerFrom, tracerFrom.clone().add(baseDir.clone().multiplyScalar(100)))
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
    const h = hitList[0]
    const root = this.findEnemyRoot(h.object)
    // mesh + face 用来读蒙皮权重判命中部位，见 enemy.js 的 hitZoneAt
    return root ? { root, point: h.point, mesh: h.object, face: h.face } : null
  }

  findEnemyRoot(obj) {
    let o = obj
    while (o) { if (o.userData.enemyGroup) return o; o = o.parent }
    return null
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

    // 枪身后坐（0.4秒恢复）
    const targetZ = -0.5
    if (this.kick > 0) {
      this.kick = Math.max(0, this.kick - dt * 2.5)
      this.player.gunGroup.position.z = targetZ + this.kick * 0.08
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
