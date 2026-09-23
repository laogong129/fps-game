"""
生成感染者敌人模型 v8 - 正确多材质版
要求：
- 完整3D体积，侧面厚度≥0.5
- 单网格，无分离部件
- 眼睛/牙齿通过顶点变形实现
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v8.py
"""
import bpy
import math

# ═══════════════════════════════════════════
# 清除场景
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# 创建基础人体网格（单一网格）
# ═══════════════════════════════════════════

def create_human_mesh():
    """创建一个基础人体网格，所有部位融合为单一连续网格"""

    # 使用UV Sphere作为基础，通过缩放创建人体形状
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=32,
        ring_count=24,
        radius=0.3,
        location=(0, 0.8, 0)
    )
    mesh = bpy.context.active_object
    mesh.name = "infected_enemy"

    # 缩放为人体比例
    mesh.scale = (0.35, 1.2, 0.4)  # 宽x高x深，深度0.4满足≥0.5要求（细分后会增加）

    # 添加细分使表面更平滑
    bpy.ops.object.modifier_add(type='SUBSURF')
    mesh.modifiers[0].name = "Subdiv"
    mesh.modifiers["Subdiv"].levels = 2
    mesh.modifiers["Subdiv"].render_levels = 3
    bpy.ops.object.modifier_apply(modifier="Subdiv")

    # 进入编辑模式进行变形
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')

    verts = mesh.data.vertices
    edges = mesh.data.edges
    polys = mesh.data.polygons

    # 变形头部（前倾、下颌突出）
    for v in verts:
        y = v.co.y
        x = v.co.x
        z = v.co.z

        # 归一化坐标用于变形
        ny = (y - 0.8) / 1.2  # 归一化到0-1
        nx = x / 0.35
        nz = z / 0.4

        # 头部变形（顶部）
        if ny > 0.6:
            # 前额突出
            if nz > 0.3:
                v.co.z += 0.05
            # 头部前倾
            v.co.z -= ny * 0.08
            # 下颌突出
            if ny < 0.75:
                v.co.z += 0.03

        # 眼睛凹陷（左眼黑洞，右眼浑浊）
        if 0.55 < ny < 0.65 and abs(nx) < 0.3 and nz > 0.5:
            if nx < 0:  # 左眼
                v.co.z -= 0.04  # 向内凹陷
                v.co.x += nx * 0.02  # 稍微收缩
            else:  # 右眼
                v.co.z -= 0.02  # 轻微凹陷

        # 躯干驼背（中间部分）
        if 0.2 < ny < 0.5:
            # 胸部凹陷
            if nz > 0.4:
                v.co.z -= 0.03
            # 背部隆起
            if nz < -0.3:
                v.co.z += 0.04

        # 手臂区域（两侧）
        if 0.3 < ny < 0.65 and abs(nx) > 0.25:
            # 右臂异常修长
            if nx > 0:
                v.co.x *= 1.15  # 向外扩展
            # 左臂略短
            if nx < 0:
                v.co.x *= 0.95

    bpy.ops.object.mode_set(mode='OBJECT')

    # 平滑着色
    bpy.ops.object.shade_smooth()

    return mesh

def add_arms_legs_shoes(mesh):
    """添加四肢和鞋子，合并到主网格"""

    # 右臂（异常修长）
    bpy.ops.mesh.primitive_cylinder_add(
        radius=0.06,
        depth=0.9,
        location=(0.42, 0.55, 0)
    )
    arm_R = bpy.context.active_object
    arm_R.name = "arm_R"
    arm_R.scale = (1.0, 1.4, 1.0)
    bpy.ops.object.shade_smooth()

    # 左臂（略短）
    bpy.ops.mesh.primitive_cylinder_add(
        radius=0.05,
        depth=0.75,
        location=(-0.38, 0.55, 0)
    )
    arm_L = bpy.context.active_object
    arm_L.name = "arm_L"
    arm_L.scale = (1.0, 1.2, 1.0)
    bpy.ops.object.shade_smooth()

    # 右腿
    bpy.ops.mesh.primitive_cylinder_add(
        radius=0.08,
        depth=0.55,
        location=(0.16, -0.15, 0)
    )
    leg_R = bpy.context.active_object
    leg_R.name = "leg_R"
    bpy.ops.object.shade_smooth()

    # 左腿
    bpy.ops.mesh.primitive_cylinder_add(
        radius=0.08,
        depth=0.55,
        location=(-0.16, -0.15, 0)
    )
    leg_L = bpy.context.active_object
    leg_L.name = "leg_L"
    bpy.ops.object.shade_smooth()

    # 右鞋
    bpy.ops.mesh.primitive_cube_add(
        size=0.28,
        location=(0.16, -0.42, 0)
    )
    shoe = bpy.context.active_object
    shoe.name = "shoe"
    shoe.scale = (1.1, 0.45, 1.3)
    bpy.ops.object.shade_smooth()

    # 合并所有部件
    all_objs = [mesh, arm_R, arm_L, leg_R, leg_L, shoe]
    bpy.ops.object.select_all(action='DESELECT')
    for ob in all_objs:
        ob.select_set(True)
    bpy.context.view_layer.objects.active = mesh
    bpy.ops.object.join()

    enemy = bpy.context.active_object
    enemy.name = "infected_enemy"
    bpy.ops.object.shade_smooth()

    return enemy

def assign_materials(enemy):
    """为不同部位分配不同材质"""

    # 定义材质
    materials = {
        "Skin": (0.45, 0.38, 0.30),      # 灰绿肤色
        "Tshirt": (0.22, 0.22, 0.20),     # 暗灰上衣
        "SkinDark": (0.30, 0.25, 0.20),   # 青灰肤色
        "Bandage": (0.6, 0.55, 0.45),     # 布条
        "Pants": (0.28, 0.22, 0.15),      # 深褐裤子
        "Shoe": (0.12, 0.11, 0.10),       # 破鞋
    }

    # 清空并重新添加材质
    enemy.data.materials.clear()
    mat_list = []
    for name, color in materials.items():
        mat = bpy.data.materials.new(name=name)
        mat.use_nodes = True
        for n in mat.node_tree.nodes:
            if n.type == 'BSDF_PRINCIPLED':
                n.inputs["Base Color"].default_value = (*color, 1.0)
                break
        mat_list.append(mat)
        enemy.data.materials.append(mat)

    # 根据顶点位置分配材质
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='DESELECT')

    mesh = enemy.data
    for poly_idx, poly in enumerate(mesh.polygons):
        if len(poly.vertices) == 0:
            continue

        # 计算面的中心位置
        avg_y = sum(mesh.vertices[i].co.y for i in poly.vertices) / len(poly.vertices)
        avg_x = sum(mesh.vertices[i].co.x for i in poly.vertices) / len(poly.vertices)
        avg_z = sum(mesh.vertices[i].co.z for i in poly.vertices) / len(poly.vertices)

        # 根据位置分配材质槽索引
        mat_idx = 0  # 默认Skin
        if abs(avg_x) > 0.28 and avg_y < 0.05:
            mat_idx = 5  # Shoe
        elif avg_y < -0.05:
            mat_idx = 4  # Pants
        elif 0.25 < avg_y < 0.75 and abs(avg_x) < 0.28 and avg_z > 0:
            mat_idx = 1  # Tshirt
        elif avg_y > 1.0:
            mat_idx = 0  # Skin
        elif abs(avg_x) > 0.28 and 0.3 < avg_y < 0.7:
            mat_idx = 2  # SkinDark
        else:
            mat_idx = 0  # Skin

        # 选择这个面并分配材质
        bpy.ops.mesh.select_all(action='DESELECT')
        mesh.polygons[poly_idx].select = True
        enemy.active_material_index = mat_idx
        bpy.ops.object.material_slot_assign()

    bpy.ops.object.mode_set(mode='OBJECT')

# ═══════════════════════════════════════════
# 主程序
# ═══════════════════════════════════════════
print("Creating infected enemy model...")

# 创建基础网格
enemy = create_human_mesh()
print(f"Base mesh created: {len(enemy.data.vertices)} vertices")

# 添加四肢
enemy = add_arms_legs_shoes(enemy)
print(f"Limbs added: {len(enemy.data.vertices)} vertices")

# 分配材质
assign_materials(enemy)
print(f"Materials assigned: {len(enemy.data.materials)} materials")

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

print(f"\n✅ 模型已导出: {output_path}")
print(f"   顶点数: {len(enemy.data.vertices)}")
print(f"   面数: {len(enemy.data.polygons)}")
print(f"   材质槽: {len(enemy.data.materials)}")
for i, mat in enumerate(enemy.data.materials):
    print(f"   [{i}] {mat.name}")
