import * as THREE from 'three'
import { CONFIG } from '../config.js'

function expire(mesh, dt) {
  mesh.userData.age += dt
  const { age, ttl, fadeStart } = mesh.userData
  if (age >= fadeStart) {
    mesh.material.transparent = true
    mesh.material.opacity = Math.max(0, (ttl - age) / (ttl - fadeStart))
  }
  return age >= ttl
}

function remove(scene, mesh) {
  scene.remove(mesh)
  mesh.material.dispose()
}

export class PickupField {
  constructor(scene, player, world = null) {
    this.scene = scene
    this.player = player
    this.world = world
    this.pickups = []
    this.heals = []
    this.pickupGeo = new THREE.SphereGeometry(CONFIG.pickup.radius, 12, 12)
    this.pickupMat = new THREE.MeshStandardMaterial({ color: 0xf1c40f, emissive: 0x8a6d00 })
    this.healGeo = new THREE.SphereGeometry(1, 12, 12)
    this.healMats = {
      small: new THREE.MeshStandardMaterial({ color: CONFIG.heal.small.color, emissive: 0x551111 }),
      tank: new THREE.MeshStandardMaterial({ color: CONFIG.heal.tank.color, emissive: 0x554400 }),
    }
  }

  spawnExperience(pos, value = 1) {
    if (!Number.isFinite(value) || value <= 0) return null
    const drop = this.dropPosition(pos, 0.5)
    const layer = this.pickups.filter((p) => p.userData.bodyId === drop.bodyId && Math.abs(p.position.y - drop.point.y) < 0.8)
    if (this.pickups.length >= Math.max(1, CONFIG.pickup.maxOrbs) && layer.length) {
      const nearest = layer.reduce((best, p) =>
        p.position.distanceToSquared(pos) < best.position.distanceToSquared(pos) ? p : best)
      nearest.userData.value += value
      nearest.userData.age = 0
      nearest.material.opacity = 1
      return nearest
    }
    const mesh = new THREE.Mesh(this.pickupGeo, this.pickupMat.clone())
    mesh.position.copy(drop.point)
    mesh.userData = { age: 0, ttl: CONFIG.pickup.ttl, fadeStart: CONFIG.pickup.fadeStart, value, ...drop.data }
    this.scene.add(mesh)
    this.pickups.push(mesh)
    return mesh
  }

  spawnHeal(kind, pos) {
    const def = CONFIG.heal[kind]
    if (!def) return null
    const mesh = new THREE.Mesh(this.healGeo, this.healMats[kind].clone())
    mesh.scale.setScalar(def.radius)
    const drop = this.dropPosition(pos, 0.6)
    mesh.position.copy(drop.point)
    mesh.userData = { age: 0, ttl: def.ttl, fadeStart: def.fadeStart, ...drop.data }
    this.scene.add(mesh)
    this.heals.push({ mesh, kind })
    return mesh
  }

  updateExperience(dt, playerPos) {
    const { magnetRange, collectRange } = CONFIG.pickup
    let gained = 0
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const mesh = this.pickups[i]
      this.carry(mesh)
      const target = this.world ? this.player.footPosition.clone().add(new THREE.Vector3(0, 0.6, 0)) : playerPos
      const toPlayer = new THREE.Vector3(target.x - mesh.position.x, this.world ? target.y - mesh.position.y : 0, target.z - mesh.position.z)
      const distance = toPlayer.length()
      if (expire(mesh, dt)) {
        remove(this.scene, mesh)
        this.pickups.splice(i, 1)
      } else if (distance < collectRange && this.visible(mesh.position, target)) {
        gained += mesh.userData.value
        remove(this.scene, mesh)
        this.pickups.splice(i, 1)
      } else if (distance < magnetRange && this.visible(mesh.position, target)) {
        const pull = 10 + (1 - distance / magnetRange) * 26
        mesh.position.addScaledVector(toPlayer, Math.min(distance, pull * dt) / distance)
        const body = mesh.userData.bodyId && this.world?.getBody(mesh.userData.bodyId)
        if (body) mesh.userData.local.copy(mesh.position).sub(body.position)
      }
    }
    return gained
  }

  updateHeals(dt, playerPos, onHealFloat) {
    for (let i = this.heals.length - 1; i >= 0; i--) {
      const { mesh, kind } = this.heals[i]
      this.carry(mesh)
      const target = this.world ? this.player.footPosition.clone().add(new THREE.Vector3(0, 0.6, 0)) : playerPos
      const distance = this.world ? mesh.position.distanceTo(target) : Math.hypot(mesh.position.x - playerPos.x, mesh.position.z - playerPos.z)
      if (expire(mesh, dt)) {
        remove(this.scene, mesh)
        this.heals.splice(i, 1)
      } else if (distance < CONFIG.pickup.collectRange && this.player.hp < this.player.maxHp && this.visible(mesh.position, target)) {
        const before = this.player.hp
        this.player.hp = Math.min(this.player.maxHp, before + CONFIG.heal[kind].value)
        onHealFloat(mesh.position, this.player.hp - before)
        remove(this.scene, mesh)
        this.heals.splice(i, 1)
      }
    }
  }

  clearPickups() {
    for (const mesh of this.pickups) remove(this.scene, mesh)
    this.pickups.length = 0
  }

  visible(from, target) { return !this.world || !this.world.raycast(from, target) }

  dropPosition(pos, offset) {
    const query = new THREE.Vector3(pos.x + (Math.random() - 0.5) * 0.8, pos.y, pos.z + (Math.random() - 0.5) * 0.8)
    const support = this.world?.querySupport(query, { radius: 0.1, height: 0.1, maxRise: 0.3, maxDrop: 12 })
    const point = support ? support.point.clone().add(new THREE.Vector3(0, offset, 0)) : new THREE.Vector3(query.x, this.world ? pos.y + offset : offset, query.z)
    const body = support?.bodyId && this.world?.getBody(support.bodyId)
    return { point, bodyId: support?.bodyId || null, data: { bodyId: support?.bodyId || null,
      local: body ? point.clone().sub(body.position) : null } }
  }

  carry(mesh) {
    const body = mesh.userData.bodyId && this.world?.getBody(mesh.userData.bodyId)
    if (body && mesh.userData.local) mesh.position.copy(body.position).add(mesh.userData.local)
  }

  clearHeals() {
    for (const { mesh } of this.heals) remove(this.scene, mesh)
    this.heals.length = 0
  }
}
