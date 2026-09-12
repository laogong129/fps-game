import * as THREE from 'three'
import { CONFIG } from './config.js'
import { createArena } from './game/arena.js'
import { Player } from './game/player.js'
import { Weapon } from './game/weapon.js'
import { Spawner } from './game/spawner.js'
import { LevelUp } from './game/levelup.js'
import { Hud } from './game/hud.js'
import { FloatingText } from './game/text.js'

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

const arena = createArena(scene)
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
    onContact: (def) => player.takeDamage(CONFIG.player.damageFromEnemy),
    onEnemyKilled: (dead) => {
      kills++
      levelup.gainXp(dead.def.xp, dead.group.position)
    },
    onDamage: (dmg, pos) => floats.spawn(`-${dmg}`, pos, '#ffd24a'),
    onHurt: (dmg, pos) => floats.spawn(`-${dmg}`, pos, '#ff4444'),
  })
  levelup = new LevelUp(scene, player, weapon, () => {}, () => {})
  weapon = new Weapon(scene, player, {
    getEnemies: () => spawner.getMeshes(),
    onHit: (mesh, dmg) => spawner.onShotHit(mesh, dmg),
    onShot: () => {},
  })
  levelup.weapon = weapon
  levelup.onLevelUp = (lvl) => {
    state = 'levelup'
    player.controls.unlock()
    hud.showLevelUp(levelup.rollChoices(3), (key) => {
      levelup.applyChoice(key)
      state = 'playing'
      player.controls.lock()
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
  levelup.xp = 0
  levelup.level = 1
  levelup.xpNext = CONFIG.levelup.xpForLevel
  player.hp = CONFIG.player.maxHp
  player.maxHp = CONFIG.player.maxHp
  player.speedMult = 1
  player.pos.set(0, CONFIG.player.height, 0)
  weapon.damage = CONFIG.weapon.damage
  weapon.fireInterval = CONFIG.weapon.fireInterval
  weapon.magSize = CONFIG.weapon.magSize
  weapon.ammo = CONFIG.weapon.magSize
  weapon.reloading = false
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
  player.controls.lock()
}

function onGameOver() {
  state = 'dead'
  player.controls.unlock()
  hud.showGameOver({ wave: spawner.wave, kills, time: elapsed })
}

document.getElementById('start-btn').addEventListener('click', startGame)
document.getElementById('restart-btn').addEventListener('click', startGame)
window.addEventListener('keydown', (e) => {
  if (e.code === 'Enter' && state === 'dead') startGame()
})

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
      weapon.fireInterval = 0.05
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
function loop() {
  requestAnimationFrame(loop)
  const now = performance.now()
  const dt = Math.min(0.05, (now - lastTime) / 1000)
  lastTime = now

  if (state === 'playing') {
    elapsed += dt
    player.update(dt, arena.halfSize, spawner.getGroups(), false)
    weapon.update(dt)
    spawner.update(dt, player.pos, arena.halfSize - 0.5)
    levelup.update(dt, player.pos)
    floats.update(dt)
    if (player.hp <= 0) onGameOver()
  } else if (state === 'levelup') {
    levelup.update(dt, player.pos)
  }
  hud.update({
    wave: spawner ? spawner.waveNumber : 1,
    kills: kills || 0,
    hp: player ? player.hp : CONFIG.player.maxHp,
    maxHp: player ? player.maxHp : CONFIG.player.maxHp,
    ...(player ? levelup.getHudData() : { xp: 0, xpNext: CONFIG.levelup.xpForLevel }),
    ammo: weapon ? weapon.getAmmoText() : `${CONFIG.weapon.magSize} / ${CONFIG.weapon.magSize}`,
    ammoHint: weapon?.reloading ? '换弹中…' : 'R 换弹',
  })
  renderer.render(scene, camera)
}

buildWorld()
player.initControls()
loop()
