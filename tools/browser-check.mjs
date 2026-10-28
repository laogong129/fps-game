import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { advance, snapshot, setFoot, checkWorld, checkTrain, checkGuns } from './browser-railway-helpers.mjs'

const require = createRequire(import.meta.url)
const paths = [process.cwd(), process.env.CODEX_WORKSPACE_NODE_MODULES,
  resolve(homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules')].filter(Boolean)
const playwright = await import(pathToFileURL(require.resolve('playwright', { paths })).href)
const { chromium } = playwright.default ?? playwright
const production = process.argv.includes('--production')
const url = process.env.FPS_TEST_URL || (production ? 'http://127.0.0.1:5174/fps-game/' : 'http://127.0.0.1:5173/fps-game/?test')
const output = resolve('.cache/qa')
await mkdir(output, { recursive: true })
const browser = await chromium.launch({ channel: process.env.FPS_BROWSER_CHANNEL || 'msedge', headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, acceptDownloads: true })
const errors = [], checks = []
page.on('pageerror', (error) => errors.push(error.message))
page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
page.on('response', (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`) })
const check = (name) => { checks.push(name); console.log(`PASS ${name}`) }
const shot = (name) => page.screenshot({ path: resolve(output, `railway-${name}.png`) })
const step = (dt) => page.evaluate((time) => window.__test.step(time), dt)
const waitState = (...states) => page.waitForFunction((values) => values.includes(window.__dbg().game.state), states)

async function resume() {
  await page.waitForFunction(() => window.__dbg().game.active || window.__dbg().player.lockFailed)
  if (await page.evaluate(() => window.__dbg().player.lockFailed)) await page.locator('#resume-btn').click()
  await waitState('preparation', 'combat')
}

async function developmentChecks() {
  await shot('start')
  await page.locator('#start-btn').click()
  await waitState('preparation')
  await page.evaluate(() => window.__test.setManual(true))
  await page.waitForFunction(() => Object.keys(window.__dbg().weapon.model.models).length === 3)
  assert.match(await page.locator('#prep-countdown').innerText(), /第 1 波/)
  assert.equal(await page.evaluate(() => !!document.pointerLockElement), true)
  assert.equal(await page.locator('#control-num').count(), 0)
  assert.equal(await page.evaluate(() => window.__dbg().layout.bounds), 60)
  check('trusted start locks the pointer into the 120-meter railway world with no occupation UI')
  await shot('street')
  await checkGuns(page, shot, check)
  const initial = (await snapshot(page)).foot
  await page.keyboard.down('KeyW'); await step(0.1); await page.keyboard.up('KeyW')
  assert.ok(Math.abs((await snapshot(page)).foot[2] - initial[2]) > 0.4)
  check('trusted WASD input moves the real character')
  await checkWorld(page, shot, check)
  await checkTrain(page, shot, check)

  await page.keyboard.press('Escape'); await waitState('paused')
  const paused = await snapshot(page)
  await page.keyboard.press('KeyR'); await step(5)
  assert.deepEqual(await snapshot(page), paused)
  await shot('pause')
  check('Escape freezes the moving train, passenger, cooldowns, resources and run time')
  await page.locator('#resume-btn').click(); await waitState('preparation')
  await page.evaluate(() => { const d = window.__dbg(); d.train.reset(); d.player.reset(); d.levelup.gainXp(25, d.player.footPosition); window.__test.step(0.01) })
  await waitState('levelup')
  assert.equal(await page.evaluate(() => window.__dbg().levelup.pendingUpgrades), 2)
  const choosing = await snapshot(page); await step(10)
  assert.deepEqual(await snapshot(page), choosing)
  await shot('upgrade')
  const firstGun = await page.getByRole('button', { name: /解锁：/ }).count() > 0
  await page.locator('.choice').first().click()
  assert.equal(await page.evaluate(() => window.__dbg().levelup.pendingUpgrades), 1)
  const gun = page.getByRole('button', { name: /解锁：/ })
  const secondGun = await gun.count() > 0
  assert.ok(firstGun || secondGun)
  await (secondGun ? gun.first() : page.locator('.choice').first()).click()
  await resume()
  assert.equal(await page.evaluate(() => window.__dbg().levelup.pendingUpgrades), 0)
  assert.equal(await page.evaluate(() => window.__dbg().levelup.upgrades.length), 2)
  assert.equal(await page.evaluate(() => window.__dbg().weapon.mouseHeld), false)
  check('two real pickup upgrades preserve both rewards, freeze the train and offer an early gun')

  await page.evaluate(() => {
    const d = window.__dbg(); d.player.reset(); d.weapon.resetUpgrades(); d.weapon.setEnabled(true)
    d.train.reset(); d.spawner.preparationTimer = 15
  })
  await page.keyboard.press('KeyG'); await waitState('combat'); await step(0.01)
  const spawn = await page.evaluate(() => {
    const d = window.__dbg(), marker = d.spawner.markers.children[0]
    if (!marker) return null
    const point = marker.userData.desc.pos
    return { distance: point.distanceTo(d.player.footPosition), clear: d.world.capsuleClear(point, 0.42, 1.7),
      route: d.navigation.findPath(point, d.player.footPosition, 0.42, 1.7).length }
  })
  assert.ok(spawn && spawn.distance >= 24.9 && spawn.distance <= 40.1, JSON.stringify(spawn))
  assert.ok(spawn.clear && spawn.route > 0)
  await step(1.5)
  assert.ok(await page.evaluate(() => window.__dbg().spawner.enemies.length > 0))
  check('a local warned spawn has a valid surface and pursuit route within the intended distance')
  await shot('combat')

  await page.evaluate(() => {
    const d = window.__dbg(), enemy = d.spawner.enemies[0]
    enemy.hp = enemy.maxHp = 100
    enemy.motor.reset(new d.THREE.Vector3(-10, 0, -30)); enemy.group.position.copy(enemy.motor.position)
    d.camera.userData.testAim = d.camera.quaternion.clone()
    enemy.group.updateMatrixWorld(true)
    d.camera.lookAt(new d.THREE.Box3().setFromObject(enemy.body).getCenter(new d.THREE.Vector3()))
    d.weapon.gun.fireTimer = 0
    window.__test.step(0)
  })
  await page.mouse.down(); await page.mouse.up()
  const emitted = await page.evaluate(() => {
    const d = window.__dbg()
    return { hp: d.spawner.enemies[0].hp, damage: d.game.stats.weapons.pistol.damage,
      shots: d.game.stats.weapons.pistol.shots, bullets: d.weapon.ballistics.items.length,
      position: d.weapon.ballistics.items[0]?.position.toArray() }
  })
  assert.equal(emitted.hp, 100); assert.equal(emitted.damage, 0); assert.equal(emitted.shots, 1); assert.equal(emitted.bullets, 1)
  await advance(page, 0.005, 0.005)
  const flying = await page.evaluate(() => {
    const d = window.__dbg(), points = d.weapon.effects.tracer?.geometry.attributes.position
    return { hp: d.spawner.enemies[0].hp, position: d.weapon.ballistics.items[0]?.position.toArray(),
      tail: points && new d.THREE.Vector3().fromBufferAttribute(points, 0).distanceTo(new d.THREE.Vector3().fromBufferAttribute(points, 1)) }
  })
  assert.equal(flying.hp, 100); assert.notDeepEqual(flying.position, emitted.position)
  assert.ok(flying.tail > 0.01 && flying.tail <= 2.01)
  await shot('bullet-flight'); await advance(page, 0.1)
  const hit = await page.evaluate(() => {
    const d = window.__dbg(), enemy = d.spawner.enemies[0]
    const result = { hp: enemy.hp, shots: d.game.stats.weapons.pistol.shots, damage: d.game.stats.weapons.pistol.damage }
    enemy.hp = enemy.maxHp = enemy.def.hp; d.camera.quaternion.copy(d.camera.userData.testAim)
    return result
  })
  assert.ok(hit.hp < 100 && hit.hp > 0); assert.equal(hit.shots, 1); assert.ok(hit.damage > 0)
  check('a trusted shot visibly travels with a short tail before hitting the actual animated enemy and recording damage')

  await setFoot(page, [-23, 0, -28], [-23, 1.7, -14])
  const wallBefore = await page.evaluate(() => {
    const d = window.__dbg(), enemy = d.spawner.enemies[0]
    enemy.hp = enemy.maxHp = 100
    enemy.motor.reset(new d.THREE.Vector3(-23, 0, -14)); enemy.group.position.copy(enemy.motor.position)
    enemy.group.updateMatrixWorld(true)
    d.camera.lookAt(new d.THREE.Box3().setFromObject(enemy.body).getCenter(new d.THREE.Vector3()))
    d.weapon.gun.fireTimer = 0
    return { damage: d.game.stats.weapons.pistol.damage, shots: d.game.stats.weapons.pistol.shots }
  })
  await page.mouse.down(); await page.mouse.up(); await advance(page, 0.15)
  const wallAfter = await page.evaluate(() => {
    const d = window.__dbg(), enemy = d.spawner.enemies[0]
    const result = { hp: enemy.hp, damage: d.game.stats.weapons.pistol.damage,
      shots: d.game.stats.weapons.pistol.shots, bullets: d.weapon.ballistics.items.length }
    enemy.hp = enemy.maxHp = enemy.def.hp
    return result
  })
  assert.equal(wallAfter.hp, 100); assert.equal(wallAfter.damage, wallBefore.damage)
  assert.equal(wallAfter.shots, wallBefore.shots + 1); assert.equal(wallAfter.bullets, 0)
  check('a physical bullet stops at a real building wall before reaching an enemy behind it')

  await setFoot(page, [10, 6, 0], [10, 7.7, -20])
  const above = await page.evaluate(() => {
    const d = window.__dbg(), enemy = d.spawner.enemies[0]
    enemy.motor.reset(new d.THREE.Vector3(10, 0, 0)); enemy.group.position.copy(enemy.motor.position)
    const before = d.player.hp; window.__test.step(0)
    return { before, after: d.player.hp }
  })
  assert.equal(above.after, above.before)
  check('ground enemies cannot melee through the bridge floor')
  await page.evaluate(() => {
    const d = window.__dbg(); d.spawner.spawnQueue = []; d.spawner.warnings.clear()
    for (const enemy of d.spawner.enemies) { enemy.dead = true; enemy.deathState = 'done' }
    d.levelup.gainXp(2, new d.THREE.Vector3(0, 0, -30)); window.__test.step(0.01)
  })
  await waitState('preparation')
  assert.equal(await page.evaluate(() => window.__dbg().levelup.totalXp), 27)
  assert.equal(await page.evaluate(() => window.__dbg().levelup.pickups.length), 0)
  assert.match(await page.locator('#prep-countdown').innerText(), /第 2 波/)
  check('clear recovers distant experience and starts the next preparation')

  const progression = await page.evaluate(() => {
    const d = window.__dbg(), crates = []
    d.player.reset()
    for (let wave = 2; wave <= 7; wave++) {
      d.game.startNextWave(); if (d.spawner.crate) crates.push(wave)
      d.spawner.spawnQueue = []; d.spawner.warnings.clear()
      for (const enemy of d.spawner.enemies) { enemy.dead = true; enemy.deathState = 'done' }
      window.__test.step(0.01); d.spawner.removeCrate()
    }
    d.game.startNextWave(); window.__test.step(0.01); window.__test.step(1.5)
    d.spawner.spawnQueue = []; d.spawner.warnings.clear()
    const boss = d.spawner.enemies.find((e) => e.type === 'boss')
    window.__test.step(0.01)
    return { crates, state: d.game.state, bossAlive: !!boss && !boss.dead }
  })
  assert.deepEqual(progression.crates, [3, 6]); assert.equal(progression.state, 'combat'); assert.ok(progression.bossAlive)
  check('waves 3/6 supply crates and a living final Boss prevents victory')
  await page.evaluate(() => {
    const d = window.__dbg()
    for (const enemy of d.spawner.enemies) d.spawner.onShotHit(enemy.group, 99999, { weaponKey: 'pistol' })
    window.__test.step(0.01)
  })
  await waitState('won')
  const won = await snapshot(page); await step(20); assert.deepEqual(await snapshot(page), won)
  await shot('victory')
  check('complete final clear wins and freezes the train and all simulation')
  await page.locator('#restart-btn').click(); await waitState('preparation')
  const reset = await page.evaluate(() => {
    const d = window.__dbg()
    return { wave: d.spawner.wave, hp: d.player.hp, upgrades: d.levelup.upgrades.length,
      unlocked: d.weapon.unlocked.size, kills: d.game.stats.kills, trainX: d.train.position.x, trip: d.train.tripId }
  })
  assert.deepEqual(reset, { wave: 0, hp: 100, upgrades: 0, unlocked: 1, kills: 0, trainX: -42, trip: 0 })
  await page.evaluate(() => { const d = window.__dbg(); d.player.hp = 0; d.player.lastDamage = 'train'; window.__test.step(0.01) })
  await waitState('dead'); assert.match(await page.locator('#result-reason').innerText(), /列车/)
  await shot('defeat')
  const downloading = page.waitForEvent('download'); await page.locator('#export-btn').click()
  await (await downloading).saveAs(resolve(output, 'railway-run.json'))
  const report = JSON.parse(await readFile(resolve(output, 'railway-run.json'), 'utf8'))
  assert.equal(report.version, 2); assert.equal(report.result, 'player_dead'); assert.equal(report.deathCause, 'train')
  assert.equal('control' in report, false)
  check('restart clears all state and death exports the occupation-free StatsV2 report')
}

try {
  await page.goto(url)
  await page.waitForFunction((prod) => (prod || window.__test) && !document.getElementById('start-btn').disabled, production)
  if (production) {
    assert.equal(await page.evaluate(() => window.__dbg), undefined)
    await page.locator('#start-btn').click()
    await page.waitForFunction(() => document.pointerLockElement && document.getElementById('hud-phase').textContent === '备战')
    assert.equal(await page.locator('#control-num').count(), 0)
    await page.keyboard.press('KeyG')
    await page.waitForFunction(() => document.getElementById('hud-phase').textContent === '交战')
    await shot('production-combat'); await page.keyboard.press('Escape')
    await page.waitForFunction(() => document.getElementById('pause-screen').classList.contains('show'))
    check('production assets load, start, spawn and pause without development hooks or occupation UI')
  } else await developmentChecks()
  assert.deepEqual(errors, []); check('no browser exceptions, console errors or failing resources')
  await writeFile(resolve(output, production ? 'production-check.json' : 'browser-check.json'), JSON.stringify({ url, checks, errors, screenshots: output }, null, 2))
  console.log(`${checks.length} browser checks passed; artifacts: ${output}`)
} catch (error) {
  const diagnostic = { errors, state: await page.evaluate(() => ({ title: document.title,
    phase: document.getElementById('hud-phase')?.textContent, start: document.getElementById('start-btn')?.textContent,
    game: window.__dbg?.().game.state, foot: window.__dbg?.().player.footPosition.toArray() })).catch(() => null) }
  await shot(production ? 'production-failure' : 'browser-failure').catch(() => {})
  await writeFile(resolve(output, 'last-failure.json'), JSON.stringify(diagnostic, null, 2))
  console.error(JSON.stringify(diagnostic)); throw error
} finally { await browser.close() }
