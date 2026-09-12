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
    damageFromEnemy: 15,
    contactRadius: 1.2,
    invulnAfterHit: 0.5,
  },

  weapon: {
    damage: 10,
    fireInterval: 1.0,
    magSize: 5,
    reloadTime: 1.2,
    muzzleY: 1.5,
    assistAngle: 3,
  },

  enemy: {
    small: {
      label: '快怪',
      size: 0.7,
      color: 0xe74c3c,
      speed: 2.6,
      hp: 20,
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
    maxAlive: 40,
    spawnDistance: [24, 28],
    separation: 0.9,
  },

  wave: {
    baseInterval: 30,
    perWaveCount: 6,
    countGrowth: 3,
    hpGrowth: 1.12,
  },

  levelup: {
    xpForLevel: 10,
    xpGrowth: 1.5,
    choices: [
      { key: 'damage', name: '伤害 +5' },
      { key: 'rof', name: '射速 +20%' },
      { key: 'mag', name: '弹匣 +3' },
      { key: 'speed', name: '移速 +10%' },
      { key: 'hp', name: '最大生命 +20' },
    ],
  },

  pickup: {
    radius: 0.35,
    magnetRange: 3.0,
    collectRange: 1.0,
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
