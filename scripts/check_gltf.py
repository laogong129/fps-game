import bpy
# 查看 Blender 5.2 的 glTF 导出算子参数
op = bpy.ops.export_scene.gltf
print("glTF export operator properties:")
for attr in dir(op):
    if not attr.startswith('_'):
        print(f"  {attr}")
