import { Raycaster, Vector3, Line3 } from 'three'

export function enemyRoot(object) {
  for (let node = object; node; node = node.parent) if (node.userData.enemyGroup) return node
  return null
}

export class BallisticTargets {
  constructor(getTargets = () => []) {
    this.getTargets = getTargets
    this.previous = new Map()
    this.ray = new Raycaster()
  }

  beginFrame() {
    this.previous.clear()
    for (const mesh of this.getTargets()) {
      const root = enemyRoot(mesh)
      if (root && !this.previous.has(root)) this.previous.set(root, root.getWorldPosition(new Vector3()))
    }
  }

  prepare() {
    const groups = new Map()
    for (const mesh of this.getTargets()) {
      const root = enemyRoot(mesh)
      if (!root || root.userData.enemyRef?.dead) continue
      if (!groups.has(root)) {
        root.updateWorldMatrix(true, true)
        const position = root.getWorldPosition(new Vector3())
        groups.set(root, { root, position, delta: position.clone().sub(this.previous.get(root) || position), meshes: [] })
      }
      groups.get(root).meshes.push(mesh)
    }
    this.groups = [...groups.values()]
  }

  cast(from, to, alpha0 = 0, alpha1 = 1) {
    let nearest = null
    const worldLength = from.distanceTo(to)
    for (const entry of this.groups || []) {
      if (entry.root.userData.enemyRef?.dead) continue
      const start = from.clone().addScaledVector(entry.delta, 1 - alpha0)
      const end = to.clone().addScaledVector(entry.delta, 1 - alpha1)
      const enemy = entry.root.userData.enemyRef
      if (enemy?.height && enemy?.radius) {
        const center = entry.position.clone().add(new Vector3(0, enemy.height / 2, 0))
        const close = new Line3(start, end).closestPointToPoint(center, true, new Vector3())
        if (close.distanceTo(center) > Math.hypot(enemy.radius, enemy.height / 2) + 1) continue
      }
      if (!entry.boundsReady) {
        for (const mesh of entry.meshes) if (mesh.isSkinnedMesh) mesh.computeBoundingSphere()
        entry.boundsReady = true
      }
      const direction = end.clone().sub(start), length = direction.length()
      if (length < 1e-9) continue
      this.ray.set(start, direction.divideScalar(length))
      this.ray.near = 0; this.ray.far = length
      const hit = this.ray.intersectObjects(entry.meshes, false)[0]
      if (!hit) continue
      const fraction = hit.distance / length, distance = worldLength * fraction
      if (!nearest || distance < nearest.distance) nearest = {
        root: entry.root, mesh: hit.object, face: hit.face, distance,
        point: from.clone().lerp(to, fraction),
        normal: hit.face?.normal.clone().transformDirection(hit.object.matrixWorld),
      }
    }
    return nearest
  }
}
