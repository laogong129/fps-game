"""Create a Left 4 Dead Common Infected — low-poly single-mesh zombie.
Profile-driven tube mesh (bmesh) for clean topology.
5 material slots: Skin / Vest / Pants / Eye_N / Eye_A
Outputs: assets/zombie.blend + assets/zombie_render.png then opens Blender GUI.
"""
import bpy
import bmesh
import math
import os
import subprocess

# ══════════════════════════════════════════════════════════════════════════════
PROJECT_DIR = r"E:\vibecoding\fps-game"
ASSETS_DIR  = os.path.join(PROJECT_DIR, "assets")
BLEND_FILE  = os.path.join(ASSETS_DIR, "zombie.blend")
RENDER_OUT  = os.path.join(ASSETS_DIR, "zombie_render.png")
BLENDER_EXE = r"E:\blender\blender-5.2.1-windows-x64\blender.exe"
os.makedirs(ASSETS_DIR, exist_ok=True)

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# ══════════════════════════════════════════════════════════════════════════════
def make_tube(name, profile, segs=12):
    """profile: [(y, radius, z_off), ...] from bottom→top. No caps."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    rings = []
    for y, r, zo in profile:
        ring = []
        for i in range(segs):
            a = 2.0 * math.pi * i / segs
            v = bm.verts.new((r * math.cos(a), y, r * math.sin(a) + zo))
            ring.append(v)
        rings.append(ring)
    for ri in range(len(rings) - 1):
        c, n = rings[ri], rings[ri+1]
        for i in range(segs):
            bm.faces.new([c[i], c[(i+1)%segs], n[(i+1)%segs], n[i]])
    bm.to_mesh(me); bm.free(); me.update()
    return me

# ══════════════════════════════════════════════════════════════════════════════
# BODY PROFILE — hunched, thin, ~1.8 total height
# ══════════════════════════════════════════════════════════════════════════════
body_profile = [
    # Ankle / foot
    (0.00, 0.06, 0.00), (0.03, 0.07, 0.01), (0.06, 0.08, 0.02),
    (0.10, 0.07, 0.02), (0.14, 0.06, 0.01),
    # Shin
    (0.22, 0.055, 0.00), (0.30, 0.058, 0.00), (0.38, 0.065, 0.00),
    (0.44, 0.070, 0.00), (0.48, 0.075, 0.010),   # knee bump
    # Thigh
    (0.54, 0.080, 0.00), (0.62, 0.090, 0.00),
    (0.72, 0.098, 0.00), (0.80, 0.100, 0.00),
    (0.88, 0.095, 0.00), (0.94, 0.070, 0.00),   # crotch
    # Pelvis → lower torso
    (1.00, 0.075, 0.00), (1.08, 0.095, 0.005),
    (1.16, 0.105, 0.010), (1.24, 0.100, 0.010),
    # Upper torso (chest, slightly wider)
    (1.32, 0.110, 0.015), (1.40, 0.118, 0.020),
    (1.48, 0.122, 0.018), (1.54, 0.115, 0.012),
    # Shoulder / neck
    (1.60, 0.100, 0.005), (1.65, 0.070, 0.00),
]

head_profile = [
    # Chin
    (1.65, 0.115, 0.04), (1.70, 0.130, 0.05),
    # Mid face
    (1.75, 0.135, 0.06), (1.80, 0.138, 0.05),
    # Brow
    (1.85, 0.135, 0.04), (1.89, 0.130, 0.03),
    # Forehead
    (1.94, 0.122, 0.02), (2.00, 0.108, 0.01),
    # Crown
    (2.06, 0.085, 0.00), (2.12, 0.055, 0.00),
    (2.16, 0.025, 0.00), (2.18, 0.002, 0.00),
]

# ══════════════════════════════════════════════════════════════════════════════
# ARMS — reaching forward, right higher than left
# ══════════════════════════════════════════════════════════════════════════════
def arm_profile(side, length=1.3, tip_raise=0.0):
    """Returns [(y, radius, x_off, z_off), ...] from shoulder down to hand."""
    pts = []
    n = 16
    for i in range(n + 1):
        t = i / n
        y = 1.48 - t * length
        # Width: shoulder thick → elbow thin → wrist thin → hand blob
        if t < 0.12:
            w = 0.060 + t * 0.3
        elif t < 0.40:
            w = 0.096 - (t - 0.12) * 0.25   # taper to elbow
        elif t < 0.72:
            w = 0.026 - (t - 0.40) * 0.04   # forearm thin
        else:
            w = 0.013 + (t - 0.72) * 0.15   # hand expands
        # Forward reach + side offset
        x_off = side * (0.10 + t * 0.12) + t * 0.55
        # Slight curve (arms bend forward then down)
        z_off = -t * 0.12 + math.sin(t * math.pi) * 0.06
        if t > 0.85:
            z_off += (t - 0.85) * 0.20  # hand tilts up slightly (grasping)
        z_off += tip_raise * t
        pts.append((y, max(w, 0.005), x_off, z_off))
    return pts

def make_arm_mesh(name, pts, segs=10):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    rings = []
    for y, r, xo, zo in pts:
        ring = []
        for i in range(segs):
            a = 2.0 * math.pi * i / segs
            v = bm.verts.new((xo + r * math.cos(a), y, zo + r * math.sin(a)))
            ring.append(v)
        rings.append(ring)
    for ri in range(len(rings) - 1):
        c, n = rings[ri], rings[ri+1]
        for i in range(segs):
            bm.faces.new([c[i], c[(i+1)%segs], n[(i+1)%segs], n[i]])
    bm.to_mesh(me); bm.free(); me.update()
    return me

# Right arm (higher, longer reach), Left arm (lower)
rarm_pts = arm_profile(1.0, length=1.45, tip_raise=0.04)
larm_pts = arm_profile(-1.0, length=1.38, tip_raise=-0.02)

rarm_ob = make_arm_mesh("RArm", rarm_pts, segs=10)
larm_ob = make_arm_mesh("LArm", larm_pts, segs=10)

# ══════════════════════════════════════════════════════════════════════════════
# BUILD & MERGE
# ══════════════════════════════════════════════════════════════════════════════
print("Building geometry...")
body_me = make_tube("Body", body_profile, segs=14)
head_me = make_tube("Head", head_profile, segs=14)

body_ob = bpy.data.objects.new("Body", body_me)
body_ob.location = (0, 0, 0)
bpy.context.collection.objects.link(body_ob)

head_ob = bpy.data.objects.new("Head", head_me)
head_ob.location = (0.18, 0, 1.62)   # forward lean
head_ob.rotation_euler = (math.radians(32), 0, 0)  # head drooping ~32°
bpy.context.collection.objects.link(head_ob)

rarm_obj = bpy.data.objects.new("RArm", rarm_ob)
rarm_obj.location = (0.20, 0.13, 1.48)
bpy.context.collection.objects.link(rarm_obj)

larm_obj = bpy.data.objects.new("LArm", larm_ob)
larm_obj.location = (0.15, -0.13, 1.43)
bpy.context.collection.objects.link(larm_obj)

# Merge into single object
objs = [body_ob, head_ob, rarm_obj, larm_obj]
bpy.context.view_layer.objects.active = body_ob
for ob in objs:
    ob.select_set(True)
bpy.ops.object.join()
zombie = bpy.context.active_object
zombie.name = "Zombie_Common"

# Apply transforms
bpy.context.view_layer.objects.active = zombie
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

# Normals + flat shade
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.object.shade_flat()

tris = sum(max(0, len(f.vertices)-2) for f in zombie.data.polygons)
print(f"Triangles: {tris}")

# ══════════════════════════════════════════════════════════════════════════════
# 5 MATERIAL SLOTS
# ══════════════════════════════════════════════════════════════════════════════
def mat(name, rgb, rough=0.8):
    """Simple principled material — Blender 5.x compat (no Emission input on BSDF)."""
    m = bpy.data.materials.new(name)
    n = m.node_tree.nodes
    for x in list(n):
        if x.type != 'OUTPUT_MATERIAL': n.remove(x)
    out = None
    for x in n:
        if x.type == 'OUTPUT_MATERIAL': out = x; break
    if out is None:
        out = n.new(type='ShaderNodeOutputMaterial'); out.name = 'Output'
    bsdf = n.new(type='ShaderNodeBsdfPrincipled')
    bsdf.location = (0, 0)
    bsdf.inputs['Base Color'].default_value = (*rgb, 1.0)
    bsdf.inputs['Roughness'].default_value = rough
    for x in list(n):
        if x.type not in ('BSDF_PRINCIPLED', 'OUTPUT_MATERIAL'): n.remove(x)
    m.node_tree.links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])
    return m

m_skin     = mat("Skin",     (0.46, 0.50, 0.42), rough=0.82)  # dead grey-green
m_vest     = mat("Vest",     (0.14, 0.13, 0.17), rough=0.92)  # dark tattered tee
m_pants    = mat("Pants",    (0.17, 0.19, 0.24), rough=0.95)  # loose dark pants
m_eye_n    = mat("Eye_N",    (0.82, 0.78, 0.55), rough=0.25)  # cloudy yellow
m_eye_a    = mat("Eye_A",    (0.12, 0.10, 0.10), rough=0.15)  # dark pupil

zombie.data.materials.append(m_skin)
zombie.data.materials.append(m_vest)
zombie.data.materials.append(m_pants)
zombie.data.materials.append(m_eye_n)
zombie.data.materials.append(m_eye_a)
print(f"5 material slots assigned")

# ══════════════════════════════════════════════════════════════════════════════
# LIGHTING
# ══════════════════════════════════════════════════════════════════════════════
bpy.ops.object.light_add(type='SUN', location=(4,-3,5))
k=bpy.context.active_object; k.data.energy=3.5; k.data.color=(1.0,0.90,0.78); k.name="Key"

bpy.ops.object.light_add(type='POINT', location=(-4,3,3))
f=bpy.context.active_object; f.data.energy=20; f.data.color=(0.65,0.70,0.90); f.name="Fill"

bpy.ops.object.light_add(type='POINT', location=(0,-4,4))
r=bpy.context.active_object; r.data.energy=45; r.name="Rim"

# ══════════════════════════════════════════════════════════════════════════════
# CAMERA
# ══════════════════════════════════════════════════════════════════════════════
bpy.ops.object.camera_add(location=(2.5,-2.8,0.6))
cam=bpy.context.active_object; cam.data.lens=50; cam.name="Camera"
bpy.context.scene.camera=cam
cam.location=(2.6,-2.6,0.7)
cam.rotation_euler=(math.radians(6),0,math.radians(-42))

# ══════════════════════════════════════════════════════════════════════════════
# BACKGROUND
# ══════════════════════════════════════════════════════════════════════════════
world=bpy.context.scene.world
wn=world.node_tree.nodes; wl=world.node_tree.links
for n in wn: wn.remove(n)
bg=wn.new(type='ShaderNodeBackground'); bg.location=(0,0)
bg.inputs['Color'].default_value=(0.06,0.06,0.08,1.0)
ow=wn.new(type='ShaderNodeOutputWorld'); ow.location=(300,0)
wl.new(bg.outputs['Background'],ow.inputs['Surface'])

# ══════════════════════════════════════════════════════════════════════════════
# RENDER
# ══════════════════════════════════════════════════════════════════════════════
scene=bpy.context.scene
scene.render.engine='CYCLES'
scene.cycles.samples=128
scene.render.resolution_x=1920; scene.render.resolution_y=1080
scene.render.filepath=RENDER_OUT
scene.cycles.use_denoising=True

bpy.ops.wm.save_as_mainfile(filepath=BLEND_FILE)
print(f"Saved: {BLEND_FILE}")
bpy.ops.render.render(write_still=True)
print(f"Rendered: {RENDER_OUT}")
subprocess.Popen([BLENDER_EXE, BLEND_FILE])
print("Blender GUI launched.")
