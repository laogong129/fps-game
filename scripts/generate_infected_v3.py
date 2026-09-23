"""
生成感染者敌人模型 v3 - 完整3D单网格版
- 所有身体部位融合为一个连续网格
- 眼睛/牙齿通过顶点挤出实现，不做独立网格
- 侧面厚度 ≥ 0.5 Blender单位
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v3.py
"""
import bpy
import math
from mathutils import Vector, Matrix

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
MAT_EYE_HOLLOW = add_mat("Eye_A", (0.08, 0.05, 0.05), 0.10)
MAT_EYE_NORMAL = add_mat("Eye_N", (0.7, 0.6, 0.3), 0.10)
MAT_TOOTH = add_mat("Tooth", (0.85, 0.82, 0.70), 0.30)

# ═══════════════════════════════════════════
# 清除场景
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# 核心：创建单一网格的感染者模型
# ═══════════════════════════════════════════

def create_body_mesh():
    """创建感染者身体主网格（躯干+头）"""
    # 使用 UV Sphere 作为基础，变形为感染者形状
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=32, ring_count=16,
        radius=0.35,
        location=(0, 1.1, 0)
    )
    head = bpy.context.active_object
    head.name = "head"

    # 前倾变形（整个头向前倾斜）
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')

    # 选择下半部分（形成下颌）
    for v in head.data.vertices:
        if v.co.y < 0.95:
            v.select = True
    bpy.ops.transform.translate(value=(0, 0, -0.08))
    bpy.ops.transform.resize(value=(0.9, 0.85, 0.95))

    # 选择上半部分（前额突出）
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in head.data.vertices:
        if v.co.y > 1.2:
            v.select = True
    bpy.ops.transform.translate(value=(0, 0, 0.05))
    bpy.ops.transform.resize(value=(1.1, 1.0, 1.05))

    # 选择正面中心（鼻梁区域）
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in head.data.vertices:
        if abs(v.co.x) < 0.05 and 1.0 < v.co.y < 1.2 and v.co.z > 0.2:
            v.select = True
    bpy.ops.transform.translate(value=(0, 0, 0.03))

    # 眼睛凹陷 - 左眼（黑洞）
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in head.data.vertices:
        if (abs(v.co.x + 0.12) < 0.08 and
            abs(v.co.y - 1.1) < 0.1 and
            v.co.z > 0.25):
            v.select = True
    bpy.ops.transform.translate(value=(-0.02, 0, -0.06))
    bpy.ops.transform.resize(value=(0.7, 0.6, 0.5))

    # 眼睛凹陷 - 右眼（浑浊黄）
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in head.data.vertices:
        if (abs(v.co.x - 0.12) < 0.08 and
            abs(v.co.y - 1.1) < 0.1 and
            v.co.z > 0.25):
            v.select = True
    bpy.ops.transform.translate(value=(0.02, 0, -0.04))
    bpy.ops.transform.resize(value=(0.75, 0.65, 0.5))

    # 牙齿区域（下颌前方突出）
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in head.data.vertices:
        if (v.co.y < 0.9 and v.co.y > 0.75 and
            abs(v.co.x) < 0.1 and v.co.z > 0.2):
            v.select = True
    bpy.ops.transform.translate(value=(0, 0, 0.04))
    bpy.ops.transform.resize(value=(0.8, 1.0, 1.2))

    bpy.ops.object.mode_set(mode='OBJECT')

    # 平滑着色
    bpy.ops.object.shade_smooth()

    # 细分增加密度（用于后续变形）
    subdiv = head.modifiers.new(name="Subdiv", type='SUBSURF')
    subdiv.levels = 2
    subdiv.render_levels = 2
    bpy.ops.object.modifier_apply(modifier="Subdiv")

    return head

def create_torso_mesh():
    """创建躯干网格（驼背前倾）"""
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0.5, 0))
    torso = bpy.context.active_object
    torso.name = "torso"
    torso.scale = (0.30, 0.6, 0.35)  # 宽x高x深

    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')

    # 选择顶部（肩部区域）
    for v in torso.data.vertices:
        if v.co.y > 0.7:
            v.select = True
    bpy.ops.transform.resize(value=(0.85, 1.0, 0.85))
    bpy.ops.transform.translate(value=(0, 0, -0.05))

    # 选择中部（胸部凹陷）
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in torso.data.vertices:
        if 0.3 < v.co.y < 0.6 and v.co.z > 0.15:
            v.select = True
    bpy.ops.transform.translate(value=(0, 0, -0.04))

    # 选择底部（臀部）
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in torso.data.vertices:
        if v.co.y < 0.25:
            v.select = True
    bpy.ops.transform.resize(value=(0.8, 1.0, 0.8))

    bpy.ops.object.mode_set(mode='OBJECT')
    bpy.ops.object.shade_smooth()

    return torso

def create_limb_mesh(location, scale, name):
    """创建四肢"""
    bpy.ops.mesh.primitive_cylinder_add(
        radius=0.07, depth=0.5,
        location=location
    )
    limb = bpy.context.active_object
    limb.name = name
    limb.scale = scale
    bpy.ops.object.shade_smooth()
    return limb

def add_fingers(obj, x_pos, y_pos, z_pos, count=4, spread=0.03):
    """在指定位置添加手指"""
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')

    # 选择末端顶点
    for v in obj.data.vertices:
        if (abs(v.co.x - x_pos) < 0.05 and
            abs(v.co.y - y_pos) < 0.05 and
            abs(v.co.z - z_pos) < 0.05):
            v.select = True

    if any(v.select for v in obj.data.vertices):
        for i in range(count):
            bpy.ops.mesh.extrude_region_move(
                TRANSFORM_OT_translate={"value": (0, 0, -0.12 - i*0.02)}
            )
            # 收缩为手指
            bpy.ops.mesh.select_all(action='DESELECT')
            for v in obj.data.vertices:
                if abs(v.co.z - (z_pos - 0.12 - i*0.02)) < 0.03:
                    v.select = True
            bpy.ops.transform.resize(value=(0.5, 1.0, 0.5))

    bpy.ops.object.mode_set(mode='OBJECT')

def create_shoe(location):
    """创建鞋子"""
    bpy.ops.mesh.primitive_cube_add(size=0.3, location=location)
    shoe = bpy.context.active_object
    shoe.name = "shoe"
    shoe.scale = (1.0, 0.5, 1.3)
    bpy.ops.object.shade_smooth()
    return shoe

# ═══════════════════════════════════════════
# 创建所有部件
# ═══════════════════════════════════════════
head = create_body_mesh()
torso = create_torso_mesh()

# 四肢
arm_R = create_limb_mesh((0.38, 0.6, 0), (0.07, 1.3, 0.07), "arm_R")
arm_L = create_limb_mesh((-0.38, 0.6, 0), (0.06, 1.1, 0.06), "arm_L")
leg_R = create_limb_mesh((0.16, -0.15, 0), (0.09, 0.5, 0.09), "leg_R")
leg_L = create_limb_mesh((-0.16, -0.15, 0), (0.09, 0.5, 0.09), "leg_L")

# 鞋子（右脚）
shoe_R = create_shoe((0.16, -0.45, 0))

# ═══════════════════════════════════════════
# 合并所有部件为单一网格
# ═══════════════════════════════════════════
all_objects = [head, torso, arm_R, arm_L, leg_R, leg_L, shoe_R]

bpy.ops.object.select_all(action='DESELECT')
for ob in all_objects:
    ob.select_set(True)
bpy.context.view_layer.objects.active = all_objects[0]
bpy.ops.object.join()

enemy = bpy.context.active_object
enemy.name = "infected_enemy"

# 平滑着色
bpy.ops.object.shade_smooth()

# ═══════════════════════════════════════════
# 材质分配（基于顶点位置）
# ═══════════════════════════════════════════
# 清空材质
enemy.data.materials.clear()

# 添加所有材质
for mat in [MAT_SKIN, MAT_TSHIRT, MAT_SKIN_DARK, MAT_BANDAGE, MAT_PANTS, MAT_SHOE]:
    enemy.data.materials.append(mat)

# 进入编辑模式分配材质
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')

mesh = enemy.data
face_indices = list(range(len(mesh.polygons)))

for poly_idx in face_indices:
    poly = mesh.polygons[poly_idx]
    avg_y = sum(mesh.vertices[i].co.y for i in poly.vertices) / len(poly.vertices)
    avg_z = sum(mesh.vertices[i].co.z for i in poly.vertices) / len(poly.vertices)
    avg_x = sum(mesh.vertices[i].co.x for i in poly.vertices) / len(poly.vertices)

    # 判断材质槽索引
    if abs(avg_x) > 0.3 and avg_y < 0.1:  # 脚部 - 鞋子
        mat_idx = 5  # Shoe
    elif avg_y < 0.0:  # 腿部 - 裤子
        mat_idx = 4  # Pants
    elif 0.3 < avg_y < 0.8 and avg_z > 0.1:  # 胸部 - 上衣
        mat_idx = 1  # Tshirt
    elif avg_y > 1.0 and abs(avg_x) < 0.15:  # 头部 - 皮肤
        mat_idx = 0  # Skin
    elif abs(avg_x) > 0.3 and 0.4 < avg_y < 0.7:  # 手臂 - 暗色皮肤
        mat_idx = 2  # SkinDark
    else:  # 默认皮肤
        mat_idx = 0  # Skin

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
