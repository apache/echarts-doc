{{target: series-graph}}
# series.graph(Object)

**relation graph**

Graph is a diagram to represent [nodes](~series-graph.nodes) and the [links](~series-graph.links) connecting nodes.

**Example: **

~[600x400](${galleryViewPath}graph&reset=1&edit=1)

## type(string) = 'graph'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="graph",
    coordSysDefault="null",
    none=true,
    cartesian2d=true,
    polar=true,
    geo=true,
    calendar=true
) }}

## hoverAnimation(boolean)
Whether to enable the highlight animation effect of mousr hover node.

## center(Array)
Center of current view-port.

Example:
```js
center: [115.97, 29.71]
```

## zoom(number) = 1
Zoom rate of current view-port.

## layout(string) = 'none'
Graph layout.

**Options: **
+ `'none'` No any layout, use  [x](~series-graph.data.x),  [y](~series-graph.data.y) provided in [node](~series-graph.data) as the position of node.

+ `'circular'` Adopt circular layout, see the example [Les Miserables](${galleryEditorPath}graph-circular-layout).

+ `'force'` Adopt force-directed layout, see the example [Force](${galleryEditorPath}graph-force), the detail about configrations of layout are in [graph.force](~series-graph.force)

## circular(Object)
Configuration about circular layout.

### rotateLabel(boolean) = false
Whether to rotate the label automatically.

## force(Object)
Configuration items about force-directed layout. Force-directed layout simulates spring/charge model, which will add a repulsion between 2 nodes and add a attraction between 2 nodes of each edge. In each iteration nodes will move under the effect of repulsion and attraction. After several iterations, the nodes will be static in a balanced position. As a result, the energy local minimum of this whole model will be realized.

The result of force-directed layout has a good symmetries and clustering, which is also aesthetically pleasing.

### initLayout(string)
The initial layout before force-directed layout, which will influence on the result of force-directed layout.

It defaults not to do any layout and use [x](~series-graph.data.x), [y](~series-graph.data.y) provided in [node](~series-graph.data) as the position of node. If it doesn't exist, the position will be generated randomly.

You can also use circular layout `'circular'`.

### repulsion(Array|number) = 50
The repulsion factor between nodes. The repulsion will be stronger and the distance between 2 nodes becomes further as this value becomes larger.

It can be an array to represent the range of repulsion. In this case larger value have larger repulsion and smaller value will have smaller repulsion.

### gravity(number) = 0.1
The gravity factor enforcing nodes approach to the center. The nodes will be closer to the center as the value becomes larger.

### edgeLength(Array|number) = 30
The distance between 2 nodes on edge. This distance is also affected by [repulsion](~series-graph.force.repulsion).

It can be an array to represent the range of edge length. In this case edge with larger value will be shorter, which means two nodes are closer. And edge with smaller value will be longer.

### layoutAnimation(boolean) = true
Because the force-directed layout will be steady after several iterations, this parameter will be decide whether to show the iteration animation of layout. It is not recommended to be closed on browser when there are a lot of node data (>100) as the layout process will cause browser to hang.

### friction(number) = 0.6
{{ use: partial-version(version = "4.5.0") }}
It will slow down the nodes' movement. The value range is from 0 to 1.

But it is still an experimental option, see [#11024](https://github.com/apache/incubator-echarts/issues/11024).

## roam(boolean|string) = false
{{ use: partial-roam }}

## nodeScaleRatio(number) = 0.6
Related zooming ratio of nodes when mouse zooming in or out. When it is set as 0, the node will not zoom as the mouse zooms.

## draggable(boolean) = false
If node is draggable. Only available when using force-directed layout.

{{ use: partial-symbol(
    prefix='#',
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    name='node of relation graph',
    hasCallback=true
) }}

## focusNodeAdjacency(boolean) = false
Whether to focus/highlight the hover node and it's adjacencies.

## edgeSymbol(Array|string) = ['none', 'none']
Symbol of two ends of edge line.

For example:
```js
edgeSymbol: ['circle', 'arrow']
```

## edgeSymbolSize(Array|number) = 10
Size of symbol of two ends of edge line. Can be an array or a single number.

For example:
```js
// Start symbol has size 5 and end symbol has size 10
symbolSize: [5, 10],
// All has size 10
symbolSize: 10
```

{{ use: partial-cursor }}

## itemStyle(Object)
{{use:partial-item-style-desc}}
{{use:partial-item-style(
    prefix="##",
    useColorPalatte=true,
    hasCallback=true
)}}

## lineStyle(Object)
The style of edge line. [lineStyle.color](~series-graph.lineStyle.color) can be `'source'` or `'target'`, which will use the color of source node or target node.

{{use:partial-line-style(
    prefix="##",
    defaultColor="'#aaa'",
    defaultWidth=1,
    defaultOpacity=0.5,
    hasCurveness=true
)}}

## label(Object)
{{use:partial-label-desc}}
{{use:partial-label(
    prefix="##",
    defaultPosition="'inside'",
    formatter1d=true
)}}

## edgeLabel(Object)
{{use: graph-edge-label(
    prefix="##"
)}}

## emphasis(Object)

### itemStyle(Object)
{{use:partial-item-style(prefix="###")}}
### lineStyle(Object)
{{ use:partial-line-style(
    prefix="###"
) }}
### label(Object)
{{use:partial-label(
    prefix="###",
    defaultShow=true,
    formatter2d=true
)}}
### edgeLabel(Object)
{{use: graph-edge-label(
    prefix="###"
)}}

## categories(Array)
The categories of node, which is optional.
If there is a classification of nodes, the category of each node can be assigned through [data[i].category](~series-graph.data.category). And the style of category will also be applied to the style of nodes. `categories` can also be used in [legend](~legend).

### name(string)
Name of category, which is used to correspond with [legend](~legend) and the content of [tooltip](~tooltip).

{{ use: partial-symbol(
    prefix='##',
    name='node of this category'
) }}

### itemStyle(Object)
The style of node in this category.
{{use:partial-item-style(prefix="###", useColorPalatte=true)}}

### label(Object)
The label style of node in this category.
{{ use:partial-label(
    prefix="###",
    defaultPosition="inside",
    formatter1d=true
) }}

### emphasis(Object)
#### itemStyle(Object)
{{use:partial-item-style(prefix="####")}}
#### label(Object)
{{ use:partial-label(prefix="####") }}



## data(Array)

Nodes list of graph.

```js
data: [{
    name: '1',
    x: 10,
    y: 10,
    value: 10
}, {
    name: '2',
    x: 100,
    y: 100,
    value: 20,
    symbolSize: 20,
    itemStyle: {
        color: 'red'
    }
}]
```

### name(string)
Name of data item.

### x(number)
`x` value of node position.
### y(number)
`y` value of node position.
### fixed(boolean)
If node are fixed when doing force directed layout.

### value(number|Array)
Value of data item.
### category(number)
Index of category which the data item belongs to.

{{ use: partial-symbol(
    prefix='##',
    name='node of this category'
) }}

### itemStyle(Object)
The style of this node.
{{use:partial-item-style(prefix="###", useColorPalatte=true)}}

### label(Object)
The label style of this node.
{{ use:partial-label(
    prefix="###"
) }}

### emphasis(Object)

#### itemStyle(Object)
{{use:partial-item-style(prefix="####")}}
#### label(Object)
{{ use:partial-label(
    prefix="####"
) }}


{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


## nodes(Array)
Alias of [data](~series-graph.data)

## links(Array)
Relational data between nodes. Example:
```js
links: [{
    source: 'n1',
    target: 'n2'
}, {
    source: 'n2',
    target: 'n3'
}]
```

### source(string|number)
A string representing the [name of source node](~series-graph.data.name) on edge. Can also be a number representing the node index.
### target(string|number)
A string representing the [name of target node](~series-graph.data.name) on edge. Can also be a number representing node index.
### value(number)
value of edge, can be mapped to edge length in force graph.

### lineStyle(Object)
Line style of edges.
{{use:partial-line-style(
    prefix="###"
)}}
#### curveness(number) = 0
The curveness of edge, supporting values from 0 to 1. The curveness will be larger as the value becomes lager.

### label(Object)
{{use: graph-edge-label(
    prefix="###"
)}}

### emphasis(Object)
#### label(Object)
{{use: graph-edge-label(
    prefix="####"
)}}
#### lineStyle(Object)
{{use:partial-line-style(
    prefix="####"
)}}

### symbol(Array|string)
Symbol of edge ends. Can be an array with two item to specify two ends, or a string specifies both ends.

### symbolSize(Array|string)
Symbol size of edge ends. Can be an array with two item to specify two ends, or a string specifies both ends.

### ignoreForceLayout(boolean) = false
{{ use: partial-version(version = "4.5.0") }}
Prevent this edge from force layout calculating.

## edges(Array)
Alias of [links](~series-graph.links)

{{use: partial-marker(
    prefix="#",
    seriesType="graph",
    hasType=true,
    hasCoord=true,
    name="mark point"
)}}

{{ use: partial-rect-layout-width-height(
    defaultLeft="'center'",
    defaultTop="'middle'",
    defaultWidth='auto',
    defaultHeight='auto'
) }}


{{ use:partial-silent(
    prefix="#"
) }}
{{ use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
) }}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}





{{ target: graph-edge-label }}

#${prefix} show(boolean) = ${defaultShowLabel|default(false)}
If show label on edge.
#${prefix} position(string) = 'middle'
Label position, options：
+ `'start'`
+ `'middle'`
+ `'end'`
#${prefix} formatter(string|Function)
{{ use: partial-2d-data-label-formatter }}

{{ use: partial-text-style(prefix=${prefix}) }}