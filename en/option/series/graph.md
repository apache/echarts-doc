{{target: series-graph}}
# series.graph(Object)

**relation graph**

It is used to show node and the relational data between nodes. 

**Tips：** In ECharts 2.x , the diagrams of `force` type would not be valid in ECharts 3 any more，which is changed to use  `graph` to show relational data. If you want to use force to lead the layout, you can set the  [layout](~series-graph.layout) configuration item as `'force'`. 

**Sample：**

~[600x400](${galleryViewPath}graph&reset=1&edit=1)

## type(string) = 'graph'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

## hoverAnimation(boolean)
Whether to enable the reminding animation effect of mousr hover node. 

## layout(string) = 'none'
graph layout.

**Options：**
+ `'none'` no any layout，use  [x](~series-graph.data.x)， [y](~series-graph.data.y) provided in [node](~series-graph.data) as the position of node.

+ `'circular'` adopt circular layout，see the example [Les Miserables](${galleryEditorPath}graph-circular-layout)。

+ `'force'` adopt force to lead the layout, see the example [Force](${galleryEditorPath}graph-force)，the detail about configurtion item of layout are in [graph.force](~series-graph.force)

## force(Object)
Force lead the related configuration items about layout. Force leading layout similates the following situation: spring charge model add a repulsion between 2 nodes and add a gravitation between 2 nodes of each edge. Every time, the iteration node would move under the effect of repulsion and gravitation. After several iterations, the node would be static in a balanced position. As a result, the energy minimization of this whole model would be realized.     

The result of force leading layout has a perfect symmety and partial polymerism, which is also very beautiful. 

### initLayout(string)
The init layout before force leading layout, which would influence on the effect of force leading layout.  

It defaults not to make any layout. use  [x](~series-graph.data.x)， [y](~series-graph.data.y) provided in [node](~series-graph.data) as the position of node. If it doesn't exist, the position would be generated randomly.

You can also use circular layout `'circular'`.

### repulsion(number) = 50
the repulsion factor between nodes. The repulsion would be stronger and the distance between 2 nodes becomes further as this value becomes larger. 

### gravity(number) = 0.1
the gravity factor enforcing nodes approach to the center. The nodes would be closer to the center as the value becomes larger.  

### edgeLength(number) = 30
the distance between 2 nodes on edge. This distance is affected by [repulsion](~series-graph.force.repulsion).

### layoutAnimation(boolean) = true
Because the force guiding layout would be steady after several iterations, this parameter would be decide whether to show the iteration animation of layout. It is not recommended to be close when there are a lot of tip node datas（>100） of browser as the layout process would lead to fake crash of browser. 

## roam(boolean) = false
{{ use: partial-roam }}

## nodeScaleRatio(number) = 0.6
related zooming ratio of nodes when mouse roams and zoom in or out. When it is set as 0, the node would not zoom as the mouse zooms.  

{{ use: partial-symbol(
    prefix='#',
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    name='node of relation graph',
    hasCallback=true
) }}

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

## categories(Array)
the category of node classification，which is optional.
If there is a classification of nodes, the category of each node could be assigned through [data[i].category](~series-graph.data.category). And the style of category would also be applied in the style of nodes. [legend](~legend) could be shown and flltered based on `categories`.

### name(string)
name of category，which is used to correspond with [legend](~legend) and format the content of [tooltip](~tooltip).

{{ use: partial-symbol(
    prefix='##',
    name='node of this category'
) }}

### itemStyle(Object)
the style of node in this category.
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
the label style of node in this category.
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
name of data item.
### value(number|Array)
value of data item.
### category(number)
index of category which the data item belongs to. 

{{ use: partial-symbol(
    prefix='##',
    name='node of this category'
) }}

### itemStyle(Object)
the style of this node.
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
the label style of this node.
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
relational data between nodes.Example：
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
line style of relational edges.
#### normal(Object)
{{use:partial-line-style(
    prefix="####"
)}}
##### curveness(number) = 0
the curveness od edge，supporting values from 0 to 1. The curveness would be larger as the value becomes lager.  
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

color list of palette. If there is no color setting for [node type](~series-graph.categories), it would adopt colors successively and cyclically from this list.  

Defaults：
```js
['#c23531', '#314656', '#61a0a8', '#dd8668', '#91c7ae', '#6e7074', '#61a0a8', '#bda29a', '#44525d', '#c4ccd3']
```


{{ use: partial-animation(prefix="#") }}