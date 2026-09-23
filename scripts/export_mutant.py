"""Re-export FBX to GLB with clean settings for Three.js"""
import bpy

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print('Importing...')
bpy.ops.import_scene.fbx(filepath=r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx')
print('Applied transforms...')
for ob in bpy.context.selected_objects:
    if ob.type == 'MESH':
        bpy.context.view_layer.objects.active = ob
        bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
print('Exporting...')
bpy.ops.export_scene.gltf(
    filepath=r'E:\vibecoding\fps-game\assets\models\enemy_mutant.glb',
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    export_animations=False,
    export_materials='EXPORT',
    export_extras=False,
)
print('Done!')
