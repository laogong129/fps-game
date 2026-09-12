import * as THREE from 'three'
import { CONFIG } from '../config.js'
import { makeTextSprite, updateSpriteText } from './text.js'
import { resolveObstacles } from './arena.js'
import { makeToon, addOutline } from './style.js'

export function createEnemy(type, hpMultiplier, scene) {
  const def = CONFIG.enemy[type]
  const group = new THREE.Group()
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(def.size, def.size, def.size),
    makeToon(def.color)
  )
  body.position.y = def.size / 2
  body.castShadow = true
  addOutline(body, 1.03)
  group.add(body)
  addEyes(group, def)

  const hpBar = new THREE.Mesh(
    new THREE.PlaneGeometry(def.size, 0.12),
    new THREE.MeshBasicMaterial({ color: 0x22cc44 })
  )
  hpBar.position.y = def.size + 0.3
  group.add(hpBar)
  const hpText = makeTextSprite(`${Math.ceil(def.hp * hpMultiplier)}`, { color: '#ff8888', size: 40 })
  hpText.position.y = def.size + 0.7
  group.add(hpText)
  group.userData.enemyGroup = true
  group.userData.centerHeight = def.size / 2
  scene.add(group)
  const hp = def.hp * hpMultiplier
  const e = {
    type,
    def,
    group,
    body,
    hpBar,
    hpText,
    hp,
    maxHp: hp,
    fireTimer: def.fireInterval ? Math.random() * def.fireInterval : 0,
    state: 'seek',
    stateTimer: 0,
    ringTimer: def.behavior === 'boss' ? CONFIG.boss.ringEvery : 0,
    summonTimer: def.behavior === 'boss' ? 5 : 0,
    orbitTimer: 0,
    orbitDir: 1,
    chargeDir: new THREE.Vector3(),
  }
  return e
}

function addEyes(group, def) {
  const eyeGeo = new THREE.SphereGeometry(def.size * 0.09, 8, 8)
  const eyeMat = makeToon(0xffffff, def.behavior === 'boss' ? 0xff2200 : 0xffcc00, 2)
  const ex = def.size * 0.28
  const ez = def.size * 0.5
  const ey = def.size * 0.62
  const l = new THREE.Mesh(eyeGeo, eyeMat)
  l.position.set(-ex, ey, ez)
  const r = new THREE.Mesh(eyeGeo, eyeMat)
  r.position.set(ex, ey, ez)
  group.add(l, r)
  if (def.behavior === 'boss') {
    const hornGeo = new THREE.ConeGeometry(def.size * 0.18, def.size * 0.5, 6)
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5 })
    const h1 = new THREE.Mesh(hornGeo, hornMat)
    h1.position.set(-def.size * 0.4, def.size + 0.1, 0)
    h1.rotation.z = 0.5
    const h2 = new THREE.Mesh(hornGeo, hornMat)
    h2.position.set(def.size * 0.4, def.size + 0.1, 0)
    h2.rotation.z = -0.5
    group.add(h1, h2)
  }
}

export function chaseEnemy(e, playerPos, dt, inner, others, api) {
  moveToward(e, playerPos, dt, inner, others, api)
}

function moveToward(e, playerPos, dt, inner, others, api) {
  const half = e.def.size / 2
  const pos = e.group.position
  const obstacles = api?.obstacles
  if (e.orbitTimer > 0) {
    e.orbitTimer -= dt
    const away = pos.clone().sub(playerPos)
    away.y = 0
    if (away.lengthSq() > 0.01) {
      const perp = new THREE.Vector3(-away.z * e.orbitDir, 0, away.x * e.orbitDir).normalize()
      pos.addScaledVector(perp, e.def.speed * dt)
    }
  } else {
    const dir = playerPos.clone().sub(pos)
    dir.y = 0
    const dist = dir.length()
    if (dist > 0.1) {
      const step = e.def.speed * dt
      const ground = playerPos.clone()
      ground.y = 0
      const target = dist < step ? ground : pos.clone().add(dir.normalize().multiplyScalar(step))
      pos.lerp(target, 1)
    }
  }
  for (const o of others) {
    if (o === e) continue
    const push = pos.clone().sub(o.group.position)
    push.y = 0
    const d = push.length()
    const min = CONFIG.enemy.separation
    if (d > 0.001 && d < min) {
      pos.add(push.normalize().multiplyScalar((min - d) / 2))
    }
  }
  if (obstacles) {
    const before = pos.clone()
    resolveObstacles(pos, half + 0.2, obstacles)
    if (pos.distanceTo(before) > 0.05) {
      e.orbitTimer = 0.8
      if (!e.orbitDir) e.orbitDir = Math.random() < 0.5 ? 1 : -1
    }
  }
  pos.x = THREE.MathUtils.clamp(pos.x, -inner + half, inner - half)
  pos.z = THREE.MathUtils.clamp(pos.z, -inner + half, inner - half)
}

export function updateSpitter(e, playerPos, dt, inner, others, api) {
  const dist = e.group.position.distanceTo(playerPos)
  if (dist > e.def.standRange) {
    moveToward(e, playerPos, dt, inner, others, api)
  } else {
    for (const o of others) {
      if (o === e) continue
      const push = e.group.position.clone().sub(o.group.position)
      push.y = 0
      const d = push.length()
      if (d > 0.001 && d < CONFIG.enemy.separation) {
        e.group.position.add(push.normalize().multiplyScalar((CONFIG.enemy.separation - d) / 2))
      }
    }
    e.fireTimer -= dt
    if (e.fireTimer <= 0 && dist < e.def.standRange + 6) {
      e.fireTimer = e.def.fireInterval
      api.fireProjectile(e)
    }
  }
}

export function updateCharger(e, playerPos, dt, inner, others, api) {
  const dist = e.group.position.distanceTo(playerPos)
  const dir = playerPos.clone().sub(e.group.position)
  dir.y = 0
  dir.normalize()
  if (e.state === 'seek') {
    moveToward(e, playerPos, dt, inner, others, api)
    if (dist < e.def.standRange) {
      e.state = 'telegraph'
      e.stateTimer = e.def.telegraphTime
    }
  } else if (e.state === 'telegraph') {
    e.stateTimer -= dt
    e.group.position.add(dir.multiplyScalar(0.4 * dt))
    e.body.material.emissive.setHSL(0.55, 1, 0.25 + 0.25 * Math.abs(Math.sin(e.stateTimer * 18)))
    if (e.stateTimer <= 0) {
      e.state = 'charge'
      e.stateTimer = e.def.chargeTime
      e.chargeDir.copy(dir)
      e.body.material.emissive.setHex(0x882200)
    }
  } else if (e.state === 'charge') {
    e.stateTimer -= dt
    e.group.position.add(e.chargeDir.clone().multiplyScalar(e.def.chargeSpeed * dt))
    e.group.position.x = THREE.MathUtils.clamp(e.group.position.x, -inner + e.def.size / 2, inner - e.def.size / 2)
    e.group.position.z = THREE.MathUtils.clamp(e.group.position.z, -inner + e.def.size / 2, inner - e.def.size / 2)
    if (e.stateTimer <= 0) {
      e.state = 'recover'
      e.stateTimer = e.def.chargeCd
      e.body.material.emissive.setHex(0x000000)
    }
  } else if (e.state === 'recover') {
    e.stateTimer -= dt
    if (e.stateTimer <= 0) e.state = 'seek'
  }
}

export function updateBoss(e, playerPos, dt, inner, others, api) {
  moveToward(e, playerPos, dt, inner, others, api)
  e.ringTimer -= dt
  e.summonTimer -= dt
  if (e.ringTimer <= 0) {
    e.ringTimer = CONFIG.boss.ringEvery
    api.bossRing(e.group.position.clone().add(new THREE.Vector3(0, e.def.size / 2, 0)))
  }
  if (e.summonTimer <= 0) {
    e.summonTimer = CONFIG.boss.summonEvery
    api.bossSummon(e.group.position)
  }
}

export function updateEnemyBars(e, camera) {
  e.hpBar.quaternion.copy(camera.quaternion)
  e.hpBar.scale.x = Math.max(0, e.hp / e.maxHp)
}

export function enemyCenter(e) {
  return e.group.position.clone().add(
    new THREE.Vector3(0, e.group.userData.centerHeight, 0)
  )
}

export function damageEnemy(enemy, amount, scene) {
  enemy.hp -= amount
  updateSpriteText(enemy.hpText, `${Math.max(0, Math.ceil(enemy.hp))}`, { color: '#ff8888', size: 40 })
  enemy.body.material.emissive = new THREE.Color(0x662200)
  setTimeout(() => { if (enemy.body.material) enemy.body.material.emissive = new THREE.Color(0x000000) }, 80)
  if (enemy.hp <= 0) {
    scene.remove(enemy.group)
    enemy.group.traverse((o) => o.isMesh && o.geometry.dispose())
    return true
  }
  return false
}
