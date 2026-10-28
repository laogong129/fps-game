import { addStreetDetails, addRoofStructures } from './railway-street-details.js'
import { addStationDetails } from './railway-station-details.js'

const colors = {
  ground: 0x37333d, road: 0x41424a, concrete: 0x8b8790, roof: 0x3d414c,
  cream: 0xb9a69a, pink: 0xb88a8e, blue: 0x718290, wood: 0x766052,
  metal: 0x5c6674, yellow: 0xf1c779, grass: 0x535d59,
}

export function createRailwayLayout() {
  const shapes = []
  let serial = 0
  const box = (id, x, top, z, width, height, depth, color, extra = {}) => {
    const shape = { id, type: 'box', x, y: top - height / 2, z, width, height, depth,
      color, solid: true, walkable: true, climbable: true, ...extra }
    shapes.push(shape)
    return shape
  }
  const detail = (id, x, top, z, width, height, depth, color, extra = {}) =>
    box(id, x, top, z, width, height, depth, color, { solid: false, walkable: false, climbable: false, decorative: true, instanced: true, ...extra })
  const ramp = (id, x, z, width, depth, height, riseAxis, riseSign, base = 0) => {
    const shape = { id, type: 'ramp', x, y: base + height / 2, z, width, height, depth,
      riseAxis, riseSign, color: colors.concrete, solid: true, walkable: true, climbable: false }
    shapes.push(shape)
    return shape
  }
  const building = (id, x, z, width, depth, height, color) => {
    box(id, x, height, z, width, height, depth, color, { walkable: false, climbable: false, category: 'building' })
    box(`${id}-roof`, x, height + 0.25, z, width + 0.7, 0.25, depth + 0.7, colors.roof,
      { walkable: false, climbable: false, category: 'roof' })
    if (id.startsWith('residence') || id === 'west-store' || id === 'corner-shop') {
      for (const sign of [-1, 1]) {
        const roof = ramp(`${id}-gable-${sign}`, x, z + sign * (depth + 0.7) / 4,
          width + 0.7, (depth + 0.7) / 2, 0.9, 'z', -sign, height + 0.25)
        Object.assign(roof, { color: colors.roof, walkable: false, climbable: false, category: 'roof' })
      }
    }
    detail(`${id}-fascia`, x, height - 0.7, z - depth / 2 - 0.04, width * 0.82, 0.65, 0.07, colors.wood)
    const windows = Math.max(2, Math.floor(width / 2.8))
    for (let i = 0; i < windows; i++) {
      const wx = x + (i - (windows - 1) / 2) * 2.6
      detail(`${id}-window-${i}`, wx, 2.7, z - depth / 2 - 0.055, 1.55, 1.0, 0.08, 0xf5c18b, { emissive: 0xb56a39 })
    }
    detail(`${id}-shutter`, x + width / 2 - 1.5, 2.6, z - depth / 2 - 0.08, 1.6, 2.6, 0.1, 0x6d707b)
  }

  box('street-ground', 0, 0, 0, 120, 0.6, 120, colors.ground, { climbable: false, category: 'ground' })
  for (const [x, z, w, d] of [[0, 0, 120, 12], [0, -31, 114, 9], [0, 34, 114, 9], [-34, 0, 10, 114], [36, 0, 10, 114]]) {
    detail(`asphalt-${serial++}`, x, 0.015, z, w, 0.015, d, colors.road)
  }
  for (const z of [-31, 34]) for (let x = -54; x <= 54; x += 8) {
    detail(`road-dash-${serial++}`, x, 0.025, z, 3.2, 0.01, 0.12, 0xc4b8a3)
  }
  for (const x of [-34, 36]) for (let z = -52; z <= 52; z += 8) {
    if (Math.abs(z) < 8) continue
    detail(`avenue-dash-${serial++}`, x, 0.025, z, 0.12, 0.01, 3.2, 0xc4b8a3)
  }
  for (const sign of [-1, 1]) {
    box(`boundary-x-${sign}`, sign * 60, 3.8, 0, 0.5, 3.8, 120, colors.metal, { walkable: false, climbable: false })
    box(`boundary-z-${sign}`, 0, 3.8, sign * 60, 120, 3.8, 0.5, colors.metal, { walkable: false, climbable: false })
  }

  building('residence-a', -45, -44, 13, 10, 6.5, colors.cream)
  building('residence-b', -23, -43, 12, 11, 5.5, colors.pink)
  building('residence-c', -48, -22, 10, 12, 5.2, colors.blue)
  building('corner-shop', -23, -20, 12, 8, 4.4, colors.cream)
  building('station-office', 44, -39, 16, 11, 5.4, colors.cream)
  building('station-shop', 24, -48, 13, 8, 4.8, colors.pink)
  building('west-store', -48, 44, 10, 10, 5.1, colors.blue)
  building('yard-office', 48, 45, 10, 9, 5.4, colors.cream)
  building('yard-shed', 50, 23, 10, 12, 4.8, colors.wood)

  const stations = [-42, 42].map((x) => {
    const id = x < 0 ? 'west' : 'east'
    const boardingPoints = []
    for (const sign of [-1, 1]) {
      box(`${id}-platform-${sign}`, x, 1, sign * 3.95, 30, 1, 4, colors.concrete, { category: 'platform' })
      ramp(`${id}-platform-ramp-${sign}`, x < 0 ? x + 2 : x, sign * 10, 6, 8, 1, 'z', -sign)
      detail(`${id}-platform-edge-${sign}`, x, 1.018, sign * 2.2, 30, 0.018, 0.22, colors.yellow)
      for (const offset of [-6, 6]) boardingPoints.push({ x: x + offset, y: 1, z: sign * 2.15 })
    }
    box(`${id}-roof-dock`, x - 6, 3.5, 8, 5, 0.22, 12, colors.metal, { category: 'roof-dock' })
    const direction = x < 0 ? 1 : -1
    const dockX = x - 6
    const endX = dockX + direction * 16
    box(`${id}-roof-walkway`, (dockX + endX) / 2, 3.5, 10, 21, 0.22, 8, colors.metal, { category: 'roof-dock' })
    if (x < 0) ramp(`${id}-roof-ramp`, endX + direction * 10.5, 10, 16, 5, 3.5, 'x', -direction)
    else ramp(`${id}-roof-ramp`, endX, 21, 5, 14, 3.5, 'z', -1)
    for (const sx of [-1, 1]) box(`${id}-dock-column-${sx}`, x - 6 + sx * 2.25, 3.28, 11.5,
      0.3, 3.28, 0.3, colors.metal, { walkable: false, climbable: false })
    return { id, x, z: 0, platformY: 1, roofY: 3.5, boardingPoints,
      roofBoardingPoints: [{ x: x - 6, y: 3.5, z: 2.15 }],
      platforms: [-1, 1].map((sign) => ({ x, z: sign * 3.95, width: 30, depth: 4 })) }
  })

  box('footbridge-deck', 10, 6, 0, 6, 0.2, 28, colors.concrete, { category: 'bridge' })
  ramp('footbridge-north-ramp', 10, -24, 6, 20, 6, 'z', 1)
  ramp('footbridge-south-ramp', 10, 24, 6, 20, 6, 'z', -1)
  for (const sign of [-1, 1]) {
    box(`footbridge-rail-${sign}`, 10 + sign * 3.05, 6.95, 0, 0.1, 0.1, 28, colors.metal,
      { walkable: false, climbable: false })
    box(`footbridge-lower-rail-${sign}`, 10 + sign * 3.05, 6.35, 0, 0.08, 0.08, 28, colors.metal,
      { walkable: false, climbable: false })
    for (let z = -13; z <= 13; z += 2.6) shapes.push({ id: `bridge-post-${sign}-${z.toFixed(1)}`,
      type: 'cylinder', x: 10 + sign * 3.05, y: 6.45, z, radius: 0.055, height: 0.9,
      color: colors.metal, solid: true, walkable: false, climbable: false })
    for (const direction of [-1, 1]) for (let i = 0; i < 10; i++) {
      const z = direction * (15 + i * 2)
      const top = 6 * (34 - Math.abs(z)) / 20 + 0.95
      box(`ramp-rail-${sign}-${direction}-${i}`, 10 + sign * 3.05, top, z, 0.12, 0.1, 2.06, colors.metal,
        { walkable: false, climbable: false })
      box(`ramp-lower-rail-${sign}-${direction}-${i}`, 10 + sign * 3.05, top - 0.6, z, 0.1, 0.08, 2.06, colors.metal,
        { walkable: false, climbable: false })
      shapes.push({ id: `ramp-post-${sign}-${direction}-${i}`, type: 'cylinder', x: 10 + sign * 3.05,
        y: top - 0.5, z, radius: 0.055, height: 0.9, color: colors.metal, solid: true, walkable: false, climbable: false })
    }
  }

  box('plaza-terrace', -32, 2.4, 28, 18, 2.4, 14, colors.concrete, { category: 'terrace' })
  ramp('plaza-ramp-west', -47, 28, 12, 6, 2.4, 'x', 1)
  ramp('plaza-ramp-east', -17, 28, 12, 6, 2.4, 'x', -1)
  box('maintenance-deck', 32, 3.6, 33, 16, 0.3, 16, colors.metal, { category: 'terrace' })
  ramp('maintenance-ramp-north', 32, 18, 6, 14, 3.6, 'z', 1)
  ramp('maintenance-ramp-south', 32, 48, 6, 14, 3.6, 'z', -1)
  for (const x of [25, 39]) for (const z of [26, 40]) {
    box(`maintenance-leg-${x}-${z}`, x, 3.3, z, 0.4, 3.3, 0.4, colors.metal, { walkable: false, climbable: false })
  }
  const crates = [[-13, -10, 1], [-18, -33, 1.1], [22, -22, 1.65], [44, -19, 1.0], [-42, 13, 1.6],
    [-20, 39, 1.0], [22, 45, 1.1], [43, 33, 1.6], [-6, 44, 1.1], [45, -51, 1.5]]
  for (const [x, z, h] of crates) box(`parkour-crate-${serial++}`, x, h, z, 2, h, 2, colors.wood, { category: 'crate' })
  for (const [x, z] of [[-7, -22], [23, -15], [-15, 17], [44, 15], [-47, -8], [49, 9]]) {
    box(`street-cover-${serial++}`, x, 1.2, z, 3.5, 1.2, 1.2, colors.concrete, { category: 'cover' })
  }
  for (const [x, z, axis] of [[-34, -31, 'x'], [-34, 34, 'x'], [36, -31, 'x'], [36, 34, 'x']]) {
    for (const sign of [-1, 1]) box(`curb-${serial++}`, x, 0.12, z + sign * 5.1,
      axis === 'x' ? 14 : 0.3, 0.12, axis === 'x' ? 0.3 : 14, colors.concrete, { category: 'curb' })
  }
  for (const [x, z] of [[-31, -7.6], [53, -7.6], [-18, -26], [45, 14]]) {
    box(`vending-${serial++}`, x, 1.85, z, 1.15, 1.85, 0.85, 0x9c4e50, { category: 'parkour-prop' })
    detail(`vending-face-${serial++}`, x - 0.15, 1.62, z - 0.44, 0.65, 1.15, 0.04, 0xbdd1d4, { emissive: 0x739ba2 })
  }
  for (const [x, z, w] of [[-35, -18, 4], [-18, -36, 8], [45, -27, 9], [-28, 44, 9], [18, 42, 7]]) {
    box(`vault-fence-${serial++}`, x, 1.05, z, w, 1.05, 0.18, 0x767780, { category: 'vault-fence' })
  }
  for (let x = -57; x <= 57; x += 0.85) detail(`sleeper-${serial++}`, x, 0.055, 0, 0.24, 0.055, 3, colors.wood)
  for (const z of [-0.74, 0.74]) detail(`track-${z}`, 0, 0.075, z, 120, 0.075, 0.09, 0x9f9b99)
  for (const x of [-35, 0, 35]) {
    detail(`crossing-${x}`, x, 0.09, 0, 5.2, 0.025, 4.4, colors.concrete)
    for (const z of [-5.5, 5.5]) for (let line = 0; line < 6; line++) {
      detail(`crosswalk-${serial++}`, x - 2 + line * 0.8, 0.03, z, 0.45, 0.03, 2.6, 0xd6c8af)
    }
    for (const sign of [-1, 1]) {
      shapes.push({ id: `signal-pole-${x}-${sign}`, type: 'cylinder', x: x + 3.3, y: 1.4, z: sign * 7.5,
        radius: 0.11, height: 2.8, color: colors.metal, solid: true, walkable: false, climbable: false })
      box(`signal-head-${x}-${sign}`, x + 3.3, 3.0, sign * 7.5, 0.7, 0.65, 0.28, 0x252834,
        { walkable: false, climbable: false })
      detail(`signal-lens-${x}-${sign}`, x + 3.3, 2.84, sign * 7.5 - sign * 0.15,
        0.42, 0.3, 0.04, 0x8b2426, { emissive: 0xff3022, signal: true, instanced: false })
    }
  }
  for (const x of [-52, -26, 0, 26, 52]) for (const z of [-11, 11]) {
    shapes.push({ id: `power-pole-${x}-${z}`, type: 'cylinder', x, y: 3.5, z, radius: 0.17,
      height: 7, color: colors.wood, solid: true, walkable: false, climbable: false })
    box(`power-arm-${x}-${z}`, x, 6.65, z, 0.14, 0.16, 2.8, colors.metal,
      { walkable: false, climbable: false })
  }
  const regions = [
    { id: 'residential', label: '住宅街', center: { x: -32, y: 0, z: -30 } },
    { id: 'station', label: '车站广场', center: { x: 34, y: 0, z: -27 } },
    { id: 'plaza', label: '雨后广场', center: { x: -30, y: 0, z: 32 } },
    { id: 'maintenance', label: '维修街区', center: { x: 33, y: 0, z: 32 } },
  ]
  const spawnPoints = [
    [-53, -53], [-10, -51], [-54, -12], [-6, -16], [19, -35], [55, -54], [54, -15], [2, -50],
    [-54, 52], [-12, 53], [-53, 12], [-10, 14], [17, 54], [55, 54], [54, 13], [20, 13],
    [-32, 28, 2.4], [32, 33, 3.6], [10, -7, 6], [10, 7, 6],
  ].map(([x, z, y = 0], i) => ({ id: `spawn-${i}`, x, y, z,
    region: regions[x < 0 ? (z < 0 ? 0 : 2) : (z < 0 ? 1 : 3)].id }))
  addRoofStructures(shapes, colors)
  addStreetDetails(shapes, colors)
  addStationDetails(shapes, stations, colors)
  return { bounds: 60, shapes, regions, spawnPoints, stations, ladders: [],
    playerStart: { x: -16, y: 0, z: -30 }, playerYaw: Math.PI, colors }
}
