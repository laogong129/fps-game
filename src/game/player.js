import * as THREE from 'three'
import { CONFIG } from '../config.js'

export class Player {
  constructor(camera, domElement, scene) {
    const p = CONFIG.player
    this.camera = camera
    this.scene = scene
    this.controls = null
    this.pos = new THREE.Vector3(0, p.height, 0)
    this.maxHp = p.maxHp
    this.hp = p.maxHp
    this.moveSpeed = p.moveSpeed
    this.speedMult = 1
    this.keys = {}
    this.invulnTimer = 0

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

    window.addEventListener('keydown', (e) => { this.keys[e.code] = true })
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false })
    domElement.addEventListener('click', () => this.controls?.lock())
  }

  async initControls() {
    const { PointerLockControls } = await import('three/examples/jsm/controls/PointerLockControls.js')
    this.controls = new PointerLockControls(this.camera, document.body)
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

  update(dt, arenaHalf, paused) {
    if (paused || !this.controls?.isLocked) return
    if (this.invulnTimer > 0) this.invulnTimer -= dt

    const p = CONFIG.player
    const speed = this.moveSpeed * this.speedMult
    const move = new THREE.Vector3()
    if (this.keys['KeyW']) move.add(this.forward)
    if (this.keys['KeyS']) move.sub(this.forward)
    if (this.keys['KeyD']) move.add(this.right)
    if (this.keys['KeyA']) move.sub(this.right)
    if (move.lengthSq() > 0) {
      move.normalize().multiplyScalar(speed * dt)
      this.pos.add(move)
      this.pos.x = THREE.MathUtils.clamp(this.pos.x, -arenaHalf + p.radius, arenaHalf - p.radius)
      this.pos.z = THREE.MathUtils.clamp(this.pos.z, -arenaHalf + p.radius, arenaHalf - p.radius)
    }
    this.camera.position.copy(this.pos)
  }

  takeDamage(amount) {
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
