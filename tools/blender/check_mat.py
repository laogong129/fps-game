import bpy
m = bpy.data.materials.new('test')
m.use_nodes = True
nodes = list(m.node_tree.nodes)
print('all nodes:', [(n.name, n.type) for n in nodes])
# Find principled bsdf by type
for n in nodes:
    if n.type == 'BSDF_PRINCIPLED':
        print(f'Found: {n.name}')
        print('inputs:', [i.name for i in n.inputs])
        break
