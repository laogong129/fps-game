# Blender 无头脚本：生成快怪（小鬼神怪）模型 + 跳步动画
# 运行方式：blender --background --python tools/blender/make_enemy_knee_oni.py
# 输出：assets/enemy_knee_oni.glb

import bpy, os

ROOT = r"E:\vibecoding\fps-game"
OUT = os.path.join(ROOT, "assets")
os.makedirs(OUT, exist_ok=True)

# ── 清理 ──
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)
for mat in list(bpy.data.materials):
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

# ── 创建根组 ──
root = bpy.data.objects.new('knee_oni_root', None)
bpy.context.collection.objects.link(root)

def add_child(parent, name, geo, loc, scale, rot, mat):
    o = add_part(name, geo, loc, scale, rot)
    assign_mat(o, mat)
    o.parent = parent
    return o

# 躯干
torso = add_child(root, 'torso', 'cyl', (0, 0, 0.32), (0.18, 0.18, 0.28), (0,0,0), mat_skin)
belt = add_child(root, 'belt', 'cyl', (0, 0, 0.20), (0.20, 0.20, 0.06), (0,0,0), mat_cloth)
head = add_child(root, 'head', 'sphere', (0, 0, 0.58), (0.14, 0.14, 0.14), (0,0,0), mat_skin)
horn_l = add_child(root, 'horn_l', 'cone', (-0.09, 0, 0.68), (0.04, 0.04, 0.12), (0.3, 0, 0.2), mat_horn)
horn_r = add_child(root, 'horn_r', 'cone', ( 0.09, 0, 0.68), (0.04, 0.04, 0.12), (0.3, 0,-0.2), mat_horn)
ear_l = add_child(root, 'ear_l', 'cone', (-0.14, 0, 0.60), (0.05, 0.05, 0.10), (0, 0, 0.4), mat_skin)
ear_r = add_child(root, 'ear_r', 'cone', ( 0.14, 0, 0.60), (0.05, 0.05, 0.10), (0, 0,-0.4), mat_skin)
eye_l = add_child(root, 'eye_l', 'sphere', (-0.05, 0.10, 0.60), (0.03, 0.03, 0.03), (0,0,0), mat_eye)
eye_r = add_child(root, 'eye_r', 'sphere', ( 0.05, 0.10, 0.60), (0.03, 0.03, 0.03), (0,0,0), mat_eye)
mouth = add_child(root, 'mouth', 'cube', (0, 0.12, 0.52), (0.06, 0.01, 0.02), (0,0,0), mat_pupil)

# 左臂
upper_arm_l = add_child(root, 'upper_arm_l', 'cyl', (-0.24, 0, 0.38), (0.06, 0.06, 0.16), (0, 0, 0.2), mat_skin)
forearm_l = add_child(upper_arm_l, 'forearm_l', 'cyl', (0, -0.06, -0.14), (0.05, 0.05, 0.14), (0, 0, 0.3), mat_skin)
hand_l = add_child(forearm_l, 'hand_l', 'sphere', (0, 0, -0.12), (0.04, 0.04, 0.04), (0,0,0), mat_skin)

# 右臂
upper_arm_r = add_child(root, 'upper_arm_r', 'cyl', ( 0.24, 0, 0.38), (0.06, 0.06, 0.16), (0, 0,-0.2), mat_skin)
forearm_r = add_child(upper_arm_r, 'forearm_r', 'cyl', (0, -0.06, -0.14), (0.05, 0.05, 0.14), (0, 0,-0.3), mat_skin)
hand_r = add_child(forearm_r, 'hand_r', 'sphere', (0, 0, -0.12), (0.04, 0.04, 0.04), (0,0,0), mat_skin)

# 左腿
thigh_l = add_child(root, 'thigh_l', 'cyl', (-0.08, 0, 0.10), (0.07, 0.07, 0.16), (0, 0, 0.1), mat_skin)
shin_l = add_child(thigh_l, 'shin_l', 'cyl', (0, 0, -0.12), (0.06, 0.06, 0.14), (0, 0, 0.05), mat_skin)
foot_l = add_child(shin_l, 'foot_l', 'cube', (0, 0.04, -0.10), (0.07, 0.05, 0.04), (0,0,0), mat_skin)

# 右腿
thigh_r = add_child(root, 'thigh_r', 'cyl', ( 0.08, 0, 0.10), (0.07, 0.07, 0.16), (0, 0,-0.1), mat_skin)
shin_r = add_child(thigh_r, 'shin_r', 'cyl', (0, 0, -0.12), (0.06, 0.06, 0.14), (0, 0,-0.05), mat_skin)
foot_r = add_child(shin_r, 'foot_r', 'cube', (0, 0.04, -0.10), (0.07, 0.05, 0.04), (0,0,0), mat_skin)

print(f"创建部件: {len(root.children)} 个")

# ── 跳步动画（所有关键帧写入同一个action）──
# 设置动画数据到root对象
root.animation_data_create()
root.animation_data.action = bpy.data.actions.new('knee_hop_cycle')
action = root.animation_data.action

keyframes = [
    # (frame, rootY, torsoX, upperArmLZ, upperArmRZ, thighLX, thighRX)
    (0,   0.03,  0.0,  0.6, -0.6,  0.0,  0.0),
    (3,  -0.04,  0.12, 0.0,  0.0,  0.25, -0.25),
    (6,   0.02, -0.05, 0.7, -0.7, -0.1,  0.1),
    (9,  -0.04,  0.12, 0.0,  0.0,  0.25, -0.25),
    (12,  0.03,  0.0,  0.6, -0.6,  0.0,  0.0),
]

for frame, root_y, torso_x, l_shldr_z, r_shldr_z, l_hip_x, r_hip_x in keyframes:
    # root位置
    root.location = (0, 0, root_y)
    root.keyframe_insert(data_path='location', frame=frame)

    # torso旋转
    torso.rotation_euler = (torso_x, 0, 0)
    torso.keyframe_insert(data_path='rotation_euler', frame=frame)

    # 左臂
    upper_arm_l.rotation_euler = (0, 0, l_shldr_z)
    upper_arm_l.keyframe_insert(data_path='rotation_euler', frame=frame)

    # 右臂
    upper_arm_r.rotation_euler = (0, 0, r_shldr_z)
    upper_arm_r.keyframe_insert(data_path='rotation_euler', frame=frame)

    # 左腿
    thigh_l.rotation_euler = (l_hip_x, 0, 0)
    thigh_l.keyframe_insert(data_path='rotation_euler', frame=frame)

    # 右腿
    thigh_r.rotation_euler = (r_hip_x, 0, 0)
    thigh_r.keyframe_insert(data_path='rotation_euler', frame=frame)

# 确保动画数据在root上
print(f"动画关键帧: {len(keyframes)} 个")

# ── 导出 ──
FNAME = os.path.join(OUT, 'enemy_knee_oni.glb')
bpy.ops.export_scene.gltf(
    filepath=FNAME,
    export_format='GLB',
    export_apply=True,
    export_animations=True,
)
print(f"OK: {FNAME}")
