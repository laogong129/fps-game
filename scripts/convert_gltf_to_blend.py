"""
导入 GLB 并转为 .blend 文件（方便在 Blender GUI 中查看）
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python convert_gltf_to_blend.py
"""
import bpy
import sys

input_path = r'E:\vibecoding\fps-game\assets\models\enemy_infected.glb'
output_blend = r'E:\vibecoding\fps-game\assets\models\enemy_infected.blend'

# 清除场景
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# 导入 GLB
bpy.ops.import_scene.gltf(filepath=input_path)
print(f"✅ GLB 导入成功: {input_path}")

# 重命名主对象
for ob in bpy.context.selected_objects:
    if ob.type == 'MESH' and ob.name != 'Cube':
        ob.name = 'infected_enemy'

# 保存为 .blend
bpy.ops.wm.save_as_mainfile(filepath=output_blend)
print(f"✅ 已保存为 .blend: {output_blend}")
