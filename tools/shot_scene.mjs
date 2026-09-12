import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const PORT = 9224
const shot = process.argv[2] ?? 'C:/Users/Public/jp_scene2.png'
const work = fs.mkdtempSync((process.env.TEMP ?? 'C:/') + 'fps-s-')
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
  await new Promise((r) => setTimeout(r, 6000))
  await send('Runtime.evaluate', {
    expression: `document.getElementById('start-screen').classList.remove('show')`,
  })
  await new Promise((r) => setTimeout(r, 1500))
  const { data } = await send('Page.captureScreenshot', { format: 'png' })
  fs.writeFileSync(shot, Buffer.from(data, 'base64'))
  console.log('SHOT', shot)
  ws.close()
  edge.kill()
  await new Promise((r) => setTimeout(r, 1500))
  fs.rmSync(work, { recursive: true, force: true })
}

main().catch((e) => { console.error('ERR', e.message); edge.kill(); process.exit(1) })
