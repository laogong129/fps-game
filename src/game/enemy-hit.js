const ZONE_BONES = [
  ['head', /Head/i],
  ['body', /Hips|Spine|Neck|Shoulder/i],
  ['limb', /Arm|Hand|Index|Middle|Pinky|Ring|Thumb|UpLeg|Leg|Foot|Toe/i],
]

function boneZone(name) {
  if (!name) return null
  for (const [zone, re] of ZONE_BONES) if (re.test(name)) return zone
  return null
}

// 命中三角面三个顶点里，蒙皮权重合计最高的骨骼
function dominantBone(mesh, face) {
  const si = mesh?.geometry?.attributes?.skinIndex
  const sw = mesh?.geometry?.attributes?.skinWeight
  const skeleton = mesh?.skeleton
  if (!si || !sw || !skeleton || !face) return null
  const total = new Map()
  for (const vi of [face.a, face.b, face.c]) {
    for (let k = 0; k < 4; k++) {
      const w = sw.getComponent(vi, k)
      if (w <= 0) continue
      const name = skeleton.bones[si.getComponent(vi, k)]?.name
      if (name) total.set(name, (total.get(name) ?? 0) + w)
    }
  }
  let best = null
  let bestW = -1
  for (const [name, w] of total) if (w > bestW) { bestW = w; best = name }
  return best
}

// hit 为射线命中详情 { mesh, face }，由 weapon.js 透传过来
export function hitZoneAt(e, hit) {
  const cfg = e.def.hitZone
  if (!cfg) return null
  return boneZone(dominantBone(hit?.mesh, hit?.face))
}

// 返回该次命中的伤害倍率；未配置部位伤害的敌人一律返回 1
export function hitZoneMultiplier(e, hit) {
  const cfg = e.def.hitZone
  if (!cfg) return 1
  const zone = hitZoneAt(e, hit)
  return zone ? (cfg.mult[zone] ?? 1) : 1
}
