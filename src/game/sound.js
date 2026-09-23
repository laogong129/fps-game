let ctx = null

function ensure() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

function rand(min, max) { return min + Math.random() * (max - min) }

// ── 枪声：多层叠加 + 每把枪独立音色 + 随机化 ──
export function playShot(gunKey) {
  const ac = ensure()
  const t = ac.currentTime
  const vol = rand(0.25, 0.4)

  // Layer 1: 噪声爆炸（枪口冲击）
  const dur = rand(0.06, 0.1)
  const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * dur), ac.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) {
    const env = Math.pow(1 - i / d.length, 1.5)
    d[i] = (Math.random() * 2 - 1) * env
  }
  const noise = ac.createBufferSource()
  noise.buffer = buf

  let lpFreq, hpFreq
  if (gunKey === 'pistol') { lpFreq = rand(2000, 2800); hpFreq = rand(400, 800) }
  else if (gunKey === 'shotgun') { lpFreq = rand(1200, 1800); hpFreq = rand(200, 500) }
  else { lpFreq = rand(3000, 4000); hpFreq = rand(600, 1000) }

  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = lpFreq
  const hp = ac.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = hpFreq
  const ng = ac.createGain()
  ng.gain.setValueAtTime(vol, t)
  ng.gain.exponentialRampToValueAtTime(0.001, t + dur)
  noise.connect(lp).connect(hp).connect(ng).connect(ac.destination)
  noise.start(t); noise.stop(t + dur)

  // Layer 2: 低频冲击（枪体震动）
  const osc = ac.createOscillator()
  const baseFreq = gunKey === 'pistol' ? rand(80, 120)
    : gunKey === 'shotgun' ? rand(50, 80)
    : rand(100, 150)
  osc.type = 'sawtooth'
  osc.frequency.setValueAtTime(baseFreq, t)
  osc.frequency.exponentialRampToValueAtTime(30, t + 0.1)
  const og = ac.createGain()
  og.gain.setValueAtTime(vol * 0.6, t)
  og.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
  osc.connect(og).connect(ac.destination)
  osc.start(t); osc.stop(t + 0.12)

  // Layer 3: 高频金属回响
  const metal = ac.createOscillator()
  metal.type = 'square'
  metal.frequency.setValueAtTime(rand(800, 1400), t)
  metal.frequency.exponentialRampToValueAtTime(200, t + 0.03)
  const mg = ac.createGain()
  mg.gain.setValueAtTime(vol * 0.15, t)
  mg.gain.exponentialRampToValueAtTime(0.001, t + 0.03)
  metal.connect(mg).connect(ac.destination)
  metal.start(t); metal.stop(t + 0.04)
}

// ── 命中：瞬态冲击力增强 ──
export function playHit() {
  const ac = ensure()
  const t = ac.currentTime

  // 瞬态高频尖刺
  const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.04), ac.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3)
  const noise = ac.createBufferSource()
  noise.buffer = buf
  const fl = ac.createBiquadFilter()
  fl.type = 'bandpass'; fl.frequency.value = rand(800, 1500); fl.Q.value = 2
  const ng = ac.createGain()
  ng.gain.setValueAtTime(0.25, t)
  ng.gain.exponentialRampToValueAtTime(0.001, t + 0.04)
  noise.connect(fl).connect(ng).connect(ac.destination)
  noise.start(t)

  // 低沉撞击
  const osc = ac.createOscillator()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(rand(200, 300), t)
  osc.frequency.exponentialRampToValueAtTime(80, t + 0.06)
  const og = ac.createGain()
  og.gain.setValueAtTime(0.2, t)
  og.gain.exponentialRampToValueAtTime(0.001, t + 0.06)
  osc.connect(og).connect(ac.destination)
  osc.start(t); osc.stop(t + 0.07)
}

// ── 换弹：三阶段（拔→装→拍） ──
export function playReload() {
  const ac = ensure()
  const t = ac.currentTime

  // 阶段1: 拔弹匣（摩擦声）
  const dur1 = 0.12
  const buf1 = ac.createBuffer(1, Math.floor(ac.sampleRate * dur1), ac.sampleRate)
  const d1 = buf1.getChannelData(0)
  for (let i = 0; i < d1.length; i++) d1[i] = (Math.random() * 2 - 1) * (1 - i / d1.length)
  const n1 = ac.createBufferSource(); n1.buffer = buf1
  const fl1 = ac.createBiquadFilter(); fl1.type = 'bandpass'; fl1.frequency.value = 1500; fl1.Q.value = 1
  const g1 = ac.createGain()
  g1.gain.setValueAtTime(0.15, t)
  g1.gain.exponentialRampToValueAtTime(0.001, t + dur1)
  n1.connect(fl1).connect(g1).connect(ac.destination)
  n1.start(t); n1.stop(t + dur1)

  // 阶段2: 装弹匣（咔哒）
  setTimeout(() => {
    const t2 = ac.currentTime
    const buf2 = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.06), ac.sampleRate)
    const d2 = buf2.getChannelData(0)
    for (let i = 0; i < d2.length; i++) d2[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d2.length, 2)
    const n2 = ac.createBufferSource(); n2.buffer = buf2
    const fl2 = ac.createBiquadFilter(); fl2.type = 'highpass'; fl2.frequency.value = 2000
    const g2 = ac.createGain()
    g2.gain.setValueAtTime(0.2, t2)
    g2.gain.exponentialRampToValueAtTime(0.001, t2 + 0.06)
    n2.connect(fl2).connect(g2).connect(ac.destination)
    n2.start(t2); n2.stop(t2 + 0.07)
  }, 250)

  // 阶段3: 拍卡榫（清脆打击）
  setTimeout(() => {
    const t3 = ac.currentTime
    const osc = ac.createOscillator()
    osc.type = 'square'
    osc.frequency.setValueAtTime(rand(600, 900), t3)
    osc.frequency.exponentialRampToValueAtTime(200, t3 + 0.04)
    const g3 = ac.createGain()
    g3.gain.setValueAtTime(0.18, t3)
    g3.gain.exponentialRampToValueAtTime(0.001, t3 + 0.04)
    osc.connect(g3).connect(ac.destination)
    osc.start(t3); osc.stop(t3 + 0.05)
  }, 450)
}

// ── 升级：琶音上升 + 和弦 ──
export function playLevelUp() {
  const ac = ensure()
  const t = ac.currentTime

  const notes = [523.25, 659.25, 783.99, 1046.50]
  for (let i = 0; i < notes.length; i++) {
    const osc = ac.createOscillator()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(notes[i], t + i * 0.07)
    const g = ac.createGain()
    g.gain.setValueAtTime(0, t + i * 0.07)
    g.gain.linearRampToValueAtTime(0.2, t + i * 0.07 + 0.01)
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.2)
    osc.connect(g).connect(ac.destination)
    osc.start(t + i * 0.07); osc.stop(t + i * 0.07 + 0.22)
  }

  const pad = ac.createOscillator()
  pad.type = 'sine'
  pad.frequency.setValueAtTime(261.63, t)
  const pg = ac.createGain()
  pg.gain.setValueAtTime(0, t)
  pg.gain.linearRampToValueAtTime(0.1, t + 0.05)
  pg.gain.exponentialRampToValueAtTime(0.001, t + 0.6)
  pad.connect(pg).connect(ac.destination)
  pad.start(t); pad.stop(t + 0.65)
}

// ── 玩家受伤 ──
export function playHurt() {
  const ac = ensure()
  const t = ac.currentTime
  const osc = ac.createOscillator()
  osc.type = 'sawtooth'
  osc.frequency.setValueAtTime(rand(150, 250), t)
  osc.frequency.exponentialRampToValueAtTime(80, t + 0.15)
  const fl = ac.createBiquadFilter()
  fl.type = 'lowpass'
  fl.frequency.setValueAtTime(800, t)
  fl.frequency.exponentialRampToValueAtTime(300, t + 0.15)
  const g = ac.createGain()
  g.gain.setValueAtTime(0.3, t)
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
  osc.connect(fl).connect(g).connect(ac.destination)
  osc.start(t); osc.stop(t + 0.16)
}

// ── 击杀敌人 ──
export function playKill(type) {
  const ac = ensure()
  const t = ac.currentTime
  const isBoss = type === 'boss'
  const isTank = type === 'tank'

  if (isBoss) {
    const osc = ac.createOscillator()
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(100, t)
    osc.frequency.exponentialRampToValueAtTime(20, t + 0.5)
    const g = ac.createGain()
    g.gain.setValueAtTime(0.35, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.5)
    osc.connect(g).connect(ac.destination)
    osc.start(t); osc.stop(t + 0.55)

    const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.4), ac.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 0.8)
    const noise = ac.createBufferSource()
    noise.buffer = buf
    const fl = ac.createBiquadFilter()
    fl.type = 'lowpass'; fl.frequency.value = 600
    const ng = ac.createGain()
    ng.gain.setValueAtTime(0.25, t)
    ng.gain.exponentialRampToValueAtTime(0.001, t + 0.4)
    noise.connect(fl).connect(ng).connect(ac.destination)
    noise.start(t); noise.stop(t + 0.45)
  } else if (isTank) {
    const osc = ac.createOscillator()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(120, t)
    osc.frequency.exponentialRampToValueAtTime(40, t + 0.25)
    const g = ac.createGain()
    g.gain.setValueAtTime(0.25, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.25)
    osc.connect(g).connect(ac.destination)
    osc.start(t); osc.stop(t + 0.28)
  } else {
    const osc = ac.createOscillator()
    osc.type = 'square'
    const freq = type === 'small' || type === 'minibug' ? rand(400, 600) : rand(200, 350)
    osc.frequency.setValueAtTime(freq, t)
    osc.frequency.exponentialRampToValueAtTime(100, t + 0.12)
    const g = ac.createGain()
    g.gain.setValueAtTime(0.2, t)
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12)
    osc.connect(g).connect(ac.destination)
    osc.start(t); osc.stop(t + 0.14)
  }
}

// ── 拾取经验球 ──
export function playPickup() {
  const ac = ensure()
  const t = ac.currentTime
  const osc = ac.createOscillator()
  osc.type = 'sine'
  osc.frequency.setValueAtTime(rand(880, 1200), t)
  const g = ac.createGain()
  g.gain.setValueAtTime(0.2, t)
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
  osc.connect(g).connect(ac.destination)
  osc.start(t); osc.stop(t + 0.12)
}

// ── 拾取血包 ──
export function playHealPickup() {
  const ac = ensure()
  const t = ac.currentTime
  [523.25, 659.25].forEach((freq, i) => {
    const osc = ac.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(freq, t + i * 0.05)
    const g = ac.createGain()
    g.gain.setValueAtTime(0, t + i * 0.05)
    g.gain.linearRampToValueAtTime(0.15, t + i * 0.05 + 0.01)
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.05 + 0.25)
    osc.connect(g).connect(ac.destination)
    osc.start(t + i * 0.05); osc.stop(t + i * 0.05 + 0.28)
  })
}

// ── 切枪 ──
export function playSwitchGun() {
  const ac = ensure()
  const t = ac.currentTime
  const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.05), ac.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3)
  const noise = ac.createBufferSource()
  noise.buffer = buf
  const fl = ac.createBiquadFilter()
  fl.type = 'bandpass'; fl.frequency.value = 2500; fl.Q.value = 3
  const g = ac.createGain()
  g.gain.setValueAtTime(0.2, t)
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.05)
  noise.connect(fl).connect(g).connect(ac.destination)
  noise.start(t); noise.stop(t + 0.06)
}

// ── 落地 ──
export function playLand() {
  const ac = ensure()
  const t = ac.currentTime
  const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.08), ac.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2) * 0.5
  const noise = ac.createBufferSource()
  noise.buffer = buf
  const fl = ac.createBiquadFilter()
  fl.type = 'lowpass'; fl.frequency.value = 600
  const g = ac.createGain()
  g.gain.setValueAtTime(0.12, t)
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.08)
  noise.connect(fl).connect(g).connect(ac.destination)
  noise.start(t); noise.stop(t + 0.1)
}

// ── 飞弹命中 ──
export function playProjectileHit() {
  const ac = ensure()
  const t = ac.currentTime
  const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.1), ac.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 1.5)
  const noise = ac.createBufferSource()
  noise.buffer = buf
  const fl = ac.createBiquadFilter()
  fl.type = 'lowpass'; fl.frequency.value = 800
  const g = ac.createGain()
  g.gain.setValueAtTime(0.15, t)
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
  noise.connect(fl).connect(g).connect(ac.destination)
  noise.start(t); noise.stop(t + 0.12)
}
