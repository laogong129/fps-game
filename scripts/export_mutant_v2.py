"""Export FBX to clean GLB with proper structure for Three.js"""
import bpy
import os

fbx_path = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
output_glb = r'E:\vibecoding\fps-game\assets\models\enemy_mutant.glb'

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print('Importing FBX...')
bpy.ops.import_scene.fbx(filepath=fbx_path)
print('Import done.')

# Find main mesh (the character body, not joints display)
mesh_obj = None
for obj in bpy.context.selected_objects:
    if obj.type == 'MESH' and 'Surface' in obj.name:
        mesh_obj = obj
        break

if not mesh_obj and bpy.context.selected_objects:
    mesh_obj = bpy.context.selected_objects[0]

if not mesh_obj:
    print('ERROR: No mesh found!')
    exit(1)

print(f'Using mesh: {mesh_obj.name}')

# Apply scale
bpy.context.view_layer.objects.active = mesh_obj
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Export as GLB
print('Exporting GLB...')
bpy.ops.export_scene.gltf(
    filepath=output_glb,
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    export_colors=False,
    export_animations=False,
    export_materials='EXPORT',
    export_extras=False,
    use_selection=True,
)

print(f'Done! Output: {output_glb}')
size = os.path.getsize(output_glb)
print(f'File size: {size / 1024:.0f} KB')
