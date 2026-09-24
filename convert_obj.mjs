import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { readFileSync, writeFileSync, statSync } from 'fs'
import { resolve } from 'path'

// 浏览器 FileReader polyfill（three GLTFExporter 的 binary 模式依赖）
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

const base = 'C:/Users/Hello/AppData/Roaming/TRAE SOLO CN/ModularData/ai-agent/work-mode-projects/6aa89ef249884c7e1e9d1175/_imports/weapons'

const jobs = [
  { assetDir: 'Sniper.obj', name: 'Sniper', out: 'sniper.glb' },
]

function parseObjGeometry(text) {
  const v = [], vn = [], vt = []
  const pos = [], nor = [], uv = [], idx = []
  const posCache = new Map()
  let vertCount = 0
  const lut = new Map()

  const lines = text.split(/\r?\n/)
  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line[0] === '#') continue
    const parts = line.split(/\s+/)
    const type = parts[0]
    if (type === 'v') v.push(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
    else if (type === 'vn') vn.push(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]))
    else if (type === 'vt') vt.push(parseFloat(parts[1]), parseFloat(parts[2]))
    else if (type === 'f') {
      const verts = parts.slice(1)
      // 三角扇
      const tri = [verts[0], verts[1], verts[2]]
      for (const c of [verts[0], verts[2], verts[3]]) {
        if (verts.length >= 4 && c === verts[3]) tri.push(verts[3])
      }
      const addVerts = verts.length === 3 ? tri : [verts[0], verts[1], verts[2], verts[2], verts[3], verts[0]]
      for (const t of addVerts) {
        const key = t
        let gi = lut.get(key)
        if (gi === undefined) {
          const bits = t.split('/')
          const vi = parseInt(bits[0]) - 1
          pos.push(v[vi*3], v[vi*3+1], v[vi*3+2])
          if (bits[1]) { const ti = parseInt(bits[1])-1; uv.push(vt[ti*2], 1-vt[ti*2+1]) }
          else uv.push(0,0)
          if (bits[2]) { const ni = parseInt(bits[2])-1; nor.push(vn[ni*3], vn[ni*3+1], vn[ni*3+2]) }
          else nor.push(0,1,0)
          gi = vertCount++
          lut.set(key, gi)
        }
        idx.push(gi)
      }
    }
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  if (uv.length) geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2))
  geo.setIndex(idx)
  geo.computeVertexNormals()
  return geo
}

for (const job of jobs) {
  try {
    const text = readFileSync(resolve(base, job.assetDir, 'asset'), 'utf8')
    const geo = parseObjGeometry(text)
    const mat = new THREE.MeshBasicMaterial({ color: 0x9aa0a8 })
    const mesh = new THREE.Mesh(geo, mat)
    const group = new THREE.Group().add(mesh)
    const box = new THREE.Box3().setFromObject(group)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())
    const scale = 2.0 / Math.max(size.x, size.y, size.z)
    group.scale.setScalar(scale)
    group.position.sub(center.clone().multiplyScalar(scale))
    const exporter = new GLTFExporter()
    const glb = await new Promise((res, rej) => exporter.parse(group, (g)=>res(g),(e)=>rej(e), {binary:true}))
    writeFileSync(resolve(base, job.out), Buffer.from(glb))
    console.log('OK', job.name, 'verts=', geo.attributes.position.count, '->', statSync(resolve(base, job.out)).size, 'bytes')
  } catch (e) {
    console.error('FAIL', job.name, e.stack)
  }
}