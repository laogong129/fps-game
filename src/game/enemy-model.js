import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { clone as skeletonClone } from 'three/examples/jsm/utils/SkeletonUtils.js'
import { CONFIG } from '../config.js'
import { makeTextSprite, updateSpriteText } from './text.js'
import { makeToon, addOutline } from './style.js'

const loader = new GLTFLoader()
const modelCache = new Map()

export function preloadEnemyModels() {
  const paths = new Set()
  for (const type of Object.keys(CONFIG.enemy)) {
    const def = CONFIG.enemy[type]
    if (def.modelPath) paths.add(def.modelPath)
  }
  return Promise.allSettled(
    [...paths].map(path =>
      loader.loadAsync(path).then(gltf => {
        modelCache.set(path, gltf)
        console.log(`✅ 模型加载完成: ${path}`)
      }).catch(err => {
        console.warn(`⚠️ 模型加载失败: ${path}`, err)
      })
    )
  )
}

function getModel(path) {
  return modelCache.get(path) || null
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
    bones: [],
    spine: [],
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
    _pendingModel: false,
    dead: false,
    deathTimer: 0,
    deathState: 'none',
  }
  group.userData.enemyRef = e

  if (def.modelPath) {
    const gltf = getModel(def.modelPath)
    if (gltf) {
      populateEnemyModel(e, gltf, scene, type, hpMultiplier, def)
    } else {
      // 模型未加载，降级为方块
      createBoxEnemy(e, scene)
      console.warn(`⚠️ 模型未就绪: ${def.modelPath}，使用方块`)
    }
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
  scene.add(e.group)
}

function populateEnemyModel(e, gltf, scene, type, hpMult, def) {
  e.sharedGeometry = true
  // 含骨骼的模型必须用 SkeletonUtils.clone 重绑骨骼；
  // 普通 clone 会让克隆体引用原模型骨骼（不在场景里），导致蒙皮错乱、模型被压扁且被视锥剔除
  const model = skeletonClone(gltf.scene)
  model.traverse((o) => {
    if (o.isSkinnedMesh) o.frustumCulled = false
  })

  // 清理材质
  model.traverse((o) => {
    if (o.isMesh) {
      if (o.material) {
        o.material = o.material.clone()
        o.material.transparent = false
        o.material.opacity = 1.0
        o.material.depthWrite = true
        o.material.alphaTest = 0.0
        o.material.side = THREE.FrontSide
        o.castShadow = true
        o.receiveShadow = true
      }
      o.userData.isEnemyMesh = true
    }
  })

  // 移除旧占位
  const toRemove = []
  for (const c of e.group.children) {
    if (c.userData.isHpBar || c.userData.isHpText) continue
    toRemove.push(c)
  }
  for (const c of toRemove) {
    if (c.userData.isOutline) { c.geometry.dispose(); c.material.dispose() }
    e.group.remove(c)
  }

  // 按模型自身高度缩放到 def.size。用 bind 空间几何包围盒而非 Box3.setFromObject：
  // 蒙皮网格的顶点由骨骼矩阵决定，节点变换不参与，setFromObject 量出的高度是错的
  const box = new THREE.Box3()
  model.traverse((o) => {
    if (!o.isMesh || !o.geometry) return
    o.geometry.computeBoundingBox()
    if (o.geometry.boundingBox) box.union(o.geometry.boundingBox)
  })
  const nativeHeight = box.max.y - box.min.y
  const scale = nativeHeight > 0 ? def.size / nativeHeight : 1
  model.scale.setScalar(scale)

  // 添加模型到 group（group 已在 createEnemy 中添加到 scene）
  e.group.add(model)
  e.body = model

  // 收集所有可射线检测的子 mesh
  e.bodyMeshes = []
  model.traverse((o) => {
    if (o.isMesh && !o.userData.isOutline) e.bodyMeshes.push(o)
  })

  e.bones = []
  model.traverse((o) => {
    if (o.isBone) e.bones.push(o)
  })

  // 添加胶囊体碰撞体积
  const collGeo = new THREE.CapsuleGeometry(def.size * 0.35, def.size * 0.5, 4, 8)
  const collMat = new THREE.MeshBasicMaterial({ visible: false })
  e.collisionMesh = new THREE.Mesh(collGeo, collMat)
  e.collisionMesh.position.y = def.size / 2
  e.group.add(e.collisionMesh)

  // 应用颜色
  applySkinColor(model, type, def)
  addPupilHighlights(model)

  // 动画
  if (gltf.animations && gltf.animations.length > 0) {
    e.mixer = new THREE.AnimationMixer(model)
    e.action = e.mixer.clipAction(gltf.animations[0])
    e.action.loop = THREE.LoopRepeat
    e.action.play()
  }

  // HP条位置
  e.group.userData.centerHeight = def.size / 2
  e.hpBar.position.y = def.size + 0.3
  e.hpText.position.y = def.size + 0.7
  updateSpriteText(e.hpText, `${Math.ceil(def.hp * hpMult)}`, { color: '#ff8888', size: 40 })
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
    // 皮肤类材质
    if (name.includes('skin') || name.includes('torso') || name.includes('belt') ||
        name.includes('ear') || name.includes('thigh') || name.includes('shin') ||
        name.includes('foot') || name.includes('uarm') || name.includes('farm') ||
        name.includes('hand') || name.includes('surface') || name.includes('joints')) {
      o.material.color.setHex(skinColor)
    }
    if (name.includes('horn')) {
      o.material.color.setHex(0x8b1a1a)
    }
  })
}

function addPupilHighlights(model) {
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffee44 })
  model.traverse((o) => {
    if (!o.isMesh) return
    const name = o.name.toLowerCase()
    if (name === 'eye_l' || name === 'eye_r' || name.includes('eye')) {
      o.material = eyeMat
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
