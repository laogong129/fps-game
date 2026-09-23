"""
生成感染者敌人模型 v5 - 最简稳定版
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v5.py
"""
import bpy

# ═══════════════════════════════════════════
# 材质定义
# ═══════════════════════════════════════════
def add_mat(name, color):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    for n in mat.node_tree.nodes:
        if n.type == 'BSDF_PRINCIPLED':
            n.inputs["Base Color"].default_value = (*color, 1.0)
            break
    return mat

MAT_SKIN = add_mat("Skin", (0.45, 0.38, 0.30))
MAT_TSHIRT = add_mat("Tshirt", (0.22, 0.22, 0.20))
MAT_SKIN_DARK = add_mat("SkinDark", (0.30, 0.25, 0.20))
MAT_BANDAGE = add_mat("Bandage", (0.6, 0.55, 0.45))
MAT_PANTS = add_mat("Pants", (0.28, 0.22, 0.15))
MAT_SHOE = add_mat("Shoe", (0.12, 0.11, 0.10))

# ═══════════════════════════════════════════
# 清除场景
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# 创建简单人体网格
# ═══════════════════════════════════════════

# 躯干
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0.5, 0))
torso = bpy.context.active_object
torso.name = "torso"
torso.scale = (0.28, 0.8, 0.32)
bpy.ops.object.shade_smooth()

# 头部
bpy.ops.mesh.primitive_uv_sphere_add(segments=16, ring_count=12, radius=0.18, location=(0, 1.3, 0))
head = bpy.context.active_object
head.name = "head"
bpy.ops.object.shade_smooth()

# 右臂
bpy.ops.mesh.primitive_cylinder_add(radius=0.05, depth=0.7, location=(0.32, 0.6, 0))
arm_R = bpy.context.active_object
arm_R.name = "arm_R"
arm_R.scale = (1.0, 1.5, 1.0)
bpy.ops.object.shade_smooth()

# 左臂
bpy.ops.mesh.primitive_cylinder_add(radius=0.04, depth=0.6, location=(-0.32, 0.6, 0))
arm_L = bpy.context.active_object
arm_L.name = "arm_L"
arm_L.scale = (1.0, 1.3, 1.0)
bpy.ops.object.shade_smooth()

# 右腿
bpy.ops.mesh.primitive_cylinder_add(radius=0.07, depth=0.5, location=(0.14, -0.15, 0))
leg_R = bpy.context.active_object
leg_R.name = "leg_R"
bpy.ops.object.shade_smooth()

# 左腿
bpy.ops.mesh.primitive_cylinder_add(radius=0.07, depth=0.5, location=(-0.14, -0.15, 0))
leg_L = bpy.context.active_object
leg_L.name = "leg_L"
bpy.ops.object.shade_smooth()

# 右鞋
bpy.ops.mesh.primitive_cube_add(size=0.25, location=(0.14, -0.42, 0))
shoe = bpy.context.active_object
shoe.name = "shoe"
shoe.scale = (1.1, 0.4, 1.3)
bpy.ops.object.shade_smooth()

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

# 细分
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

# 简单按位置分配
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')

mesh = enemy.data
for poly_idx, poly in enumerate(mesh.polygons):
    if len(poly.vertices) == 0:
        continue
    avg_y = sum(mesh.vertices[i].co.y for i in poly.vertices) / len(poly.vertices)
    avg_x = sum(mesh.vertices[i].co.x for i in poly.vertices) / len(poly.vertices)

    if abs(avg_x) > 0.25 and avg_y < 0.1:
        mat_idx = 5  # Shoe
    elif avg_y < 0.0:
        mat_idx = 4  # Pants
    elif 0.2 < avg_y < 0.9 and abs(avg_x) < 0.25:
        mat_idx = 1  # Tshirt
    elif avg_y > 1.1:
        mat_idx = 0  # Skin
    elif abs(avg_x) > 0.25 and 0.3 < avg_y < 0.8:
        mat_idx = 2  # SkinDark
    else:
        mat_idx = 0  # Skin

    bpy.ops.mesh.select_all(action='DESELECT')
    mesh.polygons[poly_idx].select = True
    enemy.active_material_index = mat_idx
    bpy.ops.object.material_slot_assign()

bpy.ops.object.mode_set(mode='OBJECT')

# ═══════════════════════════════════════════
# 导出
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
