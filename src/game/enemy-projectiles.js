import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { segmentObstacleHit } from './collision.js'

function sphereHit(from, to, center, radius) {
  const delta = to.clone().sub(from)
  const offset = from.clone().sub(center)
  const c = offset.lengthSq() - radius * radius
  if (c <= 0) return 0
  const a = delta.lengthSq()
  if (a < 0.000001) return null
  const b = offset.dot(delta)
  const discriminant = b * b - a * c
  if (discriminant < 0) return null
  const t = (-b - Math.sqrt(discriminant)) / a
  return t >= 0 && t <= 1 ? t : null
}

export class EnemyProjectiles {
  constructor(scene, events) {
    this.scene = scene
    this.events = events
    this.items = []
    this.geometry = new THREE.SphereGeometry(CONFIG.projectile.radius, 10, 10)
    this.material = new THREE.MeshStandardMaterial({ color: 0x2ecc71, emissive: 0x0e4424 })
  }

  create(from, to, damage) {
    const time = THREE.MathUtils.clamp(from.clone().setY(0).distanceTo(to.clone().setY(0)) / CONFIG.projectile.speed, 0.5, 2)
    const velocity = to.clone().sub(from).divideScalar(time)
    velocity.y += 0.5 * CONFIG.projectile.gravity * time
    const mesh = new THREE.Mesh(this.geometry, this.material)
    mesh.position.copy(from)
    this.scene.add(mesh)
    return { mesh, vel: velocity, life: CONFIG.projectile.ttl, damage }
  }

  fire(from, to, damage) {
    this.items.push(this.create(from, to, damage))
  }

  ring(origin) {
    for (let i = 0; i < CONFIG.boss.ringCount; i++) {
      const angle = i / CONFIG.boss.ringCount * Math.PI * 2
      const target = origin.clone().add(new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle)).multiplyScalar(15))
      const projectile = this.create(origin, target, CONFIG.enemy.spitter.projDamage)
      projectile.vel.y = 2
      this.items.push(projectile)
    }
  }

  update(dt, playerPos) {
    const config = CONFIG.projectile
    for (let i = this.items.length - 1; i >= 0; i--) {
      const projectile = this.items[i]
      const previous = projectile.mesh.position.clone()
      const next = previous.clone().addScaledVector(projectile.vel, dt)
      const obstacle = this.events.world ? this.events.world.raycast(previous, next, config.radius) :
        segmentObstacleHit(previous, next, this.events.obstacles, config.radius)
      const contact = sphereHit(previous, next, playerPos, config.playerHitRadius + config.radius)
      const distance = previous.distanceTo(next)
      if (obstacle && (contact === null || obstacle.distance <= contact * distance)) {
        this.remove(i)
        continue
      }
      projectile.mesh.position.copy(next)
      projectile.vel.y -= config.gravity * dt
      projectile.life -= dt
      if (contact !== null) {
        projectile.mesh.position.copy(previous).lerp(next, contact)
        this.events.onProjectileHit?.(projectile)
        this.remove(i)
      } else if (projectile.life <= 0 || next.y < -5) this.remove(i)
    }
  }

  remove(index) {
    this.scene.remove(this.items[index].mesh)
    this.items.splice(index, 1)
  }

  clear() {
    for (const projectile of this.items) this.scene.remove(projectile.mesh)
    this.items.length = 0
  }
}
