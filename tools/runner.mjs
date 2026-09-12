// 测试运行器：启动系统 Edge（CDP 协议），跑游戏指定模式，收集控制台日志并截图
// 用法：node tools/runner.mjs [--url "/?selftest"] [--wait 30] [--shot out.png]
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import http from 'node:http'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const PORT = 9223
const args = process.argv.slice(2)
const flag = (k, d) => { const i = args.indexOf(k); return i > -1 ? args[i + 1] : d }
const url = `http://localhost:5173${flag('--url', '/?selftest')}`
const waitSec = Number(flag('--wait', '30'))
const shot = flag('--shot', null)
const work = fs.mkdtempSync((process.env.TEMP ?? 'C:/') + 'fps-r-')

const edge = spawn(EDGE, [
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${work}`,
  '--no-first-run', '--no-default-browser-check', '--disable-extensions',
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
    try { await get('/json/version'); return true } catch {}
    await new Promise((r) => setTimeout(r, 500))
  }
  return false
}

class CDP {
  constructor(ws) { this.ws = ws; this.id = 0; this.pending = new Map(); this.logs = [] }
  static connect(wsUrl) {
    return new Promise((res, rej) => {
      const ws = new WebSocket(wsUrl)
      ws.onopen = () => res(new CDP(ws))
      ws.onerror = () => rej(new Error('ws error'))
    })
  }
  send(method, params = {}) {
    const id = ++this.id
    this.ws.send(JSON.stringify({ id, method, params }))
    return new Promise((res) => this.pending.set(id, res))
  }
  attach() {
    this.ws.addEventListener('message', (m) => {
      const msg = JSON.parse(m.data)
      if (msg.id && this.pending.has(msg.id)) { this.pending.get(msg.id)(msg.result); this.pending.delete(msg.id) }
      if (msg.method === 'Runtime.consoleAPICalled') {
        this.logs.push(msg.params.args.map((a) => a.value ?? a.description ?? '').join(' '))
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        this.logs.push(`EXCEPTION ${msg.params.exceptionDetails.exception?.description ?? msg.params.exceptionDetails.text}`)
      }
    })
  }
}

if (!globalThis.WebSocket) {
  console.log('RUNNER:FAIL no WebSocket in this Node (need Node 22+)')
  process.exit(1)
}

const main = async () => {
  if (!(await waitForDevtools())) {
    console.log('RUNNER:FAIL devtools unreachable')
    edge.kill()
    process.exit(1)
  }
  let targets = JSON.parse(await get('/json'))
  let page = targets.find((t) => t.type === 'page')
  if (!page) {
    await get(`/json/new?about:blank`).catch(() => {})
    targets = JSON.parse(await get('/json'))
    page = targets.find((t) => t.type === 'page')
  }
  const cdp = await CDP.connect(page.webSocketDebuggerUrl)
  cdp.attach()
  await cdp.send('Runtime.enable')
  await cdp.send('Page.enable')
  await cdp.send('Page.navigate', { url })
  await new Promise((r) => setTimeout(r, waitSec * 1000))
  if (shot) {
    const { data } = await cdp.send('Page.captureScreenshot', { format: 'png' })
    fs.writeFileSync(shot, Buffer.from(data, 'base64'))
    console.log(`RUNNER:SHOT ${shot}`)
  }
  console.log('RUNNER:LOGS')
  for (const l of cdp.logs) console.log('  ' + l)
  const ok = cdp.logs.some((l) => l.startsWith('SELFTEST:PASS'))
  console.log(ok ? 'RUNNER:PASS' : 'RUNNER:FAIL')
  cdp.ws.close()
  edge.kill()
  await new Promise((r) => setTimeout(r, 1500))
  fs.rmSync(work, { recursive: true, force: true })
  process.exit(ok ? 0 : 1)
}

main().catch((e) => {
  console.log('RUNNER:ERROR ' + e.message)
  edge.kill()
  process.exit(1)
})
