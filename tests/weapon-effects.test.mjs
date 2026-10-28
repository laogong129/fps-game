import test from 'node:test'
import assert from 'node:assert/strict'
import { Group, Object3D, PerspectiveCamera, Scene, Vector3 } from 'three'
import { WeaponEffects } from '../src/game/weapon-effects.js'
import { playWeaponShot } from '../src/game/weapon-sound.js'

function setup() {
  const scene = new Scene(), camera = new PerspectiveCamera(75, 1, 0.1, 200)
  camera.position.set(4, 2, -3)
  const gunGroup = new Group(), gunModel = new Group()
  gunGroup.position.set(0.25, -0.4, -0.5)
  gunModel.position.set(0.02, 0.06, 0.08)
  gunGroup.add(gunModel); camera.add(gunGroup); scene.add(camera)
  const player = { camera, gunGroup, gunModel, motor: { grounded: true, velocity: new Vector3() } }
  const effects = new WeaponEffects(scene, player)
  return { scene, camera, player, effects }
}

test('muzzle flash follows a model marker through aim, recoil and model changes', () => {
  const f = setup(), marker = new Object3D()
  marker.position.set(0.03, 0.04, -0.7); marker.name = 'muzzle'
  f.player.gunModel.add(marker)
  f.effects.setMuzzleProvider((out) => marker.getWorldPosition(out))
  f.camera.rotation.set(0.2, 1.4, 0, 'YXZ')
  f.effects.onShot('rifle')
  f.effects.update(1 / 60, { weaponKey: 'rifle' })
  f.scene.updateMatrixWorld(true)
  const point = marker.getWorldPosition(new Vector3())
  assert.ok(f.effects.muzzle.getWorldPosition(new Vector3()).distanceTo(point) < 1e-8)
  assert.ok(f.effects.flash.getWorldPosition(new Vector3()).distanceTo(point) < 1e-8)
  const next = new Group()
  next.position.set(0.06, 0.03, 0.1)
  f.player.gunGroup.remove(f.player.gunModel); f.player.gunGroup.add(next); f.player.gunModel = next
  next.add(marker)
  f.effects.update(1 / 60, { weaponKey: 'pistol' })
  f.scene.updateMatrixWorld(true)
  assert.ok(f.effects.getMuzzleWorld().distanceTo(marker.getWorldPosition(new Vector3())) < 1e-8)
})

test('gun presentation preserves actual aiming and reload rotation, then resets without residue', () => {
  const f = setup(), start = f.player.gunModel.quaternion.clone()
  const aim = f.camera.quaternion.clone(), baseZ = f.player.gunGroup.position.z
  f.player.gunGroup.rotation.x = -0.45
  f.effects.onShot('shotgun')
  f.effects.update(1 / 60, { reloading: true })
  assert.ok(f.camera.quaternion.equals(aim), 'visual recoil cannot change the ballistic aim')
  assert.equal(f.player.gunGroup.rotation.x, -0.45, 'reload retains ownership of the parent rotation')
  assert.ok(f.player.gunGroup.position.z > baseZ)
  assert.ok(f.player.gunModel.quaternion.angleTo(start) > 0.001)
  f.effects.reset()
  assert.equal(f.player.gunGroup.position.z, baseZ)
  assert.ok(f.player.gunModel.quaternion.equals(start))
  assert.equal(f.effects.kick, 0)
  assert.equal(f.effects.flash.intensity, 0)
})

test('fast projectiles use a short moving tail and reuse the same GPU geometry', () => {
  const { effects } = setup()
  const origin = new Vector3(0, 1, 0), tip = new Vector3(0, 1, -90)
  effects.updateProjectile('bullet', origin, tip, { weaponKey: 'rifle' })
  const line = effects.tracer, geometry = line.geometry
  let points = geometry.attributes.position
  const start = new Vector3().fromBufferAttribute(points, 0)
  assert.ok(start.distanceTo(tip) <= 2 && start.distanceTo(tip) > 0)
  assert.ok(new Vector3().fromBufferAttribute(points, 1).equals(tip))
  effects.updateProjectile('bullet', tip, tip.clone().add(new Vector3(0, 0, -9)))
  assert.equal(effects.tracer.geometry, geometry)
  assert.equal(effects.projectileTracers.size, 1)
})

test('a sub-frame impact is visible once, expires and can be reused without growing the pool', () => {
  const { effects } = setup(), count = effects.scene.children.length
  const from = new Vector3(), to = new Vector3(0, 0, -0.2)
  effects.updateProjectile(1, from, to)
  const line = effects.tracer
  effects.removeProjectile(1)
  effects.update(0.05)
  assert.equal(line.visible, true)
  effects.update(0.1)
  assert.equal(line.visible, false)
  for (let i = 0; i < 200; i++) effects.updateProjectile(i, from, to)
  assert.equal(effects.scene.children.length, count)
  assert.ok(effects.projectileTracers.size <= effects.tracers.length)
  effects.spawnSparks(to)
  effects.reset()
  assert.equal(effects.projectileTracers.size, 0)
  assert.ok(effects.tracers.every((item) => !item.mesh.visible))
  assert.ok(effects.sparks.every((item) => !item.mesh.visible))
})

test('spring recoil settles consistently at different frame rates and zero time freezes presentation', () => {
  const a = setup(), b = setup()
  a.effects.onShot('shotgun'); b.effects.onShot('shotgun')
  for (let i = 0; i < 18; i++) a.effects.update(1 / 60)
  for (let i = 0; i < 36; i++) b.effects.update(1 / 120)
  assert.ok(a.effects.motion.offset.distanceTo(b.effects.motion.offset) < 1e-8)
  const before = a.player.gunModel.quaternion.clone()
  a.effects.update(0)
  assert.ok(a.player.gunModel.quaternion.equals(before))
  for (let i = 0; i < 120; i++) a.effects.update(1 / 60)
  assert.ok(a.effects.motion.offset.length() < 0.00001)
})

test('walking sway is bounded and suppressed while aiming, without altering the camera', () => {
  const a = setup(), b = setup()
  const aBase = a.player.gunModel.position.clone(), bBase = b.player.gunModel.position.clone()
  const aim = a.camera.quaternion.clone()
  for (let i = 0; i < 60; i++) {
    a.effects.update(1 / 60, { moving: true })
    b.effects.update(1 / 60, { moving: true, ads: true })
  }
  assert.ok(b.player.gunModel.position.distanceTo(bBase) < a.player.gunModel.position.distanceTo(aBase))
  for (let i = 0; i < 300; i++) a.effects.update(1 / 60, { moving: true, sprinting: true })
  assert.ok(a.player.gunModel.position.distanceTo(aBase) < 0.01)
  assert.ok(a.camera.quaternion.equals(aim))
  assert.equal(playWeaponShot('pistol'), false, 'headless use without WebAudio is safe')
})
