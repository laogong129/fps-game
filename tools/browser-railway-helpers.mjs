import assert from 'node:assert/strict'

export const advance = (page, seconds, tick = 1 / 60) => page.evaluate(({ seconds, tick }) => {
  const d = window.__dbg()
  let remaining = seconds
  while (remaining > 1e-8) { const dt = Math.min(tick, remaining); d.game.update(dt); remaining -= dt }
  window.__test.step(0)
}, { seconds, tick })

export const snapshot = (page) => page.evaluate(() => {
  const d = window.__dbg()
  return {
    time: d.game.stats.elapsed, hp: d.player.hp, foot: d.player.footPosition.toArray(),
    support: d.player.supportId, ammo: d.weapon.gun.ammo, cooldown: d.weapon.gun.fireTimer,
    prep: d.spawner.preparationTimer, spawn: d.spawner.spawnTimer,
    train: { position: d.train.position.toArray(), timer: d.train.timer, clock: d.train.clock, phase: d.train.phase, trip: d.train.tripId },
    enemies: d.spawner.enemies.map((e) => e.group.position.toArray()),
    bullets: (d.weapon.ballistics?.items || []).map((b) => ({ position: b.position.toArray(), velocity: b.velocity.toArray(), age: b.age })),
    experience: d.levelup.pickups.map((p) => ({ position: p.position.toArray(), age: p.userData.age })),
    heals: d.levelup.heals.map((h) => ({ position: h.mesh.position.toArray(), age: h.mesh.userData.age })),
  }
})

export const setFoot = (page, position, look) => page.evaluate(({ position, look }) => {
  const d = window.__dbg()
  d.player.clearInput()
  d.player.motor.reset(new d.THREE.Vector3(...position))
  d.player.syncCamera()
  if (look) d.camera.lookAt(new d.THREE.Vector3(...look))
  window.__test.step(0)
}, { position, look })

export const weaponBounds = (page, key, ads = false) => page.evaluate(({ key, ads }) => {
  const d = window.__dbg()
  d.weapon.unlock(key); d.weapon.switchTo(key, true)
  d.weapon.adsHeld = ads; d.weapon.update(1)
  window.__test.step(0)
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity
  const vertex = new d.THREE.Vector3()
  d.player.gunModel.traverse((mesh) => {
    if (!mesh.isMesh) return
    const positions = mesh.geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i).applyMatrix4(mesh.matrixWorld).project(d.camera)
      minX = Math.min(minX, vertex.x); maxX = Math.max(maxX, vertex.x)
      minY = Math.min(minY, vertex.y); maxY = Math.max(maxY, vertex.y)
    }
  })
  return { minX, maxY, width: (maxX - minX) / 2,
    visibleHeight: (Math.min(1, maxY) - Math.max(-1, minY)) / 2, fov: d.camera.fov,
    muzzleError: d.weapon.effects.getMuzzleWorld().distanceTo(d.player.gunModel.getObjectByName('Muzzle').getWorldPosition(new d.THREE.Vector3())) }
}, { key, ads })

export async function checkWorld(page, shot, check) {
  await page.evaluate(() => { window.__dbg().spawner.preparationTimer = 9999 })
  await setFoot(page, [10, 0, -36], [10, 1.7, 0])
  await page.keyboard.down('KeyW'); await advance(page, 5); await page.keyboard.up('KeyW')
  const bridge = await snapshot(page)
  assert.ok(Math.abs(bridge.foot[1] - 6) < 0.08, `bridge elevation ${bridge.foot[1]}`)
  await shot('bridge')
  await page.keyboard.down('KeyS'); await advance(page, 5); await page.keyboard.up('KeyS')
  assert.ok(Math.abs((await snapshot(page)).foot[1]) < 0.08)
  await setFoot(page, [10, 0, 0], [10, 1.7, -20]); await advance(page, 0.1)
  assert.ok(Math.abs((await snapshot(page)).foot[1]) < 0.08)
  const underside = await page.evaluate(() => {
    const d = window.__dbg()
    return d.world.raycast(new d.THREE.Vector3(10, 1.7, 0), new d.THREE.Vector3(10, 9, 0))?.point.y
  })
  assert.ok(underside > 5.5 && underside < 6.1)
  await shot('underpass')
  check('real player walks both ways over the six-meter bridge and remains on the separate ground below')

  await setFoot(page, [22, 0, -24.1], [22, 1.7, -20])
  await page.keyboard.down('KeyW'); await page.keyboard.press('Space'); await advance(page, 0.08)
  assert.ok(await page.evaluate(() => !!window.__dbg().player.motor.traversal), 'W+Space starts a validated mantle')
  assert.equal(await page.evaluate(() => window.__dbg().weapon.fire()), false)
  await advance(page, 0.65); await page.keyboard.up('KeyW')
  assert.ok((await snapshot(page)).foot[1] > 1.5)
  await shot('parkour')
  check('trusted W+Space climbs a real obstacle and prevents firing during the movement')
}

export async function checkTrain(page, shot, check) {
  await page.evaluate(() => window.__dbg().train.reset())
  await setFoot(page, [-48, 1, -3], [-48, 2.7, 0])
  await page.keyboard.down('KeyW'); await advance(page, 0.5); await page.keyboard.up('KeyW')
  const boarded = await snapshot(page)
  assert.ok(Math.abs(boarded.foot[2]) < 0.08 && Math.abs(boarded.foot[1] - 1) < 0.08)
  assert.equal(boarded.support, 'train')
  await page.evaluate(() => { const d = window.__dbg(); d.camera.lookAt(new d.THREE.Vector3(-30, 2.7, 0)) })
  await page.keyboard.down('KeyW'); await advance(page, 2); await page.keyboard.up('KeyW')
  assert.ok(Math.abs((await snapshot(page)).foot[0] + 36) < 0.08)
  await page.evaluate(() => { const d = window.__dbg(); d.camera.lookAt(new d.THREE.Vector3(-36, 2.7, 5)) })
  await page.keyboard.down('KeyW'); await advance(page, 0.6); await page.keyboard.up('KeyW')
  const exited = await snapshot(page)
  assert.ok(exited.foot[2] > 3.4 && Math.abs(exited.foot[1] - 1) < 0.08)
  assert.notEqual(exited.support, 'train')
  check('trusted movement boards an open door, crosses both cars and exits onto the opposite platform')

  await setFoot(page, [-48, 1, -1.76], [-48, 2.7, 0])
  await page.evaluate(() => { const d = window.__dbg(); d.train.phase = 'warning'; d.train.timer = 1.1; d.train.publish() })
  await advance(page, 2)
  const blocked = await snapshot(page)
  assert.equal(blocked.train.phase, 'warning')
  assert.equal(blocked.train.position[0], -42)
  assert.ok(await page.evaluate(() => window.__dbg().train.blocked && window.__dbg().train.doorsOpen))
  await page.keyboard.down('KeyW'); await advance(page, 0.3); await page.keyboard.up('KeyW')
  await advance(page, 1.1)
  assert.equal((await snapshot(page)).train.phase, 'travel')
  assert.equal(await page.evaluate(() => window.__dbg().train.doorsOpen), false)
  check('a real player blocking a door delays closure and departure until they step inside')

  const occlusion = await page.evaluate(() => {
    const d = window.__dbg(); d.train.reset()
    const hit = (from, to) => d.world.raycast(new d.THREE.Vector3(...from), new d.THREE.Vector3(...to))?.shape.id
    const result = {
      window: hit([-50.5, 2.6, -3], [-50.5, 2.6, 0]),
      reverseWindow: hit([-50.5, 2.6, 0], [-50.5, 2.6, -3]),
      wall: hit([-50.5, 1.6, -3], [-50.5, 1.6, 0]),
      roof: hit([-48, 2.6, 0], [-48, 5, 0]),
      openDoor: hit([-48, 2.6, -3], [-48, 2.6, 0]),
    }
    d.train.phase = 'warning'; d.train.timer = 0.5; d.train.publish()
    result.closedDoor = hit([-48, 2.6, -3], [-48, 2.6, 0])
    return result
  })
  assert.equal(occlusion.window, undefined); assert.equal(occlusion.reverseWindow, undefined)
  assert.equal(occlusion.openDoor, undefined)
  assert.match(occlusion.wall, /sill/); assert.match(occlusion.roof, /roof/)
  assert.match(occlusion.closedDoor, /door/)
  check('windows allow fire in both directions while solid walls, roof and closed doors block the shared world raycast')

  await page.evaluate(() => window.__dbg().train.reset())
  await setFoot(page, [-48, 1, 0], [-44, 2.7, 0])
  await shot('train-interior')
  const before = await snapshot(page)
  await advance(page, 27)
  const inside = await snapshot(page)
  assert.ok(inside.train.position[0] > before.train.position[0] + 7)
  assert.ok(Math.abs((inside.foot[0] - inside.train.position[0]) - (before.foot[0] - before.train.position[0])) < 0.04)
  assert.equal(inside.hp, before.hp)
  assert.equal(inside.support, 'train')
  check('an interior passenger is carried by the real moving car without collision damage')

  await page.keyboard.press('Space'); await advance(page, 0.12)
  const interiorJump = await snapshot(page)
  assert.ok(interiorJump.foot[1] > 1.1)
  assert.equal(interiorJump.hp, inside.hp)
  assert.equal(await page.evaluate(() => window.__dbg().player.motor.airborneBodyId), 'train')
  await advance(page, 0.7)
  const jumpLanded = await snapshot(page)
  assert.equal(jumpLanded.hp, inside.hp)
  assert.equal(jumpLanded.support, 'train')
  assert.ok(Math.abs(jumpLanded.foot[1] - 1) < 0.08)
  assert.ok(Math.abs((jumpLanded.foot[0] - jumpLanded.train.position[0]) - (inside.foot[0] - inside.train.position[0])) < 0.2,
    JSON.stringify({ inside, jumpLanded }))
  check('trusted jumping inside a moving car preserves passenger safety through takeoff, head contact and landing')

  const movingLadder = await page.evaluate(() => window.__dbg().train.getLadders()[0].bottom.toArray())
  await setFoot(page, movingLadder, [movingLadder[0] + 4, 2.7, 0])
  await advance(page, 0.05)
  assert.equal(await page.evaluate(() => window.__dbg().player.motor.traversal?.bodyId), 'train')
  await advance(page, 1.4)
  const climbedMoving = await snapshot(page)
  assert.equal(climbedMoving.hp, inside.hp)
  assert.equal(climbedMoving.support, 'train')
  assert.ok(Math.abs(climbedMoving.foot[1] - 3.5) < 0.08)
  check('touching a moving ladder automatically climbs without any keypress or self-collision damage')
  await advance(page, 1)
  assert.ok(Math.abs((await snapshot(page)).foot[1] - 3.5) < 0.08, 'the exit does not retrigger the ladder')
  await page.evaluate(() => {
    const d = window.__dbg(), top = d.train.getLadders()[0].top
    d.player.motor.reset(top.clone().add(new d.THREE.Vector3(1.2, 0, 0))); d.player.syncCamera()
    d.camera.lookAt(d.camera.position.clone().add(new d.THREE.Vector3(-4, 0, 0)))
  })
  await advance(page, 0.05)
  await page.keyboard.down('KeyW'); await advance(page, 0.15); await page.keyboard.up('KeyW')
  assert.equal(await page.evaluate(() => window.__dbg().player.motor.traversal?.bodyId), 'train')
  await advance(page, 1.4)
  const descendedMoving = await snapshot(page)
  assert.equal(descendedMoving.hp, inside.hp)
  assert.equal(descendedMoving.support, 'train')
  assert.ok(Math.abs(descendedMoving.foot[1] - 1) < 0.08)
  assert.equal(await page.evaluate(() => window.__dbg().game.stats.trainHits), 0)
  check('walking back into the roof ladder descends automatically and preserves safe vehicle support')

  await page.evaluate(() => { const d = window.__dbg(); d.train.reset(); d.player.reset() })
  const ladder = await page.evaluate(() => window.__dbg().train.getLadders()[0].bottom.toArray())
  await setFoot(page, [ladder[0] - 0.9, ladder[1], ladder[2]], [ladder[0] + 4, 2.7, 0])
  await page.keyboard.down('KeyW'); await advance(page, 0.1); await page.keyboard.up('KeyW')
  assert.ok(await page.evaluate(() => !!window.__dbg().player.motor.traversal))
  await advance(page, 1.35)
  assert.ok(Math.abs((await snapshot(page)).foot[1] - 3.5) < 0.08)
  const roofStart = await snapshot(page)
  await advance(page, 26)
  const roof = await snapshot(page)
  assert.equal(roof.support, 'train')
  assert.equal(roof.hp, roofStart.hp)
  assert.ok(Math.abs(roof.foot[1] - 3.5) < 0.08)
  await shot('train-roof')
  check('walking into the stopped ladder climbs automatically and stays on the moving roof without bouncing back')

  await page.evaluate(() => { const d = window.__dbg(); d.camera.lookAt(d.camera.position.clone().add(new d.THREE.Vector3(0, 0, 10))) })
  await page.keyboard.down('KeyW'); await advance(page, 0.22)
  await page.keyboard.press('Space'); await advance(page, 0.1)
  const jumping = await snapshot(page)
  assert.ok(jumping.foot[1] > 3.6)
  assert.notEqual(jumping.support, 'train')
  await advance(page, 1.3); await page.keyboard.up('KeyW'); await advance(page, 0.5)
  const landed = await snapshot(page)
  assert.ok(await page.evaluate(() => window.__dbg().player.motor.grounded))
  assert.notEqual(landed.support, 'train')
  assert.equal(landed.hp, roof.hp)
  assert.ok(Math.abs(landed.foot[2]) > 3)
  check('trusted jumping leaves a moving roof, retains momentum and lands without fall or passenger collision damage')

  await page.evaluate(() => { const d = window.__dbg(); d.train.reset(); d.train.phase = 'travel'; d.train.tripId = 1; d.train.publish() })
  await setFoot(page, [-27, 0, 0], [0, 1.7, 0])
  await advance(page, 1)
  const impact = await snapshot(page)
  assert.equal(impact.hp, 20)
  assert.equal(await page.evaluate(() => window.__dbg().game.stats.trainHits), 1)
  assert.ok(Math.abs(impact.foot[2]) > 2)
  await advance(page, 0.1)
  assert.equal((await snapshot(page)).hp, 20)
  check('a swept front collision removes eighty percent health once and ejects the player safely')
  const passenger = await page.evaluate(() => { const d = window.__dbg(); return [d.train.position.x - 6, 1, 0] })
  await setFoot(page, passenger); await advance(page, 0.1)
  assert.equal((await snapshot(page)).support, 'train')
}

export async function checkGuns(page, shot, check) {
  for (const key of ['pistol', 'shotgun', 'rifle']) {
    const hip = await weaponBounds(page, key), ads = await weaponBounds(page, key, true)
    assert.ok(hip.width > 0.12 && hip.width < 0.35, `${key} width ${hip.width}`)
    assert.ok(hip.visibleHeight > 0.2 && hip.visibleHeight < 0.45)
    assert.ok(hip.maxY < 0 && hip.minX > -0.02)
    assert.ok(Math.abs(ads.width - hip.width) < 0.005)
    assert.ok(Math.abs(ads.visibleHeight - hip.visibleHeight) < 0.005)
    assert.ok(ads.fov < hip.fov && ads.muzzleError < 0.00001 && hip.muzzleError < 0.00001)
    await shot(`${key}-ads`)
  }
  await page.evaluate(() => { const d = window.__dbg(); d.weapon.resetUpgrades(); d.weapon.setEnabled(d.game.active); window.__test.step(0) })
  check('all three actual gun models preserve screen bounds in ADS and share their real muzzle with flash and ballistics')
}
