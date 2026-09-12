import * as THREE from 'three'

export function makeTextSprite(text, { size = 48, color = '#fff', bg = null } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 64
  ctx2(canvas, text, size, color, bg)
  const tex = new THREE.CanvasTexture(canvas)
  tex.minFilter = THREE.LinearFilter
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(0.9, 0.45, 1)
  return sprite
}

export function updateSpriteText(sprite, text, { size = 48, color = '#fff' } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  ctx.font = `bold ${size}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, 64, 32)
  const old = sprite.material.map
  sprite.material.map = new THREE.CanvasTexture(canvas)
  sprite.material.map.minFilter = THREE.LinearFilter
  sprite.material.needsUpdate = true
  if (old) old.dispose()
}

function ctx2(canvas, text, size, color) {
  const ctx = canvas.getContext('2d')
  ctx.font = `bold ${size}px sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, 64, 32)
  return ctx
}

export class FloatingText {
  constructor(scene, pool = []) {
    this.scene = scene
    this.pool = pool
  }

  spawn(text, pos, color = '#ffd24a') {
    const s = makeTextSprite(text, { color })
    s.position.copy(pos)
    s.position.y += 1.2
    s.userData = { life: 0.7, vy: 2 }
    this.scene.add(s)
    this.pool.push(s)
  }

  update(dt) {
    for (let i = this.pool.length - 1; i >= 0; i--) {
      const s = this.pool[i]
      s.userData.life -= dt
      s.position.y += s.userData.vy * dt
      s.material.opacity = Math.max(0, s.userData.life / 0.7)
      if (s.userData.life <= 0) {
        this.scene.remove(s)
        s.material.map.dispose()
        s.material.dispose()
        this.pool.splice(i, 1)
      }
    }
  }
}
