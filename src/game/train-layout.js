const box = (id, x, y, z, width, height, depth, color, extra = {}) => ({
  id, type: 'box', x, y, z, width, height, depth, color,
  solid: true, walkable: true, climbable: false, bodyId: 'train', ...extra,
})

export const TRAIN_DEFAULTS = {
  stops: [-42, 42], dwellTime: 20, warningTime: 6, speed: 8,
  halfLength: 12, halfWidth: 1.8, floorY: 1, roofY: 3.5,
  playerDamageRatio: 0.8, bossDamageRatio: 0.3,
}

export function createTrainLayout() {
  const shapes = []
  const decorations = []
  const doors = []
  const ladders = []
  const silver = 0xa6b4b8, dark = 0x33424b, trim = 0xcb7b48
  for (const [index, center] of [-6, 6].entries()) {
    const prefix = `train-car-${index}`
    shapes.push(box(`${prefix}-floor`, center, 0.9, 0, 11.8, 0.2, 3.6, dark))
    shapes.push(box(`${prefix}-skirt`, center, 0.55, 0, 11.7, 0.5, 3.3, 0x46545d, { walkable: false }))
    for (const side of [-1, 1]) {
      const z = side * 1.75
      for (const offset of [-3.6, 3.6]) {
        shapes.push(box(`${prefix}-sill-${side}-${offset}`, center + offset, 1.45, z, 4.6, 0.9, 0.1, silver))
        decorations.push(box(`${prefix}-stripe-${side}-${offset}`, center + offset, 1.43, z + side * 0.065, 4.6, 0.22, 0.025, trim, { solid: false }))
        shapes.push(box(`${prefix}-seat-${side}-${offset}`, center + offset, 1.2, side * 1.43, 3.1, 0.4, 0.45, 0x724d42))
      }
      shapes.push(box(`${prefix}-header-${side}`, center, 3.25, z, 11.8, 0.2, 0.1, silver))
      for (const offset of [-5.85, -3.5, -1.35, 1.35, 3.5, 5.85]) {
        shapes.push(box(`${prefix}-frame-${side}-${offset}`, center + offset, 2.57, z, 0.1, 1.18, 0.12, silver))
      }
      doors.push(box(`${prefix}-door-${side}`, center, 2.1, side * 1.76, 2.58, 2.2, 0.12, 0x71858b, { door: true, walkable: false }))
      decorations.push(box(`${prefix}-door-rail-${side}`, center, 3.36, side * 1.82, 2.9, 0.08, 0.08, trim, { solid: false }))
    }
    const outer = index === 0 ? center - 5.9 : center + 5.9
    shapes.push(box(`${prefix}-cab-end`, outer, 2.15, 0, 0.16, 2.3, 3.5, silver))
    decorations.push(box(`${prefix}-cab-window`, outer + (index === 0 ? -0.09 : 0.09), 2.45, 0, 0.025, 1.05, 2.6, 0x263940, { solid: false }))
    for (const side of [-1, 1]) {
      decorations.push(box(`${prefix}-lamp-${side}`, outer + (index === 0 ? -0.12 : 0.12), 1.45, side * 1.2, 0.04, 0.18, 0.3, 0xffdfaa, { solid: false, emissive: true }))
      for (const axle of [-3.8, 3.8]) decorations.push({
        id: `${prefix}-wheel-${side}-${axle}`, type: 'cylinder', x: center + axle, y: 0.37, z: side * 1.43,
        radius: 0.34, height: 0.25, rotation: [Math.PI / 2, 0, 0], color: 0x202b32, solid: false,
      })
    }
    const insideEnd = index === 0 ? -0.1 : 0.1
    for (const side of [-1, 1]) shapes.push(box(`${prefix}-gangway-frame-${side}`, insideEnd, 2.2, side * 1.55, 0.14, 2.4, 0.5, silver))
    const hatchX = index === 0 ? -10 : 10
    const minimum = center - 5.9, maximum = center + 5.9
    const holeMinimum = hatchX - 0.65, holeMaximum = hatchX + 0.65
    for (const [part, start, end] of [['left', minimum, holeMinimum], ['right', holeMaximum, maximum]]) {
      shapes.push(box(`${prefix}-roof-${part}`, (start + end) / 2, 3.425, 0, end - start, 0.15, 3.6, silver))
    }
    for (const side of [-1, 1]) shapes.push(box(`${prefix}-roof-hatch-${side}`, hatchX, 3.425, side * 1.225, 1.3, 0.15, 1.15, silver))
    const direction = index === 0 ? 1 : -1
    ladders.push({ id: `${prefix}-ladder`, x: hatchX, direction, bottomY: 1, topY: 3.5 })
    for (const side of [-1, 1]) decorations.push(box(`${prefix}-ladder-rail-${side}`, hatchX, 2.2, side * 0.45, 0.055, 2.4, 0.055, trim, { solid: false }))
    for (let rung = 0; rung < 9; rung++) decorations.push(box(`${prefix}-rung-${rung}`, hatchX, 1.15 + rung * 0.27, 0, 0.06, 0.04, 0.95, trim, { solid: false }))
    shapes.push(box(`${prefix}-roof-equipment`, center, 3.68, -1.3, 1.4, 0.35, 0.55, dark, { climbable: true }))
  }
  shapes.push(box('train-gangway-floor', 0, 0.9, 0, 0.5, 0.2, 2.84, dark))
  shapes.push(box('train-gangway-roof', 0, 3.425, 0, 0.5, 0.15, 2.84, silver))
  for (const side of [-1, 1]) shapes.push(box(`train-gangway-side-${side}`, 0, 2.2, side * 1.36, 0.5, 2.4, 0.12, dark))
  return { shapes, decorations, doors, ladders, floorY: 1, roofY: 3.5 }
}
