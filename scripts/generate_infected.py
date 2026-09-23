"""
Generate infected enemy model - simple stable version
Usage: E:\blender\blender-5.2.1-windows-x64\blender.exe --background --python scripts/generate_infected.py
"""
import bpy
from math import radians

# ═══════════════════════════════════════════
# Clear scene
# ═══════════════════════════════════════════
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# ═══════════════════════════════════════════
# Materials (simple color-based, no nodes)
# ═══════════════════════════════════════════
def new_mat(name, color):
    mat = bpy.data.materials.new(name=name)
    mat.diffuse_color = (*color, 1.0)
    return mat

M_SKIN = new_mat("Skin", (0.45, 0.38, 0.30))
M_SKIN_DK = new_mat("SkinDark", (0.30, 0.25, 0.20))
M_TSHIRT = new_mat("Tshirt", (0.22, 0.22, 0.20))
M_PANTS = new_mat("Pants", (0.28, 0.22, 0.15))
M_SHOE = new_mat("Shoe", (0.12, 0.11, 0.10))
M_BANDAGE = new_mat("Bandage", (0.60, 0.55, 0.45))
M_EYE_H = new_mat("EyeA", (0.08, 0.05, 0.05))
M_EYE_N = new_mat("EyeN", (0.70, 0.60, 0.30))
M_TOOTH = new_mat("Tooth", (0.85, 0.82, 0.70))

materials = [M_SKIN, M_SKIN_DK, M_TSHIRT, M_PANTS, M_SHOE, M_BANDAGE, M_EYE_H, M_EYE_N, M_TOOTH]

# ═══════════════════════════════════════════
# Create body parts
# ═══════════════════════════════════════════

# Torso (hunched forward)
bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0, 0.6, 0))
torso = bpy.context.active_object
torso.name = "torso"
torso.scale = (0.32, 0.9, 0.38)  # Depth 0.76m >= 0.5m requirement
bpy.ops.object.shade_smooth()

# Head (forward lean)
bpy.ops.mesh.primitive_uv_sphere_add(segments=24, ring_count=16, radius=0.22, location=(0, 1.35, 0))
head = bpy.context.active_object
head.name = "head"
head.scale = (0.90, 1.05, 0.95)  # Protruding forehead
head.rotation_euler = (radians(25), 0, 0)  # Forward lean
bpy.ops.object.shade_smooth()

# Left arm (shorter)
bpy.ops.mesh.primitive_cylinder_add(radius=0.06, depth=0.8, location=(-0.42, 0.55, 0))
l_arm = bpy.context.active_object
l_arm.name = "arm_L"
l_arm.scale = (1.0, 1.3, 1.0)
l_arm.rotation_euler = (0, 0, radians(8))
bpy.ops.object.shade_smooth()

# Right arm (longer)
bpy.ops.mesh.primitive_cylinder_add(radius=0.06, depth=1.0, location=(0.42, 0.55, 0))
r_arm = bpy.context.active_object
r_arm.name = "arm_R"
r_arm.scale = (1.0, 1.6, 1.0)
r_arm.rotation_euler = (radians(-10), 0, radians(-5))
bpy.ops.object.shade_smooth()

# Left leg
bpy.ops.mesh.primitive_cylinder_add(radius=0.09, depth=0.6, location=(-0.15, 0.15, 0))
l_leg = bpy.context.active_object
l_leg.name = "leg_L"
l_leg.rotation_euler = (0, 0, radians(5))  # Slight outward turn
bpy.ops.object.shade_smooth()

# Right leg
bpy.ops.mesh.primitive_cylinder_add(radius=0.09, depth=0.6, location=(0.15, 0.15, 0))
r_leg = bpy.context.active_object
r_leg.name = "leg_R"
bpy.ops.object.shade_smooth()

# Right shoe
bpy.ops.mesh.primitive_cube_add(size=0.30, location=(0.15, -0.15, 0))
shoe_R = bpy.context.active_object
shoe_R.name = "shoe_R"
shoe_R.scale = (1.1, 0.45, 1.4)
bpy.ops.object.shade_smooth()

# Left foot (bare)
bpy.ops.mesh.primitive_cube_add(size=0.26, location=(-0.15, -0.15, 0))
foot_L = bpy.context.active_object
foot_L.name = "foot_L"
foot_L.scale = (1.0, 0.40, 1.2)
bpy.ops.object.shade_smooth()

# Bandage on left wrist
bpy.ops.mesh.primitive_torus_add(major_radius=0.06, minor_radius=0.02, location=(-0.42, 0.30, 0))
bandage = bpy.context.active_object
bandage.name = "bandage"
bandage.scale = (1.0, 1.5, 1.0)
bpy.ops.object.shade_smooth()

# ═══════════════════════════════════════════
# Join all parts into single mesh
# ═══════════════════════════════════════════
all_parts = [torso, head, l_arm, r_arm, l_leg, r_leg, shoe_R, foot_L, bandage]

bpy.ops.object.select_all(action='DESELECT')
for ob in all_parts:
    ob.select_set(True)
bpy.context.view_layer.objects.active = torso
bpy.ops.object.join()

enemy = bpy.context.active_object
enemy.name = "infected_enemy"
bpy.ops.object.shade_smooth()

# Apply subdivision for smoother surface
subdiv = enemy.modifiers.new(name="Subdiv", type='SUBSURF')
subdiv.levels = 2
subdiv.render_levels = 3
bpy.ops.object.modifier_apply(modifier=subdiv.name)

print(f"Joined mesh: {enemy.name}")
print(f"Vertices: {len(enemy.data.vertices)}")
print(f"Faces: {len(enemy.data.polygons)}")

# ═══════════════════════════════════════════
# Add materials to mesh
# ═══════════════════════════════════════════
mesh_data = enemy.data
for mat in materials:
    mesh_data.materials.append(mat)

# Assign materials by region (based on vertex position)
for poly in mesh_data.polygons:
    verts = poly.vertices
    avg_y = sum(mesh_data.vertices[i].co.y for i in verts) / len(verts)
    avg_x = sum(mesh_data.vertices[i].co.x for i in verts) / len(verts)
    avg_z = sum(mesh_data.vertices[i].co.z for i in verts) / len(poly.vertices)

    # Simple region-based assignment
    if avg_y > 1.15:  # Head
        poly.material_index = 0  # Skin
    elif 0.2 < avg_y < 1.15 and abs(avg_x) < 0.30:  # Torso
        poly.material_index = 2  # Tshirt
    elif abs(avg_x) > 0.30 and avg_y > 0.1:  # Arms
        poly.material_index = 1  # SkinDark
    elif abs(avg_x + 0.42) < 0.08 and abs(avg_y - 0.30) < 0.08:  # Bandage
        poly.material_index = 5  # Bandage
    elif avg_y < 0.2 and abs(avg_x) < 0.20:  # Legs
        poly.material_index = 3  # Pants
    elif avg_y < -0.1 and avg_x > 0.05:  # Right shoe
        poly.material_index = 4  # Shoe
    elif avg_y < -0.1 and abs(avg_x + 0.15) < 0.10:  # Left foot
        poly.material_index = 1  # SkinDark (bare foot)
    else:
        poly.material_index = 0  # Skin (default)

print("\nMaterial assignment complete:")
for i, mat in enumerate(mesh_data.materials):
    count = sum(1 for p in mesh_data.polygons if p.material_index == i)
    print(f"  [{i}] {mat.name}: {count} faces")

# ═══════════════════════════════════════════
# Center object
# ═══════════════════════════════════════════
bbox = enemy.bound_box
center = [(bbox[0][i] + bbox[7][i]) / 2 for i in range(3)]
enemy.location = (0, 0.9 - center[1], -center[2])

# ═══════════════════════════════════════════
# Export to GLB
# ═══════════════════════════════════════════
out_path = r"E:\vibecoding\fps-game\assets\models\enemy_infected.glb"
bpy.ops.export_scene.gltf(
    filepath=out_path,
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    use_selection=True,
)

print(f"\n✅ Model exported: {out_path}")
print(f"   Vertices: {len(enemy.data.vertices)}")
print(f"   Faces: {len(enemy.data.polygons)}")
print(f"   Materials: {len(mesh_data.materials)}")
