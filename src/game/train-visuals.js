import * as THREE from 'three'

export function createTrainVisuals(scene, layout) {
  const group = new THREE.Group()
  group.name = 'rideable-train'
  const materials = new Map()
  const meshes = new Map()
  for (const x of [-6, 6]) {
    const light = new THREE.PointLight(0xffd5a8, 7, 12, 2)
    light.position.set(x, 3.05, 0)
    group.add(light)
  }
  for (const shape of [...layout.shapes, ...layout.doors, ...layout.decorations]) {
    const key = `${shape.color}-${!!shape.emissive}`
    if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({
      color: shape.color, roughness: shape.emissive ? 0.3 : 0.6, metalness: 0.25,
      emissive: shape.emissive ? shape.color : 0, emissiveIntensity: 0.8,
    }))
    const geometry = shape.type === 'cylinder' ?
      new THREE.CylinderGeometry(shape.radius, shape.radius, shape.height, 12) :
      new THREE.BoxGeometry(shape.width, shape.height, shape.depth)
    const mesh = new THREE.Mesh(geometry, materials.get(key))
    mesh.name = shape.id
    mesh.position.set(shape.x, shape.y, shape.z)
    if (shape.rotation) mesh.rotation.set(...shape.rotation)
    mesh.castShadow = true
    mesh.receiveShadow = true
    mesh.userData.shapeId = shape.id
    mesh.userData.solid = shape.solid
    group.add(mesh)
    meshes.set(shape.id, mesh)
  }
  scene?.add(group)
  return {
    group,
    update(position, doorsOpen, phase, clock) {
      group.position.copy(position)
      for (const door of layout.doors) meshes.get(door.id).visible = !doorsOpen
    },
  }
}
