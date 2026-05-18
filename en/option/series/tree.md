
{{ target: series-tree }}

# series.tree(Object)

**Tree Diagram**

The tree diagram is mainly used to visualize the tree data structure, which is a special hierarchical type with a unique root node, left subtree, and right subtree.

**Note: Forests are not currently supported directly in a single series, and can be implemented by configuring multiple series in an option**

**Tree example：**

~[900x780](${galleryViewPath}tree-vertical&edit=1&reset=1)

**Multiple series are combined into forest：**

~[800x680](${galleryViewPath}tree-legend&edit=1&reset=1)

## type(string) = 'tree'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-rect-layout-width-height(
    hostName = 'tree series',
    defaultLeft = '12%',
    defaultRight = '12%',
    defaultTop = '12%',
    defaultBottom = '12%',
    defaultWidth = 'null',
    defaultHeight = 'null'
) }}

{{ use: partial-coord-sys(
    version = '6.0.0',
    seriesType = "tree",
    coordSysDefault = "'none'",
    calendar = true,
    matrix = true,
    none = true
) }}


{{ use: partial-view-coord-sys-common(
    prefix = '#',
    componentMainType = 'series',
    componentSubType = 'tree',
    roamTriggerDefault = "'global'"
) }}


## layout(string) = 'orthogonal'

<ExampleUIControlEnum options="orthogonal,radial" default="orthogonal" />

The layout of the tree, which can be `orthogonal` and `radial`. Here the `orthogonal` layout is what we usually refer to the `horizontal` and `vertical` direction, the corresponding parameter value is `orthogonal`. The `radial` layout refers to the view that the root node as the center and each layer of nodes as the ring, the corresponding parameter value is `radial`.

**Orthogonal Example：**

~[780x900](${galleryViewPath}tree-basic&edit=1&reset=1)


**Radial Example：**

~[800x800](${galleryViewPath}tree-radial&edit=1&reset=1)

## orient(string) = 'LR'

<ExampleUIControlEnum options="LR,RL,TB,BT" default="LR" />

The direction of the `orthogonal` layout in the tree diagram. That means this configuration takes effect only if `layout = 'orthogonal'`. The corresponding directions are `from left to right`, `from right to left`, `from top to bottom`, `from bottom to top`, with shorthand values `'LR'`, `'RL'`, `'TB'`, `'BT'`.
**Note: The previous configuration value `'horizontal'` is equivalent to `'LR'`, `'vertical'` is equivalent to `'TB'`.**

{{ use: partial-symbol(
    seriesType = "tree",
    defaultSymbol = "'emptyCircle'",
    defaultSymbolSize = 7,
    prefix = "#",
    hasCallback = true
) }}

## edgeShape(string) = 'curve'

<ExampleUIControlEnum options="curve,polyline" default="curve" />

{{ use: partial-version(
    version = "4.7.0"
) }}

The shape of the edge which is under the tree `orthogonal layout`. There are two types of shape, curve and polyline, the corresponding values are `'curve'` and `'polyline'`.

** Note: This configuration item is only valid under the `orthogonal layout`. Errors will be reported in the development environment under the `radial layout`. **

## edgeForkPosition(string) = '50%'

<ExampleUIControlPercent default="50%" />

This is the position where the polyline branches in the subtree when the shape of the edge is a polyline in the `orthogonal layout`. The position here refers to the percentage of the distance between the bifurcation point and the parent node of the subtree to the height of the entire subtree. The default value is `'50%'`, which can be between ['0', '100%'].

** Note: This configuration item is only valid when `edgeShape = 'polyline'`. **

## expandAndCollapse(boolean) = true

<ExampleUIControlBoolean default="true" />

Subtree collapses and expands interaction, `default true`. As the drawing area is limited, and usually the nodes of a tree may be more, so there will be hidden between the nodes. In order to avoid this problem, you can put a temporary unrelated subtree folded away, until you need to start when necessary. Such as the above radial layout tree example, the center of the node is filled with blue is the folded away subtree, you can click to expand it.

**Note: The default node symbol is `'emptyCircle'`. With this symbol, the inner fill is used to indicate whether a node has a collapsed subtree, while the outer ring follows [itemStyle.color](~series-tree.itemStyle.color). If you configure a custom image as the node symbol, ECharts can not switch the visual state by changing that inner fill, and currently does not support providing two different images for collapsed and expanded states automatically. So, if you want to explicitly show the two states of the node, it is recommended to use a built-in symbol type such as `'emptyCircle'`.**

## initialTreeDepth(number) = 2

<ExampleUIControlNumber default="2" min="0" step="1" />

The initial level (depth) of the tree. The root node is the 0th layer, then the first layer, the second layer, ... , until the leaf node. This configuration item is primarily used in conjunction with `collapsing and expansion` interactions. The purpose is to prevent the nodes from obscuring each other. If set as -1 or `null` or `undefined`, all nodes are expanded.

## itemStyle(Object)

The style of each node in the tree.

By default, `series.tree` uses the hollow symbol `'emptyCircle'`. With that symbol:

+ [itemStyle.color](~series-tree.itemStyle.color) controls the outline color of the node.
+ The inner fill is used to indicate whether the node has a collapsed subtree.
+ [itemStyle.borderColor](~series-tree.itemStyle.borderColor) and [itemStyle.borderWidth](~series-tree.itemStyle.borderWidth) do not affect the outer ring in the same way as they do for solid symbols.

If you want [itemStyle.color](~series-tree.itemStyle.color) to behave as the normal fill color, and use [itemStyle.borderColor](~series-tree.itemStyle.borderColor) / [itemStyle.borderWidth](~series-tree.itemStyle.borderWidth) as the border style, set [symbol](~series-tree.symbol) to a solid symbol such as `'circle'`.

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    defaultBorderWidth = 1.5,
    defaultBorderColor = "'#c23531'"
) }}

## label(Object)

`label` describes the style of the text corresponding to each node.

{{ use: partial-label(
    prefix = "##",
    defaultShowLabel = true,
    formatter1d = true,
    formatterExtra = {
        treeAncestors: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    },
    labelMargin = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## lineStyle(Object)

Defines the style of the tree edge.

{{ use: partial-tree-line-style(
    prefix = "##"
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope(
    isTree = true,
    hasRelative = true,
    relativeVersion = "5.3.3"
) }}

{{ use: tree-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-tree.emphasis.focus) is set.

{{ use: tree-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-tree.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: tree-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## leaves(Object)

Leaf node special configuration, such as the above tree diagram example, the leaf node and non-leaf node label location is different.

### label(Object)

Describes the style of the text label corresponding to the leaf node.

{{ use: partial-label(
    prefix = "###",
    defaultShowLabel = true,
    formatter1d = true,
    formatterExtra = {
        treeAncestors: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    }
) }}

### itemStyle(Object)

The style of the leaf node in the tree.

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### emphasis(Object)

Emphasis state of leaves nodes.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of leaves nodes.

{{ use: tree-node-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state of leaves nodes.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'select'
) }}

## data(Object)

[series-tree.data](~series-tree.data) the data format is a tree structure, for example：

```javascript
{ // note that the outermost layer is an object that represents the root node of the tree.
    name: "flare",    // the name of the node, the text corresponding to the current node label.
    label: {          // the special label configuration (if necessary).
        ...           // the format of the label is shown in the series-tree.label.
    },
    itemStyle: {      // the special itemStyle configuration (if necessary).
        ...           // the format of the itemstyle is shown in the series-tree.itemStyle.
    },
    children: [
        {
            name: "flex",
            value: 4116,    // value, which only displayed in tooltip.
            label: {
                ...
            },
            itemStyle: {
                ...
            },
            collapsed: null, // If set as `true`, the node is collapsed in the initialization.
            children: [...]  // leaf nodes do not have children, can not write.
        },
        ...
    ]
};
```

### name(string)

The name of the tree node, used to identify each node.

### value(number)

The value of the node, displayed in the tooltip.

### collapsed(boolean)

Whether to collapse node at initialization.

### itemStyle(Object)

The style of the node.

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### lineStyle(Object)

Defines the style of the tree edge.

{{ use: partial-tree-line-style(
    prefix = "###"
) }}

### label(Object)

The label of the node.

{{ use: partial-label(
    prefix = "###",
    labelMargin = true
) }}

### emphasis(Object)

Emphasis state of a single node.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of a single node.

{{ use: tree-node-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state of a single node.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: tree-node-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-animation(
    prefix = "##",
    defaultAnimationEasing = "'linear'",
    defaultAnimationDuration = 1000
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-tree-line-style }}

#${prefix} color(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

The color of the tree edge.

#${prefix} width(number) = 1.5

<ExampleUIControlNumber default="1.5" min="0" />

The width of the tree edge.

#${prefix} curveness(number) = 0.5

<ExampleUIControlNumber default="0.5" min="0" />

The curvature of the tree edge.

{{ use: partial-style-shadow(
    prefix = ${prefix}
) }}



{{ target: tree-node-state }}

#${prefix} itemStyle(Object)

The style of this node.

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} lineStyle(Object)

Defines the style of the tree edge.

{{ use: partial-tree-line-style(
    prefix = "#" + ${prefix}
) }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter1d = ${prefix} === '##',
    formatterExtra = {
        treeAncestors: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    }
) }}



{{ target: tree-edge-state }}

#${prefix} lineStyle(Object)

Defines the style of the tree edge.

{{ use: partial-tree-line-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: tree-state }}

{{ use: tree-node-state(
    prefix = ${prefix},
    state = ${state}
) }}

{{ use: tree-edge-state(
    prefix = ${prefix},
    state = ${state}
) }}
