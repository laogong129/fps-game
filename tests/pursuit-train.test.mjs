import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { CONFIG } from '../src/config.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { WorldNavigation } from '../src/game/world-navigation.js'
import { CharacterMotor } from '../src/game/character-motor.js'
import { createRailwayLayout } from '../src/game/railway-layout.js'
import { TrainController } from '../src/game/train.js'
import { updatePursuit, enemyBody } from '../src/game/pursuit.js'

const point = (x, y = 0, z = 0) => new THREE.Vector3(x, y, z)

function setup(enemyPosition, playerPosition, type = 'small') {
  const layout = createRailwayLayout()
  const world = new WorldCollision(layout.shapes, { bounds: layout.bounds })
  const navigation = new WorldNavigation(world, layout)
  const train = new TrainController(new THREE.Scene(), world)
  const dimensions = enemyBody(type, CONFIG.enemy[type])
  const enemy = {
    type, def: CONFIG.enemy[type], ...dimensions, dead: false, state: 'seek', stateTimer: 0,
    fireTimer: 0, ringTimer: 0, summonTimer: 0, chargeDir: point(0),
    group: new THREE.Group(), motor: new CharacterMotor(world, { ...dimensions, position: enemyPosition }),
  }
  enemy.group.position.copy(enemy.motor.position)
  const playerMotor = new CharacterMotor(world, { radius: 0.35, height: 1.8, position: playerPosition })
  const player = {
    motor: playerMotor,
    get footPosition() { return playerMotor.position },
    get supportId() { return playerMotor.supportId },
    get pos() { return playerMotor.position.clone().add(point(0, 1.7)) },
  }
  const calls = { shots: 0, rings: 0, summons: 0 }
  const api = { world, navigation, train, player,
    fireProjectile() { calls.shots++ }, bossRing() { calls.rings++ }, summon() { calls.summons++ } }
  return { world, navigation, train, enemy, player, calls, api }
}

function tick(fixture, seconds, { movingTrain = true } = {}) {
  const frames = Math.ceil(seconds * 30)
  for (let frame = 0; frame < frames; frame++) {
    const f = fixture
    if (movingTrain) f.train.update(1 / 30, [
      { id: 'enemy', footPosition: f.enemy.motor.position, radius: f.enemy.radius, height: f.enemy.height, supportId: f.enemy.motor.supportId },
      { id: 'player', footPosition: f.player.footPosition, radius: 0.35, height: 1.8, supportId: f.player.supportId },
    ])
    f.player.motor.update(1 / 30)
    updatePursuit(f.enemy, 1 / 30, f.api)
  }
}

test('a small enemy enters the stopped car through a real station door and reaches the passenger', () => {
  const f = setup(point(-48, 1, -4), point(-48, 1, 0))
  assert.equal(f.player.supportId, 'train')
  tick(f, 5)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 0.7,
    `relative distance ${f.enemy.motor.position.distanceTo(f.player.footPosition).toFixed(3)}`)
  assert.ok(f.world.capsuleClear(f.enemy.motor.position, f.enemy.radius, f.enemy.height))
})

test('a small enemy navigates up the real roof dock and boards the stopped roof', () => {
  const f = setup(point(-16, 0, 10), point(-48, 3.5, 0))
  tick(f, 23)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(Math.abs(f.enemy.motor.position.y - 3.5) < 0.05)
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 1)
})

test('a roof pursuit from the opposite platform uses the real ramp instead of crossing through the car', () => {
  const f = setup(point(-48, 1, -4), point(-48, 3.5, 0))
  tick(f, 50, { movingTrain: false })
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 1,
    `opposite-platform enemy at ${f.enemy.motor.position.toArray()}`)
})

test('onboard pursuit closes the relative distance while both riders move with the train', () => {
  const f = setup(point(-50, 1), point(-46, 1))
  f.train.update(26)
  tick(f, 4)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.equal(f.player.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 0.7,
    `relative distance ${f.enemy.motor.position.distanceTo(f.player.footPosition).toFixed(3)}`)
  assert.ok(Math.abs(f.enemy.motor.position.y - 1) < 0.05)
})

test('a small enemy climbs through a real roof hatch to follow a passenger on top', () => {
  const f = setup(point(-48, 1), point(-48, 3.5))
  tick(f, 7)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 1)
  assert.equal(f.enemy.motor.traversal, null)
})

test('a small enemy descends the hatch and follows a passenger into the car', () => {
  const f = setup(point(-48, 3.5), point(-48, 1))
  tick(f, 7)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 1)
  assert.equal(f.enemy.motor.traversal, null)
})

test('a Boss intercepts at a ground route and attacks the train instead of boarding', () => {
  const f = setup(point(40, 0, 20), point(-48, 3.5), 'boss')
  tick(f, 3)
  assert.notEqual(f.enemy.motor.supportId, 'train')
  assert.equal(f.enemy.pathGoal.y, 0)
  assert.equal(Math.abs(f.enemy.pathGoal.z), 18)
  assert.ok(f.calls.shots > 0)
  assert.ok(f.calls.rings > 0)
})

test('a stopped interior enemy can leave through the station door and continue the pursuit', () => {
  const f = setup(point(-48, 1), point(-48, 1, -4))
  tick(f, 5)
  assert.notEqual(f.enemy.motor.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 0.8)
})

test('the actual 1.136-radius tank can board through the widened car door', () => {
  const f = setup(point(-48, 1, -4), point(-48, 1, 0), 'tank')
  assert.ok(Math.abs(f.enemy.radius - 1.136) < 0.00001)
  tick(f, 7)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 0.8,
    `tank did not enter: ${f.enemy.motor.position.toArray()}`)
  assert.ok(f.world.capsuleClear(f.enemy.motor.position, f.enemy.radius, f.enemy.height))
})

test('the tank crosses the actual gangway between both car interiors without clipping walls', () => {
  const f = setup(point(-50, 1, 0), point(-34, 1, 0), 'tank')
  tick(f, 15)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 0.8,
    `tank stuck at gangway: ${f.enemy.motor.position.toArray()}`)
  assert.ok(f.world.capsuleClear(f.enemy.motor.position, f.enemy.radius, f.enemy.height))
})

test('a heavy onboard enemy waits for the station instead of forcing itself through the hatch', () => {
  const f = setup(point(-48, 1), point(-48, 3.5), 'tank')
  f.train.update(26)
  tick(f, 3)
  assert.equal(f.enemy.motor.traversal, null)
  assert.equal(f.enemy.motor.supportId, 'train')
  assert.ok(Math.abs(f.enemy.motor.position.y - 1) < 0.03)
  assert.ok(f.world.capsuleClear(f.enemy.motor.position, f.enemy.radius, f.enemy.height))
})

test('at a long stop the tank uses the external roof dock rather than an undersized hatch', () => {
  const f = setup(point(-48, 1), point(-48, 3.5), 'tank')
  tick(f, 90, { movingTrain: false })
  assert.equal(f.enemy.motor.traversal, null)
  assert.equal(f.enemy.motor.supportId, 'train',
    `heavy at ${f.enemy.motor.position.toArray()}, path ${f.enemy.path?.map((p) => p.toArray()).join(';')}`)
  assert.ok(f.enemy.motor.position.distanceTo(f.player.footPosition) < 1,
    `heavy roof approach ended at ${f.enemy.motor.position.toArray()}`)
})
