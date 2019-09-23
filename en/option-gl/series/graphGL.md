{{ target: series-graphGL }}

# series.graphGL(Object)

Uses WebGL to drawn the relational chart, support the layout and rendering of large-scale network/relational data.

## type(string) = 'graphGL'

{{ use: partial-series-name() }}

## layout(string) = 'forceAtlas2'

The continuous graph layout algorithm supports the [forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) algorithm layout using gephi.

## forceAtlas2(Object)

[forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) a continuous graph layout algorithm.

The algorithm has efficient layout efficiency and stable layout results for large-scale network data.

Support for configuring GPU or CPU layout via [forceAtlas2.GPU](~series-graphGL.forceAtlas2.GPU).

The advantage of the CPU is that it is compatible, and the GPU implementation has dozens or even hundreds of performance advantages in high-end graphics cards.

Below is a performance comparison of the iteration of a layout of a 2w node (nearly 5w edges) on a GTX1070 and an i7 4GHz computer.

![400xauto](~gpu-layout-perf.png)

### GPU(boolean) = true

Whether to enable GPU layout.

### steps(number) = 1

The number of iterations of an update. Because the force-guided algorithm usually draws the results of each iteration, but because the drawing time tends to be greater than the layout time, the layout efficiency will be reduced. At this time, we can set a larger `steps` parameter to ensure the layout and Draw time equalization and speed up the layout.

### stopThreshold(number) = 1

Stops the threshold of the layout and stops the layout when the global velocity factor of the layout is less than this threshold. Set to 0 to never stop.

### barnesHutOptimize(boolean)

Whether to enable [Barnes Hut] (https://en.wikipedia.org/wiki/Barnes%E2%80%93Hut_simulation) optimization, valid when [forceAtlas2.GPU](~series-graphGL.forceAtlas2.GPU) is false.

The default is on when the number of nodes > 1000.

### repulsionByDegree(number) = true

Whether to calculate the repulsion factor of the node according to the degree of nodes, it is recommended to turn it on.

### linLogMode(boolean) = false

Whether it is the `lin-log` mode. The `lin-log` mode makes the nodes of the cluster more compact.

### gravity(number) = 1.0

The gravity that the node is subjected to. This force will make the nodes close to the center.

### gravityCenter(Array)

The position of the gravity center. By default, is the middle point of the initial position.

### scaling(number)

The scaling factor of the layout. The larger the value, the greater the repulsive force between the nodes.

### edgeWeightInfluence(number) = 1.0

The influence factor of the edge weight. The larger the value, the greater the effect of edge weight on gravity.

Note: This factor is exponential, so it is invalid when the edge weights are `0` and `1`.

### edgeWeight(Array|number) = [1, 4]

The weight distribution of the edges. Mapped from [links.value](~series-graphGL.links.value).

Support is set to a single number, which is the uniform weight value.

### nodeWeight(Array|number) = [1, 4]

The weight distribution of the nodes. Mapped from [nodes.value](~series-graphGL.nodes.value).

Support is set to a single number, which is the uniform weight value.

### preventOverlap(boolean) = false

Whether to prevent the nodes from overlapping.

{{ use: partial-symbol(
    defaultSymbolSize=5
) }}

## itemStyle(Object)

The style settings for the node.

{{ use: partial-item-style-scatter3D(
    prefix="##",
    defaultOpacity=1,
    hasCallback = ${hasCallback},
    useColorPalette = ${useColorPalette}
)}}

## lineStyle(Object)

The style setting of the relationship line.

{{ use: partial-line-style(
    prefix="##",
    defaultColor="#aaa"
) }}



## data(Array)

The data set of the node.

The data format is the same as [graph.data](http://echarts.baidu.com/option.html#series-graph.data)

### name(string)

The name of the data item.

### value(number|Array)

Data item value.

### itemStyle(Object)

The style of a single node.

{{ use: partial-item-style-scatter3D(
    prefix="###",
    defaultOpacity=1
) }}


## nodes(Array)

Same as [graphGL.data](~series-graphGL.data).

## links(Array)

Relational data between nodes.
The data format is the same as [graph.links](http://echarts.baidu.com/option.html#series-graph.links)

### source(string)

A string of source node names for edges also supports the use of numbers to represent the index of the source node.

### target(string)

A string of the target node name for the edge, which also supports the use of numbers to represent the index of the source node.

### value(number)

The value of the edge.

### lineStyle(Object)

The style of a single edge.

{{ use: partial-line-style(
    prefix="###",
    defaultColor="#aaa"
) }}

## edges(Array)

Same as [graphGL.links](~series-graphGL.links)


{{ use: partial-zlevel(defaultZLevel=10) }}