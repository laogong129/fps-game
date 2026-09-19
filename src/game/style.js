import * as THREE from 'three'

let outlineMat
function getOutlineMat() {
  if (!outlineMat) {
    outlineMat = new THREE.MeshBasicMaterial({ color: 0x2b1b2e, side: THREE.BackSide })
  }
  return outlineMat
}

let gradientMap
function getGradientMap() {
  if (gradientMap) return gradientMap
  const data = new Uint8Array([
    45, 45, 60, 255,
    130, 130, 150, 255,
    210, 210, 225, 255,
    255, 255, 255, 255,
  ])
  gradientMap = new THREE.DataTexture(data, 4, 1, THREE.RGBAFormat)
  gradientMap.needsUpdate = true
  return gradientMap
}

export function applyToon(mesh) {
  const old = mesh.material
  if (!old || old.isMeshToonMaterial) return
  const toon = new THREE.MeshToonMaterial({
    color: old.color ? old.color.clone() : 0xffffff,
    gradientMap: getGradientMap(),
    transparent: false,
    opacity: 1.0,
    depthWrite: true,
    alphaTest: 0.0,
    side: THREE.FrontSide,
  })
  if (old.emissive) {
    toon.emissive = old.emissive.clone()
    toon.emissiveIntensity = old.emissiveIntensity ?? 1
  }
  mesh.material = toon
}

export function addOutline(mesh, scale = 1.05) {
  const o = new THREE.Mesh(mesh.geometry, getOutlineMat())
  o.scale.setScalar(scale)
  o.userData.isOutline = true
  o.raycast = () => {}
  mesh.add(o)
}

export function makeToon(color, emissive = 0x000000, emissiveIntensity = 1) {
  return new THREE.MeshToonMaterial({
    color,
    emissive,
    emissiveIntensity,
    gradientMap: getGradientMap(),
    transparent: false,
    depthWrite: true,
  })
}

export function applyAnimeStyle(root, scale = 1.05) {
  const meshes = []
  root.traverse((o) => {
    if (o.isMesh && !o.userData.isOutline) meshes.push(o)
  })
  for (const m of meshes) {
    applyToon(m)
    addOutline(m, scale)
  }
}
