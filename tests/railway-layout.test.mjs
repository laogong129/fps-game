import test from 'node:test'
import assert from 'node:assert/strict'
import { Box3, MeshBasicMaterial, Raycaster, Vector3 } from 'three'
import { createRailwayLayout } from '../src/game/railway-layout.js'
import { shapeGeometry, meshFromShape, surfaceHeight } from '../src/game/railway-geometry.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { WorldNavigation } from '../src/game/world-navigation.js'
import { CharacterMotor } from '../src/game/character-motor.js'
import { enemyBody } from '../src/game/pursuit.js'
import { CONFIG } from '../src/config.js'

const layout = createRailwayLayout()
const world = new WorldCollision(layout.shapes, { bounds: layout.bounds })
const navigation = new WorldNavigation(world, layout)
const material = new MeshBasicMaterial()
const point = (x, y, z) => new Vector3(x, y, z)

test('railway manifest has unique meter-scale identities and exact same rendered bounds as collision', () => {
  assert.equal(layout.bounds, 60)
  assert.equal(new Set(layout.shapes.map((s) => s.id)).size, layout.shapes.length)
  for (const shape of layout.shapes.filter((s) => s.solid !== false)) {
    const mesh = meshFromShape(shape, material)
    const rendered = new Box3().setFromObject(mesh)
    const collider = world.getShapeBounds(shape)
    assert.ok(rendered.min.distanceTo(collider.min) < 0.00001, shape.id)
    assert.ok(rendered.max.distanceTo(collider.max) < 0.00001, shape.id)
    assert.equal(mesh.userData.shapeId, shape.id)
    mesh.geometry.dispose()
  }
})

test('ramp rendered tops use the same axis, sign and height as physical support', () => {
  for (const shape of layout.shapes.filter((s) => s.type === 'ramp')) {
    const mesh = meshFromShape(shape, material)
    mesh.updateMatrixWorld(true)
    for (const ratio of [-0.4, 0, 0.4]) {
      const x = shape.x + (shape.riseAxis === 'x' ? shape.width * ratio : 0)
      const z = shape.z + (shape.riseAxis === 'z' ? shape.depth * ratio : 0)
      const ray = new Raycaster(point(x, 12, z), point(0, -1, 0))
      const hits = ray.intersectObject(mesh)
      assert.ok(hits.length, `${shape.id} top winding`)
      assert.ok(Math.abs(hits[0].point.y - surfaceHeight(shape, x, z)) < 0.00001)
      assert.ok(hits[0].face.normal.y > 0)
    }
    mesh.geometry.dispose()
  }
})

test('the train corridor stays clear with six-meter bridge clearance and accessible two-station portals', () => {
  for (let x = -55; x <= 55; x++) {
    assert.ok(world.capsuleClear(point(x, 0.15, 0), 1.8, 5.45, 'train'), `train or roof-rider clips at ${x}`)
  }
  assert.equal(layout.stations.length, 2)
  for (const station of layout.stations) {
    for (const portal of station.boardingPoints) {
      assert.ok(world.capsuleClear(new Vector3(portal.x, portal.y + 0.003, portal.z), 0.4, 1.8, 'train'))
    }
    const portal = station.roofBoardingPoints[0]
    assert.ok(world.capsuleClear(new Vector3(portal.x, portal.y + 0.003, portal.z), 0.4, 1.8, 'train'))
  }
})

test('same XZ underpass and bridge remain distinct graph nodes, without a vertical shortcut', () => {
  const graph = navigation.grid(0.5, 1.8)
  const levels = graph.nodes.filter((n) => n.position.x === 10 && n.position.z === 0).map((n) => n.position.y)
  assert.deepEqual(levels, [0, 6])
  assert.equal(navigation.clear(point(10, 0, 0), point(10, 6, 0), 0.5, 1.8), false)
  const path = navigation.findPath(point(10, 0, 0), point(10, 6, 0), 0.5, 1.8)
  assert.ok(path.length > 2)
  assert.ok(path.some((p) => Math.abs(p.z) >= 30), 'must use a connected ramp')
})

test('player and actual Boss motor can reach both bridge ends and all public raised terraces', () => {
  const destinations = [point(10, 6, -8), point(10, 6, 8), point(-32, 2.4, 28), point(32, 3.6, 33),
    point(-48, 3.5, 8), point(36, 3.5, 8)]
  const boss = enemyBody('boss', CONFIG.enemy.boss)
  assert.equal(boss.radius, 2.13)
  assert.ok(Math.abs(boss.height - 3.9) < 0.00001)
  for (const { radius, height } of [{ radius: 0.4, height: 1.8 }, boss]) {
    for (const target of destinations) {
      const start = point(-16, 0, -30)
      const path = navigation.findPath(start, target, radius, height)
      assert.ok(path.length, `route ${target.toArray()} radius=${radius}`)
      const motor = new CharacterMotor(world, { position: start, radius, height })
      for (const waypoint of path) {
        for (let frame = 0; frame < 1800; frame++) {
          const delta = waypoint.clone().sub(motor.position).setY(0)
          const distance = delta.length()
          if (distance < 0.005) break
          motor.update(1 / 30, { move: delta.normalize(), speed: Math.min(6, distance * 30) })
        }
        assert.ok(Math.hypot(motor.position.x - waypoint.x, motor.position.z - waypoint.z) < 0.03,
          `motor stuck at ${motor.position.toArray()} on route to ${target.toArray()} radius=${radius}`)
        assert.ok(world.capsuleClear(motor.position, radius, height), `illegal capsule at ${motor.position.toArray()}`)
      }
      assert.ok(motor.position.distanceTo(target) < 0.05,
        `motor stranded on wrong floor ${motor.position.toArray()} for ${target.toArray()} radius=${radius}`)
    }
  }
})

test('all authored spawn points are supported on their declared floor and outside visible solid objects', () => {
  for (const spawn of layout.spawnPoints) {
    const foot = new Vector3(spawn.x, spawn.y + 0.003, spawn.z)
    const support = world.querySupport(foot, { maxDrop: 0.01, maxRise: 0.01, radius: 0.4, height: 1.8, ignoreBody: 'train' })
    assert.ok(support, spawn.id)
    assert.ok(world.capsuleClear(foot, 0.4, 1.8, 'train'), spawn.id)
  }
})

test('cached routes follow the current target when it moves within the same graph cell', () => {
  const start = point(-16, 0, -30), firstTarget = point(10, 6, -8), movedTarget = point(10.4, 6, -8.4)
  const graph = navigation.grid(0.4, 1.8)
  assert.equal(navigation.nearest(firstTarget, graph), navigation.nearest(movedTarget, graph))
  assert.ok(navigation.findPath(start, firstTarget, 0.4, 1.8).at(-1).equals(firstTarget))
  assert.ok(navigation.findPath(start, movedTarget, 0.4, 1.8).at(-1).equals(movedTarget))
})

test('asynchronous preparation deduplicates body profiles and builds every adjacency before ready', async () => {
  const prepared = new WorldNavigation(world, layout), progress = []
  await prepared.prepare([[0.4, 1.8], [0.4, 1.8]], (value) => progress.push(value), { budgetMs: 1 })
  assert.equal(prepared.grids.size, 1)
  assert.ok(prepared.grid(0.4, 1.8).nodes.every((node) => Array.isArray(node.neighbors)))
  assert.ok(progress.length > 1)
  assert.equal(progress.at(-1).phase, 'ready')
  assert.equal(progress.at(-1).ratio, 1)
  const target = point(10, 6, -8)
  assert.ok(prepared.findPath(point(-16, 0, -30), target, 0.4, 1.8).at(-1).equals(target))
})

test('a decorative item must explicitly opt out instead of silently lacking a collider', () => {
  for (const shape of layout.shapes) {
    if (shape.solid === false) assert.equal(shape.decorative, true, shape.id)
    else assert.equal(shape.solid, true, shape.id)
  }
  const geometry = shapeGeometry(layout.shapes.find((s) => s.id === 'footbridge-deck'))
  geometry.dispose()
})
