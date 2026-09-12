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
    this.heals = []
    this.pickupGeo = new THREE.SphereGeometry(CONFIG.pickup.radius, 12, 12)
    this.pickupMat = new THREE.MeshStandardMaterial({
      color: 0xf1c40f,
      emissive: 0x8a6d00,
    })
    this.healGeo = new THREE.SphereGeometry(1, 12, 12)
    this.healMats = {
      small: new THREE.MeshStandardMaterial({ color: CONFIG.heal.small.color, emissive: 0x551111 }),
      tank: new THREE.MeshStandardMaterial({ color: CONFIG.heal.tank.color, emissive: 0x554400 }),
    }
  }

  gainXp(amount, pos) {
    for (let i = 0; i < amount; i++) this.spawnPickup(pos)
  }

  spawnPickup(pos) {
    if (this.pickups.length >= CONFIG.pickup.maxOrbs) return
    const m = new THREE.Mesh(this.pickupGeo, this.pickupMat)
    m.position.copy(pos)
    m.position.y = 0.5
    m.position.x += (Math.random() - 0.5) * 1.2
    m.position.z += (Math.random() - 0.5) * 1.2
    m.userData.age = 0
    this.scene.add(m)
    this.pickups.push(m)
  }

  spawnHeal(kind, pos) {
    const def = CONFIG.heal[kind]
    const m = new THREE.Mesh(this.healGeo, this.healMats[kind])
    m.scale.setScalar(def.radius)
    m.position.copy(pos)
    m.position.y = 0.6
    this.scene.add(m)
    this.heals.push({ mesh: m, kind })
  }

  updateHeals(dt, playerPos, onHealFloat) {
    const pp = playerPos.clone()
    pp.y = 0
    for (let i = this.heals.length - 1; i >= 0; i--) {
      const h = this.heals[i]
      const pc = h.mesh.position.clone()
      pc.y = 0
      const d = pp.distanceTo(pc)
      if (d < CONFIG.pickup.collectRange) {
        const before = this.player.hp
        const value = CONFIG.heal[h.kind].value
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + value)
        onHealFloat(h.mesh.position, this.player.hp - before)
        this.scene.remove(h.mesh)
        this.heals.splice(i, 1)
      }
    }
  }

  clearHeals() {
    for (const h of this.heals) this.scene.remove(h.mesh)
    this.heals.length = 0
  }

  update(dt, playerPos) {
    const pp = playerPos.clone()
    pp.y = 0
    const { magnetRange, collectRange, maxOrbs } = CONFIG.pickup
    let total = this.pickups.length
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const p = this.pickups[i]
      p.userData.age += dt
      if (total > maxOrbs && p.userData.age > 2) {
        this.scene.remove(p)
        this.pickups.splice(i, 1)
        total--
        continue
      }
      const pc = p.position.clone()
      pc.y = 0
      const toPlayer = pp.sub(pc)
      const dist = toPlayer.length()
      if (dist < collectRange) {
        this.scene.remove(p)
        this.pickups.splice(i, 1)
        total--
        this.xp += 1
        if (this.xp >= this.xpNext) this.levelUp()
      } else if (dist < magnetRange) {
        const pull = 10 + (1 - dist / magnetRange) * 26
        p.position.addScaledVector(toPlayer, pull * dt / dist)
        p.position.y += (0.5 - p.position.y) * 0.15
      }
    }
  }

  levelUp() {
    this.xp -= this.xpNext
    this.xpNext = Math.floor(this.xpNext * CONFIG.levelup.xpGrowth)
    this.level++
    const gain = CONFIG.player.hpPerLevel
    this.player.healOrGrow(gain)
    this.player.hp = this.player.maxHp
    this.onLevelUp(this.level)
  }

  applyChoice(key) {
    if (key === 'speed') this.player.speedMult *= 1.1
    else if (key === 'hp') this.player.healOrGrow(CONFIG.levelup.hpBoost)
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
