import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const PORT = 9225
const url = process.argv[2] ?? 'http://localhost:5176/'
const shot = process.argv[3] ?? 'E:/tmp/fps_shot.png'
const waitMs = parseInt(process.argv[4] ?? '13000', 10)
const lookAtEnemy = process.argv[5] !== 'noLook'
const work = fs.mkdtempSync((process.env.TEMP ?? 'C:/') + 'fps-g-')
const edge = spawn(EDGE, [
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${work}`,
  '--no-first-run', '--no-default-browser-check', '--disable-extensions',
  '--window-size=1280,720',
  'about:blank',
], { stdio: 'ignore' })

const get = (p) => new Promise((res, rej) => {
  http.get({ host: '127.0.0.1', port: PORT, path: p }, (r) => {
    let d = ''
    r.on('data', (c) => (d += c))
    r.on('end', () => res(d))
  }).on('error', rej)
})

async function waitForDevtools() {
  for (let i = 0; i < 60; i++) {
    try { await get('/json/version'); return } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error('no devtools')
}

const main = async () => {
  await waitForDevtools()
  let targets = JSON.parse(await get('/json'))
  let page = targets.find((t) => t.type === 'page')
  if (!page) {
    await get('/json/new?about:blank')
    targets = JSON.parse(await get('/json'))
    page = targets.find((t) => t.type === 'page')
  }
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej })
  let id = 0
  const send = (method, params = {}) => new Promise((res) => {
    const mid = ++id
    ws.send(JSON.stringify({ id: mid, method, params }))
    const h = (m) => {
      const msg = JSON.parse(m.data)
      if (msg.id === mid) { ws.removeEventListener('message', h); res(msg.result) }
    }
    ws.addEventListener('message', h)
  })
  const evalJs = async (expression) => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    if (r && r.exceptionDetails) return 'EXC ' + (r.exceptionDetails.exception?.description || r.exceptionDetails.text)
    return r && r.result ? r.result.value : undefined
  }

  await send('Runtime.enable')
  await send('Page.enable')
  const logs = []
  ws.addEventListener('message', (m) => {
    const msg = JSON.parse(m.data)
    if (msg.method === 'Runtime.consoleAPICalled') {
      logs.push(msg.params.args.map((a) => a.value ?? a.description ?? '').join(' '))
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      logs.push('EXCEPTION ' + (msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text))
    }
  })

  await send('Page.navigate', { url })
  await new Promise((r) => setTimeout(r, 4000))
  await evalJs(`document.getElementById('start-btn').click()`)
  await new Promise((r) => setTimeout(r, waitMs))

  const probe = await evalJs(`(() => {
    if (!window.__dbg) return 'NO __dbg'
    const d = window.__dbg()
    const { scene, camera, spawner } = d
    const out = []
    out.push('enemies=' + spawner.enemies.length)
    if (!spawner.enemies.length) return out.join('\\n')
    let best = null, bd = Infinity
    for (const e of spawner.enemies) {
      const dd = Math.hypot(e.group.position.x, e.group.position.z)
      if (dd < bd) { bd = dd; best = e }
    }
    out.push('target type=' + best.type + ' pos=' + JSON.stringify(best.group.position.toArray().map(n=>+n.toFixed(2))))
    out.push('mixer=' + (best.mixer ? 'yes' : 'NO') +
      ' action=' + (best.action ? (best.action.getClip().name + ' running=' + best.action.isRunning() + ' t=' + best.action.time.toFixed(2)) : 'none') +
      ' clipDur=' + (best.action ? best.action.getClip().duration.toFixed(2) : '-'))
    let sm = null
    best.group.traverse((o) => { if (o.isSkinnedMesh && !sm) sm = o })
    if (sm) {
      const sk = sm.skeleton
      const b0 = sk.bones[0]
      out.push('skinned=' + sm.name + ' bones=' + sk.bones.length + ' bindMode=' + sm.bindMode)
      out.push('bone0=' + (b0 ? b0.name : 'n/a') + ' mw=' + (b0 ? Array.from(b0.matrixWorld.elements).map(n=>+n.toFixed(2)).join(',') : 'n/a'))
      let inScene = false, p = b0
      while (p) { if (p === scene) { inScene = true; break } p = p.parent }
      out.push('bone0InSceneGraph=' + inScene)
      let minY = Infinity, maxY = -Infinity
      for (const bn of sk.bones) { const y = bn.matrixWorld.elements[13]; if (y < minY) minY = y; if (y > maxY) maxY = y }
      out.push('boneY span=' + (maxY - minY).toFixed(3) + ' min=' + minY.toFixed(3) + ' max=' + maxY.toFixed(3))
      out.push('hpBarY=' + best.hpBar.position.y.toFixed(2) + ' defSize=' + best.def.size)
      out.push('meshMW=' + Array.from(sm.matrixWorld.elements).map(n=>+n.toFixed(2)).join(','))
      out.push('rootMW=' + Array.from(sm.parent.matrixWorld.elements).map(n=>+n.toFixed(2)).join(','))
    }
    if (${lookAtEnemy}) {
      // 把目标敌人摆到相机正前方，其余挪远，方便看清
      best.group.position.set(0, 0, -4)
      for (const e of spawner.enemies) {
        if (e === best) continue
        e.group.position.set(30, 0, 30)
      }
      camera.position.set(0, 1.7, 0)
      camera.lookAt(0, 0.9, -4)
      camera.updateMatrixWorld(true)
      out.push('enemy placed at (0,0,-4), cam at origin')
    }
    return out.join('\\n')
  })()`)
  console.log('PROBE:\n' + probe)

  await new Promise((r) => setTimeout(r, 900))
  const { data } = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(shot, Buffer.from(data, 'base64'))
  console.log('SHOT', shot)
  console.log('LOGS:'); logs.forEach((l) => console.log('  ' + l))
  ws.close()
  edge.kill()
  await new Promise((r) => setTimeout(r, 1500))
  fs.rmSync(work, { recursive: true, force: true })
}

main().catch((e) => { console.error('ERR', e.message); edge.kill(); process.exit(1) })
