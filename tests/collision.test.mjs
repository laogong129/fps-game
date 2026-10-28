import test from 'node:test'
import assert from 'node:assert/strict'
import { Vector3 } from 'three'
import { resolveObstacles, isPositionClear, segmentObstacleHit } from '../src/game/collision.js'

test('overlapping the exact obstacle center resolves to a valid position', () => {
  const obstacles = [{ x: 0, z: 0, r: 2 }]
  const position = new Vector3()
  resolveObstacles(position, 0.5, obstacles)
  assert.ok(isPositionClear(position, 0.5, obstacles))
})

test('swept cylinder hits are ordered and respect vertical cover extent', () => {
  const obstacles = [{ x: 0, z: -5, r: 1, height: 2 }]
  const from = new Vector3(0, 1.7, 0)
  const hit = segmentObstacleHit(from, new Vector3(0, 1.7, -10), obstacles)
  assert.equal(hit.distance, 4)
  assert.deepEqual(hit.point.toArray(), [0, 1.7, -4])
  assert.equal(segmentObstacleHit(new Vector3(0, 3, 0), new Vector3(0, 3, -10), obstacles), null)
  const padded = segmentObstacleHit(from, new Vector3(0, 1.7, -10), obstacles, 0.25)
  assert.equal(padded.distance, 3.75)
})

test('parallel and vertical segments handle cylinder boundaries without NaN', () => {
  const obstacles = [{ x: 0, z: 0, r: 1, height: 2 }]
  const hit = segmentObstacleHit(new Vector3(0, 4, 0), new Vector3(0, 0, 0), obstacles)
  assert.equal(hit.point.y, 2)
  assert.equal(segmentObstacleHit(new Vector3(2, 4, 0), new Vector3(2, 0, 0), obstacles), null)
  assert.ok(segmentObstacleHit(new Vector3(0, 1, 0), new Vector3(0, 1, 0), obstacles))
})

test('arena walls stop shots below wall height but allow shots above them', () => {
  const hit = segmentObstacleHit(new Vector3(0, 1.7, 0), new Vector3(100, 1.7, 0))
  assert.equal(hit.point.x, 59.75)
  assert.ok(hit.obstacle.wall)
  assert.equal(segmentObstacleHit(new Vector3(0, 5, 0), new Vector3(100, 5, 0)), null)
})
