"""
生成感染者敌人模型 v9 - 最终稳定版
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v9.py
"""
import bpy

# ═══════════════════════════════════════════
# 清除场景
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# 创建人体各部件
# ═══════════════════════════════════════════

# 躯干（拉伸的立方体，侧面厚度0.64m）
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0.5, 0))
torso = bpy.context.active_object
torso.name = "torso"
torso.scale = (0.32, 0.9, 0.32)  # 宽x高x深，深度0.64m

# 头部（球体，前倾）
bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=16, radius=0.2, location=(0, 1.25, 0))
head = bpy.context.active_object
head.name = "head"

# 右臂（异常修长）
bpy.ops.mesh.primitive_cylinder_add(radius=0.06, depth=0.8, location=(0.35, 0.55, 0))
arm_R = bpy.context.active_object
arm_R.name = "arm_R"
arm_R.scale = (1.0, 1.6, 1.0)

# 左臂（略短）
bpy.ops.mesh.primitive_cylinder_add(radius=0.05, depth=0.65, location=(-0.35, 0.55, 0))
arm_L = bpy.context.active_object
arm_L.name = "arm_L"
arm_L.scale = (1.0, 1.3, 1.0)

# 右腿
bpy.ops.mesh.primitive_cylinder_add(radius=0.09, depth=0.55, location=(0.15, -0.15, 0))
leg_R = bpy.context.active_object
leg_R.name = "leg_R"

# 左腿
bpy.ops.mesh.primitive_cylinder_add(radius=0.09, depth=0.55, location=(-0.15, -0.15, 0))
leg_L = bpy.context.active_object
leg_L.name = "leg_L"

# 右鞋
bpy.ops.mesh.primitive_cube_add(size=0.3, location=(0.15, -0.45, 0))
shoe = bpy.context.active_object
shoe.name = "shoe"
shoe.scale = (1.1, 0.4, 1.4)

# ═══════════════════════════════════════════
# 合并为单一网格
# ═══════════════════════════════════════════
all_objs = [torso, head, arm_R, arm_L, leg_R, leg_L, shoe]

bpy.ops.object.select_all(action='DESELECT')
for ob in all_objs:
    ob.select_set(True)
bpy.context.view_layer.objects.active = torso
bpy.ops.object.join()

enemy = bpy.context.active_object
enemy.name = "infected_enemy"

# ═══════════════════════════════════════════
# 添加细分平滑
# ═══════════════════════════════════════════
bpy.ops.object.modifier_add(type='SUBSURF')
enemy.modifiers[0].name = "Subdiv"
enemy.modifiers["Subdiv"].levels = 2
enemy.modifiers["Subdiv"].render_levels = 2
bpy.ops.object.modifier_apply(modifier="Subdiv")
bpy.ops.object.shade_smooth()

# ═══════════════════════════════════════════
# 添加材质槽（不分配，先导出看效果）
# ═══════════════════════════════════════════
mat_names = ["Skin", "Tshirt", "SkinDark", "Bandage", "Pants", "Shoe"]
for name in mat_names:
    mat = bpy.data.materials.new(name=name)
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
print(f"   尺寸估算: 高~1.8m, 宽~0.7m, 深~0.64m")
