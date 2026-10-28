import { Box3, Vector3 } from 'three'

const epsilon = 0.0001
export const vector = (value = {}) => new Vector3(value.x || 0, value.y || 0, value.z || 0)
const yaw = (shape) => typeof shape.rotation === 'number' ? shape.rotation : shape.rotation?.[1] || 0

export function localPoint(point, shape) {
  return vector(point).sub(new Vector3(shape.x || 0, shape.y || 0, shape.z || 0)).applyAxisAngle(new Vector3(0, 1, 0), -yaw(shape))
}

export function worldNormal(normal, shape) {
  return normal.clone().applyAxisAngle(new Vector3(0, 1, 0), yaw(shape))
}

export function shapeBounds(shape) {
  const half = new Vector3(shape.width / 2 || shape.radius || 0, shape.height / 2, shape.depth / 2 || shape.radius || 0)
  const bounds = new Box3()
  for (const x of [-1, 1]) for (const y of [-1, 1]) for (const z of [-1, 1]) {
    bounds.expandByPoint(new Vector3(half.x * x, half.y * y, half.z * z)
      .applyAxisAngle(new Vector3(0, 1, 0), yaw(shape)).add(new Vector3(shape.x || 0, shape.y || 0, shape.z || 0)))
  }
  return bounds
}

export function rampSlope(shape) {
  return shape.height / (shape.riseAxis === 'x' ? shape.width : shape.depth) * (shape.riseSign || 1)
}

export function surfaceHeight(shape, point, radius = 0) {
  const local = localPoint(point, shape)
  const hw = shape.width / 2 || shape.radius
  const hd = shape.depth / 2 || shape.radius
  if (shape.type === 'cylinder') {
    if (Math.hypot(local.x, local.z) > shape.radius + radius + epsilon) return null
  } else if (Math.hypot(Math.max(0, Math.abs(local.x) - hw), Math.max(0, Math.abs(local.z) - hd)) > radius + epsilon) return null
  if (shape.type === 'ramp') {
    const normal = new Vector3(shape.riseAxis === 'x' ? -rampSlope(shape) : 0, 1,
      shape.riseAxis === 'z' ? -rampSlope(shape) : 0).normalize()
    const half = shape.riseAxis === 'x' ? hw : hd
    const axisPosition = Math.max(-half, Math.min(half, local[shape.riseAxis]))
    return { height: shape.y + axisPosition * rampSlope(shape), normal: worldNormal(normal, shape) }
  }
  return { height: shape.y + shape.height / 2, normal: new Vector3(0, 1, 0) }
}

function roundedContact(shape, foot, radius, height) {
  const p = localPoint(foot, shape), cap = Math.min(radius, height / 2)
  const bottom = -shape.height / 2, top = shape.height / 2
  const start = p.y + cap, end = p.y + height - cap
  const dy = start > top ? start - top : end < bottom ? end - bottom : 0
  let dx, dz, horizontalDepth, horizontalNormal
  if (shape.type === 'cylinder') {
    const distance = Math.hypot(p.x, p.z), gap = Math.max(0, distance - shape.radius)
    dx = distance ? p.x / distance * gap : 0
    dz = distance ? p.z / distance * gap : 0
    horizontalDepth = shape.radius + radius - distance
    horizontalNormal = new Vector3(distance ? p.x / distance : 1, 0, distance ? p.z / distance : 0)
  } else {
    const hw = shape.width / 2, hd = shape.depth / 2
    dx = p.x - Math.max(-hw, Math.min(hw, p.x))
    dz = p.z - Math.max(-hd, Math.min(hd, p.z))
    const xDepth = hw + radius - Math.abs(p.x), zDepth = hd + radius - Math.abs(p.z)
    horizontalDepth = Math.min(xDepth, zDepth)
    horizontalNormal = xDepth < zDepth ? new Vector3(p.x < 0 ? -1 : 1, 0, 0) : new Vector3(0, 0, p.z < 0 ? -1 : 1)
  }
  const distance = Math.hypot(dx, dy, dz)
  let normal, depth
  if (distance > epsilon) {
    const metric = (dx * dx + dz * dz) / (radius * radius) + dy * dy / (cap * cap)
    if (metric >= 1 - 0.00001) return null
    normal = new Vector3(dx, dy, dz).divideScalar(distance)
    const boundary = 1 / Math.sqrt((normal.x ** 2 + normal.z ** 2) / radius ** 2 + normal.y ** 2 / cap ** 2)
    depth = boundary - distance
  } else {
    const upward = top - p.y, downward = p.y + height - bottom
    depth = horizontalDepth; normal = horizontalNormal
    if (upward < depth) { depth = upward; normal.set(0, 1, 0) }
    if (downward < depth) { depth = downward; normal.set(0, -1, 0) }
  }
  return depth > epsilon ? { normal: worldNormal(normal, shape), depth, shape, bodyId: shape.bodyId || null } : null
}

export function characterContact(shape, foot, radius, height) {
  if (shape.type !== 'ramp') return roundedContact(shape, foot, radius, height)
  const p = localPoint(foot, shape)
  const bottom = -shape.height / 2
  let top = shape.height / 2
  let dx, dz, horizontalDepth, normal
  if (shape.type === 'cylinder') {
    const distance = Math.hypot(p.x, p.z)
    horizontalDepth = shape.radius + radius - distance
    normal = distance > epsilon ? new Vector3(p.x / distance, 0, p.z / distance) : new Vector3(1, 0, 0)
  } else {
    const hw = shape.width / 2, hd = shape.depth / 2
    const nearestX = Math.max(-hw, Math.min(hw, p.x))
    const nearestZ = Math.max(-hd, Math.min(hd, p.z))
    dx = p.x - nearestX; dz = p.z - nearestZ
    const distance = Math.hypot(dx, dz)
    if (distance > epsilon) {
      horizontalDepth = radius - distance
      normal = new Vector3(dx / distance, 0, dz / distance)
    } else {
      const xDepth = hw + radius - Math.abs(p.x), zDepth = hd + radius - Math.abs(p.z)
      horizontalDepth = Math.min(xDepth, zDepth)
      normal = xDepth < zDepth ? new Vector3(p.x < 0 ? -1 : 1, 0, 0) : new Vector3(0, 0, p.z < 0 ? -1 : 1)
    }
    if (shape.type === 'ramp') {
      const axis = shape.riseAxis
      const value = axis === 'x' ? nearestX : nearestZ
      top = value * rampSlope(shape)
    }
  }
  const upward = top - p.y, downward = p.y + height - bottom
  if (horizontalDepth <= epsilon || upward <= epsilon || downward <= epsilon) return null
  let depth = horizontalDepth
  if (upward < depth) {
    normal.set(0, 1, 0); depth = upward
  }
  if (downward < depth) { normal.set(0, -1, 0); depth = downward }
  return { normal: worldNormal(normal, shape), depth, shape, bodyId: shape.bodyId || null }
}

function convexPlanes(shape) {
  const hw = shape.width / 2, hh = shape.height / 2, hd = shape.depth / 2
  const planes = [
    [new Vector3(1, 0, 0), hw], [new Vector3(-1, 0, 0), hw],
    [new Vector3(0, -1, 0), hh], [new Vector3(0, 0, 1), hd], [new Vector3(0, 0, -1), hd],
  ]
  if (shape.type === 'ramp') {
    const n = new Vector3(shape.riseAxis === 'x' ? -rampSlope(shape) : 0, 1,
      shape.riseAxis === 'z' ? -rampSlope(shape) : 0)
    planes.push([n.normalize(), 0])
  } else planes.push([new Vector3(0, 1, 0), hh])
  return planes
}

export function shapeRaycast(shape, from, to, padding = 0) {
  const origin = localPoint(from, shape), delta = localPoint(to, shape).sub(origin)
  let enter = 0, exit = 1, normal = delta.clone().negate().normalize()
  if (shape.type === 'cylinder') {
    const a = delta.x ** 2 + delta.z ** 2
    const b = 2 * (origin.x * delta.x + origin.z * delta.z)
    const c = origin.x ** 2 + origin.z ** 2 - (shape.radius + padding) ** 2
    if (a < epsilon) { if (c > 0) return null }
    else {
      const discriminant = b * b - 4 * a * c
      if (discriminant < 0) return null
      const low = (-b - Math.sqrt(discriminant)) / (2 * a)
      const high = (-b + Math.sqrt(discriminant)) / (2 * a)
      if (low > enter) { enter = low; normal.set(origin.x + delta.x * low, 0, origin.z + delta.z * low).normalize() }
      exit = Math.min(exit, high)
    }
    for (const sign of [-1, 1]) {
      const n = new Vector3(0, sign, 0), distance = origin.y * sign - shape.height / 2 - padding
      const denominator = delta.y * sign
      if (Math.abs(denominator) < epsilon) { if (distance > 0) return null; continue }
      const time = -distance / denominator
      if (denominator < 0 && time > enter) { enter = time; normal.copy(n) }
      if (denominator > 0) exit = Math.min(exit, time)
    }
  } else {
    for (const [n, offset] of convexPlanes(shape)) {
      const distance = origin.dot(n) - offset - padding
      const denominator = delta.dot(n)
      if (Math.abs(denominator) < epsilon) { if (distance > 0) return null; continue }
      const time = -distance / denominator
      if (denominator < 0 && time > enter) { enter = time; normal.copy(n) }
      if (denominator > 0) exit = Math.min(exit, time)
    }
  }
  if (enter > exit || enter < 0 || enter > 1 || exit < 0) return null
  const point = vector(from).lerp(vector(to), enter)
  return { point, distance: point.distanceTo(vector(from)), normal: worldNormal(normal, shape), shape,
    bodyId: shape.bodyId || null, supportId: shape.bodyId || shape.id }
}
