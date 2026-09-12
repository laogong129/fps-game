import bpy, os, math

ROOT = r"E:\vibecoding\fps-game"
OUT = os.path.join(ROOT, "assets", "enemies")
os.makedirs(OUT, exist_ok=True)
D = 3.1415926
FPS = 30

BONES = {
 "hips": ([0,0,0.95],[0.05,0,1.05]),
 "spine": ([0.05,0,1.05],[0.05,0,1.16]),
 "spine2": ([0.05,0,1.16],[0.05,0,1.42]),
 "neck": ([0.05,0,1.42],[0.05,0,1.53]),
 "head": ([0.05,0,1.53],[0.05,0,1.74]),
 "legL": ([-0.12,0,0.95],[-0.12,0,0.45]),
 "footL": ([-0.12,0,0.45],[-0.12,0,0]),
 "legR": ([0.12,0,0.95],[0.12,0,0.45]),
 "footR": ([0.12,0,0.45],[0.12,0,0]),
 "armL": ([-0.21,0,1.34],[-0.21,0,1.05]),
 "handL": ([-0.21,0,1.05],[-0.21,0,0.78]),
 "armR": ([0.21,0,1.34],[0.21,0,1.05]),
 "handR": ([0.21,0,1.05],[0.21,0,0.78]),
}
PARENT = {"hips":"ROOT","spine":"hips","spine2":"spine","neck":"spine2","head":"neck",
          "legL":"hips","footL":"legL","legR":"hips","footR":"legR","armL":"spine2","handL":"armL","armR":"spine2","handR":"armR"}
CONNECT = {"spine","spine2","neck","head","footL","footR","handL","handR"}

def new_mat(name, c, rough=0.9):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    n = next((x for x in m.node_tree.nodes if x.type == "BSDF_PRINCIPLED"), None)
    if n:
        if "Base Color" in n.inputs: n.inputs["Base Color"].default_value = (*c, 1)
        if "Roughness" in n.inputs: n.inputs["Roughness"].default_value = rough
    return m

def prim(kind, s, loc, m, rot=(0,0,0)):
    if kind == "cube":
        bpy.ops.mesh.primitive_cube_add(size=1, location=loc, rotation=rot)
        o = bpy.context.object; o.scale = (s[0]/2, s[1]/2, s[2]/2)
    elif kind == "cyl":
        bpy.ops.mesh.primitive_cylinder_add(radius=s[0], depth=s[1], location=loc, rotation=rot, vertices=12)
        o = bpy.context.object
    else:
        bpy.ops.mesh.primitive_ico_sphere_add(radius=s[0], location=loc, rotation=rot, subdivision=1)
        o = bpy.context.object
    o.data.materials.clear()
    o.data.materials.append(m)
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    return o

def clear_objects():
    bpy.ops.object.mode_set(mode="OBJECT")
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete()
    bpy.ops.object.select_all(action="DESELECT")

def make_armature():
    bpy.ops.object.select_all(action="DESELECT")
    bpy.context.view_layer.update()
    bpy.ops.object.armature_add()
    ob = bpy.context.object
    ob.name = "armature"
    bpy.ops.object.mode_set(mode="EDIT")
    ead = ob.data.edit_bones
    for n in BONES:
        eb = ead.new(n)
        eb.head = BONES[n][0]; eb.tail = BONES[n][1]
        if PARENT[n] != "ROOT":
            p = ead[PARENT[n]]
            eb.parent = p
            eb.use_connect = n in CONNECT
    bpy.ops.object.mode_set(mode="OBJECT")
    for o in bpy.context.selected_objects: o.select_set(False)
    return ob

def skin_all(ar, parts):
    for o in bpy.context.selected_objects: o.select_set(False)
    for p in parts: p.select_set(True)
    bpy.context.view_layer.objects.active = ar
    bpy.ops.object.parent_set(type="ARMATURE_AUTO")

def join(parts, name, ar):
    bpy.ops.object.mode_set(mode="OBJECT")
    for o in bpy.context.selected_objects: o.select_set(False)
    for p in parts: p.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    m = bpy.context.object
    m.name = name
    m.data.name = name
    m.parent = ar
    m.parent_type = "OBJECT"
    m.modifiers.new("Armature", "ARMATURE")
    for o in bpy.context.selected_objects: o.select_set(False)
    return m

def assign_bone(o, bone):
    for v in o.data.vertices:
        for g in v.groups: g.weight = 0.0
        v.groups[0].weight = 1.0
    o.parent = bone
    o.parent_type = "BONE"
    o.matrix_parent_inverse = bone.matrix_basis.inverted()

# label, body_material, part_defs, mats(list), rest_overrides, action(optional)
def box(label, mi, bone):
    return []

DEFS = []

def S(label, body, bodyc, extra_mat_names, parts, action=None, rest=None):
    DEFS.append(dict(label=label, bodyc=bodyc, body=body, extra=extra_mat_names,
                     parts=parts, action=action, rest=rest or {}))

HEAD = "face"
def P(kind, s, loc, mat, bone, rot=(0,0,0)):
    return dict(kind=kind, s=s, loc=loc, mat=mat, bone=bone, rot=rot)

S("small", "skin", (0.86,0.24,0.17),
  ["hair"],
  [
    P("cube",[0.34,0.30,0.34],[0.05,0,1.6],"skin","head"),
    P("ico",[0.09],[0.05,-0.15,1.55],"hair","head"),
    P("ico",[0.03],[0.05-0.09,-0.15,1.60],"eye","head"),
    P("ico",[0.03],[0.05+0.09,-0.15,1.60],"eye","head"),
    P("cube",[0.5,0.4,0.55],[0.05,0.02,1.22],"skin","spine2"),
    P("cube",[0.34,0.32,0.36],[0.05,0.02,1.66],"hair","head"),
    P("cube",[0.14,0.18,0.9],[-0.12,0.02,0.47],"skin","legL"),
    P("cube",[0.14,0.18,0.9],[0.12,0.02,0.47],"skin","legR"),
    P("cube",[0.06,0.08,0.12],[-0.12,0.02,0.06],"skin","footL"),
    P("cube",[0.06,0.08,0.12],[0.12,0.02,0.06],"skin","footR"),
    P("cube",[0.12,0.14,0.5],[-0.21,0.02,1.09],"skin","armL"),
    P("cube",[0.12,0.14,0.5],[0.21,0.02,1.09],"skin","armR"),
  ])

S("tank", "skin", (0.40,0.22,0.52),
  ["collar","horn"],
  [
    P("cube",[0.40,0.38,0.40],[0.05,0,1.6],"skin","head"),
    P("ico",[0.09],[0.05,-0.18,1.55],"skin","head"),
    P("ico",[0.035],[0.05-0.10,-0.18,1.60],"eye","head"),
    P("ico",[0.035],[0.05+0.10,-0.18,1.60],"eye","head"),
    P("cube",[0.10,0.08,0.30],[0.05-0.20,0.05,1.88],"horn","head",rot=(0,0.4,0)),
    P("cube",[0.10,0.08,0.30],[0.05+0.20,0.05,1.88],"horn","head",rot=(0,-0.4,0)),
    P("cube",[0.75,0.55,0.78],[0.05,0.02,1.22],"skin","spine2"),
    P("cube",[0.82,0.6,0.14],[0.05,0.02,1.52],"collar","spine2"),
    P("cube",[0.16,0.20,0.9],[-0.13,0.02,0.47],"skin","legL"),
    P("cube",[0.16,0.20,0.9],[0.13,0.02,0.47],"skin","legR"),
    P("cube",[0.07,0.09,0.12],[-0.13,0.02,0.06],"skin","footL"),
    P("cube",[0.07,0.09,0.12],[0.13,0.02,0.06],"skin","footR"),
    P("cube",[0.14,0.16,0.5],[-0.24,0.02,1.09],"skin","armL"),
    P("cube",[0.14,0.16,0.5],[0.24,0.02,1.09],"skin","armR"),
  ])

S("spitter", "skin", (0.22,0.60,0.28),
  ["belly","eye"],
  [
    P("cube",[0.34,0.36,0.38],[0.05,0,1.6],"skin","head"),
    P("ico",[0.09],[0.05,-0.16,1.55],"skin","head"),
    P("ico",[0.03],[0.05-0.09,-0.16,1.60],"eye","head"),
    P("ico",[0.03],[0.05+0.09,-0.16,1.60],"eye","head"),
    P("cube",[0.30,0.26,0.14],[0.05,-0.24,1.42],"skin","head"),
    P("cube",[0.55,0.45,0.58],[0.05,0.02,1.20],"skin","spine2"),
    P("ico",[0.22],[0.05,-0.20,1.14],"belly","spine"),
    P("cube",[0.14,0.18,0.9],[-0.12,0.02,0.47],"skin","legL"),
    P("cube",[0.14,0.18,0.9],[0.12,0.02,0.47],"skin","legR"),
    P("cube",[0.06,0.08,0.12],[-0.12,0.02,0.06],"skin","footL"),
    P("cube",[0.06,0.08,0.12],[0.12,0.02,0.06],"skin","footR"),
    P("cube",[0.12,0.14,0.5],[-0.21,0.02,1.09],"skin","armL"),
    P("cube",[0.12,0.14,0.5],[0.21,0.02,1.09],"skin","armR"),
  ],
  action="throw")

S("splitter", "skin", (0.95,0.55,0.10),
  ["tumor","eye"],
  [
    P("cube",[0.36,0.34,0.36],[0.05,0,1.6],"skin","head"),
    P("ico",[0.09],[0.05,-0.16,1.55],"skin","head"),
    P("ico",[0.03],[0.05-0.09,-0.16,1.60],"eye","head"),
    P("ico",[0.03],[0.05+0.09,-0.16,1.60],"eye","head"),
    P("cube",[0.6,0.5,0.62],[0.05,0.02,1.20],"skin","spine2"),
    P("ico",[0.14],[0.16,-0.26,1.20],"tumor","spine2"),
    P("ico",[0.12],[-0.16,-0.26,1.12],"tumor","spine2"),
    P("cube",[0.04,0.3,0.55],[0.05,-0.27,1.18],"eye","spine2"),
    P("cube",[0.15,0.19,0.9],[-0.13,0.02,0.47],"skin","legL"),
    P("cube",[0.15,0.19,0.9],[0.13,0.02,0.47],"skin","legR"),
    P("cube",[0.06,0.08,0.12],[-0.13,0.02,0.06],"skin","footL"),
    P("cube",[0.06,0.08,0.12],[0.13,0.02,0.06],"skin","footR"),
    P("cube",[0.12,0.14,0.5],[-0.22,0.02,1.09],"skin","armL"),
    P("cube",[0.12,0.14,0.5],[0.22,0.02,1.09],"skin","armR"),
  ],
  rest={"spine":(0.08,0,0)})

S("minibug", "skin", (1.0,0.62,0.20),
  ["eye"],
  [
    P("cube",[0.30,0.30,0.30],[0.05,0,1.58],"skin","head"),
    P("ico",[0.08],[0.05,-0.13,1.55],"skin","head"),
    P("ico",[0.03],[0.05-0.08,-0.13,1.58],"eye","head"),
    P("ico",[0.03],[0.05+0.08,-0.13,1.58],"eye","head"),
    P("cube",[0.42,0.38,0.42],[0.05,0.02,1.20],"skin","spine2"),
    P("cube",[0.13,0.16,0.85],[-0.11,0.02,0.45],"skin","legL"),
    P("cube",[0.13,0.16,0.85],[0.11,0.02,0.45],"skin","legR"),
    P("cube",[0.05,0.07,0.11],[-0.11,0.02,0.05],"skin","footL"),
    P("cube",[0.05,0.07,0.11],[0.11,0.02,0.05],"skin","footR"),
    P("cube",[0.11,0.12,0.44],[-0.19,0.02,1.08],"skin","armL"),
    P("cube",[0.11,0.12,0.44],[0.19,0.02,1.08],"skin","armR"),
  ])

S("charger", "skin", (0.85,0.10,0.30),
  ["spike","eye"],
  [
    P("cube",[0.32,0.30,0.34],[0.05,0,1.60],"skin","head"),
    P("ico",[0.085],[0.05,-0.14,1.55],"skin","head"),
    P("ico",[0.03],[0.05-0.09,-0.14,1.60],"eye","head"),
    P("ico",[0.03],[0.05+0.09,-0.14,1.60],"eye","head"),
    P("cube",[0.5,0.45,0.5],[0.05,0.02,1.18],"skin","spine2"),
    P("cube",[0.05,0.08,0.2],[0.05,0.16,1.30],"spike","spine2"),
    P("cube",[0.05,0.08,0.2],[0.05,0.16,1.18],"spike","spine2"),
    P("cube",[0.05,0.08,0.2],[0.05,0.16,1.06],"spike","spine2"),
    P("cube",[0.14,0.18,0.85],[-0.13,0.02,0.45],"skin","legL"),
    P("cube",[0.14,0.18,0.85],[0.13,0.02,0.45],"skin","legR"),
    P("cube",[0.06,0.08,0.11],[-0.13,0.02,0.05],"skin","footL"),
    P("cube",[0.06,0.08,0.11],[0.13,0.02,0.05],"skin","footR"),
    P("cube",[0.12,0.14,0.48],[-0.22,0.02,1.06],"skin","armL"),
    P("cube",[0.12,0.14,0.48],[0.22,0.02,1.06],"skin","armR"),
  ],
  action="crouch",
  rest={"spine":(0.30,0,0),"legL":(0.30,0,0),"legR":(0.30,0,0)})

S("boss", "skin", (0.10,0.12,0.18),
  ["crown","core","eye"],
  [
    P("cube",[0.44,0.42,0.46],[0.05,0,1.62],"skin","head"),
    P("ico",[0.10],[0.05,-0.19,1.55],"skin","head"),
    P("ico",[0.04],[0.05-0.11,-0.19,1.62],"eye","head"),
    P("ico",[0.04],[0.05+0.11,-0.19,1.62],"eye","head"),
    P("cube",[0.5,0.44,0.12],[0.05,0,1.90],"crown","head"),
    P("cube",[0.8,0.6,0.88],[0.05,0.02,1.22],"skin","spine2"),
    P("cyl",[0.10,0.25,0.25],[0.05,-0.30,1.20],"core","spine"),
    P("cube",[0.16,0.20,0.9],[-0.14,0.02,0.47],"skin","legL"),
    P("cube",[0.16,0.20,0.9],[0.14,0.02,0.47],"skin","legR"),
    P("cube",[0.07,0.09,0.12],[-0.14,0.02,0.06],"skin","footL"),
    P("cube",[0.07,0.09,0.12],[0.14,0.02,0.06],"skin","footR"),
    P("cube",[0.15,0.17,0.5],[-0.25,0.02,1.09],"skin","armL"),
    P("cube",[0.15,0.17,0.5],[0.25,0.02,1.09],"skin","armR"),
  ],
  action="cast")

EXTRA_COLORS = {
 "hair":(0.13,0.10,0.10),"collar":(0.7,0.10,0.08),"horn":(0.90,0.88,0.85),
 "belly":(0.28,0.68,0.35),"eye":(0.95,0.75,0.12),"tumor":(1.0,0.42,0.05),
 "spike":(0.15,0.05,0.10),"crown":(0.85,0.70,0.30),"core":(0.15,0.85,0.55),
}
SPECIAL = {
 "throw": {
   "armL":[(0,[0,0,0]),(0.10,[0.6,-0.8,0.3]),(0.20,[0.2,-1.6,0.1]),(0.30,[0.15,-1.3,0]),(0.40,[0,0,0])],
   "armR":[(0,[0,0,0]),(0.10,[0.6,-0.8,-0.3]),(0.20,[0.2,-1.6,-0.1]),(0.30,[0.15,-1.3,0]),(0.40,[0,0,0])],
   "handL":[(0,[0,0,0]),(0.20,[0.4,0,0])],
   "handR":[(0,[0,0,0]),(0.20,[0.4,0,0])],
   "spine":[(0,[0,0,0]),(0.10,[0.2,0,0]),(0.20,[-0.15,0,0]),(0.30,[0.1,0,0])],
   "head":[(0,[0,0,0]),(0.20,[0.15,0,0])],
 },
 "cast": {
   "armR":[(0,[0,0,0]),(0.25,[0.3,-0.5,0.3]),(0.50,[-1.3,-0.8,0.3]),(0.70,[-1.6,-0.8,0.3])],
   "armL":[(0,[0,0,0]),(0.70,[0.5,-1.2,0.4]),(0.90,[-0.8,-1.2,0.4])],
   "spine":[(0,[0,0,0]),(0.50,[0.15,0,0]),(0.90,[0.35,0,0])],
   "head":[(0,[0,0,0]),(0.90,[0.1,0,0])],
 },
 "crouch": {
   "spine":[(0,[0.3,0,0]),(0.20,[0.5,0,0]),(0.40,[0.10,0,0]),(0.60,[0.4,0,0])],
   "armL":[(0,[-0.3,0,0.2]),(0.20,[-0.5,0,0.3]),(0.40,[-0.2,0,0.1])],
   "armR":[(0,[-0.3,0,-0.2]),(0.20,[-0.5,0,-0.3]),(0.40,[-0.2,0,-0.1])],
   "head":[(0,[-0.2,0,0]),(0.40,[0,0,0])],
 },
}
def frame_keys(times, fps=FPS):
    out = {}
    for bone, tk in times.items():
        out[bone] = [(int(t*fps), r) for t, r in tk]
    return out

def build(defn):
    clear_objects()
    label = defn["label"]
    mbody = new_mat(label+"_skin", defn["bodyc"])
    mats = {"skin": mbody}
    for nm in defn["extra"]:
        mats[nm] = new_mat(label+"_"+nm, EXTRA_COLORS.get(nm, (0.5,0.5,0.5)))
    ar = make_armature()
    parts = []
    for p in defn["parts"]:
        o = prim(p["kind"], p["s"], p["loc"], mats[p["mat"]], p.get("rot",(0,0,0)))
        o.name = f"{label}_{p['mat']}"
        assign_bone(o, ar.pose.bones[p["bone"]])
        parts.append(o)
    join(parts, label+"_model")
    model = bpy.context.object
    bpy.ops.object.select_all(action="DESELECT")
    model.select_set(True); ar.select_set(True)
    bpy.context.view_layer.objects.active = ar
    for bn, ang in defn["rest"].items():
        pb = ar.pose.bones[bn]; pb.rotation_mode = "XYZ"; pb.rotation_euler = ang
    act = defn.get("action")
    if act:
        times = SPECIAL[act]
        a = bpy.data.actions.new(label+"_"+act)
        ar.animation_data_create()
        ar.animation_data.action = a
        fb = frame_keys(times)
        for bone, ks in fb.items():
            pb = ar.pose.bones[bone]; pb.rotation_mode = "XYZ"
            for f, r in ks:
                bpy.context.scene.frame_set(f)
                pb.rotation_euler = r
                pb.keyframe_insert("rotation_euler", frame=f)
        bpy.context.scene.frame_set(0)
    export_glb(label, [ar, model])
    print("EXPORTED", label, "action=", act)

def export_glb(name, objs):
    for o in bpy.context.selected_objects: o.select_set(False)
    for o in objs: o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.export_scene.gltf(
        filepath=os.path.join(OUT, name+".glb"),
        export_format="GLB", use_selection=True,
        export_animations=True, export_frame_range="ALL")
    print("GLB", name, "at", os.path.join(OUT, name+".glb"))

for d in DEFS:
    build(d)
print("ALL DONE")
