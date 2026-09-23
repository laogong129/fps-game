"""
生成感染者敌人模型 v6 - 极简稳定版
避免复杂操作，只创建基础形状并导出
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v6.py
"""
import bpy

# ═══════════════════════════════════════════
# 清除场景
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# 创建简单人体网格（直接使用基本几何体）
# ═══════════════════════════════════════════

# 躯干 - 拉伸的立方体
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0.5, 0))
torso = bpy.context.active_object
torso.name = "torso"
torso.scale = (0.28, 0.8, 0.32)

# 头部 - 球体
bpy.ops.mesh.primitive_uv_sphere_add(segments=16, ring_count=12, radius=0.18, location=(0, 1.3, 0))
head = bpy.context.active_object
head.name = "head"

# 右臂
bpy.ops.mesh.primitive_cylinder_add(radius=0.05, depth=0.7, location=(0.32, 0.6, 0))
arm_R = bpy.context.active_object
arm_R.name = "arm_R"
arm_R.scale = (1.0, 1.5, 1.0)

# 左臂
bpy.ops.mesh.primitive_cylinder_add(radius=0.04, depth=0.6, location=(-0.32, 0.6, 0))
arm_L = bpy.context.active_object
arm_L.name = "arm_L"
arm_L.scale = (1.0, 1.3, 1.0)

# 右腿
bpy.ops.mesh.primitive_cylinder_add(radius=0.07, depth=0.5, location=(0.14, -0.15, 0))
leg_R = bpy.context.active_object
leg_R.name = "leg_R"

# 左腿
bpy.ops.mesh.primitive_cylinder_add(radius=0.07, depth=0.5, location=(-0.14, -0.15, 0))
leg_L = bpy.context.active_object
leg_L.name = "leg_L"

# 右鞋
bpy.ops.mesh.primitive_cube_add(size=0.25, location=(0.14, -0.42, 0))
shoe = bpy.context.active_object
shoe.name = "shoe"
shoe.scale = (1.1, 0.4, 1.3)

# ═══════════════════════════════════════════
# 合并所有部件为单一网格
# ═══════════════════════════════════════════
all_objects = [torso, head, arm_R, arm_L, leg_R, leg_L, shoe]

bpy.ops.object.select_all(action='DESELECT')
for ob in all_objects:
    ob.select_set(True)
bpy.context.view_layer.objects.active = torso
bpy.ops.object.join()

enemy = bpy.context.active_object
enemy.name = "infected_enemy"

# ═══════════════════════════════════════════
# 添加材质
# ═══════════════════════════════════════════
materials = [
    bpy.data.materials.new(name="Skin"),
    bpy.data.materials.new(name="Tshirt"),
    bpy.data.materials.new(name="SkinDark"),
    bpy.data.materials.new(name="Bandage"),
    bpy.data.materials.new(name="Pants"),
    bpy.data.materials.new(name="Shoe"),
]

enemy.data.materials.clear()
for mat in materials:
    enemy.data.materials.append(mat)

# ═══════════════════════════════════════════
# 导出 GLB
# ═══════════════════════════════════════════
output_path = r"E:\vibecoding\fps-game\assets\models\enemy_infected.glb"
bpy.ops.export_scene.gltf(
    filepath=output_path,
    export_format="GLB",
    export_texcoords=True,
    export_normals=True,
)

print(f"✅ 模型已导出: {output_path}")
print(f"   顶点数: {len(enemy.data.vertices)}")
print(f"   面数: {len(enemy.data.polygons)}")
print(f"   材质槽: {len(enemy.data.materials)}")
for i, mat in enumerate(enemy.data.materials):
    print(f"   [{i}] {mat.name}")
