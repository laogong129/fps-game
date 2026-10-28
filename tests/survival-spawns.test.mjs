import test from 'node:test'
import assert from 'node:assert/strict'
import { Scene, Vector3 } from 'three'
import { CONFIG } from '../src/config.js'
import { createRailwayLayout } from '../src/game/railway-layout.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { WorldNavigation } from '../src/game/world-navigation.js'
import { TrainController } from '../src/game/train.js'
import { selectSpawn } from '../src/game/survival-spawns.js'
import { enemyBody, canMelee } from '../src/game/pursuit.js'

const point = (x, y = 0, z = 0) => new Vector3(x, y, z)
const layout = createRailwayLayout()
const world = new WorldCollision(layout.shapes, { bounds: layout.bounds })
const navigation = new WorldNavigation(world, layout)
const train = new TrainController(new Scene(), world)
const headings = [point(1), point(-1), point(0, 0, 1), point(0, 0, -1)]
const locations = [
  ['residential', point(-34, 0, -31)], ['station', point(34, 0, -27)],
  ['plaza', point(-30, 0, 40)], ['maintenance', point(46, 0, 35)],
  ['underpass', point(10, 0, 0)], ['bridge', point(10, 6, 0)],
  ['west-platform', point(-48, 1, -4)], ['east-platform', point(42, 1, -4)],
  ['plaza-terrace', point(-32, 2.4, 28)], ['maintenance-deck', point(32, 3.6, 33)],
  ['west-interior', point(-48, 1, 0), -42], ['west-roof', point(-48, 3.5, 0), -42],
  ['east-interior', point(36, 1, 0), 42], ['east-roof', point(36, 3.5, 0), 42],
  ['moving-interior', point(-6, 1, 0), 0], ['moving-roof', point(-6, 3.5, 0), 0],
  ['parkour-crate-east', point(22, 1.65, -22), undefined, true],
  ['parkour-cover', point(-7, 1.2, -22), undefined, true],
  ['parkour-crate-plaza', point(-20, 1, 39), undefined, true],
]
for (const station of layout.stations) {
  for (const suffix of ['bench-back', 'station-bin', 'station-timetable']) {
    const prop = layout.shapes.find((shape) => shape.id === `${station.id}-${suffix}`)
    locations.push([prop.id, point(prop.x, prop.y + prop.height / 2, prop.z), undefined, true])
  }
}

for (const [type, definition] of Object.entries(CONFIG.enemy).filter(([, value]) => value?.size)) {
  test(`local survival spawns remain legal and reachable for the actual ${type} body at every region, level and train position`, () => {
    const { radius, height } = enemyBody(type, definition)
    const failures = []
    for (const [name, foot, trainX, perch] of locations) {
      train.reset()
      if (trainX !== undefined) {
        train.position.x = trainX
        train.destination = trainX < 42 ? 1 : 0
        if (trainX === 0) train.phase = 'travel'
        train.publish()
      }
      for (const forward of headings) {
        const player = { footPosition: foot, pos: foot.clone().add(point(0, CONFIG.player.height)),
          forward, supportId: trainX === undefined ? null : 'train' }
        assert.ok(world.capsuleClear(foot, CONFIG.player.radius, CONFIG.player.bodyHeight), `${name}: invalid player fixture`)
        const spawn = selectSpawn(layout, world, navigation, player, radius, height, train, { type })
        const detail = `${name} heading ${forward.toArray()} r=${radius} h=${height}`
        if (!spawn) { failures.push(`${detail}: no spawn`); continue }
        const distance = spawn.point.distanceTo(foot)
        if (distance < CONFIG.enemy.spawnDistance[0] || distance > CONFIG.enemy.maxSpawnDistance) failures.push(`${detail}: distance ${distance}`)
        if (!world.capsuleClear(spawn.point, radius, height)) failures.push(`${detail}: clips solid`)
        const support = world.querySupport(spawn.point, { radius, height, maxDrop: 0.05, maxRise: 0.05 })
        if (!support) failures.push(`${detail}: unsupported`)
        const direction = spawn.point.clone().sub(foot).setY(0).normalize()
        const enemyEye = spawn.point.clone().add(point(0, height * 0.6))
        if (direction.dot(forward) >= 0.3 && !world.raycast(player.pos, enemyEye)) failures.push(`${detail}: visible ahead`)
        const target = spawn.target
        if (trainX === undefined && !perch) assert.ok(target.equals(foot), detail)
        else if (perch) {
          assert.ok(target.distanceTo(foot) <= radius + 2.5, detail)
          assert.ok(Math.abs(target.y - foot.y) <= 2, detail)
        }
        else if (type === 'boss') {
          assert.ok(target.equals(train.getBossInterceptionTarget()), detail)
          assert.equal(target.y, 0, detail); assert.equal(Math.abs(target.z), 18, detail)
        }
        else if (train.phase === 'travel') assert.ok(target.equals(train.getInterceptionTarget()), detail)
        else assert.ok(train.getBoardingPortals(radius).some((portal) => portal.outside.equals(target)), detail)
        const path = navigation.findPath(spawn.point, target, radius, height)
        if (!path.length) { failures.push(`${detail}: no route`); continue }
        let previous = spawn.point
        for (const waypoint of path) {
          if (!navigation.clear(previous, waypoint, radius, height)) {
            failures.push(`${detail}: blocked route ${previous.toArray()} -> ${waypoint.toArray()}`)
            break
          }
          previous = waypoint
        }
        if (!perch && previous.distanceTo(target) > 2.5) failures.push(`${detail}: route stops ${previous.distanceTo(target).toFixed(2)}m from target`)
        if (perch && (previous.distanceTo(foot) > radius + 2.5 || Math.abs(previous.y - foot.y) > 2)) {
          failures.push(`${detail}: perch approach stops at ${previous.toArray()}`)
        }
      }
    }
    assert.deepEqual(failures, [], failures.join('\n'))
  })
}

test('melee can reach a player beside an enemy on the bridge but cannot pass through the bridge floor', () => {
  const enemy = { ...enemyBody('small', CONFIG.enemy.small), group: { position: point(10, 6, 0) }, dead: false }
  const player = { footPosition: point(10, 6, 0.9) }
  assert.equal(canMelee(enemy, player, world), true)
  enemy.group.position.y = 0
  assert.equal(canMelee(enemy, player, world), false)
  enemy.group.position.y = 6
  player.footPosition.y = 0
  assert.equal(canMelee(enemy, player, world), false)
  enemy.dead = true
  player.footPosition.y = 6
  assert.equal(canMelee(enemy, player, world), false)
})

test('melee respects a real scene cover wall even when both actors are in contact range on the same floor', () => {
  const cover = layout.shapes.find((shape) => shape.category === 'vault-fence')
  const enemy = { ...enemyBody('small', CONFIG.enemy.small), group: { position: point(cover.x, 0, cover.z - 0.52) }, dead: false }
  const player = { footPosition: point(cover.x, 0, cover.z + 0.6) }
  assert.ok(world.capsuleClear(enemy.group.position, enemy.radius, enemy.height))
  assert.ok(world.capsuleClear(player.footPosition, CONFIG.player.radius, CONFIG.player.bodyHeight))
  assert.equal(canMelee(enemy, player, world), false)
  const clearWorld = new WorldCollision(layout.shapes.filter((shape) => shape.id !== cover.id), { bounds: layout.bounds })
  assert.equal(canMelee(enemy, player, clearWorld), true)
})
