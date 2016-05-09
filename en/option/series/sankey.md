
{{target: series-sankey}}

# series.sankey(Object)

** sankey graph **

It is a kind of special flow graph, which is mainly used to present how raw materials, energy and so on from the initial status to the final form after processing and transformation. 

**Example: **

~[700x580](${galleryViewPath}sankey-energy&edit=1&reset=1)


<br>
**visible coding: **

The sankey graph encodes each `node` of the original data into a small rectangular. And different nodes are presented in different colors. The `label` coding next to the small rectangular is the name of the node.

In addition, the edge coding between two small rectangulars in the graph is the `link` of the original data. The thickness coding of edge is the `value`of `link`.



## type(string) = 'sankey'

## color(Array.<string>)

sankey graph individually uses a palette which defaults to be: 
```js
['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b','#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2']
```

{{ use: partial-rect-layout-width-height(
    componentName='sankey',
    defaultLeft: '5%',
    defaultRight: '20%',
    defaultTop: '5%',
    defaultBottom: '5%',
    defaultWidth: 'null',
    defaultHeight: 'null'
) }}


## nodeWidth(number) = 20

the node width of rectangle in graph.


## nodeGap(number) = 8

the gap between any 2 regtangles in each row from the graph.


## layoutIterations(number) = 32

the iterations of layout, which is used to continuously optimize the nodes' positions in graph, decreasing the overlapping between nodes and edges. 

the default iterations of layout: `32`. 

The test shows that iterations of layout could not be less than the default value. 

## label(Object)

`label` describes the text style in each rectangular node.

### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultShowLabel=true,
    defaultPosition="'right'",
    formatter1d=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###"
)}}

## itemStyle(Object)

the style of node rectangle in sankey graph.

### normal(Object)
{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    defaultBorderWidth=1,
    defaultBorderColor="'#aaa'"
)}}
### emphasis(Object)
{{use: partial-item-style(prefix="###")}}


## lineStyle(Object)
the line style of sankey graph.
### normal(Object)
{{use: partial-sankey-line-style(prefix="###")}}
### emphasis(Object)
{{use: partial-sankey-line-style(
    prefix="###"
)}}


## data(Array)

{{ use: partial-1d-data-desc() }}
### name(string)
the data item.
### value(number|Array)
the value of data item.
### itemStyle(Object)
the style of this node.
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
the lable style of this node.
#### normal(Object)
{{ use:partial-label(
    prefix="####"
) }}
#### emphasis(Object)
{{ use:partial-label(
    prefix="####"
) }}

## nodes(Array)
equals to [data](~series-sankey.data)

## links(Array)
the relational data of nodes. Example: 
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
the [name of source node](~series-graph.data.name) of edge
### target(string)
the [name of target node](~series-graph.data.name)
### value(number) of edge
the value of edge, which decides the width of edge.
### lineStyle(Object)
the line stlye of  relational edge.
#### normal(Object)
{{use:partial-sankey-line-style(
    prefix="####"
)}}
#### emphasis(Object)
{{ use:partial-sankey-line-style(
    prefix="####"
) }}

## edges(Array)
equals to [links](~series-sankey.links)

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing="'linear'",
    defaultAnimationDuration=1000
)}}


{{target: partial-sankey-line-style}}

#${prefix} color(Color) = "'#314656'"
the color of the edge in snakey graph.

#${prefix} opacity(number) = 0.2
the opacity of the edge in snakey graph.

#${prefix} curveness(number) = 0.5
the curveness of the edge in snakey graph.

{{use: partial-style-shadow(prefix=${prefix})}}
