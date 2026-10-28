import test from 'node:test'
import assert from 'node:assert/strict'
import { Euler, Vector3 } from 'three'
import { CONFIG } from '../src/config.js'
import { WorldCollision } from '../src/game/world-collision.js'
import { TrainController } from '../src/game/train.js'
import { setupWeapon, addTarget, advanceFlight } from './helpers/weapon-fixture.mjs'

test('a visible enemy cannot be shot through a wall containing the actual barrel', () => {
  const wall = { id: 'barrel-wall', type: 'box', x: 0.25, y: 1.3, z: -0.65,
    width: 0.7, height: 0.4, depth: 0.05 }
  const f = setupWeapon([], new WorldCollision([wall]))
  addTarget(f, 10)
  assert.ok(f.weapon.rayHit(f.player.camera.position, new Vector3(0, 0, -1), f.targets).root)
  f.weapon.setEnabled(true)
  f.weapon.fire()
  assert.equal(f.hits.length, 0)
  advanceFlight(f, 0.08)
  assert.equal(f.hits.length, 0)
  assert.equal(f.impacts.length, 1)
  assert.equal(f.impacts[0].shape.id, wall.id)
})

test('a target closer than the barrel is hit after simulation without firing backward or spawning inside its mesh', () => {
  const f = setupWeapon()
  const close = addTarget(f, 0.75)
  f.weapon.setEnabled(true)
  f.weapon.fire()
  assert.equal(f.hits.length, 0)
  assert.ok(f.weapon.ballistics.items[0].velocity.z < 0)
  advanceFlight(f, 0.02)
  assert.equal(f.hits.length, 1)
  assert.equal(f.hits[0].root, close)
  assert.ok(f.hits[0].distance < 0.8)
})

test('switching weapons or upgrading cannot rewrite the damage or identity of an already flying bullet', () => {
  const f = setupWeapon()
  addTarget(f, 30)
  f.weapon.jitter = (direction) => direction.clone()
  f.weapon.setEnabled(true)
  f.weapon.fire()
  f.weapon.applyUpgrade('damage')
  f.weapon.unlock('rifle')
  advanceFlight(f, 0.2)
  assert.equal(f.hits.length, 1)
  assert.equal(f.hits[0].weaponKey, 'pistol')
  assert.equal(f.hits[0].damage, CONFIG.weapon.pistol.damage)
  assert.equal(f.weapon.active, 'rifle')
})

test('pausing freezes airborne bullets and reset removes them before a new run', () => {
  const f = setupWeapon()
  addTarget(f, 40)
  f.weapon.setEnabled(true); f.weapon.fire()
  const bullet = f.weapon.ballistics.items[0], origin = bullet.position.clone()
  f.weapon.setEnabled(false)
  f.weapon.updateProjectiles(10)
  assert.ok(bullet.position.equals(origin))
  assert.equal(f.hits.length, 0)
  f.weapon.resetUpgrades()
  assert.equal(f.weapon.ballistics.items.length, 0)
})

test('fixed zeroing does not secretly remove all bullet drop at each newly aimed distance', () => {
  const launches = []
  for (const distance of [20, 60]) {
    const f = setupWeapon()
    addTarget(f, distance)
    f.weapon.jitter = (direction) => direction.clone()
    f.weapon.model.getMuzzleWorld = () => f.player.camera.position.clone()
    f.weapon.setEnabled(true); f.weapon.fire()
    launches.push(f.weapon.ballistics.items[0].velocity.clone())
  }
  assert.ok(launches[0].y > 0)
  assert.ok(launches[0].distanceTo(launches[1]) < 1e-8)
})

test('automatic cadence remains consistent at 30 and 60 updates per second', () => {
  const counts = []
  for (const rate of [30, 60]) {
    const f = setupWeapon()
    f.weapon.unlock('rifle'); f.weapon.setEnabled(true); f.weapon.mouseHeld = true
    for (let frame = 0; frame < rate; frame++) f.weapon.update(1 / rate)
    counts.push(f.shots.length)
  }
  assert.ok(Math.abs(counts[0] - counts[1]) <= 1)
  assert.ok(counts.every((count) => count >= 9 && count <= 10), String(counts))
})

test('recoil recovers smoothly while preserving the player movement of the aim', () => {
  const f = setupWeapon()
  f.weapon.setEnabled(true); f.weapon.fire()
  const kicked = new Euler().setFromQuaternion(f.player.camera.quaternion, 'YXZ').x
  assert.ok(kicked > 0)
  f.player.camera.quaternion.setFromEuler(new Euler(kicked - 0.12, 0.5, 0, 'YXZ'))
  f.weapon.update(0.3)
  const recovered = new Euler().setFromQuaternion(f.player.camera.quaternion, 'YXZ')
  assert.ok(recovered.x < -0.1 && recovered.x > -0.15)
  assert.ok(Math.abs(recovered.y - 0.5) < 1e-8 && Math.abs(recovered.z) < 1e-8)
})

test('automatic fire from a moving car starts at its current muzzle time and passes a real open window', () => {
  const world = new WorldCollision(), f = setupWeapon([], world)
  const train = new TrainController(f.scene, world)
  train.update(26)
  f.player.camera.position.set(-50.5, 2.6, 0)
  f.player.camera.lookAt(new Vector3(-50.5, 2.6, -12))
  f.player.motor = { supportId: 'train', grounded: true, velocity: new Vector3() }
  const enemy = addTarget(f, 12)
  enemy.position.x = -50.5
  enemy.children[0].position.y = 2.6
  f.weapon.jitter = (direction) => direction.clone()
  f.weapon.unlock('rifle'); f.weapon.setEnabled(true); f.weapon.mouseHeld = true
  const frame = () => {
    const before = train.position.x
    train.update(1 / 60)
    f.player.camera.position.x += train.position.x - before
    f.weapon.update(1 / 60)
    f.weapon.beginProjectileFrame()
    f.weapon.updateProjectiles(1 / 60)
  }
  frame()
  assert.equal(f.weapon.ballistics.items.length, 1)
  assert.equal(f.weapon.ballistics.items[0].age, 0, 'an automatic shot cannot hit a window frame in the past')
  f.weapon.mouseHeld = false
  for (let index = 0; index < 30; index++) frame()
  assert.equal(f.hits.length, 1)
  assert.equal(f.hits[0].root, enemy)
  assert.equal(f.impacts.length, 1)
})
