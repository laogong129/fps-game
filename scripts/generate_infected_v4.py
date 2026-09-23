"""
生成感染者敌人模型 v4 - 简单直接版
创建一个单一网格，包含完整3D体积
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v4.py
"""
import bpy
import math
from mathutils import Vector

# ═══════════════════════════════════════════
# 材质定义
# ═══════════════════════════════════════════
def add_mat(name, color, roughness=0.8):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    for n in mat.node_tree.nodes:
        if n.type == 'BSDF_PRINCIPLED':
            n.inputs["Base Color"].default_value = (*color, 1.0)
            n.inputs["Roughness"].default_value = roughness
            break
    return mat

MAT_SKIN = add_mat("Skin", (0.45, 0.38, 0.30), 0.75)
MAT_SKIN_DARK = add_mat("SkinDark", (0.30, 0.25, 0.20), 0.80)
MAT_TSHIRT = add_mat("Tshirt", (0.22, 0.22, 0.20), 0.90)
MAT_PANTS = add_mat("Pants", (0.28, 0.22, 0.15), 0.85)
MAT_SHOE = add_mat("Shoe", (0.12, 0.11, 0.10), 0.95)
MAT_BANDAGE = add_mat("Bandage", (0.6, 0.55, 0.45), 0.85)

# ═══════════════════════════════════════════
# 清除场景
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# 创建基础人体网格（使用多个合并的几何体）
# ═══════════════════════════════════════════

# 1. 创建躯干（拉伸的立方体）
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0.5, 0))
torso = bpy.context.active_object
torso.name = "torso"
torso.scale = (0.28, 0.8, 0.32)  # 宽x高x深
bpy.ops.object.shade_smooth()

# 2. 创建头部（球体变形）
bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=16, radius=0.2, location=(0, 1.35, 0))
head = bpy.context.active_object
head.name = "head"
# 前倾变形
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')
for v in head.data.vertices:
    if v.co.y < 1.3:
        v.select = True
bpy.ops.transform.translate(value=(0, 0, -0.05))
bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.object.shade_smooth()

# 3. 合并头+躯干
bpy.ops.object.select_all(action='DESELECT')
torso.select_set(True)
head.select_set(True)
bpy.context.view_layer.objects.active = torso
bpy.ops.object.join()
body = bpy.context.active_object
body.name = "body"

# 4. 创建手臂（圆柱体）
bpy.ops.mesh.primitive_cylinder_add(radius=0.06, depth=0.8, location=(0.35, 0.6, 0))
arm_R = bpy.context.active_object
arm_R.name = "arm_R"
arm_R.scale = (1.0, 1.6, 1.0)  # 异常修长
bpy.ops.object.shade_smooth()

bpy.ops.mesh.primitive_cylinder_add(radius=0.05, depth=0.7, location=(-0.35, 0.6, 0))
arm_L = bpy.context.active_object
arm_L.name = "arm_L"
arm_L.scale = (1.0, 1.4, 1.0)
bpy.ops.object.shade_smooth()

# 5. 合并手臂到身体
bpy.ops.object.select_all(action='DESELECT')
body.select_set(True)
arm_R.select_set(True)
arm_L.select_set(True)
bpy.context.view_layer.objects.active = body
bpy.ops.object.join()
body = bpy.context.active_object

# 6. 创建腿部
bpy.ops.mesh.primitive_cylinder_add(radius=0.08, depth=0.6, location=(0.15, -0.15, 0))
leg_R = bpy.context.active_object
leg_R.name = "leg_R"
bpy.ops.object.shade_smooth()

bpy.ops.mesh.primitive_cylinder_add(radius=0.08, depth=0.6, location=(-0.15, -0.15, 0))
leg_L = bpy.context.active_object
leg_L.name = "leg_L"
bpy.ops.object.shade_smooth()

# 7. 创建鞋子（右腿）
bpy.ops.mesh.primitive_cube_add(size=0.3, location=(0.15, -0.45, 0))
shoe = bpy.context.active_object
shoe.name = "shoe"
shoe.scale = (1.2, 0.5, 1.4)
bpy.ops.object.shade_smooth()

# 8. 合并所有部件
bpy.ops.object.select_all(action='DESELECT')
body.select_set(True)
leg_R.select_set(True)
leg_L.select_set(True)
shoe.select_set(True)
bpy.context.view_layer.objects.active = body
bpy.ops.object.join()

enemy = bpy.context.active_object
enemy.name = "infected_enemy"

# 9. 细分平滑
bpy.ops.object.modifier_add(type='SUBSURF')
enemy.modifiers[0].name = "Subdiv"
enemy.modifiers["Subdiv"].levels = 2
enemy.modifiers["Subdiv"].render_levels = 2
bpy.ops.object.modifier_apply(modifier="Subdiv")

bpy.ops.object.shade_smooth()

# ═══════════════════════════════════════════
# 材质分配
# ═══════════════════════════════════════════
enemy.data.materials.clear()
for mat in [MAT_SKIN, MAT_TSHIRT, MAT_SKIN_DARK, MAT_BANDAGE, MAT_PANTS, MAT_SHOE]:
    enemy.data.materials.append(mat)

# 根据位置分配材质槽
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')

mesh = enemy.data
for poly_idx, poly in enumerate(mesh.polygons):
    avg_y = sum(mesh.vertices[i].co.y for i in poly.vertices) / len(poly.vertices)
    avg_x = sum(mesh.vertices[i].co.x for i in poly.vertices) / len(poly.vertices)
    avg_z = sum(mesh.vertices[i].co.z for i in poly.vertices) / len(poly.vertices)

    # 分配材质
    if abs(avg_x) > 0.3 and avg_y < 0.1:  # 脚 - 鞋子
        mat_idx = 5
    elif avg_y < 0.0:  # 腿 - 裤子
        mat_idx = 4
    elif 0.3 < avg_y < 0.8 and abs(avg_x) < 0.3:  # 躯干 - 上衣
        mat_idx = 1
    elif avg_y > 1.0:  # 头 - 皮肤
        mat_idx = 0
    elif abs(avg_x) > 0.3 and 0.4 < avg_y < 0.7:  # 手臂 - 暗色皮肤
        mat_idx = 2
    else:
        mat_idx = 0

    # 选择这个面
    bpy.ops.mesh.select_all(action='DESELECT')
    mesh.polygons[poly_idx].select = True

    # 分配材质
    enemy.active_material_index = mat_idx
    bpy.ops.object.material_slot_assign()

bpy.ops.object.mode_set(mode='OBJECT')

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
