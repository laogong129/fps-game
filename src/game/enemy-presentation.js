import { Vector3 } from 'three'
export function updateEnemyBars(enemy, camera) {
  if (camera) enemy.hpBar.quaternion.copy(camera.quaternion)
  enemy.hpBar.scale.x = Math.max(0, enemy.hp / enemy.maxHp)
}
export function enemyCenter(enemy) {
  return enemy.group.position.clone().add(new Vector3(0, enemy.group.userData.centerHeight, 0))
}
