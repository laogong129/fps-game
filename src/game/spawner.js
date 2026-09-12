import * as THREE from 'three'
import { CONFIG, waveSpawnCount, waveHpMultiplier } from '../config.js'
import {
  createEnemy, chaseEnemy, updateSpitter, updateCharger, updateEnemyBars, enemyCenter, damageEnemy,
} from './enemy.js'

export class Spawner {
  constructor(scene, events) {
    this.scene = scene
    this.events = events
    this.enemies = []
    this.projectiles = []
    this.projGeo = new THREE.SphereGeometry(CONFIG.projectile.radius, 10, 10)
    this.projMat = new THREE.MeshStandardMaterial({ color: 0x2ecc71, emissive: 0x0e4424 })
    this.wave = 1
    this.waveTimer = 5
    this.toSpawn = 0
    this.spawnTimer = 0
    this.spawnInterval = 1.2
  }

  getGroups() {
    return this.enemies.map((e) => e.group)
  }

  getMeshes() {
    return this.enemies.map((e) => e.body)
  }

  startWave() {
    this.wave++
    this.toSpawn = waveSpawnCount(this.wave)
    this.spawnTimer = 0
    this.waveTimer = CONFIG.wave.baseInterval
  }

  pickType() {
    const table = CONFIG.wave.table
    const available = table.filter((t) => this.wave >= t.fromWave)
    const pool = []
    for (const t of available) for (let i = 0; i < t.weight; i++) pool.push(t.type)
    const baseCount = 100 - available.reduce((s, t) => s + t.weight, 0)
    for (let i = 0; i < Math.max(0, baseCount); i++) pool.push('small')
    return pool[Math.floor(Math.random() * pool.length)]
  }

  spawnOne() {
    this.toSpawn--
    const type = this.pickType()
    const angle = Math.random() * Math.PI * 2
    const dist = CONFIG.enemy.spawnDistance[0] + Math.random() * (CONFIG.enemy.spawnDistance[1] - CONFIG.enemy.spawnDistance[0])
    const e = createEnemy(type, waveHpMultiplier(this.wave), this.scene)
    e.group.position.set(Math.cos(angle) * dist, 0, Math.sin(angle) * dist)
    this.enemies.push(e)
  }

  spawnMinibugs(pos) {
    for (let i = 0; i < 2; i++) {
      if (this.enemies.length >= CONFIG.enemy.maxAlive) return
      const e = createEnemy('minibug', 1, this.scene)
      e.group.position.copy(pos)
      e.group.position.x += (Math.random() - 0.5) * 1.5
      e.group.position.z += (Math.random() - 0.5) * 1.5
      this.enemies.push(e)
    }
  }

  fireProjectile(e, playerPos) {
    const from = enemyCenter(e)
    const to = playerPos
    const dist = from.clone().setY(0).distanceTo(to.clone().setY(0))
    const T = THREE.MathUtils.clamp(dist / CONFIG.projectile.speed, 0.5, 2)
    const vel = to.clone().sub(from).divideScalar(T)
    vel.y += 0.5 * CONFIG.projectile.gravity * T
    const mesh = new THREE.Mesh(this.projGeo, this.projMat)
    mesh.position.copy(from)
    this.scene.add(mesh)
    this.projectiles.push({ mesh, vel, life: CONFIG.projectile.ttl, damage: e.def.projDamage })
  }

  update(dt, playerPos, inner) {
    this.waveTimer -= dt
    if (this.waveTimer <= 0 && this.toSpawn === 0) this.startWave()
    if (this.toSpawn > 0) {
      this.spawnTimer -= dt
      if (this.spawnTimer <= 0 && this.enemies.length < CONFIG.enemy.maxAlive) {
        this.spawnTimer = this.spawnInterval
        this.spawnOne()
      }
    }
    const p = CONFIG.player
    const api = { fireProjectile: (e) => this.fireProjectile(e, playerPos) }
    for (const e of this.enemies) {
      const b = e.def.behavior
      if (b === 'spitter') updateSpitter(e, playerPos, dt, inner, this.enemies, api)
      else if (b === 'charger') updateCharger(e, playerPos, dt, inner, this.enemies, api)
      else chaseEnemy(e, playerPos, dt, inner, this.enemies)
      updateEnemyBars(e, this.events.camera)
      const c = enemyCenter(e)
      const dx = c.x - playerPos.x
      const dz = c.z - playerPos.z
      if (Math.hypot(dx, dz) < p.contactRadius + e.def.size / 2 && playerPos.y <= p.height + 0.5) {
        if (this.events.onContact(e.def)) {
          if (this.events.onHurt) this.events.onHurt(p.damageFromEnemy, playerPos)
        }
      }
    }
    this.updateProjectiles(dt, playerPos)
  }

  updateProjectiles(dt, playerPos) {
    const pc = CONFIG.projectile
    const pcenter = playerPos.clone()
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i]
      pr.mesh.position.addScaledVector(pr.vel, dt)
      pr.vel.y -= pc.gravity * dt
      pr.life -= dt
      const d = pr.mesh.position.distanceTo(pcenter)
      if (d < pc.playerHitRadius + pc.radius) {
        if (this.events.onProjectileHit(pr)) this.removeProjectile(i)
      } else if (pr.life <= 0 || pr.mesh.position.y <= 0) this.removeProjectile(i)
    }
  }

  removeProjectile(i) {
    const pr = this.projectiles[i]
    this.scene.remove(pr.mesh)
    this.projectiles.splice(i, 1)
  }

  onShotHit(obj, damage) {
    if (!obj) return
    let i = this.enemies.findIndex((e) => e.body === obj)
    if (i < 0) i = this.enemies.findIndex((e) => e.group === obj)
    if (i < 0) return
    const e = this.enemies[i]
    const pos = e.group.position.clone()
    if (damageEnemy(e, damage, this.scene)) {
      this.enemies.splice(i, 1)
      if (e.def.behavior === 'splitter') this.spawnMinibugs(pos)
      this.events.onEnemyKilled(e, e.type)
    }
    if (this.events.onDamage) this.events.onDamage(damage, pos)
  }

  clear() {
    for (const e of this.enemies) this.scene.remove(e.group)
    for (const pr of this.projectiles) this.scene.remove(pr.mesh)
    this.enemies.length = 0
    this.projectiles.length = 0
  }

  get waveNumber() {
    return this.wave
  }
}
