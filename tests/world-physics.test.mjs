import test from 'node:test'
import assert from 'node:assert/strict'
import { Vector3 } from 'three'
import { WorldCollision } from '../src/game/world-collision.js'
import { CharacterMotor } from '../src/game/character-motor.js'
import { createTrainLayout } from '../src/game/train-layout.js'

const v = (x = 0, y = 0, z = 0) => new Vector3(x, y, z)
const floor = { id: 'ground', type: 'box', x: 0, y: -0.1, z: 0, width: 100, height: 0.2, depth: 100, walkable: true }
const box = (id, x, y, z, width, height, depth, extra = {}) => ({ id, type: 'box', x, y, z, width, height, depth, ...extra })
const simulate = (motor, seconds, input, dt = 1 / 60) => {
  for (let elapsed = 0; elapsed < seconds - 0.0001; elapsed += dt) motor.update(Math.min(dt, seconds - elapsed), input)
}

test('rays and swept actors collide with every one of six box faces, including maximum boundaries', () => {
  const world = new WorldCollision([box('block', 0, 0, 0, 2, 2, 2)], { bounds: 100 })
  const axes = [v(1), v(-1), v(0, 1), v(0, -1), v(0, 0, 1), v(0, 0, -1)]
  for (const direction of axes) {
    const hit = world.raycast(direction.clone().multiplyScalar(3), direction.clone().multiplyScalar(-3))
    assert.ok(hit, `ray ${direction.toArray()}`)
    assert.ok(hit.normal.dot(direction) > 0.99)
    const start = direction.clone().multiplyScalar(3)
    if (!direction.y) start.y = -0.5
    if (direction.y < 0) start.y -= 1
    const move = world.moveCharacter(start, direction.clone().multiplyScalar(-7), { radius: 0.25, height: 1 })
    assert.ok(move.position.clone().sub(v(0, -0.5)).dot(direction) >= 0.99, `body ${direction.toArray()} ${move.position.toArray()}`)
    assert.ok(world.capsuleClear(move.position, 0.25, 1))
  }
})

test('same-XZ bridge floor and ground remain separate supports and overhead solids block the head', () => {
  const bridge = box('bridge', 0, 2.9, 0, 10, 0.2, 10, { walkable: true })
  const world = new WorldCollision([floor, bridge])
  assert.equal(world.querySupport(v(), { maxRise: 0.3, maxDrop: 0.3 }).height, 0)
  assert.equal(world.querySupport(v(0, 3, 0), { maxRise: 0.3, maxDrop: 0.3 }).height, 3)
  assert.equal(world.capsuleClear(v(), 0.35, 1.8), true)
  assert.equal(world.capsuleClear(v(0, 1.2, 0), 0.35, 1.8), false)
  const hit = world.raycast(v(0, 1.7, 0), v(0, 4, 0))
  assert.ok(Math.abs(hit.point.y - 2.8) < 0.0001)
})

test('small steps climb automatically, taller walls do not, and headroom blocks a step', () => {
  for (const stepHeight of [0.2, 0.7]) {
    const world = new WorldCollision([floor, box('step', 0, stepHeight / 2, 2, 5, stepHeight, 4, { walkable: true })])
    const motor = new CharacterMotor(world, { speed: 2 })
    motor.reset(v(0, 0, -1))
    simulate(motor, 2, { move: v(0, 0, 1) })
    if (stepHeight < 0.3) { assert.ok(motor.position.z > 2); assert.ok(Math.abs(motor.position.y - 0.2) < 0.01) }
    else assert.ok(motor.position.z < 0)
  }
  const world = new WorldCollision([floor,
    box('step', 0, 0.1, 2, 5, 0.2, 4, { walkable: true }),
    box('ceiling', 0, 1.95, 2, 5, 0.2, 4)])
  const motor = new CharacterMotor(world, { speed: 2 })
  motor.reset(v(0, 0, -1))
  simulate(motor, 2, { move: v(0, 0, 1) })
  assert.ok(motor.position.z < 0)
})

test('ramp support and movement reach an upper platform and return downhill', () => {
  const ramp = { id: 'ramp', type: 'ramp', x: 0, y: 1, z: 0, width: 4, height: 2, depth: 8,
    riseAxis: 'z', riseSign: 1, walkable: true }
  const world = new WorldCollision([floor, ramp, box('upper', 0, 1.9, 6, 4, 0.2, 4, { walkable: true })])
  const motor = new CharacterMotor(world, { speed: 3 })
  motor.reset(v(0, 0, -6))
  simulate(motor, 4, { move: v(0, 0, 1) })
  assert.ok(motor.position.z > 5.8)
  assert.ok(Math.abs(motor.position.y - 2) < 0.02)
  simulate(motor, 4, { move: v(0, 0, -1) })
  assert.ok(motor.position.z < -5.5)
  assert.ok(Math.abs(motor.position.y) < 0.02)
})

test('jumping hits a low ceiling and lands; a six-meter fall lands without sinking', () => {
  const world = new WorldCollision([floor, box('ceiling', 0, 2.5, 0, 5, 0.2, 5)])
  const motor = new CharacterMotor(world)
  motor.update(0.1, { jump: true })
  assert.ok(motor.position.y <= 0.601)
  simulate(motor, 2, {})
  assert.ok(motor.grounded)
  assert.ok(Math.abs(motor.position.y) < 0.01)
  motor.reset(v(8, 6, 8))
  simulate(motor, 2, {})
  assert.ok(motor.grounded)
  assert.ok(Math.abs(motor.position.y) < 0.01)
})

test('fast and large-time-step motion cannot tunnel through a thin wall', () => {
  const world = new WorldCollision([floor, box('wall', 0, 2, 3, 8, 4, 0.08)])
  for (const dt of [1 / 120, 1 / 30, 0.25]) {
    const motor = new CharacterMotor(world, { speed: 40 })
    motor.reset(v())
    simulate(motor, 0.5, { move: v(0, 0, 1) }, dt)
    assert.ok(motor.position.z < 2.62)
  }
})

test('per-frame movement speed overrides support upgrades, sprint and enemy charge speed', () => {
  const motor = new CharacterMotor(new WorldCollision([floor]), { speed: 6 })
  motor.update(0.5, { move: v(1), speed: 10, sprint: true })
  assert.ok(Math.abs(motor.position.x - 5) < 0.01)
})

test('dynamic deck carries a rider, jump inherits its speed, and support is body-stable', () => {
  const world = new WorldCollision([floor])
  const deck = [box('deck', 0, 0.9, 0, 10, 0.2, 4, { walkable: true })]
  world.setDynamicBody('train', { shapes: deck, position: v(), velocity: v(4) })
  const motor = new CharacterMotor(world)
  motor.reset(v(0, 1, 0))
  assert.equal(motor.supportId, 'train')
  for (let frame = 1; frame <= 30; frame++) {
    world.setDynamicBody('train', { shapes: deck, position: v(frame / 15), previousPosition: v((frame - 1) / 15), velocity: v(4) })
    motor.update(1 / 60, {})
  }
  assert.ok(Math.abs(motor.position.x - 2) < 0.01)
  motor.update(0.1, { jump: true })
  assert.ok(motor.position.x > 2.35)
  assert.equal(motor.supportId, null)
})

test('vault and mantle validate their entire path and reject blocked headroom', () => {
  const obstacle = box('ledge', 0, 0.75, 1.1, 4, 1.5, 1.5, { walkable: true, climbable: true })
  const world = new WorldCollision([floor, obstacle])
  const motor = new CharacterMotor(world)
  motor.reset(v(0, 0, -0.1))
  assert.equal(motor.tryTraverse(v(0, 0, 1)), true)
  assert.equal(motor.canFire, false)
  simulate(motor, 0.8, {})
  assert.ok(Math.abs(motor.position.y - 1.5) < 0.02)
  assert.ok(motor.canFire)
  const blocked = new WorldCollision([floor, obstacle, box('low-roof', 0, 2.8, 0.7, 5, 0.2, 4)])
  const second = new CharacterMotor(blocked)
  second.reset(v(0, 0, -0.1))
  assert.equal(second.tryTraverse(v(0, 0, 1)), false)
})

test('climb waypoints follow a translating train and independent radius/height remain valid', () => {
  const world = new WorldCollision([floor])
  world.setDynamicBody('train', { shapes: [], position: v(), velocity: v(2) })
  const motor = new CharacterMotor(world)
  motor.reset(v(0, 0, 0))
  assert.ok(motor.startClimb(v(1, 2, 0), 1, 'train', { waypoints: [v(0, 2, 0)] }))
  world.setDynamicBody('train', { shapes: [], position: v(3), velocity: v(2) })
  motor.update(1, {})
  assert.ok(motor.position.distanceTo(v(4, 2, 0)) < 0.01)
  assert.equal(world.capsuleClear(v(10), 1.6, 1.2), true)
})

test('actual train doors are traversable only when open and window holes remain ballistic openings', () => {
  const layout = createTrainLayout()
  const platform = [floor, box('platform-a', 0, 0.5, -4, 30, 1, 4, { walkable: true }),
    box('platform-b', 0, 0.5, 4, 30, 1, 4, { walkable: true })]
  const world = new WorldCollision(platform)
  world.setDynamicBody('train', { shapes: layout.shapes, position: v() })
  const motor = new CharacterMotor(world, { radius: 0.5, speed: 2 })
  motor.reset(v(-6, 1, -4))
  simulate(motor, 4, { move: v(0, 0, 1) })
  assert.ok(motor.position.z > 3.5)
  assert.ok(Math.abs(motor.position.y - 1) < 0.02)
  world.setDynamicBody('train', { shapes: [...layout.shapes, ...layout.doors], position: v() })
  motor.reset(v(-6, 1, -4))
  simulate(motor, 2, { move: v(0, 0, 1) })
  assert.ok(motor.position.z < -2.25)
  assert.equal(world.raycast(v(-8.3, 2.5, -3), v(-8.3, 2.5, 3)), null)
  assert.ok(world.raycast(v(-8.3, 1.5, -3), v(-8.3, 1.5, 3)))
})

test('actual train hatch permits validated up/down ladder traversal without penetrating the roof', () => {
  const layout = createTrainLayout()
  const world = new WorldCollision([floor])
  world.setDynamicBody('train', { shapes: layout.shapes, position: v() })
  const motor = new CharacterMotor(world, { radius: 0.5 })
  motor.reset(v(-10, 1, 0))
  assert.ok(motor.startClimb(v(-8.7, 3.5, 0), 1.35, 'train', { waypoints: [v(-10, 3.62, 0)] }))
  simulate(motor, 1.35, {})
  assert.ok(motor.position.distanceTo(v(-8.7, 3.5, 0)) < 0.01)
  assert.equal(motor.supportId, 'train')
  assert.ok(motor.startClimb(v(-10, 1, 0), 1.35, 'train', { waypoints: [v(-10, 3.62, 0)] }))
  simulate(motor, 1.35, {})
  assert.ok(motor.position.distanceTo(v(-10, 1, 0)) < 0.01)
  assert.equal(motor.supportId, 'train')
})
