import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CONFIG } from '../config.js'
import { makeTextSprite, updateSpriteText } from './text.js'
import { resolveObstacles } from './arena.js'
import { applyAnimeStyle, makeToon, addOutline } from './style.js'

const loader = new GLTFLoader()
let cachedModel = null
let pendingLoads = 0

export function loadEnemyModel(onReady) {
  if (cachedModel) { onReady(cachedModel); return }
  pendingLoads++
  loader.load(
    'assets/enemy_knee_oni.glb',
    (gltf) => {
      console.log('✅ 敌人模型加载成功')
      cachedModel = gltf
      if (gltf.animations.length > 0) {
        cachedModel.clip = gltf.animations[0]
      }
      pendingLoads--
      if (pendingLoads === 0) onReady(cachedModel)
    },
    undefined,
    (error) => {
      console.error('❌ 敌人模型加载失败:', error)
      pendingLoads--
    }
  )
}

let modelReady = false
let readyQueue = []

export function whenModelReady(cb) {
  if (modelReady) { cb(cachedModel) }
  else { readyQueue.push(cb) }
}

function fireReady() {
  modelReady = true
  for (const cb of readyQueue) cb(cachedModel)
  readyQueue.length = 0
}

loadEnemyModel(() => { fireReady() })

// ── 死亡特效粒子系统 ──
const particlePool = []
const MAX_PARTICLES = 200
let _scene = null
export function setEnemyScene(scene) { _scene = scene }

function spawnDeathParticles(pos, color, count = 15) {
  const scene = _scene
  if (!scene) return
  const particleGeo = new THREE.BoxGeometry(0.06, 0.06, 0.06)
  for (let i = 0; i < count; i++) {
    let p = particlePool.length > 0 ? particlePool.pop() : null
    if (!p) {
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true })
      p = { mesh: new THREE.Mesh(particleGeo, mat), vel: new THREE.Vector3(), life: 0 }
    }
    p.mesh.material.color.setHex(color)
    p.mesh.position.copy(pos)
    p.mesh.position.x += (Math.random() - 0.5) * 0.3
    p.mesh.position.y += Math.random() * 0.5
    p.mesh.position.z += (Math.random() - 0.5) * 0.3
    p.vel.set(
      (Math.random() - 0.5) * 4,
      Math.random() * 3 + 1,
      (Math.random() - 0.5) * 4
    )
    p.life = 0.8 + Math.random() * 0.4
    p.mesh.visible = true
    scene.add(p.mesh)
    p.mesh.material.opacity = 1.0
    particlePool.push(p)
  }
}

export function updateParticles(dt) {
  for (let i = particlePool.length - 1; i >= 0; i--) {
    const p = particlePool[i]
    p.life -= dt
    if (p.life <= 0) {
      p.mesh.visible = false
      p.mesh.material.dispose()
      p.mesh.geometry.dispose()
      particlePool.splice(i, 1)
      continue
    }
    p.vel.y -= 9.8 * dt
    p.mesh.position.addScaledVector(p.vel, dt)
    p.mesh.rotation.x += dt * 5
    p.mesh.rotation.z += dt * 3
    const t = Math.max(0, p.life / 0.8)
    p.mesh.material.opacity = t
    p.mesh.scale.setScalar(0.5 + t * 0.5)
  }
}

// ── 敌人创建 ──
export function createEnemy(type, hpMultiplier, scene) {
  const def = CONFIG.enemy[type]
  const group = new THREE.Group()
  group.userData.isEnemyPlaceholder = true
  scene.add(group)
  const hpBar = new THREE.Mesh(
    new THREE.PlaneGeometry(def.size, 0.12),
    new THREE.MeshBasicMaterial({ color: 0x22cc44 })
  )
  hpBar.position.y = def.size + 0.3
  hpBar.userData.isHpBar = true
  group.add(hpBar)
  const hpText = makeTextSprite(`${Math.ceil(def.hp * hpMultiplier)}`, { color: '#ff8888', size: 40 })
  hpText.position.y = def.size + 0.7
  hpText.userData.isHpText = true
  group.add(hpText)
  group.userData.isEnemy = true
  group.userData.enemyGroup = true
  group.userData.centerHeight = def.size / 2
  const hp = def.hp * hpMultiplier
  const e = {
    type,
    def,
    group,
    body: null,
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
    mixer: null,
    action: null,
    animTime: 0,
    _pendingModel: type === 'small',
    // 死亡动画状态
    dead: false,
    deathTimer: 0,
    deathState: 'none', // none → hit → falling → vanish → done
  }
  group.userData.enemyRef = e  // Store reference to enemy object for collision check
  if (type === 'small') {
    whenModelReady((gltf) => { populateEnemyModel(e, gltf, scene, type, hpMultiplier, def) })
  } else {
    createBoxEnemy(e, scene)
  }
  return e
}

function createBoxEnemy(e, scene) {
  const def = e.def
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(def.size, def.size, def.size),
    makeToon(def.color)
  )
  body.position.y = def.size / 2
  body.castShadow = true
  addOutline(body, 1.03)
  e.group.add(body)
  addEyes(e.group, def)
  e.body = body
  e._pendingModel = false
  scene.add(e.group)
}

function populateEnemyModel(e, gltf, scene, type, hpMult, def) {
  e._pendingModel = false
  const model = gltf.scene.clone(true)

  // 调试：检查模型几何体
  let meshCount = 0
  model.traverse((o) => {
    if (o.isMesh) {
      meshCount++
      if (o.material) {
        o.material = o.material.clone()
        o.material.transparent = false
        o.material.opacity = 1.0
        o.material.depthWrite = true
        o.material.alphaTest = 0.0
        o.material.side = THREE.FrontSide
        o.castShadow = true
        o.receiveShadow = true
        console.log(`网格 ${meshCount}: ${o.name}, pos=[${o.position.toArray().map(x=>x.toFixed(2)).join(',')}] scale=[${o.scale.toArray().map(x=>x.toFixed(2)).join(',')}]`)
      }
    }
  })
  console.log(`✅ 模型加载: ${meshCount} 个网格`)

  // 移除旧占位内容，保留 HP 条和文字
  const toRemove = []
  for (const c of e.group.children) {
    if (c.userData.isHpBar || c.userData.isHpText) continue
    toRemove.push(c)
  }
  for (const c of toRemove) {
    if (c.userData.isOutline) { c.geometry.dispose(); c.material.dispose() }
    e.group.remove(c)
  }
  e.group.add(model)
  e.body = model

  // 缩放模型以适应游戏单位
  const scale = def.size / 0.7
  model.scale.setScalar(scale)
  console.log(`📏 模型缩放: ${scale.toFixed(2)}x`)

  applySkinColor(model, type, def)
  addPupilHighlights(model)

  if (gltf.clip) {
    e.mixer = new THREE.AnimationMixer(model)
    e.action = e.mixer.clipAction(gltf.clip)
    e.action.loop = THREE.LoopRepeat
    e.action.play()
  }

  e.group.userData.centerHeight = def.size / 2
  e.hpBar.position.y = def.size + 0.3
  e.hpText.position.y = def.size + 0.7
  updateSpriteText(e.hpText, `${Math.ceil(def.hp * hpMult)}`, { color: '#ff8888', size: 40 })
  scene.add(e.group)
  console.log('✅ 敌人已添加到场景')
}

function applySkinColor(model, type, def) {
  const colorMap = {
    small: 0xe74c3c,
    tank: 0x9b59b6,
    spitter: 0x2ecc71,
    splitter: 0xf39c12,
    minibug: 0xf5b041,
    charger: 0xec2f64,
    boss: 0x1abc9c,
  }
  const skinColor = colorMap[type] ?? def.color
  model.traverse((o) => {
    if (!o.isMesh || !o.material) return
    const name = o.name.toLowerCase()
    if (name.includes('skin') || name.includes('torso') || name.includes('belt') ||
        name.includes('ear') || name.includes('thigh') || name.includes('shin') ||
        name.includes('foot') || name.includes('uarm') || name.includes('farm') ||
        name.includes('hand')) {
      o.material.color.setHex(skinColor)
    }
    if (name.includes('horn')) {
      o.material.color.setHex(0x8b1a1a)
    }
  })
  const scale = def.size / 0.7
  model.scale.setScalar(scale)
  applyAnimeStyle(model)
}

function addPupilHighlights(model) {
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffee44 })
  model.traverse((o) => {
    if (!o.isMesh) return
    const name = o.name.toLowerCase()
    if (name === 'eye_l' || name === 'eye_r') {
      o.material = eyeMat
      o.position.z = 0.72
    }
  })
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

// ── 死亡动画：前倾倒地 + 粒子血爆 ──
export function startEnemyDeath(e, scene) {
  if (e.dead) return
  e.dead = true
  e.deathState = 'hit'
  e.deathTimer = 0

  // 阶段1：闪红受击（0.15s）
  if (e.body) {
    e.body.traverse((o) => {
      if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
        o.material.emissive.setHex(0xff0000)
      }
    })
  }

  // 粒子爆发（红色/本敌颜色）
  const pos = e.group.position.clone()
  pos.y += e.def.size * 0.4
  spawnDeathParticles(pos, e.def.color, 18)
}

export function updateEnemyDeath(e, dt) {
  if (!e.dead) return
  e.deathTimer += dt

  if (e.deathState === 'hit') {
    if (e.deathTimer >= 0.15) {
      e.deathState = 'falling'
      e.deathTimer = 0
      // 恢复 emissive
      if (e.body) {
        e.body.traverse((o) => {
          if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
            o.material.emissive.setHex(0x000000)
          }
        })
      }
    }
  } else if (e.deathState === 'falling') {
    // 向前倒下：绕 X 轴旋转 90°
    const progress = Math.min(1, e.deathTimer / 0.4)
    const eased = 1 - Math.pow(1 - progress, 3)
    e.group.rotation.x = eased * (Math.PI / 2)
    e.group.position.y = Math.max(0, -eased * 0.05)
    if (progress >= 1) {
      e.deathState = 'vanish'
      e.deathTimer = 0
    }
  } else if (e.deathState === 'vanish') {
    const progress = Math.min(1, e.deathTimer / 0.3)
    if (e.body) {
      e.body.traverse((o) => {
        if (o.isMesh && o.material) {
          if (o.material.transparent === undefined) {
            o.material = o.material.clone()
            o.material.transparent = true
          }
          o.material.opacity = 1 - progress
        }
      })
    }
    if (e.hpBar && e.hpBar.material) {
      e.hpBar.material.opacity = 1 - progress
    }
    if (progress >= 1) {
      e.deathState = 'done'
    }
  }
}

// ── 朝向玩家 ──
export function facePlayer(e, playerPos) {
  if (e.dead) return
  const pos = e.group.position
  const dir = playerPos.clone().sub(pos)
  dir.y = 0
  if (dir.lengthSq() > 0.01) {
    const angle = Math.atan2(dir.x, dir.z)
    e.group.rotation.y = angle
  }
}

// ── 移动逻辑 ──
export function chaseEnemy(e, playerPos, dt, inner, others, api) {
  moveToward(e, playerPos, dt, inner, others, api)
  facePlayer(e, playerPos)
}

function moveToward(e, playerPos, dt, inner, others, api) {
  if (e.dead) return
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
  if (e.dead) return
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
  if (e.dead) return
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
    if (e.body) {
      e.body.traverse((o) => {
        if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
          o.material.emissive.setHSL(0.55, 1, 0.25 + 0.25 * Math.abs(Math.sin(e.stateTimer * 18)))
        }
      })
    }
    if (e.stateTimer <= 0) {
      e.state = 'charge'
      e.stateTimer = e.def.chargeTime
      e.chargeDir.copy(dir)
      if (e.body) {
        e.body.traverse((o) => {
          if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
            o.material.emissive.setHex(0x882200)
          }
        })
      }
    }
  } else if (e.state === 'charge') {
    e.stateTimer -= dt
    e.group.position.add(e.chargeDir.clone().multiplyScalar(e.def.chargeSpeed * dt))
    e.group.position.x = THREE.MathUtils.clamp(e.group.position.x, -inner + e.def.size / 2, inner - e.def.size / 2)
    e.group.position.z = THREE.MathUtils.clamp(e.group.position.z, -inner + e.def.size / 2, inner - e.def.size / 2)
    if (e.stateTimer <= 0) {
      e.state = 'recover'
      e.stateTimer = e.def.chargeCd
      if (e.body) {
        e.body.traverse((o) => {
          if (o.isMesh && o.material && !o.userData.isOutline) {
            o.material.emissive.setHex(0x000000)
          }
        })
      }
    }
  } else if (e.state === 'recover') {
    e.stateTimer -= dt
    if (e.stateTimer <= 0) e.state = 'seek'
  }
}

export function updateBoss(e, playerPos, dt, inner, others, api) {
  if (e.dead) return
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
  if (enemy.body) {
    enemy.body.traverse((o) => {
      if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
        o.material.emissive.setHex(0x662200)
      }
    })
    setTimeout(() => {
      if (enemy.body) enemy.body.traverse((o) => {
        if (o.isMesh && o.material && !o.userData.isOutline && o.material.emissive) {
          o.material.emissive.setHex(0x000000)
        }
      })
    }, 80)
  }
  if (enemy.hp <= 0) {
    startEnemyDeath(enemy, scene)
    return true
  }
  return false
}

export function updateEnemyAnim(e, dt) {
  if (e._pendingModel) return
  if (e.mixer) e.mixer.update(dt)
  updateEnemyDeath(e, dt)
}
