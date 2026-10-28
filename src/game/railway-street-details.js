// Roof structures remain separate so cosmetic dressing never acquires collision.
export function addRoofStructures(shapes, colors) {
  const originals = [...shapes]
  const solid = (id, x, y, z, width, height, depth, color) => shapes.push({
    id, type: 'box', x, y, z, width, height, depth, color,
    solid: true, walkable: false, climbable: false, category: 'roof-structure',
  })
  for (const b of originals.filter((s) => s.category === 'building')) {
    const roof = originals.find((s) => s.id === `${b.id}-roof`)
    if (!roof) continue
    const gables = originals.filter((s) => s.id.startsWith(`${b.id}-gable-`))
    if (gables.length) {
      const peak = Math.max(...gables.map((s) => s.y + s.height / 2))
      const x = b.x - b.width * 0.22
      // Flashing intersects only the ridge surface, hiding the sloped roof joint.
      solid(`${b.id}-chimney-flashing`, x, peak - 0.04, b.z, 0.85, 0.18, 0.85, colors.metal)
      solid(`${b.id}-chimney`, x, peak + 0.53, b.z, 0.6, 0.96, 0.6, colors.wood)
      solid(`${b.id}-chimney-cap`, x, peak + 1.07, b.z, 0.78, 0.12, 0.78, colors.metal)
    } else {
      const top = roof.y + roof.height / 2
      for (const side of [-1, 1]) {
        const x = b.x + side * b.width * 0.25
        const z = b.z + b.depth * 0.17
        solid(`${b.id}-roof-vent-${side}`, x, top + 0.275, z, 0.9, 0.55, 0.7, colors.metal)
        solid(`${b.id}-roof-vent-cap-${side}`, x, top + 0.59, z, 1.02, 0.08, 0.82, colors.roof)
      }
    }
  }
}

// Thin, non-colliding dressings share the same metre scale as the playable layout.
export function addStreetDetails(shapes, colors) {
  const originals = [...shapes]
  let serial = 0
  const flags = { solid: false, decorative: true, walkable: false, climbable: false, instanced: true }
  const box = (x, y, z, width, height, depth, color, extra = {}) => {
    shapes.push({ id: `street-detail-${serial++}`, type: 'box', x, y, z,
      width, height, depth, color, ...flags, ...extra })
  }
  const cylinder = (x, y, z, radius, height, color) => {
    shapes.push({ id: `street-detail-${serial++}`, type: 'cylinder', x, y, z,
      radius, height, color, ...flags })
  }
  const dark = 0x343a43
  const glass = 0x657985
  const warmGlass = 0xb6a18b
  const stain = 0x4b4b53
  const trim = colors.metal

  // u runs along a wall; offset is its distance out from the original facade.
  const faceBox = (b, face, u, y, span, height, thickness, color, offset = 0.1) => {
    if (face === 'front' || face === 'back') {
      const sign = face === 'front' ? -1 : 1
      box(b.x + u, y, b.z + sign * (b.depth / 2 + offset), span, height, thickness, color)
    } else {
      const sign = face === 'left' ? -1 : 1
      box(b.x + sign * (b.width / 2 + offset), y, b.z + u, thickness, height, span, color)
    }
  }
  const window = (b, face, u, y, lit, existing = false) => {
    const w = existing ? 1.55 : 1.35
    const h = existing ? 1 : 0.8
    if (existing) {
      for (const side of [-1, 1]) {
        faceBox(b, face, u + side * (w / 2 + 0.035), y, 0.07, h + 0.14, 0.04, trim, 0.115)
        faceBox(b, face, u, y + side * (h / 2 + 0.035), w, 0.07, 0.04, trim, 0.115)
      }
    } else {
      faceBox(b, face, u, y, w + 0.16, h + 0.16, 0.035, trim, 0.075)
      faceBox(b, face, u, y, w, h, 0.025, lit ? warmGlass : glass, 0.108)
    }
    faceBox(b, face, u, y, 0.045, h, 0.025, trim, 0.13)
    faceBox(b, face, u, y - h / 2 - 0.07, w + 0.23, 0.06, 0.18, trim, 0.15)
  }

  for (const b of originals.filter((s) => s.category === 'building')) {
    const frontCount = Math.max(2, Math.floor(b.width / 2.8))
    for (let i = 0; i < frontCount; i++) {
      const u = (i - (frontCount - 1) / 2) * 2.6
      // The original right-hand window is partly covered by the closed shutter.
      if (u + 0.85 < b.width / 2 - 2.3) window(b, 'front', u, 2.2, true, true)
    }
    for (const face of ['back', 'left', 'right']) {
      const span = face === 'back' ? b.width : b.depth
      const count = Math.max(2, Math.min(3, Math.floor(span / 3.4)))
      for (let i = 0; i < count; i++) {
        const u = (i - (count - 1) / 2) * 2.7
        window(b, face, u, 2.15, (i + serial) % 3 === 0)
      }
      faceBox(b, face, 0, 0.2, span, 0.25, 0.04, trim, 0.045)
    }
    if (b.height >= 5.1) {
      for (const face of ['front', 'back']) for (const u of [-2.7, 0, 2.7]) {
        window(b, face, u, b.height - 1.95, u === 0)
      }
      for (const face of ['left', 'right']) window(b, face, 0, b.height - 1.95, false)
    }

    // Closed leaves sit in the blank strip beside the windows, never an opening.
    const doorU = -b.width / 2 + 0.8
    for (const face of ['front', 'back']) {
      faceBox(b, face, doorU, 1.04, 0.98, 2.08, 0.025, trim, 0.018)
      faceBox(b, face, doorU, 1.03, 0.85, 1.98, 0.02, colors.wood, 0.036)
      for (const y of [0.53, 1.3]) {
        faceBox(b, face, doorU, y, 0.64, y === 0.53 ? 0.62 : 0.73, 0.01, stain, 0.052)
      }
      faceBox(b, face, doorU + 0.29, 1.02, 0.045, 0.16, 0.02, trim, 0.058)
      faceBox(b, face, doorU, 1.73, 0.34, 0.045, 0.015, dark, 0.056)
      faceBox(b, face, doorU, 0.055, 0.88, 0.045, 0.025, trim, 0.045)
    }
    // Service conduit and meter remain less than eight centimetres off the wall.
    const conduitU = b.width / 2 - 0.5
    faceBox(b, 'back', conduitU, b.height / 2, 0.025, b.height - 0.55, 0.025, trim, 0.04)
    faceBox(b, 'back', conduitU, 1.22, 0.32, 0.42, 0.06, trim, 0.04)
    faceBox(b, 'back', conduitU, 1.26, 0.18, 0.13, 0.012, dark, 0.069)

    // Rainpipes and gutter lips remain attached to solid exterior walls.
    for (const faceSign of [-1, 1]) for (const sign of [-1, 1]) {
      const x = b.x + sign * (b.width / 2 - 0.25)
      const z = b.z + faceSign * (b.depth / 2 + 0.16)
      cylinder(x, (b.height - 0.25) / 2, z, 0.055, b.height - 0.25, trim)
      for (const y of [0.55, 2.6, b.height - 0.55]) cylinder(x, y, z, 0.072, 0.055, dark)
    }
    for (const face of ['front', 'back']) {
      faceBox(b, face, 0, b.height + 0.08, b.width + 0.55, 0.12, 0.14, trim, 0.32)
    }
    // Flush utility panel and louvers do not read as traversable doorways.
    faceBox(b, 'back', b.width / 2 - 1.3, 1.15, 1.1, 0.75, 0.08, trim, 0.12)
    for (let i = 0; i < 6; i++) {
      faceBox(b, 'back', b.width / 2 - 1.3, 0.89 + i * 0.1, 0.88, 0.035, 0.025, dark, 0.175)
    }
    const shutterU = b.width / 2 - 1.5
    for (let y = 0.15; y < 2.6; y += 0.18) {
      faceBox(b, 'front', shutterU, y, 1.54, 0.025, 0.025, trim, 0.145)
    }
    faceBox(b, 'front', shutterU, 0.72, 0.36, 0.08, 0.035, dark, 0.175)
  }

  for (const r of originals.filter((s) => s.category === 'roof')) {
    // Ridge-to-eave variation comes from the source ramp, so seams sit on it.
    if (r.type === 'ramp' && r.riseAxis === 'z') {
      const rows = Math.floor(r.depth / 0.65)
      for (let i = 1; i < rows; i++) {
        const z = r.z - r.depth / 2 + i * r.depth / rows
        const y = r.y + r.riseSign * (z - r.z) / r.depth * r.height
        box(r.x, y + 0.012, z, r.width - 0.05, 0.025, 0.035, trim)
      }
    } else if (r.type === 'box' && !originals.some((s) => s.id.startsWith(r.id.replace('-roof', '-gable-')))) {
      const top = r.y + r.height / 2
      for (let x = r.x - r.width / 2 + 1; x < r.x + r.width / 2; x += 2.2) {
        box(x, top + 0.01, r.z, 0.035, 0.02, r.depth - 0.05, trim)
      }
    }
  }

  for (const c of originals.filter((s) => s.category === 'crate')) {
    for (const sign of [-1, 1]) {
      for (let y = 0.26; y < c.height; y += 0.3) {
        box(c.x, y, c.z + sign * 1.012, 1.94, 0.025, 0.025, dark)
        box(c.x + sign * 1.012, y, c.z, 0.025, 0.025, 1.94, dark)
      }
      for (const side of [-1, 1]) {
        box(c.x + side * 0.88, c.height / 2, c.z + sign * 1.025, 0.1, c.height, 0.035, trim)
        box(c.x + sign * 1.025, c.height / 2, c.z + side * 0.88, 0.035, c.height, 0.1, trim)
      }
    }
    box(c.x, c.height + 0.012, c.z, 0.05, 0.025, 1.96, dark)
  }

  for (const c of originals.filter((s) => s.category === 'cover')) {
    for (const sign of [-1, 1]) {
      box(c.x + sign * 1.43, 0.8, c.z - 0.615, 0.23, 0.16, 0.03, colors.yellow)
      box(c.x + sign * 1.43, 0.8, c.z + 0.615, 0.23, 0.16, 0.03, colors.yellow)
    }
    box(c.x, 0.18, c.z - 0.61, 3.42, 0.06, 0.025, stain)
  }

  for (const v of originals.filter((s) => s.id.startsWith('vending-') && s.solid)) {
    for (let row = 0; row < 3; row++) for (let col = 0; col < 3; col++) {
      box(v.x - 0.35 + col * 0.2, 0.75 + row * 0.32, v.z - 0.475,
        0.085, 0.17, 0.025, row === 1 ? colors.cream : colors.blue)
      box(v.x - 0.35 + col * 0.2, 0.64 + row * 0.32, v.z - 0.49, 0.09, 0.025, 0.02, dark)
    }
    box(v.x + 0.38, 1.05, v.z - 0.452, 0.22, 0.8, 0.035, dark)
    for (let row = 0; row < 4; row++) {
      box(v.x + 0.38, 0.8 + row * 0.15, v.z - 0.48, 0.11, 0.045, 0.025, colors.cream)
    }
    box(v.x + 0.38, 1.36, v.z - 0.48, 0.13, 0.025, 0.025, trim)
    box(v.x - 0.08, 0.23, v.z - 0.45, 0.68, 0.2, 0.035, dark)
    box(v.x - 0.08, 0.13, v.z - 0.475, 0.73, 0.035, 0.08, trim)
  }

  for (const p of originals.filter((s) => s.id.startsWith('signal-pole-'))) {
    for (let i = 0; i < 6; i++) cylinder(p.x, 0.4 + i * 0.3, p.z, 0.116, 0.15, colors.yellow)
  }
  const sleepers = originals.filter((s) => s.id.startsWith('sleeper-'))
  for (let i = 0; i < sleepers.length; i += 4) for (const z of [-0.74, 0.74]) {
    for (const sign of [-1, 1]) box(sleepers[i].x, 0.09, z + sign * 0.12, 0.15, 0.035, 0.1, trim)
  }
  for (const f of originals.filter((s) => s.category === 'vault-fence')) {
    for (let u = -f.width / 2 + 0.35; u < f.width / 2; u += 0.7) {
      box(f.x + u, 0.5, f.z - 0.101, 0.022, 0.96, 0.022, dark)
    }
    box(f.x, 0.92, f.z - 0.105, f.width - 0.08, 0.06, 0.035, trim)
  }

  // Low-contrast road patches and inset drainage add scale without visual clutter.
  for (const [x, z] of [[-34, -22], [-4, -31], [36, -18], [-16, 34], [36, 47]]) {
    cylinder(x, 0.03, z, 0.48, 0.018, trim)
    cylinder(x, 0.043, z, 0.39, 0.012, stain)
    for (const offset of [-0.22, 0, 0.22]) box(x, 0.052, z + offset, 0.52, 0.009, 0.025, dark)
  }
  for (const [x, z, rotation] of [[-29.1, -15, 0], [31.2, -24, 0], [-12, -26.4, Math.PI / 2],
    [22, 29.4, Math.PI / 2], [-38.7, 43, 0], [40.7, 46, 0]]) {
    box(x, 0.03, z, 0.38, 0.018, 1.2, trim, { rotation })
    for (let i = 0; i < 7; i++) {
      const u = -0.48 + i * 0.16
      box(x + (rotation ? u : 0), 0.043, z + (rotation ? 0 : u),
        rotation ? 0.035 : 0.29, 0.009, rotation ? 0.29 : 0.035, dark)
    }
  }
  for (const [x, z, w, d] of [[-10, -33, 3.4, 0.018], [-38, 34, 0.018, 4.1],
    [34, 19, 3.2, 0.018], [20, -29, 2.8, 0.018]]) {
    box(x, 0.028, z, w, 0.01, d, stain)
  }
}
