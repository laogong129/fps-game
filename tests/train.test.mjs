import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { TrainController } from '../src/game/train.js'
import { createTrainLayout, TRAIN_DEFAULTS } from '../src/game/train-layout.js'
import { sweptTrainContact } from '../src/game/train-contact.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { CharacterMotor } from '../src/game/character-motor.js'
import { createRailwayLayout } from '../src/game/railway-layout.js'

const point = (x, y = 0, z = 0) => new THREE.Vector3(x, y, z)
const ground = { id: 'ground', type: 'box', x: 0, y: -0.2, z: 0, width: 120, height: 0.4, depth: 120, solid: true, walkable: true }
const make = (options = {}, shapes = [ground]) => {
  const world = new WorldCollision(shapes, { bounds: 60 })
  return { world, train: new TrainController(new THREE.Scene(), world, options) }
}
const actor = (options = {}) => ({ id: 'actor', footPosition: point(-24), radius: 0.4, height: 1.7, maxHp: 100, ...options })

test('train dwells, warns, travels in both directions and never leaves the map', () => {
  const warnings = []
  const { train } = make({ onWarning: (data) => warnings.push(data) })
  assert.equal(train.phase, 'dwell')
  assert.ok(train.doorsOpen)
  train.update(20)
  assert.equal(train.phase, 'warning')
  assert.equal(train.timer, 6)
  assert.equal(warnings.length, 1)
  train.update(5.5)
  assert.equal(train.doorsOpen, false)
  train.update(0.5)
  assert.equal(train.phase, 'travel')
  assert.equal(train.tripId, 1)
  train.update(10.5)
  assert.equal(train.position.x, 42)
  assert.equal(train.phase, 'dwell')
  assert.equal(train.nextStopX, -42)
  train.update(36.5)
  assert.equal(train.position.x, -42)
  assert.equal(train.tripId, 2)
  assert.equal(train.phase, 'dwell')
  assert.ok(Math.abs(train.position.x) + train.config.halfLength <= 60)
})

test('an obstructed door stays open and delays departure until the person clears', () => {
  const { train, world } = make()
  const blocker = actor({ footPosition: point(-48, 1, -1.75) })
  train.update(25.5, [blocker])
  assert.equal(train.phase, 'warning')
  assert.ok(train.doorsOpen)
  assert.ok(train.blocked)
  train.update(5, [blocker])
  assert.equal(train.position.x, -42)
  assert.ok(train.doorsOpen)
  assert.equal(world.getBody('train').worldShapes.some((shape) => shape.door), false)
  blocker.footPosition.z = -4
  train.update(1.1, [blocker])
  assert.equal(train.phase, 'travel')
  assert.equal(train.doorsOpen, false)
  assert.ok(world.getBody('train').worldShapes.some((shape) => shape.door))
})

test('one large step cannot skip a front collision or apply damage twice in a trip', () => {
  const hits = []
  const { train } = make({ onHit: (event) => hits.push(event) })
  const player = actor({ isPlayer: true })
  train.update(26)
  train.update(1, [player])
  assert.equal(hits.length, 1)
  assert.equal(hits[0].damage, 80)
  assert.ok(Math.abs(hits[0].position.z) > train.config.halfWidth + player.radius)
  train.update(0.2, [player])
  assert.equal(hits.length, 1)
  assert.equal(hits[0].tripId, 1)
})

test('normal enemies die to a train while a Boss loses only thirty percent per trip', () => {
  const hits = []
  const { train } = make({ onHit: (event) => hits.push(event) })
  const small = actor({ id: 'small' })
  const boss = actor({ id: 'boss', isBoss: true, maxHp: 800, radius: 1.5, height: 3.8, footPosition: point(-23) })
  train.update(26)
  train.update(1, [small, boss])
  assert.equal(hits.length, 2)
  assert.equal(hits.find((hit) => hit.actor === small).kill, true)
  assert.equal(hits.find((hit) => hit.actor === boss).damage, 240)
  assert.equal(hits.find((hit) => hit.actor === boss).kill, false)
})

test('interior passengers, roof passengers and a rider with dynamic support are not collision victims', () => {
  const hits = []
  const { train, world } = make({ onHit: (event) => hits.push(event) })
  const people = [
    actor({ id: 'interior', footPosition: point(-48, 1) }),
    actor({ id: 'roof', footPosition: point(-48, 3.5) }),
    actor({ id: 'carried', footPosition: point(-44, 1), supportId: 'train' }),
  ]
  train.update(26)
  train.update(0.5, people)
  assert.equal(hits.length, 0)
  assert.equal(world.getBody('train').position.x, -38)
  assert.equal(world.getBody('train').previousPosition.x, -42)
  assert.equal(world.getBody('train').velocity.x, 8)
})

test('a person above the track is not hit merely because bridge and train share XZ', () => {
  const hit = sweptTrainContact(actor({ footPosition: point(-24, 6) }), point(-42), point(-34), TRAIN_DEFAULTS)
  assert.equal(hit, null)
  assert.ok(sweptTrainContact(actor({ footPosition: point(24) }), point(42), point(34), TRAIN_DEFAULTS))
})

test('a train stops before an unsafe crush instead of pushing a victim through a wall', () => {
  const hits = []
  const world = { setDynamicBody() {}, querySupport() { return null }, capsuleClear() { return false } }
  const train = new TrainController(new THREE.Scene(), world, { onHit: (event) => hits.push(event) })
  const player = actor({ isPlayer: true })
  train.update(26)
  train.update(1, [player])
  assert.equal(train.phase, 'emergency')
  assert.ok(train.position.x < -36.3)
  assert.equal(hits[0].position, null)
  assert.equal(hits[0].damage, 80)
  const stopped = train.position.x
  train.update(1, [player])
  assert.ok(train.position.x <= stopped + 0.02)
  assert.equal(hits.length, 1)
  train.update(1, [])
  assert.equal(train.phase, 'travel')
})

test('same-source car geometry contains an actual interior, door openings and shooting windows', () => {
  const { world, train } = make()
  assert.ok(world.capsuleClear(point(-48, 1), 0.4, 1.7))
  assert.ok(world.capsuleClear(point(-42, 1), 0.4, 1.7), 'the gangway joins both interiors')
  assert.equal(world.raycast(point(-46, 2.5, -4), point(-46, 2.5, 0)), null, 'window has no invisible glass wall')
  assert.ok(world.raycast(point(-46, 1.5, -4), point(-46, 1.5, 0)), 'solid wall below window blocks shots')
  assert.equal(world.raycast(point(-48, 2.1, -4), point(-48, 2.1, 0)), null, 'open door is passable')
  train.update(25.5)
  assert.ok(world.raycast(point(-48, 2.1, -4), point(-48, 2.1, 0)), 'closed door blocks shots')
  assert.ok(world.raycast(point(-46, 5, 0), point(-46, 2, 0)), 'solid roof blocks shots')
})

test('roof and floor are separate supports, hatch is open and ladders end on a safe roof surface', () => {
  const { world, train } = make()
  assert.equal(world.querySupport(point(-48, 3.6), { maxDrop: 0.3, maxRise: 0, radius: 0.35, height: 1.7 }).height, 3.5)
  assert.equal(world.querySupport(point(-48, 1.1), { maxDrop: 0.3, maxRise: 0, radius: 0.35, height: 1.7 }).height, 1)
  const ladders = train.getLadders()
  assert.equal(ladders.length, 2)
  for (const ladder of ladders) {
    assert.equal(ladder.bodyId, 'train')
    assert.ok(world.capsuleClear(ladder.top, 0.35, 1.7))
    assert.equal(world.querySupport(ladder.top, { maxDrop: 0.2, radius: 0.35, height: 1.7 }).height, 3.5)
    assert.equal(world.raycast(point(ladder.bottom.x, 5), point(ladder.bottom.x, 1.1)), null, 'hatch opening is real')
  }
})

test('station portals distinguish the interior from the roof and close while the train moves', () => {
  const { train } = make()
  assert.equal(train.getBoardingPortals().length, 5)
  const inside = train.getBoardingRoute(point(-48, 1, -5), point(-48, 1, 0))
  const roof = train.getBoardingRoute(point(-48, 3.5, 4), point(-48, 3.5, 0))
  assert.ok(inside.every((p) => p.y === 1))
  assert.ok(roof.every((p) => p.y === 3.5))
  train.update(26.5)
  assert.equal(train.getBoardingPortals().length, 0)
  assert.deepEqual(train.getBoardingRoute(point(0), point(0, 1)), [])
  assert.equal(train.getInterceptionTarget().x, 36)
})

test('heavy boarding routes keep the full radius plus wall thickness inside the car', () => {
  const { train } = make()
  const radius = 1.136
  const route = train.getBoardingRoute(point(-48, 1, -5), point(-48, 1, 1.5), radius)
  const limit = train.config.halfWidth - radius - 0.15
  assert.ok(Math.abs(route[1].z) <= limit + 0.00001)
  assert.ok(Math.abs(route[2].z) <= limit + 0.00001)
  assert.ok(train.layout.doors.every((door) => door.width > radius * 2))
})

test('reset restores train timing, station, trip identity, doors and moving body metadata', () => {
  const { train, world } = make()
  train.update(32)
  train.hitActors.add('old')
  train.reset()
  assert.equal(train.phase, 'dwell')
  assert.equal(train.timer, 20)
  assert.equal(train.tripId, 0)
  assert.equal(train.hitActors.size, 0)
  assert.equal(world.getBody('train').position.x, -42)
  assert.deepEqual(world.getBody('train').velocity.toArray(), [0, 0, 0])
  assert.ok(train.doorsOpen)
})

test('solid rendered train meshes share IDs, transforms and dimensions with collision descriptors', () => {
  const { train } = make()
  train.visuals.group.updateMatrixWorld(true)
  const solids = [...createTrainLayout().shapes, ...createTrainLayout().doors]
  for (const shape of solids) {
    const mesh = train.visuals.group.getObjectByName(shape.id)
    assert.ok(mesh)
    assert.equal(mesh.userData.solid, true)
    assert.deepEqual(mesh.position.toArray(), [shape.x, shape.y, shape.z])
    assert.equal(mesh.geometry.parameters.width, shape.width)
    assert.equal(mesh.geometry.parameters.height, shape.height)
    assert.equal(mesh.geometry.parameters.depth, shape.depth)
  }
})

test('the real character motor remains inside or on the roof while the car moves', () => {
  for (const height of [1, 3.5]) {
    const hits = []
    const { world, train } = make({ onHit: (event) => hits.push(event) })
    const motor = new CharacterMotor(world, { position: point(-48, height) })
    assert.equal(motor.supportId, 'train')
    train.update(26)
    for (let frame = 0; frame < 120; frame++) {
      train.update(1 / 60, [{ id: 'rider', footPosition: motor.position, supportId: motor.supportId, radius: motor.radius, height: motor.height }])
      motor.update(1 / 60)
    }
    assert.ok(Math.abs(motor.position.x - train.position.x + 6) < 0.02)
    assert.ok(Math.abs(motor.position.y - height) < 0.02)
    assert.equal(motor.supportId, 'train')
    assert.equal(hits.length, 0)
  }
})

test('the real ladder climb passes through its roof hatch and follows a moving car', () => {
  const { world, train } = make()
  const ladder = train.getLadders()[0]
  const motor = new CharacterMotor(world, { position: ladder.bottom })
  assert.ok(motor.startClimb(ladder.top, ladder.duration, ladder.bodyId, { waypoints: ladder.waypoints }))
  train.update(26)
  for (let frame = 0; frame < 120; frame++) {
    train.update(1 / 60, [{ id: 'rider', footPosition: motor.position, supportId: motor.supportId,
      rideBodyId: motor.traversal?.bodyId || motor.airborneBodyId, radius: motor.radius, height: motor.height }])
    motor.update(1 / 60)
  }
  assert.equal(motor.traversal, null)
  assert.ok(Math.abs(motor.position.y - 3.5) < 0.02)
  assert.ok(Math.abs(motor.position.x - train.position.x - (ladder.top.x + 42)) < 0.03)
  assert.equal(motor.supportId, 'train')
})

test('a real roof passenger safely passes under the actual six-meter footbridge', () => {
  const layout = createRailwayLayout()
  const { world, train } = make({}, layout.shapes)
  const motor = new CharacterMotor(world, { position: point(-48, 3.5) })
  train.update(26)
  for (let frame = 0; frame < 630; frame++) {
    train.update(1 / 60, [{ id: 'roof-rider', footPosition: motor.position, supportId: motor.supportId, radius: motor.radius, height: motor.height }])
    motor.update(1 / 60)
    assert.ok(world.capsuleClear(motor.position, motor.radius, motor.height))
  }
  assert.equal(train.phase, 'dwell')
  assert.ok(Math.abs(motor.position.x - 36) < 0.03)
  assert.ok(Math.abs(motor.position.y - 3.5) < 0.03)
  assert.equal(motor.supportId, 'train')
})

test('the real station platform cannot lead through a closed departure door', () => {
  const { world, train } = make({}, createRailwayLayout().shapes)
  const motor = new CharacterMotor(world, { position: point(-48, 1, -4) })
  train.update(25.5)
  assert.equal(train.doorsOpen, false)
  for (let frame = 0; frame < 60; frame++) motor.update(1 / 60, { move: point(0, 0, 1) })
  assert.ok(motor.position.z < -2)
  assert.notEqual(motor.supportId, 'train')
  assert.ok(world.capsuleClear(motor.position, motor.radius, motor.height))
})
