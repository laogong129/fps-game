import { Euler, MathUtils, Raycaster, Vector3 } from 'three'
import { CONFIG } from '../config.js'
import { segmentObstacleHit } from './collision.js'
import { enemyRoot } from './ballistic-targets.js'

export function aimHit(from, direction, targets, callbacks, range = 200) {
  const end = from.clone().addScaledVector(direction, range), world = callbacks.getWorld?.()
  const block = world ? world.raycast(from, end) : segmentObstacleHit(from, end, callbacks.getObstacles?.() || [])
  for (const mesh of targets) mesh.updateWorldMatrix(true, false)
  const hit = new Raycaster(from, direction, 0, range).intersectObjects(targets, false)
    .find((entry) => !enemyRoot(entry.object)?.userData.enemyRef?.dead && enemyRoot(entry.object))
  if (block && (!hit || block.distance <= hit.distance)) return { ...block, root: null, blocked: true }
  return hit ? { root: enemyRoot(hit.object), point: hit.point, mesh: hit.object, face: hit.face, distance: hit.distance } : null
}

export function jitter(direction, spread, index, pellets = 1) {
  if (pellets > 1 && index === 0) return direction.clone()
  const right = new Vector3().crossVectors(direction, new Vector3(0, 1, 0))
  if (right.lengthSq() < 0.0001) right.set(1, 0, 0)
  else right.normalize()
  const up = new Vector3().crossVectors(right, direction).normalize()
  const angle = pellets > 1 ? index * 2.399963 : Math.random() * Math.PI * 2
  const radius = spread * Math.sqrt(pellets > 1 ? (index - 0.5) / (pellets - 1) : Math.random())
  return direction.clone().addScaledVector(right, Math.cos(angle) * radius).addScaledVector(up, Math.sin(angle) * radius).normalize()
}

export function launchShot(weapon, gun, shotId, defer) {
  const definition = CONFIG.weapon[gun.key], camera = weapon.player.camera
  const eye = camera.getWorldPosition(new Vector3()), muzzle = weapon.model.getMuzzleWorld()
  const aim = camera.getWorldDirection(new Vector3()), targets = weapon.callbacks.getEnemies?.() || []
  const barrel = muzzle.clone().sub(eye), barrelLength = barrel.length()
  const obstruction = barrelLength > 1e-6 ? aimHit(eye, barrel.divideScalar(barrelLength), targets, weapon.callbacks, barrelLength) : null
  const carrier = weapon.player.motor && weapon.callbacks.getWorld?.()?.getBody(
    weapon.player.motor.supportId || weapon.player.motor.airborneBodyId || weapon.player.motor.traversal?.bodyId)
  for (let index = 0; index < gun.pellets; index++) {
    const direction = weapon.jitter(aim, weapon.getSpread(gun), index, gun.pellets)
    const aimed = weapon.rayHit(eye, direction, targets)
    const target = aimed?.point || eye.clone().addScaledVector(direction, definition.maxDistance)
    const initialHit = obstruction || (aimed && target.clone().sub(muzzle).dot(aim) <= 0.05 ? aimed : null)
    const origin = initialHit ? eye : muzzle
    const launch = initialHit ? direction : target.clone().sub(origin).normalize()
    launch.y += definition.gravity * definition.zeroRange / (2 * definition.muzzleSpeed ** 2)
    launch.normalize()
    weapon.ballistics.emit({ position: origin, direction: launch, inheritVelocity: carrier?.velocity,
      weaponKey: gun.key, shotId, damage: gun.damage, speed: definition.muzzleSpeed,
      gravity: definition.gravity, maxDistance: definition.maxDistance, radius: 0.008,
      falloffStart: definition.falloffStart, falloffEnd: definition.falloffEnd, minDamageMult: definition.minDamageMult,
      knockback: definition.knockback, knockbackRange: definition.knockbackRange, initialHit, defer })
  }
}

export class AimRecoil {
  constructor(camera) { this.camera = camera; this.reset() }
  turn(amount) {
    const rotation = new Euler().setFromQuaternion(this.camera.quaternion, 'YXZ')
    rotation.x = MathUtils.clamp(rotation.x + amount, -Math.PI / 2 + 0.01, Math.PI / 2 - 0.01)
    this.camera.quaternion.setFromEuler(rotation)
  }
  kick(definition, ads) {
    this.profile = definition
    const amount = definition.recoilPitch * (ads ? 0.72 : 1)
    this.turn(amount)
    this.returning += amount * definition.recoilReturn
    this.age = 0
  }
  update(dt) {
    this.age += dt
    if (!this.profile || this.age < 0.06) return
    const next = this.returning * Math.exp(-this.profile.recoilRecovery * dt)
    this.turn(next - this.returning)
    this.returning = next
  }
  reset() { this.returning = this.age = 0; this.profile = null }
}
