import * as THREE from 'three'
import { CONFIG } from './config.js'
import { createRailwayLayout } from './game/railway-layout.js'
import { createRailwayScene } from './game/railway-scene.js'
import { WorldCollision } from './game/world-collision.js'
import { WorldNavigation } from './game/world-navigation.js'
import { TrainController } from './game/train.js'
import { Player } from './game/player.js'
import { WeaponSystem } from './game/weapon.js'
import { Spawner } from './game/spawner.js'
import { enemyBody } from './game/pursuit.js'
import { LevelUp } from './game/levelup.js'
import { Hud } from './game/hud.js'
import { FloatingText } from './game/text.js'
import { GameSession } from './game/session.js'
import { playHit, playReload, playLevelUp } from './game/sound.js'
import { playWeaponShot } from './game/weapon-sound.js'
import { setEnemyScene, preloadEnemyModels } from './game/enemy.js'
import './style.css'

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.15
document.getElementById('game-canvas').append(renderer.domElement)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(CONFIG.view.fov, innerWidth / innerHeight, 0.1, 350)
const layout = createRailwayLayout()
const world = new WorldCollision(layout.shapes, { bounds: layout.bounds })
const navigation = new WorldNavigation(world, layout)
const environment = createRailwayScene(scene, layout)
const hud = new Hud(layout)
const floats = new FloatingText(scene)
setEnemyScene(scene)
let game, player, spawner, weapon, levelup
const train = new TrainController(scene, world, {
  config: CONFIG.train,
  onWarning: () => hud.notify('列车即将起步', '留意道口灯声预警；停站时可登车，检修梯通往车顶。'),
  onHit: (event) => {
    const actor = event.actor
    if (actor.isPlayer) {
      if (player.takeDamage(event.damage, 'train')) { hud.flashDamage(); game.stats.trainHits++ }
      if (event.position) player.motor.reset(event.position)
      player.syncCamera()
    } else if (actor.enemy) {
      spawner.hurt(actor.enemy, event.damage, 'train')
      if (event.position && !actor.enemy.dead) {
        actor.enemy.motor.reset(event.position)
        actor.enemy.group.position.copy(event.position)
      }
    }
  },
})
player = new Player(camera, renderer.domElement, scene, world, new THREE.Vector3(layout.playerStart.x, layout.playerStart.y, layout.playerStart.z))
player.spawnYaw = layout.playerYaw
player.getLadders = () => train.getLadders()
player.reset()
spawner = new Spawner(scene, {
  camera, world, navigation, layout, train, player,
  onContact: () => { const hit = player.takeDamage(CONFIG.player.damageFromEnemy); if (hit) hud.flashDamage(); return hit },
  onEnemyKilled: (enemy, source) => {
    game.stats.kills++
    if (source === 'train') game.stats.trainKills++
    levelup.gainXp(enemy.def.xp, enemy.group.position)
    if (enemy.type === 'tank') levelup.spawnHeal('tank', enemy.group.position)
    else if (Math.random() < CONFIG.heal.small.chance) levelup.spawnHeal('small', enemy.group.position)
  },
  onDamage: (damage, pos, zone, key) => { if (game.stats.weapons[key]) game.stats.weapons[key].damage += damage; floats.spawn(`-${Math.round(damage)}`, pos) },
  onHeadshot: () => hud.flashHeadshot(),
  onProjectileHit: (projectile) => { const hit = player.takeDamage(projectile.damage, 'projectile'); if (hit) hud.flashDamage(); return hit },
  onCrateCollected: (pos) => {
    const locked = weapon.keys.filter((key) => !weapon.unlocked.has(key))
    if (locked.length) { const key = locked[Math.floor(Math.random() * locked.length)]; weapon.unlock(key); floats.spawn(`获得${weapon.guns[key].label}`, pos, '#a5f4d9') }
    else { weapon.applyUpgrade('mag'); floats.spawn('当前枪械弹匣 +3', pos, '#a5f4d9') }
  },
  onWaveStarted: (info) => game.onWaveStarted(info),
})
weapon = new WeaponSystem(scene, player, {
  getEnemies: () => spawner.getMeshes(), getWorld: () => world,
  onHit: (mesh, damage, hit) => { spawner.onShotHit(mesh, damage, hit); playHit() },
  onShot: (key) => { game.stats.weapons[key].shots++; playWeaponShot(key) }, onReload: playReload,
})
levelup = new LevelUp(scene, player, weapon, () => {}, playLevelUp, world)
const arena = {
  halfSize: layout.bounds, world, layout,
  update: (dt) => { environment.update(dt); environment.setCrossingWarning(train.warning) },
  getActors: () => [
    { id: 'player', isPlayer: true, footPosition: player.footPosition, supportId: player.supportId,
      rideBodyId: player.motor.traversal?.bodyId || player.motor.airborneBodyId,
      radius: CONFIG.player.radius, height: CONFIG.player.bodyHeight, maxHp: player.maxHp },
    ...spawner.enemies.filter((enemy) => !enemy.dead).map((enemy) => ({
      id: enemy.group.uuid, enemy, isBoss: enemy.type === 'boss', footPosition: enemy.motor.position,
      supportId: enemy.motor.supportId, rideBodyId: enemy.motor.traversal?.bodyId || enemy.motor.airborneBodyId,
      radius: enemy.radius, height: enemy.height, maxHp: enemy.maxHp,
    })),
  ],
}
game = new GameSession({ player, weapon, spawner, levelup, train, hud, floats, arena })
const byId = (id) => document.getElementById(id)
byId('start-btn').onclick = byId('restart-btn').onclick = () => game.start()
byId('resume-btn').onclick = () => game.resume()
byId('next-wave-btn').onclick = () => game.startNextWave()
byId('export-btn').onclick = () => {
  const url = URL.createObjectURL(new Blob([JSON.stringify(game.result, null, 2)], { type: 'application/json' }))
  const link = Object.assign(document.createElement('a'), { href: url, download: 'fps-railway-run.json' })
  link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
}
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight) })
addEventListener('keydown', (event) => {
  if (event.code === 'Escape') game.pause()
  if (event.code === 'KeyG') game.startNextWave()
  if (event.code === 'Enter' && ['dead', 'won'].includes(game.state)) game.start()
})
addEventListener('blur', () => game.pause())
document.addEventListener('visibilitychange', () => { if (document.hidden) game.pause() })
document.addEventListener('pointerlockerror', () => { byId('lock-status').textContent = '鼠标锁定未成功，请再次点击继续战斗。' })
await player.initControls()
player.controls.addEventListener('lock', () => game.handleLock())
player.controls.addEventListener('unlock', () => game.pause())
await preloadEnemyModels()
const navigationProfiles = Object.entries(CONFIG.enemy).filter(([, def]) => def?.size).map(([type, def]) => {
  const body = enemyBody(type, def)
  return [body.radius, body.height]
})
renderer.render(scene, camera)
await navigation.prepare(navigationProfiles, ({ ratio }) => {
  byId('start-btn').textContent = `正在准备追击路线 ${Math.round(ratio * 100)}%`
})
byId('start-btn').disabled = false
byId('start-btn').textContent = '进入暮色街区'
let last = performance.now(), manual = false
function render(dt) {
  hud.update({ ...game.getHudData(), playerPosition: player.footPosition, trainPosition: train.position,
    remainingEnemies: spawner.toSpawn ? [] : spawner.enemies.filter((e) => !e.dead).map((e) => e.group.position) }, game.active ? dt : 0)
  byId('crosshair').style.opacity = game.active ? 1 : 0
  renderer.render(scene, camera)
}
function loop(now) {
  requestAnimationFrame(loop)
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now
  if (!manual) game.update(dt)
  render(dt)
}
requestAnimationFrame(loop)
if (import.meta.env.DEV) {
  window.__dbg = () => ({ scene, camera, game, player, weapon, spawner, levelup, train, world, layout, navigation, arena, renderer, THREE })
  if (new URLSearchParams(location.search).has('test')) window.__test = { setManual(value) { manual = value }, step(dt) { game.update(dt); render(dt) } }
}
