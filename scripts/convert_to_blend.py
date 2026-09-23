import bpy

# 导入GLB
bpy.ops.import_scene.gltf(filepath=r'E:\vibecoding\fps-game\assets\models\enemy_infected.glb')
print('Imported GLB successfully')

# 保存为BLEND
bpy.ops.wm.save_as_mainfile(filepath=r'E:\vibecoding\fps-game\assets\models\enemy_infected.blend')
print('Saved as BLEND file')

# 列出对象
print('Objects in scene:')
for ob in bpy.context.collection.objects:
    print(f'  {ob.name} ({ob.type})')
