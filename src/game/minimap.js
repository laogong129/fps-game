export class Minimap {
  constructor(canvas, layout) { this.canvas = canvas; this.context = canvas.getContext('2d'); this.layout = layout }
  update(stats) {
    if (!stats.playerPosition || !this.layout) return
    const ctx = this.context, width = this.canvas.width, height = this.canvas.height
    const scale = Math.min(width, height) / (this.layout.bounds * 2 + 8)
    const x = (value) => width / 2 + value * scale
    const z = (value) => height / 2 + value * scale
    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#343640'
    ctx.fillRect(x(-60), z(-60), 120 * scale, 120 * scale)
    for (const shape of this.layout.shapes) {
      if (!shape.solid || shape.category === 'ground' || !shape.width) continue
      ctx.fillStyle = shape.category === 'building' ? '#79717b' : shape.type === 'ramp' ? '#bba77d' : '#656675'
      ctx.fillRect(x(shape.x - shape.width / 2), z(shape.z - shape.depth / 2), shape.width * scale, shape.depth * scale)
    }
    ctx.strokeStyle = '#f5c573'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(x(-60), z(0)); ctx.lineTo(x(60), z(0)); ctx.stroke()
    if (stats.trainPosition) {
      ctx.fillStyle = stats.trainWarning ? '#f2957e' : '#c6d5d4'
      ctx.fillRect(x(stats.trainPosition.x - 12), z(-1.8), 24 * scale, 3.6 * scale)
    }
    if (stats.remainingEnemies?.length <= 3) for (const enemy of stats.remainingEnemies || []) {
      ctx.fillStyle = '#f19187'; ctx.beginPath(); ctx.arc(x(enemy.x), z(enemy.z), 2.2, 0, Math.PI * 2); ctx.fill()
    }
    ctx.fillStyle = '#b8efca'; ctx.beginPath(); ctx.arc(x(stats.playerPosition.x), z(stats.playerPosition.z), 3.3, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = '#e3d5c3'; ctx.font = '10px sans-serif'
    ctx.fillText('西站', x(-52), z(-10)); ctx.fillText('东站', x(34), z(-10))
    ctx.fillText('N', width / 2 - 3, 10)
  }
}
