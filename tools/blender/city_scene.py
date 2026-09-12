import bpy, json, math, os

ROOT = r"E:\vibecoding\fps-game"
OUT = os.path.join(ROOT, "assets")
os.makedirs(OUT, exist_ok=True)

for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)

obstacles = []
LIGHTS = []

def mat(name, color, rough=0.8, metallic=0.0, emissive=None, emi_str=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    node = next((n for n in m.node_tree.nodes if n.type == "BSDF_PRINCIPLED"), m.node_tree.nodes[0])
    if "Base Color" in node.inputs:
        node.inputs["Base Color"].default_value = (*color, 1)
    if "Roughness" in node.inputs:
        node.inputs["Roughness"].default_value = rough
    if "Metallic" in node.inputs:
        node.inputs["Metallic"].default_value = metallic
    if emissive:
        emi_in = next((n for n in node.inputs if n.name in ("Emission Color", "Emission")), None)
        if emi_in:
            emi_in.default_value = (*emissive, 1)
        str_in = node.inputs.get("Emission Strength")
        if str_in:
            str_in.default_value = emi_str
    return m

M = {
    "asphalt": mat("asphalt", (0.05, 0.05, 0.07), rough=0.35, metallic=0.1),
    "line": mat("line", (0.75, 0.75, 0.6), rough=0.6, emissive=(0.6, 0.6, 0.4), emi_str=0.15),
    "building": mat("building", (0.04, 0.05, 0.09), rough=0.9),
    "building2": mat("building2", (0.07, 0.06, 0.10), rough=0.9),
    "puddle": mat("puddle", (0.10, 0.12, 0.20), rough=0.05, metallic=0.9),
    "lampPole": mat("lampPole", (0.12, 0.12, 0.14), rough=0.5, metallic=0.7),
    "lampHead": mat("lampHead", (0.3, 0.35, 0.45), rough=0.4, metallic=0.6, emissive=(0.7, 0.85, 1.0), emi_str=2.5),
    "stallRoof": mat("stallRoof", (0.35, 0.06, 0.08), rough=0.7),
    "stallLeg": mat("stallLeg", (0.2, 0.18, 0.16), rough=0.8),
    "crate": mat("crate", (0.18, 0.13, 0.08), rough=0.9),
    "barrier": mat("barrier", (0.5, 0.5, 0.55), rough=0.5),
    "binRed": mat("binRed", (0.45, 0.08, 0.08), rough=0.8),
    "binBlue": mat("binBlue", (0.06, 0.25, 0.45), rough=0.8),
    "neonP": mat("neonP", (0.0, 0.0, 0.0), emissive=(1.0, 0.25, 0.55), emi_str=4.0),
    "neonB": mat("neonB", (0.0, 0.0, 0.0), emissive=(0.1, 0.6, 1.0), emi_str=4.0),
    "neonG": mat("neonG", (0.0, 0.0, 0.0), emissive=(0.2, 1.0, 0.5), emi_str=3.0),
}

def box(name, mat, size, loc, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.scale = (size[0] / 2, size[1] / 2, size[2] / 2)
    bpy.ops.object.transform_apply(scale=True)
    o.data.materials.append(mat)
    return o

def cyl(name, mat, r, h, loc):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=h, location=loc, vertices=12)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(mat)
    return o

def to_b(x, z, y):
    return (x, z, y)

# 地面（沥青）
g = box("ground", M["asphalt"], (60, 60, 0.2), to_b(0, 0, -0.1))

# 车道白线（雨后反光感）
for i in range(-2, 3):
    box(f"lane{i}", M["line"], (0.3, 54, 0.04), to_b(i * 11, 0, 0.02))

# 水洼
for i, (px, pz, r) in enumerate([(8, 14, 2.6), (-13, -9, 3.2), (22, -16, 2.2), (-24, 18, 2.8), (4, -22, 2.0)]):
    c = cyl(f"puddle{i}", M["puddle"], r, 0.03, to_b(px, pz, 0.03))
    c.scale = (1, 0.6, 1)
    bpy.ops.object.transform_apply(scale=True)

# 远处高楼剪影（围一圈，高度错落）
H = [
    (-27, -20, 22, M["building"]), (-12, -27, 30, M["building2"]), (10, -27, 18, M["building"]),
    (27, -14, 26, M["building2"]), (27, 16, 34, M["building"]), (12, 27, 20, M["building2"]),
    (-10, 27, 28, M["building"]), (-27, 8, 16, M["building2"]),
]
for i, (x, z, h, m) in enumerate(H):
    box(f"tower{i}", m, (9, 9, h), to_b(x, z, h / 2))
    # 霓虹招牌
    nm = [M["neonP"], M["neonB"], M["neonG"]][i % 3]
    sx = 5 if abs(x) > 20 else 1
    sz = 5 if abs(z) > 20 else 1
    box(f"neon{i}", nm, (sx * 4, sz * 4, 1.2), to_b(x + (4.6 if x < 0 else -4.6) * sx, z + (4.6 if z < 0 else -4.6) * sz, 6 + i * 2.3))

# 路灯（杆 + 灯头，4 盏留点光位给 three 端）
lamps = [(-18, -18), (18, -18), (-18, 18), (18, 18), (0, -24), (0, 24)]
for i, (x, z) in enumerate(lamps):
    cyl(f"lamppole{i}", M["lampPole"], 0.12, 5.5, to_b(x, z, 2.75))
    hx, hz = x + (0 if abs(x) > 1 else 0), z + (-1.4 if z > 0 else 1.4)
    b = box(f"lamphead{i}", M["lampHead"], (0.5, 1.4, 0.3), to_b(x + (0.7 if x >= 0 else -0.7) * (1 if abs(x) > 1 else 0), z, 5.5))
    LIGHTS.append([x, z, 5.5])
obstacles += [{"x": x, "z": z, "r": 0.5} for x, z in lamps]

# 街边摊位（棚顶 + 四腿 + 台面）：四角对称
for i, (x, z) in enumerate([(12, 12), (-12, 12), (12, -12), (-12, -12)]):
    box(f"stallRoof{i}", M["stallRoof"], (4.4, 4.4, 0.2), to_b(x, z, 2.6))
    for dx in (-2, 2):
        for dz in (-2, 2):
            cyl(f"stallLeg{i}_{dx}_{dz}", M["stallLeg"], 0.1, 2.5, to_b(x + dx, z + dz, 1.25))
    box(f"stallTable{i}", M["crate"], (3.4, 2.6, 1.0), to_b(x, z - 0.8, 0.5))
    obstacles.append({"x": x, "z": z, "r": 2.8})

# 垃圾桶堆（两组）
for i, (x, z) in enumerate([(22, 4), (-22, -4)]):
    cyl(f"binA{i}", M["binRed"], 0.45, 1.1, to_b(x, z, 0.55))
    cyl(f"binB{i}", M["binBlue"], 0.45, 1.1, to_b(x + 1.1, z + 0.4, 0.55))
    box(f"crate{i}", M["crate"], (1.4, 1.4, 1.4), to_b(x - 1.0, z + 1.2, 0.7))
    obstacles.append({"x": x + 0.4, "z": z + 0.4, "r": 1.6})

# 出生点保护圈：半径 10 四件低矮路障（中央 8m 保持空地）
for i, (x, z) in enumerate([(10, 0), (-10, 0), (0, 10), (0, -10)]):
    box(f"barrier{i}", M["barrier"], (2.6, 0.4, 1.1), to_b(x, z, 0.55))
    obstacles.append({"x": x, "z": z, "r": 1.6})

with open(os.path.join(OUT, "city_obstacles.json"), "w") as f:
    json.dump({"obstacles": obstacles, "lights": LIGHTS}, f, indent=1)

for o in bpy.data.objects:
    o.select_set(True)
bpy.ops.export_scene.gltf(
    filepath=os.path.join(OUT, "city.glb"),
    export_format="GLB",
    use_selection=True,
    export_apply=True,
)
print("CITY GLB EXPORTED, obstacles:", len(obstacles))
