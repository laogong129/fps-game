const fs = require('fs');
const path = require('path');

// Quick inspection of the glb to check animation data
const glbPath = process.argv[2] || 'e:/vibecoding/fps-game/assets/enemy_knee_oni.glb';
const buf = fs.readFileSync(glbPath);

console.log('GLB size:', buf.length, 'bytes');
console.log('Magic:', buf.readUInt32BE(0));
console.log('Version:', buf.readUInt32BE(4));
console.log('Length:', buf.readUInt32BE(8));

let offset = 12;
let chunkCount = 0;
let animChunk = null;
let jsonChunk = null;

while (offset + 8 <= buf.length) {
  const chunkLen = buf.readUInt32BE(offset);
  const chunkType = buf.readUInt32BE(offset + 4);
  offset += 8;

  chunkCount++;
  if (chunkType === 0x4E4F534A) { // JSON
    jsonChunk = { offset, length: chunkLen, buf: buf.slice(offset, offset + chunkLen) };
    console.log(`Chunk ${chunkCount}: JSON (${chunkLen} bytes)`);
  } else if (chunkType === 0x004E4742) { // BIN
    console.log(`Chunk ${chunkCount}: BIN (${chunkLen} bytes)`);
    animChunk = { offset, length: chunkLen, buf: buf.slice(offset, offset + chunkLen) };
  } else {
    console.log(`Chunk ${chunkCount}: type=0x${chunkType.toString(16)} (${chunkLen} bytes)`);
  }
  offset += chunkLen;
}

if (jsonChunk) {
  const json = JSON.parse(jsonChunk.buf.toString('utf8'));
  console.log('\n=== GLB JSON STRUCTURE ===');
  console.log('Scene count:', json.scenes?.length);
  console.log('Node count:', json.nodes?.length);
  console.log('Mesh count:', json.meshes?.length);
  console.log('Animation count:', json.animations?.length);
  console.log('Skeleton root node:', json.skins?.[0]?.skeleton);

  if (json.animations?.length > 0) {
    const anim = json.animations[0];
    console.log('\nAnimation name:', anim.name);
    console.log('Channels:', anim.channels.length);
    console.log('Samplers:', anim.samplers.length);
    console.log('Sampler 0 input:', anim.samplers[0].input);
    console.log('Sampler 0 output:', anim.samplers[0].output);
    for (const ch of anim.channels) {
      console.log('Channel:', ch.target.node, '-', ch.target.path);
    }
  }

  // Check if skin/bindingPose exists
  if (json.skins?.[0]) {
    console.log('\nSkin bindingPose length:', json.skins[0].bindingPose?.length);
    console.log('Skin joints:', json.skins[0].joints?.length);
  }
}

if (animChunk) {
  console.log('\n=== BIN CHUNK INFO ===');
  // Check for accessor data sizes
  let binOff = 0;
  while (binOff + 8 <= animChunk.buf.length) {
    const binLen = animChunk.buf.readUInt32BE(binOff);
    const binType = animChunk.buf.readUInt32BE(binOff + 4);
    binOff += 8 + binLen;
  }
}
