import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { mkdir, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { setFoot } from './browser-railway-helpers.mjs'

const require = createRequire(import.meta.url)
const paths = [process.cwd(), process.env.CODEX_WORKSPACE_NODE_MODULES,
  resolve(homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules')].filter(Boolean)
const module = await import(pathToFileURL(require.resolve('playwright', { paths })).href)
const { chromium } = module.default ?? module
const url = process.env.FPS_TEST_URL || 'http://127.0.0.1:5173/fps-game/?test'
const output = resolve('.cache/qa')
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ channel: process.env.FPS_BROWSER_CHANNEL || 'msedge', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = [], views = [], checks = []
page.on('pageerror', (error) => errors.push(error.message))
page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
const check = (name) => { checks.push(name); console.log(`PASS ${name}`) }
const viewpoints = [
  ['west-platform', [-42, 1, 4.3], [-42, 4.4, -4.8]],
  ['east-platform', [42, 1, 4.3], [42, 4.4, -4.8]],
  ['station-approach', [-40, 0, -14.5], [-42, 4.8, -3.8]],
  ['residential', [-35, 0, -31], [-40, 2.8, -44]],
  ['crossing', [0, 0, -10], [0, 1.7, 8]],
  ['maintenance', [46, 0, 35], [50, 2.4, 23]],
  ['bridge-overview', [10, 6, -8], [-22, 2, 0]],
  ['plaza', [-32, 2.4, 28], [-45, 2.8, 44]],
]

try {
  await page.goto(url)
  await page.waitForFunction(() => window.__test && !document.getElementById('start-btn').disabled)
  await page.locator('#start-btn').click()
  await page.waitForFunction(() => window.__dbg().game.active)
  await page.evaluate(() => { window.__test.setManual(true); window.__dbg().train.reset() })
  await page.waitForFunction(() => Object.keys(window.__dbg().weapon.model.models).length === 3)
  check('the real game starts with its models loaded')

  const clearance = await page.evaluate(() => {
    const d = window.__dbg(), invalid = [], signs = []
    for (const station of d.layout.stations) {
      const shape = d.layout.shapes.find((s) => s.id === `${station.id}-station-sign`)
      if (shape) signs.push({ id: shape.id, center: shape.y, bottom: shape.y - shape.height / 2,
        width: shape.width, depth: shape.depth, z: shape.z })
      for (let offset = -12; offset <= 12; offset++) {
        if (!d.world.capsuleClear(new d.THREE.Vector3(station.x + offset, 1.003, -3.95), 2.13, 3.9)) {
          invalid.push(`${station.id} Boss lane x=${offset}`)
        }
      }
      for (const portal of [...station.boardingPoints, ...station.roofBoardingPoints]) {
        if (!d.world.capsuleClear(new d.THREE.Vector3(portal.x, portal.y + 0.003, portal.z), 0.4, 1.8, 'train')) {
          invalid.push(`${station.id} boarding ${portal.x},${portal.y},${portal.z}`)
        }
      }
    }
    for (let x = -55; x <= 55; x++) {
      if (!d.world.capsuleClear(new d.THREE.Vector3(x, 0.15, 0), 1.8, 5.45, 'train')) invalid.push(`train x=${x}`)
    }
    return { signs, invalid }
  })
  assert.equal(clearance.signs.length, 2, 'both station signs must have an authored physical placement')
  for (const sign of clearance.signs) assert.ok(sign.bottom >= 5.0, `${sign.id} blocks elevated large enemies`)
  assert.deepEqual(clearance.invalid, [])
  check('raised signs and station details preserve the Boss lane, boarding portals and moving roof clearance')

  const signals = await page.evaluate(() => {
    const d = window.__dbg(), ids = new Set(d.layout.shapes.filter((s) => s.signal).map((s) => s.id)), lamps = []
    d.scene.traverse((object) => { if (ids.has(object.userData.shapeId)) lamps.push(object) })
    const values = () => lamps.map((lamp) => lamp.material.emissiveIntensity)
    d.train.reset(); window.__test.step(0); window.__test.step(0)
    const idle = values()
    d.train.phase = 'warning'; d.train.timer = 6; d.train.publish()
    window.__test.step(0.01); window.__test.step(0.01)
    const first = values()
    window.__test.step(0.25)
    const second = values()
    d.train.reset(); window.__test.step(0); window.__test.step(0)
    return { expected: ids.size, count: lamps.length, materials: new Set(lamps.map((lamp) => lamp.material)).size,
      idle, first, second, restored: values() }
  })
  assert.ok(signals.expected > 0)
  assert.equal(signals.count, signals.expected)
  assert.equal(signals.materials, signals.count)
  assert.deepEqual(signals.restored, signals.idle)
  assert.ok(signals.first.every((value, index) => value > signals.idle[index] && value !== signals.second[index]))
  check('crossing lenses retain independent materials and blink with the real train warning state')

  for (const [name, foot, look] of viewpoints) {
    await setFoot(page, foot, look)
    await page.evaluate(() => {
      const d = window.__dbg(); d.spawner.preparationTimer = 15; d.game.stats.elapsed = 0
      window.__test.step(0)
    })
    const stats = await page.evaluate(() => {
      const d = window.__dbg(); let instanceBatches = 0, instances = 0
      d.scene.traverse((object) => { if (object.isInstancedMesh) { instanceBatches++; instances += object.count } })
      return { foot: d.player.footPosition.toArray(), eye: d.camera.position.toArray(),
        renderCalls: d.renderer.info.render.calls, triangles: d.renderer.info.render.triangles,
        geometries: d.renderer.info.memory.geometries, textures: d.renderer.info.memory.textures,
        instanceBatches, instances }
    })
    const path = resolve(output, `scene-detail-${name}.png`)
    await page.screenshot({ path })
    assert.ok(stats.instanceBatches > 0 && stats.instances > stats.instanceBatches * 20,
      `${name} does not batch the repeated scene dressings effectively`)
    assert.ok(stats.renderCalls > 0 && stats.renderCalls < 1000, `${name} exceeds the 1000-call review budget`)
    views.push({ name, path, ...stats })
  }
  check('eight game-camera views captured with batched details and fewer than 1000 render calls per view')
  assert.deepEqual(errors, [])
  check('no browser exceptions, console errors or failing resources')
  await writeFile(resolve(output, 'scene-detail-check.json'), JSON.stringify({ url, clearance, signals, checks, errors, views }, null, 2))
  console.log(`Scene review artifacts: ${output}`)
} catch (error) {
  await page.screenshot({ path: resolve(output, 'scene-detail-failure.png') }).catch(() => {})
  await writeFile(resolve(output, 'scene-detail-failure.json'), JSON.stringify({ url, errors, checks, error: error.message }, null, 2))
  throw error
} finally { await browser.close() }
