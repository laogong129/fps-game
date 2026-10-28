import test from 'node:test'
import assert from 'node:assert/strict'
import { Scene, Vector3 } from 'three'
import { WorldCollision } from '../src/game/world-collision.js'
import { CharacterMotor } from '../src/game/character-motor.js'
import { TrainController } from '../src/game/train.js'
import { sweptTrainContact, trainContainsRider } from '../src/game/train-contact.js'
import { TRAIN_DEFAULTS } from '../src/game/train-layout.js'

const v = (x = 0, y = 0, z = 0) => new Vector3(x, y, z)
const ground = { id: 'ground', type: 'box', x: 0, y: -0.1, z: 0, width: 120, height: 0.2, depth: 120 }

function setup(position = v(-48, 1)) {
  const world = new WorldCollision([ground])
  const hits = []
  const train = new TrainController(new Scene(), world, { onHit: (event) => hits.push(event) })
  train.update(26)
  const motor = new CharacterMotor(world, { radius: 0.5, height: 1.8, position })
  const actor = () => ({ id: 'player', isPlayer: true, maxHp: 100, footPosition: motor.position,
    supportId: motor.supportId, rideBodyId: motor.traversal?.bodyId || motor.airborneBodyId,
    radius: motor.radius, height: motor.height })
  const tick = (input = {}) => {
    train.update(1 / 60, [actor()])
    motor.update(1 / 60, input)
  }
  return { world, train, motor, hits, actor, tick }
}

test('actual upward and downward hatch climbs remain safe during travel in session update order', () => {
  for (const up of [true, false]) {
    const f = setup()
    const ladder = f.train.getLadders()[0]
    f.motor.reset(up ? ladder.bottom : ladder.top)
    assert.ok(f.motor.startClimb(up ? ladder.top : ladder.bottom, ladder.duration, 'train', {
      waypoints: up ? ladder.waypoints : ladder.downWaypoints,
    }))
    assert.equal(f.motor.supportId, null)
    for (let frame = 0; frame < 100; frame++) f.tick()
    assert.equal(f.hits.length, 0, up ? 'climbing up' : 'climbing down')
    assert.ok(Math.abs(f.motor.position.y - (up ? 3.5 : 1)) < 0.02)
    assert.equal(f.motor.supportId, 'train')
    assert.equal(f.motor.airborneBodyId, null)
    assert.ok(f.world.capsuleClear(f.motor.position, f.motor.radius, f.motor.height))
  }
})

test('actual car-interior jumping is safe while airborne and after hitting the ceiling', () => {
  const f = setup()
  let maxY = 0, protectedFrames = 0
  for (let frame = 0; frame < 60; frame++) {
    f.tick({ jump: frame === 0 })
    maxY = Math.max(maxY, f.motor.position.y)
    if (f.motor.position.y > 1.5) {
      assert.equal(f.motor.supportId, null)
      assert.equal(f.motor.airborneBodyId, 'train')
      assert.ok(trainContainsRider(f.actor(), f.train.position, f.train.config))
      protectedFrames++
    }
  }
  assert.ok(maxY > 1.5 && protectedFrames > 0, 'covers the original false-impact height')
  assert.equal(f.hits.length, 0)
  assert.ok(Math.abs(f.motor.position.x - f.train.position.x + 6) < 0.15)
  assert.equal(f.motor.supportId, 'train')
})

test('a passenger loses airborne identity after jumping beyond the actual car footprint', () => {
  const f = setup(v(-48, 3.5))
  f.tick({ jump: true, move: v(0, 0, 1), speed: 8 })
  assert.equal(f.motor.airborneBodyId, 'train')
  for (let frame = 0; frame < 20; frame++) f.tick({ move: v(0, 0, 1), speed: 8 })
  assert.ok(f.motor.position.z > f.train.config.halfWidth + 0.5)
  assert.equal(f.motor.supportId, null)
  assert.equal(f.motor.airborneBodyId, null)
  assert.equal(trainContainsRider(f.actor(), f.train.position, f.train.config), false)
})

test('an outsider jumping on the track has no passenger immunity and suffers the real impact', () => {
  const f = setup(v(-24, 0))
  for (let frame = 0; frame < 60; frame++) f.tick({ jump: frame === 0 })
  assert.equal(f.motor.airborneBodyId, null)
  assert.equal(f.hits.length, 1)
  assert.equal(f.hits[0].damage, 80)
})

test('stale airborne metadata outside the body cannot grant immunity to front or side impacts', () => {
  for (const position of [v(-24, 1.6), v(-40, 1.6, 2.2)]) {
    const actor = { footPosition: position, rideBodyId: 'train', radius: 0.5, height: 1.8 }
    assert.equal(trainContainsRider(actor, v(-42), TRAIN_DEFAULTS), false)
    assert.ok(sweptTrainContact(actor, v(-42), v(-34), TRAIN_DEFAULTS))
  }
})

test('reset and landing on static ground clear airborne carrier metadata', () => {
  const f = setup(v(-48, 3.5))
  f.tick({ jump: true })
  assert.equal(f.motor.airborneBodyId, 'train')
  f.motor.reset(v(-24, 0, 5))
  assert.equal(f.motor.airborneBodyId, null)
  assert.equal(f.motor.supportId, 'ground')
  f.motor.airborneBodyId = 'train'
  f.motor.update(1 / 60)
  assert.equal(f.motor.airborneBodyId, null)
})
