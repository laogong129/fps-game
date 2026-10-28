import * as THREE from 'three'
import { CONFIG } from '../config.js'

export function enemyBody(type, def) {
  return { radius: type === 'small' ? 0.42 : def.size * 0.71,
    height: type === 'boss' ? def.size * 1.3 : def.size }
}

function moveTo(enemy, goal, dt, api, speed = enemy.def.speed) {
  const motor = enemy.motor
  let target = goal.clone()
  if (api.player.supportId === 'train' && enemy.type === 'boss') {
    target = api.train.getBossInterceptionTarget()
  }
  const aboard = motor.supportId === 'train'
  const targetAboard = api.player.supportId === 'train'
  const routeTag = `${aboard}:${targetAboard}:${api.train.doorsOpen}`
  const routeChanged = enemy.routeTag !== routeTag
  if (routeChanged) { enemy.routeTag = routeTag; enemy.pathTimer = 0 }
  enemy.pathTimer = (enemy.pathTimer || 0) - dt
  let replanned = false
  const liveRiderChase = aboard && targetAboard && Math.abs(target.y - motor.position.y) <= 1
  const targetMoved = !enemy.pathGoal || enemy.pathGoal.distanceToSquared(target) > 0.04
  if (routeChanged || !enemy.pathGoal || liveRiderChase ||
    enemy.pathTimer <= 0 && (targetMoved || !enemy.path?.length || enemy.pathBlockedTime > 0.2)) {
    const pathGoal = target.clone()
    let route = null
    if (enemy.type !== 'boss' && (targetAboard || aboard)) {
      if (aboard && targetAboard) {
        route = [target]
        if (Math.abs(target.y - motor.position.y) > 1 && enemy.radius > 0.6) {
          const portals = api.train.getBoardingPortals(enemy.radius)
          const ownKind = motor.position.y > 2.8 ? 'roof' : 'interior'
          const choices = []
          for (const own of portals.filter((p) => p.kind === ownKind)) {
            for (const other of portals.filter((p) => p.kind !== ownKind)) {
              const outside = api.navigation.findPath(own.outside, other.outside, enemy.radius, enemy.height)
              if (!outside.length) continue
              const path = [own.inside, own.outside, ...outside, other.inside, target]
              let previous = motor.position, length = 0
              for (const point of path) { length += previous.distanceTo(point); previous = point }
              choices.push({ path, length })
            }
          }
          choices.sort((a, b) => a.length - b.length)
          route = choices[0]?.path || [motor.position.clone()]
        }
      }
      else if (aboard) {
        const portals = api.train.getBoardingPortals(enemy.radius).filter((p) => p.kind === (motor.position.y > 2.8 ? 'roof' : 'interior'))
        portals.sort((a, b) => a.inside.distanceToSquared(motor.position) - b.inside.distanceToSquared(motor.position))
        route = portals.length ? [portals[0].inside, portals[0].outside,
          ...api.navigation.findPath(portals[0].outside, target, enemy.radius, enemy.height)] : [motor.position.clone()]
      } else {
        const boarding = api.train.getBoardingRoute(motor.position, target, enemy.radius)
        if (boarding?.length) {
          const approach = api.navigation.findPath(motor.position, boarding[0], enemy.radius, enemy.height)
          route = approach.length ? [...approach, ...boarding] : null
        }
        if (!route?.length) target = api.train.getInterceptionTarget()
      }
    }
    enemy.path = route?.length ? route : api.navigation.findPath(motor.position, target, enemy.radius, enemy.height)
    enemy.pathGoal = pathGoal
    enemy.pathPhase ??= Math.random() * 0.3
    enemy.pathTimer = 0.5 + enemy.pathPhase
    enemy.pathBlockedTime = 0
    replanned = true
  }
  const path = enemy.path || []
  // Only round a corner if the actual motor can traverse the new segment.
  // Train portals must include the current body, rather than the static grid.
  while (path.length > 1 && (replanned || motor.position.distanceTo(path[0]) < 0.8) &&
    api.navigation.clear(motor.position, path[1], enemy.radius, enemy.height,
      aboard || targetAboard ? null : 'train')) path.shift()
  let waypoint = path[0] || motor.position
  if (motor.supportId === 'train' && enemy.radius <= 0.6 && Math.abs(target.y - motor.position.y) > 1) {
    const ladders = api.train.getLadders().sort((a, b) =>
      motor.position.distanceToSquared(target.y > motor.position.y ? a.bottom : a.top) -
      motor.position.distanceToSquared(target.y > motor.position.y ? b.bottom : b.top))
    for (const ladder of ladders.slice(0, 1)) {
      const up = target.y > motor.position.y
      const start = up ? ladder.bottom : ladder.top
      if (motor.position.distanceTo(start) < 1.2) {
        motor.startClimb(up ? ladder.top : ladder.bottom, 1.3, 'train', { waypoints: up ? ladder.waypoints : ladder.downWaypoints })
      }
      if (!motor.traversal) waypoint = start
    }
  }
  const direction = waypoint.clone().sub(motor.position).setY(0)
  const remaining = direction.length()
  if (remaining > 0.005) direction.normalize()
  else direction.set(0, 0, 0)
  const previous = motor.position.clone()
  motor.update(dt, { move: direction, speed: Math.min(speed, remaining / dt) })
  const expected = Math.min(speed * dt, remaining || speed * dt)
  enemy.pathBlockedTime = (remaining > 0.01 || path.length > 1) &&
    motor.position.distanceTo(previous) < expected * 0.15 ? (enemy.pathBlockedTime || 0) + dt : 0
  enemy.group.position.copy(motor.position)
  if (direction.lengthSq()) enemy.group.rotation.y = Math.atan2(direction.x, direction.z)
}

function glow(enemy, color) {
  enemy.body?.traverse((mesh) => { if (!mesh.userData.isOutline) mesh.material?.emissive?.setHex(color) })
}

export function updatePursuit(enemy, dt, api) {
  if (enemy.dead) return
  const target = api.player.footPosition
  const distance = enemy.group.position.distanceTo(target)
  const sameLevel = Math.abs(enemy.group.position.y - target.y) < 0.9
  if (enemy.def.behavior === 'charger' && sameLevel) {
    if (enemy.state === 'seek' && distance < enemy.def.standRange) {
      enemy.state = 'telegraph'; enemy.stateTimer = enemy.def.telegraphTime
    }
    if (enemy.state === 'telegraph') {
      enemy.stateTimer -= dt
      glow(enemy, Math.sin(enemy.stateTimer * 18) > 0 ? 0xff5500 : 0x551100)
      enemy.motor.update(dt, { move: new THREE.Vector3(), speed: 0 })
      if (enemy.stateTimer <= 0) {
        enemy.chargeDir.copy(target).sub(enemy.motor.position).setY(0).normalize()
        enemy.state = 'charge'; enemy.stateTimer = enemy.def.chargeTime
      }
    } else if (enemy.state === 'charge') {
      enemy.stateTimer -= dt
      enemy.motor.update(dt, { move: enemy.chargeDir, speed: enemy.def.chargeSpeed })
      if (enemy.stateTimer <= 0) { enemy.state = 'recover'; enemy.stateTimer = enemy.def.chargeCd; glow(enemy, 0) }
    } else {
      moveTo(enemy, target, dt, api, enemy.def.speed * (enemy.state === 'recover' ? 0.5 : 1))
      if (enemy.state === 'recover' && (enemy.stateTimer -= dt) <= 0) enemy.state = 'seek'
    }
    enemy.group.position.copy(enemy.motor.position)
  } else if (enemy.def.behavior === 'spitter') {
    const origin = enemy.group.position.clone().add(new THREE.Vector3(0, enemy.height * 0.65, 0))
    const obstructed = api.world.raycast(origin, api.player.pos)
    if (distance > enemy.def.standRange || obstructed || distance < 5) moveTo(enemy, target, dt, api)
    else { enemy.motor.update(dt, { move: new THREE.Vector3(), speed: 0 }); enemy.group.position.copy(enemy.motor.position) }
    enemy.fireTimer -= dt
    if (distance < 30 && enemy.fireTimer <= 0) {
      enemy.fireTimer = enemy.def.fireInterval
      api.fireProjectile(enemy, api.player.pos)
    }
  } else {
    moveTo(enemy, target, dt, api)
    if (enemy.def.behavior === 'boss') {
      enemy.ringTimer -= dt
      enemy.summonTimer -= dt
      enemy.aimTimer = (enemy.aimTimer ?? 0) - dt
      if (enemy.ringTimer <= 0) { enemy.ringTimer = CONFIG.boss.ringEvery; api.bossRing(enemy) }
      if (enemy.aimTimer <= 0) { enemy.aimTimer = 2.4; api.fireProjectile(enemy, api.player.pos) }
      if (enemy.summonTimer <= 0) { enemy.summonTimer = CONFIG.boss.summonEvery; api.summon(enemy.group.position) }
    }
  }
}

export function canMelee(enemy, player, world) {
  if (enemy.dead) return false
  const pos = enemy.group.position
  const foot = player.footPosition
  if (pos.y + enemy.height < foot.y + 0.15 || foot.y + CONFIG.player.bodyHeight < pos.y + 0.15) return false
  if (Math.hypot(pos.x - foot.x, pos.z - foot.z) > enemy.radius + CONFIG.player.radius + 0.3) return false
  return !world.raycast(pos.clone().add(new THREE.Vector3(0, enemy.height * 0.6, 0)),
    foot.clone().add(new THREE.Vector3(0, 0.9, 0)))
}
