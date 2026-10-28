const voices = {
  pistol: { blast: 0.065, lowpass: 2700, highpass: 230, thump: 125, decay: 0.13, gain: 0.25 },
  shotgun: { blast: 0.11, lowpass: 1900, highpass: 100, thump: 76, decay: 0.2, gain: 0.36 },
  rifle: { blast: 0.047, lowpass: 3600, highpass: 340, thump: 150, decay: 0.095, gain: 0.2 },
}

let audio, output, noise

function ensure() {
  if (typeof window === 'undefined') return false
  const audioContext = window.AudioContext || window.webkitAudioContext
  if (!audioContext) return false
  if (!audio) {
    audio = new audioContext()
    const compressor = audio.createDynamicsCompressor()
    compressor.threshold.value = -15
    compressor.knee.value = 9
    compressor.ratio.value = 4
    compressor.attack.value = 0.003
    compressor.release.value = 0.1
    output = audio.createGain()
    output.gain.value = 0.65
    output.connect(compressor).connect(audio.destination)
    const delay = audio.createDelay(0.1), filter = audio.createBiquadFilter(), room = audio.createGain()
    delay.delayTime.value = 0.045
    filter.type = 'lowpass'; filter.frequency.value = 1500
    room.gain.value = 0.075
    output.connect(delay).connect(filter).connect(room).connect(compressor)
    noise = audio.createBuffer(1, audio.sampleRate, audio.sampleRate)
    const samples = noise.getChannelData(0)
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1
  }
  if (audio.state === 'suspended') audio.resume().catch(() => {})
  return true
}

function envelope(node, level, at, duration) {
  node.gain.setValueAtTime(0.0001, at)
  node.gain.exponentialRampToValueAtTime(level, at + 0.0015)
  node.gain.exponentialRampToValueAtTime(0.0001, at + duration)
}

function burst(at, duration, level, lowpass, highpass) {
  const source = audio.createBufferSource(), low = audio.createBiquadFilter()
  const high = audio.createBiquadFilter(), gain = audio.createGain()
  source.buffer = noise
  source.playbackRate.value = 0.97 + Math.random() * 0.06
  low.type = 'lowpass'; low.frequency.value = lowpass
  high.type = 'highpass'; high.frequency.value = highpass
  envelope(gain, level, at, duration)
  source.connect(low).connect(high).connect(gain).connect(output)
  source.start(at, Math.random() * 0.7)
  source.stop(at + duration)
  source.onended = () => { source.disconnect(); low.disconnect(); high.disconnect(); gain.disconnect() }
}

export function playWeaponShot(key) {
  if (!ensure()) return false
  const voice = voices[key] || voices.pistol, at = audio.currentTime
  const gain = voice.gain * (0.94 + Math.random() * 0.12)
  burst(at, voice.blast, gain, voice.lowpass, voice.highpass)
  burst(at + 0.012, 0.023, gain * 0.28, 6200, 1700)
  const thump = audio.createOscillator(), level = audio.createGain()
  thump.type = 'sine'
  thump.frequency.setValueAtTime(voice.thump, at)
  thump.frequency.exponentialRampToValueAtTime(34, at + voice.decay)
  envelope(level, gain * 0.58, at, voice.decay)
  thump.connect(level).connect(output)
  thump.start(at)
  thump.stop(at + voice.decay + 0.01)
  thump.onended = () => { thump.disconnect(); level.disconnect() }
  return true
}
