"""测试 Blender 5.2 材质系统"""
import bpy
# 查看默认材质节点名称
mat = bpy.data.materials.new('test_mat')
nodes = [n.name for n in mat.node_tree.nodes]
print("Node names:", nodes)
for n in nodes:
    print(f"  {n} -> type={n}")
# 查看节点树里的节点类型
for n in mat.node_tree.nodes:
    print(f"  Node: {n.name}, type: {n.type}, inputs: {[i.name for i in n.inputs]}")
