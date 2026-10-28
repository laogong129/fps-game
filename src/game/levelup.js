import { CONFIG } from '../config.js'
import { PickupField } from './pickups.js'

const weaponUpgrades = new Set(['damage', 'rof', 'mag'])

export class LevelUp {
  constructor(scene, player, weapon, onUpgrade = () => {}, onLevelUp = () => {}, world = null) {
    this.player = player
    this.weapon = weapon
    this.onUpgrade = onUpgrade
    this.onLevelUp = onLevelUp
    this.field = new PickupField(scene, player, world)
    this.reset()
  }

  get pickups() { return this.field.pickups }
  get heals() { return this.field.heals }

  reset() {
    this.clearPickups()
    this.clearHeals()
    this.xp = 0
    this.level = 1
    this.xpNext = CONFIG.levelup.xpForLevel
    this.pendingUpgrades = 0
    this.upgrades = []
    this.currentChoices = null
    this.offersShown = 0
    this.weaponOffered = false
    this.totalXp = 0
  }

  gainXp(amount, pos) {
    for (let i = 0; i < Math.floor(amount); i++) this.spawnPickup(pos)
  }

  spawnPickup(pos, value = 1) { return this.field.spawnExperience(pos, value) }
  spawnHeal(kind, pos) { return this.field.spawnHeal(kind, pos) }
  clearPickups() { this.field.clearPickups() }
  clearHeals() { this.field.clearHeals() }
  updateHeals(dt, playerPos, onHealFloat = () => {}) {
    this.field.updateHeals(dt, playerPos, onHealFloat)
  }

  update(dt, playerPos) {
    this.addXp(this.field.updateExperience(dt, playerPos))
  }

  collectAll() {
    const amount = this.pickups.reduce((sum, p) => sum + p.userData.value, 0)
    this.clearPickups()
    this.addXp(amount)
    return amount
  }

  addXp(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return
    const gained = Math.floor(amount)
    this.xp += gained
    this.totalXp += gained
    while (this.xp >= this.xpNext) this.levelUp()
  }

  levelUp() {
    if (this.xp < this.xpNext) return false
    this.xp -= this.xpNext
    this.xpNext = Math.floor(this.xpNext * CONFIG.levelup.xpGrowth)
    this.level++
    this.pendingUpgrades++
    this.player.healOrGrow(CONFIG.player.hpPerLevel)
    this.player.hp = this.player.maxHp
    this.onLevelUp(this.level)
    return true
  }

  describeChoice(choice) {
    const { key } = choice
    if (weaponUpgrades.has(key)) {
      const gunKey = this.weapon.active
      const preview = this.weapon.getUpgradePreview(key, gunKey)
      return preview ? { ...choice, ...preview, key, gunKey } : null
    }
    if (choice.unlock) {
      if (this.weapon.unlocked.has(key)) return null
      return { ...choice, description: `解锁并切换到${CONFIG.weapon[key].label}，各枪独立强化。` }
    }
    if (key === 'speed') {
      const speed = (this.player.moveSpeed || CONFIG.player.moveSpeed) * this.player.speedMult
      return { ...choice, description: `移动速度 ${speed.toFixed(1)} → ${(speed * 1.1).toFixed(1)} 米/秒` }
    }
    if (key === 'hp') {
      const boost = CONFIG.levelup.hpBoost
      return { ...choice, description: `最大生命 ${this.player.maxHp} → ${this.player.maxHp + boost}，同时恢复 ${boost} 点生命。` }
    }
    return null
  }

  rollChoices(n = 3) {
    if (this.pendingUpgrades <= 0 || n <= 0) return []
    if (this.currentChoices) return this.currentChoices
    const pool = CONFIG.levelup.choices.map((c) => this.describeChoice(c)).filter(Boolean)
    const out = []
    if (this.offersShown === 1 && !this.weaponOffered) {
      const locked = pool.filter((c) => c.unlock)
      if (locked.length) {
        const pick = locked[Math.floor(Math.random() * locked.length)]
        out.push(pool.splice(pool.indexOf(pick), 1)[0])
      }
    }
    while (out.length < n && pool.length) {
      out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0])
    }
    this.offersShown++
    if (out.some((c) => c.unlock)) this.weaponOffered = true
    this.currentChoices = out
    return out
  }

  applyChoice(choiceOrKey) {
    if (this.pendingUpgrades <= 0 || !this.currentChoices) return false
    const key = typeof choiceOrKey === 'string' ? choiceOrKey : choiceOrKey?.key
    const choice = this.currentChoices.find((c) => c.key === key)
    if (!choice) return false
    if (typeof choiceOrKey === 'object' && choiceOrKey.gunKey !== undefined && choiceOrKey.gunKey !== choice.gunKey) return false
    let applied = false
    if (weaponUpgrades.has(key)) applied = this.weapon.applyUpgrade(key, choice.gunKey)
    else if (choice.unlock) applied = this.weapon.unlock(key)
    else if (key === 'speed') { this.player.speedMult *= 1.1; applied = true }
    else if (key === 'hp') { this.player.healOrGrow(CONFIG.levelup.hpBoost); applied = true }
    if (!applied) return false
    this.pendingUpgrades--
    this.currentChoices = null
    this.upgrades.push(`${choice.name}：${choice.description}`)
    this.onUpgrade(key, choice)
    return true
  }

  getHudData() {
    return { xp: this.xp, xpNext: this.xpNext, level: this.level, pendingUpgrades: this.pendingUpgrades }
  }
}
