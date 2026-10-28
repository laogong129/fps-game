import * as THREE from 'three'
import { CONFIG, waveSpawnCount } from '../config.js'
import { createEnemy, enemyCenter, damageEnemy, updateEnemyBars, updateEnemyAnim,
  updateParticles, clearEnemyParticles, hitZoneAt, hitZoneMultiplier } from './enemy.js'
import { CharacterMotor } from './character-motor.js'
import { SpawnWarnings } from './spawn-warnings.js'
import { EnemyProjectiles } from './enemy-projectiles.js'
import { enemyBody, updatePursuit, canMelee } from './pursuit.js'
import { selectSpawn, enemyType, waveHints } from './survival-spawns.js'
import { resolveCrowd } from './crowd.js'

export class Spawner {
  constructor(scene, events = {}) {
    this.scene = scene
    this.events = events
    this.world = events.world
    this.navigation = events.navigation
    this.enemies = []
    this.warnings = new SpawnWarnings(scene)
    this.markers = this.warnings.group
    this.projectileSystem = new EnemyProjectiles(scene, events)
    this.projectiles = this.projectileSystem.items
    this.clear()
  }
  get toSpawn() { return this.spawnQueue.length }
  get waveNumber() { return Math.max(1, this.wave) }
  get activeCount() { return this.enemies.filter((enemy) => !enemy.dead).length }
  getGroups() { return this.enemies.filter((e) => !e.dead).map((e) => e.group) }
  getMeshes() {
    const result = []
    for (const enemy of this.enemies) if (!enemy.dead) enemy.body?.traverse((mesh) => {
      if (mesh.isMesh && !mesh.userData.isOutline) result.push(mesh)
    })
    return result
  }
  startWave() {
    if (this.phase !== 'preparation' || this.wave >= CONFIG.goal.winWave) return false
    this.wave++
    this.phase = 'combat'
    this.spawnTimer = 0
    this.preparationTimer = 0
    const final = this.wave === CONFIG.goal.winWave
    this.spawnQueue = Array.from({ length: final ? CONFIG.wave.finalEscortCount : waveSpawnCount(this.wave) }, () => enemyType(this.wave))
    const first = { 3: 'tank', 4: 'spitter', 5: 'splitter', 6: 'charger' }[this.wave]
    if (first) this.spawnQueue[0] = first
    if (final) this.spawnQueue.unshift('boss')
    if ([3, 6].includes(this.wave)) this.spawnCrate(this.events.player.footPosition)
    this.events.onWaveStarted?.({ wave: this.wave, directions: this.lastDirection, hint: waveHints[this.wave] })
    return true
  }
  spawnOne() {
    if (!this.toSpawn) return false
    const type = this.spawnQueue[0]
    const body = enemyBody(type, CONFIG.enemy[type])
    const selected = selectSpawn(this.events.layout, this.world, this.navigation, this.events.player,
      body.radius, body.height, this.events.train, { type })
    if (!selected) return false
    this.lastDirection = selected.label
    this.spawnQueue.shift()
    this.createSpawnMarker(type, selected.point)
    return true
  }
  createSpawnMarker(type, pos) { return this.warnings.add({ type, pos: pos.clone() }) }
  materializeSpawn(desc) {
    const body = enemyBody(desc.type, CONFIG.enemy[desc.type])
    if (!this.world.capsuleClear(desc.pos, body.radius, body.height)) { this.spawnQueue.unshift(desc.type); return null }
    const enemy = createEnemy(desc.type, 1, this.scene)
    Object.assign(enemy, body)
    enemy.motor = new CharacterMotor(this.world, { ...body, speed: enemy.def.speed, stepHeight: 0.3 })
    enemy.motor.reset(desc.pos)
    enemy.group.position.copy(enemy.motor.position)
    this.enemies.push(enemy)
    return enemy
  }
  spawnMinibugs(position) {
    for (const sign of [-1, 1]) {
      if (this.activeCount + this.markers.children.length >= CONFIG.enemy.maxAlive) return
      const point = position.clone().add(new THREE.Vector3(sign * 0.65, 0, 0))
      const floor = this.world.querySupport(point, { maxRise: 0.3, maxDrop: 8, radius: 0.2, height: 0.4 })
      if (floor) this.materializeSpawn({ type: 'minibug', pos: floor.point })
    }
  }
  fireProjectile(enemy, target) {
    this.projectileSystem.fire(enemyCenter(enemy), target, enemy.def.projDamage || 18)
  }
  update(dt) {
    if (this.phase === 'complete') return
    this.updateCrate(dt, this.events.player.pos)
    if (this.phase === 'preparation') {
      this.preparationTimer = Math.max(0, this.preparationTimer - dt)
      if (this.preparationTimer <= 0) this.startWave()
      return
    }
    this.spawnTimer -= dt
    if (this.toSpawn && this.spawnTimer <= 0 && this.activeCount + this.markers.children.length < CONFIG.enemy.maxAlive &&
        this.markers.children.length < CONFIG.enemy.maxSpawnMarkers) {
      if (this.spawnOne()) this.spawnTimer = CONFIG.wave.spawnInterval
    }
    this.warnings.update(dt, (desc) => this.materializeSpawn(desc))
    const api = { world: this.world, navigation: this.navigation, train: this.events.train, player: this.events.player,
      fireProjectile: (e, target) => this.fireProjectile(e, target),
      bossRing: (e) => this.projectileSystem.ring(enemyCenter(e)), summon: (pos) => this.spawnMinibugs(pos) }
    for (const enemy of [...this.enemies]) {
      if (enemy.dead && enemy.motor.supportId === 'train') {
        enemy.motor.carry()
        enemy.group.position.x = enemy.motor.position.x
        enemy.group.position.z = enemy.motor.position.z
      }
      updateEnemyAnim(enemy, dt)
      updatePursuit(enemy, dt, api)
    }
    resolveCrowd(this.world, [this.events.player, ...this.enemies], dt)
    for (const enemy of this.enemies) {
      updateEnemyBars(enemy, this.events.camera)
      if (canMelee(enemy, this.events.player, this.world) && this.events.onContact?.(enemy.def)) {
        this.events.onHurt?.(CONFIG.player.damageFromEnemy, this.events.player.pos)
      }
    }
    this.projectileSystem.update(dt, this.events.player.pos)
    updateParticles(dt)
    for (let i = this.enemies.length - 1; i >= 0; i--) if (this.enemies[i].dead && this.enemies[i].deathState === 'done') this.removeEnemy(i)
  }
  isWaveClear() { return this.phase === 'combat' && !this.toSpawn && !this.markers.children.length && !this.activeCount }
  finishWave() {
    if (!this.isWaveClear()) return false
    this.projectileSystem.clear()
    for (let i = this.enemies.length - 1; i >= 0; i--) this.removeEnemy(i)
    this.phase = this.wave === CONFIG.goal.winWave ? 'complete' : 'preparation'
    this.preparationTimer = this.phase === 'preparation' ? CONFIG.wave.preparationTime : 0
    return true
  }
  hurt(enemy, damage, source = 'train') {
    if (enemy.dead) return
    const actual = Math.min(enemy.hp, damage)
    const pos = enemy.group.position.clone()
    if (damageEnemy(enemy, damage, this.scene)) {
      if (enemy.def.behavior === 'splitter') this.spawnMinibugs(pos)
      this.events.onEnemyKilled?.(enemy, source)
    }
    this.events.onDamage?.(actual, pos, null, source)
  }
  onShotHit(object, damage, hit = {}) {
    const enemy = this.enemies.find((entry) => entry.body === object || entry.group === object)
    if (!enemy || enemy.dead) return
    const zone = hitZoneAt(enemy, hit)
    const amount = Math.max(1, Math.round(damage * hitZoneMultiplier(enemy, hit) *
      (hit.weaponKey === 'pistol' && zone === 'head' ? CONFIG.weapon.pistol.headshotMult : 1)))
    if (zone === 'head') this.events.onHeadshot?.(enemy.group.position, amount)
    if (hit.knockback && hit.direction && enemy.lastKnockbackShot !== hit.shotId) {
      enemy.lastKnockbackShot = hit.shotId
      const factor = enemy.type === 'boss' ? 0 : enemy.type === 'tank' ? CONFIG.weapon.shotgun.tankKnockbackMult : 1
      const moved = this.world.moveCharacter(enemy.motor.position, hit.direction.clone().setY(0).normalize().multiplyScalar(hit.knockback * factor),
        { radius: enemy.radius, height: enemy.height, stepHeight: 0.3, snapToGround: true })
      enemy.motor.position.copy(moved.position)
      enemy.group.position.copy(moved.position)
      enemy.pathTimer = 0
    }
    this.hurt(enemy, amount, hit.weaponKey)
  }
  spawnCrate(position) {
    this.removeCrate()
    for (const offset of [[3, 0], [-3, 0], [0, 3], [0, -3]]) {
      const query = position.clone().add(new THREE.Vector3(offset[0], 0, offset[1]))
      const support = this.world.querySupport(query, { radius: 0.65, height: 1.2, maxRise: 0.5, maxDrop: 8 })
      if (!support || !this.world.capsuleClear(support.point, 0.65, 1.2)) continue
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1),
        new THREE.MeshStandardMaterial({ color: CONFIG.crate.color, emissive: 0x164a46 }))
      mesh.position.copy(support.point).add(new THREE.Vector3(0, 0.6, 0))
      this.scene.add(mesh)
      const body = support.bodyId ? this.world.getBody(support.bodyId) : null
      this.crate = { mesh, base: support.point.clone(), bodyId: support.bodyId,
        local: body ? support.point.clone().sub(body.position) : null, spin: 0 }
      break
    }
  }
  updateCrate(dt, playerPos) {
    if (!this.crate) return
    const crate = this.crate
    const body = crate.bodyId && this.world.getBody(crate.bodyId)
    if (body) crate.base.copy(body.position).add(crate.local)
    crate.spin += dt
    crate.mesh.rotation.y += dt
    crate.mesh.position.copy(crate.base).add(new THREE.Vector3(0, 0.6 + Math.sin(crate.spin * 2) * 0.1, 0))
    const target = playerPos.clone().sub(new THREE.Vector3(0, 1, 0))
    if (crate.mesh.position.distanceTo(target) < CONFIG.crate.collectRange && !this.world.raycast(crate.mesh.position, target)) {
      this.events.onCrateCollected?.(crate.mesh.position.clone()); this.removeCrate()
    }
  }
  removeCrate() {
    if (!this.crate) return
    this.scene.remove(this.crate.mesh); this.crate.mesh.geometry.dispose(); this.crate.mesh.material.dispose(); this.crate = null
  }
  removeEnemy(index) {
    const enemy = this.enemies[index]
    this.scene.remove(enemy.group)
    enemy.mixer?.stopAllAction()
    enemy.group.traverse((mesh) => {
      if (mesh.isSprite) { mesh.material.map?.dispose(); mesh.material.dispose() }
      if (mesh.isMesh) {
        if (!enemy.sharedGeometry || mesh === enemy.hpBar || mesh === enemy.collisionMesh) mesh.geometry.dispose()
        if (Array.isArray(mesh.material)) mesh.material.forEach((material) => material.dispose())
        else mesh.material?.dispose()
      }
    })
    this.enemies.splice(index, 1)
  }
  clear() {
    for (let i = this.enemies.length - 1; i >= 0; i--) this.removeEnemy(i)
    this.projectileSystem.clear(); this.warnings.clear(); this.removeCrate(); clearEnemyParticles()
    this.wave = 0; this.phase = 'preparation'; this.preparationTimer = CONFIG.wave.preparationTime
    this.spawnQueue = []; this.spawnTimer = 0; this.lastDirection = '附近街区'
  }
  getHudData() {
    return { wave: this.wave, waveTotal: CONFIG.goal.winWave, phase: this.phase, preparationRemaining: this.preparationTimer,
      directions: this.lastDirection, enemiesRemaining: this.activeCount + this.toSpawn + this.markers.children.length }
  }
}
