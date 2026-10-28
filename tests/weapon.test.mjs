import test from 'node:test'
import assert from 'node:assert/strict'
import * as THREE from 'three'
import { CONFIG } from '../src/config.js'
import { setupWeapon as setup, addTarget as target, advanceFlight } from './helpers/weapon-fixture.mjs'

test('disabled or unlocked-pointer weapons cannot fire, reload, or switch', () => {
  const { weapon, player } = setup()
  assert.equal(weapon.enabled, false)
  weapon.gun.ammo = 3
  assert.equal(weapon.fire(), false)
  assert.equal(weapon.reload(), false)
  weapon.unlock('rifle')
  assert.equal(weapon.active, 'rifle', 'reward unlocks may switch while menus are frozen')
  assert.equal(weapon.switchTo('pistol'), false)
  weapon.setEnabled(true)
  player.controls.isLocked = false
  assert.equal(weapon.fire(), false)
  assert.equal(weapon.reload(), false)
  assert.equal(weapon.switchTo('pistol'), false)
  assert.equal(weapon.gun.ammo, CONFIG.weapon.rifle.magSize)
})

test('pause clears held inputs and freezes cooldown, reload, bloom, and effects', () => {
  const { weapon, player } = setup()
  weapon.unlock('rifle')
  weapon.setEnabled(true)
  weapon.fire()
  weapon.reload()
  weapon.mouseHeld = true
  weapon.adsHeld = true
  player.camera.fov = CONFIG.weapon.rifle.adsFov
  const before = { ammo: weapon.gun.ammo, fire: weapon.gun.fireTimer,
    reload: weapon.gun.reloadTimer, bloom: weapon.gun.bloom, kick: weapon.effects.kick }
  weapon.setEnabled(false)
  weapon.update(10)
  assert.deepEqual({ ammo: weapon.gun.ammo, fire: weapon.gun.fireTimer,
    reload: weapon.gun.reloadTimer, bloom: weapon.gun.bloom, kick: weapon.effects.kick }, before)
  assert.equal(weapon.mouseHeld, false)
  assert.equal(weapon.adsHeld, false)
  assert.equal(player.camera.fov, CONFIG.view.fov)
  weapon.setEnabled(true)
  weapon.update(0.1)
  assert.equal(weapon.gun.ammo, before.ammo, 'resuming does not keep automatic fire held')
})

test('cover before an enemy blocks shots and ends the tracer at cover', () => {
  const world = setup([{ x: 0, z: -5, r: 1, height: 3 }])
  target(world, 10)
  world.weapon.setEnabled(true)
  world.weapon.fire()
  assert.equal(world.weapon.effects.tracer, null, 'a shot does not draw an instant full-range line')
  advanceFlight(world, 0.05)
  assert.equal(world.hits.length, 0)
  const positions = world.weapon.effects.tracer.geometry.attributes.position.array
  assert.ok(Math.abs(positions[5] + 4) < 0.05)
  assert.equal(world.impacts.length, 1)
  assert.equal(world.impacts[0].blocked, true)
  assert.equal(world.shots.length, 1)
  assert.equal(world.weapon.gun.ammo, CONFIG.weapon.pistol.magSize - 1)
})

test('an enemy in front of cover is hit; dead bodies do not stop subsequent shots', () => {
  const world = setup([{ x: 0, z: -15, r: 1, height: 3 }])
  target(world, 4, true)
  const living = target(world, 10)
  world.weapon.setEnabled(true)
  world.weapon.fire()
  assert.equal(world.hits.length, 0, 'damage waits for flight')
  advanceFlight(world, 0.1)
  assert.equal(world.hits.length, 1)
  assert.equal(world.hits[0].root, living)
  assert.ok(world.hits[0].distance > 8 && world.hits[0].distance < 10)
  assert.ok(world.hits[0].face && world.hits[0].mesh)
  assert.equal(world.hits[0].weaponKey, 'pistol')
})

test('arena walls stop a missed shot rather than showing an infinite tracer', () => {
  const world = setup()
  world.weapon.setEnabled(true)
  world.weapon.fire()
  advanceFlight(world, 0.5)
  const positions = world.weapon.effects.tracer.geometry.attributes.position.array
  assert.ok(Math.abs(positions[5] + CONFIG.arena.size / 2 - 0.25) < 0.03)
  const start = new THREE.Vector3().fromArray(positions, 0), tip = new THREE.Vector3().fromArray(positions, 3)
  assert.ok(start.distanceTo(tip) < 2, 'only a short moving tracer tail is shown')
  assert.equal(world.weapon.ballistics.items.length, 0)
  assert.equal(world.hits.length, 0)
})

test('shotgun pellets share one shot ID and carry close-range knockback metadata', () => {
  const world = setup()
  target(world, 6)
  world.weapon.unlock('shotgun')
  world.weapon.jitter = (direction) => direction.clone()
  world.weapon.setEnabled(true)
  world.weapon.fire()
  advanceFlight(world, 0.08)
  assert.equal(world.hits.length, CONFIG.weapon.shotgun.pellets)
  assert.equal(new Set(world.hits.map((h) => h.shotId)).size, 1)
  assert.ok(world.hits.every((h) => h.weaponKey === 'shotgun' && h.knockback === CONFIG.weapon.shotgun.knockback))
  assert.ok(world.hits.every((h) => h.damage === CONFIG.weapon.shotgun.damage))
  assert.ok(world.hits.every((h) => h.direction.z < -0.99))
})

test('shotgun damage falls with distance and distant impacts do not knock back', () => {
  const world = setup()
  target(world, CONFIG.weapon.shotgun.falloffEnd + 4)
  world.weapon.unlock('shotgun')
  world.weapon.jitter = (direction) => direction.clone()
  world.weapon.setEnabled(true)
  world.weapon.fire()
  advanceFlight(world, 0.2)
  assert.equal(world.hits.length, CONFIG.weapon.shotgun.pellets)
  assert.ok(world.hits.every((h) => h.knockback === 0))
  assert.ok(world.hits.every((h) => Math.abs(h.damage - CONFIG.weapon.shotgun.damage * CONFIG.weapon.shotgun.minDamageMult) < 1e-8))
  const g = world.weapon.gun
  assert.equal(world.weapon.damageAtDistance(g, CONFIG.weapon.shotgun.falloffStart), g.damage)
  assert.ok(world.weapon.damageAtDistance(g, 13) < g.damage)
})

test('rifle consecutive shots move the actual aim and build spread; stopping restores precision', () => {
  const { weapon, player } = setup()
  weapon.unlock('rifle')
  weapon.setEnabled(true)
  const initialPitch = player.camera.rotation.x
  const baseSpread = weapon.getSpread()
  weapon.fire()
  const firstBloom = weapon.gun.bloom
  weapon.update(CONFIG.weapon.rifle.fireInterval)
  weapon.gun.fireTimer = 0
  weapon.fire()
  assert.ok(weapon.gun.bloom > firstBloom)
  assert.ok(weapon.getSpread() > baseSpread)
  assert.ok(player.camera.rotation.x > initialPitch)
  const hipSpread = weapon.getSpread()
  weapon.adsHeld = true
  assert.ok(weapon.getSpread() < hipSpread)
  weapon.update(1)
  assert.equal(weapon.gun.bloom, 0)
})

test('automatic fire obeys shot cooldown and does not consume ammo during a reload', () => {
  const { weapon, shots } = setup()
  weapon.unlock('rifle')
  weapon.setEnabled(true)
  weapon.mouseHeld = true
  weapon.update(0.01)
  weapon.update(0.01)
  assert.equal(shots.length, 1)
  weapon.gun.ammo = 0
  weapon.gun.fireTimer = 0
  weapon.update(0.01)
  assert.equal(weapon.gun.reloading, true)
  const count = shots.length
  weapon.update(0.2)
  assert.equal(shots.length, count)
  weapon.mouseHeld = false
  weapon.update(CONFIG.weapon.rifle.reloadTime)
  assert.equal(weapon.gun.ammo, weapon.gun.magSize, 'reserve ammunition stays unlimited')
})

test('rifle recoil raises aim without roll at every pointer-lock heading', () => {
  for (const yaw of [0, Math.PI / 2, Math.PI, -Math.PI / 2, Math.PI * 0.75]) {
    for (const pitch of [-0.3, 0, 0.3]) {
      const { weapon, player } = setup()
      weapon.unlock('rifle')
      weapon.setEnabled(true)
      player.camera.quaternion.setFromEuler(new THREE.Euler(pitch, yaw, 0, 'YXZ'))
      const before = player.camera.getWorldDirection(new THREE.Vector3())
      weapon.fire()
      const after = player.camera.getWorldDirection(new THREE.Vector3())
      assert.ok(after.y > before.y, `aim must rise at yaw=${yaw}, pitch=${pitch}`)
      const headingBefore = before.clone().setY(0).normalize()
      const headingAfter = after.clone().setY(0).normalize()
      assert.ok(headingBefore.dot(headingAfter) > 1 - 1e-9, 'recoil preserves horizontal heading')
      const rotation = new THREE.Euler().setFromQuaternion(player.camera.quaternion, 'YXZ')
      assert.ok(Math.abs(rotation.z) < 1e-9, 'recoil must not introduce roll')
    }
  }
})

test('fire-rate upgrades increase frequency by 20%, stop at the cap, and cannot be wasted', () => {
  const { weapon } = setup()
  const before = 1 / weapon.gun.fireInterval
  const preview = weapon.getUpgradePreview('rof')
  assert.ok(Math.abs(preview.after / before - 1.2) < 1e-8)
  assert.match(preview.description, /仅强化手枪/)
  assert.equal(weapon.applyUpgrade('rof'), true)
  for (let i = 0; i < 30; i++) weapon.applyUpgrade('rof')
  assert.equal(weapon.gun.fireInterval, CONFIG.levelup.minFireInterval)
  assert.equal(weapon.getUpgradePreview('rof'), null)
  assert.equal(weapon.applyUpgrade('rof'), false)
})

test('an upgrade bound to a gun stays bound after unlocking another gun', () => {
  const { weapon } = setup()
  const preview = weapon.getUpgradePreview('damage')
  weapon.unlock('shotgun')
  assert.equal(weapon.applyUpgrade('damage', preview.gunKey), true)
  assert.equal(weapon.guns.pistol.damage, CONFIG.weapon.pistol.damage + 5)
  assert.equal(weapon.guns.shotgun.damage, CONFIG.weapon.shotgun.damage)
  assert.equal(weapon.getUpgradePreview('damage', 'not-a-gun'), null)
})

test('restarting resets upgrades, ammo, reload state, visual residue, and held input', () => {
  const { weapon, player } = setup()
  weapon.unlock('rifle')
  weapon.setEnabled(true)
  weapon.fire()
  weapon.reload()
  weapon.applyUpgrade('damage')
  weapon.mouseHeld = true
  weapon.adsHeld = true
  weapon.resetUpgrades()
  assert.equal(weapon.enabled, false)
  assert.deepEqual([...weapon.unlocked], ['pistol'])
  assert.equal(weapon.active, 'pistol')
  assert.equal(weapon.gun.ammo, CONFIG.weapon.pistol.magSize)
  assert.equal(weapon.gun.fireTimer, 0)
  assert.equal(weapon.gun.reloadTimer, 0)
  assert.equal(weapon.gun.reloading, false)
  assert.equal(weapon.effects.tracer, null)
  assert.equal(weapon.effects.flash.intensity, 0)
  assert.equal(weapon.mouseHeld, false)
  assert.equal(weapon.adsHeld, false)
  assert.equal(player.camera.fov, CONFIG.view.fov)
})
