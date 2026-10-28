import * as THREE from 'three'

function stationFace(context, board) {
  const cream = '#e4d8bd'
  context.fillStyle = '#26323b'
  context.fillRect(0, 0, 1024, 160)
  context.strokeStyle = '#82918f'
  context.lineWidth = 2
  context.strokeRect(7, 7, 1010, 146)
  context.fillStyle = '#495d63'
  context.fillRect(24, 24, 132, 103)
  context.fillStyle = cream
  context.textAlign = 'center'
  context.font = 'bold 30px "Segoe UI", sans-serif'
  context.fillText(board.code, 90, 87)
  context.textAlign = 'left'
  context.font = 'bold 48px "Microsoft YaHei", sans-serif'
  context.fillText(board.title, 192, 81)
  context.font = '20px "Segoe UI", sans-serif'
  context.fillStyle = '#b3c0bb'
  context.fillText(board.roman, 195, 116)
  context.textAlign = 'center'
  context.fillStyle = cream
  context.font = 'bold 30px "Segoe UI", sans-serif'
  context.fillText('1 / 2', 920, 72)
  context.font = '19px "Microsoft YaHei", sans-serif'
  context.fillText('站 台', 920, 108)
  context.fillStyle = '#c6a66c'
  context.fillRect(24, 139, 976, 6)
}

function timetableFace(context, board) {
  context.fillStyle = '#cec7af'
  context.fillRect(0, 0, 512, 640)
  context.fillStyle = '#283c44'
  context.fillRect(14, 14, 484, 102)
  context.fillStyle = '#eee3c9'
  context.textAlign = 'center'
  context.font = 'bold 38px "Microsoft YaHei", sans-serif'
  context.fillText('路 线 案 内', 256, 78)
  context.fillStyle = '#344650'
  context.font = 'bold 31px "Microsoft YaHei", sans-serif'
  context.fillText(board.title, 256, 174)
  context.strokeStyle = '#7c8882'
  context.lineWidth = 9
  context.beginPath(); context.moveTo(120, 235); context.lineTo(120, 390); context.stroke()
  for (const [y, title, roman] of [[245, '夕凪町 西站', 'YUNAGI WEST'], [385, '夕凪町 东站', 'YUNAGI EAST']]) {
    context.beginPath(); context.arc(120, y, 14, 0, Math.PI * 2)
    context.fillStyle = '#b18d52'; context.fill()
    context.textAlign = 'left'
    context.fillStyle = '#344650'
    context.font = 'bold 26px "Microsoft YaHei", sans-serif'
    context.fillText(title, 160, y + 6)
    context.font = '17px "Segoe UI", sans-serif'
    context.fillText(roman, 162, y + 35)
  }
  context.textAlign = 'center'
  context.font = '26px "Microsoft YaHei", sans-serif'
  context.fillText('停站开门 · 两站往返', 256, 505)
  context.font = '22px "Microsoft YaHei", sans-serif'
  context.fillText('注意信号 · 请勿滞留轨道', 256, 555)
}

export function createSignboardFaces(shape) {
  if (typeof document === 'undefined' || !shape.signboard) return null
  const station = shape.signboard.kind === 'station'
  const canvas = document.createElement('canvas')
  canvas.width = station ? 1024 : 512
  canvas.height = station ? 160 : 640
  const context = canvas.getContext('2d')
  if (!context) return null
  if (station) stationFace(context, shape.signboard)
  else timetableFace(context, shape.signboard)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  const material = new THREE.MeshBasicMaterial({ map: texture, color: 0xc7c7c7 })
  const geometry = new THREE.PlaneGeometry(shape.width - 0.045, shape.height - 0.045)
  const group = new THREE.Group()
  group.position.set(shape.x, shape.y, shape.z)
  group.rotation.y = shape.rotation || 0
  group.name = `${shape.id}-lettering`
  group.userData.decorative = true
  group.userData.collider = false
  for (const direction of [-1, 1]) {
    const face = new THREE.Mesh(geometry, material)
    face.position.z = direction * (shape.depth / 2 + 0.003)
    face.rotation.y = direction < 0 ? Math.PI : 0
    group.add(face)
  }
  return group
}
