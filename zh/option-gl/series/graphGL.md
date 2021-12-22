{{ target: series-graphGL }}

# series.graphGL(Object)

使用 WebGL 绘制的关系图，支持大规模的网络/关系数据的布局和绘制。

## type(string) = 'graphGL'

{{ use: partial-series-name() }}

## layout(string) = 'forceAtlas2'

布局的算法，支持使用 gephi 的 [forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) 算法布局。

## forceAtlas2(Object)

[forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) 布局算法。

该算法对大规模的网络数据有着高效的布局效率和稳定的布局结果。

支持通过 [forceAtlas2.GPU](~series-graphGL.forceAtlas2.GPU) 配置为 GPU 还是 CPU 布局。

CPU 实现的优势是兼容性好，而 GPU 实现在高端显卡中有着数十倍甚至上百倍的性能优势。

下面是在 GTX1070 和 i7 4GHz 的电脑中对一个 2w 个节点（近 5w 条边）的关系图一次布局的迭代的性能对比。

![400xauto](~gpu-layout-perf.png)

### GPU(boolean) = true

是否启用 GPU 布局。

### steps(number) = 1

一次更新的迭代次数。因为力引导算法通常会把每次迭代的结果都绘制出来，但是因为绘制时间往往会大于布局的时间，会导致布局的效率降低，这时候我们可以设置更大的`steps`参数，保证布局和绘制的时间均衡，加快布局的速度。

### stopThreshold(number) = 1

停止布局的阈值，当布局的全局速度因子小于这个阈值时停止布局。设为 0 则永远不停止。

### barnesHutOptimize(boolean)

是否开启 [Barnes Hut](https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation) 优化，在 [forceAtlas2.GPU](~series-graphGL.forceAtlas2.GPU) 为 false 时有效。

默认在节点数 > 1000时开启。

### repulsionByDegree(number) = true

是否根据节点边的数量来计算节点的斥力因子，建议开启。

### linLogMode(boolean) = false

是否是`lin-log`模式。`lin-log` 模式会让聚类的节点更加紧凑。

### gravity(number) = 1.0

节点受到的向心力。这个力会让节点像中心靠拢。

### gravityCenter(Array)

向心力中心的位置。默认去初始位置的中间点。

### scaling(number)

布局的缩放因子，值越大则节点间的斥力越大。

### edgeWeightInfluence(number) = 1.0

边权重的影响因子。值越大，则边权重对于引力的影响也越大。

注：这个因子是指数级的，因此在边权重为`0`和`1`的时候无效。

### edgeWeight(Array|number) = [1, 4]

边的权重分布。映射自 [links.value](~series-graphGL.links.value)。

支持设置为单个数字，这时候就是统一的权重值。

### nodeWeight(Array|number) = [1, 4]

节点的权重分布。映射自 [nodes.value](~series-graphGL.nodes.value)。

支持设置为单个数字，这时候就是统一的权重值。

### preventOverlap(boolean) = false

是否开启防止节点重叠。

{{ use: partial-symbol(
    defaultSymbolSize=5
) }}

## itemStyle(Object)

节点的样式设置。

{{ use: partial-item-style-scatter3D(
    prefix="##",
    defaultOpacity=1,
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
)}}

## lineStyle(Object)

关系边的样式设置。

{{ use: partial-line-style(
    prefix="##",
    defaultColor="#aaa"
) }}



## data(Array)

节点的数据集。

数据格式同 [graph.data](https://echarts.apache.org/zh/option.html#series-graph.data)

### name(string)

数据项名称。

### value(number|Array)

数据项值。

### itemStyle(Object)

单个节点的样式。

{{ use: partial-item-style-scatter3D(
    prefix="###",
    defaultOpacity=1
) }}


## nodes(Array)

同 [graphGL.data](~series-graphGL.data)。

## links(Array)

节点间的关系数据。
数据格式同 [graph.links](https://echarts.apache.org/zh/option.html#series-graph.links)

### source(string)

边的源节点名称的字符串，也支持使用数字表示源节点的索引。

### target(string)

边的目标节点名称的字符串，也支持使用数字表示源节点的索引。

### value(number)

边的数值。

### lineStyle(Object)

单条边的样式。

{{ use: partial-line-style(
    prefix="###",
    defaultColor="#aaa"
) }}

## edges(Array)

同 [graphGL.links](~series-graphGL.links)


{{ use: partial-zlevel(defaultZLevel=10) }}