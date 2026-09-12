import * as THREE from 'three'
import { CONFIG } from '../config.js'

export class Weapon {
  constructor(scene, player, callbacks) {
    this.scene = scene
    this.player = player
    this.callbacks = callbacks
    this.damage = CONFIG.weapon.damage
    this.fireInterval = CONFIG.weapon.fireInterval
    this.magSize = CONFIG.weapon.magSize
    this.reloadTime = CONFIG.weapon.reloadTime
    this.ammo = this.magSize
    this.reloading = false
    this.reloadTimer = 0
    this.fireTimer = 0
    this.kick = 0
    this.tracer = null

    this.flash = new THREE.PointLight(0xffcc66, 0, 6)
    this.flash.position.set(0, 0, -0.4)
    this.player.gunGroup.add(this.flash)

    window.addEventListener('mousedown', (e) => {
      if (e.button === 0 && this.player.controls?.isLocked) this.fire()
    })
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyR') this.reload()
    })
  }

  fire() {
    if (this.reloading || this.fireTimer > 0 || this.ammo <= 0) {
      if (this.ammo <= 0 && !this.reloading) this.reload()
      return
    }
    this.ammo--
    this.fireTimer = this.fireInterval
    this.kick = 1
    this.flash.intensity = 3
    const from = this.player.gunGroup.getWorldPosition(new THREE.Vector3())
    const dir = this.player.camera.getWorldDirection(new THREE.Vector3())
    const ray = new THREE.Raycaster(from, dir, 0, 200)
    const targets = this.callbacks.getEnemies()
    let endPoint = null
    const hitList = ray.intersectObjects(targets, true)
    if (hitList.length > 0) {
      endPoint = hitList[0].point
      this.callbacks.onHit(this.findEnemyRoot(hitList[0].object), this.damage)
    } else {
      const assist = this.aimAssist(from, dir, targets)
      if (assist) {
        endPoint = assist.point
        this.callbacks.onHit(assist.root, this.damage)
      } else {
        endPoint = from.clone().add(dir.clone().multiplyScalar(100))
      }
    }
    this.tracer = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([from, endPoint]),
      new THREE.LineBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.9 })
    )
    this.tracer.userData.life = 0.05
    this.scene.add(this.tracer)
    this.callbacks.onShot()
  }

  findEnemyRoot(obj) {
    let o = obj
    while (o) {
      if (o.userData.enemyGroup) return o
      o = o.parent
    }
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
      if (angle <= bestAngle) {
        bestAngle = angle
        best = { root: t, point: from.clone().add(dir.clone().multiplyScalar(d)) }
      }
    }
    return best
  }

  reload() {
    if (this.reloading || this.ammo === this.magSize) return
    this.reloading = true
    this.reloadTimer = this.reloadTime
    this.callbacks.onShot()
  }

  update(dt) {
    if (this.fireTimer > 0) this.fireTimer -= dt
    if (this.kick > 0) {
      this.kick = Math.max(0, this.kick - dt / 0.08)
      this.player.gunGroup.position.z = -0.5 + this.kick * 0.12
    } else {
      this.player.gunGroup.position.z = -0.5
    }
    this.flash.intensity = Math.max(0, this.flash.intensity - dt * 40)
    if (this.reloading) {
      this.reloadTimer -= dt
      this.player.gunGroup.rotation.x = -0.6 * Math.sin(Math.min(1, 1 - this.reloadTimer / this.reloadTime) * Math.PI)
      if (this.reloadTimer <= 0) {
        this.ammo = this.magSize
        this.reloading = false
        this.player.gunGroup.rotation.x = 0
      }
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
    if (key === 'damage') this.damage += 5
    if (key === 'rof') this.fireInterval = Math.max(0.15, this.fireInterval * 0.8)
    if (key === 'mag') this.magSize += 3
  }

  getAmmoText() {
    if (this.reloading) return '换弹中…'
    return `${this.magSize} / ${this.ammo}`
  }
}
