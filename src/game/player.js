import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { resolveObstacles } from './arena.js'

export class Player {
  constructor(camera, domElement, scene) {
    const p = CONFIG.player
    this.camera = camera
    this.domElement = domElement  // Store reference for later use
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

    // 后坐力/震感附加状态
    this.cameraRecoilY = 0
    this.cameraTiltX = 0    // 相机pitch偏移（后坐力上跳）
    this.cameraYawOffset = 0 // 相机yaw偏移（后坐力左右偏）
    this.screenShake = 0

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
    domElement.addEventListener('click', () => this.safeLock())
  }

  safeLock() {
    if (!this.controls || this.controls.isLocked) return
    this.lockPending = true
    const attempt = (n) => {
      if (!this.controls || this.controls.isLocked) {
        this.lockPending = false
        return
      }
      if (n >= 4) {
        this.lockPending = false
        this.lockFailed = true
        return
      }
      try { this.controls.lock() } catch { this.lockFailed = true }
      setTimeout(() => {
        if (!this.controls || this.controls.isLocked) {
          this.lockPending = false
          return
        }
        attempt(n + 1)
      }, 1400)
    }
    this.lockFailed = false
    attempt(0)
  }

  async initControls() {
    console.log('🔧 开始初始化 PointerLockControls...')
    const { PointerLockControls } = await import('three/examples/jsm/controls/PointerLockControls.js')

    // 使用游戏画布作为锁定元素，而不是 document.body
    this.controls = new PointerLockControls(this.camera, this.domElement)
    console.log('✅ PointerLockControls 创建成功')
    console.log('📍 domElement:', this.controls.domElement)
    console.log('📍 camera:', this.controls.getObject()?.name || 'unnamed')

    // 监听指针锁定事件
    this.controls.addEventListener('lock', () => {
      console.log('✅ Pointer Lock 成功!')
      this.lockPending = false
      this.lockFailed = false
    })
    this.controls.addEventListener('unlock', () => {
      console.log('⚠️ Pointer Lock 已释放')
      this.lockPending = false
    })
    this.controls.addEventListener('error', (e) => {
      console.error('❌ Pointer Lock 错误:', e)
      this.lockPending = false
      this.lockFailed = true
    })

    // 点击画布时尝试锁定指针
    this.domElement.addEventListener('click', () => {
      if (!this.controls.isLocked) {
        console.log('🖱️ 点击画布，尝试锁定指针...')
        this.safeLock()
      }
    })

    // 调试：检查浏览器Pointer Lock API支持
    if (!document.pointerLockElement) {
      console.log('📍 Pointer Lock API 可用，等待用户交互...')
    } else {
      console.log('📍 Pointer 已被锁定:', document.pointerLockElement)
    }
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
      // Check if enemy is dead via userData reference
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
      }
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
