export const CONFIG = {
  arena: {
    size: 120,
    wallHeight: 4,
    wallColor: 0x9c2f26,
    floorColor: 0x6b5a44,
    fogColor: 0x7a5c8a,
    fogFar: 190,
  },

  player: {
    height: 1.7,
    radius: 0.5,
    moveSpeed: 6,
    sprintMult: 1.6,
    maxHp: 100,
    hpPerLevel: 10,
    damageFromEnemy: 15,
    contactRadius: 1.2,
    invulnAfterHit: 0.5,
    jump: { velocity: 5.4, gravity: 18 },
    bodyHeight: 1.8,
    stepHeight: 0.3,
    vaultHeight: 1.2,
    mantleHeight: 2,
    ladderContactRange: 0.65,
    ladderReleaseRange: 1.05,
    ladderHeightTolerance: 0.3,
  },

  weapon: {
    pistol: { label: '手枪', damage: 28, fireInterval: 0.32, magSize: 12, reloadTime: 1.05, headshotMult: 1.5,
      adsFov: 58, baseSpread: 0.0012, maxSpread: 0.012, spreadPerShot: 0.0016,
      spreadRecovery: 0.045, spreadRecoveryDelay: 0.12, adsSpreadMult: 0.5,
      movingSpread: 0.003, sprintSpread: 0.012, airSpread: 0.012,
      recoilPitch: 0.012, recoilReturn: 0.9, recoilRecovery: 12,
      muzzleSpeed: 230, gravity: 9.81, zeroRange: 35, maxDistance: 110,
      falloffStart: 50, falloffEnd: 105, minDamageMult: 0.65 },
    shotgun: { label: '霰弹枪', damage: 11, pellets: 7, spread: 0.075, fireInterval: 0.88, magSize: 6, reloadTime: 1.9,
      adsFov: 62, maxSpread: 0.095, spreadPerShot: 0.005, spreadRecovery: 0.12,
      spreadRecoveryDelay: 0.18, adsSpreadMult: 0.72, movingSpread: 0.012, sprintSpread: 0.03, airSpread: 0.035,
      falloffStart: 8, falloffEnd: 24, minDamageMult: 0.15,
      knockback: 1.8, knockbackRange: 9, tankKnockbackMult: 0.3,
      recoilPitch: 0.028, recoilReturn: 0.85, recoilRecovery: 9,
      muzzleSpeed: 240, gravity: 9.81, zeroRange: 15, maxDistance: 45 },
    rifle: { label: '步枪', damage: 18, fireInterval: 0.11, magSize: 30, reloadTime: 1.65, auto: true, adsFov: 48,
      recoilPitch: 0.0045, recoilReturn: 0.68, recoilRecovery: 13.5,
      baseSpread: 0.004, spreadPerShot: 0.0018, maxSpread: 0.026, spreadRecovery: 0.065,
      spreadRecoveryDelay: 0.14, adsSpreadMult: 0.38, movingSpread: 0.004, sprintSpread: 0.014, airSpread: 0.018,
      muzzleSpeed: 560, gravity: 9.81, zeroRange: 50, maxDistance: 165,
      falloffStart: 70, falloffEnd: 150, minDamageMult: 0.7 },
  },

  view: {
    fov: 75,
  },

  gunShape: {
    pistol: [
      { size: [0.07, 0.07, 0.32], pos: [0, 0.02, -0.18], color: 0xe8e8f0 },
      { size: [0.05, 0.05, 0.06], pos: [0, 0.04, 0.02], color: 0xd0d0dc },
      { size: [0.03, 0.06, 0.04], pos: [0, -0.04, -0.08], color: 0x222230 },
      { size: [0.055, 0.1, 0.06], pos: [0, -0.12, -0.04], color: 0x3a3a4a },
      { size: [0.01, 0.015, 0.01], pos: [0, 0.065, -0.34], color: 0xffffff },
      { size: [0.02, 0.012, 0.01], pos: [0, 0.06, 0.01], color: 0xffffff },
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

  gunModel: {
    pistol: { file: 'assets/models/weapons/railway-pistol.glb', length: 0.42, sourceRot: [0, 0, 0], rot: [0, 14.3239, 0], pos: [0.02, 0.065, 0.08] },
    shotgun: { file: 'assets/models/weapons/railway-pump-shotgun.glb', length: 0.9, sourceRot: [0, 0, 0], rot: [0, 14.3239, 0], pos: [0.02, 0.05, 0.08] },
    rifle: { file: 'assets/models/weapons/railway-carbine.glb', length: 0.7, sourceRot: [0, 0, 0], rot: [0, 14.3239, 0], pos: [0.02, -0.015, 0.08] },
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
      size: 1.7,
      color: 0xe74c3c,
      speed: 2.6,
      hp: 30,
      xp: 1,
      modelPath: 'assets/models/enemy_mutant.glb',
      hitZone: {
        mult: { head: 1.0, body: 0.7, limb: 0.4 },
      },
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
    boss: {
      label: '围城之王',
      size: 3.0,
      color: 0x1abc9c,
      speed: 1.5,
      hp: 800,
      xp: 50,
      behavior: 'boss',
    },
    maxAlive: 40,
    spawnDistance: [25, 40],
    maxSpawnDistance: 65,
    spawnWarningTime: 1.5,
    spawnMarker: { color: 0xff3344, ringInner: 0.55, ringOuter: 1.1, pillarHeight: 6 },
    maxSpawnMarkers: 6,
  },

  wave: {
    preparationTime: 15,
    spawnInterval: 3.2,
    finalEscortCount: 18,
    perWaveCount: 8,
    countGrowth: 4,
    hpGrowth: 1,
    table: [
      { type: 'tank', fromWave: 3, weight: 25 },
      { type: 'spitter', fromWave: 4, weight: 15 },
      { type: 'splitter', fromWave: 5, weight: 10 },
      { type: 'charger', fromWave: 6, weight: 10 },
    ],
  },

  levelup: {
    xpForLevel: 10,
    xpGrowth: 1.5,
    hpBoost: 20,
    minFireInterval: 0.075,
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
    magnetRange: 6.0,
    collectRange: 1.2,
    maxOrbs: 60,
    ttl: 20,
    fadeStart: 17,
  },
  heal: {
    small: { value: 15, chance: 0.2, color: 0xe74c3c, radius: 0.45, ttl: 10, fadeStart: 7 },
    tank: { value: 60, chance: 1.0, color: 0xffd700, radius: 0.6, ttl: 10, fadeStart: 7 },
  },

  crate: {
    fromWave: 3,
    everyWaves: 3,
    collectRange: 1.8,
    color: 0x27d8e8,
  },

  boss: {
    wave: 8,
    ringEvery: 2.5,
    ringCount: 8,
    summonEvery: 10,
  },

  goal: {
    winWave: 8,
  },

  train: {
    dwellTime: 20,
    warningTime: 6,
    speed: 8,
    playerDamageRatio: 0.8,
    bossDamageRatio: 0.3,
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
