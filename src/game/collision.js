import { Vector3 } from 'three'
import { CONFIG } from '../config.js'

export function resolveObstacles(pos, radius, obstacles = []) {
  for (let pass = 0; pass < 3; pass++) {
    for (const obstacle of obstacles) {
      const dx = pos.x - obstacle.x
      const dz = pos.z - obstacle.z
      const distance = Math.hypot(dx, dz)
      const minimum = obstacle.r + radius
      if (distance >= minimum) continue
      const directionX = distance > 0.0001 ? dx / distance : 1
      const directionZ = distance > 0.0001 ? dz / distance : 0
      pos.x = obstacle.x + directionX * (minimum + 0.001)
      pos.z = obstacle.z + directionZ * (minimum + 0.001)
    }
  }
  return pos
}

export function isPositionClear(pos, radius, obstacles = [], inner = Infinity) {
  return Math.abs(pos.x) + radius <= inner && Math.abs(pos.z) + radius <= inner &&
    obstacles.every((o) => Math.hypot(pos.x - o.x, pos.z - o.z) >= o.r + radius)
}

function heightInterval(from, deltaY, minimum, maximum) {
  if (Math.abs(deltaY) < 0.000001) return from >= minimum && from <= maximum ? [0, 1] : null
  const first = (minimum - from) / deltaY
  const second = (maximum - from) / deltaY
  return [Math.max(0, Math.min(first, second)), Math.min(1, Math.max(first, second))]
}

function cylinderHit(from, delta, obstacle, padding) {
  const height = heightInterval(from.y, delta.y, -padding, (obstacle.height ?? CONFIG.arena.wallHeight) + padding)
  if (!height || height[0] > height[1]) return null
  const dx = from.x - obstacle.x
  const dz = from.z - obstacle.z
  const radius = obstacle.r + padding
  const a = delta.x * delta.x + delta.z * delta.z
  const c = dx * dx + dz * dz - radius * radius
  if (a < 0.000001) return c <= 0 ? height[0] : null
  const b = 2 * (dx * delta.x + dz * delta.z)
  const discriminant = b * b - 4 * a * c
  if (discriminant < 0) return null
  const root = Math.sqrt(discriminant)
  const start = Math.max(0, (-b - root) / (2 * a), height[0])
  const end = Math.min(1, (-b + root) / (2 * a), height[1])
  return start <= end ? start : null
}

export function segmentObstacleHit(from, to, obstacles = [], padding = 0) {
  const origin = new Vector3(from.x, from.y ?? 0, from.z)
  const delta = new Vector3(to.x, to.y ?? 0, to.z).sub(origin)
  let nearest = Infinity
  let blocker = null
  for (const obstacle of obstacles) {
    const time = cylinderHit(origin, delta, obstacle, padding)
    if (time !== null && time < nearest) { nearest = time; blocker = obstacle }
  }
  const boundary = CONFIG.arena.size / 2 - 0.25 - padding
  for (const axis of ['x', 'z']) {
    if (Math.abs(delta[axis]) < 0.000001) continue
    for (const sign of [-1, 1]) {
      const time = (sign * boundary - origin[axis]) / delta[axis]
      const other = axis === 'x' ? 'z' : 'x'
      const y = origin.y + delta.y * time
      if (time >= 0 && time <= 1 && time < nearest &&
          Math.abs(origin[other] + delta[other] * time) <= CONFIG.arena.size / 2 + padding &&
          y >= -padding && y <= CONFIG.arena.wallHeight + padding) {
        nearest = time
        blocker = { wall: true, axis, sign }
      }
    }
  }
  return blocker ? {
    point: origin.clone().addScaledVector(delta, nearest),
    distance: delta.length() * nearest,
    obstacle: blocker,
  } : null
}
