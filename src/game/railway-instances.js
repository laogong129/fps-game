import * as THREE from 'three'

export function canInstanceDetail(shape) {
  return shape.instanced === true && shape.solid === false && shape.decorative === true
    && !shape.signal && ['box', 'cylinder'].includes(shape.type)
}

export function addInstancedDetails(scene, shapes, materialFor) {
  const batches = new Map()
  for (const shape of shapes) {
    if (!canInstanceDetail(shape)) continue
    const material = materialFor(shape)
    if (!batches.has(material)) batches.set(material, new Map())
    const types = batches.get(material)
    if (!types.has(shape.type)) types.set(shape.type, [])
    types.get(shape.type).push(shape)
  }
  const group = new THREE.Group()
  group.name = 'railway-instanced-details'
  group.userData.decorative = true
  group.userData.collider = false
  const byShapeId = new Map()
  const meshes = []
  const pose = new THREE.Object3D()
  for (const [material, types] of batches) for (const [type, entries] of types) {
    const geometry = type === 'cylinder' ? new THREE.CylinderGeometry(1, 1, 1, 12) : new THREE.BoxGeometry(1, 1, 1)
    const mesh = new THREE.InstancedMesh(geometry, material, entries.length)
    mesh.name = `railway-details-${type}-${meshes.length}`
    mesh.castShadow = false
    mesh.receiveShadow = true
    mesh.userData.decorative = true
    mesh.userData.collider = false
    mesh.userData.shapeIds = entries.map((shape) => shape.id)
    entries.forEach((shape, index) => {
      pose.position.set(shape.x, shape.y, shape.z)
      pose.rotation.set(0, typeof shape.rotation === 'number' ? shape.rotation : 0, 0)
      pose.scale.set(type === 'cylinder' ? shape.radius : shape.width, shape.height,
        type === 'cylinder' ? shape.radius : shape.depth)
      pose.updateMatrix()
      mesh.setMatrixAt(index, pose.matrix)
      byShapeId.set(shape.id, { mesh, index })
    })
    mesh.instanceMatrix.needsUpdate = true
    mesh.computeBoundingBox()
    mesh.computeBoundingSphere()
    meshes.push(mesh)
    group.add(mesh)
  }
  scene.add(group)
  return {
    group, byShapeId, meshes, shapeCount: byShapeId.size,
    dispose() {
      group.removeFromParent()
      for (const mesh of meshes) { mesh.dispose(); mesh.geometry.dispose() }
    },
  }
}
