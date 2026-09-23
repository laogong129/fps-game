"""Export FBX mesh without skin - bake deformations into rest pose"""
import bpy
import os

fbx_path = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
output_glb = r'E:\vibecoding\fps-game\public\assets\models\enemy_mutant.glb'

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print('Importing...')
bpy.ops.import_scene.fbx(filepath=fbx_path)
print('Import done.')

# Find the main mesh (Beta_Surface)
mesh_obj = None
for obj in bpy.context.scene.objects:
    if obj.type == 'MESH' and 'Surface' in obj.name:
        mesh_obj = obj
        break

if not mesh_obj:
    print('ERROR: No Surface mesh found!')
    exit(1)

print(f'Using mesh: {mesh_obj.name}')

# Apply scale
bpy.context.view_layer.objects.active = mesh_obj
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Export as GLB (no armature, no skin)
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

size = os.path.getsize(output_glb)
print(f'File size: {size / 1024:.0f} KB')
