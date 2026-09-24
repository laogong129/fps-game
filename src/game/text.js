import * as THREE from 'three'

// 预热像素字体，确保 canvas 渲染时已生效
if (typeof document !== 'undefined' && document.fonts) {
  try { document.fonts.load('24px PixelDamage') } catch (e) { /* ignore */ }
}

export function pxFont(size) {
  return `${size}px PixelDamage, monospace`
}
// 含非 ASCII（中文等）时回退到系统字体，避免像素字体缺字形变方块
export function pickFont(size, text) {
  const hasCJK = /[^\x00-\x7F]/.test(text)
  return hasCJK ? `bold ${size}px 'Segoe UI', sans-serif` : pxFont(size)
}

export function makeTextSprite(text, { size = 48, color = '#ff3b30' } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  ctx2(canvas, text, size, color)
  const tex = new THREE.CanvasTexture(canvas)
  tex.minFilter = THREE.NearestFilter
  tex.magFilter = THREE.NearestFilter
  tex.generateMipmaps = false
  const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(0.9, 0.45, 1)
  return sprite
}

export function updateSpriteText(sprite, text, { size = 48, color = '#ff3b30' } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 128
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  ctx.font = pickFont(size, text)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, 128, 64)
  const old = sprite.material.map
  sprite.material.map = new THREE.CanvasTexture(canvas)
  sprite.material.map.minFilter = THREE.NearestFilter
  sprite.material.map.magFilter = THREE.NearestFilter
  sprite.material.map.generateMipmaps = false
  sprite.material.needsUpdate = true
  if (old) old.dispose()
}

function ctx2(canvas, text, size, color) {
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingEnabled = false
  ctx.font = pickFont(size, text)
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, 128, 64)
  return ctx
}

export class FloatingText {
  constructor(scene, pool = []) {
    this.scene = scene
    this.pool = pool
  }

  spawn(text, pos, color = '#ff3b30', size = 48) {
    const s = makeTextSprite(text, { color, size })
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
