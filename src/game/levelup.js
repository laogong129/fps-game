import * as THREE from 'three'
import { CONFIG } from '../config.js'

export class LevelUp {
  constructor(scene, player, weapon, onUpgrade, onLevelUp) {
    this.scene = scene
    this.player = player
    this.weapon = weapon
    this.onUpgrade = onUpgrade
    this.onLevelUp = onLevelUp
    this.xp = 0
    this.level = 1
    this.xpNext = CONFIG.levelup.xpForLevel
    this.pickups = []
    this.pickupGeo = new THREE.SphereGeometry(CONFIG.pickup.radius, 12, 12)
    this.pickupMat = new THREE.MeshStandardMaterial({
      color: 0xf1c40f,
      emissive: 0x8a6d00,
    })
  }

  gainXp(amount, pos) {
    for (let i = 0; i < amount; i++) this.spawnPickup(pos)
  }

  spawnPickup(pos) {
    const m = new THREE.Mesh(this.pickupGeo, this.pickupMat)
    m.position.copy(pos)
    m.position.y = 0.5
    m.position.x += (Math.random() - 0.5) * 1.2
    m.position.z += (Math.random() - 0.5) * 1.2
    this.scene.add(m)
    this.pickups.push(m)
  }

  update(dt, playerPos) {
    const pp = playerPos.clone()
    pp.y = 0
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i]
      const pc = p.position.clone()
      pc.y = 0
      const toPlayer = pp.sub(pc)
      const dist = toPlayer.length()
      const { magnetRange, collectRange } = CONFIG.pickup
      if (dist < collectRange) {
        this.scene.remove(p)
        this.pickups.splice(i, 1)
        this.xp += 1
        if (this.xp >= this.xpNext) this.levelUp()
      } else if (dist < magnetRange) {
        p.position.add(toPlayer.normalize().multiplyScalar(8 * dt))
        p.position.y += (0.5 - p.position.y) * 0.1
      }
    }
  }

  levelUp() {
    this.xp -= this.xpNext
    this.xpNext = Math.floor(this.xpNext * CONFIG.levelup.xpGrowth)
    this.level++
    this.onLevelUp(this.level)
  }

  applyChoice(key) {
    if (key === 'speed') this.player.speedMult *= 1.1
    else if (key === 'hp') this.player.healOrGrow(20)
    else if (key === 'shotgun' || key === 'rifle') this.weapon.unlock(key)
    else this.weapon.applyUpgrade(key)
    this.onUpgrade(key)
  }

  rollChoices(n = 3) {
    const pool = CONFIG.levelup.choices.filter((c) => !c.unlock || !this.weapon.unlocked.has(c.key))
    const out = []
    for (let i = 0; i < n && pool.length; i++) {
      out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0])
    }
    return out
  }

  clearPickups() {
    for (const p of this.pickups) this.scene.remove(p)
    this.pickups.length = 0
  }

  getHudData() {
    return { xp: this.xp, xpNext: this.xpNext, level: this.level }
  }
}
