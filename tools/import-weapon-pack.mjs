import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve, join } from 'node:path'
import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js'
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js'

const archive = resolve('.cache/weapon-assets/quaternius-ultimate-guns.zip')
const expectedHash = '6bbae4cd42a520bd2ed95881394293e90804a63abdaf121e3b55fa08b7311737'
const bytes = await readFile(archive)
if (createHash('sha256').update(bytes).digest('hex') !== expectedHash) throw new Error('Unexpected source archive')
const input = resolve(process.argv[2] || '.cache/weapon-assets/quaternius-ultimate-guns/Ultimate Gun Pack - July 2019/OBJ')
const output = resolve('public/assets/models/weapons')
await mkdir(output, { recursive: true })

globalThis.FileReader ||= class {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((value) => { this.result = value; this.onloadend?.() })
  }
}

const palette = {
  Black: [0.035, 0.042, 0.052], DarkMetal: [0.065, 0.08, 0.095],
  Metal: [0.11, 0.135, 0.155], LightMetal: [0.17, 0.19, 0.21],
  Wood: [0.20, 0.11, 0.065], DarkWood: [0.105, 0.062, 0.04],
  Main: [0.09, 0.115, 0.135], MainDark: [0.035, 0.045, 0.06], MainLight: [0.15, 0.17, 0.19],
}
const models = [
  ['Pistol_2', 'railway-pistol.glb'],
  ['Shotgun_2', 'railway-pump-shotgun.glb'],
  ['AssaultRifle2_4', 'railway-carbine.glb'],
]
const rotation = new THREE.Matrix4().makeRotationY(Math.PI / 2)
const report = []
for (const [name, filename] of models) {
  const materials = new MTLLoader().parse(await readFile(join(input, `${name}.mtl`), 'utf8'), '')
  materials.preload()
  const source = new OBJLoader().setMaterials(materials).parse(await readFile(join(input, `${name}.obj`), 'utf8'))
  const root = new THREE.Group()
  root.name = filename.replace('.glb', '')
  root.userData = { author: 'Quaternius', sourceModel: name,
    license: 'CC0-1.0', source: 'https://quaternius.com/packs/ultimategun.html' }
  const vertices = []
  source.updateMatrixWorld(true)
  source.traverse((object) => {
    if (!object.isMesh) return
    const geometry = object.geometry.clone().applyMatrix4(object.matrixWorld)
    const positions = geometry.attributes.position
    for (let index = 0; index < positions.count; index++) vertices.push(new THREE.Vector3().fromBufferAttribute(positions, index))
    geometry.applyMatrix4(rotation)
    geometry.computeVertexNormals()
    const replacements = (Array.isArray(object.material) ? object.material : [object.material]).map((material) => {
      const color = palette[material.name] ? new THREE.Color(...palette[material.name]) : material.color.clone()
      const wooden = /Wood/.test(material.name)
      return new THREE.MeshStandardMaterial({ name: material.name, color, flatShading: true,
        roughness: wooden ? 0.8 : 0.64, metalness: wooden || material.name === 'Black' ? 0.02 : 0.24 })
    })
    root.add(new THREE.Mesh(geometry, replacements.length > 1 ? replacements : replacements[0]))
  })
  const tip = Math.max(...vertices.map((point) => point.x))
  const tipVertices = vertices.filter((point) => point.x > tip - 0.003)
  const center = tipVertices.reduce((sum, point) => sum.add(point), new THREE.Vector3()).divideScalar(tipVertices.length)
  const muzzle = new THREE.Object3D()
  muzzle.name = 'Muzzle'
  muzzle.position.copy(center).applyMatrix4(rotation)
  root.add(muzzle)
  const data = await new GLTFExporter().parseAsync(root, { binary: true, onlyVisible: true })
  await writeFile(join(output, filename), Buffer.from(data))
  report.push({ source: name, file: filename, bytes: data.byteLength, triangles: vertices.length / 3,
    muzzle: muzzle.position.toArray(), size: new THREE.Box3().setFromObject(root).getSize(new THREE.Vector3()).toArray() })
}
console.log(JSON.stringify(report, null, 2))
