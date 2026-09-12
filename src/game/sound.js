let ctx = null

function ensure() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

export function playShot(gunKey) {
  const ac = ensure()
  const t = ac.currentTime
  const noise = ac.createBufferSource()
  const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.08), ac.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2)
  noise.buffer = buf
  const filter = ac.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.value = gunKey === 'rifle' ? 3500 : 2200
  const gain = ac.createGain()
  gain.gain.setValueAtTime(gunKey === 'shotgun' ? 0.5 : 0.35, t)
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08)
  noise.connect(filter).connect(gain).connect(ac.destination)
  noise.start(t)

  const osc = ac.createOscillator()
  osc.type = 'square'
  osc.frequency.setValueAtTime(gunKey === 'shotgun' ? 120 : 180, t)
  osc.frequency.exponentialRampToValueAtTime(60, t + 0.06)
  const og = ac.createGain()
  og.gain.setValueAtTime(gunKey === 'shotgun' ? 0.3 : 0.18, t)
  og.gain.exponentialRampToValueAtTime(0.001, t + 0.06)
  osc.connect(og).connect(ac.destination)
  osc.start(t)
  osc.stop(t + 0.07)
}

export function playHit() {
  const ac = ensure()
  const t = ac.currentTime
  const osc = ac.createOscillator()
  osc.type = 'triangle'
  osc.frequency.setValueAtTime(320, t)
  osc.frequency.exponentialRampToValueAtTime(160, t + 0.05)
  const g = ac.createGain()
  g.gain.setValueAtTime(0.12, t)
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.05)
  osc.connect(g).connect(ac.destination)
  osc.start(t)
  osc.stop(t + 0.06)
}

export function playReload() {
  const ac = ensure()
  const t = ac.currentTime
  const buf = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.04), ac.sampleRate)
  const d = buf.getChannelData(0)
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length)
  const noise = ac.createBufferSource()
  noise.buffer = buf
  const g = ac.createGain()
  g.gain.setValueAtTime(0.15, t)
  const fl = ac.createBiquadFilter()
  fl.type = 'highpass'
  fl.frequency.value = 2000
  noise.connect(fl).connect(g).connect(ac.destination)
  noise.start(t)
  setTimeout(() => {
    const t2 = ac.currentTime
    const buf2 = ac.createBuffer(1, Math.floor(ac.sampleRate * 0.03), ac.sampleRate)
    const d2 = buf2.getChannelData(0)
    for (let i = 0; i < d2.length; i++) d2[i] = (Math.random() * 2 - 1) * (1 - i / d2.length)
    const n2 = ac.createBufferSource()
    n2.buffer = buf2
    const g2 = ac.createGain()
    g2.gain.setValueAtTime(0.12, t2)
    n2.connect(g2).connect(ac.destination)
    n2.start(t2)
  }, 300)
}

export function playLevelUp() {
  const ac = ensure()
  const t = ac.currentTime
  for (let i = 0; i < 3; i++) {
    const osc = ac.createOscillator()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(440 * Math.pow(1.25, i), t + i * 0.08)
    const g = ac.createGain()
    g.gain.setValueAtTime(0.15, t + i * 0.08)
    g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.08 + 0.15)
    osc.connect(g).connect(ac.destination)
    osc.start(t + i * 0.08)
    osc.stop(t + i * 0.08 + 0.2)
  }
}
