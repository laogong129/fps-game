import * as THREE from 'three'
import { CONFIG } from '../config.js'

export class SpawnWarnings {
  constructor(scene) {
    this.group = new THREE.Group()
    scene.add(this.group)
  }

  add(desc) {
    const def = CONFIG.enemy.spawnMarker
    const ring = new THREE.Mesh(new THREE.RingGeometry(def.ringInner, def.ringOuter, 32),
      new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }))
    ring.rotation.x = -Math.PI / 2
    ring.position.set(desc.pos.x, desc.pos.y + 0.03, desc.pos.z)
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(def.ringInner, def.ringInner, def.pillarHeight, 20, 1, true),
      new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false }))
    pillar.position.set(desc.pos.x, desc.pos.y + def.pillarHeight / 2, desc.pos.z)
    const group = new THREE.Group()
    group.add(ring, pillar)
    group.userData = { age: 0, desc }
    this.group.add(group)
    return group
  }

  update(dt, materialize) {
    for (const marker of [...this.group.children]) {
      marker.userData.age += dt
      const age = marker.userData.age
      const pulse = 1 + Math.sin(age * 10) * 0.18
      marker.children[0].scale.set(pulse, 1, pulse)
      if (age >= CONFIG.enemy.spawnWarningTime) {
        materialize(marker.userData.desc)
        this.remove(marker)
      }
    }
  }

  remove(marker) {
    this.group.remove(marker)
    for (const mesh of marker.children) {
      mesh.geometry.dispose()
      mesh.material.dispose()
    }
  }

  clear() {
    for (const marker of [...this.group.children]) this.remove(marker)
  }
}
