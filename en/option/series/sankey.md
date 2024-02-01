
{{ target: series-sankey }}

# series.sankey(Object)

** Sankey diagram **
Sankey diagram is a specific type of streamgraph (can also be seen as a directed acyclic graph) in which the width of each branch is shown proportionally to the flow quantity. These graphs are typically used to visualize energy or material or cost transfers between processes. They can also visualize the energy accounts, material flow accounts on a regional or national level, and also the breakdown of cost of item or services.

**Example: **

~[700x580](${galleryViewPath}sankey-energy&edit=1&reset=1)


<br>
**Visual Encoding: **

The Sankey diagram encodes each `node` of the raw data into a small rectangle. Different nodes are presented in different colors as far as possible. The `label` next to the small rectangle encodes the name of the node.

In addition, the edge between two small rectangles in the diagram encodes the `link` of the raw data. The width of edge is shown proportionally to the `value` of `link`.

## type(string) = 'sankey'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-rect-layout-width-height(
    componentName = 'sankey',
    defaultLeft = '5%',
    defaultRight = '20%',
    defaultTop = '5%',
    defaultBottom = '5%',
    defaultWidth = 'null',
    defaultHeight = 'null'
) }}

## nodeWidth(number) = 20

<ExampleUIControlNumber default="20" min="0" step="0.5" />

The node width of rectangle in Sankey diagram.

## nodeGap(number) = 8

<ExampleUIControlNumber default="8" min="0" step="0.5" />

The gap between any two rectangles in each column of the Sankey diagram.

## nodeAlign(string) = 'justify'

<ExampleUIControlEnum options="justify,left,right" />

Controls the horizontal alignment of nodes in the diagram.

May be:

+ `left`: initial nodes (those with no incoming links) are aligned to the left of the diagram.

+ `right`: terminal nodes (those with no outgoing links) are aligned to the right of the diagram.

+ `justify`: initial and terminal nodes are aligned on the left and right edges.

Note when [orient](~series-sankey.orient) is `vertical`, `nodeAlign` controls vertical alignment.

## layoutIterations(number) = 32

<ExampleUIControlNumber default="32" min="0" max="100" step="1" />

The iterations of layout, which is used to iteratively optimize the position of the nodes and edges in the Sankey diagram to reduce the overlapping between nodes and edges. The default value is `32`. If you want the order of the nodes in the chart to be the same with the order in the original [data](~series-sankey.data), you can set the value to be `0`.

## orient(string) = 'horizontal'

<ExampleUIControlEnum options="horizontal,vertical" />

The layout direction of the nodes in the Sankey diagram, which can be horizontal from left to right or vertical from top to bottom. The corresponding parameter values ​​are `horizontal` or `vertical`.

## draggable(boolean) = true

<ExampleUIControlBoolean default="true" />

The drag-and-drop interaction of the node, which is enabled by default. After opening, the user can drag any node in the Sankey diagram to any position. To turn this interaction off, simply set the value to `false`.

## edgeLabel(Object)

{{ use: sankey-edge-label(
    prefix = "##"
) }}

## levels(Array)

The setting of each layer of Sankey diagram. Can be set layer by layer, as follows:

```ts
levels: [{
    depth: 0,
    itemStyle: {
        color: '#fbb4ae'
    },
    lineStyle: {
        color: 'source',
        opacity: 0.6
    }
}, {
    depth: 1,
    itemStyle: {
        color: '#b3cde3'
    },
    lineStyle: {
        color: 'source',
        opacity: 0.6
    }
}]
```

You can also only set a certain layer:

```ts
levels: [{
    depth: 3,
    itemStyle: {
        color: '#fbb4ae'
    },
    lineStyle: {
        color: 'source',
        opacity: 0.6
    }
}]
```

### depth(number)

<ExampleUIControlNumber default="0" min="0" step="1" />

Specify which layer is set, value starts from 0.

{{ use: sankey-state(
    prefix = "##"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: sankey-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: sankey-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: sankey-state(
    prefix = "###",
    state = 'select'
) }}

## label(Object)

`label` describes the text label style in each rectangular node.

{{ use: partial-label(
    prefix = "##",
    defaultShowLabel = true,
    defaultPosition = "'right'",
    formatter1d = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

The style of node rectangle in Sankey diagram.

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    defaultBorderWidth = 1,
    defaultBorderColor = "'#aaa'",
    useDecal = true
) }}

## lineStyle(Object)

The edge style of Sankey diagram

{{ use: partial-sankey-line-style(
    prefix = "##"
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope(
    isGraph = true,
    hasTrajectory = true,
    trajectoryVersion = "5.4.3"
) }}

{{ use: sankey-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-sankey.emphasis.focus) is set.

{{ use: sankey-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of selected state. Available when [selectedMode](~series-sankey.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: sankey-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## data(Array)

The nodes list of the sankey diagram.

```ts
data: [{
    name: 'node1',
    // This attribute decides the layer of the current node.
    depth: 0
}, {
    name: 'node2',
    depth: 1
}]
```

**Notice:** The name of the node cannot be repeated.

### name(string)

The name of the node.

### value(number)

The value of the node, which can used to determine the height of the node in horizontal orient or width in the vertical orient.

### depth(number)

The layer of the node, value starts from 0.

### itemStyle(Object)

The style of this node.

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true,
    useDecal = true
) }}

### label(Object)

The lable style of this node.

{{ use: partial-label(
    prefix = "###"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: sankey-node-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: sankey-node-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: sankey-node-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

## nodes(Array)

Equals to [data](~series-sankey.data)

## links(Array)

The links between nodes. **Notes: The Sankey diagram theoretically only supports Directed Acyclic Graph(DAG), so please make sure that there is no cycle in the links.** For instance:

```ts
links: [{
    source: 'n1',
    target: 'n2'
}, {
    source: 'n2',
    target: 'n3'
}]
```

### source(string)

The [name of source node](~series-sankey.data.name) of edge

### target(string)

The [name of target node](~series-sankey.data.name) of edge

### value(number)

The value of edge, which decides the width of edge.

{{ use: sankey-edge-state(
    prefix = "##"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: sankey-edge-state(
    prefix = "###",
    state = "emphasis"
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: sankey-edge-state(
    prefix = "###",
    state = "blur"
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: sankey-edge-state(
    prefix = "###",
    state = "select"
) }}

## edges(Array)

Equals to [links](~series-sankey.links)

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = "'linear'",
    defaultAnimationDuration = 1000
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-sankey-line-style }}

#${prefix} color(Color) = "'#314656'"

The color of the edge in Sankey diagram.

+ `'source'`: use source node color.
+ `'target'`: use target node color.
+ `'gradient'`: gradient color between source node and target node. (Since v5.0.0)

#${prefix} opacity(number) = 0.2

The opacity of the edge in Sankey diagram.

#${prefix} curveness(number) = 0.5

<ExampleUIControlNumber min="0" max="1" default="0.5" step="0.1" />

The curveness of the edge in Sankey diagram.

{{ use: partial-style-shadow(
    prefix = ${prefix}
) }}



{{ target: sankey-node-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    useDecal = true,
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: sankey-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter1d = ${prefix} === '##'
) }}

#${prefix} edgeLabel(Object)

{{ use: sankey-edge-label(
    prefix = "#" + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} lineStyle(Object)

{{ use: partial-sankey-line-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: sankey-edge-state }}

#${prefix} edgeLabel(Object)

{{ use: sankey-edge-label(
    prefix = "#" + ${prefix}
) }}

#${prefix} lineStyle(Object)

The line style of edge.

{{ use: partial-sankey-line-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: sankey-edge-label }}

{{ use: partial-version(
    version = "5.4.1"
) }}

The label style of each edge/link. 

{{ use: partial-label(
    prefix = ${prefix},
    noPosition = true,
    formatter1d = true
) }}
