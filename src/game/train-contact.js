import * as THREE from 'three'

export function trainContainsRider(actor, position, config) {
  const foot = actor.footPosition || actor.position
  if (!foot) return false
  if (actor.supportId === 'train' || actor.bodyId === 'train') return true
  const localX = foot.x - position.x
  if (Math.abs(localX) > config.halfLength + 0.1 || Math.abs(foot.z) > config.halfWidth + 0.1) return false
  if (actor.rideBodyId === 'train' && foot.y >= config.floorY - 0.12 &&
      foot.y <= config.roofY + (actor.height || 1.7)) return true
  if (foot.y >= config.roofY - 0.12) return true
  return foot.y >= config.floorY - 0.12 && foot.y <= config.floorY + 0.5 &&
    Math.abs(foot.z) < config.halfWidth - Math.min(actor.radius || 0.4, 0.7) * 0.4
}

function interval(origin, delta, minimum, maximum) {
  if (Math.abs(delta) < 1e-9) return origin >= minimum && origin <= maximum ? [0, 1] : null
  const first = (minimum - origin) / delta, second = (maximum - origin) / delta
  return [Math.min(first, second), Math.max(first, second)]
}

export function sweptTrainContact(actor, previous, next, config) {
  if (actor.dead || trainContainsRider(actor, previous, config)) return null
  const foot = actor.footPosition || actor.position
  if (!foot) return null
  const radius = actor.radius || 0.4, height = actor.height || 1.7
  const origin = new THREE.Vector3(foot.x - previous.x, foot.y, foot.z)
  const delta = new THREE.Vector3(previous.x - next.x, 0, 0)
  const ranges = [
    interval(origin.x, delta.x, -config.halfLength - radius, config.halfLength + radius),
    interval(origin.y, 0, 0.3 - height, config.roofY - 0.12),
    interval(origin.z, 0, -config.halfWidth - radius, config.halfWidth + radius),
  ]
  if (ranges.some((range) => !range)) return null
  const enter = Math.max(0, ...ranges.map((range) => range[0]))
  const leave = Math.min(1, ...ranges.map((range) => range[1]))
  return enter <= leave ? { time: enter, point: foot.clone() } : null
}

export function safeTrainEjection(actor, world, config) {
  const foot = actor.footPosition || actor.position
  const radius = actor.radius || 0.4, height = actor.height || 1.7
  const firstSide = foot.z >= 0 ? 1 : -1
  for (const side of [firstSide, -firstSide]) {
    for (const offsetZ of [0.65, 3, 6]) {
      for (const offsetX of [0, -3, 3, -6, 6]) {
        const point = new THREE.Vector3(foot.x + offsetX, foot.y, side * (config.halfWidth + radius + offsetZ))
        const support = world?.querySupport?.(point, { maxRise: 1.5, maxDrop: 10, radius, height, ignoreBody: 'train' })
        if (world?.querySupport && !support) continue
        if (support) point.y = support.height ?? support.point?.y ?? point.y
        if (!world?.capsuleClear || world.capsuleClear(point, radius, height, 'train')) return point
      }
    }
  }
  return null
}
