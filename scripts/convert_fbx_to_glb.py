"""Analyze FBX and export as GLB for Three.js"""
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
print("Import done.")

# Analyze
armature = None
meshes = []
for ob in bpy.context.scene.objects:
    if ob.type == 'ARMATURE':
        armature = ob
        print(f"Armature: {ob.name}, bones: {len(ob.data.bones)}")
    elif ob.type == 'MESH':
        meshes.append(ob)
        print(f"Mesh: {ob.name}, verts: {len(ob.data.vertices)}, faces: {len(ob.data.polygons)}")

# Find main mesh (the character body, not joints)
main_mesh = None
for ob in meshes:
    if 'Surface' in ob.name or 'Body' in ob.name or 'Character' in ob.name:
        main_mesh = ob
        break
if not main_mesh and meshes:
    # Prefer the larger mesh (surface over joints)
    main_mesh = max(meshes, key=lambda m: len(m.data.vertices))

if not main_mesh:
    print("ERROR: No mesh found!")
    exit(1)

print(f"\nMain mesh: {main_mesh.name}")

# Select main mesh + armature for export
bpy.ops.object.select_all(action='DESELECT')
main_mesh.select_set(True)
bpy.context.view_layer.objects.active = main_mesh
if armature:
    armature.select_set(True)

# Apply scale
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# Export as GLB
print(f"Exporting to: {output_glb}")
bpy.ops.export_scene.gltf(
    filepath=output_glb,
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    export_animations=False,
    export_materials='EXPORT',
)

print(f"\nDone! Output: {output_glb}")
print(f"Mesh: {main_mesh.name}, verts: {len(main_mesh.data.vertices)}, faces: {len(main_mesh.data.polygons)}")
if armature:
    print(f"Armature: {armature.name}, bones: {len(armature.data.bones)}")
