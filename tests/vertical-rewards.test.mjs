import test from 'node:test'
import assert from 'node:assert/strict'
import { Scene, Vector3 } from 'three'
import { CONFIG } from '../src/config.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { PickupField } from '../src/game/pickups.js'
import { LevelUp } from '../src/game/levelup.js'
import { GameSession } from '../src/game/session.js'
import { createTrainLayout } from '../src/game/train-layout.js'

const v = (x = 0, y = 0, z = 0) => new Vector3(x, y, z)
const ground = { id: 'ground', type: 'box', x: 0, y: -0.1, z: 0, width: 120, height: 0.2, depth: 120, walkable: true }
const bridge = { id: 'bridge', type: 'box', x: 0, y: 2.9, z: 0, width: 12, height: 0.2, depth: 12, walkable: true }

function setup(shapes = [ground, bridge]) {
  const player = {
    footPosition: v(40), pos: v(40, 1.7), hp: 100, maxHp: 100,
    moveSpeed: 6, speedMult: 1,
    healOrGrow(amount) { this.maxHp += amount; this.hp += amount },
  }
  const weapon = { active: 'pistol', unlocked: new Set(['pistol']) }
  const scene = new Scene()
  const world = new WorldCollision(shapes)
  const field = new PickupField(scene, player, world)
  const levelup = new LevelUp(scene, player, weapon, undefined, undefined, world)
  return { scene, world, player, weapon, field, levelup }
}

test('experience and healing are placed on their actual ground, upper floor and sloped support', () => {
  const ramp = { id: 'ramp', type: 'ramp', x: 20, y: 1, z: 0, width: 4, height: 2, depth: 8,
    riseAxis: 'z', riseSign: 1, walkable: true }
  const f = setup([ground, bridge, ramp])
  const low = f.field.spawnExperience(v())
  const high = f.field.spawnExperience(v(0, 3, 0))
  const heal = f.field.spawnHeal('small', v(0, 3, 0))
  const slope = f.field.spawnExperience(v(20, 1, 0))
  assert.equal(low.position.y, 0.5)
  assert.equal(high.position.y, 3.5)
  assert.equal(heal.position.y, 3.6)
  const support = f.world.querySupport(slope.position.clone().setY(1), { radius: 0.1, height: 0.1, maxRise: 0.3, maxDrop: 0.3 })
  assert.ok(Math.abs(slope.position.y - (support.height + 0.5)) < 0.001)
})

test('nearby XZ positions cannot magnet or collect experience across a solid floor', () => {
  const f = setup()
  const high = f.field.spawnExperience(v(0, 3, 0), 4)
  const original = high.position.clone()
  f.player.footPosition.set(0, 0, 0)
  f.player.pos.set(0, 1.7, 0)
  assert.equal(f.field.updateExperience(0.5, f.player.pos), 0)
  assert.deepEqual(high.position.toArray(), original.toArray())
  f.player.footPosition.y = 3
  f.player.pos.y = 4.7
  assert.equal(f.field.updateExperience(0, f.player.pos), 4)
  const low = f.field.spawnExperience(v(), 2)
  const lowerPosition = low.position.clone()
  assert.equal(f.field.updateExperience(0.5, f.player.pos), 0)
  assert.deepEqual(low.position.toArray(), lowerPosition.toArray())
})

test('world-aware LevelUp forwards its world, collects only the same floor, then recovers all remaining value', () => {
  const f = setup()
  f.player.footPosition.set(0, 0, 0)
  f.player.pos.set(0, 1.7, 0)
  f.levelup.spawnPickup(v(), 3)
  f.levelup.spawnPickup(v(0, 3, 0), 25)
  f.levelup.update(0, f.player.pos)
  assert.equal(f.levelup.totalXp, 3)
  assert.equal(f.levelup.pendingUpgrades, 0)
  assert.equal(f.levelup.collectAll(), 25)
  assert.equal(f.levelup.totalXp, 28)
  assert.equal(f.levelup.pendingUpgrades, 2)
  assert.equal(f.levelup.collectAll(), 0)
})

test('visual cap merges value within its floor and retains a separate upper-floor reward', () => {
  const f = setup()
  for (let index = 0; index < CONFIG.pickup.maxOrbs; index++) f.field.spawnExperience(v(), 1)
  f.field.spawnExperience(v(), 200)
  const high = f.field.spawnExperience(v(0, 3, 0), 40)
  assert.equal(f.field.pickups.length, CONFIG.pickup.maxOrbs + 1)
  assert.equal(high.userData.value, 40)
  assert.equal(high.position.y, 3.5)
  assert.equal(f.field.pickups.filter((orb) => orb.position.y < 1).reduce((sum, orb) => sum + orb.userData.value, 0), CONFIG.pickup.maxOrbs + 200)
  assert.equal(f.field.pickups.reduce((sum, orb) => sum + orb.userData.value, 0), CONFIG.pickup.maxOrbs + 240)
})

test('train-interior and roof drops attach independently to the moving support', () => {
  const f = setup([ground])
  const layout = createTrainLayout()
  f.world.setDynamicBody('train', { shapes: layout.shapes, position: v(10), velocity: v() })
  const inside = f.field.spawnExperience(v(4, 1, 0), 2)
  const roof = f.field.spawnExperience(v(4, 3.5, 0), 3)
  const heal = f.field.spawnHeal('small', v(4, 1, 0))
  for (const mesh of [inside, roof, heal]) assert.equal(mesh.userData.bodyId, 'train')
  assert.equal(inside.position.y, 1.5)
  assert.equal(roof.position.y, 4)
  assert.equal(heal.position.y, 1.6)
  const positions = [inside, roof, heal].map((mesh) => mesh.position.clone())
  f.world.setDynamicBody('train', { shapes: layout.shapes, position: v(15), previousPosition: v(10), velocity: v(5) })
  f.field.updateExperience(0.1, f.player.pos)
  f.field.updateHeals(0.1, f.player.pos, () => {})
  for (const [index, mesh] of [inside, roof, heal].entries()) {
    assert.ok(mesh.position.distanceTo(positions[index].clone().add(v(5))) < 0.001)
  }
})

test('train roof cannot collect a car-interior drop through its roof panel', () => {
  const f = setup([ground])
  const layout = createTrainLayout()
  f.world.setDynamicBody('train', { shapes: layout.shapes, position: v() })
  const inside = f.field.spawnExperience(v(-6, 1, 0), 5)
  f.player.footPosition.set(-6, 3.5, 0)
  f.player.pos.set(-6, 5.2, 0)
  const original = inside.position.clone()
  assert.equal(f.field.updateExperience(0.5, f.player.pos), 0)
  assert.deepEqual(inside.position.toArray(), original.toArray())
  f.player.footPosition.y = 1
  f.player.pos.y = 2.7
  assert.equal(f.field.updateExperience(0, f.player.pos), 5)
})

test('full health preserves upper-floor healing and only missing health is restored', () => {
  const f = setup()
  f.player.footPosition.set(0, 3, 0)
  f.player.pos.set(0, 4.7, 0)
  const heal = f.field.spawnHeal('small', v(0, 3, 0))
  const floats = []
  f.field.updateHeals(1, f.player.pos, (_, amount) => floats.push(amount))
  assert.equal(f.field.heals.length, 1)
  assert.equal(heal.userData.age, 1)
  f.player.hp = 96
  f.field.updateHeals(0, f.player.pos, (_, amount) => floats.push(amount))
  assert.equal(f.player.hp, 100)
  assert.equal(f.field.heals.length, 0)
  assert.deepEqual(floats, [4])
})

for (const state of ['paused', 'levelup', 'won', 'dead']) {
  test(`${state} session freezes world-aware reward ages, train carry and resource values`, () => {
    const f = setup()
    const orb = f.levelup.spawnPickup(v(0, 3, 0), 5)
    const heal = f.levelup.spawnHeal('small', v(0, 3, 0))
    const game = new GameSession({ ...f, train: { update() { throw new Error('train advanced') } },
      spawner: {}, hud: {}, floats: {}, arena: {} })
    game.state = state
    game.update(30)
    assert.equal(orb.userData.age, 0)
    assert.equal(heal.userData.age, 0)
    assert.equal(f.levelup.totalXp, 0)
    assert.equal(f.levelup.pickups.length, 1)
    assert.equal(f.levelup.heals.length, 1)
  })
}
