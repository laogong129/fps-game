import { Vector3 } from 'three'
import { vector } from './physics-shapes.js'

export class CharacterMotor {
  constructor(world, options = {}) {
    this.world = world
    Object.assign(this, { radius: 0.35, height: 1.8, eyeHeight: 1.7, speed: 6, sprintMult: 1.6,
      jumpVelocity: 5.4, gravity: 18, stepHeight: 0.3, maxSlope: Math.PI / 4,
      vaultHeight: 1.2, mantleHeight: 2, vaultDuration: 0.35, mantleDuration: 0.65 }, options)
    this.position = new Vector3()
    this.velocity = new Vector3()
    this.airMomentum = new Vector3()
    this.reset(options.position || new Vector3())
  }

  get canFire() { return !this.traversal }

  reset(position = new Vector3()) {
    this.position.copy(position)
    this.velocity.set(0, 0, 0)
    this.airMomentum.set(0, 0, 0)
    this.traversal = null
    this.supportId = null
    this.supportShapeId = null
    this.supportPosition = null
    this.airborneBodyId = null
    const support = this.world.querySupport(this.position, { ...this.dimensions(), maxRise: 0.03, maxDrop: 0.1 })
    this.grounded = !!support
    if (support) this.attach(support)
  }

  dimensions() { return { radius: this.radius, height: this.height, stepHeight: this.stepHeight, maxSlope: this.maxSlope } }

  attach(support) {
    this.supportId = support.supportId
    this.supportShapeId = support.supportShapeId
    const body = this.world.getBody(this.supportId)
    this.supportPosition = body ? body.position.clone() : null
    this.airborneBodyId = null
  }

  updateAirborneBody() {
    const body = this.world.getBody(this.airborneBodyId)
    const bounds = body?.bounds, point = this.position
    if (!bounds || point.x < bounds.min.x || point.x > bounds.max.x || point.z < bounds.min.z || point.z > bounds.max.z ||
        point.y < bounds.min.y || point.y > bounds.max.y + this.height) this.airborneBodyId = null
  }

  carry() {
    const body = this.world.getBody(this.supportId)
    if (!body) return
    if (this.supportPosition) {
      const delta = body.position.clone().sub(this.supportPosition)
      const expected = this.position.clone().add(delta)
      const result = this.world.moveCharacter(this.position, delta, { ...this.dimensions(), ignoreBody: body.id })
      this.position.copy(result.position)
      if (result.position.distanceTo(expected) > 0.2 && result.blocked) this.supportId = null
    }
    this.supportPosition = body.position.clone()
  }

  startClimb(target, duration = this.mantleDuration, bodyId = null, { waypoints } = {}) {
    if (this.traversal || !(duration > 0)) return false
    const body = this.world.getBody(bodyId)
    const offset = body?.position || new Vector3()
    let path = [this.position.clone()]
    if (waypoints?.length) path.push(...waypoints.map(vector))
    else {
      const raised = Math.max(this.position.y, target.y) + 0.06
      path.push(this.position.clone().setY(raised), vector(target).setY(raised))
    }
    path.push(vector(target))
    path = path.filter((point, index) => !index || point.distanceTo(path[index - 1]) > 0.001)
    for (let index = 1; index < path.length; index++) {
      const count = Math.max(1, Math.ceil(path[index].distanceTo(path[index - 1]) / 0.08))
      for (let sample = 1; sample <= count; sample++) {
        const point = path[index - 1].clone().lerp(path[index], sample / count)
        if (!this.world.capsuleClear(point, this.radius, this.height)) return false
      }
    }
    const lengths = path.slice(1).map((point, index) => point.distanceTo(path[index]))
    this.traversal = { bodyId, path: path.map((point) => point.sub(offset)), lengths,
      length: lengths.reduce((sum, length) => sum + length, 0), duration, elapsed: 0 }
    this.velocity.set(0, 0, 0)
    this.airMomentum.set(0, 0, 0)
    this.grounded = false
    this.supportId = null
    this.supportPosition = null
    this.airborneBodyId = body?.id || null
    return true
  }

  tryTraverse(direction) {
    if (direction.lengthSq() < 0.01 || this.traversal) return false
    const forward = direction.clone().setY(0).normalize()
    const from = this.position.clone().add(new Vector3(0, 0.55, 0))
    const hit = this.world.raycast(from, from.clone().addScaledVector(forward, this.radius + 0.9))
    if (!hit || !hit.shape.climbable || Math.abs(hit.normal.y) > 0.3) return false
    if (hit.bodyId && this.world.getBody(hit.bodyId)?.velocity.length() > 0.5) return false
    const box = this.world.getShapeBounds(hit.shape)
    const rise = box.max.y - this.position.y
    if (rise < 0.15 || rise > this.mantleHeight + 0.001) return false
    const width = Math.abs(forward.x) * (box.max.x - box.min.x) + Math.abs(forward.z) * (box.max.z - box.min.z)
    if (rise <= this.vaultHeight && width < 1.7) {
      const landing = hit.point.clone().addScaledVector(forward, width + this.radius + 0.15).setY(this.position.y)
      const support = this.world.querySupport(landing, { ...this.dimensions(), maxRise: 0.1, maxDrop: 2 })
      if (support) return this.startClimb(support.point, this.vaultDuration, hit.bodyId, {
        waypoints: [this.position.clone().setY(box.max.y + 0.06), support.point.clone().setY(box.max.y + 0.06)],
      })
    }
    const landing = hit.point.clone().addScaledVector(forward, this.radius + 0.16).setY(box.max.y)
    const support = this.world.querySupport(landing, { ...this.dimensions(), maxRise: 0.03, maxDrop: 0.05 })
    return !!support && this.startClimb(support.point, this.mantleDuration, hit.bodyId)
  }

  updateTraversal(dt) {
    const action = this.traversal
    action.elapsed = Math.min(action.duration, action.elapsed + dt)
    let distance = action.length * action.elapsed / action.duration
    let next = action.path.at(-1).clone()
    for (let index = 0; index < action.lengths.length; index++) {
      if (distance <= action.lengths[index]) {
        next = action.path[index].clone().lerp(action.path[index + 1], distance / action.lengths[index])
        break
      }
      distance -= action.lengths[index]
    }
    const body = this.world.getBody(action.bodyId)
    if (body) next.add(body.position)
    const result = this.world.moveCharacter(this.position, next.clone().sub(this.position), this.dimensions())
    this.position.copy(result.position)
    if (result.position.distanceTo(next) > 0.08 || action.elapsed >= action.duration) {
      this.traversal = null
      const support = this.world.querySupport(this.position, { ...this.dimensions(), maxRise: 0.03, maxDrop: 0.08 })
      this.grounded = !!support
      if (support) this.attach(support)
    }
    this.updateAirborneBody()
  }

  update(dt, input = {}) {
    if (!(dt > 0) || !Number.isFinite(dt)) return this
    if (this.traversal) { this.updateTraversal(dt); return this }
    this.carry()
    const movement = vector(input.move).setY(0)
    if (movement.lengthSq() > 1) movement.normalize()
    if (input.traverse && this.tryTraverse(movement)) { this.updateTraversal(dt); return this }
    if (input.jump && this.grounded) {
      const carrier = this.world.getBody(this.supportId)
      if (carrier) this.airMomentum.copy(carrier.velocity).setY(0)
      this.airborneBodyId = carrier?.id || null
      this.velocity.y = this.jumpVelocity
      this.grounded = false
      this.supportId = null
      this.supportPosition = null
    }
    const count = Math.max(1, Math.ceil(dt / (1 / 120)))
    const step = dt / count
    const moveSpeed = Number.isFinite(input.speed) ? input.speed : this.speed * (input.sprint ? this.sprintMult : 1)
    for (let iteration = 0; iteration < count; iteration++) {
      this.velocity.x = movement.x * moveSpeed + this.airMomentum.x
      this.velocity.z = movement.z * moveSpeed + this.airMomentum.z
      if (!this.grounded || this.velocity.y > 0) this.velocity.y -= this.gravity * step
      const result = this.world.moveCharacter(this.position, this.velocity.clone().multiplyScalar(step), {
        ...this.dimensions(), snapToGround: this.grounded && this.velocity.y <= 0,
      })
      this.position.copy(result.position)
      this.grounded = result.grounded && this.velocity.y <= 0
      for (const normal of result.normals) {
        if (normal.y < -0.5 && this.velocity.y > 0) this.velocity.y = 0
      }
      if (this.grounded) {
        this.velocity.y = 0
        this.airMomentum.set(0, 0, 0)
        this.attach(result)
      } else {
        if (this.world.getBody(this.supportId)) this.airborneBodyId = this.supportId
        this.supportId = null; this.supportPosition = null
      }
    }
    this.updateAirborneBody()
    return this
  }
}
