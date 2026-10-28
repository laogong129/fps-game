import * as THREE from 'three'
import { createTrainLayout, TRAIN_DEFAULTS } from './train-layout.js'
import { createTrainVisuals } from './train-visuals.js'
import { TrainAudio } from './train-audio.js'
import { trainContainsRider, sweptTrainContact, safeTrainEjection } from './train-contact.js'

export class TrainController {
  constructor(scene, world, options = {}) {
    this.world = world
    this.callbacks = options
    this.config = { ...TRAIN_DEFAULTS, ...options.config }
    this.layout = createTrainLayout()
    this.visuals = createTrainVisuals(scene, this.layout)
    this.audio = new TrainAudio()
    this.position = new THREE.Vector3()
    this.previousPosition = new THREE.Vector3()
    this.velocity = new THREE.Vector3()
    this.reset()
  }

  get doorsOpen() { return this.phase === 'dwell' || this.phase === 'warning' && this.timer > 1 }
  get moving() { return this.phase === 'travel' }
  get warning() { return ['warning', 'travel', 'emergency'].includes(this.phase) }
  get nextStopX() { return this.config.stops[this.destination] }

  reset() {
    this.position.set(this.config.stops[0], 0, 0)
    this.previousPosition.copy(this.position)
    this.velocity.set(0, 0, 0)
    this.phase = 'dwell'
    this.timer = this.config.dwellTime
    this.destination = 1
    this.tripId = 0
    this.clock = 0
    this.blocked = false
    this.hitActors = new Set()
    this.audio.setActive(false)
    this.publish()
  }

  setActive(active) { this.audio.setActive(active) }

  publish() {
    const shapes = this.doorsOpen ? this.layout.shapes : [...this.layout.shapes, ...this.layout.doors]
    this.world?.setDynamicBody?.('train', {
      shapes, position: this.position, previousPosition: this.previousPosition, velocity: this.velocity,
    })
    this.visuals.update(this.position, this.doorsOpen, this.phase, this.clock)
  }

  doorObstructed(actors) {
    return actors.some((actor) => {
      if (actor.dead) return false
      const foot = actor.footPosition || actor.position
      if (!foot || foot.y >= 3.25 || foot.y + (actor.height || 1.7) <= 1) return false
      return this.layout.doors.some((door) =>
        Math.abs(foot.x - this.position.x - door.x) < door.width / 2 + (actor.radius || 0.4) &&
        Math.abs(foot.z - door.z) < (actor.radius || 0.4) + 0.12)
    })
  }

  beginWarning() {
    this.phase = 'warning'
    this.timer = this.config.warningTime
    this.callbacks.onWarning?.(this.getHudData())
  }

  move(dt, actors) {
    const distance = this.nextStopX - this.position.x
    const sign = Math.sign(distance)
    const duration = Math.min(dt, Math.abs(distance) / this.config.speed)
    const before = this.position.clone()
    const next = before.clone().add(new THREE.Vector3(sign * this.config.speed * duration, 0, 0))
    let allowed = 1
    for (const actor of actors) {
      const contact = sweptTrainContact(actor, before, next, this.config)
      if (!contact) continue
      const safe = safeTrainEjection(actor, this.world, this.config)
      if (!safe) allowed = Math.min(allowed, Math.max(0, contact.time - 0.002))
      const key = actor.id ?? actor
      if (this.hitActors.has(key)) continue
      this.hitActors.add(key)
      const ratio = actor.isPlayer ? this.config.playerDamageRatio : actor.isBoss ? this.config.bossDamageRatio : 1
      const event = {
        actor, damage: actor.isPlayer || actor.isBoss ? (actor.maxHp || 100) * ratio : Infinity,
        damageRatio: ratio, kill: !actor.isPlayer && !actor.isBoss,
        position: safe, tripId: this.tripId, kind: 'train',
      }
      if (actor.onTrainHit) actor.onTrainHit(event)
      else this.callbacks.onHit?.(event)
    }
    this.position.lerpVectors(before, next, allowed)
    if (allowed < 1) { this.phase = 'emergency'; this.velocity.set(0, 0, 0); return dt }
    this.velocity.set(sign * this.config.speed, 0, 0)
    if (Math.abs(this.position.x - this.nextStopX) < 0.001) {
      this.position.x = this.nextStopX
      this.destination = 1 - this.destination
      this.phase = 'dwell'
      this.timer = this.config.dwellTime
      this.velocity.set(0, 0, 0)
    }
    return duration
  }

  update(dt, actors = []) {
    if (!(dt > 0)) return
    this.previousPosition.copy(this.position)
    this.clock += dt
    this.blocked = false
    let remaining = dt
    let guard = 0
    while (remaining > 1e-7 && guard++ < 100) {
      if (this.phase === 'travel' || this.phase === 'emergency') {
        this.phase = 'travel'
        remaining -= this.move(remaining, actors)
      } else {
        if (this.phase === 'warning' && this.timer <= 1 && this.doorObstructed(actors)) {
          this.timer = 1.001
          this.blocked = true
          this.velocity.set(0, 0, 0)
          break
        }
        const untilDoorCheck = this.phase === 'warning' && this.timer > 1 ? this.timer - 1 : this.timer
        const consumed = Math.min(remaining, Math.max(0, untilDoorCheck))
        this.timer -= consumed
        remaining -= consumed
        if (this.phase === 'warning' && Math.abs(this.timer - 1) < 1e-7 && this.doorObstructed(actors)) continue
        if (this.timer <= 1e-7) {
          if (this.phase === 'dwell') this.beginWarning()
          else { this.phase = 'travel'; this.tripId++; this.hitActors.clear() }
        }
        if (consumed <= 1e-9 && this.timer > 1e-7) break
      }
    }
    this.publish()
    this.audio.update(this.phase, this.clock, Math.abs(this.velocity.x))
  }

  containsRider(foot, radius = 0.4, height = 1.7) {
    return trainContainsRider({ footPosition: foot, radius, height }, this.position, this.config)
  }

  getLadders() {
    return this.layout.ladders.map((ladder) => {
      const bottom = new THREE.Vector3(this.position.x + ladder.x, ladder.bottomY, 0)
      const top = new THREE.Vector3(this.position.x + ladder.x + ladder.direction * 1.3, ladder.topY, 0)
      const upper = new THREE.Vector3(this.position.x + ladder.x, 3.62, 0)
      return { id: ladder.id, bottom, top, bodyId: 'train', duration: 1.35,
        waypoints: [upper.clone(), top.clone()], downWaypoints: [upper.clone(), bottom.clone()] }
    })
  }

  getBoardingPortals(radius = 0.4) {
    if (!this.doorsOpen || this.phase === 'travel') return []
    const interiorZ = Math.min(1.05, Math.max(0.05, this.config.halfWidth - radius - 0.15))
    const portals = this.layout.doors.map((door) => ({
      id: door.id, bodyId: 'train', kind: 'interior',
      outside: new THREE.Vector3(this.position.x + door.x, 1, Math.sign(door.z) * 2.3),
      inside: new THREE.Vector3(this.position.x + door.x, 1, Math.sign(door.z) * interiorZ),
    }))
    portals.push({ id: 'train-roof-dock', bodyId: 'train', kind: 'roof',
      outside: new THREE.Vector3(this.position.x - 6, 3.5, 2.15),
      inside: new THREE.Vector3(this.position.x - 6, 3.5, interiorZ) })
    return portals
  }

  getBoardingRoute(from, to, radius = 0.4) {
    if (!this.doorsOpen || this.phase === 'travel') return []
    const kind = to.y >= this.config.roofY - 0.2 ? 'roof' : 'interior'
    const portals = this.getBoardingPortals(radius).filter((portal) => portal.kind === kind)
    portals.sort((first, second) => first.outside.distanceToSquared(from) - second.outside.distanceToSquared(from))
    if (!portals.length) return []
    const portal = portals[0]
    const innerZ = Math.max(0.05, this.config.halfWidth - radius - 0.15)
    const target = new THREE.Vector3(THREE.MathUtils.clamp(to.x, this.position.x - 11.3 + radius, this.position.x + 11.3 - radius),
      kind === 'roof' ? this.config.roofY : this.config.floorY,
      THREE.MathUtils.clamp(to.z, -innerZ, innerZ))
    return [portal.outside.clone(), portal.inside.clone(), target]
  }

  getInterceptionTarget(from = new THREE.Vector3()) {
    return new THREE.Vector3(this.nextStopX - 6, 1, from.z < 0 ? -3.2 : 3.2)
  }

  getBossInterceptionTarget() {
    // Use the open avenue on each stop, away from the roof-dock/ramp pocket.
    return this.nextStopX > 0 ? new THREE.Vector3(40, 0, -18) : new THREE.Vector3(-48, 0, 18)
  }

  getHudData() {
    const station = this.position.x < 0 ? '西站' : '东站'
    const nextStation = this.nextStopX < 0 ? '西站' : '东站'
    const labels = { dwell: `${station}停靠 ${Math.ceil(this.timer)}秒`, warning: this.blocked ? '车门受阻 · 等待清空' : `列车即将起步 ${Math.ceil(this.timer)}秒`,
      travel: `列车驶向${nextStation} · 注意道口`, emergency: '列车紧急停车 · 清空轨道' }
    return { trainPhase: this.phase, trainStatus: labels[this.phase], trainWarning: this.warning,
      trainDoorsOpen: this.doorsOpen, trainTrip: this.tripId, trainNextStation: nextStation }
  }
}
