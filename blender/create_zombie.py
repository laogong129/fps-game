"""Create a Left 4 Dead style cartoon-horror zombie in Blender 5.x.
Features: oversized head (1.3x), impossibly long arms, thin twig legs,
hunched posture, unhinged jaw, asymmetrical eyes, torn safety vest.
Low-poly, flat shaded, ~3000 tris max. Neutral pose with slight forward lean.
Outputs: assets/zombie.blend + assets/zombie_render.png
Then opens Blender GUI with the file.
"""
import bpy
import math
import os
import subprocess

# ── Paths ────────────────────────────────────────────────────────────────────
PROJECT_DIR = r"E:\vibecoding\fps-game"
ASSETS_DIR  = os.path.join(PROJECT_DIR, "assets")
BLEND_FILE  = os.path.join(ASSETS_DIR, "zombie.blend")
RENDER_OUT  = os.path.join(ASSETS_DIR, "zombie_render.png")
BLENDER_EXE = r"E:\blender\blender-5.2.1-windows-x64\blender.exe"
os.makedirs(ASSETS_DIR, exist_ok=True)

# ── Cleanup ──────────────────────────────────────────────────────────────────
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

###############################################################################
#  HELPERS
###############################################################################
def ring_verts(cx, cy, cz, r, segs, z_step=0, roll=0):
    """Return list of (x,y,z) tuples forming a horizontal ring."""
    out = []
    for i in range(segs):
        a = 2 * math.pi * i / segs + roll
        out.append((cx + r * math.cos(a), cy + r * math.sin(a), cz + z_step))
    return out

def make_mesh(name, verts, faces, loc=(0,0,0), rot=(0,0,0)):
    """Create a mesh object from vertex/face lists."""
    me = bpy.data.meshes.new(name)
    ob = bpy.data.objects.new(name, me)
    ob.location = loc
    ob.rotation_euler = rot
    bpy.context.collection.objects.link(ob)
    me.from_pydata(verts, [], faces)
    me.update()
    return ob

def make_mat(name, color_rgb, roughness=0.7):
    """Simple solid-color material compatible with Blender 5.x."""
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    n = m.node_tree.nodes
    for x in list(n):
        if x.type != 'OUTPUT_MATERIAL':
            n.remove(x)
    out = None
    for x in n:
        if x.type == 'OUTPUT_MATERIAL':
            out = x
            break
    if out is None:
        out = n.new(type='ShaderNodeOutputMaterial')
        out.name = 'Output'
    bsdf = n.new(type='ShaderNodeBsdfPrincipled')
    bsdf.location = (0, 0)
    bsdf.inputs['Base Color'].default_value = (color_rgb[0], color_rgb[1], color_rgb[2], 1.0)
    bsdf.inputs['Roughness'].default_value = roughness
    # Remove any stray nodes
    for x in list(n):
        if x.type not in ('BSDF_PRINCIPLED', 'OUTPUT_MATERIAL'):
            n.remove(x)
    links = m.node_tree.links
    links.new(bsdf.outputs['BSDF'], out.inputs['Surface'])
    return m

###############################################################################
#  GEOMETRY BUILDERS
###############################################################################
def build_head(scale=1.3):
    """Oversized head, slightly elongated vertically."""
    verts, faces = [], []
    segs = 14
    rings = 10
    for r in range(rings + 1):
        phi = math.pi * r / rings
        row_r = 0.42 * scale * math.sin(phi)
        row_y = 1.75 + 0.52 * scale * math.cos(phi)
        ring = ring_verts(0, 0, row_y, row_r, segs, roll=math.pi/segs)
        base = len(verts)
        verts.extend(ring)
        if r > 0:
            for i in range(segs):
                a, b = base+i, base+(i+1)%segs
                c, d = base+segs+i, base+segs+(i+1)%segs
                faces.append((a, c, d, b))
    # Jaw box (slightly open)
    jaw_w, jaw_h, jaw_d = 0.28*scale, 0.18, 0.25
    jaw_y = 1.75 - 0.52*scale - 0.02
    jverts = [
        (-jaw_w, -jaw_d, jaw_y), (jaw_w, -jaw_d, jaw_y),
        (jaw_w,  jaw_d, jaw_y), (-jaw_w,  jaw_d, jaw_y),
        (-jaw_w, -jaw_d, jaw_y-jaw_h), (jaw_w, -jaw_d, jaw_y-jaw_h),
        (jaw_w,  jaw_d, jaw_y-jaw_h), (-jaw_w,  jaw_d, jaw_y-jaw_h),
    ]
    jbase = len(verts)
    verts.extend(jverts)
    faces += [(jbase+0,jbase+1,jbase+5,jbase+4),(jbase+1,jbase+2,jbase+6,jbase+5),
              (jbase+2,jbase+3,jbase+7,jbase+6),(jbase+3,jbase+0,jbase+4,jbase+7),
              (jbase+4,jbase+5,jbase+6,jbase+7)]
    return make_mesh("Head", verts, faces, loc=(0, 0.15, 0))

def build_neck():
    verts = [(-0.14,0,0),(0.14,0,0),(0.14,0.12,0),(-0.14,0.12,0),
             (-0.12,0,0.08),(0.12,0,0.08),(0.12,0.12,0.08),(-0.12,0.12,0.08)]
    faces = [(0,1,2,3),(1,5,7,2),(1,4,6,5),(4,0,3,7),(0,4,5,1),(3,7,6,2)]
    return make_mesh("Neck", verts, faces, loc=(0, 1.18, 0.02))

def build_torso():
    """Hunched torso, wider at shoulders, tapered at waist."""
    verts, faces = [], []
    segs = 12
    profile = [
        (0.48, 1.05), (0.52, 1.25), (0.55, 1.45),
        (0.50, 1.65), (0.42, 1.85), (0.34, 2.05),
        (0.28, 2.20),
    ]
    for yi, (yw, yh) in enumerate(profile):
        ring = ring_verts(0, 0, yh, yw, segs, roll=yi*0.15)
        base = len(verts)
        verts.extend(ring)
        if yi > 0:
            prev_base = base - len(ring)
            for i in range(segs):
                a, b = prev_base+i, prev_base+(i+1)%segs
                c, d = base+i, base+(i+1)%segs
                faces.append((a, c, d, b))
    # Subtle chest bulge
    front_seg = segs // 2
    for i in range(front_seg - 2, front_seg + 3):
        idx = len(verts) - segs + i % segs
        if idx < len(verts):
            verts[idx] = (verts[idx][0]*1.08, verts[idx][1], verts[idx][2] + 0.04)
    return make_mesh("Torso", verts, faces)

def build_arm(side, length_scale=1.6):
    """Long arm reaching toward ankles. side = -1 (left) or +1 (right)."""
    verts, faces = [], []
    segs = 10
    arm_len = 1.6 * length_scale
    u_base_y = 1.55
    # Upper arm
    u_start = (side * 0.60, u_base_y, 0.05)
    u_end   = (side * 0.90, u_base_y - 0.45, 0.10)
    for t in [0, 0.4, 0.7, 1.0]:
        cx = u_start[0] + (u_end[0]-u_start[0])*t
        cy = u_start[1] + (u_end[1]-u_start[1])*t
        cz = u_start[2] + (u_end[2]-u_start[2])*t
        r  = 0.10 - 0.02*t
        ring = ring_verts(cx, cz, cy, r, segs)
        base = len(verts)
        verts.extend(ring)
        if t > 0:
            pb = base - len(ring)
            for i in range(segs):
                faces.append((pb+i, pb+(i+1)%segs, base+(i+1)%segs, base+i))
    # Forearm
    f_start = u_end
    f_end   = (side * 1.15, u_base_y - arm_len, 0.18)
    for t in [0, 0.35, 0.65, 1.0]:
        cx = f_start[0] + (f_end[0]-f_start[0])*t
        cy = f_start[1] + (f_end[1]-f_start[1])*t
        cz = f_start[2] + (f_end[2]-f_start[2])*t
        r  = 0.07 - 0.03*t
        ring = ring_verts(cx, cz, cy, r, segs)
        base = len(verts)
        verts.extend(ring)
        if t > 0:
            pb = base - len(ring)
            for i in range(segs):
                faces.append((pb+i, pb+(i+1)%segs, base+(i+1)%segs, base+i))
    # Hand blob
    hx, hy, hz = f_end[0], f_end[1], f_end[2]
    hand_ring = ring_verts(hx, hz, hy-0.05, 0.06, segs)
    base = len(verts)
    verts.extend(hand_ring)
    pb = base - len(hand_ring)
    for i in range(segs):
        faces.append((pb+i, pb+(i+1)%segs, base+(i+1)%segs, base+i))
    return make_mesh(f"Arm_{side:+d}", verts, faces)

def build_leg(side):
    """Thin twig-like leg."""
    verts, faces = [], []
    segs = 8
    hip_y = 1.05
    # Thigh
    t_start = (side * 0.18, hip_y, 0)
    t_end   = (side * 0.15, hip_y - 0.55, 0.02)
    for t in [0, 0.5, 1.0]:
        cx = t_start[0] + (t_end[0]-t_start[0])*t
        cy = t_start[1] + (t_end[1]-t_start[1])*t
        cz = t_start[2] + (t_end[2]-t_start[2])*t
        r  = 0.09 - 0.02*t
        ring = ring_verts(cx, cz, cy, r, segs)
        base = len(verts)
        verts.extend(ring)
        if t > 0:
            pb = base - len(ring)
            for i in range(segs):
                faces.append((pb+i, pb+(i+1)%segs, base+(i+1)%segs, base+i))
    # Shin
    s_start = t_end
    s_end   = (side * 0.12, hip_y - 1.35, 0.05)
    for t in [0, 0.5, 1.0]:
        cx = s_start[0] + (s_end[0]-s_start[0])*t
        cy = s_start[1] + (s_end[1]-s_start[1])*t
        cz = s_start[2] + (s_end[2]-s_start[2])*t
        r  = 0.055 - 0.015*t
        ring = ring_verts(cx, cz, cy, r, segs)
        base = len(verts)
        verts.extend(ring)
        if t > 0:
            pb = base - len(ring)
            for i in range(segs):
                faces.append((pb+i, pb+(i+1)%segs, base+(i+1)%segs, base+i))
    # Foot
    fx, fy, fz = s_end[0], s_end[1]-0.04, s_end[2]
    foot_ring = ring_verts(fx, fz, fy, 0.055, segs)
    base = len(verts)
    verts.extend(foot_ring)
    pb = base - len(foot_ring)
    for i in range(segs):
        faces.append((pb+i, pb+(i+1)%segs, base+(i+1)%segs, base+i))
    return make_mesh(f"Leg_{side:+d}", verts, faces)

def build_ears():
    result = []
    for side in [-1, 1]:
        verts = [
            (side*0.38, 2.05, 0.04), (side*0.46, 2.08, 0.02),
            (side*0.44, 2.00, 0.00), (side*0.38, 2.02, 0.03),
        ]
        result.append(make_mesh(f"Ear_{side:+d}", verts, [(0,1,2,3)]))
    return result

def build_eyes():
    result = []
    verts_l = [(-0.16, 1.82, 0.34), (0.02, 1.82, 0.36),
               (0.04, 1.74, 0.35), (-0.14, 1.74, 0.33)]
    result.append(make_mesh("Eye_Left", verts_l, [(0,1,2,3)]))
    verts_r = [(0.14, 1.83, 0.34), (0.32, 1.83, 0.36),
               (0.34, 1.75, 0.35), (0.16, 1.75, 0.33)]
    result.append(make_mesh("Eye_Right", verts_r, [(0,1,2,3)]))
    return result

def build_jaw_detail():
    """Unhinged lower jaw."""
    verts = [
        (-0.20, 1.55, 0.22), (0.20, 1.55, 0.22),
        (0.22, 1.50, 0.24), (-0.22, 1.50, 0.24),
        (-0.18, 1.55, 0.18), (0.18, 1.55, 0.18),
        (0.20, 1.50, 0.20), (-0.20, 1.50, 0.20),
    ]
    faces = [(0,1,2,3),(1,5,7,2),(0,4,6,5),(4,3,2,7),(3,7,6,4)]
    return make_mesh("Jaw_Lower", verts, faces, loc=(0, 0, -0.06))

def build_vest():
    """Torn safety vest — front and back panels with gaps at sides."""
    verts, faces = [], []
    segs = 14
    vprofile = [
        (0.58, 1.10), (0.62, 1.35), (0.64, 1.55),
        (0.62, 1.75), (0.58, 1.95), (0.50, 2.10),
    ]
    for yi, (yw, yh) in enumerate(vprofile):
        ring = ring_verts(0, 0, yh, yw, segs, roll=math.pi*0.3 + yi*0.1)
        base = len(verts)
        verts.extend(ring)
        if yi > 0:
            pb = base - len(ring)
            panel_size = segs // 2
            # Front panel
            for i in range(panel_size - 2):
                faces.append((pb+i, pb+i+1, base+i+1, base+i))
            # Back panel
            for i in range(segs - panel_size, segs - 1):
                faces.append((pb+i, pb+i+1, base+i+1, base+i))
    return make_mesh("Vest", verts, faces, loc=(0, 0.10, 0))

###############################################################################
#  BUILD ZOMBIE
###############################################################################
print("Building zombie geometry...")

head    = build_head(scale=1.3)
neck    = build_neck()
torso   = build_torso()
arm_l   = build_arm(-1, length_scale=1.6)
arm_r   = build_arm(+1, length_scale=1.6)
leg_l   = build_leg(-1)
leg_r   = build_leg(+1)
ears    = build_ears()
eyes    = build_eyes()
jaw     = build_jaw_detail()
vest    = build_vest()

# Apply slight forward lean
for ob in [head, neck, torso, arm_l, arm_r, leg_l, leg_r, vest, jaw] + ears + eyes:
    ob.rotation_euler = (math.radians(12), 0, 0)

# Combine into one object
bpy.ops.object.select_all(action='DESELECT')
all_objs = [head, neck, torso, arm_l, arm_r, leg_l, leg_r, vest, jaw] + ears + eyes
for ob in all_objs:
    ob.select_set(True)
bpy.context.view_layer.objects.active = torso
bpy.ops.object.join()
zombie = bpy.context.active_object
zombie.name = "Zombie"

###############################################################################
#  APPLY MATERIALS
###############################################################################
print("Applying materials...")
# Simple solid-color materials
m_skin  = make_mat("Zombie_Skin",  (0.42, 0.52, 0.35), roughness=0.85)  # sickly green
m_vest  = make_mat("Zombie_Vest",  (0.90, 0.55, 0.10), roughness=0.75)  # safety orange
m_pants = make_mat("Zombie_Pants", (0.22, 0.25, 0.30), roughness=0.90)  # dark navy
m_eye_n = make_mat("Zombie_Eye_N", (0.85, 0.85, 0.80), roughness=0.40)  # cloudy white
m_eye_a = make_mat("Zombie_Eye_A", (0.15, 0.05, 0.05), roughness=0.30)  # dark infected

# Assign materials to mesh
zombie.data.materials.append(m_skin)
zombie.data.materials.append(m_vest)
zombie.data.materials.append(m_pants)
zombie.data.materials.append(m_eye_n)
zombie.data.materials.append(m_eye_a)

# Apply flat shading
bpy.context.view_layer.objects.active = zombie
bpy.ops.object.shade_flat()

###############################################################################
#  TRIANGLE COUNT CHECK
###############################################################################
tris = sum(len(f.vertices) - 2 for f in zombie.data.polygons)
print(f"Total triangles: {tris}")

###############################################################################
#  LIGHTING
###############################################################################
bpy.ops.object.light_add(type='SUN', location=(4, -3, 5))
k = bpy.context.active_object; k.data.energy = 3.5; k.data.color = (1.0, 0.92, 0.8)
k.name = "Key"

bpy.ops.object.light_add(type='POINT', location=(-4, 3, 3))
f = bpy.context.active_object; f.data.energy = 25; f.data.color = (0.7, 0.75, 0.9)
f.name = "Fill"

bpy.ops.object.light_add(type='POINT', location=(0, -4, 4))
r = bpy.context.active_object; r.data.energy = 50; r.name = "Rim"

###############################################################################
#  CAMERA
###############################################################################
bpy.ops.object.camera_add(location=(2.5, -2.5, 1.0))
cam = bpy.context.active_object
cam.data.lens = 50
cam.name = "Camera"
bpy.context.scene.camera = cam
cam.location = (2.8, -2.8, 0.5)
cam.rotation_euler = (math.radians(8), 0, math.radians(-40))

###############################################################################
#  BACKGROUND
###############################################################################
world = bpy.context.scene.world
wnodes = world.node_tree.nodes
wwlinks = world.node_tree.links
for n in wnodes:
    wnodes.remove(n)
bg = wnodes.new(type='ShaderNodeBackground')
bg.location = (0, 0)
bg.inputs['Color'].default_value = (0.08, 0.08, 0.10, 1.0)
out_w = wnodes.new(type='ShaderNodeOutputWorld')
out_w.location = (300, 0)
wwlinks.new(bg.outputs['Background'], out_w.inputs['Surface'])

###############################################################################
#  RENDER SETTINGS
###############################################################################
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 128
scene.render.resolution_x = 1920
scene.render.resolution_y = 1080
scene.render.filepath = RENDER_OUT
scene.cycles.use_denoising = True

###############################################################################
#  SAVE & OPEN
###############################################################################
bpy.ops.wm.save_as_mainfile(filepath=BLEND_FILE)
print(f"Saved blend: {BLEND_FILE}")

bpy.ops.render.render(write_still=True)
print(f"Rendered PNG: {RENDER_OUT}")

subprocess.Popen([BLENDER_EXE, BLEND_FILE])
print("Blender GUI launched.")
