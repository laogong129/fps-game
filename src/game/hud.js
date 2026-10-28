import { CONFIG } from '../config.js'
import { Minimap } from './minimap.js'

const phases = { idle: '待命', preparation: '备战', combat: '交战', paused: '暂停', levelup: '强化', won: '胜利', dead: '结束' }
const element = (id) => document.getElementById(id)
const text = (id, value) => { element(id).textContent = value }

export class Hud {
  constructor(layout) { this.dmgFlashTimer = 0; this.notificationTime = 0; this.minimap = new Minimap(element('minimap'), layout) }

  update(stats, dt) {
    text('hud-wave', Math.max(1, stats.wave))
    text('hud-phase', phases[stats.phase])
    text('hud-kills', stats.kills)
    text('hud-remaining', stats.enemiesRemaining ?? 0)
    text('hud-time', `${Math.floor(stats.time / 60)}:${String(Math.floor(stats.time % 60)).padStart(2, '0')}`)
    text('hud-directions', stats.directions ? `来敌：${stats.directions}` : '入口待命')
    text('hp-num', `${Math.ceil(stats.hp)} / ${stats.maxHp}`)
    text('xp-num', `${stats.xp} / ${stats.xpNext}`)
    text('hud-level', stats.level)
    element('hp-fill').style.width = `${Math.max(0, stats.hp / stats.maxHp * 100)}%`
    element('xp-fill').style.width = `${Math.min(100, stats.xp / stats.xpNext * 100)}%`
    text('hud-ammo', stats.ammoHint)
    text('hud-weapon', stats.ammo)
    text('hud-weapon-name', stats.weaponName)
    text('train-status', stats.trainStatus || '西站停靠')
    text('train-detail', `${stats.trainDoorsOpen ? '车门开启' : '车门关闭'} · 高度 ${(stats.elevation || 0).toFixed(1)}m${stats.traversal ? ' · 跑酷中' : ''}`)
    element('train-status').closest('.train-panel').classList.toggle('danger', !!stats.trainWarning)
    this.minimap.update(stats)
    element('prep-panel').classList.toggle('hide', stats.phase !== 'preparation')
    text('prep-countdown', `第 ${stats.nextWave} 波 · 备战 ${Math.ceil(stats.preparationRemaining ?? 0)} 秒`)
    this.dmgFlashTimer = Math.max(0, this.dmgFlashTimer - dt)
    element('dmg-flash').style.opacity = Math.min(1, this.dmgFlashTimer / 0.3)
    this.notificationTime = Math.max(0, this.notificationTime - dt)
    element('announcement').classList.toggle('hide', this.notificationTime <= 0)
  }

  flashDamage() { this.dmgFlashTimer = 0.55 }

  flashHeadshot() {
    const flash = element('headshot-flash')
    flash.classList.remove('show')
    void flash.offsetWidth
    flash.classList.add('show')
  }

  notify(title, message = '') {
    element('announcement').querySelector('strong').textContent = title
    element('announcement').querySelector('span').textContent = message
    this.notificationTime = 7
  }

  showPause(show) { element('pause-screen').classList.toggle('show', show) }

  hideOverlays() {
    for (const id of ['start-screen', 'pause-screen', 'gameover-screen', 'levelup']) element(id).classList.remove('show')
    this.dmgFlashTimer = this.notificationTime = 0
    element('headshot-flash').classList.remove('show')
  }

  showLevelUp(choices, onPick, pending = 1) {
    const wrap = element('levelup-choices')
    wrap.replaceChildren()
    element('levelup').classList.add('show')
    text('upgrade-count', pending > 1 ? `还有 ${pending} 次强化，逐次选择` : '选择一项强化')
    let picked = false
    for (const choice of choices) {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'choice'
      const title = document.createElement('strong')
      const description = document.createElement('span')
      title.textContent = choice.name
      description.textContent = choice.description ?? ''
      button.append(title, description)
      button.onclick = () => {
        if (picked) return
        picked = true
        element('levelup').classList.remove('show')
        onPick(choice)
      }
      wrap.append(button)
    }
    wrap.querySelector('button')?.focus()
  }

  showResult(stats) {
    const won = stats.result === 'won'
    text('gameover-title', won ? '活过暮色围城' : '本次追击结束')
    text('result-reason', won ? '八波敌人已清场，围城之王已被击败。' :
      stats.deathCause === 'train' ? '被列车撞击后阵亡。下次留意6秒灯声预警，在停站时登乘。' :
      stats.deathCause === 'projectile' ? '被远程弹丸击中后阵亡。利用实心掩体挡弹，留意窗口与高处的射界。' :
      '被近身怪物击倒。利用翻越、高低差和霰弹击退，在换弹前留出退路。')
    const values = [
      [`${Math.max(1, stats.wave)} / 8`, '到达波次'], [stats.kills, '总击杀'],
      [`${(stats.time / 60).toFixed(1)} 分`, '作战用时'], [stats.trainKills || 0, '列车击杀'],
      [stats.trainHits || 0, '被列车撞击'], [stats.upgrades.length, '已选强化'],
    ]
    element('gameover-stats').replaceChildren(...values.map(([value, label]) => {
      const item = document.createElement('div')
      item.className = 'result-stat'
      const number = document.createElement('b')
      const caption = document.createElement('span')
      number.textContent = value
      caption.textContent = label
      item.append(number, caption)
      return item
    }))
    text('result-upgrades', `本局强化：${stats.upgrades.length ? stats.upgrades.join(' · ') : '尚未领取强化'}`)
    text('result-weapons', Object.entries(stats.weapons).map(([key, data]) =>
      `${CONFIG.weapon[key].label}：${data.shots} 次开火 / ${Math.round(data.damage)} 伤害`).join('　'))
    element('gameover-screen').classList.add('show')
  }
}
