"""Convert FBX model to GLB for game use"""
import bpy
import os

fbx_path = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
output_glb = r'E:\vibecoding\fps-game\assets\models\enemy_mutant.glb'

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print(f"Importing: {fbx_path}")
bpy.ops.import_scene.fbx(filepath=fbx_path)
print("Import complete!")

# Get the main mesh objects
main_objs = [ob for ob in bpy.context.selected_objects if ob.type == 'MESH']
print(f"Found {len(main_objs)} mesh objects")

# Rename for clarity
for i, ob in enumerate(main_objs):
    if 'Surface' in ob.name:
        ob.name = 'mutant_body'
    elif 'Joint' in ob.name:
        ob.name = 'mutant_joints'

# Apply scale
for ob in main_objs:
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

# Join meshes if needed (keep armature separate)
meshes_to_join = [ob for ob in main_objs if ob.type == 'MESH']
if len(meshes_to_join) > 1:
    bpy.ops.object.select_all(action='DESELECT')
    for ob in meshes_to_join:
        ob.select_set(True)
    bpy.context.view_layer.objects.active = meshes_to_join[0]
    bpy.ops.object.join()
    print(f"Joined {len(meshes_to_join)} meshes into one")

# Select all for export
bpy.ops.object.select_all(action='DESELECT')
for ob in bpy.context.scene.objects:
    ob.select_set(True)

# Export as GLB
bpy.ops.export_scene.gltf(
    filepath=output_glb,
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    export_animations=False,
)

print(f"\n✅ Exported to: {output_glb}")
for ob in bpy.context.scene.objects:
    if ob.type == 'MESH':
        print(f"  {ob.name}: {len(ob.data.vertices)} vertices, {len(ob.data.polygons)} faces")
