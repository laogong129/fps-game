// Visible structures and their collision boxes use this single descriptor set.
export function addStationDetails(shapes, stations, colors) {
  const metal = colors.metal
  const dark = 0x343a43
  const signColor = 0x284147
  let serial = 0
  const box = (id, x, y, z, width, height, depth, color, extra = {}) => {
    const shape = { id, type: 'box', x, y, z, width, height, depth, color,
      solid: true, walkable: false, climbable: false, ...extra }
    shapes.push(shape)
    return shape
  }
  const detail = (id, x, y, z, width, height, depth, color, extra = {}) =>
    box(id, x, y, z, width, height, depth, color, { solid: false, decorative: true,
      walkable: false, climbable: false, instanced: true, ...extra })
  const prop = (id, x, y, z, width, height, depth, color, extra = {}) =>
    box(id, x, y, z, width, height, depth, color,
      { category: 'parkour-prop', walkable: true, climbable: true, ...extra })

  for (const station of stations) {
    const { id, x } = station
    const west = id === 'west'
    const title = `夕凪町 ${west ? '西站' : '东站'}`
    const code = west ? 'YN01' : 'YN02'
    box(`${id}-station-sign`, x, 5.6, -4.8, 7.2, 1.05, 0.12, signColor, {
      category: 'station-sign',
      signboard: { kind: 'station', title, roman: `YUNAGI ${west ? 'WEST' : 'EAST'}`, code },
    })

    // The sign bottom stays at 5.075 m; framing never hangs below that edge.
    detail(`${id}-station-sign-top`, x, 6.105, -4.8, 7.24, 0.04, 0.15, metal)
    for (const side of [-1, 1]) {
      detail(`${id}-station-sign-side-${side}`, x + side * 3.59, 5.6, -4.8,
        0.04, 1.05, 0.15, metal)
      detail(`${id}-station-sign-hanger-${side}`, x + side * 2.8, 6.2, -4.8,
        0.075, 0.155, 0.075, metal)
    }

    // A cantilever roof leaves the platform and both boarding lanes open.
    box(`${id}-station-canopy`, x, 6.39, -4.9, 26, 0.22, 5.4, colors.roof, {
      category: 'station-canopy', surface: 'roof',
    })
    for (const side of [-1, 1]) {
      box(`${id}-station-canopy-column-${side}`, x + side * 11, 3.14, -7.2,
        0.24, 6.28, 0.24, metal, { category: 'station-support' })
      detail(`${id}-station-canopy-base-${side}`, x + side * 11, 0.035, -7.2,
        0.36, 0.07, 0.36, dark)
      detail(`${id}-station-canopy-side-${side}`, x + side * 12.96, 6.36, -4.9,
        0.08, 0.28, 5.45, metal)
    }
    for (const z of [-7.6, -2.2]) {
      detail(`${id}-station-canopy-fascia-${serial++}`, x, 6.36, z, 26, 0.28, 0.1, metal)
      detail(`${id}-station-canopy-trim-${serial++}`, x, 6.46, z - 0.055,
        25.85, 0.045, 0.025, colors.cream)
    }
    detail(`${id}-station-canopy-beam`, x, 6.12, -7.2, 22.3, 0.3, 0.2, metal)
    for (let u = -12; u <= 12; u += 2) {
      detail(`${id}-station-roof-rib-${serial++}`, x + u, 6.525, -4.9,
        0.055, 0.05, 5.25, metal)
      detail(`${id}-station-roof-brace-${serial++}`, x + u, 6.23, -4.9,
        0.07, 0.1, 5.05, metal)
    }
    for (const u of [-8, 0, 8]) {
      detail(`${id}-station-lamp-case-${serial++}`, x + u, 6.13, -3.25,
        1.25, 0.13, 0.3, dark)
      detail(`${id}-station-lamp-${serial++}`, x + u, 6.057, -3.25,
        1.12, 0.025, 0.22, 0xbcb59b, { emissive: 0x4a3d2d })
    }

    // Ground furniture sits outside the six-metre-wide north access ramp.
    const benchX = x + 9
    const benchZ = -8.7
    prop(`${id}-bench-seat`, benchX, 0.44, benchZ, 3, 0.12, 0.64, colors.wood)
    prop(`${id}-bench-back`, benchX, 0.77, benchZ - 0.29, 3, 0.52, 0.1, colors.wood)
    prop(`${id}-bench-crossbar`, benchX, 0.24, benchZ, 2.4, 0.08, 0.08, metal)
    for (const side of [-1, 1]) {
      for (const front of [-1, 1]) {
        prop(`${id}-bench-leg-${side}-${front}`, benchX + side * 1.12, 0.19,
          benchZ + front * 0.21, 0.09, 0.38, 0.09, metal)
      }
      prop(`${id}-bench-back-frame-${side}`, benchX + side * 1.12, 0.68,
        benchZ - 0.32, 0.07, 0.67, 0.07, metal)
    }
    for (let u = -1; u <= 1; u += 0.5) {
      detail(`${id}-bench-seam-${serial++}`, benchX + u, 0.505, benchZ,
        0.018, 0.01, 0.6, dark)
    }
    detail(`${id}-bench-back-seam`, benchX, 0.76, benchZ - 0.348, 2.95, 0.025, 0.015, dark)

    const binX = x + 12
    prop(`${id}-station-bin`, binX, 0.48, -8.3, 0.65, 0.96, 0.6, metal)
    detail(`${id}-station-bin-lid`, binX, 0.972, -8.3, 0.67, 0.024, 0.62, dark)
    detail(`${id}-station-bin-slot`, binX, 0.79, -7.99, 0.43, 0.14, 0.025, dark)
    detail(`${id}-station-bin-label`, binX, 0.43, -7.985, 0.26, 0.28, 0.025, colors.cream)

    const boardX = x - 11
    prop(`${id}-station-timetable`, boardX, 1.1, -9.2, 1.35, 1.6, 0.14, colors.cream, {
      signboard: { kind: 'timetable', title: `${west ? '西站' : '东站'} · 站间路线`, code },
    })
    for (const side of [-1, 1]) {
      prop(`${id}-timetable-leg-${side}`, boardX + side * 0.5, 0.15, -9.2,
        0.065, 0.3, 0.065, metal)
      detail(`${id}-timetable-frame-${side}`, boardX + side * 0.665, 1.1, -9.2,
        0.045, 1.6, 0.17, metal)
    }
    detail(`${id}-timetable-top`, boardX, 1.88, -9.2, 1.39, 0.04, 0.2, metal)
  }
}
