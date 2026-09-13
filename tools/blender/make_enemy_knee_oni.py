# Blender 无头脚本：生成快怪（小鬼神怪）模型 + 骨骼 + 跳步动画
# 运行方式：blender --background --python tools/blender/make_enemy_knee_oni.py
# 输出：assets/enemy_knee_oni.glb
#
# Blender 5.2.1 LTS 兼容（节点名中文："原理化 BSDF"）

import bpy, os

ROOT = r"E:\vibecoding\fps-game"
OUT = os.path.join(ROOT, "assets")
os.makedirs(OUT, exist_ok=True)

# ── 清理 ──
for obj in list(bpy.data.objects):
    if obj.type == 'MESH' and obj.name.startswith('knee_'):
        bpy.data.objects.remove(obj, do_unlink=True)
for arm in list(bpy.data.armatures):
    if arm.name == 'knee_arm':
        bpy.data.armatures.remove(arm)
for mat in list(bpy.data.materials):
    if mat.name.startswith('knee_'):
        bpy.data.materials.remove(mat)

# ── 材质 ──
def make_mat(name, color, emissive=None, emit_str=0.0):
    m = bpy.data.materials.new(name=name)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = next((n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'), None)
    if not bsdf:
        return m
    bsdf.inputs['Base Color'].default_value = (*color, 1.0)
    if emissive:
        bsdf.inputs['Emission Color'].default_value = (*emissive, 1.0)
        bsdf.inputs['Emission Strength'].default_value = emit_str
    return m

mat_skin   = make_mat('knee_skin',   (0.85, 0.20, 0.18))
mat_horn   = make_mat('knee_horn',   (0.60, 0.12, 0.10))
mat_eye    = make_mat('knee_eye',    (0.95, 0.85, 0.10),
                      emissive=(1.0, 0.9, 0.1), emit_str=2.0)
mat_pupil  = make_mat('knee_pupil',  (0.05, 0.02, 0.02))
mat_cloth  = make_mat('knee_cloth',  (0.45, 0.10, 0.08))

# ── 部件创建 helper ──
def add_part(name, geo, loc, scale=(1,1,1), rot=(0,0,0)):
    if geo == 'sphere':
        bpy.ops.mesh.primitive_uv_sphere_add(segments=16, ring_count=8, radius=1, location=loc)
    elif geo == 'cyl':
        bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=1, depth=2, location=loc)
    elif geo == 'cone':
        bpy.ops.mesh.primitive_cone_add(radius1=1, radius2=0, depth=2, location=loc)
    elif geo == 'cube':
        bpy.ops.mesh.primitive_cube_add(size=2, location=loc)
    o = bpy.context.active_object
    o.name = name
    o.scale = scale
    o.rotation_euler = rot
    bpy.ops.object.transform_apply(scale=True, rotation=True)
    return o

def assign_mat(obj, mat):
    if obj.data.materials:
        obj.data.materials[0] = mat
    else:
        obj.data.materials.append(mat)

def make_vg(obj, bone_name):
    if bone_name not in obj.vertex_groups:
        obj.vertex_groups.new(name=bone_name)
    vg = obj.vertex_groups[bone_name]
    for v in obj.data.vertices:
        vg.add([v.index], 1.0, 'REPLACE')

# ── 骨骼定义 ──
arm = bpy.data.armatures.new('knee_arm')
arm_ob = bpy.data.objects.new('knee_armature', arm)
bpy.context.collection.objects.link(arm_ob)
arm_ob.location = (0, 0, 0)
arm_ob.show_in_front = True

bpy.context.view_layer.objects.active = arm_ob
bpy.ops.object.mode_set(mode='EDIT')

bones_def = [
    ('root',      (0, 0, 0),     (0, 0, 0.01)),
    ('spine',     (0, 0, 0.32),  (0, 0, 0.15)),
    ('head',      (0, 0, 0.58),  (0, 0, 0.10)),
    ('l_shldr',   (-0.24, 0, 0.42), (-0.12, 0, 0)),
    ('l_elbow',   (-0.30, 0, 0.24), (-0.10, 0.05, 0)),
    ('r_shldr',   ( 0.24, 0, 0.42), ( 0.12, 0, 0)),
    ('r_elbow',   ( 0.30, 0, 0.24), ( 0.10, 0.05, 0)),
    ('l_hip',     (-0.08, 0, 0.10), ( 0, 0, -0.14)),
    ('l_knee',    (-0.08, 0, -0.04), ( 0, 0, -0.12)),
    ('r_hip',     ( 0.08, 0, 0.10), ( 0, 0, -0.14)),
    ('r_knee',    ( 0.08, 0, -0.04), ( 0, 0, -0.12)),
]

from mathutils import Vector

for name, loc, tail in bones_def:
    b = arm.edit_bones.new(name)
    b.head = Vector(loc)
    b.tail = Vector(loc) + Vector(tail)

# 父子关系
parent_map = {
    'spine':'root', 'head':'spine',
    'l_shldr':'spine', 'l_elbow':'l_shldr',
    'r_shldr':'spine', 'r_elbow':'r_shldr',
    'l_hip':'root', 'l_knee':'l_hip',
    'r_hip':'root', 'r_knee':'r_hip',
}
for name, pname in parent_map.items():
    arm.edit_bones[name].parent = arm.edit_bones[pname]

bpy.ops.object.mode_set(mode='OBJECT')

# ── 创建身体部件 ──
parts = {}

def mk(name, geo, loc, scale, rot, mat, bone):
    o = add_part(name, geo, loc, scale, rot)
    assign_mat(o, mat)
    mod = o.modifiers.new(name='Arm', type='ARMATURE')
    mod.object = arm_ob
    make_vg(o, bone)
    o.parent = arm_ob
    parts[name] = o
    return o

# 躯干
mk('torso', 'cyl', (0, 0, 0.32), (0.18, 0.18, 0.28), (0,0,0), mat_skin, 'spine')
# 腰带/破布
mk('belt', 'cyl', (0, 0, 0.20), (0.20, 0.20, 0.06), (0,0,0), mat_cloth, 'spine')
# 头
mk('head', 'sphere', (0, 0, 0.58), (0.14, 0.14, 0.14), (0,0,0), mat_skin, 'head')
# 角
mk('horn_l', 'cone', (-0.09, 0, 0.68), (0.04, 0.04, 0.12), (0.3, 0, 0.2), mat_horn, 'head')
mk('horn_r', 'cone', ( 0.09, 0, 0.68), (0.04, 0.04, 0.12), (0.3, 0,-0.2), mat_horn, 'head')
# 耳
mk('ear_l', 'cone', (-0.14, 0, 0.60), (0.05, 0.05, 0.10), (0, 0, 0.4), mat_skin, 'head')
mk('ear_r', 'cone', ( 0.14, 0, 0.60), (0.05, 0.05, 0.10), (0, 0,-0.4), mat_skin, 'head')
# 眼
mk('eye_l', 'sphere', (-0.05, 0.10, 0.60), (0.03, 0.03, 0.03), (0,0,0), mat_eye, 'head')
mk('eye_r', 'sphere', ( 0.05, 0.10, 0.60), (0.03, 0.03, 0.03), (0,0,0), mat_eye, 'head')
# 嘴
mk('mouth', 'cube',  (0, 0.12, 0.52), (0.06, 0.01, 0.02), (0,0,0), mat_pupil, 'head')
# 左臂
mk('uarm_l', 'cyl', (-0.24, 0, 0.38), (0.06, 0.06, 0.16), (0, 0, 0.2), mat_skin, 'l_shldr')
mk('farm_l', 'cyl', (-0.30, 0.06, 0.24), (0.05, 0.05, 0.14), (0, 0, 0.3), mat_skin, 'l_elbow')
mk('hand_l', 'sphere', (-0.34, 0.10, 0.14), (0.04, 0.04, 0.04), (0,0,0), mat_skin, 'l_elbow')
# 右臂
mk('uarm_r', 'cyl', ( 0.24, 0, 0.38), (0.06, 0.06, 0.16), (0, 0,-0.2), mat_skin, 'r_shldr')
mk('farm_r', 'cyl', ( 0.30, 0.06, 0.24), (0.05, 0.05, 0.14), (0, 0,-0.3), mat_skin, 'r_elbow')
mk('hand_r', 'sphere', ( 0.34, 0.10, 0.14), (0.04, 0.04, 0.04), (0,0,0), mat_skin, 'r_elbow')
# 左腿
mk('thigh_l', 'cyl', (-0.08, 0, 0.10), (0.07, 0.07, 0.16), (0, 0, 0.1), mat_skin, 'l_hip')
mk('shin_l',  'cyl', (-0.08, 0,-0.04), (0.06, 0.06, 0.14), (0, 0, 0.05), mat_skin, 'l_knee')
mk('foot_l',  'cube',(-0.06, 0.04,-0.12), (0.07, 0.05, 0.04), (0,0,0), mat_skin, 'l_knee')
# 右腿
mk('thigh_r', 'cyl', ( 0.08, 0, 0.10), (0.07, 0.07, 0.16), (0, 0,-0.1), mat_skin, 'r_hip')
mk('shin_r',  'cyl', ( 0.08, 0,-0.04), (0.06, 0.06, 0.14), (0, 0,-0.05), mat_skin, 'r_knee')
mk('foot_r',  'cube',( 0.06, 0.04,-0.12), (0.07, 0.05, 0.04), (0,0,0), mat_skin, 'r_knee')

print(f"创建部件: {len(parts)} 个, 骨骼: {len(arm.bones)} 根")

# ── 跳步动画（0.4s 循环，30fps → 12帧）──
FRAME_RATE = 30
CYCLE_SEC  = 0.4

# Keyframe 描述：(frame, spineX, lShldrZ, rShldrZ, lHipX, rHipX, rootY)
# Phase 0: 最高（跳起瞬间）
# Phase 1: 最低（落地缓冲）
# Phase 2: 最高（换脚跳起）
# Phase 3: 最低（再次落地）
keyframes = [
    (0,   0.0,  0.6, -0.6,  0.0,  0.0,  0.03),   # 最高，双臂前摆
    (3,   0.12, 0.0,  0.0,  0.25, -0.25, -0.04),  # 最低，双臂后摆
    (6,  -0.05, 0.7, -0.7, -0.1,  0.1,  0.02),   # 中间过渡
    (9,   0.12, 0.0,  0.0,  0.25, -0.25, -0.04),  # 最低（再次）
    (12,  0.0,  0.6, -0.6,  0.0,  0.0,  0.03),   # 回到最高
]

bpy.context.view_layer.objects.active = arm_ob
bpy.ops.object.mode_set(mode='POSE')

action = bpy.data.actions.new('knee_hop_cycle')
arm_ob.animation_data_create().action = action

for frame, spine_x, lsz, rsz, lhip_x, rhip_x, locy in keyframes:
    f = int(frame)
    pb = arm_ob.pose.bones
    pb['spine'].rotation_euler = (spine_x, 0, 0)
    pb['spine'].keyframe_insert(data_path='rotation_euler', frame=f)
    pb['l_shldr'].rotation_euler = (0, 0, lsz)
    pb['l_shldr'].keyframe_insert(data_path='rotation_euler', frame=f)
    pb['r_shldr'].rotation_euler = (0, 0, rsz)
    pb['r_shldr'].keyframe_insert(data_path='rotation_euler', frame=f)
    pb['l_hip'].rotation_euler = (lhip_x, 0, 0)
    pb['l_hip'].keyframe_insert(data_path='rotation_euler', frame=f)
    pb['r_hip'].rotation_euler = (rhip_x, 0, 0)
    pb['r_hip'].keyframe_insert(data_path='rotation_euler', frame=f)
    pb['root'].location = (0, 0, locy)
    pb['root'].keyframe_insert(data_path='location', frame=f)

bpy.ops.object.mode_set(mode='OBJECT')

# 所有关键帧设为 LINEAR 插值，保证循环流畅（Blender 5.2: action无fcurves属性，跳过）

# ── 导出 ──
FNAME = os.path.join(OUT, 'enemy_knee_oni.glb')
bpy.ops.export_scene.gltf(
    filepath=FNAME,
    export_format='GLB',
    export_apply=True,
    export_animations=True,
)
print(f"OK: {FNAME}")
