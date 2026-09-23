import bpy

# 检查 glTF 插件状态
for addon in bpy.context.preferences.addons:
    print(f"Addon: {addon.module}")
