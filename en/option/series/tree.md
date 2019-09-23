{{target: series-tree}}

# series.tree(Object)

**Tree Diagram**

The tree diagram is mainly used to visualize the tree data structure, which is a special hierarchical type with a unique root node, left subtree, and right subtree.

**Note: Forests are not currently supported directly in a single series, and can be implemented by configuring multiple series in an option**

**Tree example：**

~[900x780](${galleryViewPath}tree-vertical&edit=1&reset=1)

**Multiple series are combined into forest：**

~[800x680](${galleryViewPath}tree-legend&edit=1&reset=1)

## type(string) = 'tree'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-series-name() }}

{{ use: partial-rect-layout-width-height(
    componentName='tree',
    defaultLeft: '12%',
    defaultRight: '12%',
    defaultTop: '12%',
    defaultBottom: '12%',
    defaultWidth: 'null',
    defaultHeight: 'null'
) }}

## layout(string) = 'orthogonal'

The layout of the tree, which can be `orthogonal` and `radial`. Here the `orthogonal` layout is what we usually refer to the `horizontal` and `vertical` direction, the corresponding parameter value is `orthogonal`. The `radial` layout refers to the view that the root node as the center and each layer of nodes as the ring, the corresponding parameter value is `radial`.

**Orthogonal Example：**

~[780x900](${galleryViewPath}tree-basic&edit=1&reset=1)


**Radial Example：**

~[800x800](${galleryViewPath}tree-radial&edit=1&reset=1)


## orient(string) = 'LR'

The direction of the `orthogonal` layout in the tree diagram. That means this configuration takes effect only if `layout = 'orthogonal'`. The corresponding directions are `from left to right`, `from right to left`, `from top to bottom`, `from bottom to top`, with shorthand values `'LR'`, `'RL'`, `'TB'`, `'BT'`.
**Note: The previous configuration value `'horizontal'` is equivalent to `'LR'`, `'vertical'` is equivalent to `'TB'`.**


{{ use:partial-symbol(
    seriesType="tree",
    defaultSymbol="'emptyCircle'",
    defaultSymbolSize=7,
    prefix="#",
    hasCallback=true
) }}


## roam(boolean|string) = false
{{ use: partial-roam }}


## expandAndCollapse(boolean) = true

Subtree collapses and expands interaction, `default true`. As the drawing area is limited, and usually the nodes of a tree may be more, so there will be hidden between the nodes. In order to avoid this problem, you can put a temporary unrelated subtree folded away, until you need to start when necessary. Such as the above radial layout tree example, the center of the node is filled with blue is the folded away subtree, you can click to expand it.

**Note: If you configure a custom image as the tag for a node, it is not possible to distinguish whether the current node has a collapsed subtree by the fill color. And currently do not support, upload two pictures, respectively represent the collapsing and expansion state of the node. So, if you want to explicitly show the two states of the node, it is recommended to use `ECharts` regular tag types, such as `emptyCircle`.**

## initialTreeDepth(number) = 2

The initial level (depth) of the tree. The root node is the 0th layer, then the first layer, the second layer, ... , until the leaf node. This configuration item is primarily used in conjunction with `collapsing and expansion` interactions. The purpose is to prevent the nodes from obscuring each other. If set as -1 or `null` or `undefined`, all nodes are expanded.


## itemStyle(Object)

The style of each node in the tree, where [itemStyle.color] (~ series-tree.itemStyle.color) represents the fill color of the node, to distinguish the state of the subtree corresponding to `collapsing` or `expansion`.

{{use: partial-item-style(
    prefix="##",
    useColorPalatte=true,
    defaultBorderWidth=1.5,
    defaultBorderColor="'#c23531'"
)}}


## label(Object)

`label` describes the style of the text corresponding to each node.

{{use:partial-label(
    prefix="##",
    defaultShowLabel=true,
    formatter1d=true
)}}


## lineStyle(Object)

Defines the style of the tree edge.

{{use: partial-tree-line-style(prefix="##")}}


## emphasis(Object)

### itemStyle(Object)
{{use: partial-item-style(prefix="###")}}
### lineStyle(Object)
{{use: partial-tree-line-style(
    prefix="###"
)}}
### label(Object)
{{use:partial-label(
    prefix="###",
    formatter1d=true
)}}


## leaves(Object)

Leaf node special configuration, such as the above tree diagram example, the leaf node and non-leaf node label location is different.

### label(Object)

Describes the style of the text label corresponding to the leaf node.

{{use:partial-label(
    prefix="###",
    defaultShowLabel=true,
    formatter1d=true
)}}

### itemStyle(Object)

The style of the leaf node in the tree.

{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true
)}}

### emphasis(Object)
#### label(Object)
{{use:partial-label(
    prefix="####",
    formatter1d=true
)}}
#### itemStyle(Object)
{{use: partial-item-style(prefix="####")}}


## data(Object)

[series-tree.data](~series-tree.data) the data format is a tree structure，for example：

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
            collapsed: null, // If set as `true`, the node is collpased in the initialization.
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

### itemStyle(Object)

The style of the node.

{{use:partial-item-style(prefix="###", useColorPalatte=true)}}

### label(Object)

The label of the node.


{{ use:partial-label(
    prefix="###"
) }}


### emphasis(Object)
#### label(Object)
{{ use:partial-label(
    prefix="####"
) }}
#### itemStyle(Object)
{{use:partial-item-style(prefix="####")}}


{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use: partial-animation(
    prefix="##",
    defaultAnimationEasing="'linear'",
    defaultAnimationDuration=1000,
    galleryEditorPath=${galleryEditorPath}
)}}

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}


{{target: partial-tree-line-style}}

#${prefix} color(Color) = "'#ccc'"

The color of the tree edge.

#${prefix} width(number) = 1.5

The width of the tree edge.

#${prefix} curveness(number) = 0.5

The curvature of the tree edge.

{{use: partial-style-shadow(prefix=${prefix})}}

