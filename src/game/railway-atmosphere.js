import * as THREE from 'three'
import { createPuddleReflection, createShallowPuddleMaterial } from './puddle-water.js'

export function createRailwayAtmosphere(scene) {
  scene.background = new THREE.Color(0x8b718a)
  scene.fog = new THREE.Fog(0x8c778b, 55, 180)
  const sky = new THREE.Mesh(new THREE.SphereGeometry(240, 32, 16), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    vertexShader: 'varying vec3 p; void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: `varying vec3 p;
      void main(){
        vec3 direction=normalize(p);
        float height=clamp(direction.y*1.5+.08,0.,1.);
        vec3 color=mix(vec3(.54,.38,.53),vec3(.11,.17,.34),pow(height,.65));
        float sunset=pow(max(0.,dot(direction,normalize(vec3(-.62,.1,.78)))),8.);
        color=mix(color,vec3(1.,.49,.32),sunset*.8);
        gl_FragColor=vec4(color,1.);
      }`,
  }))
  scene.add(sky)
  const sunDisc = new THREE.Mesh(new THREE.SphereGeometry(7, 20, 12), new THREE.MeshBasicMaterial({ color: 0xffb16c, fog: false }))
  sunDisc.position.set(-120, 18, 150)
  scene.add(sunDisc)
  scene.add(new THREE.HemisphereLight(0xc3b5d8, 0x514751, 2.0))
  const sun = new THREE.DirectionalLight(0xffb789, 2.2)
  sun.position.set(-70, 24, 90)
  sun.castShadow = true
  sun.shadow.camera.left = sun.shadow.camera.bottom = -75
  sun.shadow.camera.right = sun.shadow.camera.top = 75
  sun.shadow.camera.near = 1
  sun.shadow.camera.far = 180
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.bias = -0.0004
  sun.shadow.normalBias = 0.03
  scene.add(sun)
  for (let i = 0; i < 18; i++) {
    const x = -100 + i * 12
    const h = 10 + ((i * 17) % 15)
    const block = new THREE.Mesh(new THREE.BoxGeometry(8, h, 9), new THREE.MeshBasicMaterial({ color: 0x62566f }))
    block.position.set(x, h / 2, 84 + (i % 3) * 8)
    scene.add(block)
  }
  const water = createPuddleReflection()
  water.rotation.x = -Math.PI / 2
  water.position.set(-9, 0.035, -13)
  water.scale.set(7.5, 4, 1)
  scene.add(water)
  const puddleMaterial = createShallowPuddleMaterial()
  for (const [x, z, rx, rz] of [[-39, 11, 5.5, 2.4], [28, -24, 4, 2.2], [44, 17, 5, 3], [-16, 44, 6, 2]]) {
    const puddle = new THREE.Mesh(new THREE.CircleGeometry(1, 36), puddleMaterial)
    puddle.rotation.x = -Math.PI / 2
    puddle.position.set(x, 0.025, z)
    puddle.scale.set(rx, rz, 1)
    scene.add(puddle)
  }
  return { water, sun }
}
