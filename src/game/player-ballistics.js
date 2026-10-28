import { Vector3 } from 'three'
import { sweepWorld } from './ballistic-collision.js'
import { BallisticTargets } from './ballistic-targets.js'
import { segmentObstacleHit } from './collision.js'

export function ballisticDamage(shot, distance) {
  if (!(shot.falloffEnd > shot.falloffStart) || distance <= shot.falloffStart) return shot.damage
  const ratio = Math.min(1, (distance - shot.falloffStart) / (shot.falloffEnd - shot.falloffStart))
  return shot.damage * (1 + ((shot.minDamageMult ?? 1) - 1) * ratio)
}

export class PlayerBallistics {
  constructor(callbacks = {}) {
    this.callbacks = callbacks
    this.targets = new BallisticTargets(callbacks.getEnemies)
    this.items = []
    this.serial = 0
  }

  beginFrame() { this.targets.beginFrame() }

  emit({ position, direction, inheritVelocity = new Vector3(), ...snapshot }) {
    const bullet = { ...snapshot, id: ++this.serial, position: position.clone(),
      velocity: direction.clone().multiplyScalar(snapshot.speed).add(inheritVelocity), distance: 0, age: 0 }
    this.items.push(bullet)
    return bullet
  }

  impact(bullet, collision, distance) {
    const hit = { ...collision, distance, weaponKey: bullet.weaponKey, shotId: bullet.shotId,
      direction: bullet.velocity.clone().normalize(),
      knockback: distance <= (bullet.knockbackRange || 0) ? bullet.knockback || 0 : 0 }
    this.callbacks.onImpact?.(hit, ballisticDamage(bullet, distance), bullet)
  }

  update(dt) {
    if (!(dt > 0) || !Number.isFinite(dt) || !this.items.length) return
    this.targets.prepare()
    const world = this.callbacks.getWorld?.()
    for (let index = this.items.length - 1; index >= 0; index--) {
      const bullet = this.items[index]
      if (bullet.defer) { bullet.defer = false; continue }
      let elapsed = 0, remove = false
      if (bullet.initialHit) {
        this.callbacks.onTrace?.(bullet.id, bullet.position, bullet.initialHit.point, bullet)
        this.impact(bullet, bullet.initialHit, bullet.initialHit.distance)
        remove = true
      }
      while (!remove && elapsed < dt - 1e-9) {
        const step = Math.min(1 / 120, dt - elapsed)
        const from = bullet.position.clone()
        const next = from.clone().addScaledVector(bullet.velocity, step)
        next.y -= 0.5 * bullet.gravity * step * step
        const length = from.distanceTo(next)
        const fraction = Math.min(1, (bullet.maxDistance - bullet.distance) / Math.max(length, 1e-9))
        next.lerpVectors(from, next, fraction)
        const alpha0 = elapsed / dt, alpha1 = (elapsed + step * fraction) / dt
        const block = world ? sweepWorld(world, from, next, { radius: bullet.radius ?? 0.01, alpha0, alpha1 }) :
          segmentObstacleHit(from, next, this.callbacks.getObstacles?.() || [], bullet.radius ?? 0.01)
        const target = this.targets.cast(from, next, alpha0, alpha1)
        const collision = block && (!target || block.distance <= target.distance) ? { ...block, root: null, blocked: true } : target
        const tip = collision?.point || next
        this.callbacks.onTrace?.(bullet.id, from, tip, bullet)
        bullet.position.copy(tip)
        bullet.age += step * fraction
        if (collision) { this.impact(bullet, collision, bullet.distance + from.distanceTo(tip)); remove = true }
        else {
          bullet.distance += from.distanceTo(next)
          bullet.velocity.y -= bullet.gravity * step * fraction
          remove = fraction < 1 || bullet.distance >= bullet.maxDistance - 1e-6 || bullet.age >= 2
        }
        elapsed += step
      }
      if (remove) { this.callbacks.onRemove?.(bullet.id); this.items.splice(index, 1) }
    }
  }

  clear() {
    for (const bullet of this.items) this.callbacks.onRemove?.(bullet.id)
    this.items.length = 0
    this.targets.previous.clear()
  }
}
