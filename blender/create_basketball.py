"""Create and render a basketball in Blender 5.x, then open Blender GUI.
Usage: blender -b -P create_basketball.py
Outputs: assets/basketball.blend + assets/basketball_render.png
Then opens Blender GUI with the blend file.
"""
import bpy
import math
import os
import subprocess
import sys

# ── Paths ────────────────────────────────────────────────────────────────────
PROJECT_DIR = r"E:\vibecoding\fps-game"
ASSETS_DIR  = os.path.join(PROJECT_DIR, "assets")
BLEND_FILE  = os.path.join(ASSETS_DIR, "basketball.blend")
RENDER_OUT  = os.path.join(ASSETS_DIR, "basketball_render.png")
BLENDER_EXE = r"E:\blender\blender-5.2.1-windows-x64\blender.exe"
os.makedirs(ASSETS_DIR, exist_ok=True)

# ── Cleanup ──────────────────────────────────────────────────────────────────
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# ── 1. Main sphere ───────────────────────────────────────────────────────────
bpy.ops.mesh.primitive_uv_sphere_add(segments=64, ring_count=32, radius=1.0)
sphere = bpy.context.active_object
sphere.name = "Basketball"

# ── 2. Seam torus rings (4 characteristic curves) ───────────────────────────
seam_angles = [0, 90, 45, -45]
for i, angle in enumerate(seam_angles):
    rot_z = math.radians(angle)
    bpy.ops.mesh.primitive_torus_add(
        major_radius=1.001, minor_radius=0.02,
        major_segments=128, minor_segments=12,
        location=(0, 0, 0), rotation=(0, rot_z, 0)
    )
    s = bpy.context.active_object
    s.name = f"Seam_{i+1}"

# Join seams into sphere
bpy.context.view_layer.objects.active = sphere
bpy.ops.object.select_all(action='DESELECT')
sphere.select_set(True)
for i in range(1, 5):
    bpy.data.objects[f"Seam_{i}"].select_set(True)
bpy.ops.object.join()
basketball = bpy.context.active_object
basketball.name = "Basketball"

# ── 3. Material ──────────────────────────────────────────────────────────────
mat = bpy.data.materials.new(name="Basketball_Mat")
nodes = mat.node_tree.nodes
links = mat.node_tree.links

for n in list(nodes):
    if n.type != 'OUTPUT_MATERIAL':
        nodes.remove(n)

output = None
for n in nodes:
    if n.type == 'OUTPUT_MATERIAL':
        output = n
        break
if output is None:
    output = nodes.new(type='ShaderNodeOutputMaterial')
output.name = 'Surface'
output.location = (400, 0)

bsdf = nodes.new(type='ShaderNodeBsdfPrincipled')
bsdf.location = (100, 0)
bsdf.inputs['Base Color'].default_value = (0.78, 0.38, 0.08, 1.0)
bsdf.inputs['Roughness'].default_value = 0.65

bump = nodes.new(type='ShaderNodeBump')
bump.location = (-200, 150)
bump.inputs['Strength'].default_value = 0.3
bump.name = "Bump"

tex_coord = nodes.new(type='ShaderNodeTexCoord')
tex_coord.location = (-600, 150)

mapping = nodes.new(type='ShaderNodeMapping')
mapping.location = (-400, 150)
mapping.name = "Map"

links.new(tex_coord.outputs['UV'], mapping.inputs['Vector'])
links.new(mapping.outputs['Vector'], bump.inputs['Normal'])
links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])

basketball.data.materials.append(mat)

# ── 4. Apply transforms ──────────────────────────────────────────────────────
bpy.context.view_layer.objects.active = basketball
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

# ── 5. Lighting ──────────────────────────────────────────────────────────────
bpy.ops.object.light_add(type='SUN', location=(5, -3, 5))
sun = bpy.context.active_object
sun.data.energy = 4.0
sun.data.color = (1.0, 0.9, 0.8)
sun.name = "Key"

bpy.ops.object.light_add(type='POINT', location=(-4, 3, 2))
fill = bpy.context.active_object
fill.data.energy = 30
fill.data.color = (0.8, 0.85, 1.0)
fill.name = "Fill"

bpy.ops.object.light_add(type='POINT', location=(0, -5, 4))
rim = bpy.context.active_object
rim.data.energy = 60
rim.name = "Rim"

# ── 6. Camera ────────────────────────────────────────────────────────────────
bpy.ops.object.camera_add(location=(3, -3, 2))
cam = bpy.context.active_object
cam.data.lens = 85
cam.name = "Camera"
bpy.context.scene.camera = cam
cam.rotation_euler = (math.radians(15), 0, math.radians(-45))

# ── 7. World background ──────────────────────────────────────────────────────
world = bpy.context.scene.world
wnodes = world.node_tree.nodes
wwlinks = world.node_tree.links
for n in wnodes:
    wnodes.remove(n)
bg = wnodes.new(type='ShaderNodeBackground')
bg.location = (0, 0)
bg.inputs['Color'].default_value = (0.12, 0.12, 0.15, 1.0)
out_w = wnodes.new(type='ShaderNodeOutputWorld')
out_w.location = (300, 0)
wwlinks.new(bg.outputs['Background'], out_w.inputs['Surface'])

# ── 8. Render settings ──────────────────────────────────────────────────────
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.samples = 256
scene.render.resolution_x = 1920
scene.render.resolution_y = 1080
scene.render.filepath = RENDER_OUT
scene.cycles.use_denoising = True

# ── 9. Save blend & render ──────────────────────────────────────────────────
bpy.ops.wm.save_as_mainfile(filepath=BLEND_FILE)
print(f"Saved blend: {BLEND_FILE}")

bpy.ops.render.render(write_still=True)
print(f"Rendered PNG: {RENDER_OUT}")

# ── 10. Open Blender GUI with the saved file ────────────────────────────────
print(f"Opening Blender GUI: {BLEND_FILE}")
subprocess.Popen([
    BLENDER_EXE,
    BLEND_FILE
])
print("Blender GUI launch command sent.")
