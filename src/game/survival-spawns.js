import * as THREE from 'three'
import { CONFIG } from '../config.js'

export function spawnTarget(player, train, type, from, radius) {
  if (player.supportId !== 'train') return player.footPosition
  if (type !== 'boss' && train.doorsOpen) {
    const boarding = train.getBoardingRoute(from, player.footPosition, radius)
    if (boarding.length) return boarding[0]
  }
  return type === 'boss' ? train.getBossInterceptionTarget() : train.getInterceptionTarget()
}

export function selectSpawn(layout, world, navigation, player, radius, height, train, { type } = {}) {
  const [minimum, preferredMaximum] = CONFIG.enemy.spawnDistance
  const forward = player.forward
  const candidates = []
  for (const spawn of layout.spawnPoints) {
    const point = new THREE.Vector3(spawn.x, spawn.y, spawn.z)
    const distance = point.distanceTo(player.footPosition)
    if (distance < minimum || distance > CONFIG.enemy.maxSpawnDistance || !world.capsuleClear(point, radius, height)) continue
    const direction = point.clone().sub(player.footPosition).setY(0).normalize()
    const eye = point.clone().add(new THREE.Vector3(0, height * 0.6, 0))
    const hidden = direction.dot(forward) < 0.3 || !!world.raycast(player.pos, eye)
    if (!hidden) continue
    const target = spawnTarget(player, train, type, point, radius)
    const dx = point.x - player.footPosition.x, dz = point.z - player.footPosition.z
    const bearing = `${Math.abs(dx) > Math.abs(dz) * 0.45 ? dx < 0 ? '西' : '东' : ''}${Math.abs(dz) > Math.abs(dx) * 0.45 ? dz < 0 ? '北' : '南' : ''}`
    const region = spawn.label || layout.regions.find((entry) => entry.id === spawn.region)?.label || '街口'
    candidates.push({ point, target, label: `${region} · ${bearing}侧`,
      score: Math.abs(distance - 32) + Math.max(0, distance - preferredMaximum) * 3 + Math.random() * 8 })
  }
  candidates.sort((a, b) => a.score - b.score)
  return candidates.find(({ point, target }) =>
    navigation.findPath(point, target, radius, height).length || point.distanceTo(target) <= 2) || null
}

export function enemyType(wave) {
  let roll = Math.random() * 100
  for (const entry of CONFIG.wave.table.filter((item) => wave >= item.fromWave)) {
    if (roll < entry.weight) return entry.type
    roll -= entry.weight
  }
  return 'small'
}

export const waveHints = {
  1: '怪物会袭击你。观察预警，用巷道和高低差摆脱包围。',
  2: '前进＋空格可翻越低障碍或抓边攀上；动作期间仍会受伤。',
  3: '血牛缓慢但耐打。补给箱已放在附近的安全落点。',
  4: '喷吐者能攻击高处和列车窗口，利用实心掩体挡弹。',
  5: '分裂体死亡会产生碎片，留意平台和车内的近身威胁。',
  6: '冲刺者蓄力时侧移，楼梯与车门都不是永久安全点。',
  7: '混合追击！列车可以转移阵地，也可能撞伤你。',
  8: '最终波：击败Boss、护卫和召唤物。Boss能追上天桥，也能远程攻击车顶。',
}
