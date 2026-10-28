import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CONFIG } from '../config.js'
import { makeToon } from './style.js'

export function normalizeWeaponModel(source, config) {
  const oriented = new THREE.Group()
  oriented.add(source.clone(true))
  oriented.rotation.set(...config.sourceRot.map((angle) => THREE.MathUtils.degToRad(angle)))
  const original = new THREE.Box3().setFromObject(oriented)
  const length = original.getSize(new THREE.Vector3()).z
  if (!Number.isFinite(length) || length <= 0 || !(config.length > 0)) return null
  oriented.scale.setScalar(config.length / length)
  const scaled = new THREE.Box3().setFromObject(oriented)
  const center = scaled.getCenter(new THREE.Vector3())
  oriented.position.set(-center.x, -center.y, -scaled.max.z)
  const viewModel = new THREE.Group()
  viewModel.add(oriented)
  viewModel.rotation.set(...config.rot.map((angle) => THREE.MathUtils.degToRad(angle)))
  viewModel.position.set(...config.pos)
  viewModel.userData.__glb = true
  viewModel.traverse((object) => {
    if (object.isMesh) { object.castShadow = false; object.receiveShadow = false }
  })
  return viewModel
}

export function syncViewModelFov(group, fov, basePosition, baseFov = CONFIG.view.fov) {
  const ratio = Math.tan(THREE.MathUtils.degToRad(fov / 2)) / Math.tan(THREE.MathUtils.degToRad(baseFov / 2))
  group.scale.set(ratio, ratio, 1)
  group.position.x = basePosition.x * ratio
  group.position.y = basePosition.y * ratio
}

export class WeaponModel {
  constructor(player) {
    this.player = player
    this.models = {}
    this.basePosition = player.gunGroup.position.clone()
  }

  syncPerspective() { syncViewModelFov(this.player.gunGroup, this.player.camera.fov, this.basePosition) }

  getMuzzleWorld(out = new THREE.Vector3()) {
    this.player.gunGroup.updateWorldMatrix(true, true)
    const muzzle = this.player.gunModel?.getObjectByName('Muzzle')
    return muzzle ? muzzle.getWorldPosition(out) : this.player.gunGroup.localToWorld(out.set(0, 0, -0.42))
  }

  preload(keys, onReady) {
    for (const key of keys) {
      const cfg = CONFIG.gunModel[key]
      if (!cfg) continue
      new GLTFLoader().load(cfg.file, (gltf) => {
        this.models[key] = gltf.scene
        onReady()
      }, undefined, (err) => console.warn('加载枪模失败', key, err))
    }
  }

  update(key) {
    const old = this.player.gunModel
    if (old) {
      this.player.gunGroup.remove(old)
      if (!old.userData.__glb) old.traverse((o) => {
        if (!o.isMesh) return
        o.geometry.dispose()
        const materials = Array.isArray(o.material) ? o.material : [o.material]
        materials.forEach((m) => m.dispose())
      })
    }
    const cfg = CONFIG.gunModel[key]
    const src = this.models[key]
    let group = src && cfg ? normalizeWeaponModel(src, cfg) : null
    if (!group) {
      group = new THREE.Group()
      for (const part of CONFIG.gunShape[key] || []) {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(...part.size), makeToon(part.color))
        mesh.position.set(...part.pos)
        group.add(mesh)
      }
      const bounds = new THREE.Box3().setFromObject(group)
      const muzzle = new THREE.Object3D()
      muzzle.name = 'Muzzle'
      muzzle.position.set((bounds.min.x + bounds.max.x) / 2, bounds.max.y - 0.05, bounds.min.z)
      group.add(muzzle)
    }
    this.player.gunGroup.add(group)
    this.player.gunModel = group
  }
}
