
{{target: series-sankey}}

# series.sankey(Object)

** Sankey Graphs **

Sankey graphs are a specific type of streamgraphs, in which the width of each branch is shown proportionally to the flow quantity. These graphs are typically used to visualize energy or material or cost transfers between processes. They can also visualize the energy accounts, material flow accounts on a regional or national level, and also the breakdown of cost of item or services.

**Example: **

~[700x580](${galleryViewPath}sankey-energy&edit=1&reset=1)


<br>
**Visual Encoding: **

The sankey graphs encodes each `node` of the raw data into a small rectangular. And different nodes are presented in different colors as far as possible. The `label` next to the small rectangular, which encoding the name of the node.

In addition, the edge between two small rectangulars in the graph encoding the `link` of the raw data. The width of edge is shown proportionally to the `value` of `link`.



## type(string) = 'sankey'

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

The node width of rectangle in graph.


## nodeGap(number) = 8

The gap between any two regtangles in each column from the graph.


## layoutIterations(number) = 32

The iterations of layout, which is used to continuously optimize the positions of nodes in graph, decreasing the overlapping between nodes and edges.

The default iterations of layout: `32`.

The test shows that iterations of layout could not be less than the default value.

## label(Object)

`label` describes the text label style in each rectangular node.

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

The style of node rectangle in sankey graphs.

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
The line style of sankey graph, in which [lineStyle.normal.color](~series-sankey.lineStyle.normal.color) can be assigned to the value of `'source'` of `'target'`, then the edge will automatically take the source node or target node color as its own color.

### normal(Object)
{{use: partial-sankey-line-style(prefix="###")}}
### emphasis(Object)
{{use: partial-sankey-line-style(
    prefix="###"
)}}


## data(Array)

{{ use: partial-1d-data-desc() }}
### name(string)
The name of data item.
### value(number|Array)
The value of data item.
### itemStyle(Object)
The style of this node.
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

### label(Object)
The lable style of this node.
#### normal(Object)
{{ use:partial-label(
    prefix="####"
) }}
#### emphasis(Object)
{{ use:partial-label(
    prefix="####"
) }}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


## nodes(Array)
Equals to [data](~series-sankey.data)

## links(Array)
The links data between nodes. For instance:
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
The [name of source node](~series-graph.data.name) of edge
### target(string)
The [name of target node](~series-graph.data.name) of edge
### value(number)
The value of edge, which decides the width of edge.
### lineStyle(Object)
The line stlye of edge.
#### normal(Object)
{{use:partial-sankey-line-style(
    prefix="####"
)}}
#### emphasis(Object)
{{ use:partial-sankey-line-style(
    prefix="####"
) }}

## edges(Array)
Equals to [links](~series-sankey.links)

{{ use:partial-silent(
    prefix="#"
)}}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing="'linear'",
    defaultAnimationDuration=1000,
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}




{{target: partial-sankey-line-style}}

#${prefix} color(Color) = "'#314656'"
The color of the edge in sankey graphs.

#${prefix} opacity(number) = 0.2
The opacity of the edge in sankey graph.

#${prefix} curveness(number) = 0.5
The curveness of the edge in sankey graph.

{{use: partial-style-shadow(prefix=${prefix})}}
