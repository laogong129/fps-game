import * as THREE from 'three'
import { CONFIG } from '../config.js'

export function createEnemy(type, hpMultiplier, scene) {
  const def = CONFIG.enemy[type]
  const group = new THREE.Group()
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(def.size, def.size, def.size),
    new THREE.MeshStandardMaterial({ color: def.color })
  )
  body.position.y = def.size / 2
  body.castShadow = true
  group.add(body)

  const hpBar = new THREE.Mesh(
    new THREE.PlaneGeometry(def.size, 0.12),
    new THREE.MeshBasicMaterial({ color: 0x22cc44 })
  )
  hpBar.position.y = def.size + 0.3
  hpBar.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), 0)
  group.add(hpBar)

  scene.add(group)
  const hp = def.hp * hpMultiplier
  return {
    type,
    def,
    group,
    body,
    hpBar,
    hp,
    maxHp: hp,
  }
}

export function updateEnemy(enemy, target, dt, camera) {
  const dir = target.clone().sub(enemy.group.position)
  dir.y = 0
  const dist = dir.length()
  if (dist > 0.1) {
    enemy.group.position.add(dir.normalize().multiplyScalar(enemy.def.speed * dt))
  }
  enemy.hpBar.quaternion.copy(camera.quaternion)
  const ratio = Math.max(0, enemy.hp / enemy.maxHp)
  enemy.hpBar.scale.x = ratio
  enemy.hpBar.position.x = 0
}

export function damageEnemy(enemy, amount, scene) {
  enemy.hp -= amount
  enemy.body.material.emissive = new THREE.Color(0x662200)
  setTimeout(() => { if (enemy.body.material) enemy.body.material.emissive = new THREE.Color(0x000000) }, 80)
  if (enemy.hp <= 0) {
    scene.remove(enemy.group)
    enemy.group.traverse((o) => o.isMesh && o.geometry.dispose())
    return true
  }
  return false
}
