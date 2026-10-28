import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { WeaponModel } from './weapon-model.js'
import { WeaponEffects } from './weapon-effects.js'
import { PlayerBallistics, ballisticDamage } from './player-ballistics.js'
import { aimHit, jitter, launchShot, AimRecoil } from './weapon-aim.js'
import { enemyRoot } from './ballistic-targets.js'
import { upgradePreview, applyGunUpgrade } from './weapon-upgrades.js'

export class WeaponSystem {
  constructor(scene, player, callbacks = {}) {
    Object.assign(this, { scene, player, callbacks })
    this.enabled = false
    this.unlocked = new Set(['pistol'])
    this.guns = { pistol: this.makeGun('pistol') }
    this.active = 'pistol'
    this.mouseHeld = this.adsHeld = false
    this.shotId = this.triggerBuffer = 0
    this.model = new WeaponModel(player)
    this.effects = new WeaponEffects(scene, player)
    this.effects.setMuzzleProvider((out) => this.model.getMuzzleWorld(out))
    this.recoil = new AimRecoil(player.camera)
    this.ballistics = new PlayerBallistics({
      ...callbacks,
      onTrace: (id, from, to, bullet) => this.effects.updateProjectile(id, from, to, bullet),
      onRemove: (id) => this.effects.removeProjectile(id),
      onImpact: (hit, damage) => {
        if (hit.root) this.callbacks.onHit?.(hit.root, damage, hit)
        this.effects.spawnSparks(hit.point, { flesh: !!hit.root, normal: hit.normal })
        this.callbacks.onImpact?.(hit)
      },
    })
    this.updateModel()
    if (typeof window !== 'undefined') {
      this.model.preload(this.keys, () => this.updateModel())
      this.bindInput()
    }
  }

  bindInput() {
    window.addEventListener('mousedown', (event) => {
      if (!this.canAct()) return
      if (event.button === 0) {
        this.mouseHeld = true
        if (!this.fire() && !this.gun.auto && !this.gun.reloading && this.gun.ammo > 0 &&
            this.gun.fireTimer < 0.1) this.triggerBuffer = 0.1
      }
      if (event.button === 2) this.adsHeld = true
    })
    window.addEventListener('mouseup', (event) => {
      if (event.button === 0) this.mouseHeld = false
      if (event.button === 2) this.adsHeld = false
    })
    window.addEventListener('contextmenu', (event) => event.preventDefault())
    window.addEventListener('keydown', (event) => {
      if (!this.canAct()) return
      if (event.code === 'KeyR') this.reload()
      const number = Number(event.key)
      if (number >= 1 && number <= 3) this.switchTo(this.keys[number - 1])
    })
    window.addEventListener('blur', () => this.clearInput())
  }

  get keys() { return ['pistol', 'shotgun', 'rifle'] }
  get gun() { return this.guns[this.active] }
  canSimulate() { return this.enabled && !!this.player.controls?.isLocked }
  canAct() { return this.canSimulate() && this.player.motor?.canFire !== false }
  setEnabled(enabled) { if (!enabled) this.clearInput(); this.enabled = !!enabled }

  clearInput() {
    this.mouseHeld = this.adsHeld = false
    this.triggerBuffer = 0
    this.player.camera.fov = CONFIG.view.fov
    this.player.camera.updateProjectionMatrix()
    this.model.syncPerspective()
  }

  makeGun(key) {
    const definition = CONFIG.weapon[key]
    return { key, label: definition.label, damage: definition.damage, fireInterval: definition.fireInterval,
      magSize: definition.magSize, reloadTime: definition.reloadTime, ammo: definition.magSize,
      pellets: definition.pellets || 1, spread: definition.spread || 0,
      auto: !!definition.auto, adsFov: definition.adsFov || 0,
      reloading: false, reloadTimer: 0, fireTimer: 0, bloom: 0, shotAge: 0 }
  }

  switchTo(key, force = false) {
    if ((!force && !this.canAct()) || !this.unlocked.has(key) || this.active === key) return false
    this.gun.reloading = false
    this.gun.reloadTimer = 0
    this.active = key
    this.clearInput()
    this.player.gunGroup.rotation.x = 0
    this.updateModel()
    this.callbacks.onWeaponChange?.(this.gun)
    return true
  }

  unlock(key) {
    if (!this.keys.includes(key) || this.unlocked.has(key)) return false
    this.unlocked.add(key)
    this.guns[key] = this.makeGun(key)
    this.switchTo(key, true)
    return true
  }

  updateModel() { this.model.update(this.active) }

  getSpread(gun = this.gun) {
    const definition = CONFIG.weapon[gun.key], motor = this.player.motor
    const moving = motor?.velocity && Math.hypot(motor.velocity.x, motor.velocity.z) > 0.2
    const sprinting = this.player.keys?.ShiftLeft || this.player.keys?.ShiftRight
    return ((definition.spread ?? definition.baseSpread ?? 0) + gun.bloom +
      (moving ? definition.movingSpread || 0 : 0) + (sprinting ? definition.sprintSpread || 0 : 0) +
      (motor?.grounded === false ? definition.airSpread || 0 : 0)) *
      (this.adsHeld ? definition.adsSpreadMult ?? 1 : 1)
  }

  damageAtDistance(gun, distance) { return ballisticDamage({ ...CONFIG.weapon[gun.key], damage: gun.damage }, distance) }
  jitter(direction, spread, index, pellets) { return jitter(direction, spread, index, pellets) }
  rayHit(from, direction, targets) { return aimHit(from, direction, targets, this.callbacks) }
  findEnemyRoot(object) { return enemyRoot(object) }
  beginProjectileFrame() { this.ballistics.beginFrame() }
  updateProjectiles(dt) { if (this.canSimulate()) this.ballistics.update(dt) }
  clearProjectiles() { this.ballistics.clear() }

  fire() {
    if (!this.canAct()) return false
    const gun = this.gun, definition = CONFIG.weapon[gun.key]
    if (gun.reloading || gun.fireTimer > 0) return false
    if (gun.ammo <= 0) { this.reload(); return false }
    gun.ammo--
    gun.fireTimer = gun.fireInterval
    gun.shotAge = this.triggerBuffer = 0
    const shotId = ++this.shotId
    launchShot(this, gun, shotId, !!this.updating)
    this.effects.onShot(gun.key, { ads: this.adsHeld })
    this.recoil.kick(definition, this.adsHeld)
    const base = definition.spread ?? definition.baseSpread ?? 0
    gun.bloom = Math.min(Math.max(0, definition.maxSpread - base), gun.bloom + definition.spreadPerShot)
    this.callbacks.onShot?.(gun.key)
    return true
  }

  reload() {
    if (!this.canAct()) return false
    const gun = this.gun
    if (gun.reloading || gun.ammo === gun.magSize) return false
    gun.reloading = true
    gun.reloadTimer = gun.reloadTime
    this.triggerBuffer = 0
    this.callbacks.onReload?.()
    return true
  }

  update(dt) {
    if (!this.canSimulate() || !(dt > 0)) return
    this.recoil.update(dt)
    this.triggerBuffer = Math.max(0, this.triggerBuffer - dt)
    for (const gun of Object.values(this.guns)) {
      gun.fireTimer -= dt
      gun.shotAge += dt
      const definition = CONFIG.weapon[gun.key]
      const recoveryTime = Math.min(dt, Math.max(0, gun.shotAge - definition.spreadRecoveryDelay))
      gun.bloom = Math.max(0, gun.bloom - definition.spreadRecovery * recoveryTime)
    }
    const gun = this.gun
    this.updating = true
    if (gun.auto && this.mouseHeld || this.triggerBuffer > 0) {
      const overdue = Math.max(0, -gun.fireTimer)
      if (this.fire()) gun.fireTimer = Math.max(0, gun.fireTimer - overdue)
    }
    this.updating = false
    for (const entry of Object.values(this.guns)) entry.fireTimer = Math.max(0, entry.fireTimer)
    const targetFov = this.adsHeld && gun.adsFov ? gun.adsFov : CONFIG.view.fov
    this.player.camera.fov += (targetFov - this.player.camera.fov) * Math.min(1, dt * 10)
    this.player.camera.updateProjectionMatrix()
    this.model.syncPerspective()
    if (gun.reloading) {
      gun.reloadTimer = Math.max(0, gun.reloadTimer - dt)
      this.player.gunGroup.rotation.x = -0.6 * Math.sin((1 - gun.reloadTimer / gun.reloadTime) * Math.PI)
      if (gun.reloadTimer === 0) {
        gun.ammo = gun.magSize; gun.reloading = false; this.player.gunGroup.rotation.x = 0
      }
    }
    this.effects.update(dt, { weaponKey: gun.key, ads: this.adsHeld, reloading: gun.reloading,
      sprinting: !!(this.player.keys?.ShiftLeft || this.player.keys?.ShiftRight) })
  }

  getUpgradePreview(key, gunKey = this.active) { return upgradePreview(this.guns[gunKey], key) }
  applyUpgrade(key, gunKey = this.active) { return applyGunUpgrade(this.guns[gunKey], key) }
  getAmmoText() { const gun = this.gun; return gun.reloading ? '换弹中…' : gun.ammo + ' / ' + gun.magSize }
  getReloadHint() { return this.gun.reloading ? '换弹中…' : 'R 换弹 · 备用弹无限' }
  getGunName() { return this.gun.label }
  getGunDisplay() { return this.gun.label + '（' + (this.keys.indexOf(this.active) + 1) + '）' }

  resetUpgrades() {
    this.setEnabled(false)
    this.clearProjectiles()
    this.recoil.reset()
    this.unlocked = new Set(['pistol'])
    this.guns = { pistol: this.makeGun('pistol') }
    this.active = 'pistol'
    this.shotId = 0
    this.effects.reset()
    this.player.gunGroup.rotation.x = 0
    this.updateModel()
  }
}
