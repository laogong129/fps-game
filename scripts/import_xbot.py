"""Import FBX model and analyze its structure"""
import bpy
import os

fbx_path = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
blend_path = r'E:\vibecoding\fps-game\assets\models\xbot_mutant.blend'

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import FBX
print(f"Importing: {fbx_path}")
bpy.ops.import_scene.fbx(filepath=fbx_path)
print("Import complete!")

# Analyze structure
print("\n=== Scene Objects ===")
for ob in bpy.context.collection.objects:
    print(f"  {ob.name}: {ob.type}")
    if ob.type == 'MESH':
        print(f"    Vertices: {len(ob.data.vertices)}, Faces: {len(ob.data.polygons)}")
        print(f"    Materials: {len(ob.data.materials)}")
    elif ob.type == 'ARMATURE':
        print(f"    Bones: {len(ob.data.bones)}")

print("\n=== Materials ===")
for mat in bpy.data.materials:
    if mat.users > 0:
        print(f"  {mat.name}: {mat.users} user(s)")

# Save as blend
bpy.ops.wm.save_as_mainfile(filepath=blend_path)
print(f"\nSaved to: {blend_path}")
