import * as THREE from 'three'
import { CONFIG } from '../config.js'

export function createArena(scene) {
  const { size, wallHeight, wallColor, floorColor, fogColor } = CONFIG.arena

  scene.fog = new THREE.Fog(fogColor, 10, CONFIG.arena.fogFar)
  scene.background = new THREE.Color(fogColor)

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(size, size),
    new THREE.MeshStandardMaterial({ color: floorColor })
  )
  floor.rotation.x = -Math.PI / 2
  floor.receiveShadow = true
  scene.add(floor)

  const grid = new THREE.GridHelper(size, size / 2, 0x334455, 0x263344)
  grid.position.y = 0.01
  scene.add(grid)

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

  const ambient = new THREE.AmbientLight(0x8899bb, 0.6)
  scene.add(ambient)
  const dir = new THREE.DirectionalLight(0xffffff, 1.2)
  dir.position.set(10, 20, 10)
  dir.castShadow = true
  dir.shadow.camera.left = -size / 2
  dir.shadow.camera.right = size / 2
  dir.shadow.camera.top = -size / 2
  dir.shadow.camera.bottom = size / 2
  dir.shadow.mapSize.set(1024, 1024)
  scene.add(dir)

  return { halfSize: size / 2, wallHeight }
}
