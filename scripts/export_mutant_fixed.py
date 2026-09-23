"""Export FBX to GLB with proper skin binding"""
import bpy
import json

fbx_path = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
output_glb = r'E:\vibecoding\fps-game\public\assets\enemy_mutant.glb'

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print('Importing...')
bpy.ops.import_scene.fbx(filepath=fbx_path)
print('Import done.')

# Find armature and meshes
armature = None
meshes = []
for obj in bpy.context.scene.objects:
    if obj.type == 'ARMATURE':
        armature = obj
        print(f'Armature: {obj.name}')
    elif obj.type == 'MESH':
        meshes.append(obj)
        print(f'Mesh: {obj.name}, verts: {len(obj.data.vertices)}')

if not meshes:
    print('ERROR: No meshes found!')
    exit(1)

# Apply scale
for ob in meshes:
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Select all for export
bpy.ops.object.select_all(action='DESELECT')
for ob in meshes:
    ob.select_set(True)
if armature:
    armature.select_set(True)
bpy.context.view_layer.objects.active = meshes[0]

# Export as GLB
print('Exporting...')
bpy.ops.export_scene.gltf(
    filepath=output_glb,
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    export_animations=False,
    export_materials='EXPORT',
    export_extras=False,
    use_selection=True,
)
print(f'Done! Output: {output_glb}')

import os
size = os.path.getsize(output_glb)
print(f'File size: {size / 1024:.0f} KB')

# Verify skin binding
print('\\n=== Verifying skin binding ===')
glb_data = open(output_glb, 'rb').read()
json_len = int.from_bytes(glb_data[12:16], 'little')
json_str = glb_data[20:20+json_len].decode('utf-8')
data = json.loads(json_str)

for i, m in enumerate(data.get('meshes', [])):
    prim = m.get('primitives', [{}])[0]
    print(f'Mesh {i} {m.get("name")}: skin={prim.get("skin")}, attrs={list(prim.get("attributes", {}).keys())}')

skin_count = len(data.get('skins', []))
print(f'\\nTotal skins: {skin_count}')
if skin_count > 0:
    skin = data['skins'][0]
    print(f'Skin 0 joints: {len(skin.get("joints", []))}')
