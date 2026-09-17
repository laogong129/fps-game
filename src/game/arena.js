import * as THREE from 'three'
import { CONFIG } from '../config.js'
import jpData from '../../assets/jp_obstacles.json'
import { applyToon, addOutline } from './style.js'

export function createArena(scene, model) {
  const { size, wallHeight, wallColor, fogColor } = CONFIG.arena

  scene.fog = new THREE.Fog(fogColor, 10, CONFIG.arena.fogFar)
  scene.background = new THREE.Color(fogColor)

  if (model) {
    model.traverse((o) => {
      if (o.isMesh) o.castShadow = true
    })
    scene.add(model)
  }

  const wallMat = new THREE.MeshStandardMaterial({ color: wallColor })
  const wallGeo = new THREE.BoxGeometry(size, wallHeight, 0.5)
  for (const [x, z, rz] of [
    [0, -size / 2, 0],
    [0, size / 2, 0],
    [-size / 2, 0, Math.PI / 2],
    [size / 2, 0, Math.PI / 2],
  ]) {
    const wall = new THREE.Mesh(wallGeo, wallMat.clone())
    applyToon(wall)
    addOutline(wall, 1.03)
    wall.position.set(x, wallHeight / 2, z)
    wall.rotation.y = rz
    wall.castShadow = true
    scene.add(wall)
  }

  const ambient = new THREE.AmbientLight(0x8a7a9a, 1.1)
  scene.add(ambient)
  const sun = new THREE.DirectionalLight(0xffd9b0, 1.6)
  sun.position.set(-20, 30, -25)
  sun.castShadow = true
  sun.shadow.camera.left = -size / 2
  sun.shadow.camera.right = size / 2
  sun.shadow.camera.top = -size / 2
  sun.shadow.camera.bottom = size / 2
  sun.shadow.mapSize.set(1024, 1024)
  scene.add(sun)
  const sky = new THREE.HemisphereLight(0xb489c8, 0x4a3a2a, 0.7)
  scene.add(sky)

  for (const [x, z, y] of jpData.lights) {
    const l = new THREE.PointLight(0xffc26e, 22, 20, 2)
    l.position.set(x, y, z)
    scene.add(l)
  }

  const updatePetals = addPetals(scene)

  return {
    halfSize: size / 2,
    wallHeight,
    updatePetals,
    obstacles: jpData.obstacles,
  }
}

export function resolveObstacles(pos, radius, obstacles) {
  for (const o of obstacles) {
    const dx = pos.x - o.x
    const dz = pos.z - o.z
    const d = Math.hypot(dx, dz)
    const min = o.r + radius
    if (d > 0.001 && d < min) {
      const push = min - d
      pos.x += (dx / d) * push
      pos.z += (dz / d) * push
    }
  }
}

function addPetals(scene) {
  const count = 260
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const drift = []
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 56
    pos[i * 3 + 1] = Math.random() * 12
    pos[i * 3 + 2] = (Math.random() - 0.5) * 56
    drift.push((Math.random() - 0.5) * 1.5)
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  const mat = new THREE.PointsMaterial({
    color: 0xf5b8c8, size: 0.16, transparent: true, opacity: 0.85, depthWrite: false,
  })
  const points = new THREE.Points(geo, mat)
  scene.add(points)
  return (dt, size) => {
    const arr = geo.attributes.position.array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] -= (1.2 + (i % 5) * 0.3) * dt
      arr[i * 3] += Math.sin(arr[i * 3 + 1] * 0.8 + i) * drift[i] * dt
      if (arr[i * 3 + 1] < 0) {
        arr[i * 3 + 1] = 11 + Math.random() * 2
        arr[i * 3] = (Math.random() - 0.5) * size
        arr[i * 3 + 2] = (Math.random() - 0.5) * size
      }
    }
    geo.attributes.position.needsUpdate = true
  }
}
