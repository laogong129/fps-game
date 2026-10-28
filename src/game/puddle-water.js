import * as THREE from 'three'
import { Reflector } from 'three/addons/objects/Reflector.js'

const puddleShader = {
  name: 'ShallowPuddle',
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
  },
  vertexShader: `
    uniform mat4 textureMatrix;
    varying vec4 reflectedUv;
    varying vec2 surfaceUv;
    varying vec3 worldPosition;
    #include <common>
    #include <logdepthbuf_pars_vertex>
    void main() {
      reflectedUv = textureMatrix * vec4(position, 1.0);
      surfaceUv = uv;
      worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      #include <logdepthbuf_vertex>
    }`,
  fragmentShader: `
    uniform vec3 color;
    uniform sampler2D tDiffuse;
    varying vec4 reflectedUv;
    varying vec2 surfaceUv;
    varying vec3 worldPosition;
    #include <logdepthbuf_pars_fragment>
    void main() {
      #include <logdepthbuf_fragment>
      vec2 offset = vec2(0.0024);
      vec2 sampleUv = reflectedUv.xy / reflectedUv.w;
      vec3 reflection = texture2D(tDiffuse, sampleUv).rgb * 0.4;
      reflection += texture2D(tDiffuse, sampleUv + vec2(offset.x, 0.0)).rgb * 0.15;
      reflection += texture2D(tDiffuse, sampleUv - vec2(offset.x, 0.0)).rgb * 0.15;
      reflection += texture2D(tDiffuse, sampleUv + vec2(0.0, offset.y)).rgb * 0.15;
      reflection += texture2D(tDiffuse, sampleUv - vec2(0.0, offset.y)).rgb * 0.15;
      float luminance = dot(reflection, vec3(0.2126, 0.7152, 0.0722));
      reflection = mix(vec3(luminance), reflection, 0.75);
      vec3 direction = normalize(cameraPosition - worldPosition);
      float grazing = pow(1.0 - abs(direction.y), 3.0);
      vec2 centered = (surfaceUv - 0.5) * 2.0;
      float angle = atan(centered.y, centered.x);
      float contour = 0.91 + sin(angle * 3.0 + 1.2) * 0.035 + cos(angle * 7.0) * 0.02;
      float edge = 1.0 - smoothstep(contour - 0.065, contour, length(centered));
      gl_FragColor = vec4(color + reflection * mix(0.12, 0.32, grazing), edge * 0.78);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
}

export function createPuddleReflection() {
  const water = new Reflector(new THREE.CircleGeometry(1, 64), {
    color: 0x202329, textureWidth: 512, textureHeight: 512, clipBias: 0.004,
    shader: puddleShader,
  })
  water.material.transparent = true
  water.material.depthWrite = false
  return water
}

export function createShallowPuddleMaterial() {
  const size = 64, pixels = new Uint8Array(size * size * 4)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = (x / (size - 1) - 0.5) * 2, v = (y / (size - 1) - 0.5) * 2
    const angle = Math.atan2(v, u)
    const contour = 0.91 + Math.sin(angle * 3 + 1.2) * 0.035 + Math.cos(angle * 7) * 0.02
    const alpha = THREE.MathUtils.smoothstep(contour - Math.hypot(u, v), 0, 0.065)
    const offset = (y * size + x) * 4
    pixels[offset] = pixels[offset + 1] = pixels[offset + 2] = Math.round(alpha * 255)
    pixels[offset + 3] = 255
  }
  const alphaMap = new THREE.DataTexture(pixels, size, size)
  alphaMap.magFilter = THREE.LinearFilter
  alphaMap.minFilter = THREE.LinearFilter
  alphaMap.needsUpdate = true
  return new THREE.MeshStandardMaterial({
    color: 0x30353b, roughness: 0.38, metalness: 0.06,
    transparent: true, opacity: 0.34, alphaMap, depthWrite: false,
  })
}
