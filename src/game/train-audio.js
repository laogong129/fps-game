export class TrainAudio {
  constructor() { this.context = null; this.enabled = false; this.lastPulse = -1 }

  setActive(active) {
    this.enabled = active
    if (!active) {
      this.rumble?.stop()
      this.rumble = null
    }
  }

  ensure() {
    if (!this.enabled || typeof window === 'undefined') return null
    this.context ||= new (window.AudioContext || window.webkitAudioContext)()
    if (this.context.state === 'suspended') this.context.resume().catch(() => {})
    return this.context
  }

  update(phase, clock, speed) {
    if (!this.enabled) return
    const context = this.ensure()
    if (!context) return
    const pulse = Math.floor(clock * 2)
    if (phase === 'warning' && pulse !== this.lastPulse) {
      this.lastPulse = pulse
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = pulse % 2 ? 850 : 650
      gain.gain.setValueAtTime(0.025, context.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.18)
      oscillator.connect(gain).connect(context.destination)
      oscillator.start()
      oscillator.stop(context.currentTime + 0.2)
    }
    if (speed > 0.1 && !this.rumble) {
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'triangle'
      oscillator.frequency.value = 48
      gain.gain.value = 0.008
      oscillator.connect(gain).connect(context.destination)
      oscillator.start()
      this.rumble = oscillator
    } else if (speed < 0.1 && this.rumble) {
      this.rumble.stop()
      this.rumble = null
    }
  }
}
