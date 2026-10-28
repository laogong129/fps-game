import { Vector3 } from 'three'
import { vector, shapeBounds, surfaceHeight, characterContact, shapeRaycast } from './physics-shapes.js'

export class WorldCollision {
  constructor(shapes = [], { bounds = 60 } = {}) {
    this.bounds = bounds
    this.shapes = shapes.filter((shape) => shape.solid !== false)
    this.dynamicBodies = new Map()
    this.revision = 0
    this.cellSize = 8
    this.cells = new Map()
    this.shapeBoxes = new WeakMap()
    this.largeShapes = []
    for (const shape of this.shapes) {
      const box = shapeBounds(shape)
      this.shapeBoxes.set(shape, box)
      const cells = this.cellKeys(box.min.x, box.min.z, box.max.x, box.max.z)
      if (cells.length > 100) this.largeShapes.push(shape)
      else for (const key of cells) {
        if (!this.cells.has(key)) this.cells.set(key, [])
        this.cells.get(key).push(shape)
      }
    }
  }

  cellKeys(minX, minZ, maxX, maxZ) {
    const keys = []
    for (let x = Math.floor(minX / this.cellSize); x <= Math.floor(maxX / this.cellSize); x++) {
      for (let z = Math.floor(minZ / this.cellSize); z <= Math.floor(maxZ / this.cellSize); z++) keys.push(`${x},${z}`)
    }
    return keys
  }

  setDynamicBody(id, body) {
    const position = vector(body.position), previousPosition = vector(body.previousPosition || body.position)
    const next = { ...body, id, position, previousPosition, velocity: vector(body.velocity), revision: ++this.revision }
    next.worldShapes = body.shapes.filter((shape) => shape.solid !== false).map((shape) => ({
      ...shape, x: (shape.x || 0) + position.x, y: (shape.y || 0) + position.y,
      z: (shape.z || 0) + position.z, bodyId: id,
    }))
    next.bounds = next.worldShapes.reduce((bounds, shape) => {
      const box = shapeBounds(shape)
      this.shapeBoxes.set(shape, box)
      return bounds ? bounds.union(box) : box.clone()
    }, null)
    this.dynamicBodies.set(id, next)
    return next
  }

  getBody(id) { return this.dynamicBodies.get(id) || null }
  removeDynamicBody(id) { this.dynamicBodies.delete(id) }

  candidates(minX, minZ, maxX, maxZ, ignoreBody) {
    const result = new Set(this.largeShapes)
    for (const key of this.cellKeys(minX, minZ, maxX, maxZ)) {
      for (const shape of this.cells.get(key) || []) result.add(shape)
    }
    for (const [id, body] of this.dynamicBodies) {
      if (id === ignoreBody) continue
      if (body.bounds && (body.bounds.max.x < minX || body.bounds.min.x > maxX || body.bounds.max.z < minZ || body.bounds.min.z > maxZ)) continue
      for (const shape of body.worldShapes) result.add(shape)
    }
    return [...result].filter((shape) => {
      const box = this.shapeBoxes.get(shape)
      return !box || box.max.x >= minX && box.min.x <= maxX && box.max.z >= minZ && box.min.z <= maxZ
    })
  }

  getShapeBounds(shape) { return shapeBounds(shape) }

  raycast(from, to, padding = 0, ignoreBody) {
    let nearest = null
    const shapes = this.candidates(Math.min(from.x, to.x) - padding, Math.min(from.z, to.z) - padding,
      Math.max(from.x, to.x) + padding, Math.max(from.z, to.z) + padding, ignoreBody)
    for (const shape of shapes) {
      const hit = shapeRaycast(shape, from, to, padding)
      if (hit && (!nearest || hit.distance < nearest.distance)) nearest = hit
    }
    return nearest
  }

  contacts(foot, radius, height, ignoreBody) {
    const contacts = []
    for (const shape of this.candidates(foot.x - radius, foot.z - radius, foot.x + radius, foot.z + radius, ignoreBody)) {
      const contact = characterContact(shape, foot, radius, height)
      if (contact) contacts.push(contact)
    }
    return contacts
  }

  capsuleClear(foot, radius = 0.35, height = 1.8, ignoreBody) {
    return Math.abs(foot.x) + radius <= this.bounds && Math.abs(foot.z) + radius <= this.bounds &&
      this.contacts(foot, radius, height, ignoreBody).every((contact) => contact.depth < 0.002)
  }

  querySupport(foot, { maxRise = 0.3, maxDrop = 0.5, radius = 0.35, height = 1.8,
    ignoreBody, maxSlope = Math.PI / 4, requireClear = true } = {}) {
    let best = null
    const candidates = this.candidates(foot.x - radius, foot.z - radius, foot.x + radius, foot.z + radius, ignoreBody)
    for (const shape of candidates) {
      if (shape.walkable === false) continue
      const surface = surfaceHeight(shape, foot, radius)
      if (!surface || surface.normal.y < Math.cos(maxSlope) ||
          surface.height > foot.y + maxRise + 0.002 || surface.height < foot.y - maxDrop - 0.002) continue
      const point = vector(foot).setY(surface.height)
      if (requireClear) {
        let invalid = false
        for (let attempt = 0; attempt < 5; attempt++) {
          const overlaps = this.contacts(point.clone().add(new Vector3(0, 0.002, 0)), radius, height, ignoreBody)
          if (!overlaps.length) break
          if (overlaps.some((contact) => contact.normal.y < 0.1)) { invalid = true; break }
          const lift = Math.max(...overlaps.map((contact) => contact.depth / contact.normal.y)) + 0.001
          point.y += lift
          if (point.y > foot.y + maxRise + 0.002) { invalid = true; break }
        }
        if (invalid || !this.capsuleClear(point.clone().add(new Vector3(0, 0.002, 0)), radius, height, ignoreBody)) continue
      }
      if (!best || Math.abs(point.y - foot.y) < Math.abs(best.height - foot.y) - 0.0001 ||
          Math.abs(Math.abs(point.y - foot.y) - Math.abs(best.height - foot.y)) < 0.0001 && point.y > best.height) best = {
        point, height: point.y, normal: surface.normal, shape, bodyId: shape.bodyId || null,
        supportId: shape.bodyId || shape.id, supportShapeId: shape.id,
      }
    }
    return best
  }

  moveCharacter(foot, delta, { radius = 0.35, height = 1.8, stepHeight = 0.3,
    snapToGround = false, maxSlope = Math.PI / 4, ignoreBody } = {}) {
    const position = vector(foot), displacement = vector(delta)
    const steps = Math.max(1, Math.ceil(displacement.length() / Math.min(radius * 0.45, 0.12)))
    const increment = displacement.clone().divideScalar(steps)
    const normals = []
    let blocked = false, grounded = false, support = null
    for (let step = 0; step < steps; step++) {
      const previous = position.clone()
      position.add(increment)
      if (snapToGround && increment.y <= 0.001) {
        const floor = this.querySupport(position.clone().setY(previous.y), {
          maxRise: stepHeight, maxDrop: stepHeight + 0.05, radius, height, maxSlope, ignoreBody,
        })
        if (floor) position.y = floor.height
      }
      for (let pass = 0; pass < 5; pass++) {
        const overlaps = this.contacts(position, radius, height, ignoreBody)
        if (!overlaps.length) break
        overlaps.sort((a, b) => b.depth - a.depth)
        const collision = overlaps[0]
        position.addScaledVector(collision.normal, collision.depth + 0.0002)
        normals.push(collision.normal)
        if (collision.normal.y > 0.5) grounded = true
        if (collision.normal.y < 0.5) blocked = true
      }
      position.x = Math.max(-this.bounds + radius, Math.min(this.bounds - radius, position.x))
      position.z = Math.max(-this.bounds + radius, Math.min(this.bounds - radius, position.z))
    }
    support = this.querySupport(position, { maxRise: 0.025, maxDrop: 0.065, radius, height, maxSlope, ignoreBody })
    if (support && displacement.y <= 0.001) { position.y = support.height; grounded = true }
    return { position, grounded, blocked, normal: support?.normal || normals.at(-1) || null,
      supportId: support?.supportId || null, supportShapeId: support?.supportShapeId || null,
      bodyId: support?.bodyId || null, normals }
  }
}
