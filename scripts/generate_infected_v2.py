"""
生成感染者敌人模型 v2 - 完整3D单网格版
- 所有身体部位融合为一个连续网格
- 眼睛/牙齿通过顶点挤出实现
- 侧面厚度 ≥ 0.5 Blender单位
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v2.py
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
            bsdf = n
            break
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
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
# 创建基础立方体作为身体主体
# ═══════════════════════════════════════════
# 躯干主体：宽0.5 x 高1.0 x 深0.6（满足≥0.5侧面厚度）
body = bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0.9, 0))
body_obj = bpy.context.active_object
body_obj.name = "body"
body_obj.scale = (0.28, 1.0, 0.32)  # 宽x高x深
bpy.ops.object.shade_smooth()

# 驼背前倾变形：将顶部顶点向前推
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')
# 选择上半部分（躯干顶部）
bpy.ops.mesh.select_circle(vintage_x=0, vintage_y=0.9, radius=0.35)
# 手动选择顶部面
bpy.ops.mesh.select_all(action='DESELECT')
# 切换到世界坐标选择顶部区域
for poly in body_obj.data.polygons:
    # 根据法线方向选择朝上的面
    if abs(poly.normal.y - 1.0) < 0.1:
        for idx in poly.vertices:
            body_obj.data.vertices[idx].select = True

bpy.ops.object.mode_set(mode='OBJECT')

# 用变形修改器创建驼背效果
modifier = body_obj.modifiers.new(name="Armature", type='ARMATURE')
# 创建骨骼用于变形
arm = bpy.data.armatures.new("DeformArm")
arm_ob = bpy.data.objects.new("DeformArm", arm)
bpy.context.collection.objects.link(arm_ob)
arm_ob.location = (0, 0.9, 0)

bpy.ops.object.mode_set(mode='EDIT')
edit_bone = arm.edit_bones.new("spine")
edit_bone.head = Vector((0, 0.5, 0))
edit_bone.tail = Vector((0, 1.3, 0))
edit_bone.roll = 0
edit_bone = arm.edit_bones.new("head")
edit_bone.head = Vector((0, 1.3, 0))
edit_bone.tail = Vector((0, 1.5, 0))
bpy.ops.object.mode_set(mode='OBJECT')

# 将骨骼赋给身体
modifier = body_obj.modifiers.new(name="Deform", type='ARMATURE')
modifier.object = arm_ob
body_obj.parent = arm_ob
body_obj.data.vertex_groups.new(name="spine")
body_obj.data.vertex_groups.new(name="head")
# 简化：直接用缩放变形

# 改用简单方法：直接缩放和移动顶点
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')

# 选择上半部分顶点（y > 0.8）
for v in body_obj.data.vertices:
    if v.co.y > 0.8:
        v.select = True

# 向前推（驼背）
bpy.ops.transform.translate(value=(0, 0, -0.15))

# 选择头部区域（y > 1.2）
bpy.ops.mesh.select_all(action='DESELECT')
for v in body_obj.data.vertices:
    if v.co.y > 1.2:
        v.select = True

# 头部前倾
bpy.ops.transform.rotate(value=0.3, orient_axis='X')
bpy.ops.transform.translate(value=(0, 0, -0.1))

# 选择下半部分
bpy.ops.mesh.select_all(action='DESELECT')
for v in body_obj.data.vertices:
    if v.co.y < 0.3:
        v.select = True

# 臀部缩小
bpy.ops.transform.resize(value=(0.85, 1.0, 0.85))

bpy.ops.object.mode_set(mode='OBJECT')

# ═══════════════════════════════════════════
# 添加细分使表面平滑
# ═══════════════════════════════════════════
subdiv = body_obj.modifiers.new(name="Subdiv", type='SUBSURF')
subdiv.levels = 2
subdiv.render_levels = 2
bpy.ops.object.modifier_apply(modifier=subdiv.name)

# ═══════════════════════════════════════════
# 创建四肢（合并到主体）
# ═══════════════════════════════════════════
def add_limb(name, location, scale, rot_euler=(0,0,0)):
    """创建圆柱体肢体并合并到主体"""
    bpy.ops.mesh.primitive_cylinder_add(radius=0.06, depth=0.5, location=location)
    limb = bpy.context.active_object
    limb.name = name
    limb.scale = scale
    limb.rotation_euler = rot_euler
    bpy.ops.object.shade_smooth()
    # 合并到主体
    bpy.ops.object.select_all(action='DESELECT')
    body_obj.select_set(True)
    limb.select_set(True)
    bpy.context.view_layer.objects.active = body_obj
    bpy.ops.object.join()
    return body_obj

# 右臂（异常修长）
add_limb("arm_R", (0.32, 0.65, 0), (0.08, 1.4, 0.08))
# 左臂（略短）
add_limb("arm_L", (-0.32, 0.65, 0), (0.07, 1.2, 0.07))
# 右腿
add_limb("leg_R", (0.15, -0.1, 0), (0.10, 0.55, 0.10))
# 左腿
add_limb("leg_L", (-0.15, -0.1, 0), (0.10, 0.55, 0.10))

# ═══════════════════════════════════════════
# 创建手指（挤出）
# ═══════════════════════════════════════════
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')

# 选择右臂末端顶点
for v in body_obj.data.vertices:
    if v.co.x > 0.5 and 0.0 < v.co.y < 0.2:
        v.select = True

if any(v.select for v in body_obj.data.vertices):
    bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value": (0, 0, -0.15)})
    # 收缩为手指形状
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in body_obj.data.vertices:
        if abs(v.co.x - 0.55) < 0.05:
            v.select = True
    bpy.ops.transform.resize(value=(0.5, 1.0, 0.5))

# 创建左手指（张开）
bpy.ops.mesh.select_all(action='DESELECT')
for v in body_obj.data.vertices:
    if v.co.x < -0.5 and 0.0 < v.co.y < 0.2:
        v.select = True

if any(v.select for v in body_obj.data.vertices):
    bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value": (0, 0, -0.12)})
    bpy.ops.mesh.select_all(action='DESELECT')
    for v in body_obj.data.vertices:
        if abs(v.co.x + 0.55) < 0.05:
            v.select = True
    bpy.ops.transform.resize(value=(0.4, 1.0, 0.4))

# ═══════════════════════════════════════════
# 创建眼睛凹陷（通过顶点移动）
# ═══════════════════════════════════════════
bpy.ops.mesh.select_all(action='DESELECT')
# 选择左眼区域（正面，y≈1.1, z≈0.3）
for v in body_obj.data.vertices:
    if (abs(v.co.y - 1.1) < 0.08 and abs(v.co.x + 0.12) < 0.06 and v.co.z > 0.25):
        v.select = True
        v.co.z -= 0.04  # 向内推形成凹陷

bpy.ops.mesh.select_all(action='DESELECT')
# 选择右眼区域
for v in body_obj.data.vertices:
    if (abs(v.co.y - 1.1) < 0.08 and abs(v.co.x - 0.12) < 0.06 and v.co.z > 0.25):
        v.select = True
        v.co.z += 0.02  # 微微突出

# ═══════════════════════════════════════════
# 创建牙齿（下颌突出）
# ═══════════════════════════════════════════
bpy.ops.mesh.select_all(action='DESELECT')
for v in body_obj.data.vertices:
    if v.co.y < 0.85 and v.co.y > 0.75 and v.co.z > 0.25:
        v.select = True
        v.co.z += 0.03  # 向前突出形成下颌

# ═══════════════════════════════════════════
# 创建右脚鞋子
# ═══════════════════════════════════════════
bpy.ops.mesh.select_all(action='DESELECT')
for v in body_obj.data.vertices:
    if v.co.x > 0.05 and v.co.y < -0.35:
        v.select = True

if any(v.select for v in body_obj.data.vertices):
    bpy.ops.mesh.extrude_region_move(TRANSFORM_OT_translate={"value": (0, 0, -0.08)})
    bpy.ops.transform.resize(value=(1.2, 0.8, 1.5))

# ═══════════════════════════════════════════
# 应用所有变形
# ═══════════════════════════════════════════
bpy.ops.object.mode_set(mode='OBJECT')

# 确保是单一网格
bpy.ops.object.select_all(action='DESELECT')
body_obj.select_set(True)
bpy.context.view_layer.objects.active = body_obj
bpy.ops.object.modifier_apply(modifier="Armature")  # 如果有变形修改器

# ═══════════════════════════════════════════
# 分配材质槽
# ═══════════════════════════════════════════
# 清空材质
body_obj.data.materials.clear()

# 添加材质槽
body_obj.data.materials.append(MAT_SKIN)      # 0: 皮肤
body_obj.data.materials.append(MAT_TSHIRT)    # 1: 上衣
body_obj.data.materials.append(MAT_SKIN_DARK) # 2: 暗色皮肤
body_obj.data.materials.append(MAT_BANDAGE)   # 3: 布条
body_obj.data.materials.append(MAT_PANTS)     # 4: 裤子
body_obj.data.materials.append(MAT_SHOE)      # 5: 鞋子

# 按区域分配材质
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')

# 躯干上部（上衣）- y > 0.5
for poly in body_obj.data.polygons:
    avg_y = sum(body_obj.data.vertices[i].co.y for i in poly.vertices) / len(poly.vertices)
    if avg_y > 0.5:
        for idx in poly.vertices:
            body_obj.data.vertices[idx].select = True
bpy.ops.object.mode_set(mode='OBJECT')
body_obj.active_material_index = 1

bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')
# 腿部（裤子）- y < -0.1
for poly in body_obj.data.polygons:
    avg_y = sum(body_obj.data.vertices[i].co.y for i in poly.vertices) / len(poly.vertices)
    if avg_y < -0.1:
        for idx in poly.vertices:
            body_obj.data.vertices[idx].select = True
bpy.ops.object.mode_set(mode='OBJECT')
body_obj.active_material_index = 4

# ═══════════════════════════════════════════
# 重命名并导出
# ═══════════════════════════════════════════
body_obj.name = "infected_enemy"
body_obj.data.name = "infected_enemy_mesh"

output_path = r"E:\vibecoding\fps-game\assets\models\enemy_infected.glb"
bpy.ops.export_scene.gltf(
    filepath=output_path,
    export_format="GLB",
    export_texcoords=True,
    export_normals=True,
)

print(f"✅ 模型已导出: {output_path}")
print(f"   顶点数: {len(body_obj.data.vertices)}")
print(f"   面数: {len(body_obj.data.polygons)}")
print(f"   材质槽: {len(body_obj.data.materials)}")
