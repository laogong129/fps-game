import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const PORT = 9225
const work = fs.mkdtempSync((process.env.TEMP ?? 'C:/') + 'fps-s-')
const shots = [
  ['C:/Users/Public/jp_a.png', 'camera.position.set(0, 3, 14); camera.rotation.set(-0.25, 0, 0); camera.updateMatrix();'],
  ['C:/Users/Public/jp_b.png', 'camera.position.set(-4, 4, 2); camera.rotation.set(-0.15, 0.7, 0); camera.updateMatrix();'],
]
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
  await send('Runtime.enable')
  await send('Page.navigate', { url: 'http://localhost:5173/' })
  await new Promise((r) => setTimeout(r, 8000))
  await send('Runtime.evaluate', {
    expression: `document.getElementById('start-screen').classList.remove('show'); document.getElementById('lock-hint').style.display='none'`,
  })
  for (const [shot, expr] of shots) {
    await send('Runtime.evaluate', { expression: expr })
    await new Promise((r) => setTimeout(r, 2000))
    const { data } = await send('Page.captureScreenshot', { format: 'png' })
    fs.writeFileSync(shot, Buffer.from(data, 'base64'))
    console.log('SHOT', shot)
  }
  ws.close()
  edge.kill()
  await new Promise((r) => setTimeout(r, 1500))
  fs.rmSync(work, { recursive: true, force: true })
}

main().catch((e) => { console.error('ERR', e.message); edge.kill(); process.exit(1) })
