import * as THREE from 'three'
import { meshFromShape } from './railway-geometry.js'
import { createRailwayAtmosphere } from './railway-atmosphere.js'
import { createRailwayMaterials } from './railway-materials.js'
import { addInstancedDetails } from './railway-instances.js'
import { createSignboardFaces } from './railway-signage.js'

function label(text, color = '#f4d9b6') {
  if (typeof document === 'undefined') return null
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const context = canvas.getContext('2d')
  context.fillStyle = '#28303b'
  context.fillRect(0, 0, 512, 128)
  context.strokeStyle = '#d2c2a3'
  context.lineWidth = 4
  context.strokeRect(6, 6, 500, 116)
  context.fillStyle = color
  context.font = 'bold 45px "Segoe UI", sans-serif'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(text, 256, 64)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const sign = new THREE.Group()
  const geometry = new THREE.PlaneGeometry(4.2, 1.05)
  const material = new THREE.MeshBasicMaterial({ map: texture })
  for (const direction of [1, -1]) {
    const face = new THREE.Mesh(geometry, material)
    face.rotation.y = direction < 0 ? Math.PI : 0
    face.position.z = direction * 0.005
    sign.add(face)
  }
  sign.userData.decorative = true
  sign.userData.collider = false
  return sign
}

function addWires(scene) {
  const material = new THREE.LineBasicMaterial({ color: 0x302e3b })
  for (const z of [-11, 11]) for (let i = 0; i < 4; i++) for (const offset of [-1, 0, 1]) {
    const x = -52 + i * 26
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(x, 6.6, z + offset),
      new THREE.Vector3(x + 13, 5.8, z + offset), new THREE.Vector3(x + 26, 6.6, z + offset))
    const wire = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(24)), material)
    wire.userData.decorative = true
    wire.userData.collider = false
    scene.add(wire)
  }
}

export function createRailwayScene(scene, layout) {
  const surfaces = createRailwayMaterials()
  const meshes = new Map()
  const warningLights = []
  const detailInstances = addInstancedDetails(scene, layout.shapes, surfaces.materialFor)
  for (const shape of layout.shapes) {
    if (detailInstances.byShapeId.has(shape.id)) continue
    const mesh = meshFromShape(shape, surfaces.materialFor(shape))
    meshes.set(shape.id, mesh)
    scene.add(mesh)
    if (shape.signal) warningLights.push(mesh)
    if (shape.signboard) {
      const lettering = createSignboardFaces(shape)
      if (lettering) scene.add(lettering)
    }
  }
  const atmosphere = createRailwayAtmosphere(scene)
  addWires(scene)
  for (const station of layout.stations) {
    const light = new THREE.PointLight(0xffd0a0, 18, 17, 2)
    light.position.set(station.x, 5.5, -4.9)
    scene.add(light)
  }
  for (const [text, x, y, z] of [['路地 / 住宅街', -23, 3.6, -24.08], ['駅前 商店', 24, 4, -52.1],
    ['保守 / MAINTENANCE', 49, 4.4, 16.9], ['歩道橋', 10, 7.6, -12]]) {
    const sign = label(text)
    if (sign) { sign.position.set(x, y, z); scene.add(sign) }
  }
  let clock = 0
  let warning = false
  const setCrossingWarning = (value) => { warning = !!value }
  const update = (dt) => {
    clock += dt
    const intensity = warning ? (Math.floor(clock * 4) % 2 ? 3 : 0.25) : 0.15
    for (const lamp of warningLights) lamp.material.emissiveIntensity = intensity
  }
  return {
    meshes, detailInstances, surfaces, warningLights, atmosphere, update, setCrossingWarning,
    updateTrainSignals(state) { setCrossingWarning(['warning', 'departing', 'traveling'].includes(state.phase)); },
    halfSize: layout.bounds, wallHeight: 3.8,
    updatePetals() {},
  }
}
