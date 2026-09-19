import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { resolveObstacles } from './arena.js'

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
  }

  async initControls() {
    console.log('🔧 初始化 PointerLockControls...')
    const { PointerLockControls } = await import('three/examples/jsm/controls/PointerLockControls.js')
    
    this.controls = new PointerLockControls(this.camera, this.domElement)
    console.log('✅ PointerLockControls 创建成功')
    
    // 监听锁定成功
    document.addEventListener('pointerlockchange', () => {
      console.log('📍 Pointer Lock 状态变化:', document.pointerLockElement ? '已锁定' : '已释放')
      this.lockFailed = !document.pointerLockElement
    })
    
    // 监听锁定错误
    document.addEventListener('pointerlockerror', (e) => {
      console.error('❌ Pointer Lock 错误:', e)
      this.lockFailed = true
    })
  }

  safeLock() {
    if (!this.controls) {
      console.warn('⚠️ controls 未初始化')
      return
    }
    if (this.controls.isLocked) {
      console.log('📍 指针已锁定')
      return
    }
    
    console.log('🖱️ 尝试锁定指针...')
    this.lockFailed = false
    
    try {
      this.domElement.requestPointerLock()
      console.log('✅ requestPointerLock() 调用成功')
    } catch (e) {
      console.error('❌ requestPointerLock() 失败:', e)
      this.lockFailed = true
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
    // 关键：只有指针锁定时才能移动
    if (paused || !this.controls?.isLocked) {
      // 调试：输出当前状态
      if (Date.now() % 60 < 1) { // 每60帧输出一次，避免日志过多
        console.log('📍 游戏状态:', {
          isLocked: this.controls?.isLocked,
          pointerLockElement: document.pointerLockElement ? '已锁定' : '未锁定',
          state: paused ? 'paused' : 'playing'
        })
      }
      return
    }
    
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
