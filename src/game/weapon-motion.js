import { Euler, Quaternion, Vector3, MathUtils } from 'three'

export const WEAPON_FEEL = {
  pistol: { impulse: [0.052, 0.006, 0.031], frequency: 22, flash: 1.7, flashScale: 0.75, tail: 1.15 },
  shotgun: { impulse: [0.11, 0.01, 0.065], frequency: 17, flash: 2.6, flashScale: 1.15, tail: 0.7 },
  rifle: { impulse: [0.029, 0.004, 0.021], frequency: 27, flash: 1.3, flashScale: 0.6, tail: 1.8 },
}

export class WeaponMotion {
  constructor(player) {
    this.player = player
    this.offset = new Vector3()
    this.velocity = new Vector3()
    this.sway = new Vector3()
    this.previousCamera = player.camera.quaternion.clone()
    this.view = null
    this.reset()
  }

  bindView() {
    if (this.view === this.player.gunModel) return
    this.view = this.player.gunModel
    this.viewPosition = this.view?.position.clone()
    this.viewRotation = this.view?.quaternion.clone()
  }

  kick(key, ads) {
    this.profile = WEAPON_FEEL[key] || WEAPON_FEEL.pistol
    const impulse = new Vector3(...this.profile.impulse)
    impulse.y *= this.shot % 2 ? -1 : 1
    this.velocity.addScaledVector(impulse, this.profile.frequency * Math.E * (ads ? 0.55 : 1))
    this.shot++
  }

  update(dt, { ads = false, reloading = false, moving, sprinting = false } = {}) {
    if (!(dt > 0)) return
    this.bindView()
    const omega = this.profile.frequency, decay = Math.exp(-omega * dt)
    const change = this.velocity.clone().addScaledVector(this.offset, omega)
    this.offset.addScaledVector(change, dt).multiplyScalar(decay)
    this.velocity.addScaledVector(change, -omega * dt).multiplyScalar(decay)
    this.offset.clamp(new Vector3(-0.18, -0.05, -0.03), new Vector3(0.18, 0.05, 0.11))
    const difference = this.player.camera.quaternion.clone().invert().multiply(this.previousCamera)
    const angles = new Euler().setFromQuaternion(difference, 'YXZ')
    const amount = ads ? 0.2 : 1
    const target = new Vector3(MathUtils.clamp(angles.x * 0.7, -0.018, 0.018),
      MathUtils.clamp(angles.y * 0.7, -0.018, 0.018), 0).multiplyScalar(amount)
    this.sway.lerp(target, 1 - Math.exp(-dt * 18))
    this.previousCamera.copy(this.player.camera.quaternion)
    const motor = this.player.motor
    const speed = motor?.velocity ? Math.hypot(motor.velocity.x, motor.velocity.z) : 0
    const walking = (moving ?? speed > 0.2) && motor?.grounded !== false && !motor?.traversal
    this.walkBlend = MathUtils.damp(this.walkBlend, walking ? 1 : 0, 12, dt)
    this.phase += dt * (sprinting ? 11 : 8) * this.walkBlend
    const bob = this.walkBlend * (sprinting ? 0.006 : 0.003) * amount * (reloading ? 0.15 : 1)
    this.player.gunGroup.position.z = this.baseZ + this.offset.z
    if (this.view) {
      this.view.position.copy(this.viewPosition).add(new Vector3(Math.sin(this.phase) * bob,
        Math.cos(this.phase * 2) * bob * 0.6, 0))
      const turn = new Quaternion().setFromEuler(new Euler(this.offset.x + this.sway.x,
        this.offset.y + this.sway.y, -this.offset.y * 0.65, 'YXZ'))
      this.view.quaternion.copy(this.viewRotation).multiply(turn)
    }
  }

  reset() {
    if (this.view) {
      this.view.position.copy(this.viewPosition)
      this.view.quaternion.copy(this.viewRotation)
    }
    this.offset.set(0, 0, 0)
    this.velocity.set(0, 0, 0)
    this.sway.set(0, 0, 0)
    this.previousCamera.copy(this.player.camera.quaternion)
    this.profile = WEAPON_FEEL.pistol
    this.phase = this.walkBlend = this.shot = 0
    this.baseZ ??= this.player.gunGroup.position.z
    this.player.gunGroup.position.z = this.baseZ
  }
}
