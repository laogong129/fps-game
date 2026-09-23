import bpy
# 查看 glTF 导出算子的实际参数
op = bpy.ops.export_scene.gltf
print("Operator poll result:", op.poll())

# 尝试获取 operator 的属性定义
import rna_prop_ui
props = op.get_rna_type()
print("rna_type:", props)
for p in props.properties:
    if not p.identifier.startswith('_'):
        print(f"  {p.identifier}: {type(p).__name__}")
