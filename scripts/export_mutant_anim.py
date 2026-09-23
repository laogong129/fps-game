"""导入 Mixamo FBX，列出动画，导出带骨骼+动画的 GLB"""
import bpy
import os

FBX = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
OUT = r'E:\vibecoding\fps-game\public\assets\models\enemy_mutant.glb'

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

print('IMPORT', FBX)
bpy.ops.import_scene.fbx(filepath=FBX)

armature = None
meshes = []
for obj in bpy.context.scene.objects:
    if obj.type == 'ARMATURE':
        armature = obj
    elif obj.type == 'MESH':
        meshes.append(obj)

print('ARMATURE', armature.name if armature else None,
      'bones', len(armature.data.bones) if armature else 0)
for m in meshes:
    print('MESH', m.name, 'verts', len(m.data.vertices))

print('--- ACTIONS ---')
for a in bpy.data.actions:
    fr = a.frame_range
    n_fc = -1
    try:
        n_fc = len(a.fcurves)
    except Exception:
        try:
            n_fc = sum(len(sl.channelbag(a).fcurves) for sl in a.slots for _ in [0])
        except Exception:
            n_fc = 'n/a'
    print('ACTION', a.name, 'frames', round(fr[0], 1), '->', round(fr[1], 1), 'fcurves', n_fc)
print('--- END ACTIONS ---')

if armature:
    ad = armature.animation_data
    print('armature.animation_data', 'yes' if ad else 'no',
          'action', ad.action.name if (ad and ad.action) else None,
          'nla_tracks', len(ad.nla_tracks) if ad else 0)

for ob in meshes:
    bpy.context.view_layer.objects.active = ob
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

bpy.ops.object.select_all(action='DESELECT')
for ob in meshes:
    ob.select_set(True)
if armature:
    armature.select_set(True)
bpy.context.view_layer.objects.active = meshes[0] if meshes else armature

print('EXPORT', OUT)
bpy.ops.export_scene.gltf(
    filepath=OUT,
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    export_animations=True,
    export_frame_range=False,
    export_anim_slide_to_zero=True,
    export_bake_animation=False,
    export_materials='EXPORT',
    export_extras=False,
    use_selection=True,
)
print('SIZE_KB', round(os.path.getsize(OUT) / 1024))
