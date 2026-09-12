import * as THREE from 'three'
import { CONFIG } from '../config.js'
import cityData from '../../assets/city_obstacles.json'

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
    const wall = new THREE.Mesh(wallGeo, wallMat)
    wall.position.set(x, wallHeight / 2, z)
    wall.rotation.y = rz
    wall.castShadow = true
    scene.add(wall)
  }

  const ambient = new THREE.AmbientLight(0x2a3550, 0.9)
  scene.add(ambient)
  const dir = new THREE.DirectionalLight(0x8899cc, 0.5)
  dir.position.set(10, 20, 10)
  dir.castShadow = true
  dir.shadow.camera.left = -size / 2
  dir.shadow.camera.right = size / 2
  dir.shadow.camera.top = -size / 2
  dir.shadow.camera.bottom = size / 2
  dir.shadow.mapSize.set(1024, 1024)
  scene.add(dir)

  for (const [x, z, y] of cityData.lights) {
    const l = new THREE.PointLight(0x99bbff, 26, 24, 2)
    l.position.set(x, y, z)
    scene.add(l)
  }

  const updateRain = addRain(scene)

  return {
    halfSize: size / 2,
    wallHeight,
    updatePetals: (dt) => updateRain(dt, size),
    obstacles: cityData.obstacles,
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

function addRain(scene) {
  const count = 300
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const vel = []
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 56
    pos[i * 3 + 1] = Math.random() * 12
    pos[i * 3 + 2] = (Math.random() - 0.5) * 56
    vel.push(11 + Math.random() * 6)
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  const mat = new THREE.PointsMaterial({
    color: 0x88aadd, size: 0.08, transparent: true, opacity: 0.5, depthWrite: false,
  })
  const points = new THREE.Points(geo, mat)
  scene.add(points)
  return (dt, size) => {
    const arr = geo.attributes.position.array
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] -= vel[i] * dt
      if (arr[i * 3 + 1] < 0) {
        arr[i * 3 + 1] = 11 + Math.random() * 2
        arr[i * 3] = (Math.random() - 0.5) * size
        arr[i * 3 + 2] = (Math.random() - 0.5) * size
      }
    }
    geo.attributes.position.needsUpdate = true
  }
}
