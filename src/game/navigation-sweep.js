// Certify simple flat routes using a conservative swept body envelope. Any
// possible contact falls back to the motor sweep; this never skips an obstacle.
export function flatRouteClear(world, surfaces, a, b, radius, height, ignoreBody) {
  if (Math.abs(a.y - b.y) > 0.001) return false
  const floor = surfaces.some((shape) => shape.type === 'box' && !shape.rotation &&
    Math.abs(shape.y + shape.height / 2 - a.y) < 0.001 && [a, b].every((point) =>
      Math.abs(point.x - shape.x) <= shape.width / 2 && Math.abs(point.z - shape.z) <= shape.depth / 2))
  if (!floor) return false
  for (const shape of world.candidates(Math.min(a.x, b.x) - radius, Math.min(a.z, b.z) - radius,
    Math.max(a.x, b.x) + radius, Math.max(a.z, b.z) + radius, ignoreBody)) {
    const box = world.shapeBoxes.get(shape) || world.getShapeBounds(shape)
    if (box.max.y <= a.y + 0.0001 || box.min.y >= a.y + height - 0.0001) continue
    let near = 0, far = 1
    for (const axis of ['x', 'z']) {
      const delta = b[axis] - a[axis]
      const low = box.min[axis] - radius, high = box.max[axis] + radius
      if (Math.abs(delta) < 0.00001) {
        if (a[axis] < low || a[axis] > high) { near = Infinity; break }
      } else {
        const first = (low - a[axis]) / delta, last = (high - a[axis]) / delta
        near = Math.max(near, Math.min(first, last))
        far = Math.min(far, Math.max(first, last))
      }
    }
    if (near <= far) return false
  }
  return true
}
