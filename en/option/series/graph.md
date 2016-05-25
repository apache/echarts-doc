{{target: series-graph}}
# series.graph(Object)

**relation graph**

Graph is a diagram to represent [nodes](~series-graph.nodes) and the [links](~series-graph.links) connecting nodes.

**Tips: ** In ECharts 2.x , the diagram of `force` type will not be available in ECharts 3 any more, which has been changed to use `graph` to show graph data. If you want to use force to lead the layout, you can set the  [layout](~series-graph.layout) configuration as `'force'`.

**Example: **

~[600x400](${galleryViewPath}graph&reset=1&edit=1)

## type(string) = 'graph'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="graph",
    coordSysDefault="null",
    none=true,
    cartesian2d=true,
    polar=true,
    geo=true
) }}

## hoverAnimation(boolean)
Whether to enable the highlight animation effect of mousr hover node.

## layout(string) = 'none'
Graph layout.

**Options: **
+ `'none'` No any layout, use  [x](~series-graph.data.x),  [y](~series-graph.data.y) provided in [node](~series-graph.data) as the position of node.

+ `'circular'` Adopt circular layout, see the example [Les Miserables](${galleryEditorPath}graph-circular-layout).

+ `'force'` Adopt force-directed layout, see the example [Force](${galleryEditorPath}graph-force), the detail about configrations of layout are in [graph.force](~series-graph.force)

## force(Object)
Configuration items about force-directed layout. Force-directed layout simulates spring/charge model, which will add a repulsion between 2 nodes and add a attraction between 2 nodes of each edge. In each iteration nodes will move under the effect of repulsion and attraction. After several iterations, the nodes will be static in a balanced position. As a result, the energy local minimum of this whole model will be realized.

The result of force-directed layout has a good symmetries and clustering, which is also aesthetically pleasing.

### initLayout(string)
The initial layout before force-directed layout, which will influence on the result of force-directed layout.

It defaults not to do any layout and use [x](~series-graph.data.x), [y](~series-graph.data.y) provided in [node](~series-graph.data) as the position of node. If it doesn't exist, the position will be generated randomly.

You can also use circular layout `'circular'`.

### repulsion(number) = 50
The repulsion factor between nodes. The repulsion will be stronger and the distance between 2 nodes becomes further as this value becomes larger.

### gravity(number) = 0.1
The gravity factor enforcing nodes approach to the center. The nodes will be closer to the center as the value becomes larger.

### edgeLength(number) = 30
The distance between 2 nodes on edge. This distance is also affected by [repulsion](~series-graph.force.repulsion).

### layoutAnimation(boolean) = true
Because the force-directed layout will be steady after several iterations, this parameter will be decide whether to show the iteration animation of layout. It is not recommended to be close on browser when there are a lot of node data (>100) as the layout process will cause browser to hang.

## roam(boolean) = false
{{ use: partial-roam }}

## nodeScaleRatio(number) = 0.6
Related zooming ratio of nodes when mouse zooming in or out. When it is set as 0, the node will not zoom as the mouse zooms.

## draggable(boolean) = false
If node is draggable. Only available in force-directed layout.

{{ use: partial-symbol(
    prefix='#',
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    name='node of relation graph',
    hasCallback=true
) }}

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

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

## lineStyle(Object)
the shared line style of relational border.
### normal(Object)
{{use:partial-line-style(
    prefix="###",
    defaultColor="'#aaa'",
    defaultWidth=1,
    defaultOpacity=0.5,
    hasCurveness=true
)}}
### emphasis(Object)
{{ use:partial-line-style(
    prefix="###"
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter1d=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    defaultShow=true,
    formatter1d=true
)}}

## edgeLabel(Object)
### normal(Object)
{{use: graph-edge-label(
    prefix="###"
)}}
### emphasis(Object)
{{use: graph-edge-label(
    prefix="###"
)}}

## categories(Array)
The categories of node, which is optional.
If there is a classification of nodes, the category of each node can be assigned through [data[i].category](~series-graph.data.category). And the style of category will also be applied in the style of nodes. [legend](~legend) can be shown and flltered based on `categories`.

### name(string)
Name of category, which is used to correspond with [legend](~legend) and format the content of [tooltip](~tooltip).

{{ use: partial-symbol(
    prefix='##',
    name='node of this category'
) }}

### itemStyle(Object)
The style of node in this category.
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
The label style of node in this category.
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside",
    formatter1d=true
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}


## data(Array)
{{ use: partial-1d-data-desc() }}
### name(string)
Name of data item.
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
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
The label style of this node.
#### normal(Object)
{{ use:partial-label(
    prefix="####"
) }}
#### emphasis(Object)
{{ use:partial-label(
    prefix="####"
) }}

## nodes(Array)
the same as [data](~series-graph.data)

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

### source(string)
[name of source node](~series-graph.data.name) on edge
### target(string)
[name of target node](~series-graph.data.name) on edge
### lineStyle(Object)
Line style of relational edges.
#### normal(Object)
{{use:partial-line-style(
    prefix="####"
)}}
##### curveness(number) = 0
The curveness od edge, supporting values from 0 to 1. The curveness will be larger as the value becomes lager.
#### emphasis(Object)
{{ use:partial-line-style(
    prefix="####"
) }}


## edges(Array)
the same as [links](~series-graph.links)

{{use: partial-mark-point(
    prefix="#",
    seriesType="graph"
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="graph"
)}}

{{ use: partial-rect-layout-width-height(
    defaultLeft="'center'",
    defaultTop="'center'",
    defaultWidth='self-adaptation',
    defaultHeight='self-adaptation'
) }}

##color(Array)

Color list of palette. If there is no color setting for [node type](~series-graph.categories), it will adopt colors sequentially and circularly from this list.

Defaults:
```js
['#c23531', '#314656', '#61a0a8', '#dd8668', '#91c7ae', '#6e7074', '#61a0a8', '#bda29a', '#44525d', '#c4ccd3']
```

{{ use:partial-silent(
    prefix="#"
) }}
{{ use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
) }}


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

#${prefix} textStyle(Object)
{{ use: partial-text-style(prefix=${prefix} + '#') }}