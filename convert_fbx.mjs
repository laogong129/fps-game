import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { readFileSync, writeFileSync, statSync } from 'fs'
import { resolve } from 'path'

if (!globalThis.FileReader) {
  globalThis.FileReader = class {
    constructor() { this.result = null; this.onloadend = null }
    readAsArrayBuffer(blob) {
      blob.arrayBuffer().then((buf) => {
        this.result = buf
        if (this.onloadend) this.onloadend({ target: this })
      })
    }
  }
}

// 让 FBXLoader 里的 TextureLoader 在 Node 下不抛错（我们不真的加载贴图）
function makeStubImg() {
  return {
    style: {}, width: 0, height: 0, naturalWidth: 0, naturalHeight: 0,
    setAttribute() {}, addEventListener() {}, removeEventListener() {},
    set src(v) { this._src = v }, get src() { return this._src },
  }
}
if (!globalThis.document) {
  globalThis.document = {
    createElementNS: (ns, name) => (name.toLowerCase() === 'img' ? makeStubImg() : {}),
    createElement: (name) => (name.toLowerCase() === 'img' ? makeStubImg() : {}),
  }
}
if (!globalThis.Image) globalThis.Image = makeStubImg
// TextureLoader 异步加载落空，直接认为失败，避免报错
THREE.TextureLoader.prototype.load = function (url, onLoad, onProgress, onError) {
  const tex = new THREE.Texture()
  if (onError) setTimeout(() => onError(new Error('skip texture in node')), 0)
  return tex
}

const base = 'C:/Users/Hello/AppData/Roaming/TRAE SOLO CN/ModularData/ai-agent/work-mode-projects/6aa89ef249884c7e1e9d1175/_imports/weapons'

const jobs = [
  { assetDir: 'Pistol.fbx', out: 'pistol.glb' },
  { assetDir: 'Shotgun.FBX', out: 'shotgun.glb' },
  { assetDir: 'LOD0_Whole.FBX', out: 'rifle.glb' },
]

const loader = new FBXLoader()

function normalize(group) {
  const box = new THREE.Box3().setFromObject(group)
  const center = box.getCenter(new THREE.Vector3())
  const size = box.getSize(new THREE.Vector3())
  const longest = Math.max(size.x, size.y, size.z)
  const s = 1.0 / longest
  group.traverse((o) => {
    if (o.isMesh) {
      // 统一材质并剥离贴图
      const geo = o.geometry
      const hasColor = !!geo.attributes.color
      let mat
      if (hasColor && geo.attributes.color.itemSize === 4) {
        mat = new THREE.MeshStandardMaterial({ color: 0xffffff, vertexColors: true })
      } else {
        // 灰色枪身，稍微带金属感
        mat = new THREE.MeshStandardMaterial({
          color: 0x8a8f96, metalness: 0.75, roughness: 0.45,
        })
      }
      // 位置先相对组中心平移并缩放
      o.position.sub(center).multiplyScalar(s)
      o.updateMatrix()
      o.material = mat
    }
  })
  group.position.set(0, 0, 0)
  group.scale.setScalar(1)
  group.updateMatrixWorld(true)
  return { box, center, size, scale: s }
}

for (const job of jobs) {
  try {
    const buf = readFileSync(resolve(base, job.assetDir, 'asset'))
    const obj = loader.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), '')
    const meshes = []
    obj.traverse((o) => { if (o.isMesh) meshes.push(o) })
    const raw = new THREE.Box3()
    meshes.forEach((m) => raw.expandByObject(m))
    const rawC = raw.getCenter(new THREE.Vector3())
    const rawS = raw.getSize(new THREE.Vector3())
    console.log(`\n=== ${job.assetDir} ===`)
    console.log('meshes=', meshes.length, 'verts=', meshes.reduce((s,m)=>s+m.geometry.attributes.position.count,0))
    console.log('rawMin=', raw.min.toArray().map(n=>n.toFixed(2)).join(','), 'rawMax=', raw.max.toArray().map(n=>n.toFixed(2)).join(','))
    console.log('rawSize=', rawS.toArray().map(n=>n.toFixed(2)).join(','), 'rawCenter=', rawC.toArray().map(n=>n.toFixed(2)).join(','))
    const info = normalize(obj)
    console.log('normalized longest=1.0 (scale=%.4f)', info.scale)

    const exporter = new GLTFExporter()
    const glb = await new Promise((res, rej) => exporter.parse(obj, (g)=>res(g), (e)=>rej(e), { binary: true }))
    writeFileSync(resolve(base, job.out), Buffer.from(glb))
    console.log('OK', job.out, statSync(resolve(base, job.out)).size, 'bytes')
  } catch (e) {
    console.error('FAIL', job.assetDir)
    console.error(e.stack)
  }
}