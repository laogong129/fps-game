import test from 'node:test'
import assert from 'node:assert/strict'
import { Group, Vector3 } from 'three'
import { CONFIG } from '../src/config.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { CharacterMotor } from '../src/game/character-motor.js'
import { enemyBody } from '../src/game/pursuit.js'
import { createTrainLayout } from '../src/game/train-layout.js'
import { createRailwayLayout } from '../src/game/railway-layout.js'
import { resolveCrowd } from '../src/game/crowd.js'

const v = (x = 0, y = 0, z = 0) => new Vector3(x, y, z)
const box = (id, x, y, z, width, height, depth) => ({ id, type: 'box', x, y, z, width, height, depth, walkable: true })
const ground = box('ground', 0, -0.1, 0, 100, 0.2, 100)
const distance = (a, b) => Math.hypot(a.motor.position.x - b.motor.position.x, a.motor.position.z - b.motor.position.z)

function actor(world, type, position) {
  const dimensions = type === 'player' ? { radius: CONFIG.player.radius, height: CONFIG.player.bodyHeight } : enemyBody(type, CONFIG.enemy[type])
  const entry = { type, ...dimensions, group: new Group(),
    motor: new CharacterMotor(world, { ...dimensions, position }) }
  entry.group.position.copy(position)
  return entry
}

function settle(world, actors, frames = 60) {
  for (let frame = 0; frame < frames; frame++) resolveCrowd(world, actors, 1 / 60)
}

test('real small motors converge to one point without crowd separation and stay apart with it', () => {
  const world = new WorldCollision([ground])
  const actors = [actor(world, 'small', v(-1)), actor(world, 'small', v(1))]
  const tick = (separate) => {
    for (let frame = 0; frame < 120; frame++) {
      for (const entry of actors) {
        const move = entry.motor.position.clone().negate().setY(0)
        if (move.lengthSq() > 0.001) move.normalize()
        entry.motor.update(1 / 60, { move, speed: CONFIG.enemy.small.speed })
      }
      if (separate) resolveCrowd(world, actors, 1 / 60)
    }
  }
  tick(false)
  assert.ok(distance(...actors) < 0.001, 'reproduces the missing actor collision')
  actors[0].motor.reset(v(-1)); actors[1].motor.reset(v(1))
  tick(true)
  assert.ok(distance(...actors) >= actors[0].radius + actors[1].radius - 0.01)
  for (const entry of actors) assert.deepEqual(entry.group.position, entry.motor.position)
})

test('player and every enemy use their actual motor radius and height', () => {
  for (const type of ['small', 'tank', 'spitter', 'splitter', 'minibug', 'charger', 'boss']) {
    const world = new WorldCollision([ground])
    const actors = [actor(world, 'player', v()), actor(world, type, v(0.1))]
    settle(world, actors)
    assert.ok(distance(...actors) >= actors[0].radius + actors[1].radius, type)
    assert.ok(actors.every((entry) => world.capsuleClear(entry.motor.position, entry.radius, entry.height)), type)
  }
})

test('zero-distance crowds separate deterministically without NaNs', () => {
  const run = () => {
    const world = new WorldCollision([ground])
    const actors = Array.from({ length: 8 }, () => actor(world, 'small', v()))
    settle(world, actors, 180)
    for (let i = 0; i < actors.length; i++) for (let j = i + 1; j < actors.length; j++) {
      assert.ok(distance(actors[i], actors[j]) >= actors[i].radius + actors[j].radius - 0.02)
    }
    return actors.map((entry) => entry.motor.position.toArray())
  }
  assert.deepEqual(run(), run())
})

test('same-XZ ground, bridge, train interior and roof do not push across levels', () => {
  const layout = createTrainLayout()
  const world = new WorldCollision([ground, box('bridge', 0, 5.9, 0, 8, 0.2, 12)])
  world.setDynamicBody('train', { shapes: layout.shapes, position: v() })
  const actors = [actor(world, 'small', v(0, 0, 4)), actor(world, 'player', v(0, 6, 4)),
    actor(world, 'small', v(-6, 1)), actor(world, 'player', v(-6, 3.5))]
  const initial = actors.map((entry) => entry.motor.position.clone())
  settle(world, actors)
  assert.deepEqual(actors.map((entry) => entry.motor.position), initial)
})

test('a solid ledge separates overlapping vertical body ranges on adjacent levels', () => {
  const world = new WorldCollision([ground, box('ledge', 6.2, 1.9, 0, 8, 0.2, 8)])
  const actors = [actor(world, 'boss', v()), actor(world, 'small', v(2.3, 2))]
  assert.ok(distance(...actors) < actors[0].radius + actors[1].radius)
  assert.ok(actors.every((entry) => world.capsuleClear(entry.motor.position, entry.radius, entry.height)))
  const initial = actors.map((entry) => entry.motor.position.clone())
  settle(world, actors)
  assert.deepEqual(actors.map((entry) => entry.motor.position), initial)
})

test('real ramp-to-bridge seams remain one connected floor for Boss and small bodies', () => {
  const layout = createRailwayLayout()
  const world = new WorldCollision(layout.shapes, { bounds: layout.bounds })
  const bossBody = enemyBody('boss', CONFIG.enemy.boss)
  const start = world.querySupport(v(10, 5.7, -15), { ...bossBody, maxRise: 0.5, maxDrop: 0.1 }).point
  const actors = [actor(world, 'boss', start), actor(world, 'small', v(10, 6, -13.4))]
  assert.ok(actors.every((entry) => world.capsuleClear(entry.motor.position, entry.radius, entry.height)))
  settle(world, actors)
  assert.ok(distance(...actors) >= actors[0].radius + actors[1].radius)
  assert.ok(actors.every((entry) => world.capsuleClear(entry.motor.position, entry.radius, entry.height)))
  assert.ok(actors.every((entry) => entry.motor.grounded))
})

test('blocked correction transfers to the free actor instead of entering a wall', () => {
  const world = new WorldCollision([ground, box('wall', 1.3, 2, 0, 0.2, 4, 12)])
  const actors = [actor(world, 'player', v(0.69)), actor(world, 'small', v())]
  settle(world, actors)
  assert.ok(actors[0].motor.position.x <= 0.701)
  assert.ok(distance(...actors) >= 0.92)
  assert.ok(actors.every((entry) => world.capsuleClear(entry.motor.position, entry.radius, entry.height)))
})

test('real closed car walls contain riders and crowd movement keeps train support for carrying', () => {
  const layout = createTrainLayout()
  const world = new WorldCollision([ground])
  const shapes = [...layout.shapes, ...layout.doors]
  world.setDynamicBody('train', { shapes, position: v(), velocity: v(2) })
  const actors = [actor(world, 'player', v(-6, 1, 1.12)), actor(world, 'small', v(-6, 1, 0.7))]
  settle(world, actors)
  assert.ok(distance(...actors) >= 0.92)
  for (const entry of actors) {
    assert.equal(entry.motor.supportId, 'train')
    assert.ok(world.capsuleClear(entry.motor.position, entry.radius, entry.height))
  }
  const initial = actors.map((entry) => entry.motor.position.clone())
  world.setDynamicBody('train', { shapes, position: v(2), velocity: v(2) })
  actors.forEach((entry) => entry.motor.update(1 / 60))
  actors.forEach((entry, index) => assert.ok(Math.abs(entry.motor.position.x - initial[index].x - 2) < 0.01))
})

test('grounded crowd correction cannot shove a rider off an unsupported edge', () => {
  const world = new WorldCollision([box('deck', 0, 2.9, 0, 2, 0.2, 8)])
  const actors = [actor(world, 'player', v(1.45, 3)), actor(world, 'small', v(1, 3))]
  settle(world, actors)
  for (const entry of actors) {
    assert.ok(entry.motor.grounded)
    assert.ok(world.querySupport(entry.motor.position, { radius: entry.radius, height: entry.height }))
    assert.ok(Math.abs(entry.motor.position.y - 3) < 0.01)
  }
})

test('dead actors are ignored, traversal paths stay fixed, zero dt freezes and camera synchronizes', () => {
  const world = new WorldCollision([ground])
  const player = actor(world, 'player', v())
  let syncs = 0
  player.syncCamera = () => { syncs++ }
  const dead = actor(world, 'boss', v())
  dead.dead = true
  assert.deepEqual(resolveCrowd(world, [player, dead], 1 / 60), { contacts: 0, movedActors: 0 })
  const enemy = actor(world, 'small', v(0.3))
  enemy.motor.traversal = { fixture: true }
  const initial = enemy.motor.position.clone()
  assert.deepEqual(resolveCrowd(world, [player, enemy], 0), { contacts: 0, movedActors: 0 })
  settle(world, [player, enemy])
  assert.deepEqual(enemy.motor.position, initial)
  assert.ok(syncs > 0)
  assert.ok(distance(player, enemy) >= player.radius + enemy.radius)
})
