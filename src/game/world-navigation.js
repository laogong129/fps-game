import { Vector3 } from 'three'
import { surfaceHeight } from './railway-geometry.js'
import { flatRouteClear } from './navigation-sweep.js'

const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
const point = (value) => new Vector3(value.x, value.y || 0, value.z)

class Frontier {
  constructor() { this.items = [] }
  push(value) {
    const items = this.items
    items.push(value)
    let index = items.length - 1
    while (index > 0) {
      const parent = (index - 1) >> 1
      if (items[parent].score <= value.score) break
      items[index] = items[parent]; index = parent
    }
    items[index] = value
  }
  pop() {
    const first = this.items[0], last = this.items.pop()
    if (!this.items.length) return first
    let index = 0
    while (index * 2 + 1 < this.items.length) {
      let child = index * 2 + 1
      if (child + 1 < this.items.length && this.items[child + 1].score < this.items[child].score) child++
      if (this.items[child].score >= last.score) break
      this.items[index] = this.items[child]; index = child
    }
    this.items[index] = last
    return first
  }
}

export class WorldNavigation {
  constructor(world, layout, spacing = 2) {
    this.world = world
    this.layout = layout
    this.spacing = spacing
    this.bounds = layout.bounds
    this.grids = new Map()
    this.pathCache = new Map()
    this.surfaces = layout.shapes.filter((shape) => shape.solid !== false && shape.walkable)
  }

  clear(from, to, radius = 0.5, height = 1.8, ignoreBody = 'train') {
    const a = point(from), b = point(to)
    if (flatRouteClear(this.world, this.surfaces, a, b, radius, height, ignoreBody)) return true
    const steps = Math.max(1, Math.ceil(a.distanceTo(b) / 0.12))
    let previous = a.clone()
    for (let i = 0; i <= steps; i++) {
      const at = a.clone().lerp(b, i / steps)
      const result = this.world.moveCharacter(previous, at.clone().sub(previous).setY(0), {
        radius, height, stepHeight: 0.3, snapToGround: true, ignoreBody,
      })
      // Rounded feet briefly lift above a ramp while crossing a deck edge.
      // A nearby legal floor still supports that step; a real gap does not.
      const supported = result.grounded || this.world.querySupport(result.position, {
        radius, height, maxDrop: 0.3, maxRise: 0.025, ignoreBody,
      })
      if (!supported || Math.hypot(result.position.x - at.x, result.position.z - at.z) > 0.025 ||
          Math.abs(result.position.y - at.y) > 0.32) return false
      previous = result.position
    }
    return true
  }

  grid(radius = 0.5, height = 1.8) {
    const key = `${radius.toFixed(2)}:${height.toFixed(2)}`
    if (this.grids.has(key)) return this.grids.get(key)
    const graph = { key, nodes: [], cells: new Map(), radius, height }
    const count = Math.floor(this.bounds * 2 / this.spacing)
    for (let iz = 1; iz < count; iz++) this.addGridRow(graph, iz)
    this.grids.set(key, graph)
    return graph
  }

  addGridRow(graph, iz) {
    const { nodes, cells, radius, height } = graph
    const count = Math.floor(this.bounds * 2 / this.spacing)
    for (let ix = 1; ix < count; ix++) {
      const x = ix * this.spacing - this.bounds
      const z = iz * this.spacing - this.bounds
      const candidates = this.surfaces.map((shape) => ({ shape, y: surfaceHeight(shape, x, z) }))
        .filter((entry) => entry.y !== null).sort((a, b) => a.y - b.y)
      const levels = []
      for (const entry of candidates) {
        const position = new Vector3(x, entry.y, z)
        const support = this.world.querySupport(position, {
          radius, height, maxRise: 0.3, maxDrop: 0.025, ignoreBody: 'train',
        })
        if (!support) continue
        position.copy(support.point)
        if (levels.some((index) => Math.abs(nodes[index].position.y - position.y) < 0.025)) continue
        const index = nodes.length
        nodes.push({ position, ix, iz, surfaceId: entry.shape.id, neighbors: null })
        levels.push(index)
      }
      if (levels.length) cells.set(`${ix},${iz}`, levels)
    }
  }

  nearest(value, graph, connect = false) {
    const at = point(value)
    let best = -1, distance = Infinity
    const ix = Math.round((at.x + this.bounds) / this.spacing)
    const iz = Math.round((at.z + this.bounds) / this.spacing)
    for (let ring = 0; ring <= 8; ring++) {
      for (let dz = -ring; dz <= ring; dz++) for (let dx = -ring; dx <= ring; dx++) {
        if (ring && Math.abs(dx) !== ring && Math.abs(dz) !== ring) continue
        for (const index of graph.cells.get(`${ix + dx},${iz + dz}`) || []) {
          const candidate = graph.nodes[index].position
          const vertical = Math.abs(candidate.y - at.y)
          const score = (candidate.x - at.x) ** 2 + (candidate.z - at.z) ** 2 + vertical * vertical * 4
          if (score < distance && (!connect || this.clear(at, candidate, graph.radius, graph.height))) {
            distance = score; best = index
          }
        }
      }
      if (best >= 0 && ring * ring * this.spacing * this.spacing > distance + this.spacing * this.spacing) break
    }
    return best
  }

  neighbors(index, graph) {
    const node = graph.nodes[index]
    if (node.neighbors) return node.neighbors
    node.neighbors = []
    for (const [dx, dz] of directions) {
      for (const next of graph.cells.get(`${node.ix + dx},${node.iz + dz}`) || []) {
        const position = graph.nodes[next].position
        if (Math.abs(position.y - node.position.y) > this.spacing * 0.75) continue
        if (this.clear(node.position, position, graph.radius, graph.height)) node.neighbors.push(next)
      }
    }
    return node.neighbors
  }

  findPath(from, to, radius = 0.5, height = 1.8) {
    if (this.clear(from, to, radius, height)) return [point(to)]
    const graph = this.grid(radius, height)
    const start = this.nearest(from, graph, true), goal = this.nearest(to, graph)
    if (start < 0 || goal < 0) return []
    const cacheKey = `${graph.key}:${start}:${goal}`
    const cached = this.pathCache.get(cacheKey)
    if (cached && (!cached.length || this.clear(from, cached[0], radius, height))) {
      return cached.length ? this.resolvePath(cached, from, to, graph) : []
    }
    const cost = new Float64Array(graph.nodes.length).fill(Infinity)
    const parent = new Int32Array(graph.nodes.length).fill(-1)
    const closed = new Uint8Array(graph.nodes.length)
    const frontier = new Frontier()
    const approachAllowed = this.layout.shapes.some((shape) => shape.climbable &&
      ['crate', 'cover', 'vault-fence', 'parkour-prop'].includes(shape.category) &&
      Math.abs((surfaceHeight(shape, to.x, to.z) ?? -Infinity) - to.y) < 0.05)
    let approach = -1, approachDistance = Infinity
    cost[start] = 0
    frontier.push({ index: start, score: 0 })
    while (frontier.items.length) {
      const current = frontier.pop().index
      if (closed[current]) continue
      if (current === goal) {
        return this.finishPath(graph, start, goal, parent, from, to, cacheKey)
      }
      closed[current] = 1
      const position = graph.nodes[current].position
      const distance = position.distanceTo(to)
      if (approachAllowed && Math.abs(position.y - to.y) <= 2 && distance <= radius + 2.5 && distance < approachDistance) {
        approach = current; approachDistance = distance
      }
      for (const next of this.neighbors(current, graph)) {
        if (closed[next]) continue
        const nextCost = cost[current] + graph.nodes[current].position.distanceTo(graph.nodes[next].position)
        if (nextCost >= cost[next]) continue
        cost[next] = nextCost
        parent[next] = current
        frontier.push({ index: next, score: nextCost + graph.nodes[next].position.distanceTo(graph.nodes[goal].position) })
      }
    }
    if (approach >= 0) return this.finishPath(graph, start, approach, parent, from, to, cacheKey)
    this.pathCache.set(cacheKey, [])
    return []
  }

  finishPath(graph, start, goal, parent, from, to, cacheKey) {
    const path = []
    for (let index = goal; index !== start && index >= 0; index = parent[index]) path.unshift(graph.nodes[index].position.clone())
    path.unshift(graph.nodes[start].position.clone())
    const first = graph.nodes[start].position.clone()
    const canonical = [first, ...this.simplify(path.slice(1), first, graph.radius, graph.height)]
    if (this.pathCache.size >= 512) this.pathCache.delete(this.pathCache.keys().next().value)
    this.pathCache.set(cacheKey, canonical)
    return this.resolvePath(canonical, from, to, graph)
  }

  resolvePath(canonical, from, to, graph) {
    const path = [...canonical]
    if (this.clear(path.at(-1), to, graph.radius, graph.height)) path.push(point(to))
    return this.simplify(path, from, graph.radius, graph.height).map((p) => p.clone())
  }

  prewarm(profiles = [[0.42, 1.7], [1.136, 1.6], [2.13, 3.9]]) {
    for (const [radius, height] of profiles) this.grid(radius, height)
  }

  async prepare(profiles, onProgress = () => {}, { budgetMs = 8 } = {}) {
    const rows = Math.floor(this.bounds * 2 / this.spacing) - 1
    const graphs = [], unique = new Map(profiles.map(([radius, height]) =>
      [`${radius.toFixed(2)}:${height.toFixed(2)}`, [radius, height]]))
    const totalRows = rows * unique.size
    let completedRows = 0, deadline = performance.now() + budgetMs
    const yieldWork = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
      deadline = performance.now() + budgetMs
    }
    for (const [key, [radius, height]] of unique) {
      let graph = this.grids.get(key)
      if (!graph) {
        graph = { key, nodes: [], cells: new Map(), radius, height }
        for (let iz = 1; iz <= rows; iz++) {
          this.addGridRow(graph, iz)
          completedRows++
          if (performance.now() >= deadline) {
            onProgress({ phase: 'grid', ratio: completedRows / totalRows * 0.15 })
            await yieldWork()
          }
        }
        this.grids.set(key, graph)
      } else completedRows += rows
      graphs.push(graph)
    }
    const total = graphs.reduce((sum, graph) => sum + graph.nodes.length, 0)
    let completed = 0
    for (const graph of graphs) for (let index = 0; index < graph.nodes.length; index++) {
      this.neighbors(index, graph)
      completed++
      if (performance.now() >= deadline) {
        onProgress({ phase: 'links', ratio: 0.15 + completed / total * 0.85, completed, total })
        await yieldWork()
      }
    }
    onProgress({ phase: 'ready', ratio: 1, completed, total })
  }

  simplify(path, from, radius, height) {
    const result = []
    let origin = point(from), cursor = 0
    while (cursor < path.length) {
      let next = cursor
      while (next + 1 < path.length && this.clear(origin, path[next + 1], radius, height)) next++
      result.push(path[next])
      origin = path[next]
      cursor = next + 1
    }
    return result
  }

  nearestReachableSpawn(player, { minDistance = 25, maxDistance = 40, radius = 0.5, height = 1.8 } = {}) {
    return this.layout.spawnPoints.filter((spawn) => {
      const candidate = point(spawn)
      const distance = candidate.distanceTo(player)
      return distance >= minDistance && distance <= maxDistance &&
        this.world.capsuleClear(candidate.clone().add(new Vector3(0, 0.003, 0)), radius, height, 'train') &&
        this.findPath(candidate, player, radius, height).length > 0
    })
  }
}
