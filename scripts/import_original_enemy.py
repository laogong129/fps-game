"""Import original enemy model and save as .blend for viewing"""
import bpy

# Clear scene
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Import the original enemy model
bpy.ops.import_scene.gltf(filepath=r'E:\vibecoding\fps-game\assets\enemy_knee_oni.glb')
print('Imported enemy_knee_oni.glb')

# Save as blend for viewing
bpy.ops.wm.save_as_mainfile(filepath=r'E:\vibecoding\fps-game\assets\enemy_knee_oni.blend')
print('Saved as enemy_knee_oni.blend')

# Show objects
for ob in bpy.context.collection.objects:
    print(f'  {ob.name} ({ob.type})')
