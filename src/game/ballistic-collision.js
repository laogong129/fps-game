import { Vector3 } from 'three'
import { shapeRaycast, vector } from './physics-shapes.js'

function overlapsSweep(bounds, offset0, offset1, from, to, radius) {
  for (const axis of ['x', 'y', 'z']) {
    const low = bounds.min[axis] + Math.min(offset0[axis], offset1[axis]) - radius
    const high = bounds.max[axis] + Math.max(offset0[axis], offset1[axis]) + radius
    if (Math.max(from[axis], to[axis]) < low || Math.min(from[axis], to[axis]) > high) return false
  }
  return true
}

export function sweepWorld(world, from, to, { radius = 0.01, alpha0 = 0, alpha1 = 1 } = {}) {
  if (!world) return null
  const start = vector(from), end = vector(to), length = start.distanceTo(end)
  const padding = Math.max(0, radius)
  let nearest = null, nearestTime = Infinity
  const accept = (hit, fraction, bodyId = null) => {
    if (!hit || fraction >= nearestTime) return
    nearestTime = fraction
    nearest = { point: start.clone().lerp(end, fraction), distance: length * fraction,
      normal: hit.normal, shape: hit.shape, bodyId, blocked: true }
  }
  const shapes = world.candidates(Math.min(start.x, end.x) - padding, Math.min(start.z, end.z) - padding,
    Math.max(start.x, end.x) + padding, Math.max(start.z, end.z) + padding)
  for (const shape of shapes) {
    if (shape.bodyId || shape.solid === false) continue
    const hit = shapeRaycast(shape, start, end, padding)
    if (hit) accept(hit, length > 0 ? hit.distance / length : 0)
  }
  for (const body of world.dynamicBodies?.values() || []) {
    if (!body.bounds) continue
    const previous = body.previousPosition || body.position
    const at0 = new Vector3().lerpVectors(previous, body.position, alpha0)
    const at1 = new Vector3().lerpVectors(previous, body.position, alpha1)
    if (!overlapsSweep(body.bounds, at0.clone().sub(body.position), at1.clone().sub(body.position), start, end, padding)) continue
    const localFrom = start.clone().sub(at0), localTo = end.clone().sub(at1)
    const relativeLength = localFrom.distanceTo(localTo)
    for (const shape of body.shapes) {
      if (shape.solid === false) continue
      const hit = shapeRaycast(shape, localFrom, localTo, padding)
      if (hit) accept(hit, relativeLength > 0 ? hit.distance / relativeLength : 0, body.id)
    }
  }
  return nearest
}
