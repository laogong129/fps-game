import test from 'node:test'
import assert from 'node:assert/strict'
import { PerspectiveCamera, Scene, Vector3 } from 'three'
import { Player } from '../src/game/player.js'
import { CharacterMotor } from '../src/game/character-motor.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { createRailwayLayout } from '../src/game/railway-layout.js'
import { TrainController } from '../src/game/train.js'

const v = (x = 0, y = 0, z = 0) => new Vector3(x, y, z)

function setup(moving = false) {
  const layout = createRailwayLayout()
  const world = new WorldCollision(layout.shapes, { bounds: layout.bounds })
  const hits = []
  const train = new TrainController(new Scene(), world, { onHit: (hit) => hits.push(hit) })
  if (moving) train.update(26)
  const player = Object.assign(Object.create(Player.prototype), {
    motor: new CharacterMotor(world, { radius: 0.5, height: 1.8 }),
    keys: {}, jumpQueued: false, ladderLatch: null,
    enabled: true, controls: { isLocked: true },
    camera: new PerspectiveCamera(), pos: v(), spawn: v(-16, 0, -30),
    getLadders: () => train.getLadders(),
  })
  player.motor.reset(train.getLadders()[0].bottom.clone().add(v(0.58)))
  function tick(seconds, input = {}) {
    for (let frame = 0; frame < Math.ceil(seconds * 60); frame++) {
      train.update(1 / 60, [{ id: 'player', isPlayer: true, maxHp: 100,
        footPosition: player.footPosition, supportId: player.supportId,
        rideBodyId: player.motor.traversal?.bodyId || player.motor.airborneBodyId,
        radius: 0.5, height: 1.8 }])
      player.tryLadder()
      player.motor.update(1 / 60, input)
    }
  }
  return { player, train, world, hits, tick }
}

for (const moving of [false, true]) {
  test(`touching the real ${moving ? 'moving' : 'stopped'} ladder climbs without W or Space and stays at the exit`, () => {
    const f = setup(moving)
    assert.ok(f.player.motor.grounded)
    assert.equal(f.player.jumpQueued, false)
    assert.deepEqual(f.player.keys, {})
    assert.equal(f.player.tryLadder(), true)
    assert.equal(f.player.motor.canFire, false)
    f.tick(3)
    assert.equal(f.player.motor.traversal, null)
    assert.equal(f.player.supportId, 'train')
    assert.ok(Math.abs(f.player.footPosition.y - 3.5) < 0.02)
    assert.ok(f.world.capsuleClear(f.player.footPosition, 0.5, 1.8))
    assert.equal(f.hits.length, 0)
  })
}

test('leaving the ladder and touching it again descends once without an automatic return trip', () => {
  const f = setup()
  f.tick(2)
  f.tick(0.7, { move: v(1), speed: 2 })
  assert.equal(f.player.ladderLatch, null)
  f.player.motor.reset(f.train.getLadders()[0].top)
  assert.equal(f.player.tryLadder(), true)
  f.tick(3)
  assert.equal(f.player.motor.traversal, null)
  assert.ok(Math.abs(f.player.footPosition.y - 1) < 0.02)
  assert.equal(f.player.supportId, 'train')
  assert.equal(f.hits.length, 0)
})

test('a distant, airborne or wrong-floor character does not get pulled into a ladder', () => {
  const f = setup()
  f.player.motor.reset(v(-48, 1))
  assert.equal(f.player.tryLadder(), false)
  f.player.motor.reset(f.train.getLadders()[0].bottom)
  f.player.motor.grounded = false
  assert.equal(f.player.tryLadder(), false)
  f.player.motor.position.y = 2
  f.player.motor.grounded = true
  assert.equal(f.player.tryLadder(), false)
})

test('a blocked hatch rejects the automatic climb without consuming contact eligibility', () => {
  const f = setup()
  const ladder = f.train.getLadders()[0]
  f.world.setDynamicBody('hatch-blocker', { position: v(), shapes: [{ id: 'hatch-blocker',
    type: 'box', x: ladder.bottom.x, y: 3.6, z: 0, width: 1.3, height: 0.25, depth: 1.3 }] })
  assert.equal(f.player.tryLadder(), false)
  assert.equal(f.player.ladderLatch, null)
  f.world.removeDynamicBody('hatch-blocker')
  assert.equal(f.player.tryLadder(), true)
})

test('pause and zero time do not start a climb; input clearing preserves the latch and reset clears it', () => {
  const f = setup()
  f.player.setEnabled(false)
  f.player.update(1)
  assert.equal(f.player.motor.traversal, null)
  f.player.setEnabled(true)
  f.player.update(0)
  assert.equal(f.player.motor.traversal, null)
  f.player.controls.isLocked = false
  f.player.update(1)
  assert.equal(f.player.motor.traversal, null)
  f.player.controls.isLocked = true
  assert.equal(f.player.tryLadder(), true)
  const latch = f.player.ladderLatch
  f.player.clearInput()
  assert.equal(f.player.ladderLatch, latch)
  f.player.reset()
  assert.equal(f.player.ladderLatch, null)
})
