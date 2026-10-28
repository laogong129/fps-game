import * as THREE from 'three'

const finishes = {
  asphalt: { size: 4, roughness: 0.94, metalness: 0, tone: 226, grain: 13 },
  concrete: { size: 3, roughness: 0.92, metalness: 0, tone: 235, grain: 7 },
  plaster: { size: 3, roughness: 0.96, metalness: 0, tone: 242, grain: 5 },
  roof: { size: 2.5, roughness: 0.84, metalness: 0.16, tone: 230, grain: 6 },
  metal: { size: 1.5, roughness: 0.68, metalness: 0.44, tone: 241, grain: 4 },
}

function surfaceFor(shape) {
  if (shape.surface in finishes) return shape.surface
  const id = shape.id || ''
  if (id === 'street-ground' || id.startsWith('asphalt-')) return 'asphalt'
  if (shape.category === 'roof') return 'roof'
  if (shape.category === 'building') return 'plaster'
  if (shape.category === 'roof-dock' || id.startsWith('maintenance-deck') || id.startsWith('boundary-')) return 'metal'
  if (shape.type === 'ramp' || ['platform', 'bridge', 'terrace', 'curb', 'cover'].includes(shape.category)) return 'concrete'
  return 'plain'
}

function randomSource(seed) {
  let state = seed
  return () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 4294967296 }
}

function makeTexture(surface) {
  if (typeof document === 'undefined') return null
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 256
  const context = canvas.getContext('2d')
  if (!context) return null
  const finish = finishes[surface]
  const random = randomSource(surface.charCodeAt(0) * 9173)
  const pixels = context.createImageData(256, 256)
  for (let i = 0; i < pixels.data.length; i += 4) {
    const value = Math.round(finish.tone + (random() - 0.5) * finish.grain * 2)
    pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = value
    pixels.data[i + 3] = 255
  }
  context.putImageData(pixels, 0, 0)
  context.lineWidth = 1
  context.strokeStyle = 'rgba(66, 63, 61, 0.08)'
  if (surface === 'asphalt') {
    context.beginPath()
    context.moveTo(24, 80)
    for (const [x, y] of [[65, 83], [90, 91], [125, 90], [143, 103]]) context.lineTo(x, y)
    context.stroke()
  } else if (surface === 'concrete') {
    context.strokeRect(0.5, 0.5, 255, 255)
    context.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    context.strokeRect(2.5, 2.5, 251, 251)
  } else if (surface === 'plaster') {
    for (let i = 0; i < 30; i++) {
      context.fillStyle = `rgba(91, 81, 75, ${0.008 + random() * 0.015})`
      context.fillRect(random() * 256, random() * 256, 8 + random() * 24, 20 + random() * 80)
    }
  } else if (surface === 'roof') {
    context.strokeStyle = 'rgba(35, 37, 42, 0.14)'
    for (let row = 0; row < 8; row++) {
      const y = row * 32 + 0.5
      context.beginPath(); context.moveTo(0, y); context.lineTo(256, y); context.stroke()
      for (let x = row % 2 ? -32 : 0; x < 256; x += 64) {
        context.beginPath(); context.moveTo(x + 0.5, y); context.lineTo(x + 0.5, y + 32); context.stroke()
      }
    }
  } else if (surface === 'metal') {
    context.strokeStyle = 'rgba(69, 72, 78, 0.035)'
    for (let y = 0; y < 256; y += 4) {
      context.beginPath(); context.moveTo(0, y + 0.5); context.lineTo(256, y + 0.5); context.stroke()
    }
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.name = `railway-${surface}`
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.anisotropy = 4
  return texture
}

function projectTexture(material, texture, tileSize) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.railwaySurfaceMap = { value: texture }
    shader.uniforms.railwayTileSize = { value: tileSize }
    shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
varying vec3 vRailwayWorldPosition;
varying vec3 vRailwayWorldNormal;`)
    shader.vertexShader = shader.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
vec4 railwayPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  railwayPosition = instanceMatrix * railwayPosition;
#endif
vRailwayWorldPosition = (modelMatrix * railwayPosition).xyz;
vRailwayWorldNormal = inverseTransformDirection(transformedNormal, viewMatrix);`)
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', `#include <common>
uniform sampler2D railwaySurfaceMap;
uniform float railwayTileSize;
varying vec3 vRailwayWorldPosition;
varying vec3 vRailwayWorldNormal;`)
    shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
vec3 railwayBlend = pow(abs(normalize(vRailwayWorldNormal)), vec3(8.0));
railwayBlend /= max(dot(railwayBlend, vec3(1.0)), 0.0001);
vec3 railwayPosition = vRailwayWorldPosition / railwayTileSize;
vec3 railwayTexel = texture2D(railwaySurfaceMap, railwayPosition.zy).rgb * railwayBlend.x
  + texture2D(railwaySurfaceMap, railwayPosition.xz).rgb * railwayBlend.y
  + texture2D(railwaySurfaceMap, railwayPosition.xy).rgb * railwayBlend.z;
diffuseColor.rgb *= railwayTexel;`)
  }
  material.customProgramCacheKey = () => 'railway-world-surface-v1'
}

export function createRailwayMaterials() {
  const textures = new Map()
  const materials = new Map()
  const signalMaterials = new Set()
  const materialFor = (shape) => {
    const surface = surfaceFor(shape)
    const key = `${surface}-${shape.color}-${shape.emissive || 0}-${!!shape.decorative}`
    if (!materials.has(key)) {
      const finish = finishes[surface]
      const material = new THREE.MeshStandardMaterial({
        color: shape.color, roughness: finish?.roughness ?? (shape.decorative ? 0.74 : 0.8),
        metalness: finish?.metalness ?? 0.12, emissive: shape.emissive || 0,
        emissiveIntensity: shape.emissive ? 0.45 : 0, flatShading: true,
      })
      material.name = `railway-${surface}`
      if (finish) {
        if (!textures.has(surface)) textures.set(surface, makeTexture(surface))
        const texture = textures.get(surface)
        if (texture) projectTexture(material, texture, finish.size)
      }
      materials.set(key, material)
    }
    const material = materials.get(key)
    if (!shape.signal) return material
    const signal = material.clone()
    signal.onBeforeCompile = material.onBeforeCompile
    signal.customProgramCacheKey = material.customProgramCacheKey
    signalMaterials.add(signal)
    return signal
  }
  return {
    materialFor,
    dispose() {
      for (const material of [...materials.values(), ...signalMaterials]) material.dispose()
      for (const texture of textures.values()) texture?.dispose()
      materials.clear(); textures.clear(); signalMaterials.clear()
    },
  }
}
