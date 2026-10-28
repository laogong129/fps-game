import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CONFIG } from '../src/config.js'
import { WeaponModel, normalizeWeaponModel, syncViewModelFov } from '../src/game/weapon-model.js'

async function loadActualModel(key) {
  const bytes = await readFile(new URL(`../public/${CONFIG.gunModel[key].file}`, import.meta.url))
  const data = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength)
  return (await new GLTFLoader().parseAsync(data, '')).scene
}

test('the barrel attachment follows the real held model, camera rotation, recoil depth and ADS mount', async () => {
  const camera = new THREE.PerspectiveCamera(CONFIG.view.fov, 1.6, 0.1, 200)
  camera.position.set(5, 2, -3)
  camera.rotation.y = 0.8
  const gunGroup = new THREE.Group()
  gunGroup.position.set(0.25, -0.4, -0.5)
  camera.add(gunGroup)
  const player = { camera, gunGroup }
  const view = new WeaponModel(player)
  view.models.pistol = await loadActualModel('pistol')
  view.update('pistol')
  const point = view.getMuzzleWorld()
  const expected = player.gunModel.getObjectByName('Muzzle').getWorldPosition(new THREE.Vector3())
  assert.ok(point.distanceTo(expected) < 1e-9)
  assert.ok(point.distanceTo(gunGroup.getWorldPosition(new THREE.Vector3())) > 0.3,
    'shots originate at the barrel, rather than at the holding mount')
  gunGroup.position.z += 0.06
  camera.fov = CONFIG.weapon.rifle.adsFov
  camera.updateProjectionMatrix()
  view.syncPerspective()
  assert.ok(view.getMuzzleWorld().distanceTo(point) > 0.05)
  assert.ok(view.getMuzzleWorld().distanceTo(player.gunModel.getObjectByName('Muzzle').getWorldPosition(new THREE.Vector3())) < 1e-9)
})

test('loading fallback geometry also has a safe barrel attachment', () => {
  const player = { camera: new THREE.PerspectiveCamera(), gunGroup: new THREE.Group() }
  const view = new WeaponModel(player)
  view.update('rifle')
  const muzzle = player.gunModel.getObjectByName('Muzzle')
  assert.ok(muzzle)
  assert.ok(muzzle.position.z < -0.5)
  assert.ok(view.getMuzzleWorld().distanceTo(muzzle.getWorldPosition(new THREE.Vector3())) < 1e-9)
})

function projectVertices(root, camera) {
  root.updateWorldMatrix(true, true)
  camera.updateMatrixWorld(true)
  const bounds = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity, nearestZ: -Infinity }
  root.traverse((object) => {
    if (!object.isMesh) return
    const positions = object.geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      const vertex = new THREE.Vector3().fromBufferAttribute(positions, i).applyMatrix4(object.matrixWorld)
      bounds.nearestZ = Math.max(bounds.nearestZ, vertex.z)
      vertex.project(camera)
      bounds.minX = Math.min(bounds.minX, (vertex.x + 1) / 2)
      bounds.maxX = Math.max(bounds.maxX, (vertex.x + 1) / 2)
      bounds.minY = Math.min(bounds.minY, (1 - vertex.y) / 2)
      bounds.maxY = Math.max(bounds.maxY, (1 - vertex.y) / 2)
    }
  })
  bounds.width = bounds.maxX - bounds.minX
  bounds.visibleHeight = Math.min(1, bounds.maxY) - Math.max(0, bounds.minY)
  return bounds
}

for (const key of ['pistol', 'shotgun', 'rifle']) {
  test(`${key}: actual GLB normalizes to meter units, faces forward, and stays below the crosshair`, async () => {
    const original = await loadActualModel(key)
    const before = new THREE.Box3().setFromObject(original)
    const model = normalizeWeaponModel(original, CONFIG.gunModel[key])
    const after = new THREE.Box3().setFromObject(original)
    assert.deepEqual(after.min.toArray(), before.min.toArray(), 'cached source transforms remain unchanged')
    assert.deepEqual(after.max.toArray(), before.max.toArray())
    const mount = new THREE.Group()
    mount.position.set(0.25, -0.4, -0.5)
    mount.add(model)
    const camera = new THREE.PerspectiveCamera(CONFIG.view.fov, 1.6, 0.1, 200)
    const bounds = projectVertices(mount, camera)
    assert.ok(bounds.nearestZ < -0.3, 'camera is outside the weapon and its near plane')
    assert.ok(bounds.minX > 0.5, 'weapon stays on the right side of the crosshair')
    assert.ok(bounds.minY > 0.62, 'weapon does not obscure the center or top half')
    assert.ok(bounds.width >= 0.18 && bounds.width <= 0.3, `screen width ${bounds.width}`)
    assert.ok(bounds.visibleHeight >= 0.25 && bounds.visibleHeight <= 0.36, `screen height ${bounds.visibleHeight}`)
    const normalized = model.children[0]
    const actualLength = before.getSize(new THREE.Vector3()).z * normalized.scale.z
    assert.ok(Math.abs(actualLength - CONFIG.gunModel[key].length) < 1e-6)
    const muzzle = new THREE.Vector3(0, 0, -1)
      .applyEuler(normalized.rotation).applyEuler(model.rotation)
    assert.ok(muzzle.z < -0.95, 'source muzzle points toward camera-local negative Z')
    assert.ok(model.getObjectByName('Muzzle'), 'the source asset includes a barrel-tip attachment')
  })

  test(`${key}: ADS preserves actual GLB screen bounds and leaves the aiming direction unchanged`, async () => {
    const model = normalizeWeaponModel(await loadActualModel(key), CONFIG.gunModel[key])
    const basePosition = new THREE.Vector3(0.25, -0.4, -0.5)
    const mount = new THREE.Group()
    mount.position.copy(basePosition)
    mount.add(model)
    const camera = new THREE.PerspectiveCamera(CONFIG.view.fov, 1.6, 0.1, 200)
    const hip = projectVertices(mount, camera)
    const direction = camera.getWorldDirection(new THREE.Vector3())
    camera.fov = CONFIG.weapon.rifle.adsFov
    camera.updateProjectionMatrix()
    syncViewModelFov(mount, camera.fov, basePosition)
    const ads = projectVertices(mount, camera)
    for (const value of ['minX', 'maxX', 'minY', 'maxY', 'width', 'visibleHeight']) {
      assert.ok(Math.abs(ads[value] - hip[value]) < 1e-9, `${value} must stay stable through ADS`)
    }
    assert.equal(mount.position.z, basePosition.z, 'recoil depth is preserved')
    assert.ok(direction.distanceTo(camera.getWorldDirection(new THREE.Vector3())) < 1e-9)
    syncViewModelFov(mount, CONFIG.view.fov, basePosition)
    assert.deepEqual(mount.scale.toArray(), [1, 1, 1])
    assert.deepEqual(mount.position.toArray(), basePosition.toArray())
  })
}
