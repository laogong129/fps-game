export const CONFIG = {
  arena: {
    size: 60,
    wallHeight: 4,
    wallColor: 0x445566,
    floorColor: 0x1c2430,
    fogColor: 0x0d1117,
    fogFar: 90,
  },

  player: {
    height: 1.7,
    radius: 0.5,
    moveSpeed: 6,
    sprintMult: 1.6,
    maxHp: 100,
    hpPerLevel: 5,
    damageFromEnemy: 15,
    contactRadius: 1.2,
    invulnAfterHit: 0.5,
    jump: { velocity: 5.4, gravity: 18 },
  },

  weapon: {
    pistol: { label: '手枪', damage: 30, fireInterval: 1.0, magSize: 8, reloadTime: 1.2 },
    shotgun: { label: '霰弹枪', damage: 12, pellets: 6, spread: 0.12, fireInterval: 0.9, magSize: 4, reloadTime: 1.6 },
    rifle: { label: '步枪', damage: 24, fireInterval: 0.2, magSize: 30, reloadTime: 1.8, auto: true, adsFov: 42 },
    assistAngle: 14,
    assistRange: 50,
  },

  view: {
    fov: 75,
  },

  gunShape: {
    pistol: [
      { size: [0.08, 0.08, 0.4], pos: [0, 0, -0.12], color: 0x333344 },
      { size: [0.06, 0.1, 0.07], pos: [0, -0.09, -0.2], color: 0x2a2a35 },
    ],
    shotgun: [
      { size: [0.1, 0.1, 0.42], pos: [0, 0, -0.14], color: 0x555566 },
      { size: [0.08, 0.06, 0.3], pos: [0, -0.07, -0.05], color: 0x6b4a2a },
    ],
    rifle: [
      { size: [0.07, 0.09, 0.5], pos: [0, 0, -0.2], color: 0x39424e },
      { size: [0.045, 0.045, 0.55], pos: [0, 0.005, -0.55], color: 0x2c333d },
      { size: [0.05, 0.14, 0.08], pos: [0, -0.11, -0.15], color: 0x2c333d },
      { size: [0.06, 0.08, 0.2], pos: [0, -0.02, 0.12], color: 0x4a3826 },
      { size: [0.03, 0.03, 0.05], pos: [0, 0.07, -0.45], color: 0x39424e },
    ],
  },

  projectile: {
    radius: 0.25,
    gravity: 9,
    speed: 10,
    playerHitRadius: 0.6,
    ttl: 4,
  },

  enemy: {
    small: {
      label: '快怪',
      size: 0.7,
      color: 0xe74c3c,
      speed: 2.6,
      hp: 30,
      xp: 1,
    },
    tank: {
      label: '血牛',
      size: 1.6,
      color: 0x9b59b6,
      speed: 1.2,
      hp: 100,
      xp: 4,
    },
    spitter: {
      label: '喷吐者',
      size: 1.0,
      color: 0x2ecc71,
      speed: 1.4,
      hp: 40,
      xp: 2,
      behavior: 'spitter',
      fireInterval: 2.5,
      standRange: 14,
      projDamage: 10,
    },
    splitter: {
      label: '分裂体',
      size: 1.2,
      color: 0xf39c12,
      speed: 1.8,
      hp: 60,
      xp: 3,
      behavior: 'splitter',
    },
    minibug: {
      label: '小碎片',
      size: 0.4,
      color: 0xf5b041,
      speed: 3.4,
      hp: 15,
      xp: 1,
    },
    charger: {
      label: '冲刺者',
      size: 1.0,
      color: 0xec2f64,
      speed: 2.2,
      hp: 50,
      xp: 3,
      behavior: 'charger',
      telegraphTime: 0.9,
      chargeSpeed: 11,
      chargeTime: 0.5,
      chargeCd: 3.5,
      standRange: 8,
    },
    maxAlive: 40,
    spawnDistance: [24, 28],
    separation: 0.9,
  },

  wave: {
    baseInterval: 30,
    perWaveCount: 6,
    countGrowth: 3,
    hpGrowth: 1.12,
    table: [
      { type: 'tank', fromWave: 3, weight: 35 },
      { type: 'spitter', fromWave: 4, weight: 25 },
      { type: 'splitter', fromWave: 5, weight: 20 },
      { type: 'charger', fromWave: 6, weight: 20 },
    ],
  },

  levelup: {
    xpForLevel: 10,
    xpGrowth: 1.5,
    hpBoost: 20,
    choices: [
      { key: 'damage', name: '伤害 +5' },
      { key: 'rof', name: '射速 +20%' },
      { key: 'mag', name: '弹匣 +3' },
      { key: 'speed', name: '移速 +10%' },
      { key: 'hp', name: '最大生命 +20' },
      { key: 'shotgun', name: '解锁：霰弹枪', unlock: true },
      { key: 'rifle', name: '解锁：步枪', unlock: true },
    ],
  },

  pickup: {
    radius: 0.35,
    magnetRange: 3.0,
    collectRange: 1.0,
  },

  heal: {
    small: { value: 15, chance: 0.2, color: 0xe74c3c, radius: 0.45 },
    tank: { value: 60, chance: 1.0, color: 0xffd700, radius: 0.6 },
  },
}

export function enemyName(type) {
  return CONFIG.enemy[type].label
}

export function waveSpawnCount(wave) {
  return CONFIG.wave.perWaveCount + (wave - 1) * CONFIG.wave.countGrowth
}

export function waveHpMultiplier(wave) {
  return Math.pow(CONFIG.wave.hpGrowth, wave - 1)
}
