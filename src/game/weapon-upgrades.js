import { CONFIG } from '../config.js'

export function upgradePreview(gun, key) {
  if (!gun) return null
  let before, after, field, value, label, units
  if (key === 'damage') {
    before = gun.damage; after = before + 5; field = 'damage'; value = after
    label = '伤害 +5'; units = gun.pellets > 1 ? ' / 弹丸' : ''
  } else if (key === 'mag') {
    before = gun.magSize; after = before + 3; field = 'magSize'; value = after
    label = '弹匣 +3'; units = ' 发'
  } else if (key === 'rof') {
    value = Math.max(CONFIG.levelup.minFireInterval ?? 0.15, gun.fireInterval / 1.2)
    if (value >= gun.fireInterval - 1e-9) return null
    field = 'fireInterval'; before = 1 / gun.fireInterval; after = 1 / value
    label = `射速 +${Number(((after / before - 1) * 100).toFixed(1))}%`; units = ' 发/秒'
  } else return null
  if (!Number.isFinite(after) || after <= before) return null
  const format = (n) => Number(n.toFixed(2))
  return {
    key, gunKey: gun.key, name: `${gun.label} · ${label}`, before, after, field, value,
    description: `${format(before)} → ${format(after)}${units}，仅强化${gun.label}`,
  }
}

export function applyGunUpgrade(gun, key) {
  const preview = upgradePreview(gun, key)
  if (!preview) return false
  gun[preview.field] = preview.value
  return true
}
