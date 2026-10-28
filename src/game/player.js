import * as THREE from 'three'
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { CONFIG } from '../config.js'
import { CharacterMotor } from './character-motor.js'
import { playLand } from './sound.js'

export class Player {
  constructor(camera, domElement, scene, world, spawn = new THREE.Vector3(-35, 0, -25)) {
    Object.assign(this, { camera, domElement, scene, world, spawn })
    this.pos = new THREE.Vector3()
    this.motor = new CharacterMotor(world, {
      radius: CONFIG.player.radius, height: CONFIG.player.bodyHeight,
      eyeHeight: CONFIG.player.height, speed: CONFIG.player.moveSpeed,
      jumpVelocity: CONFIG.player.jump.velocity, gravity: CONFIG.player.jump.gravity,
      stepHeight: CONFIG.player.stepHeight,
      vaultHeight: CONFIG.player.vaultHeight, mantleHeight: CONFIG.player.mantleHeight,
    })
    this.controls = null
    this.keys = {}
    this.enabled = false
    this.canLock = () => false
    this.getLadders = () => []
    this.gunGroup = new THREE.Group()
    this.gunGroup.position.set(0.25, -0.4, -0.5)
    camera.add(this.gunGroup)
    scene.add(camera)
    window.addEventListener('keydown', (event) => {
      if (!this.enabled || !this.controls?.isLocked) return
      this.keys[event.code] = true
      if (event.code === 'Space') {
        event.preventDefault()
        if (!event.repeat) this.jumpQueued = true
      }
    })
    window.addEventListener('keyup', (event) => { this.keys[event.code] = false })
    domElement.addEventListener('click', () => { if (this.canLock()) this.safeLock() })
    this.reset()
  }

  async initControls() {
    this.controls = new PointerLockControls(this.camera, this.domElement)
    this.controls.addEventListener('lock', () => { this.lockFailed = false })
    this.controls.addEventListener('unlock', () => this.clearInput())
    this.domElement.ownerDocument.addEventListener('pointerlockerror', () => { this.lockFailed = true })
  }

  safeLock() {
    if (!this.controls || this.controls.isLocked) return
    this.lockFailed = false
    try { this.domElement.requestPointerLock()?.catch?.(() => { this.lockFailed = true }) }
    catch { this.lockFailed = true }
  }

  clearInput() { this.keys = {}; this.jumpQueued = false }
  setEnabled(value) { this.enabled = value; if (!value) this.clearInput() }
  get footPosition() { return this.motor.position }
  get supportId() { return this.motor.supportId }
  get forward() {
    const direction = this.camera.getWorldDirection(new THREE.Vector3()).setY(0)
    return direction.lengthSq() > 0.001 ? direction.normalize() : new THREE.Vector3(0, 0, -1)
  }
  get right() { const f = this.forward; return new THREE.Vector3(-f.z, 0, f.x) }

  reset() {
    this.hp = this.maxHp = CONFIG.player.maxHp
    this.moveSpeed = CONFIG.player.moveSpeed
    this.speedMult = 1
    this.invuln = false
    this.invulnTimer = 0
    this.lastDamage = null
    this.ladderLatch = null
    this.motor.reset(this.spawn)
    this.clearInput()
    this.syncCamera()
    this.camera.rotation.set(0, this.spawnYaw || 0, 0)
    this.camera.fov = CONFIG.view.fov
    this.camera.updateProjectionMatrix()
  }

  tryLadder() {
    if (this.motor.traversal) return false
    this.motor.carry()
    const ladders = this.getLadders()
    const latched = ladders.find((ladder) => ladder.id === this.ladderLatch)
    if (latched && [latched.bottom, latched.top].every((end) =>
      this.footPosition.distanceTo(end) > CONFIG.player.ladderReleaseRange)) this.ladderLatch = null
    if (!latched) this.ladderLatch = null
    if (!this.motor.grounded) return false
    for (const ladder of ladders) {
      if (ladder.id === this.ladderLatch) continue
      for (const [start, target] of [[ladder.bottom, ladder.top], [ladder.top, ladder.bottom]]) {
        const distance = Math.hypot(this.footPosition.x - start.x, this.footPosition.z - start.z)
        if (distance <= CONFIG.player.ladderContactRange &&
          Math.abs(this.footPosition.y - start.y) <= CONFIG.player.ladderHeightTolerance) {
          const waypoints = target === ladder.top ? [ladder.bottom, ...(ladder.waypoints || [])] : ladder.downWaypoints
          if (this.motor.startClimb(target, ladder.duration ?? 1.1, ladder.bodyId, { waypoints })) {
            this.ladderLatch = ladder.id
            return true
          }
        }
      }
    }
    return false
  }

  update(dt) {
    if (!(dt > 0) || !this.enabled || !this.controls?.isLocked) return
    this.invulnTimer = Math.max(0, this.invulnTimer - dt)
    const move = new THREE.Vector3()
    if (this.keys.KeyW) move.add(this.forward)
    if (this.keys.KeyS) move.sub(this.forward)
    if (this.keys.KeyD) move.add(this.right)
    if (this.keys.KeyA) move.sub(this.right)
    if (move.lengthSq()) move.normalize()
    const wasGrounded = this.motor.grounded
    const ladder = this.tryLadder()
    const sprinting = this.keys.ShiftLeft || this.keys.ShiftRight
    this.motor.update(dt, {
      move, jump: this.jumpQueued && !ladder,
      traverse: this.jumpQueued && !!this.keys.KeyW && !ladder,
      speed: this.moveSpeed * this.speedMult * (sprinting ? CONFIG.player.sprintMult : 1),
      sprint: false,
    })
    this.jumpQueued = false
    if (!wasGrounded && this.motor.grounded) playLand()
    this.syncCamera()
  }

  syncCamera() {
    this.pos.copy(this.motor.position).add(new THREE.Vector3(0, CONFIG.player.height, 0))
    this.camera.position.copy(this.pos)
  }

  takeDamage(amount, cause = 'enemy') {
    if (this.invuln || (cause !== 'train' && this.invulnTimer > 0)) return false
    this.hp = Math.max(0, this.hp - amount)
    this.invulnTimer = CONFIG.player.invulnAfterHit
    this.lastDamage = cause
    return true
  }

  healOrGrow(amount) { this.maxHp += amount; this.hp += amount }
}
