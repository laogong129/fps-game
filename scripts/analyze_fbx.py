"""Analyze FBX and export as GLB for Three.js"""
import bpy
import os

fbx_path = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
output_glb = r'E:\vibecoding\fps-game\assets\models\enemy_mutant.fbx'

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print(f"Importing: {fbx_path}")
bpy.ops.import_scene.fbx(filepath=fbx_path)
print("Import done.")

# Analyze
armature = None
meshes = []
for obj in bpy.context.scene.objects:
    if obj.type == 'ARMATURE':
        armature = obj
        print(f"Armature: {obj.name}, bones: {len(obj.data.bones)}")
        for bone in obj.data.bones:
            print(f"  Bone: {bone.name}")
    elif obj.type == 'MESH':
        meshes.append(obj)
        print(f"Mesh: {obj.name}, verts: {len(obj.data.vertices)}, faces: {len(obj.data.polygons)}")

# Check animations
if hasattr(bpy.context.scene, 'action'):
    print(f"Action: {bpy.context.scene.action.name if bpy.context.scene.action else 'None'}")

# Find the main mesh (skip armature/skeleton)
main_mesh = None
for obj in meshes:
    if 'Mesh' in obj.name or 'Body' in obj.name or 'Character' in obj.name or 'Model' in obj.name:
        main_mesh = obj
        break

if not main_mesh and meshes:
    main_mesh = meshes[0]

if main_mesh:
    print(f"Main mesh: {main_mesh.name}")

# Export as GLB
if main_mesh:
    # Select only the mesh and armature
    bpy.ops.object.select_all(action='DESELECT')
    main_mesh.select_set(True)
    bpy.context.view_layer.objects.active = main_mesh
    if armature:
        armature.select_set(True)

    export_path = r'E:\vibecoding\fps-game\assets\models\enemy_mutant.glb'
    bpy.ops.export_scene.gltf(
        filepath=export_path,
        export_format='GLB',
        export_texcoords=True,
        export_normals=True,
        export_colors=True,
        export_animations=False,  # No animation for now
        export_materials='EXPORT',
    )
    print(f"Exported to: {export_path}")
else:
    print("No mesh found to export!")
