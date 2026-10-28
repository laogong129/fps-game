import * as THREE from 'three'

export function shapeGeometry(shape) {
  if (shape.type === 'cylinder') return new THREE.CylinderGeometry(shape.radius, shape.radius, shape.height, 12)
  if (shape.type !== 'ramp') return new THREE.BoxGeometry(shape.width, shape.height, shape.depth)
  const w = shape.width / 2, d = shape.depth / 2, h = shape.height / 2
  const top = (x, z) => {
    const t = shape.riseAxis === 'x' ? x / w : z / d
    return shape.riseSign * t * h
  }
  const vertices = [-w, -h, -d, w, -h, -d, w, -h, d, -w, -h, d,
    -w, top(-w, -d), -d, w, top(w, -d), -d, w, top(w, d), d, -w, top(-w, d), d]
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
  geometry.setIndex([0, 1, 2, 0, 2, 3, 4, 6, 5, 4, 7, 6, 0, 5, 1, 0, 4, 5,
    1, 6, 2, 1, 5, 6, 2, 7, 3, 2, 6, 7, 3, 4, 0, 3, 7, 4])
  geometry.computeVertexNormals()
  return geometry
}

export function meshFromShape(shape, material) {
  const mesh = new THREE.Mesh(shapeGeometry(shape), material)
  mesh.position.set(shape.x, shape.y, shape.z)
  if (shape.rotation) mesh.rotation.y = shape.rotation
  mesh.userData.shapeId = shape.id
  mesh.userData.collider = shape.solid !== false
  mesh.castShadow = shape.solid !== false && shape.id !== 'street-ground'
  mesh.receiveShadow = true
  return mesh
}

export function surfaceHeight(shape, x, z) {
  if (shape.type === 'cylinder') {
    return Math.hypot(x - shape.x, z - shape.z) <= shape.radius ? shape.y + shape.height / 2 : null
  }
  if (Math.abs(x - shape.x) > shape.width / 2 + 0.0001 || Math.abs(z - shape.z) > shape.depth / 2 + 0.0001) return null
  if (shape.type !== 'ramp') return shape.y + shape.height / 2
  const coordinate = shape.riseAxis === 'x' ? (x - shape.x) / shape.width : (z - shape.z) / shape.depth
  return shape.y + shape.riseSign * coordinate * shape.height
}
