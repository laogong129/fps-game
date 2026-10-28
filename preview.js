import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CONFIG } from './src/config.js'
import { normalizeWeaponModel } from './src/game/weapon-model.js'

const element = (id) => document.getElementById(id)
const canvas = element('c')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x20242e)
scene.fog = new THREE.Fog(0x20242e, 8, 24)
const camera = new THREE.PerspectiveCamera(CONFIG.view.fov, window.innerWidth / window.innerHeight, 0.01, 50)
camera.position.set(0.9, 0.3, 0.75)
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, -0.05, -0.3)
controls.enableDamping = true
controls.maxPolarAngle = Math.PI / 2
const grid = new THREE.GridHelper(20, 20, 0x55617a, 0x39414f)
grid.position.y = -0.6
scene.add(grid)
const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60),
  new THREE.MeshBasicMaterial({ color: 0x2b3140, side: THREE.DoubleSide }))
floor.rotation.x = Math.PI / 2
floor.position.y = -0.62
scene.add(floor)
const light = new THREE.DirectionalLight(0xffffff, 1.2)
light.position.set(2, 4, 3)
scene.add(light, new THREE.AmbientLight(0xffffff, 0.5))
const modelRig = new THREE.Group()
scene.add(modelRig)
const firstPersonCamera = new THREE.PerspectiveCamera(CONFIG.view.fov, window.innerWidth / window.innerHeight, 0.1, 50)
scene.add(firstPersonCamera)
const gunGroup = new THREE.Group()
gunGroup.position.set(0.25, -0.4, -0.5)
firstPersonCamera.add(gunGroup)

const models = {}
let current = 'pistol'
let modelGroup = null
const axes = ['x', 'y', 'z']

function resetInputs() {
  const config = CONFIG.gunModel[current]
  element('s').value = 1
  axes.forEach((axis, index) => {
    element(`r${axis}`).value = config.rot[index]
    element(`p${axis}`).value = config.pos[index]
  })
  element('flip').checked = false
  element('copy-status').textContent = ''
}

function readSettings() {
  const config = CONFIG.gunModel[current]
  const round = (value) => Number(value.toFixed(4))
  return {
    file: config.file,
    length: round(config.length * Number(element('s').value)),
    sourceRot: [...config.sourceRot],
    rot: axes.map((axis) => round(Number(element(`r${axis}`).value) +
      (axis === 'y' && element('flip').checked ? 180 : 0))),
    pos: axes.map((axis) => round(Number(element(`p${axis}`).value))),
  }
}

function updateJSON(settings) {
  element('s_v').textContent = `${Number(element('s').value).toFixed(2)}×`
  for (const [index, axis] of axes.entries()) {
    element(`r${axis}_v`).textContent = `${Number(settings.rot[index].toFixed(1))}°`
    element(`p${axis}_v`).textContent = settings.pos[index].toFixed(3)
  }
  element('jsonbox').textContent = JSON.stringify(settings, null, 2)
}

function syncMode() {
  const firstPerson = element('fp').checked
  controls.enabled = !firstPerson
  element('crosshair').style.display = firstPerson ? 'block' : 'none'
  if (modelGroup) (firstPerson ? gunGroup : modelRig).add(modelGroup)
}

function apply() {
  const settings = readSettings()
  updateJSON(settings)
  if (modelGroup) { modelGroup.removeFromParent(); modelGroup = null }
  if (models[current]) {
    modelGroup = normalizeWeaponModel(models[current], settings)
    element('model-status').textContent = `${CONFIG.weapon[current].label} · 枪身长度 ${settings.length.toFixed(3)} 米`
  } else element('model-status').textContent = '正在加载原始模型…'
  syncMode()
}

const tabs = element('tabs')
for (const key of Object.keys(CONFIG.gunModel)) {
  const button = document.createElement('button')
  button.textContent = CONFIG.weapon[key].label
  button.classList.toggle('on', key === current)
  button.onclick = () => {
    current = key
    resetInputs()
    apply()
    tabs.querySelectorAll('button').forEach((tab) => tab.classList.toggle('on', tab === button))
  }
  tabs.append(button)
}
for (const id of ['s', 'rx', 'ry', 'rz', 'px', 'py', 'pz', 'flip']) element(id).addEventListener('input', apply)
element('fp').addEventListener('input', syncMode)
element('copy').onclick = async () => {
  try {
    await navigator.clipboard.writeText(element('jsonbox').textContent)
    element('copy-status').textContent = '已复制，可直接写入 gunModel 配置。'
  } catch {
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element('jsonbox'))
    selection.removeAllRanges()
    selection.addRange(range)
    element('copy-status').textContent = '参数已选中，可按 Ctrl+C 复制。'
  }
}

resetInputs()
apply()
const loader = new GLTFLoader()
for (const [key, config] of Object.entries(CONFIG.gunModel)) {
  loader.load(`${import.meta.env.BASE_URL}${config.file}`, (gltf) => {
    models[key] = gltf.scene
    if (key === current) apply()
  }, undefined, () => {
    if (key === current) element('model-status').textContent = '模型加载失败，请检查资源路径。'
  })
}

function render() {
  if (controls.enabled) controls.update()
  renderer.render(scene, element('fp').checked ? firstPersonCamera : camera)
  requestAnimationFrame(render)
}
render()
window.addEventListener('resize', () => {
  for (const view of [camera, firstPersonCamera]) {
    view.aspect = window.innerWidth / window.innerHeight
    view.updateProjectionMatrix()
  }
  renderer.setSize(window.innerWidth, window.innerHeight)
})
if (import.meta.env.DEV) {
  window.__weaponPreview = () => ({ current, modelGroup, gunGroup, scene,
    camera, firstPersonCamera, settings: readSettings() })
}
