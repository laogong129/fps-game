import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { resolveObstacles } from './arena.js'
import { playLand } from './sound.js'

export class Player {
  constructor(camera, domElement, scene) {
    const p = CONFIG.player
    this.camera = camera
    this.domElement = domElement
    this.scene = scene
    this.controls = null
    this.pos = new THREE.Vector3(0, p.height, 0)
    this.maxHp = p.maxHp
    this.hp = p.maxHp
    this.moveSpeed = p.moveSpeed
    this.speedMult = 1
    this.keys = {}
    this.invulnTimer = 0
    this.yVel = 0
    this.jumpQueued = false
    this.lockFailed = false
    this.invuln = false

    this.gunGroup = new THREE.Group()
    this.gunGroup.position.set(0.25, -0.4, -0.5)
    this.camera.add(this.gunGroup)
    scene.add(camera)

    const gunBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x333344 })
    )
    gunBody.position.z = -0.1
    this.gunGroup.add(gunBody)
    this.gunModel = gunBody

    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true
      if (e.code === 'Space') this.jumpQueued = true
    })
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false })
    // 点击画布时请求指针锁定（浏览器要求用户手势）
    this.domElement.addEventListener('click', () => {
      if (!this.controls?.isLocked) this.safeLock()
    })
  }

  async initControls() {
    const { PointerLockControls } = await import('three/examples/jsm/controls/PointerLockControls.js')
    this.controls = new PointerLockControls(this.camera, this.domElement)

    this.controls.addEventListener('lock', () => {
      this.lockFailed = false
    })
    this.controls.addEventListener('unlock', () => {
      // 不做处理，由主循环自动检测显示提示
    })
  }

  safeLock() {
    if (!this.controls) return
    if (this.controls.isLocked) return
    this.controls.lock()
  }

  get forward() {
    const dir = new THREE.Vector3()
    this.camera.getWorldDirection(dir)
    dir.y = 0
    dir.normalize()
    return dir
  }

  get right() {
    const f = this.forward
    return new THREE.Vector3(-f.z, 0, f.x)
  }

  update(dt, inner, enemyGroups, paused, obstacles) {
    if (paused || !this.controls?.isLocked) return

    if (this.invulnTimer > 0) this.invulnTimer -= dt

    const p = CONFIG.player
    const sprinting = this.keys['ShiftLeft'] || this.keys['ShiftRight']
    const speed = this.moveSpeed * this.speedMult * (sprinting ? CONFIG.player.sprintMult : 1)
    const move = new THREE.Vector3()
    if (this.keys['KeyW']) move.add(this.forward)
    if (this.keys['KeyS']) move.sub(this.forward)
    if (this.keys['KeyD']) move.add(this.right)
    if (this.keys['KeyA']) move.sub(this.right)
    if (move.lengthSq() > 0) {
      move.normalize().multiplyScalar(speed * dt)
      this.pos.add(move)
    }
    for (const g of enemyGroups) {
      if (this.ghost) break
      const enemyRef = g.userData.enemyRef
      if (enemyRef && enemyRef.dead) continue
      const r = g.userData.centerHeight + 0.3
      const dx = this.pos.x - g.position.x
      const dz = this.pos.z - g.position.z
      const d = Math.hypot(dx, dz)
      const min = p.radius + r
      if (d > 0.001 && d < min) {
        this.pos.x += (dx / d) * (min - d)
        this.pos.z += (dz / d) * (min - d)
      }
    }
    if (obstacles && !this.ghost) resolveObstacles(this.pos, p.radius, obstacles)
    const grounded = this.pos.y <= p.height
    if (this.jumpQueued && grounded) this.yVel = p.jump.velocity
    this.jumpQueued = false
    if (this.pos.y > p.height || this.yVel > 0) {
      this.yVel -= p.jump.gravity * dt
      this.pos.y += this.yVel * dt
      if (this.pos.y <= p.height) {
        this.pos.y = p.height
        this.yVel = 0
        if (this._wasAirborne) playLand()
      }
      this._wasAirborne = this.pos.y > p.height
    }
    if (!this.ghost) {
      this.pos.x = THREE.MathUtils.clamp(this.pos.x, -inner + p.radius, inner - p.radius)
      this.pos.z = THREE.MathUtils.clamp(this.pos.z, -inner + p.radius, inner - p.radius)
    }
    this.camera.position.copy(this.pos)
  }

  takeDamage(amount) {
    if (this.invuln) return false
    if (this.invulnTimer > 0) return false
    this.hp -= amount
    this.invulnTimer = CONFIG.player.invulnAfterHit
    return true
  }

  healOrGrow(amount) {
    this.maxHp += amount
    this.hp += amount
  }
}
