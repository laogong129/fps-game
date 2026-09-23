"""导入 Mixamo FBX，导出带骨骼+动画的 GLB（逐帧采样，避免 fcurve 原始空间错位）"""
import bpy
import os

FBX = r'C:\Users\29035\Downloads\X Bot@Mutant Right Turn 45.fbx'
OUT = r'E:\vibecoding\fps-game\public\assets\models\enemy_mutant.glb'
APPLY_ARM_SCALE = os.environ.get('APPLY_ARM_SCALE') == '1'

bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
bpy.ops.import_scene.fbx(filepath=FBX)

armature = None
meshes = []
for obj in bpy.context.scene.objects:
    if obj.type == 'ARMATURE':
        armature = obj
    elif obj.type == 'MESH':
        meshes.append(obj)
print('ARMATURE', armature.name, 'scale', tuple(round(v, 4) for v in armature.scale))

if APPLY_ARM_SCALE:
    bpy.ops.object.select_all(action='DESELECT')
    armature.select_set(True)
    bpy.context.view_layer.objects.active = armature
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    print('APPLIED armature scale ->', tuple(round(v, 4) for v in armature.scale))

bpy.ops.object.select_all(action='DESELECT')
for ob in meshes + [armature]:
    ob.select_set(True)
bpy.context.view_layer.objects.active = armature

bpy.ops.export_scene.gltf(
    filepath=OUT,
    export_format='GLB',
    export_texcoords=True,
    export_normals=True,
    export_animations=True,
    export_frame_range=False,
    export_anim_slide_to_zero=True,
    export_force_sampling=True,
    export_optimize_animation_size=False,
    export_bake_animation=True,
    export_materials='EXPORT',
    export_extras=False,
    use_selection=True,
)
print('SIZE_KB', round(os.path.getsize(OUT) / 1024))
