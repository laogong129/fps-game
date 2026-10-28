import { CONFIG } from '../config.js'

export class RunStats {
  constructor() { this.reset() }
  reset() {
    this.elapsed = this.kills = this.trainHits = this.trainKills = 0
    this.waves = []
    this.currentWave = null
    this.weapons = Object.fromEntries(Object.keys(CONFIG.weapon).map((key) => [key, { shots: 0, damage: 0, useSeconds: 0 }]))
  }
  update(dt, weapon) { this.elapsed += dt; this.weapons[weapon].useSeconds += dt }
  startWave(wave) { this.currentWave = { wave, startedAt: this.elapsed, startingKills: this.kills } }
  endWave(outcome = 'cleared') {
    if (!this.currentWave) return
    this.waves.push({ wave: this.currentWave.wave, duration: this.elapsed - this.currentWave.startedAt,
      kills: this.kills - this.currentWave.startingKills, outcome })
    this.currentWave = null
  }
  result(game, reason) {
    return {
      version: 2, map: 'twilight-railway', result: reason, wave: game.spawner.wave,
      kills: this.kills, time: this.elapsed, deathCause: reason === 'won' ? null : game.player.lastDamage,
      trainHits: this.trainHits, trainKills: this.trainKills,
      upgrades: [...game.levelup.upgrades], waves: this.waves.map((wave) => ({ ...wave })),
      weapons: structuredClone(this.weapons),
    }
  }
}
