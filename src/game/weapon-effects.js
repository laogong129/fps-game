import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { WeaponMotion, WEAPON_FEEL } from './weapon-motion.js'

export class WeaponEffects {
  constructor(scene, player) {
    this.scene = scene
    this.player = player
    this.motion = new WeaponMotion(player)
    this.weaponKey = 'pistol'
    this.kick = 0
    this.tracer = null
    this.projectileTracers = new Map()
    this.flash = new THREE.PointLight(0xffcc88, 0, 4)
    player.gunGroup.add(this.flash)
    this.muzzle = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.15, 5),
      new THREE.MeshBasicMaterial({ color: 0xffd899, transparent: true, opacity: 0,
        blending: THREE.AdditiveBlending, depthTest: false, depthWrite: false }))
    this.muzzle.rotation.x = -Math.PI / 2
    this.muzzle.renderOrder = 12
    player.gunGroup.add(this.muzzle)
    const geometry = new THREE.BoxGeometry(0.025, 0.025, 0.025)
    this.sparks = Array.from({ length: 48 }, () => {
      const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ transparent: true }))
      mesh.visible = false
      scene.add(mesh)
      return { mesh, vel: new THREE.Vector3(), life: 0, duration: 0 }
    })
    this.tracers = Array.from({ length: 64 }, () => {
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3).setUsage(THREE.DynamicDrawUsage))
      const mesh = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: 0xe7c38e, transparent: true, opacity: 0, depthWrite: false }))
      mesh.visible = false
      mesh.frustumCulled = false
      scene.add(mesh)
      return { mesh, life: 0, id: null, fresh: false }
    })
  }

  setMuzzleProvider(provider) { this.muzzleProvider = provider }

  getMuzzleWorld(out = new THREE.Vector3()) {
    this.player.gunGroup.updateWorldMatrix(true, true)
    if (this.muzzleProvider) return this.muzzleProvider(out) || out
    const model = this.player.gunModel
    const marker = model?.getObjectByName('muzzle') || model?.getObjectByName('Muzzle')
    if (marker) return marker.getWorldPosition(out)
    const offset = model?.userData.muzzleLocal
    if (model) return model.localToWorld(offset ? out.fromArray(offset) :
      out.set(0, 0.025, -(CONFIG.gunModel[this.weaponKey]?.length || 0.45)))
    return this.player.gunGroup.localToWorld(out.set(0, 0, -0.42))
  }

  syncMuzzle() {
    const point = this.player.gunGroup.worldToLocal(this.getMuzzleWorld())
    this.muzzle.position.copy(point)
    this.flash.position.copy(point)
  }

  onShot(key = 'pistol', { ads = false } = {}) {
    if (key !== this.weaponKey) this.motion.reset()
    this.weaponKey = key
    const profile = WEAPON_FEEL[key] || WEAPON_FEEL.pistol
    this.motion.kick(key, ads)
    this.kick = 1
    this.flash.intensity = profile.flash
    this.muzzle.material.opacity = 0.9
    this.muzzle.scale.setScalar(profile.flashScale)
    this.muzzle.rotation.z = Math.random() * Math.PI
    this.syncMuzzle()
  }

  spawnSparks(point, { flesh = false, normal } = {}) {
    for (let i = 0; i < (flesh ? 2 : 4); i++) {
      const spark = this.sparks.find((item) => item.life <= 0)
      if (!spark) return
      spark.duration = flesh ? 0.16 : 0.22
      spark.life = spark.duration
      spark.mesh.position.copy(point)
      spark.mesh.visible = true
      spark.mesh.material.color.setHex(flesh ? 0xbc6657 : 0xe5bd7c)
      spark.mesh.material.opacity = 0.9
      const a = Math.random() * Math.PI * 2, speed = flesh ? 1.2 : 2.8
      spark.vel.set(Math.cos(a) * speed, 0.8 + Math.random() * 1.6, Math.sin(a) * speed)
      if (normal) spark.vel.addScaledVector(normal, speed)
    }
  }

  updateProjectile(id, from, to, { weaponKey = this.weaponKey } = {}) {
    let tracer = this.projectileTracers.get(id)
    if (!tracer) {
      tracer = this.tracers.find((item) => item.life <= 0) || this.tracers.reduce((a, b) => a.life < b.life ? a : b)
      if (tracer.id !== null) this.projectileTracers.delete(tracer.id)
      tracer.id = id
      this.projectileTracers.set(id, tracer)
    }
    const delta = to.clone().sub(from), length = delta.length()
    const tail = Math.min(length, (WEAPON_FEEL[weaponKey] || WEAPON_FEEL.pistol).tail)
    const start = to.clone().addScaledVector(delta, length ? -tail / length : 0)
    const position = tracer.mesh.geometry.attributes.position
    position.setXYZ(0, start.x, start.y, start.z)
    position.setXYZ(1, to.x, to.y, to.z)
    position.needsUpdate = true
    tracer.life = 0.065
    tracer.fresh = true
    tracer.mesh.visible = length > 0.0001
    tracer.mesh.material.opacity = weaponKey === 'shotgun' ? 0.42 : 0.65
    tracer.mesh.userData.life = tracer.life
    this.tracer = tracer.mesh
  }

  removeProjectile(id) {
    const tracer = this.projectileTracers.get(id)
    if (!tracer) return
    tracer.id = null
    tracer.life = Math.min(tracer.life, 0.025)
    this.projectileTracers.delete(id)
  }

  setTracer(from, to) { this.updateProjectile('legacy', from, to) }

  clearTracer() {
    this.projectileTracers.clear()
    for (const tracer of this.tracers) { tracer.id = null; tracer.life = 0; tracer.mesh.visible = false }
    this.tracer = null
  }

  update(dt, state = {}) {
    if (!(dt > 0)) return
    if (state.weaponKey && state.weaponKey !== this.weaponKey) {
      this.motion.reset()
      this.motion.profile = WEAPON_FEEL[state.weaponKey] || WEAPON_FEEL.pistol
      this.weaponKey = state.weaponKey
    }
    this.motion.update(dt, state)
    this.kick *= Math.exp(-dt * 18)
    this.flash.intensity *= Math.exp(-dt * 65)
    this.muzzle.material.opacity *= Math.exp(-dt * 75)
    this.syncMuzzle()
    for (const spark of this.sparks) {
      if (spark.life <= 0) continue
      spark.life -= dt
      spark.vel.y -= 9 * dt
      spark.mesh.position.addScaledVector(spark.vel, dt)
      spark.mesh.material.opacity = Math.max(0, spark.life / spark.duration) * 0.9
      if (spark.life <= 0) spark.mesh.visible = false
    }
    for (const tracer of this.tracers) {
      if (tracer.life <= 0) continue
      // A fast impact must survive its first render even when flight took less than one frame.
      if (tracer.fresh && dt <= 0.05) { tracer.fresh = false; continue }
      tracer.fresh = false
      tracer.life -= dt
      tracer.mesh.userData.life = tracer.life
      tracer.mesh.material.opacity = Math.min(tracer.mesh.material.opacity, Math.max(0, tracer.life / 0.065) * 0.65)
      if (tracer.life <= 0) {
        if (tracer.id !== null) this.projectileTracers.delete(tracer.id)
        tracer.id = null
        tracer.mesh.visible = false
        if (this.tracer === tracer.mesh) this.tracer = null
      }
    }
  }

  reset() {
    this.motion.reset()
    this.kick = 0
    this.flash.intensity = 0
    this.muzzle.material.opacity = 0
    this.clearTracer()
    for (const spark of this.sparks) { spark.life = 0; spark.mesh.visible = false }
  }
}
