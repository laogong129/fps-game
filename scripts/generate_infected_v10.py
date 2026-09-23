"""
生成感染者敌人模型 v10 - 单网格变形版
从UV Sphere开始，通过顶点变形创建完整人体形状
用法:
  E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python generate_infected_v10.py
"""
import bpy
import math
from mathutils import Vector

# ═══════════════════════════════════════════
# 清除场景
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# 创建基础UV Sphere
# ═══════════════════════════════════════════
bpy.ops.mesh.primitive_uv_sphere_add(
    segments=48,
    ring_count=32,
    radius=0.35,
    location=(0, 0.9, 0)
)
mesh = bpy.context.active_object
mesh.name = "infected_enemy"

# 细分
bpy.ops.object.modifier_add(type='SUBSURF')
mesh.modifiers[0].name = "Subdiv"
mesh.modifiers["Subdiv"].levels = 3
mesh.modifiers["Subdiv"].render_levels = 3
bpy.ops.object.modifier_apply(modifier="Subdiv")

# ═══════════════════════════════════════════
# 顶点变形函数
# ═══════════════════════════════════════════
def deform_vertex(v, local_origin=(0, 0.9, 0), scale=(1, 1.5, 1)):
    """将球体顶点转换为人体形状"""
    # 转换为局部坐标
    x, y, z = v.co[0] - local_origin[0], v.co[1] - local_origin[1], v.co[2] - local_origin[2]

    # 归一化球面坐标
    r = math.sqrt(x*x + y*y + z*z)
    if r < 0.01:
        return

    theta = math.acos(max(-1, min(1, y / r)))  # 极角 (0=顶, pi=底)
    phi = math.atan2(z, x)  # 方位角

    # 人体形状参数
    # 头部区域 (theta接近0)
    # 躯干区域 (theta在pi/4到3pi/4)
    # 腿部区域 (theta接近pi)

    head_factor = max(0, 1 - theta * 2)  # 0到1，顶部为1
    torso_factor = 1 - abs(theta - math.pi/2) * 2 / math.pi  # 中间为1
    leg_factor = max(0, (theta - math.pi/2) * 2)  # 底部为1

    # 应用缩放
    new_x = x * (1 + head_factor * 0.3 + torso_factor * 0.2)
    new_y = y * (1 + torso_factor * 0.5 + leg_factor * 0.8)
    new_z = z * (1 + torso_factor * 0.3)  # 增加深度

    # 驼背变形（向前弯曲）
    if torso_factor > 0.3:
        new_z -= torso_factor * 0.15

    # 下颌突出
    if head_factor > 0.5 and y < local_origin.y:
        new_z += 0.05

    v.co.x = local_origin.x + new_x * scale[0]
    v.co.y = local_origin.y + new_y * scale[1]
    v.co.z = local_origin.z + new_z * scale[2]

# 进入编辑模式变形顶点
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='DESELECT')

for v in mesh.data.vertices:
    deform_vertex(v)

bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.object.shade_smooth()

# ═══════════════════════════════════════════
# 添加材质
# ═══════════════════════════════════════════
materials = ["Skin", "Tshirt", "SkinDark", "Bandage", "Pants", "Shoe"]
for name in materials:
    mat = bpy.data.materials.new(name=name)
    mesh.data.materials.append(mat)

# ═══════════════════════════════════════════
# 导出
# ═══════════════════════════════════════════
output = r"E:\vibecoding\fps-game\assets\models\enemy_infected.glb"
bpy.ops.export_scene.gltf(
    filepath=output,
    export_format="GLB",
    export_texcoords=True,
    export_normals=True,
)

print(f"✅ 导出成功: {output}")
print(f"   顶点: {len(mesh.data.vertices)}")
print(f"   面: {len(mesh.data.polygons)}")
print(f"   材质: {len(mesh.data.materials)}")