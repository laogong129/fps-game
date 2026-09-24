import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const canvas = document.getElementById('c')
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x20242e)
scene.fog = new THREE.Fog(0x20242e, 8, 24)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 50)
camera.position.set(1.3, 0.9, 3.6)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.maxPolarAngle = Math.PI / 2

const grid = new THREE.GridHelper(20, 20, 0x55617a, 0x39414f)
grid.position.y = -0.6
scene.add(grid)
const floorP = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshBasicMaterial({ color: 0x2b3140, side: THREE.DoubleSide }))
floorP.rotation.x = Math.PI / 2
floorP.position.y = -0.62
scene.add(floorP)
const light = new THREE.DirectionalLight(0xffffff, 1.2)
light.position.set(2, 4, 3)
scene.add(light)
scene.add(new THREE.AmbientLight(0xffffff, 0.5))

// 枪摆放在场景中供自由观察（模拟游戏 gunGroup 位置）
const modelRig = new THREE.Group()
modelRig.position.set(0, -0.4, -2.6)
scene.add(modelRig)

// 第一人称虚拟 gunGroup（游戏里 camera 的子物体位置）
const camRig = new THREE.Group()
scene.add(camRig)
const vcam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 50)
camRig.add(vcam)
const gunGroup = new THREE.Group()
gunGroup.position.set(0.25, -0.4, -0.5)
vcam.add(gunGroup)

const fpCrosshair = document.getElementById('crosshair')
fpCrosshair.style.display = 'none'

const GUNS = {
  pistol: { file: 'assets/models/weapons/pistol.glb', label: '手枪' },
  shotgun: { file: 'assets/models/weapons/shotgun.glb', label: '霰弹枪' },
  rifle: { file: 'assets/models/weapons/rifle.glb', label: '步枪' },
}

const models = {}
let current = 'pistol'
let modelGroup = null

const loader = new GLTFLoader()
for (const [key, g] of Object.entries(GUNS)) {
  loader.load(g.file, (gltf) => {
    const root = new THREE.Group()
    root.add(gltf.scene)
    models[key] = root
    if (key === current) attach()
  })
}

function attach() {
  if (modelGroup) { modelRig.remove(modelGroup); gunGroup.remove(modelGroup); modelGroup = null }
  modelGroup = models[current] ? models[current].clone(true) : null
  if (!modelGroup) return
  // 默认放在自由观察位
  modelRig.add(modelGroup)
  apply()
  syncMode()
}

function deg(v) { return v * (3.14159 / 180) }

function apply() {
  if (!modelGroup) return
  const s = parseFloat(document.getElementById('s').value)
  let ry = parseFloat(document.getElementById('ry').value)
  if (document.getElementById('flip').checked) ry += 180
  const rx = parseFloat(document.getElementById('rx').value)
  const rz = parseFloat(document.getElementById('rz').value)
  const px = parseFloat(document.getElementById('px').value)
  const py = parseFloat(document.getElementById('py').value)
  const pz = parseFloat(document.getElementById('pz').value)
  modelGroup.scale.setScalar(s)
  modelGroup.rotation.set(deg(rx), deg(ry), deg(rz))
  modelGroup.position.set(px, py, pz)
  updateJSON({ s, rx, ry, rz, px, py, pz })
}

function syncMode() {
  const fp = document.getElementById('fp').checked
  if (fp && modelGroup) {
    if (modelRig.children.includes(modelGroup)) modelRig.remove(modelGroup)
    if (!gunGroup.children.includes(modelGroup)) gunGroup.add(modelGroup)
    modelRig.matrixWorldAutoUpdate = false
    controls.enabled = false
    vcam.lookAt(0, 0, -4)
    fpCrosshair.style.display = 'block'
    // 第一人称下强制第一人称相机
    camera.position.set(1.3, 0.9, 3.6)
    controls.target.copy(modelRig.position)
    controls.update()
  } else {
    if (gunGroup.children.includes(modelGroup)) gunGroup.remove(modelGroup)
    if (!modelRig.children.includes(modelGroup)) modelRig.add(modelGroup)
    controls.enabled = true
    fpCrosshair.style.display = 'none'
  }
}

function updateJSON(v) {
  const flip = document.getElementById('flip').checked
  document.getElementById('s_v').textContent = v.s.toFixed(2)
  document.getElementById('rx_v').textContent = v.rx + '°'
  document.getElementById('ry_v').textContent = v.ry + '°'
  document.getElementById('rz_v').textContent = v.rz + '°'
  document.getElementById('px_v').textContent = v.px.toFixed(2)
  document.getElementById('py_v').textContent = v.py.toFixed(2)
  document.getElementById('pz_v').textContent = v.pz.toFixed(2)
  const json = {
    file: GUNS[current].file,
    scale: +v.s.toFixed(3),
    rot: [+v.rx.toFixed(1), +v.ry.toFixed(1), +v.rz.toFixed(1)],
    pos: [+v.px.toFixed(3), +v.py.toFixed(3), +v.pz.toFixed(3)],
    flip: flip,
  }
  document.getElementById('jsonbox').textContent = JSON.stringify(json, null, 2)
}

const tabs = document.getElementById('tabs')
for (const [key, g] of Object.entries(GUNS)) {
  const b = document.createElement('button')
  b.textContent = g.label
  b.classList.toggle('on', key === current)
  b.onclick = () => { current = key; attach(); tabs.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on') }
  tabs.appendChild(b)
}

for (const id of ['s', 'rx', 'ry', 'rz', 'px', 'py', 'pz', 'flip', 'fp']) {
  document.getElementById(id).addEventListener('input', () => {
    if (current && models[current]) { apply(); syncMode() }
  })
}

let activeCam = camera
function render() {
  const fp = document.getElementById('fp').checked
  controls.update()
  activeCam = fp ? vcam : camera
  renderer.render(scene, activeCam)
  requestAnimationFrame(render)
}
render()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  vcam.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  vcam.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})