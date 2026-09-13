import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CONFIG } from './config.js'
import { createArena } from './game/arena.js'
import { Player } from './game/player.js'
import { WeaponSystem } from './game/weapon.js'
import { Spawner } from './game/spawner.js'
import { LevelUp } from './game/levelup.js'
import { Hud } from './game/hud.js'
import { FloatingText } from './game/text.js'
import { playShot, playHit, playReload, playLevelUp } from './game/sound.js'
import { applyAnimeStyle } from './game/style.js'
import { setEnemyScene } from './game/enemy.js'

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
document.getElementById('game-canvas').appendChild(renderer.domElement)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

const arena = createArena(scene, null)
setEnemyScene(scene)
new GLTFLoader().load('/assets/temple.glb', (gltf) => {
  gltf.scene.traverse((o) => { if (o.isMesh) o.castShadow = true })
  applyAnimeStyle(gltf.scene)
  scene.add(gltf.scene)
})
const hud = new Hud()
const floats = new FloatingText(scene)

let state = 'idle'
let kills = 0
let elapsed = 0
let player, weapon, spawner, levelup

function buildWorld() {
  player = new Player(camera, renderer.domElement, scene)
  spawner = new Spawner(scene, {
    camera,
    obstacles: arena.obstacles,
    onContact: (def) => {
      if (player.takeDamage(CONFIG.player.damageFromEnemy)) hud.flashDamage()
    },
    onEnemyKilled: (dead) => {
      kills++
      levelup.gainXp(dead.def.xp, dead.group.position)
      const pos = dead.group.position
      if (dead.type === 'tank') levelup.spawnHeal('tank', pos)
      else if (Math.random() < CONFIG.heal.small.chance) levelup.spawnHeal('small', pos)
    },
    onDamage: (dmg, pos) => floats.spawn(`-${dmg}`, pos, '#ffd24a'),
    onHurt: (dmg, pos) => floats.spawn(`-${dmg}`, pos, '#ff4444'),
    onProjectileHit: (pr) => {
      if (!player.takeDamage(pr.damage)) return false
      floats.spawn(`-${pr.damage}`, pr.mesh.position, '#ff4444')
      hud.flashDamage()
      return true
    },
    onCrateCollected: (pos) => {
      const locked = weapon.keys.filter((k) => !weapon.unlocked.has(k))
      if (locked.length > 0) {
        const pick = locked[Math.floor(Math.random() * locked.length)]
        weapon.unlock(pick)
        floats.spawn(`获得 ${weapon.guns[pick].label}！`, pos, '#27d8e8')
      } else {
        weapon.applyUpgrade('mag')
        floats.spawn('弹匣扩充！', pos, '#27d8e8')
      }
    },
    onWin: () => onWin(),
  })
  weapon = new WeaponSystem(scene, player, {
    getEnemies: () => spawner.getMeshes(),
    onHit: (mesh, dmg) => {
      spawner.onShotHit(mesh, Math.round(dmg * (player.dmgMult || 1)))
      playHit()
    },
    onShot: () => playShot(weapon.active),
    onReload: () => playReload(),
  })
  levelup = new LevelUp(scene, player, weapon, () => {}, () => {})
  levelup.onLevelUp = (lvl) => {
    state = 'levelup'
    player.controls.unlock()
    playLevelUp()
    hud.showLevelUp(levelup.rollChoices(3), (key) => {
      levelup.applyChoice(key)
      state = 'playing'
      player.safeLock()
    })
  }
}

function resetStats() {
  kills = 0
  elapsed = 0
  spawner.clear()
  spawner.wave = 1
  spawner.waveTimer = 5
  spawner.toSpawn = 0
  levelup.clearPickups()
  levelup.clearHeals()
  levelup.xp = 0
  levelup.level = 1
  levelup.xpNext = CONFIG.levelup.xpForLevel
  player.hp = CONFIG.player.maxHp
  player.maxHp = CONFIG.player.maxHp
  player.speedMult = 1
  player.pos.set(0, CONFIG.player.height, 0)
  player.yVel = 0
  player.jumpQueued = false
  player.ghost = false
  document.getElementById('dbg-ghost').textContent = '穿墙'
  player.invuln = false
  player.dmgMult = 1
  document.getElementById('dbg-invuln').textContent = '无敌'
  document.getElementById('dbg-dmg').value = 1
  document.getElementById('dbg-dmg-val').textContent = '×1'
  weapon.resetUpgrades()
  camera.position.set(0, CONFIG.player.height, 0)
  camera.quaternion.identity()
}

async function startGame() {
  if (!player) {
    buildWorld()
    await player.initControls()
  } else {
    resetStats()
  }
  state = 'playing'
  document.getElementById('start-screen').classList.remove('show')
  hud.hideGameOver()
  player.safeLock()
}

function onGameOver() {
  state = 'dead'
  player.controls.unlock()
  hud.showGameOver({ wave: spawner.wave, kills, time: elapsed })
}

function onWin() {
  state = 'won'
  player.controls.unlock()
  hud.showWin({ wave: spawner.wave, kills, time: elapsed })
}

document.getElementById('continue-btn').addEventListener('click', () => {
  document.getElementById('gameover-screen').classList.remove('show')
  state = 'playing'
  player.safeLock()
})

document.getElementById('start-btn').addEventListener('click', startGame)
document.getElementById('restart-btn').addEventListener('click', startGame)
document.getElementById('relock-btn').addEventListener('click', () => {
  if (state === 'playing' || state === 'won') player.safeLock()
})
window.addEventListener('keydown', (e) => {
  if (e.code === 'F3') {
    e.preventDefault()
    toggleDebug()
  }
  if (e.code === 'Enter' && state === 'dead') startGame()
})

if (location.search.includes('autobattle')) {
  setTimeout(async () => {
    const report = (line) => {
      console.log(`AUTOBATTLE:${line}`)
      document.title = `AUTOBATTLE:${line}`
    }
    try {
      await startGame()
      player.controls = { isLocked: true, lock() {}, unlock() {} }
      levelup.onLevelUp = () => {
        const c = levelup.rollChoices(1)[0]
        if (c) levelup.applyChoice(c.key)
      }
      state = 'simulating'
      const dt = 1 / 60
      const enemyCenterOf = (e) => {
        const c = e.group.position.clone()
        c.y += e.group.userData.centerHeight
        return c
      }
      const results = []
      for (let run = 0; run < 10; run++) {
        if (run > 0) resetStats()
        let t = 0
        let shotCd = 0
        let reason = 'maxtime'
        while (t < 600 && player.hp > 0) {
          let target = null
          let bestD = Infinity
          for (const e of spawner.enemies) {
            const d = enemyCenterOf(e).distanceTo(player.pos)
            if (d < bestD) { bestD = d; target = e }
          }
          if (target) camera.lookAt(enemyCenterOf(target))
          player.keys['KeyW'] = player.keys['KeyS'] = player.keys['KeyA'] = player.keys['KeyD'] = false
          let moveDir = null
          for (const e of spawner.enemies) {
            const d = e.group.position.distanceTo(player.pos)
            const threat = e.def.behavior === 'charger' && e.state === 'telegraph' ? 10 : 2.2
            if (d < threat) {
              moveDir = player.pos.clone().sub(e.group.position)
              moveDir.y = 0
              break
            }
          }
          if (!moveDir && player.hp < player.maxHp * 0.75) {
            for (const h of levelup.heals) {
              const d = h.mesh.position.distanceTo(player.pos)
              if (d < 8) {
                moveDir = h.mesh.position.clone().sub(player.pos)
                moveDir.y = 0
                break
              }
            }
          }
          if (!moveDir) {
            for (const p of levelup.pickups) {
              const d = p.position.distanceTo(player.pos)
              if (d < 4.5) {
                moveDir = p.position.clone().sub(player.pos)
                moveDir.y = 0
                break
              }
            }
          }
          if (moveDir && moveDir.lengthSq() > 0.01) {
            moveDir.normalize()
            const f = player.forward
            const r = player.right
            if (moveDir.dot(f) > 0.3) player.keys['KeyW'] = true
            if (moveDir.dot(f) < -0.3) player.keys['KeyS'] = true
            if (moveDir.dot(r) > 0.3) player.keys['KeyD'] = true
            if (moveDir.dot(r) < -0.3) player.keys['KeyA'] = true
          }
          player.update(dt, arena.halfSize, spawner.getGroups(), false, arena.obstacles)
          weapon.update(dt)
          shotCd -= dt
          if (target && bestD < 45 && shotCd <= 0) {
            weapon.fire()
            shotCd = 0.15
          }
          spawner.update(dt, player.pos, arena.halfSize - 0.5)
          levelup.update(dt, player.pos)
          levelup.updateHeals(dt, player.pos, () => {})
          floats.update(dt)
          t += dt
        }
        if (player.hp <= 0) reason = 'death'
        results.push(reason === 'death' ? t : null)
        report(`RUN${run + 1} reason=${reason} wave=${spawner.waveNumber} kills=${kills} level=${levelup.level} hp=${Math.round(player.hp)}/${player.maxHp} time=${t.toFixed(0)}s`)
      }
      const surv = results.filter((x) => x !== null)
      const avg = surv.length ? (surv.reduce((a, b) => a + b, 0) / surv.length).toFixed(0) : 0
      report(`SUMMARY survived=${surv.length}/10 avgSurvival=${avg}s best=${surv.length ? Math.max(...surv).toFixed(0) : 0}s`)
    } catch (err) {
      report(`ERROR ${err.message} @ ${(err.stack || '').split('\n')[1]}`)
    }
  }, 2000)
}

if (location.search.includes('selftest')) {
  setTimeout(async () => {
    const report = (line) => {
      console.log(`SELFTEST:${line}`)
      document.title = `SELFTEST:${line}`
      const d = document.createElement('div')
      d.style.cssText = 'position:fixed;inset:0;z-index:99;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.9);color:#fff;font:40px monospace'
      d.textContent = line
      document.body.appendChild(d)
    }
    try {
      await startGame()
      player.controls = { isLocked: true, lock() {}, unlock() {} }
      spawner.waveTimer = 0
      spawner.toSpawn = 0
      spawner.startWave()
      spawner.spawnOne()
      spawner.spawnOne()
      weapon.gun.fireInterval = 0.05
      CONFIG.pickup.magnetRange = 60
      let t = 0
      while (t < 60 && kills < 10) {
        spawner.update(1 / 60, player.pos, arena.halfSize - 0.5)
        const tgt = spawner.enemies[0]
        if (tgt) {
          const c = tgt.group.position.clone()
          c.y += tgt.group.userData.centerHeight
          camera.lookAt(c)
        }
        weapon.update(1 / 60)
        levelup.update(1 / 60, player.pos)
        weapon.fire()
        t += 1 / 60
      }
      const ok = kills >= 8 && levelup.xp + levelup.level > 1
      const pp = player.pos.clone(); pp.y = 0
      const near = levelup.pickups.map((p) => {
        const d = p.position.clone(); d.y = 0
        return +pp.distanceTo(d).toFixed(1)
      }).sort((a, b) => a - b)
      report(`${ok ? 'PASS' : 'FAIL'} kills=${kills} level=${levelup.level} xp=${levelup.xp}/${levelup.xpNext} pickups=${levelup.pickups.length} nearest=[${near.slice(0, 3)}]`)
    } catch (err) {
      report(`ERROR ${err.message} @ ${(err.stack || '').split('\n')[1]}`)
    }
  }, 1500)
}

let lastTime = performance.now()
let debugOn = false
let fpsAcc = 0
let fpsCount = 0
let fpsShown = 0

function toggleDebug() {
  debugOn = !debugOn
  document.getElementById('debug-panel').classList.toggle('hide', !debugOn)
  if (!collWire) buildCollisionWires()
  collWire.visible = debugOn
}

function jumpToLevel() {
  if (!levelup) return
  levelup.xp = 0
  let guard = 0
  while (levelup.level < 3 && guard++ < 20) {
    levelup.xp = levelup.xpNext
    levelup.levelUp()
  }
}

let collWire = null
function buildCollisionWires() {
  collWire = new THREE.Group()
  for (const o of arena.obstacles) {
    const w = new THREE.Mesh(
      new THREE.CylinderGeometry(o.r, o.r, 0.08, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xff4444, wireframe: true, transparent: true, opacity: 0.8, depthWrite: false })
    )
    w.position.set(o.x, 0.05, o.z)
    collWire.add(w)
  }
  const ring = new THREE.Mesh(
    new THREE.CylinderGeometry(CONFIG.player.radius, CONFIG.player.radius, 0.06, 16, 1, true),
    new THREE.MeshBasicMaterial({ color: 0x00ff88, wireframe: true, transparent: true, opacity: 0.9, depthWrite: false })
  )
  ring.name = 'playerRing'
  collWire.add(ring)
  collWire.visible = false
  scene.add(collWire)
}

function updateDebugPanel(dt) {
  if (!debugOn) return
  fpsAcc += dt
  fpsCount++
  if (fpsAcc >= 0.5) {
    fpsShown = Math.round(fpsCount / fpsAcc)
    fpsAcc = 0
    fpsCount = 0
  }
  document.getElementById('dbg-fps').textContent =
    `FPS ${fpsShown} ｜ 帧 ${(dt * 1000).toFixed(1)}ms\n` +
    `敌人 ${spawner.enemies.length} ｜ 飞弹 ${spawner.projectiles.length} ｜ 经验球 ${levelup.pickups.length}\n` +
    `坐标 ${player.pos.x.toFixed(1)}, ${player.pos.z.toFixed(1)} ｜ Lv${levelup.level} 波${spawner.waveNumber} 击杀${kills}`
  if (collWire) {
    const pr = collWire.getObjectByName('playerRing')
    if (pr) pr.position.set(player.pos.x, 0.05, player.pos.z)
    for (const e of spawner.enemies) {
      let ring = e.group.userData.dbgRing
      if (!ring) {
        ring = new THREE.Mesh(
          new THREE.CylinderGeometry(e.def.size / 2 + CONFIG.player.contactRadius, e.def.size / 2 + CONFIG.player.contactRadius, 0.06, 16, 1, true),
          new THREE.MeshBasicMaterial({ color: 0xffaa00, wireframe: true, transparent: true, opacity: 0.7, depthWrite: false })
        )
        ring.name = 'enemyRing'
        scene.add(ring)
        e.group.userData.dbgRing = ring
      }
      ring.visible = collWire.visible
      ring.position.set(e.group.position.x, 0.04, e.group.position.z)
    }
  }
}

document.getElementById('dbg-level').addEventListener('click', jumpToLevel)
document.getElementById('dbg-collision').addEventListener('click', () => {
  if (!collWire) buildCollisionWires()
  collWire.visible = !collWire.visible
  for (const e of spawner.enemies) {
    const r = e.group.userData.dbgRing
    if (r) r.visible = collWire.visible
  }
})
document.getElementById('dbg-ghost').addEventListener('click', () => {
  player.ghost = !player.ghost
  document.getElementById('dbg-ghost').textContent = player.ghost ? '穿墙中' : '穿墙'
})
document.getElementById('dbg-invuln').addEventListener('click', () => {
  player.invuln = !player.invuln
  document.getElementById('dbg-invuln').textContent = player.invuln ? '无敌中' : '无敌'
})
document.getElementById('dbg-dmg').addEventListener('input', (e) => {
  player.dmgMult = parseFloat(e.target.value)
  document.getElementById('dbg-dmg-val').textContent = `×${player.dmgMult}`
})

function loop() {
  requestAnimationFrame(loop)
  const now = performance.now()
  const dt = Math.min(0.05, (now - lastTime) / 1000)
  lastTime = now

  if (state === 'playing' || state === 'won') {
    elapsed += dt
    player.update(dt, arena.halfSize, spawner.getGroups(), false, arena.obstacles)
    weapon.update(dt)
    spawner.update(dt, player.pos, arena.halfSize - 0.5)
    levelup.update(dt, player.pos)
    levelup.updateHeals(dt, player.pos, (pos, amt) => floats.spawn(`+${Math.ceil(amt)}`, pos, '#44ff88'))
    floats.update(dt)
    arena.updatePetals(dt)
    if (player.hp <= 0) onGameOver()
  } else if (state === 'levelup') {
    levelup.update(dt, player.pos)
    arena.updatePetals(dt)
  }
  hud.update({
    wave: spawner ? spawner.waveNumber : 1,
    kills: kills || 0,
    hp: player ? player.hp : CONFIG.player.maxHp,
    maxHp: player ? player.maxHp : CONFIG.player.maxHp,
    ...(player ? levelup.getHudData() : { xp: 0, xpNext: CONFIG.levelup.xpForLevel }),
    ammo: weapon ? weapon.getAmmoText() : `${CONFIG.weapon.pistol.magSize} / ${CONFIG.weapon.pistol.magSize}`,
    ammoHint: weapon ? weapon.getReloadHint() : 'R 换弹',
    weaponName: weapon ? weapon.getGunDisplay() : '手枪（1）',
  }, dt)
  if (state === 'playing' || state === 'won') {
    const unlocked = player.controls && !player.controls.isLocked
    const hint = document.getElementById('lock-hint')
    hint.style.display = unlocked ? 'block' : 'none'
    if (unlocked && player.lockFailed) {
      document.getElementById('lock-hint-text').textContent =
        '锁定失败（浏览器冷却期）：已自动重试，稍等 1 秒再点"重新锁定鼠标"'
    } else {
      document.getElementById('lock-hint-text').textContent =
        '画面未锁定：点击"重新锁定鼠标"按钮继续（Esc 退出）'
    }
  }
  updateDebugPanel(dt)
  renderer.render(scene, camera)
}

buildWorld()
player.initControls()
loop()
