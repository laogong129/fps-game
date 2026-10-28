import test from 'node:test'
import assert from 'node:assert/strict'
import { Box3, Matrix4, Scene, Vector3 } from 'three'
import { createRailwayLayout } from '../src/game/railway-layout.js'
import { meshFromShape } from '../src/game/railway-geometry.js'
import { addStreetDetails } from '../src/game/railway-street-details.js'
import { createRailwayMaterials } from '../src/game/railway-materials.js'
import { addInstancedDetails, canInstanceDetail } from '../src/game/railway-instances.js'
import { WorldCollision } from '../src/game/world-collision.js'

test('only explicitly non-solid cosmetic primitives can be instanced', () => {
  const detail = { type: 'box', instanced: true, solid: false, decorative: true }
  assert.equal(canInstanceDetail(detail), true)
  assert.equal(canInstanceDetail({ ...detail, type: 'cylinder' }), true)
  for (const change of [{ solid: true }, { solid: undefined }, { signal: true },
    { decorative: false }, { instanced: false }, { type: 'ramp' }]) {
    assert.equal(canInstanceDetail({ ...detail, ...change }), false, JSON.stringify(change))
  }
})

test('batched real street details preserve standalone transforms and culling bounds', (t) => {
  const layout = createRailwayLayout()
  const eligible = layout.shapes.filter(canInstanceDetail)
  const flags = { instanced: true, solid: false, decorative: true, color: 0x556677 }
  const shapes = [...eligible,
    { ...flags, id: 'rotated-box', type: 'box', x: 3.4, y: 2.2, z: -8.6,
      width: 2.3, height: 0.17, depth: 0.45, rotation: Math.PI / 5 },
    { ...flags, id: 'rotated-cylinder', type: 'cylinder', x: -7.1, y: 3.6, z: 4.3,
      radius: 0.23, height: 2.7, rotation: -Math.PI / 7 }]
  const scene = new Scene(), materials = createRailwayMaterials()
  const result = addInstancedDetails(scene, shapes, materials.materialFor)
  t.after(() => { result.dispose(); materials.dispose() })
  assert.equal(result.shapeCount, shapes.length)
  assert(result.meshes.length < shapes.length / 10, 'repeated details should share draw calls')
  const matrix = new Matrix4()
  for (const shape of shapes) {
    const { mesh, index } = result.byShapeId.get(shape.id)
    mesh.getMatrixAt(index, matrix)
    const original = meshFromShape(shape, mesh.material)
    const expected = new Box3().setFromObject(original)
    const actual = mesh.geometry.boundingBox.clone().applyMatrix4(matrix)
    assert(actual.min.distanceTo(expected.min) < 0.00002, `${shape.id}: minimum`)
    assert(actual.max.distanceTo(expected.max) < 0.00002, `${shape.id}: maximum`)
    assert(mesh.boundingBox.clone().expandByScalar(0.00002).containsBox(actual), `${shape.id}: culling box`)
    const position = new Vector3().setFromMatrixPosition(matrix)
    assert(position.distanceTo(original.position) < 0.00001, `${shape.id}: position`)
    const source = original.geometry.getAttribute('position'), unit = mesh.geometry.getAttribute('position')
    for (let vertex = 0; vertex < source.count; vertex++) {
      const expectedPoint = new Vector3().fromBufferAttribute(source, vertex).applyMatrix4(original.matrixWorld)
      const actualPoint = new Vector3().fromBufferAttribute(unit, vertex).applyMatrix4(matrix)
      assert(actualPoint.distanceTo(expectedPoint) < 0.00002, `${shape.id}: vertex ${vertex}`)
    }
    assert.equal(mesh.userData.collider, false)
    assert.equal(mesh.userData.shapeIds[index], shape.id)
    original.geometry.dispose()
  }
})

test('warning lights retain independent materials without a browser canvas', (t) => {
  const materials = createRailwayMaterials()
  t.after(() => materials.dispose())
  const shape = { color: 0x8b2426, emissive: 0xff3022, decorative: true }
  const shared = materials.materialFor(shape)
  const first = materials.materialFor({ ...shape, signal: true })
  const second = materials.materialFor({ ...shape, signal: true })
  const initialIntensity = shared.emissiveIntensity
  first.emissiveIntensity = 3
  first.color.setHex(0xffffff)
  assert.notEqual(first, second)
  assert.equal(second.emissiveIntensity, initialIntensity)
  assert.equal(shared.emissiveIntensity, initialIntensity)
  assert.equal(second.color.getHex(), shape.color)
  assert.equal(shared.color.getHex(), shape.color)
  for (const surface of ['asphalt', 'concrete', 'plaster', 'roof', 'metal']) {
    assert.equal(materials.materialFor({ color: 0x555555, surface }).isMeshStandardMaterial, true)
  }
})

test('street dressings preserve physical solids and playable collision queries', () => {
  const layout = createRailwayLayout()
  const originals = layout.shapes.filter((shape) => !shape.id.startsWith('street-detail-'))
  const snapshot = structuredClone(originals)
  const dressed = [...originals]
  addStreetDetails(dressed, layout.colors)
  const additions = dressed.slice(originals.length)
  assert(additions.length > 0)
  assert(additions.every((shape) => shape.solid === false && shape.walkable === false && shape.climbable === false))
  assert.deepEqual(originals, snapshot, 'dressings must not mutate existing physical descriptors')
  const before = new WorldCollision(originals), after = new WorldCollision(dressed)
  assert.deepEqual(after.shapes.map((shape) => shape.id), before.shapes.map((shape) => shape.id))
  for (const spawn of layout.spawnPoints) {
    const foot = new Vector3(spawn.x, spawn.y + 0.003, spawn.z)
    assert.equal(after.capsuleClear(foot), before.capsuleClear(foot), spawn.id)
    const from = foot.clone().add(new Vector3(0, 2, 0))
    const to = new Vector3(0, 2, 0)
    const hitBefore = before.raycast(from, to), hitAfter = after.raycast(from, to)
    assert.equal(hitAfter?.shape.id, hitBefore?.shape.id, `${spawn.id}: ray obstruction`)
    assert.equal(hitAfter?.distance, hitBefore?.distance, `${spawn.id}: hit distance`)
  }
})
