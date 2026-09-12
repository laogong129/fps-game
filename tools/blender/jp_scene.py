import bpy, json, os

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
    "gravel": mat("gravel", (0.42, 0.38, 0.33), rough=0.95),
    "pathWood": mat("pathWood", (0.34, 0.26, 0.18), rough=0.9),
    "stone": mat("stone", (0.5, 0.48, 0.44), rough=0.9),
    "torii": mat("torii", (0.55, 0.14, 0.10), rough=0.6),
    "roofTile": mat("roofTile", (0.10, 0.12, 0.14), rough=0.5),
    "shrineWall": mat("shrineWall", (0.85, 0.82, 0.75), rough=0.8),
    "shrinePillar": mat("shrinePillar", (0.9, 0.88, 0.82), rough=0.7),
    "woodDark": mat("woodDark", (0.20, 0.15, 0.11), rough=0.9),
    "window": mat("window", (0.05, 0.03, 0.02), emissive=(1.0, 0.62, 0.25), emi_str=3.0),
    "lanternPaper": mat("lanternPaper", (0.95, 0.85, 0.65), emissive=(1.0, 0.78, 0.45), emi_str=2.2),
    "lanternPole": mat("lanternPole", (0.15, 0.13, 0.12), rough=0.7, metallic=0.3),
    "stoneGray": mat("stoneGray", (0.33, 0.33, 0.31), rough=0.9),
    "toroGlow": mat("toroGlow", (0.1, 0.08, 0.04), emissive=(1.0, 0.55, 0.2), emi_str=3.5),
    "trunk": mat("trunk", (0.24, 0.17, 0.13), rough=0.95),
    "petal": mat("petal", (0.92, 0.62, 0.72), rough=0.9),
    "petal2": mat("petal2", (0.95, 0.75, 0.80), rough=0.9),
    "moss": mat("moss", (0.30, 0.45, 0.25), rough=1.0),
    "paper": mat("paper", (0.95, 0.93, 0.85), rough=0.9),
    "rope": mat("rope", (0.75, 0.55, 0.25), rough=0.9),
    "fox": mat("fox", (0.42, 0.40, 0.38), rough=0.95),
    "water": mat("water", (0.15, 0.35, 0.35), rough=0.2),
}

def box(name, m, size, loc, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
    o = bpy.context.active_object
    o.name = name
    o.scale = (size[0] / 2, size[1] / 2, size[2] / 2)
    bpy.ops.object.transform_apply(scale=True)
    o.data.materials.append(m)
    return o

def cyl(name, m, r, h, loc, verts=12):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=h, location=loc, vertices=verts)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(m)
    return o

def pyr(name, m, r, h, loc):
    bpy.ops.mesh.primitive_cone_add(radius1=r, radius2=0, depth=h, location=loc, vertices=4)
    o = bpy.context.active_object
    o.name = name
    o.rotation_euler[1] = 0
    o.rotation_euler[2] = 3.1415926 / 4
    bpy.ops.object.transform_apply(rotation=True)
    o.data.materials.append(m)
    return o

def ico(name, m, r, loc):
    bpy.ops.mesh.primitive_ico_sphere_add(radius=r, location=loc, subdivisions=1)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(m)
    return o

# 砂砾地面
box("ground", M["gravel"], (60, 60, 0.2), (0, 0, -0.1))

# 中央石板路（通向鸟居）
box("path", M["pathWood"], (5, 24, 0.08), (0, -10, 0.04))

# 路两侧踏步石
for i, z in enumerate([-6, -12, -18]):
    box(f"stepA{i}", M["stone"], (1.6, 1.2, 0.15), (3.2, z, 0.08))
    box(f"stepB{i}", M["stone"], (1.6, 1.2, 0.15), (-3.2, z, 0.08))

# 大鸟居（z=-22）
box("toriiBase", M["stone"], (14, 3.5, 0.3), (0, -22, 0.15))
for s in (-1, 1):
    cyl(f"toriiPillar{s}", M["torii"], 0.45, 6, (s * 4.5, -22, 3))
    cyl(f"toriiPillarBase{s}", M["stone"], 0.65, 0.4, (s * 4.5, -22, 0.2))
    obstacles.append({"x": s * 4.5, "z": -22, "r": 0.8})
box("toriiNuki", M["torii"], (10.5, 1.0, 0.7), (0, -22, 4.4))
box("toriiKasagi", M["torii"], (12.0, 1.7, 0.5), (0, -22, 5.5))
box("toriiKasagiTop", M["roofTile"], (13.0, 1.9, 0.25), (0, -22, 6.0))
box("toriiGaku", M["torii"], (2.0, 0.8, 1.2), (0, -22, 4.4))

# 主殿小神社（-16,-10）
box("shrineBase", M["stone"], (9, 7, 0.4), (-16, -10, 0.2))
box("shrineFloor", M["pathWood"], (8, 6, 0.2), (-16, -10, 0.5))
for sx, sz in [(-3.4, -2.4), (3.4, -2.4), (-3.4, 2.4), (3.4, 2.4)]:
    cyl(f"shrinePillar{sx}_{sz}", M["shrinePillar"], 0.18, 2.4, (-16 + sx, -10 + sz, 1.7))
box("shrineBody", M["shrineWall"], (6.2, 4.2, 2.0), (-16, -10, 1.6))
box("shrineWindowF", M["window"], (3.0, 0.1, 1.4), (-16, -7.75, 1.5))
box("shrineWindowL", M["window"], (0.1, 2.4, 1.4), (-19.05, -10, 1.5))
box("shrineLintel", M["torii"], (7.4, 5.4, 0.4), (-16, -10, 2.8))
# 二段屋根
box("shrineRoof1", M["roofTile"], (9.6, 7.6, 0.3), (-16, -10, 3.1))
box("shrineRoof2", M["roofTile"], (6.8, 5.2, 0.3), (-16, -10, 4.0))
pyr("shrineRoofTop", M["roofTile"], 4.4, 1.4, (-16, -10, 4.85))
# 注连绳 + 纸垂
box("shimenawa", M["rope"], (0.3, 0.3, 5.0), (-16, -7.4, 2.3))
for i in range(5):
    z = -9.8 + i * 1.2
    box(f"shide{i}", M["paper"], (0.12, 0.5, 0.9), (-16 + 0.25, z, 1.75), rot=(0.15, 0, 0))
    box(f"shide2_{i}", M["paper"], (0.12, 0.4, 0.8), (-16 - 0.25, z + 0.6, 1.8), rot=(-0.15, 0, 0))
# 石段（面向 +z）
for i in range(3):
    box(f"shrineStep{i}", M["stone"], (4.0 - i * 0.8, 1.2, 0.18), (-16, -7.2 + i * 1.1, 0.1 + i * 0.22))
obstacles.append({"x": -16, "z": -10, "r": 5.0})
LIGHTS.append([-16, -10, 1.8])

# 手水钵 ×2（神社正面前）
for i, (tx, tz) in enumerate([(-19, -4.5), (-13, -4.5)]):
    cyl(f"basin{i}A", M["stoneGray"], 0.7, 0.15, (tx, tz, 0.45))
    cyl(f"basin{i}B", M["stoneGray"], 0.55, 0.5, (tx, tz, 0.75))
    cyl(f"basin{i}W", M["water"], 0.42, 0.05, (tx, tz, 0.99))
    obstacles.append({"x": tx, "z": tz, "r": 0.7})

# 狐石像 ×2（神社旁，坐狐造型：身体+头+尖耳）
for i, (tx, tz) in enumerate([(-21, -6.5), (-11, -6.5)]):
    box(f"foxStatueBody{i}", M["fox"], (0.7, 1.0, 1.1), (tx, tz, 0.9))
    ico(f"foxHead{i}", M["fox"], 0.4, (tx, tz, 1.75))
    box(f"foxEarL{i}", M["fox"], (0.15, 0.1, 0.35), (tx - 0.2, tz, 2.1))
    box(f"foxEarR{i}", M["fox"], (0.15, 0.1, 0.35), (tx + 0.2, tz, 2.1))
    box(f"foxStone{i}", M["stone"], (1.4, 1.4, 0.3), (tx, tz, 0.15))
    obstacles.append({"x": tx, "z": tz, "r": 0.7})

# 苔藓圆垫（点缀地面，无碰撞）
for i, (mx, mz, r) in enumerate([(-8, -20, 0.9), (8, 12, 1.1), (-20, 14, 0.8), (22, -2, 0.9), (0, 14, 0.7)]):
    c = cyl(f"moss{i}", M["moss"], r, 0.06, (mx, mz, 0.06))
    c.scale = (1, 1, 0.5)
    bpy.ops.object.transform_apply(scale=True)

# 石灯笼旁石凳（鸟居右）
box("stoneBench", M["stone"], (2.2, 0.8, 0.5), (12, -18, 0.25))
cyl("stoneBenchLegA", M["stone"], 0.18, 0.5, (11, -18.3, 0.25))
cyl("stoneBenchLegB", M["stone"], 0.18, 0.5, (13, -18.3, 0.25))
obstacles.append({"x": 12, "z": -18, "r": 1.0})

# 小鸟居（16,-8）
for s in (-1, 1):
    cyl(f"torii2Pillar{s}", M["torii"], 0.35, 4.5, (16 + s * 3, -8, 2.25))
    obstacles.append({"x": 16 + s * 3, "z": -8, "r": 0.6})
box("torii2Nuki", M["torii"], (8.0, 0.8, 0.55), (16, -8, 3.4))
box("torii2Kasagi", M["torii"], (9.5, 1.4, 0.4), (16, -8, 4.3))

# 木屋（亮窗）×3
houses = [(-20, 10), (20, 4), (-6, 20)]
for i, (hx, hz) in enumerate(houses):
    box(f"houseBody{i}", M["woodDark"], (5, 4, 3), (hx, hz, 1.5))
    box(f"houseWin{i}", M["window"], (2.0, 0.15, 1.3), (hx, hz + 2.05, 1.5))
    box(f"housePaper{i}", M["paper"], (5.2, 0.12, 1.0), (hx, hz + 2.06, 2.8))
    box(f"houseRoof1{i}", M["roofTile"], (6.6, 5.6, 0.25), (hx, hz, 3.4))
    pyr(f"houseRoof2{i}", M["roofTile"], 3.4, 1.6, (hx, hz, 4.4))
    obstacles.append({"x": hx, "z": hz, "r": 3.0})
    LIGHTS.append([hx, hz, 2.2])

# 石灯籠 ×4
toros = [(-10, -2), (10, -2), (-12, 16), (12, 16)]
for i, (tx, tz) in enumerate(toros):
    cyl(f"toroBase{i}", M["stoneGray"], 0.4, 0.5, (tx, tz, 0.25))
    cyl(f"toroShaft{i}", M["stoneGray"], 0.14, 1.1, (tx, tz, 1.05))
    box(f"toroLight{i}", M["toroGlow"], (0.65, 0.65, 0.55), (tx, tz, 1.85))
    pyr(f"toroCap{i}", M["stoneGray"], 0.5, 0.35, (tx, tz, 2.35))
    obstacles.append({"x": tx, "z": tz, "r": 0.55})
    LIGHTS.append([tx, tz, 2.0])

# 白色纸灯笼柱 ×2（鸟居前迎客）
for s in (-1, 1):
    px, pz = s * 8, -14
    cyl(f"lanternPole{s}", M["lanternPole"], 0.09, 3.0, (px, pz, 1.5))
    ico(f"lanternPaper{s}", M["lanternPaper"], 0.85, (px, pz, 3.1))
    obstacles.append({"x": px, "z": pz, "r": 0.45})
    LIGHTS.append([px, pz, 3.1])

# 樱花树 ×4（四角）
trees = [(-24, -20, "petal"), (24, -20, "petal2"), (-24, 20, "petal2"), (24, 20, "petal")]
for i, (tx, tz, pm) in enumerate(trees):
    cyl(f"trunk{i}", M["trunk"], 0.35, 3.2, (tx, tz, 1.6))
    obstacles.append({"x": tx, "z": tz, "r": 0.55})
    ico(f"canopy{i}a", M[pm], 1.9, (tx, tz, 4.4))
    ico(f"canopy{i}b", M[pm], 1.4, (tx + 1.2, tz + 0.8, 3.7))
    ico(f"canopy{i}c", M[pm], 1.4, (tx - 1.0, tz - 0.7, 3.9))

with open(os.path.join(OUT, "jp_obstacles.json"), "w") as f:
    json.dump({"obstacles": obstacles, "lights": LIGHTS}, f, indent=1)

for o in bpy.data.objects:
    o.select_set(True)
bpy.ops.export_scene.gltf(
    filepath=os.path.join(OUT, "temple.glb"),
    export_format="GLB",
    use_selection=True,
    export_apply=True,
)
print("TEMPLE GLB EXPORTED, obstacles:", len(obstacles), "lights:", len(LIGHTS))
