import test from 'node:test'
import assert from 'node:assert/strict'
import { Bone, BoxGeometry, Float32BufferAttribute, Group, Mesh, MeshBasicMaterial, Scene,
  Skeleton, SkinnedMesh, Uint16BufferAttribute, Vector3 } from 'three'
import { PlayerBallistics } from '../src/game/player-ballistics.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { TrainController } from '../src/game/train.js'
import { hitZoneAt } from '../src/game/enemy-hit.js'

const v = (x = 0, y = 1.7, z = 0) => new Vector3(x, y, z)
const close = (actual, expected, tolerance = 1e-7) => assert.ok(Math.abs(actual - expected) < tolerance, `${actual} != ${expected}`)
const wall = (id, z, extra = {}) => ({ id, type: 'box', x: 0, y: 1.7, z,
  width: 4, height: 3, depth: 0.04, ...extra })

function setup(world = new WorldCollision()) {
  const scene = new Scene(), meshes = [], impacts = [], traces = [], removed = []
  const ballistics = new PlayerBallistics({ getWorld: () => world, getEnemies: () => meshes,
    onImpact: (hit, damage, bullet) => impacts.push({ hit, damage, bullet }),
    onTrace: (id, from, to, bullet) => traces.push({ id, from: from.clone(), to: to.clone(), bullet }),
    onRemove: (id) => removed.push(id) })
  function target(distance, { x = 0, y = 1.7, size = 1, dead = false, skinned = false } = {}) {
    const root = new Group()
    root.userData.enemyGroup = true
    root.userData.enemyRef = { dead, height: 1.8, radius: 0.42 }
    root.position.set(x, 0, -distance)
    const geometry = new BoxGeometry(size, size, size), material = new MeshBasicMaterial()
    const mesh = skinned ? new SkinnedMesh(geometry, material) : new Mesh(geometry, material)
    mesh.position.y = y
    root.add(mesh); scene.add(root)
    let bone
    if (skinned) {
      const count = geometry.attributes.position.count
      const indices = new Uint16Array(count * 4), weights = new Float32Array(count * 4)
      for (let i = 0; i < count; i++) weights[i * 4] = 1
      geometry.setAttribute('skinIndex', new Uint16BufferAttribute(indices, 4))
      geometry.setAttribute('skinWeight', new Float32BufferAttribute(weights, 4))
      bone = new Bone(); bone.name = 'Head'; mesh.add(bone)
      scene.updateMatrixWorld(true)
      mesh.bind(new Skeleton([bone]))
    }
    scene.updateMatrixWorld(true)
    meshes.push(mesh)
    return { root, mesh, bone }
  }
  const emit = (extra = {}) => ballistics.emit({ position: v(), direction: v(0, 0, -1), speed: 230,
    gravity: 0, maxDistance: 110, damage: 30, weaponKey: 'pistol', shotId: 1, ...extra })
  return { ballistics, scene, meshes, impacts, traces, removed, world, target, emit }
}

for (const [distance, before, after] of [[20, 0.08, 0.01], [60, 0.25, 0.01]]) {
  test(`a 230m/s bullet reaches the ${distance}m target only after real flight time`, () => {
    const f = setup(), enemy = f.target(distance)
    f.emit()
    assert.equal(f.impacts.length, 0)
    f.ballistics.update(before)
    assert.equal(f.impacts.length, 0)
    assert.equal(f.ballistics.items.length, 1)
    f.ballistics.update(after)
    assert.equal(f.impacts.length, 1)
    assert.equal(f.impacts[0].hit.root, enemy.root)
    close(f.impacts[0].hit.distance, distance - 0.5)
    assert.equal(f.ballistics.items.length, 0)
  })
}

test('gravity follows the same trajectory across split time steps and keeps the actual vertical speed', () => {
  const f = setup(), bullet = f.emit({ position: v(0, 10), speed: 100, gravity: 9.81, maxDistance: 165 })
  f.ballistics.update(0.37); f.ballistics.update(0.13)
  close(bullet.position.z, -50)
  close(bullet.position.y, 10 - 0.5 * 9.81 * 0.5 ** 2)
  close(bullet.velocity.y, -9.81 * 0.5)
  close(bullet.age, 0.5)
  assert.ok(bullet.distance > 50)
})

test('a large update sweeps through a thin wall once and never damages the enemy behind it', () => {
  const f = setup(new WorldCollision([wall('cover', -15)]))
  f.target(30)
  f.emit({ speed: 560 })
  f.ballistics.update(0.2)
  assert.equal(f.impacts.length, 1)
  assert.equal(f.impacts[0].hit.root, null)
  assert.equal(f.impacts[0].hit.shape.id, 'cover')
  assert.equal(f.impacts[0].hit.blocked, true)
  close(f.impacts[0].hit.distance, 14.97)
  assert.ok(f.traces.every((trace) => trace.to.z >= -14.97 - 1e-7))
  assert.deepEqual(f.removed, [1])
})

test('the nearest live enemy intercepts a swept bullet while dead meshes do not block it', () => {
  const f = setup(new WorldCollision([wall('far-cover', -15)]))
  f.target(3, { dead: true })
  const living = f.target(10)
  f.emit(); f.ballistics.update(0.1)
  assert.equal(f.impacts.length, 1)
  assert.equal(f.impacts[0].hit.root, living.root)
  assert.equal(f.impacts[0].hit.mesh, living.mesh)
  assert.ok(f.impacts[0].hit.face)
  close(f.impacts[0].hit.distance, 9.5)
})

test('a target can move clear of a bullet before it arrives', () => {
  const f = setup(), enemy = f.target(5, { size: 0.3 })
  f.emit({ speed: 100 })
  f.ballistics.beginFrame()
  enemy.root.position.x = 2
  f.ballistics.update(0.1)
  assert.equal(f.impacts.length, 0)
  assert.equal(f.ballistics.items.length, 1)
})

test('a fast target crossing the bullet path is hit between its previous and current poses', () => {
  const f = setup(), enemy = f.target(5, { x: -2, size: 0.3 })
  f.emit({ speed: 100 })
  f.ballistics.beginFrame()
  enemy.root.position.x = 2
  f.ballistics.update(0.1)
  assert.equal(f.impacts.length, 1)
  assert.equal(f.impacts[0].hit.root, enemy.root)
  assert.equal(f.impacts[0].hit.point.x, 0)
  assert.ok(Math.abs(f.impacts[0].hit.point.z + 5) < 0.3)
})

test('current bone matrices are used and impact metadata retains the animated head face', () => {
  const f = setup(), enemy = f.target(10, { skinned: true })
  f.ballistics.beginFrame()
  enemy.bone.position.x = 1.5
  f.emit({ position: v(1.5) })
  f.ballistics.update(0.1)
  assert.equal(f.impacts.length, 1)
  assert.equal(f.impacts[0].hit.mesh, enemy.mesh)
  assert.ok(f.impacts[0].hit.face)
  assert.equal(hitZoneAt({ def: { hitZone: { mult: { head: 1 } } } }, f.impacts[0].hit), 'head')
})

test('an emitted bullet keeps its firing snapshot and cloned vectors when the source gun changes', () => {
  const f = setup(), enemy = f.target(10)
  const shot = { position: v(), direction: v(0, 0, -1), damage: 30, weaponKey: 'pistol', shotId: 42 }
  f.emit(shot)
  shot.position.set(50, 50, 50); shot.direction.set(1, 0, 0)
  shot.damage = 999; shot.weaponKey = 'rifle'; shot.shotId = 99
  f.ballistics.update(0.1)
  assert.equal(f.impacts[0].hit.root, enemy.root)
  assert.equal(f.impacts[0].damage, 30)
  assert.equal(f.impacts[0].hit.weaponKey, 'pistol')
  assert.equal(f.impacts[0].hit.shotId, 42)
})

test('zero, negative and invalid time leave all flight, trace and impact state unchanged', () => {
  const f = setup(), bullet = f.emit({ gravity: 9.81 })
  const before = { position: bullet.position.clone(), velocity: bullet.velocity.clone() }
  for (const dt of [0, -1, NaN]) f.ballistics.update(dt)
  assert.ok(bullet.position.equals(before.position))
  assert.ok(bullet.velocity.equals(before.velocity))
  assert.equal(bullet.age, 0)
  assert.equal(bullet.distance, 0)
  assert.equal(f.traces.length, 0)
  assert.equal(f.impacts.length, 0)
})

test('a newly deferred shot skips its emitting frame and advances on the next one', () => {
  const f = setup()
  f.target(20)
  const bullet = f.emit({ defer: true })
  f.ballistics.update(0.1)
  assert.equal(bullet.defer, false)
  assert.equal(bullet.age, 0)
  assert.equal(f.traces.length, 0)
  f.ballistics.update(0.1)
  assert.equal(f.impacts.length, 1)
})

test('a close muzzle obstruction resolves on simulation update and removes the bullet only once', () => {
  const f = setup()
  f.emit({ initialHit: { point: v(0, 1.7, -0.2), distance: 0.2, blocked: true, root: null, normal: v(0, 0, 1) } })
  f.ballistics.update(0)
  assert.equal(f.impacts.length, 0)
  f.ballistics.update(1 / 60); f.ballistics.update(1 / 60)
  assert.equal(f.impacts.length, 1)
  close(f.impacts[0].hit.distance, 0.2)
  assert.deepEqual(f.removed, [1])
})

test('maximum range ends flight exactly without damaging a farther enemy', () => {
  const f = setup()
  f.target(10)
  f.emit({ maxDistance: 5 })
  f.ballistics.update(0.1)
  assert.equal(f.impacts.length, 0)
  assert.equal(f.ballistics.items.length, 0)
  close(f.traces.at(-1).to.distanceTo(v()), 5)
  assert.deepEqual(f.removed, [1])
})

test('pellets keep their shared shot ID and evaluate damage and knockback from total flight distance', () => {
  for (const [distance, damage, knockback] of [[6, 12, 1.6], [20, 2.4, 0]]) {
    const f = setup()
    f.target(distance)
    for (let pellet = 0; pellet < 6; pellet++) f.emit({ weaponKey: 'shotgun', damage: 12, shotId: 7,
      falloffStart: 8, falloffEnd: 18, minDamageMult: 0.2, knockback: 1.6, knockbackRange: 8 })
    f.ballistics.update(0.1)
    assert.equal(f.impacts.length, 6)
    assert.equal(new Set(f.impacts.map((impact) => impact.hit.shotId)).size, 1)
    for (const impact of f.impacts) { close(impact.damage, damage); close(impact.hit.knockback, knockback) }
  }
})

test('clear removes every active visual once and forgets motion history', () => {
  const f = setup()
  f.target(10); f.ballistics.beginFrame()
  const first = f.emit(), second = f.emit()
  assert.equal(f.ballistics.targets.previous.size, 1)
  f.ballistics.clear(); f.ballistics.clear()
  assert.equal(f.ballistics.items.length, 0)
  assert.equal(f.ballistics.targets.previous.size, 0)
  assert.deepEqual(f.removed.sort(), [first.id, second.id].sort())
  f.ballistics.update(1)
  assert.equal(f.impacts.length, 0)
})

test('flight catches a moving train window frame that crosses the bullet between poses', () => {
  const world = new WorldCollision()
  world.setDynamicBody('train', { previousPosition: v(-0.2, 0), position: v(0.2, 0),
    shapes: [wall('moving-frame', -7.5, { width: 0.08, depth: 0.3 })] })
  const f = setup(world)
  f.emit({ speed: 300 }); f.ballistics.update(0.05)
  assert.equal(f.impacts.length, 1)
  assert.equal(f.impacts[0].hit.bodyId, 'train')
  assert.equal(f.impacts[0].hit.shape.id, 'moving-frame')
  close(f.impacts[0].hit.distance, 7.34)
})

test('an actual open train window passes a bullet to its target, while the sill stops a lower shot', () => {
  for (const y of [2.6, 1.6]) {
    const world = new WorldCollision()
    new TrainController(new Scene(), world)
    const f = setup(world), enemy = f.target(-0.5, { x: -50.5, y, size: 0.4 })
    f.emit({ position: v(-50.5, y, -3), direction: v(0, 0, 1) })
    f.ballistics.update(0.02)
    assert.equal(f.impacts.length, 1)
    if (y === 2.6) assert.equal(f.impacts[0].hit.root, enemy.root)
    else { assert.equal(f.impacts[0].hit.root, null); assert.match(f.impacts[0].hit.shape.id, /sill/) }
  }
})
