import * as THREE from 'three'
import { updateSpriteText } from './text.js'

const particlePool = []
const MAX_PARTICLES = 200
let _scene = null
export function setEnemyScene(scene) { _scene = scene }

function spawnDeathParticles(pos, color, count = 15) {
  const scene = _scene
  if (!scene) return
  for (let i = 0; i < count && particlePool.length < MAX_PARTICLES; i++) {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true })
    const p = { mesh: new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.06), mat), vel: new THREE.Vector3(), life: 0 }
    p.mesh.material.color.setHex(color)
    p.mesh.position.copy(pos)
    p.mesh.position.x += (Math.random() - 0.5) * 0.3
    p.mesh.position.y += Math.random() * 0.5
    p.mesh.position.z += (Math.random() - 0.5) * 0.3
    p.vel.set(
      (Math.random() - 0.5) * 4,
      Math.random() * 3 + 1,
      (Math.random() - 0.5) * 4
    )
    p.life = 0.8 + Math.random() * 0.4
    p.mesh.visible = true
    scene.add(p.mesh)
    p.mesh.material.opacity = 1.0
    particlePool.push(p)
  }
}

export function updateParticles(dt) {
  for (let i = particlePool.length - 1; i >= 0; i--) {
    const p = particlePool[i]
    p.life -= dt
    if (p.life <= 0) {
      p.mesh.removeFromParent()
      p.mesh.material.dispose()
      p.mesh.geometry.dispose()
      particlePool.splice(i, 1)
      continue
    }
    p.vel.y -= 9.8 * dt
    p.mesh.position.addScaledVector(p.vel, dt)
    p.mesh.rotation.x += dt * 5
    p.mesh.rotation.z += dt * 3
    const t = Math.max(0, p.life / 0.8)
    p.mesh.material.opacity = t
    p.mesh.scale.setScalar(0.5 + t * 0.5)
  }
}

export function clearEnemyParticles() {
  for (const particle of particlePool) {
    particle.mesh.removeFromParent()
    particle.mesh.geometry.dispose()
    particle.mesh.material.dispose()
  }
  particlePool.length = 0
}

export function damageEnemy(enemy, amount, scene) {
  enemy.hp -= amount
  updateSpriteText(enemy.hpText, `${Math.max(0, Math.ceil(enemy.hp))}`, { color: '#ff8888', size: 40 })
  if (enemy.body) {
    enemy.body.traverse((o) => {
      if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
        o.material.emissive.setHex(0x662200)
      }
    })
    enemy.hitFlashTimer = 0.08
  }
  if (enemy.hp <= 0) {
    startEnemyDeath(enemy, scene)
    return true
  }
  return false
}

export function startEnemyDeath(e, scene) {
  if (e.dead) return
  e.dead = true
  e.deathState = 'hit'
  e.deathTimer = 0
  e.deathBaseY = e.group.position.y

  if (e.body) {
    e.body.traverse((o) => {
      if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
        o.material.emissive.setHex(0xff0000)
      }
    })
  }

  const pos = e.group.position.clone()
  pos.y += e.def.size * 0.4
  spawnDeathParticles(pos, e.def.color, 18)
}

export function updateEnemyDeath(e, dt) {
  if (!e.dead) return
  e.deathTimer += dt

  if (e.deathState === 'hit') {
    if (e.deathTimer >= 0.15) {
      e.deathState = 'falling'
      e.deathTimer = 0
      if (e.body) {
        e.body.traverse((o) => {
          if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
            o.material.emissive.setHex(0x000000)
          }
        })
      }
    }
  } else if (e.deathState === 'falling') {
    const progress = Math.min(1, e.deathTimer / 0.4)
    const eased = 1 - Math.pow(1 - progress, 3)
    e.group.rotation.x = eased * (Math.PI / 2)
    e.group.position.y = e.deathBaseY - eased * 0.05
    if (progress >= 1) {
      e.deathState = 'vanish'
      e.deathTimer = 0
    }
  } else if (e.deathState === 'vanish') {
    const progress = Math.min(1, e.deathTimer / 0.3)
    if (e.body) {
      e.body.traverse((o) => {
        if (o.isMesh && o.material) {
          o.material.transparent = true
          o.material.opacity = 1 - progress
        }
      })
    }
    if (e.hpBar && e.hpBar.material) {
      e.hpBar.material.opacity = 1 - progress
    }
    if (progress >= 1) {
      e.deathState = 'done'
    }
  }
}

export function updateEnemyAnim(e, dt) {
  if (e.hitFlashTimer > 0 && !e.dead) {
    e.hitFlashTimer -= dt
    if (e.hitFlashTimer <= 0) e.body?.traverse((mesh) => {
      if (!mesh.userData.isOutline) mesh.material?.emissive?.setHex(0)
    })
  }
  if (e.mixer) e.mixer.update(dt)
  updateEnemyDeath(e, dt)
}
