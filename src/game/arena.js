import * as THREE from 'three'
import { CONFIG } from '../config.js'

export function createArena(scene) {
  const { size, wallHeight, wallColor, floorColor, fogColor } = CONFIG.arena
  const obstacles = []

  scene.fog = new THREE.Fog(fogColor, 10, CONFIG.arena.fogFar)
  scene.background = new THREE.Color(fogColor)

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size),
    new THREE.MeshStandardMaterial({ color: floorColor })
  )
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  scene.add(floor)

  const plankMat = new THREE.MeshStandardMaterial({ color: 0x8a6a4a, roughness: 0.9 })
  const plankGeo = new THREE.BoxGeometry(size, 0.04, 0.7)
  for (let i = 0; i < Math.floor(size / 1.4); i++) {
    const plank = new THREE.Mesh(plankGeo, plankMat)
    plank.rotation.x = -Math.PI / 2
    plank.rotation.y = Math.PI / 2
    plank.position.set(0, 0.02, -size / 2 + i * 1.4 + 0.7)
    plank.receiveShadow = true
    scene.add(plank)
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

  addTorii(scene, obstacles)
  addLanterns(scene, obstacles)
  addCherryTrees(scene, obstacles)
  addStonePillars(scene, obstacles)
  addDrumStones(scene, obstacles)

  const ambient = new THREE.AmbientLight(0x887766, 0.75)
  scene.add(ambient)
  const dir = new THREE.DirectionalLight(0xffb37a, 1.15)
  dir.position.set(10, 20, 10)
  dir.castShadow = true
  dir.shadow.camera.left = -size / 2
  dir.shadow.camera.right = size / 2
  dir.shadow.camera.top = -size / 2
  dir.shadow.camera.bottom = size / 2
  dir.shadow.mapSize.set(1024, 1024)
  scene.add(dir)

  const petals = addPetals(scene)
  const updatePetals = (dt) => petals(dt, size)

  return { halfSize: size / 2, wallHeight, updatePetals, obstacles }
}

export function resolveObstacles(pos, radius, obstacles) {
  let pushed = 0
  for (const o of obstacles) {
    const dx = pos.x - o.x
    const dz = pos.z - o.z
    const d = Math.hypot(dx, dz)
    const min = o.r + radius
    if (d > 0.001 && d < min) {
      const push = min - d
      pos.x += (dx / d) * push
      pos.z += (dz / d) * push
      pushed = Math.max(pushed, push)
    }
  }
  return pushed
}

function addPetals(scene) {
  const count = 220
  const geo = new THREE.BufferGeometry()
  const pos = new Float32Array(count * 3)
  const seeds = []
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 56
    pos[i * 3 + 1] = Math.random() * 14
    pos[i * 3 + 2] = (Math.random() - 0.5) * 56
    seeds.push({ vy: 0.6 + Math.random() * 0.9, ph: Math.random() * Math.PI * 2 })
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  const mat = new THREE.PointsMaterial({
    color: 0xf7c5d9, size: 0.14, transparent: true, opacity: 0.85, depthWrite: false,
  })
  const points = new THREE.Points(geo, mat)
  scene.add(points)
  return (dt, size) => {
    const arr = geo.attributes.position.array
    for (let i = 0; i < count; i++) {
      const s = seeds[i]
      arr[i * 3 + 1] -= s.vy * dt
      arr[i * 3] += Math.sin(s.ph + arr[i * 3 + 1] * 0.4) * dt * 0.6
      if (arr[i * 3 + 1] < 0) {
        arr[i * 3 + 1] = 12 + Math.random() * 3
        arr[i * 3] = (Math.random() - 0.5) * size
        arr[i * 3 + 2] = (Math.random() - 0.5) * size
      }
    }
    geo.attributes.position.needsUpdate = true
  }
}

function addTorii(scene, obstacles) {
  const red = new THREE.MeshStandardMaterial({ color: 0xc0392b })
  const black = new THREE.MeshStandardMaterial({ color: 0x1a1a22 })
  const group = new THREE.Group()
  const postGeo = new THREE.BoxGeometry(0.9, 8.2, 0.9)
  const p1 = new THREE.Mesh(postGeo, red)
  p1.position.set(-4.8, 4.1, 0)
  const p2 = new THREE.Mesh(postGeo, red)
  p2.position.set(4.8, 4.1, 0)
  p1.castShadow = p2.castShadow = true
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(13.5, 1.0, 1.3), red)
  lintel.position.set(0, 8.4, 0)
  const cap = new THREE.Mesh(new THREE.BoxGeometry(15, 0.5, 1.5), black)
  cap.position.set(0, 9.05, 0)
  cap.castShadow = true
  const beam = new THREE.Mesh(new THREE.BoxGeometry(12, 0.6, 0.7), red)
  beam.position.set(0, 7.2, 0)
  const plaque = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.0, 0.2), black)
  plaque.position.set(0, 7.7, 0.75)
  group.add(p1, p2, lintel, cap, beam, plaque)
  group.position.set(0, 0, -18)
  scene.add(group)
  obstacles.push({ x: -4.8, z: -18, r: 0.9 })
  obstacles.push({ x: 4.8, z: -18, r: 0.9 })
}

function addLanterns(scene, obstacles) {
  const stone = new THREE.MeshStandardMaterial({ color: 0x9aa7b5 })
  const glow = new THREE.MeshStandardMaterial({ color: 0xffe9a8, emissive: 0xffaa33, emissiveIntensity: 1.4 })
  for (const [x, z] of [[24, 24], [-24, 24], [24, -24], [-24, -24]]) {
    const g = new THREE.Group()
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.75, 0.5, 8), stone)
    base.position.y = 0.25
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 1.7, 8), stone)
    pillar.position.y = 1.35
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.0, 0.8), glow)
    body.position.y = 2.6
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.55, 4), stone)
    cap.position.y = 3.45
    cap.rotation.y = Math.PI / 4
    g.add(base, pillar, body, cap)
    g.position.set(x, 0, z)
    g.traverse((o) => { if (o.isMesh) o.castShadow = true })
    const light = new THREE.PointLight(0xff9944, 14, 16, 2)
    light.position.set(x, 2.6, z)
    scene.add(g, light)
    obstacles.push({ x, z, r: 0.9 })
  }
}

function addCherryTrees(scene, obstacles) {
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3226 })
  const bloomMat = new THREE.MeshStandardMaterial({ color: 0xf7c5d9, roughness: 0.8 })
  const trunkGeo = new THREE.CylinderGeometry(0.4, 0.6, 3.4, 7)
  const ballGeo = new THREE.SphereGeometry(1, 10, 8)
  for (const [x, z, s] of [[-16, 12, 1], [16, -12, 1.2], [-20, -14, 0.9], [20, 14, 1], [-8, 24, 0.8]]) {
    const g = new THREE.Group()
    const trunk = new THREE.Mesh(trunkGeo, trunkMat)
    trunk.position.y = 1.7
    trunk.castShadow = true
    g.add(trunk)
    for (const [bx, by, bz, r] of [[0, 3.8, 0, 1.8], [1.2, 3.1, 0.4, 1.3], [-1.1, 3.2, -0.5, 1.3], [0.3, 4.2, -0.9, 1.2]]) {
      const b = new THREE.Mesh(ballGeo, bloomMat)
      b.position.set(bx, by, bz)
      b.scale.setScalar(r)
      b.castShadow = true
      g.add(b)
    }
    g.position.set(x, 0, z)
    g.scale.setScalar(s)
    scene.add(g)
    obstacles.push({ x, z, r: 0.9 * s })
  }
}

function addStonePillars(scene, obstacles) {
  const stone = new THREE.MeshStandardMaterial({ color: 0x8d99a6, roughness: 0.95 })
  for (const [x, z] of [[8, 8], [-8, 8], [8, -8], [-8, -8]]) {
    const g = new THREE.Group()
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.35, 8), stone)
    base.position.y = 0.17
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 3.2, 8), stone)
    col.position.y = 1.9
    col.castShadow = true
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.4, 0.4, 8), stone)
    cap.position.y = 3.7
    g.add(base, col, cap)
    g.position.set(x, 0, z)
    scene.add(g)
    obstacles.push({ x, z, r: 0.6 })
  }
}

function addDrumStones(scene, obstacles) {
  const stone = new THREE.MeshStandardMaterial({ color: 0x77808c, roughness: 1 })
  for (const [x, z, s] of [[18, 0, 1], [-18, 0, 1.15]]) {
    const g = new THREE.Group()
    const body = new THREE.Mesh(new THREE.SphereGeometry(1.5, 10, 8), stone)
    body.scale.set(1, 0.85, 1.3)
    body.position.y = 1.1
    body.castShadow = true
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.6, 0.5, 10), stone)
    bowl.position.y = 2.15
    g.add(body, bowl)
    g.position.set(x, 0, z)
    g.scale.setScalar(s)
    scene.add(g)
    obstacles.push({ x, z, r: 1.9 * s })
  }
}
