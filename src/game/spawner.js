import { CONFIG, waveSpawnCount, waveHpMultiplier } from '../config.js'
import { createEnemy, updateEnemy, damageEnemy } from './enemy.js'

export class Spawner {
  constructor(scene, events) {
    this.scene = scene
    this.events = events
    this.enemies = []
    this.wave = 1
    this.waveTimer = 5
    this.toSpawn = 0
    this.spawnTimer = 0
    this.spawnInterval = 1.5
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

  update(dt, playerPos) {
    this.waveTimer -= dt
    if (this.waveTimer <= 0 && this.toSpawn === 0) this.startWave()
    if (this.toSpawn > 0) {
      this.spawnTimer -= dt
      if (this.spawnTimer <= 0 && this.enemies.length < CONFIG.enemy.maxAlive) {
        this.spawnTimer = this.spawnInterval
        this.spawnOne()
      }
    }
    const half = 30
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const e = this.enemies[i]
      updateEnemy(e, playerPos, dt, this.events.camera)
      const dist = e.group.position.distanceTo(playerPos)
      if (dist < CONFIG.player.contactRadius + e.def.size / 2) {
        if (this.events.onContact(e.def)) {
          this.enemies.splice(i, 1)
        }
      }
    }
  }

  spawnOne() {
    this.toSpawn--
    const type = this.wave >= 3 && Math.random() < 0.35 ? 'tank' : 'small'
    const angle = Math.random() * Math.PI * 2
    const dist = CONFIG.enemy.spawnDistance[0] + Math.random() * (CONFIG.enemy.spawnDistance[1] - CONFIG.enemy.spawnDistance[0])
    const e = createEnemy(type, waveHpMultiplier(this.wave), this.scene)
    e.group.position.set(Math.cos(angle) * dist, 0, Math.sin(angle) * dist)
    this.enemies.push(e)
  }

  onShotHit(mesh, damage) {
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].body === mesh) {
        if (damageEnemy(this.enemies[i], damage, this.scene)) {
          const dead = this.enemies.splice(i, 1)[0]
          this.events.onEnemyKilled(dead, dead.type)
        }
        return
      }
    }
  }

  get waveNumber() {
    return this.wave
  }
}
