import bpy
ob = bpy.data.objects.new('test_obj', None)
bpy.context.collection.objects.link(ob)
ob.animation_data_create()
ob.animation_data.action = bpy.data.actions.new('test_act')
ad = ob.animation_data
print('animation_data type:', type(ad))
print('action:', ad.action)
# Check if action has drivers or fcurves
print('action attrs:', [a for a in dir(ad.action) if not a.startswith('_')])
# Try to add a keyframe and check
ob.location = (0, 0, 0)
ob.keyframe_insert('location', frame=1)
ob.keyframe_insert('location', frame=10)
# Check the action
act = ad.action
print('action keys:', list(act.keys()))
# Try driver_add
try:
    fc = act.driver_add('location', 0)
    print('driver_add worked:', fc)
except Exception as e:
    print('driver_add error:', e)
bpy.data.objects.remove(ob)
