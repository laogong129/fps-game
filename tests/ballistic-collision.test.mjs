import test from 'node:test'
import assert from 'node:assert/strict'
import { Scene, Vector3 } from 'three'
import { WorldCollision } from '../src/game/world-collision.js'
import { TrainController } from '../src/game/train.js'
import { sweepWorld } from '../src/game/ballistic-collision.js'

const v = (x = 0, y = 1.7, z = 0) => new Vector3(x, y, z)
const wall = (id, z, extra = {}) => ({ id, type: 'box', x: 0, y: 1.7, z,
  width: 4, height: 3, depth: 0.04, ...extra })

function movingFrame(previousX, currentX) {
  const world = new WorldCollision()
  world.setDynamicBody('train', { previousPosition: v(previousX, 0), position: v(currentX, 0),
    velocity: v(8, 0), shapes: [wall('window-frame', 0, { width: 0.08, depth: 0.3 })] })
  return world
}

test('a continuous sweep stops at a static thin wall crossed in one large step', () => {
  const world = new WorldCollision([wall('thin-wall', 0)])
  const hit = sweepWorld(world, v(0, 1.7, -10), v(0, 1.7, 10))
  assert.equal(hit.shape.id, 'thin-wall')
  assert.equal(hit.bodyId, null)
  assert.equal(hit.blocked, true)
  assert.ok(Math.abs(hit.point.z + 0.03) < 1e-8)
  assert.ok(Math.abs(hit.distance - 9.97) < 1e-8)
  assert.ok(hit.normal.equals(v(0, 0, -1)))
})

test('a moving thin train window frame crossing the bullet is hit even when its current pose misses', () => {
  const world = movingFrame(-0.2, 0.2)
  const from = v(0, 1.7, -7.5), to = v(0, 1.7, 7.5)
  assert.equal(world.raycast(from, to), null)
  const hit = sweepWorld(world, from, to, { radius: 0 })
  assert.equal(hit.bodyId, 'train')
  assert.equal(hit.shape.id, 'window-frame')
  assert.ok(Math.abs(hit.point.z + 0.15) < 1e-8)
  assert.ok(Math.abs(hit.distance - 7.35) < 1e-8)
  assert.equal(hit.point.x, 0)
})

test('a train frame that arrives after the bullet passed does not falsely block at its current pose', () => {
  const world = movingFrame(-4, 0)
  const from = v(0, 1.7, -3), to = v(0, 1.7, 9)
  assert.ok(world.raycast(from, to))
  assert.equal(sweepWorld(world, from, to, { radius: 0 }), null)
})

test('static and moving blockers are ordered by world travel fraction instead of local relative distance', () => {
  const body = { previousPosition: v(0, 0, 5), position: v(0, 0, -5),
    shapes: [wall('moving-wall', 0)] }
  const before = new WorldCollision([wall('near-cover', -1)])
  before.setDynamicBody('train', body)
  const from = v(0, 1.7, -5), to = v(0, 1.7, 5)
  assert.equal(sweepWorld(before, from, to).shape.id, 'near-cover')
  const after = new WorldCollision([wall('far-cover', 1)])
  after.setDynamicBody('train', body)
  const hit = sweepWorld(after, from, to)
  assert.equal(hit.shape.id, 'moving-wall')
  assert.ok(Math.abs(hit.distance - 4.985) < 1e-8)
})

test('partial frame fractions use only the matching part of the train motion', () => {
  const world = movingFrame(-2, 2)
  const from = v(0, 1.7, -0.5), to = v(0, 1.7, 0.5)
  assert.ok(sweepWorld(world, from, to, { radius: 0 }))
  assert.equal(sweepWorld(world, from, to, { radius: 0, alpha0: 0.5, alpha1: 1 }), null)
  assert.ok(sweepWorld(world, from, to, { radius: 0, alpha0: 0.25, alpha1: 0.75 }))
})

test('the real train windows stay open to bullets while walls, roof and closed doors block', () => {
  const world = new WorldCollision()
  const train = new TrainController(new Scene(), world)
  const hit = (from, to) => sweepWorld(world, v(...from), v(...to))
  assert.equal(hit([-50.5, 2.6, -3], [-50.5, 2.6, 0]), null)
  assert.equal(hit([-50.5, 2.6, 0], [-50.5, 2.6, -3]), null)
  assert.match(hit([-50.5, 1.6, -3], [-50.5, 1.6, 0]).shape.id, /sill/)
  assert.match(hit([-48, 2.6, 0], [-48, 5, 0]).shape.id, /roof/)
  assert.equal(hit([-48, 2.6, -3], [-48, 2.6, 0]), null)
  train.phase = 'warning'; train.timer = 0.5; train.publish()
  assert.match(hit([-48, 2.6, -3], [-48, 2.6, 0]).shape.id, /door/)
})

test('bullet radius padding and stationary inside contacts work without mutating caller or body vectors', () => {
  const world = new WorldCollision([wall('narrow-post', 0, { width: 0.1 })])
  const from = v(0.06, 1.7, -2), to = v(0.06, 1.7, 2)
  assert.equal(sweepWorld(world, from, to, { radius: 0 }), null)
  assert.ok(sweepWorld(world, from, to, { radius: 0.02 }))
  assert.ok(sweepWorld(world, v(), v(), { radius: 0 }))
  const moving = movingFrame(-0.2, 0.2), body = moving.getBody('train')
  const originals = [from, to, body.position, body.previousPosition].map((point) => point.clone())
  sweepWorld(moving, from, to)
  for (const [index, point] of [from, to, body.position, body.previousPosition].entries()) assert.ok(point.equals(originals[index]))
})
