import { Vector3 } from 'three'

const epsilon = 0.0001

function body(actor, index, budget) {
  const motor = actor?.motor
  if (!motor || actor.dead || actor.hp === 0 || !(motor.radius > 0) || !(motor.height > 0)) return null
  return { actor, motor, index, radius: motor.radius, height: motor.height, budget,
    weight: motor.traversal ? 0 : Math.max(0, actor.crowdWeight ?? 1), changed: false }
}

function connectedFloor(a, b, world) {
  if (!a.motor.grounded || !b.motor.grounded) return false
  const first = a.motor.position, second = b.motor.position
  const count = Math.max(1, Math.ceil(first.distanceTo(second) / 0.25))
  const dimensions = { radius: Math.min(a.radius, b.radius), height: Math.min(a.height, b.height),
    maxRise: 0.3, maxDrop: 0.35, maxSlope: Math.min(a.motor.maxSlope, b.motor.maxSlope) }
  let elevation = first.y
  for (let sample = 1; sample <= count; sample++) {
    const point = first.clone().lerp(second, sample / count).setY(elevation)
    const support = world.querySupport(point, dimensions)
    if (!support) return false
    elevation = support.height
  }
  return Math.abs(elevation - second.y) < 0.1
}

function overlap(a, b, world, skin) {
  const first = a.motor.position, second = b.motor.position
  if (Math.min(first.y + a.height, second.y + b.height) - Math.max(first.y, second.y) <= 0.05) return null
  const difference = first.clone().sub(second).setY(0)
  const distance = difference.length(), depth = a.radius + b.radius + skin - distance
  if (depth <= epsilon) return null
  // A solid between the feet separates floors, train interiors and the two sides of a wall.
  if (world.raycast(first.clone().add(new Vector3(0, 0.08, 0)), second.clone().add(new Vector3(0, 0.08, 0))) &&
      !connectedFloor(a, b, world)) return null
  if (distance > epsilon) difference.divideScalar(distance)
  else {
    const angle = (a.index * 2.399963 + b.index * 1.618034) % (Math.PI * 2)
    difference.set(Math.cos(angle), 0, Math.sin(angle))
  }
  return { normal: difference, depth }
}

function push(entry, direction, distance, world) {
  if (!entry.weight || entry.budget <= epsilon || distance <= epsilon) return 0
  const motor = entry.motor, start = motor.position
  const amount = Math.min(distance, entry.budget)
  const dimensions = { radius: entry.radius, height: entry.height,
    stepHeight: Math.min(0.3, motor.stepHeight ?? 0.3), maxSlope: motor.maxSlope ?? Math.PI / 4 }
  const result = world.moveCharacter(start, direction.clone().multiplyScalar(amount), {
    ...dimensions, snapToGround: motor.grounded,
  })
  const displacement = result.position.clone().sub(start)
  const progress = displacement.dot(direction)
  if (progress <= epsilon || Math.abs(displacement.y) > dimensions.stepHeight + 0.025 ||
      !world.capsuleClear(result.position.clone().add(new Vector3(0, 0.002, 0)), entry.radius, entry.height)) return 0
  const support = motor.grounded && world.querySupport(result.position, {
    ...dimensions, maxRise: 0.03, maxDrop: 0.07,
  })
  // Crowd correction cannot push a grounded actor off its floor or onto another level.
  if (motor.grounded && !support) return 0
  motor.position.copy(result.position)
  if (support) { motor.position.y = support.height; motor.attach(support) }
  entry.budget = Math.max(0, entry.budget - displacement.length())
  entry.changed = true
  return Math.min(amount, progress)
}

/** Resolve actor overlap after movement and before melee/projectile checks. */
export function resolveCrowd(world, actors, dt, { iterations = 4, speed = 10, skin = 0.01 } = {}) {
  if (!(dt > 0) || !Number.isFinite(dt)) return { contacts: 0, movedActors: 0 }
  const entries = actors.map((actor, index) => body(actor, index, speed * Math.min(dt, 0.05))).filter(Boolean)
  let contacts = 0
  for (let iteration = 0; iteration < iterations; iteration++) {
    let changed = false
    for (let i = 0; i < entries.length; i++) for (let j = i + 1; j < entries.length; j++) {
      const a = entries[i], b = entries[j]
      if (!(a.weight + b.weight)) continue
      const contact = overlap(a, b, world, skin)
      if (!contact) continue
      contacts++
      const available = (a.weight ? a.budget : 0) + (b.weight ? b.budget : 0)
      const amount = Math.min(contact.depth, available)
      const share = amount * a.weight / (a.weight + b.weight)
      let moved = push(a, contact.normal, share, world)
      moved += push(b, contact.normal.clone().negate(), amount - moved, world)
      if (moved < amount) moved += push(a, contact.normal, amount - moved, world)
      changed ||= moved > epsilon
    }
    if (!changed) break
  }
  let movedActors = 0
  for (const entry of entries) if (entry.changed) {
    entry.actor.group?.position.copy(entry.motor.position)
    entry.actor.syncCamera?.()
    movedActors++
  }
  return { contacts, movedActors }
}
