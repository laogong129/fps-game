"""Export FBX with proper skin binding for Three.js"""
import bpy

fbx_path = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
output_glb = r'E:\vibecoding\fps-game\public\assets\models\enemy_mutant.glb'

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print('Importing...')
bpy.ops.import_scene.fbx(filepath=fbx_path)
print('Import done.')

# Find armature and mesh
armature = None
meshes = []
for obj in bpy.context.scene.objects:
    if obj.type == 'ARMATURE':
        armature = obj
    elif obj.type == 'MESH':
        meshes.append(obj)

print(f'Found {len(meshes)} meshes, armature: {armature.name if armature else "None"}')

# Apply scale to all meshes
for ob in meshes:
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Parent mesh to armature with Armature modifier (not automatic skeleton)
for ob in meshes:
    # Remove existing armature modifier if any
    for mod in ob.modifiers:
        if mod.type == 'ARMATURE':
            ob.modifiers.remove(mod)

    # Add armature modifier
    mod = ob.modifiers.new(name='Armature', type='ARMATURE')
    mod.object = armature
    print(f'Applied armature modifier to {ob.name}')

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
