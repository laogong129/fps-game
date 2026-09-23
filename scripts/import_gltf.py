import bpy

bpy.ops.import_scene.gltf(filepath=r'E:\vibecoding\fps-game\assets\models\enemy_infected.glb')
print('Imported successfully')
for ob in bpy.context.collection.objects:
    print(f'  Object: {ob.name}, type: {ob.type}')
