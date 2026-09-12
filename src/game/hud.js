import { CONFIG } from '../config.js'

export class Hud {
  constructor() {
    this.el = {
      wave: document.getElementById('hud-wave'),
      kills: document.getElementById('hud-kills'),
      hp: document.getElementById('hp-fill'),
      xp: document.getElementById('xp-fill'),
      ammo: document.getElementById('hud-ammo'),
      weapon: document.getElementById('hud-weapon'),
      weaponName: document.getElementById('hud-weapon-name'),
      hpNum: document.getElementById('hp-num'),
      xpNum: document.getElementById('xp-num'),
      level: document.getElementById('hud-level'),
    }
  }

  update(stats) {
    this.el.wave.textContent = stats.wave
    this.el.kills.textContent = stats.kills
    this.el.hp.style.width = `${Math.max(0, (stats.hp / stats.maxHp) * 100)}%`
    this.el.xp.style.width = `${Math.min(100, (stats.xp / stats.xpNext) * 100)}%`
    this.el.hpNum.textContent = `${Math.ceil(stats.hp)}/${Math.ceil(stats.maxHp)}`
    this.el.xpNum.textContent = `${stats.xp}/${stats.xpNext}`
    this.el.level.textContent = stats.level
    this.el.ammo.textContent = stats.ammoHint
    this.el.weapon.textContent = stats.ammo
    if (stats.weaponName !== undefined) this.el.weaponName.textContent = stats.weaponName
  }

  showLevelUp(choices, onPick) {
    const wrap = document.getElementById('levelup-choices')
    wrap.innerHTML = ''
    document.getElementById('levelup').classList.add('show')
    for (const c of choices) {
      const div = document.createElement('div')
      div.className = 'choice'
      div.textContent = c.name
      div.onclick = () => {
        document.getElementById('levelup').classList.remove('show')
        onPick(c.key)
      }
      wrap.appendChild(div)
    }
  }

  showGameOver(stats) {
    document.getElementById('gameover-title').textContent = '阵亡'
    const el = document.getElementById('gameover-stats')
    el.innerHTML = `到达波次 <b>${stats.wave}</b> ｜ 总击杀 <b>${stats.kills}</b> ｜ 存活 <b>${(stats.time / 60).toFixed(1)}</b> 分钟`
    document.getElementById('continue-btn').classList.add('hide')
    document.getElementById('gameover-screen').classList.add('show')
  }

  showWin(stats) {
    document.getElementById('gameover-title').textContent = '围城突破！'
    const el = document.getElementById('gameover-stats')
    el.innerHTML = `达成第 <b>${stats.wave}</b> 波目标<br>总击杀 <b>${stats.kills}</b> ｜ 用时 <b>${(stats.time / 60).toFixed(1)}</b> 分钟`
    document.getElementById('continue-btn').classList.remove('hide')
    document.getElementById('gameover-screen').classList.add('show')
  }

  hideGameOver() {
    document.getElementById('gameover-screen').classList.remove('show')
  }
}
