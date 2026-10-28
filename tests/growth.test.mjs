import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { LevelUp } from '../src/game/levelup.js'
import { CONFIG } from '../src/config.js'

function setup(onLevelUp) {
  const player = {
    hp: 100, maxHp: 100, speedMult: 1, moveSpeed: 6,
    healOrGrow(amount) { this.maxHp += amount; this.hp += amount },
  }
  const weapon = {
    active: 'pistol', unlocked: new Set(['pistol']), cappedRof: false, applied: [],
    getUpgradePreview(key, gunKey) {
      if (key === 'rof' && this.cappedRof) return null
      return { name: `${gunKey} ${key}`, description: `${gunKey} 30 → 35`, before: 30, after: 35, gunKey }
    },
    applyUpgrade(key, gunKey) {
      if (!this.getUpgradePreview(key, gunKey)) return false
      this.applied.push({ key, gunKey })
      return true
    },
    unlock(key) {
      if (this.unlocked.has(key)) return false
      this.unlocked.add(key)
      this.active = key
      return true
    },
  }
  const scene = new THREE.Scene()
  return { player, weapon, scene, levelup: new LevelUp(scene, player, weapon, undefined, onLevelUp) }
}

function withRandom(value, callback) {
  const original = Math.random
  Math.random = () => value
  try { return callback() } finally { Math.random = original }
}

test('each experience orb measures distance from the player independently', () => {
  const { levelup } = setup()
  const playerPos = new THREE.Vector3(10, 1.7, 0)
  const a = levelup.spawnPickup(new THREE.Vector3())
  const b = levelup.spawnPickup(new THREE.Vector3())
  a.position.set(9, 0.5, 0)
  b.position.set(9, 0.5, 0)
  levelup.update(0, playerPos)
  assert.equal(levelup.totalXp, 2)
  assert.equal(levelup.pickups.length, 0)
  assert.deepEqual(playerPos.toArray(), [10, 1.7, 0])
})

test('processing a nearby orb never collects an out-of-range orb', () => {
  const { levelup } = setup()
  const far = levelup.spawnPickup(new THREE.Vector3())
  const near = levelup.spawnPickup(new THREE.Vector3())
  far.position.set(2, 0.5, 0)
  near.position.set(8, 0.5, 0)
  levelup.update(0, new THREE.Vector3(10, 1.7, 0))
  assert.equal(levelup.totalXp, 0)
  assert.equal(levelup.pickups.length, 2)
})

test('visual orb limit preserves the full reward and clear recovery collects it once', () => {
  const { levelup } = setup()
  levelup.gainXp(250, new THREE.Vector3(0, 0, -20))
  assert.equal(levelup.pickups.length, CONFIG.pickup.maxOrbs)
  assert.equal(levelup.pickups.reduce((sum, p) => sum + p.userData.value, 0), 250)
  assert.equal(levelup.collectAll(), 250)
  assert.equal(levelup.totalXp, 250)
  assert.equal(levelup.level, 7)
  assert.equal(levelup.xp, 48)
  assert.equal(levelup.pendingUpgrades, 6)
  assert.equal(levelup.collectAll(), 0)
  assert.equal(levelup.totalXp, 250)
})

test('merged rewards refresh an expiring visual orb instead of losing new experience', () => {
  const { levelup } = setup()
  levelup.gainXp(CONFIG.pickup.maxOrbs, new THREE.Vector3())
  for (const orb of levelup.pickups) orb.userData.age = CONFIG.pickup.ttl - 0.1
  const merged = levelup.spawnPickup(new THREE.Vector3(), 50)
  assert.equal(merged.userData.age, 0)
  assert.equal(merged.userData.value, 51)
  levelup.update(0.2, new THREE.Vector3(100, 1.7, 100))
  assert.equal(levelup.pickups.length, 1)
  assert.equal(levelup.collectAll(), 51)
})

test('25 simultaneous experience points queue two separately claimable choices', () => {
  const levels = []
  const { levelup, player } = setup((level) => levels.push(level))
  levelup.addXp(25)
  assert.equal(levelup.level, 3)
  assert.equal(levelup.pendingUpgrades, 2)
  assert.equal(player.maxHp, 120)
  assert.equal(player.hp, 120)
  assert.deepEqual(levels, [2, 3])
  const first = levelup.rollChoices(99).find((c) => c.key === 'damage')
  assert.equal(levelup.applyChoice(first), true)
  assert.equal(levelup.pendingUpgrades, 1)
  assert.equal(levelup.applyChoice(first), false)
  const second = levelup.rollChoices(99).find((c) => c.key === 'speed')
  assert.equal(levelup.applyChoice(second), true)
  assert.equal(levelup.pendingUpgrades, 0)
  assert.equal(levelup.upgrades.length, 2)
  assert.equal(levelup.rollChoices().length, 0)
})

test('offering refreshes cannot consume the early new-weapon guarantee', () => {
  const { levelup } = setup()
  levelup.addXp(25)
  withRandom(0, () => {
    const first = levelup.rollChoices()
    assert.equal(first.some((c) => c.unlock), false)
    assert.strictEqual(levelup.rollChoices(), first)
    assert.strictEqual(levelup.rollChoices(), first)
    assert.equal(levelup.offersShown, 1)
    assert.equal(levelup.applyChoice(first[0]), true)
    const second = levelup.rollChoices()
    assert.equal(second.some((c) => c.unlock), true)
    assert.equal(levelup.offersShown, 2)
  })
})

test('capped or already unlocked choices are not offered', () => {
  const { levelup, weapon } = setup()
  weapon.cappedRof = true
  weapon.unlocked.add('shotgun')
  levelup.addXp(10)
  const choices = levelup.rollChoices(99)
  assert.equal(choices.some((c) => c.key === 'rof' || c.key === 'shotgun'), false)
  assert.equal(choices.some((c) => c.key === 'rifle'), true)
})

test('an offered gun upgrade retains its target and invalid picks cost no reward', () => {
  const { levelup, weapon } = setup()
  levelup.addXp(10)
  const card = levelup.rollChoices(99).find((c) => c.key === 'damage')
  assert.equal(card.gunKey, 'pistol')
  weapon.active = 'rifle'
  assert.equal(levelup.applyChoice({ ...card, gunKey: 'rifle' }), false)
  assert.equal(levelup.applyChoice('unknown'), false)
  assert.equal(levelup.pendingUpgrades, 1)
  assert.equal(levelup.applyChoice(card), true)
  assert.deepEqual(weapon.applied, [{ key: 'damage', gunKey: 'pistol' }])
})

test('a newly invalidated upgrade cannot consume a queued choice', () => {
  const { levelup, weapon } = setup()
  levelup.addXp(10)
  const card = levelup.rollChoices(99).find((c) => c.key === 'rof')
  weapon.cappedRof = true
  assert.equal(levelup.applyChoice(card), false)
  assert.equal(levelup.pendingUpgrades, 1)
})

test('experience lives for 20 seconds and healing for 10 seconds with a 3-second fade', () => {
  assert.equal(CONFIG.pickup.ttl, 20)
  assert.equal(CONFIG.heal.small.ttl, 10)
  assert.equal(CONFIG.heal.small.fadeStart, 7)
  assert.equal(CONFIG.heal.tank.ttl, 10)
  assert.equal(CONFIG.heal.tank.fadeStart, 7)
  const { levelup } = setup()
  levelup.spawnPickup(new THREE.Vector3())
  levelup.spawnHeal('small', new THREE.Vector3())
  const far = new THREE.Vector3(100, 1.7, 100)
  levelup.update(19, far)
  levelup.updateHeals(9, far)
  assert.equal(levelup.pickups.length, 1)
  assert.equal(levelup.heals.length, 1)
  assert.ok(levelup.heals[0].mesh.material.opacity > 0)
  assert.ok(levelup.heals[0].mesh.material.opacity < 1)
  levelup.update(1, far)
  levelup.updateHeals(1, far)
  assert.equal(levelup.pickups.length, 0)
  assert.equal(levelup.heals.length, 0)
})

test('full-health players retain a heal until needed, restoring only missing health', () => {
  const { levelup, player } = setup()
  const pos = new THREE.Vector3()
  levelup.spawnHeal('tank', pos)
  const healed = []
  levelup.updateHeals(1, pos, (_, amount) => healed.push(amount))
  assert.equal(levelup.heals.length, 1)
  assert.deepEqual(healed, [])
  player.hp = 95
  levelup.updateHeals(1, pos, (_, amount) => healed.push(amount))
  assert.equal(levelup.heals.length, 0)
  assert.equal(player.hp, 100)
  assert.deepEqual(healed, [5])
})

test('reset clears run rewards and pickups, disposing cloned materials only', () => {
  const { levelup } = setup()
  levelup.addXp(25)
  const card = levelup.rollChoices(99)[0]
  levelup.applyChoice(card)
  const orb = levelup.spawnPickup(new THREE.Vector3())
  const heal = levelup.spawnHeal('small', new THREE.Vector3())
  let materialDisposals = 0
  let geometryDisposals = 0
  orb.material.addEventListener('dispose', () => materialDisposals++)
  heal.material.addEventListener('dispose', () => materialDisposals++)
  orb.geometry.addEventListener('dispose', () => geometryDisposals++)
  levelup.reset()
  assert.equal(materialDisposals, 2)
  assert.equal(geometryDisposals, 0)
  assert.equal(levelup.level, 1)
  assert.equal(levelup.pendingUpgrades, 0)
  assert.equal(levelup.totalXp, 0)
  assert.equal(levelup.offersShown, 0)
  assert.equal(levelup.weaponOffered, false)
  assert.equal(levelup.upgrades.length + levelup.pickups.length + levelup.heals.length, 0)
})
