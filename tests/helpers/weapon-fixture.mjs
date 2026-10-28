import * as THREE from 'three'
import { CONFIG } from '../../src/config.js'
import { WeaponSystem } from '../../src/game/weapon.js'

export function setupWeapon(obstacles = [], collisionWorld = null) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(CONFIG.view.fov, 1, 0.1, 200)
  camera.position.set(0, 1.7, 0)
  const gunGroup = new THREE.Group()
  gunGroup.position.set(0.25, -0.4, -0.5)
  camera.add(gunGroup); scene.add(camera)
  const player = { camera, gunGroup, controls: { isLocked: true } }
  const targets = [], hits = [], shots = [], impacts = []
  const weapon = new WeaponSystem(scene, player, {
    getEnemies: () => targets, getWorld: () => collisionWorld, getObstacles: () => obstacles,
    onHit: (root, damage, hit) => hits.push({ root, damage, ...hit }),
    onShot: (key) => shots.push(key), onImpact: (hit) => impacts.push(hit),
  })
  return { scene, player, targets, hits, shots, impacts, weapon }
}

export function addTarget(fixture, distance, dead = false) {
  const group = new THREE.Group()
  group.userData.enemyGroup = true
  group.userData.enemyRef = { dead }
  group.position.set(0, 0, -distance)
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial())
  mesh.position.y = 1.7
  group.add(mesh); fixture.scene.add(group)
  fixture.scene.updateMatrixWorld(true)
  fixture.targets.push(mesh)
  return group
}

export function advanceFlight(fixture, seconds) {
  let remaining = seconds
  while (remaining > 1e-9) {
    const dt = Math.min(1 / 120, remaining)
    fixture.weapon.beginProjectileFrame()
    fixture.weapon.updateProjectiles(dt)
    remaining -= dt
  }
}
