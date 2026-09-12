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
    this.tracer = null

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
    const from = this.player.gunGroup.getWorldPosition(new THREE.Vector3())
    const dir = this.player.camera.getWorldDirection(new THREE.Vector3())
    const ray = new THREE.Raycaster(from.clone(), dir, 0, 200)
    const targets = this.callbacks.getEnemies()
    const hits = ray.intersectObjects(targets, false)
    let endPoint
    if (hits.length > 0) {
      const hit = hits[0]
      endPoint = hit.point
      this.callbacks.onHit(hit.object, this.damage)
    } else {
      endPoint = from.clone().add(dir.clone().multiplyScalar(100))
    }
    this.tracer = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([from, endPoint]),
      new THREE.LineBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.9 })
    )
    this.tracer.userData.life = 0.05
    this.scene.add(this.tracer)
    this.callbacks.onShot()
  }

  reload() {
    if (this.reloading || this.ammo === this.magSize) return
    this.reloading = true
    this.reloadTimer = this.reloadTime
    this.callbacks.onShot()
  }

  update(dt) {
    if (this.fireTimer > 0) this.fireTimer -= dt
    if (this.reloading) {
      this.reloadTimer -= dt
      if (this.reloadTimer <= 0) {
        this.ammo = this.magSize
        this.reloading = false
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
