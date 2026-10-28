import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { GameSession } from '../src/game/session.js'
import { LevelUp } from '../src/game/levelup.js'
import { CONFIG } from '../src/config.js'

function setup() {
  let game
  const calls = { player: 0, weapon: 0, spawner: 0, pickups: 0, heals: 0, floats: 0, environment: 0, collect: 0, finish: 0, train: 0, resetTrain: 0 }
  const player = {
    hp: 100, maxHp: 100, speedMult: 1, moveSpeed: 6, pos: new THREE.Vector3(), keys: {}, lastDamage: null,
    motor: { position: new THREE.Vector3(), supportId: null, traversal: null },
    get footPosition() { return this.motor.position },
    controls: { isLocked: false, unlock() { this.isLocked = false } },
    clearInput() { this.keys = {}; this.jumpQueued = false },
    setEnabled(enabled) { this.enabled = enabled; if (!enabled) this.clearInput() },
    safeLock() { this.controls.isLocked = true; game.handleLock() },
    healOrGrow(amount) { this.maxHp += amount; this.hp += amount },
    reset() {
      this.hp = this.maxHp = 100; this.speedMult = 1; this.lastDamage = null; this.clearInput()
      this.pos.set(0, 1.7, 0); this.motor.position.set(0, 0, 0); this.motor.supportId = null; this.motor.traversal = null
    },
    update() { calls.player++ },
  }
  const weapon = {
    active: 'pistol', unlocked: new Set(['pistol']), mouseHeld: false, shots: 0,
    clearInput() { this.mouseHeld = this.adsHeld = false },
    setEnabled(enabled) { this.enabled = enabled; if (!enabled) this.clearInput() },
    resetUpgrades() { this.active = 'pistol'; this.unlocked = new Set(['pistol']); this.clearInput() },
    getUpgradePreview(key, gunKey) { return { gunKey, name: `${gunKey} ${key}`, description: '30 → 35' } },
    applyUpgrade() { return true },
    unlock(key) { if (this.unlocked.has(key)) return false; this.unlocked.add(key); this.active = key; return true },
    update() { calls.weapon++; if (this.mouseHeld) this.shots++ },
    getAmmoText() { return '8 / 8' }, getReloadHint() { return 'R 换弹' }, getGunDisplay() { return this.active },
  }
  const train = {
    position: new THREE.Vector3(-42, 0, 0), timer: 20, tripId: 0, active: false,
    reset() { calls.resetTrain++; this.position.set(-42, 0, 0); this.timer = 20; this.tripId = 0 },
    setActive(active) { this.active = active },
    update(dt, actors) { calls.train++; this.timer -= dt; this.position.x += dt * 8; this.lastActors = actors; this.onTick?.() },
    getHudData() { return { trainPhase: 'dwell', trainStatus: '西站停靠', trainDoorsOpen: true } },
  }
  const spawner = {
    wave: 0, phase: 'preparation', preparationTimer: 15, enemies: [], remainingSpawns: 0, markers: 0,
    clear() { this.wave = 0; this.phase = 'preparation'; this.preparationTimer = 15; this.enemies = []; this.remainingSpawns = this.markers = 0 },
    startWave() {
      if (this.phase !== 'preparation') return false
      this.wave++; this.phase = 'combat'; this.remainingSpawns = 1
      game.onWaveStarted({ wave: this.wave, directions: '住宅街', hint: '怪物正在追击' })
      return true
    },
    update(dt) { calls.spawner++; if (this.phase === 'preparation') this.preparationTimer -= dt; this.onTick?.() },
    getGroups() { return this.enemies.map((enemy) => enemy.group) },
    isWaveClear() { return this.phase === 'combat' && !this.remainingSpawns && !this.markers && this.enemies.every((e) => e.dead) },
    finishWave() { calls.finish++; this.phase = this.wave === CONFIG.goal.winWave ? 'complete' : 'preparation'; this.preparationTimer = 15 },
    getHudData() { return { wave: this.wave, phase: this.phase, preparationRemaining: this.preparationTimer } },
  }
  const hud = {
    offers: [], results: [], notices: [], hideOverlays() {}, showPause(show) { this.paused = show },
    showLevelUp(choices, pick, pending) { this.offers.push({ choices, pick, pending }) },
    showResult(result) { this.results.push(result) }, notify(...message) { this.notices.push(message) },
  }
  const floats = { items: [], spawn(...item) { this.items.push(item) }, update() { calls.floats++ }, clear() { this.items = [] } }
  const actors = [{ id: 'player', footPosition: player.footPosition, isPlayer: true }]
  const arena = { halfSize: 60, getActors() { return actors }, update() { calls.environment++ } }
  const levelup = new LevelUp(new THREE.Scene(), player, weapon)
  for (const [method, counter] of [['update', 'pickups'], ['updateHeals', 'heals'], ['collectAll', 'collect']]) {
    const original = levelup[method].bind(levelup)
    levelup[method] = (...args) => { calls[counter]++; return original(...args) }
  }
  game = new GameSession({ player, weapon, spawner, levelup, train, hud, floats, arena })
  game.start()
  return { game, player, weapon, spawner, levelup, train, hud, floats, calls, actors }
}

function combat(f) { assert.equal(f.game.startNextWave(), true); assert.equal(f.game.state, 'combat') }
function clearWave(f) { f.spawner.remainingSpawns = f.spawner.markers = 0; f.spawner.enemies.forEach((enemy) => { enemy.dead = true }) }
function claimAll(f) { while (f.game.state === 'levelup') { const offer = f.hud.offers.at(-1); offer.pick(offer.choices[0]) } }

for (const state of ['idle', 'paused', 'levelup', 'won', 'dead']) {
  test(`${state} freezes combat, train motion, support, pickups and run time`, () => {
    const f = setup()
    combat(f)
    f.train.timer = 9
    f.train.position.x = 7
    f.player.motor.position.set(1, 3.5, 0)
    f.player.motor.supportId = 'train'
    f.levelup.spawnPickup(new THREE.Vector3(20, 0, 20))
    f.levelup.spawnHeal('small', new THREE.Vector3(20, 0, 20))
    f.game.setState(state)
    const before = { ...f.calls }
    f.game.update(30)
    assert.deepEqual(f.calls, before)
    assert.equal(f.game.stats.elapsed, 0)
    assert.equal(f.train.timer, 9)
    assert.equal(f.train.position.x, 7)
    assert.deepEqual(f.player.motor.position.toArray(), [1, 3.5, 0])
    assert.equal(f.player.motor.supportId, 'train')
    assert.equal(f.levelup.pickups[0].userData.age, 0)
    assert.equal(f.levelup.heals[0].mesh.userData.age, 0)
    assert.equal(f.player.enabled || f.weapon.enabled || f.train.active, false)
  })
}

test('lost pointer lock pauses before simulation; resume clears input and reactivates the train', () => {
  const f = setup()
  combat(f)
  f.player.keys.KeyW = true; f.weapon.mouseHeld = true; f.player.controls.isLocked = false
  f.game.update(1)
  assert.equal(f.game.state, 'paused')
  assert.equal(f.game.stats.elapsed, 0)
  assert.equal(f.calls.player + f.calls.weapon + f.calls.spawner + f.calls.train, 0)
  f.weapon.mouseHeld = true; f.player.keys.KeyW = true
  f.game.resume()
  assert.equal(f.game.state, 'combat')
  assert.deepEqual(f.player.keys, {})
  assert.equal(f.weapon.mouseHeld, false)
  assert.equal(f.train.active, true)
  f.game.update(0.1)
  assert.equal(f.weapon.shots, 0)
  assert.equal(f.calls.train, 1)
  assert.equal(f.train.lastActors, f.actors)
})

test('consecutive upgrades claim one reward each and freeze the moving train while choosing', () => {
  const f = setup()
  combat(f)
  f.levelup.addXp(25)
  f.game.update(0.1)
  assert.equal(f.game.state, 'levelup')
  assert.equal(f.hud.offers[0].pending, 2)
  assert.equal(f.train.active, false)
  const before = { ...f.calls }, trainX = f.train.position.x
  f.game.update(10)
  assert.deepEqual(f.calls, before)
  assert.equal(f.train.position.x, trainX)
  f.hud.offers[0].pick(f.hud.offers[0].choices[0])
  assert.equal(f.game.state, 'levelup')
  assert.equal(f.levelup.pendingUpgrades, 1)
  assert.equal(f.hud.offers[1].pending, 1)
  claimAll(f)
  assert.equal(f.game.state, 'combat')
  assert.equal(f.levelup.upgrades.length, 2)
  assert.equal(f.levelup.pendingUpgrades, 0)
  assert.equal(f.player.controls.isLocked && f.train.active, true)
})

test('same-frame lethal enemy damage defeats final clear and pickup healing', () => {
  const f = setup()
  combat(f)
  f.spawner.wave = CONFIG.goal.winWave
  f.levelup.addXp(9)
  f.levelup.spawnPickup(f.player.pos)
  f.levelup.spawnHeal('tank', f.player.pos)
  clearWave(f)
  f.spawner.onTick = () => { f.player.hp = 0; f.player.lastDamage = 'melee' }
  f.game.update(0.1)
  assert.equal(f.game.state, 'dead')
  assert.equal(f.game.result.result, 'player_dead')
  assert.equal(f.game.result.deathCause, 'melee')
  assert.equal(f.levelup.level, 1)
  assert.equal(f.calls.collect + f.calls.finish + f.calls.pickups + f.calls.heals, 0)
  assert.equal(f.hud.offers.length, 0)
  f.game.update(10)
  assert.equal(f.hud.results.length, 1)
})

test('lethal train impact is checked before player motion, enemies and pending reward healing', () => {
  const f = setup()
  combat(f)
  f.levelup.addXp(10)
  clearWave(f)
  f.train.onTick = () => { f.player.hp = 0; f.player.lastDamage = 'train'; f.game.stats.trainHits++ }
  f.game.update(0.1)
  assert.equal(f.game.state, 'dead')
  assert.equal(f.calls.player + f.calls.spawner + f.calls.collect + f.calls.finish, 0)
  assert.equal(f.levelup.pendingUpgrades, 1)
  assert.equal(f.game.result.deathCause, 'train')
  assert.equal(f.game.result.trainHits, 1)
  assert.equal(f.game.result.waves[0].outcome, 'player_dead')
})

test('clear recovers all experience and pauses preparation and train while rewards are selected', () => {
  const f = setup()
  combat(f)
  f.levelup.spawnPickup(new THREE.Vector3(25, 0, 25), 25)
  clearWave(f)
  f.game.update(0.1)
  assert.equal(f.calls.collect, 1)
  assert.equal(f.calls.finish, 1)
  assert.equal(f.levelup.pickups.length, 0)
  assert.equal(f.levelup.pendingUpgrades, 2)
  assert.equal(f.spawner.phase, 'preparation')
  assert.equal(f.game.state, 'levelup')
  const timer = f.train.timer
  f.game.update(30)
  assert.equal(f.spawner.preparationTimer, 15)
  assert.equal(f.train.timer, timer)
  claimAll(f)
  assert.equal(f.game.state, 'preparation')
  f.game.update(1)
  assert.equal(f.spawner.preparationTimer, 14)
  assert.equal(f.game.startNextWave(), true)
  assert.equal(f.spawner.wave, 2)
})

test('final victory requires Boss, escorts, queue and warnings clear and emits StatsV2 only once', () => {
  const f = setup()
  combat(f)
  f.spawner.wave = CONFIG.goal.winWave
  f.game.onWaveStarted({ wave: f.spawner.wave, directions: '街区', hint: 'Boss' })
  const boss = { dead: false, group: { position: new THREE.Vector3(0, 0, 20) } }
  f.spawner.enemies = [boss]; f.spawner.remainingSpawns = 0
  f.game.update(0.1); assert.equal(f.game.state, 'combat')
  boss.dead = true; f.spawner.markers = 1
  f.game.update(0.1); assert.equal(f.game.state, 'combat')
  f.spawner.markers = 0; f.spawner.remainingSpawns = 1
  f.game.update(0.1); assert.equal(f.game.state, 'combat')
  f.spawner.remainingSpawns = 0
  f.game.update(0.1)
  assert.equal(f.game.state, 'won')
  assert.equal(f.spawner.phase, 'complete')
  assert.equal(f.hud.results.length, 1)
  assert.equal(f.game.result.version, 2)
  assert.equal(f.game.result.map, 'twilight-railway')
  assert.equal(f.game.result.waves.at(-1).outcome, 'cleared')
  assert.equal('control' in f.game.result || 'leaks' in f.game.result || 'controlLost' in f.game.result, false)
  const elapsed = f.game.stats.elapsed, timer = f.train.timer
  f.game.update(10)
  assert.equal(f.game.stats.elapsed, elapsed)
  assert.equal(f.train.timer, timer)
  assert.equal(f.hud.results.length, 1)
})

test('restart resets train, passenger support, stats, rewards, health and held input', () => {
  const f = setup()
  combat(f)
  f.game.stats.kills = 20; f.game.stats.trainHits = 2; f.game.stats.trainKills = 4
  f.game.stats.weapons.rifle.damage = 500; f.game.stats.elapsed = 60
  f.train.position.x = 25; f.train.timer = 2; f.train.tripId = 4
  f.player.motor.supportId = 'train'; f.player.lastDamage = 'train'
  f.levelup.addXp(25); f.levelup.spawnPickup(new THREE.Vector3()); f.levelup.spawnHeal('small', new THREE.Vector3())
  f.floats.spawn('stale'); f.weapon.unlock('rifle')
  f.game.finish('player_dead'); f.game.start()
  assert.equal(f.game.state, 'preparation')
  assert.equal(f.game.result, null)
  assert.equal(f.spawner.wave, 0)
  assert.equal(f.spawner.preparationTimer, 15)
  assert.equal(f.game.stats.elapsed + f.game.stats.kills + f.game.stats.trainHits + f.game.stats.trainKills, 0)
  assert.equal(f.game.stats.weapons.rifle.damage, 0)
  assert.equal(f.levelup.pendingUpgrades + f.levelup.pickups.length + f.levelup.heals.length, 0)
  assert.equal(f.levelup.level, 1)
  assert.equal(f.player.hp, 100)
  assert.equal(f.player.motor.supportId, null)
  assert.equal(f.train.position.x, -42)
  assert.equal(f.train.timer, 20)
  assert.equal(f.train.tripId, 0)
  assert.equal(f.calls.resetTrain, 2)
  assert.deepEqual([...f.weapon.unlocked], ['pistol'])
  assert.deepEqual(f.player.keys, {})
  assert.equal(f.floats.items.length, 0)
})
