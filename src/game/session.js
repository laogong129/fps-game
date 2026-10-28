import { CONFIG } from '../config.js'
import { RunStats } from './run-stats.js'

const activeStates = new Set(['preparation', 'combat'])

export class GameSession {
  constructor({ player, weapon, spawner, levelup, train, hud, floats, arena }) {
    Object.assign(this, { player, weapon, spawner, levelup, train, hud, floats, arena })
    this.state = 'idle'
    this.resumeState = 'preparation'
    this.stats = new RunStats()
    this.result = null
    this.player.canLock = () => this.state === 'paused'
  }

  get active() { return activeStates.has(this.state) }

  setState(state) {
    this.state = state
    const active = this.active
    this.player.setEnabled(active)
    this.weapon.setEnabled(active)
    if (!active && this.player.controls?.isLocked) this.player.controls.unlock()
    this.hud.showPause(state === 'paused')
    this.train?.setActive?.(active)
  }

  start() {
    this.spawner.clear()
    this.levelup.reset()
    this.player.reset()
    this.weapon.resetUpgrades()
    this.train?.reset()
    this.stats.reset()
    this.floats.clear?.()
    this.result = null
    this.hud.hideOverlays()
    this.resumeState = 'preparation'
    this.setState('paused')
    this.resume()
  }

  resume() {
    if (this.state !== 'paused') return
    if (this.player.controls?.isLocked) this.handleLock()
    else this.player.safeLock()
  }

  handleLock() {
    if (this.state === 'paused') {
      this.player.clearInput()
      this.weapon.clearInput()
      this.setState(this.resumeState)
    }
  }

  pause() {
    if (!this.active) return
    this.resumeState = this.spawner.phase
    this.setState('paused')
  }

  startNextWave() {
    if (this.state !== 'preparation') return false
    const started = this.spawner.startWave()
    if (started !== false) this.state = this.spawner.phase
    return started !== false
  }

  onWaveStarted(info) {
    this.stats.startWave(info.wave)
    this.hud.notify(`第 ${info.wave} 波 · ${info.directions}`, info.hint)
  }

  finish(reason) {
    if (!this.active) return
    if (reason !== 'won') this.stats.endWave(reason)
    this.result = this.stats.result(this, reason)
    this.setState(reason === 'won' ? 'won' : 'dead')
    this.hud.showResult(this.result)
  }

  offerUpgrade() {
    if (this.levelup.pendingUpgrades <= 0) return
    this.setState('levelup')
    const choices = this.levelup.rollChoices(3)
    this.hud.showLevelUp(choices, (choice) => {
      if (this.state !== 'levelup' || !this.levelup.applyChoice(choice)) return
      if (this.levelup.pendingUpgrades > 0) this.offerUpgrade()
      else {
        this.resumeState = this.spawner.phase
        this.setState('paused')
        this.resume()
      }
    }, this.levelup.pendingUpgrades)
  }

  update(dt) {
    if (!this.active) return
    if (!this.player.controls?.isLocked) { this.pause(); return }
    this.stats.update(dt, this.weapon.active)
    this.train?.update(dt, this.arena.getActors?.() || [])
    if (this.player.hp <= 0) { this.finish('player_dead'); return }
    this.player.update(dt, this.arena.halfSize, this.spawner.getGroups(), false, this.arena.obstacles)
    this.weapon.update(dt)
    this.weapon.beginProjectileFrame?.()
    this.spawner.update(dt, this.player.pos, this.arena.halfSize - 0.5)
    this.state = this.spawner.phase
    if (this.player.hp <= 0) { this.finish('player_dead'); return }
    this.weapon.updateProjectiles?.(dt)
    if (this.spawner.isWaveClear()) {
      this.stats.endWave()
      this.levelup.collectAll()
      const finalWave = this.spawner.wave === CONFIG.goal.winWave
      this.weapon.clearProjectiles?.()
      this.spawner.finishWave()
      if (finalWave) { this.finish('won'); return }
      this.state = 'preparation'
      this.hud.notify('本波清场 · 备战 15 秒', '剩余经验已回收，可拾取补给或提前开波。')
    }
    this.levelup.update(dt, this.player.pos)
    this.levelup.updateHeals(dt, this.player.pos, (pos, amount) => this.floats.spawn(`+${amount}`, pos, '#74e7ac'))
    this.floats.update(dt)
    this.arena.update?.(dt)
    if (this.levelup.pendingUpgrades > 0) this.offerUpgrade()
  }

  getHudData() {
    return {
      ...this.spawner.getHudData(), ...this.levelup.getHudData(),
      ...(this.train?.getHudData() || {}), phase: this.state,
      traversal: !!this.player.motor?.traversal,
      elevation: this.player.footPosition?.y || 0,
      nextWave: Math.min(this.spawner.wave + 1, CONFIG.goal.winWave),
      kills: this.stats.kills, time: this.stats.elapsed,
      hp: this.player.hp, maxHp: this.player.maxHp,
      ammo: this.weapon.getAmmoText(), ammoHint: this.weapon.getReloadHint(),
      weaponName: this.weapon.getGunDisplay(),
    }
  }
}
