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
  group.add(hpBar)
  group.userData.enemyGroup = true
  group.userData.centerHeight = def.size / 2
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

export function updateEnemy(enemy, playerPos, dt, camera, inner, others) {
  const half = enemy.def.size / 2
  const dir = playerPos.clone().sub(enemy.group.position)
  dir.y = 0
  const dist = dir.length()
  if (dist > 0.1) {
    const step = enemy.def.speed * dt
    const target = dist < step ? playerPos : enemy.group.position.clone().add(dir.normalize().multiplyScalar(step))
    enemy.group.position.lerp(target, 1)
    for (const o of others) {
      if (o === enemy) continue
      const push = enemy.group.position.clone().sub(o.group.position)
      push.y = 0
      const d = push.length()
      const min = CONFIG.enemy.separation
      if (d > 0.001 && d < min) {
        enemy.group.position.add(push.normalize().multiplyScalar((min - d) / 2))
      }
    }
    enemy.group.position.x = THREE.MathUtils.clamp(enemy.group.position.x, -inner + half, inner - half)
    enemy.group.position.z = THREE.MathUtils.clamp(enemy.group.position.z, -inner + half, inner - half)
  }
  enemy.hpBar.quaternion.copy(camera.quaternion)
  const ratio = Math.max(0, enemy.hp / enemy.maxHp)
  enemy.hpBar.scale.x = ratio
}

export function enemyCenter(enemy) {
  return enemy.group.position.clone().add(
    new THREE.Vector3(0, enemy.group.userData.centerHeight, 0)
  )
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
