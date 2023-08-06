
{{ target: series-treemap }}

# series.treemap(Object)

[Treemap](https://en.wikipedia.org/wiki/Treemapping) is a common way to present "hierarchical data" or "tree data". It primarily highlights the important nodes at all hierarchies in 『Tree』with area.



**Example:**

~[700x580](${galleryViewPath}treemap-obama&edit=1&reset=1)



**Visual Mapping:**

treemap maps the numerical values to area.

Moreover, it is able to map some dimensions of data to other visual channel, like colors, lightness of colors and etc.

{{ use: partial-treemap-visual-detial() }}

**Drill Down:**

The feature `drill down` means: when clicking a tree node, this node will be set as root and its children will be shown. When [leafDepth](~series-treemap.leafDepth) is set, this feature is enabled.

**An example about drill down:**
~[800x500](${galleryViewPath}treemap-drill-down&edit=1&reset=1)


Notice: There are some difference in treemap configuration between ECharts3 and ECharts2. Some immature configuration ways are no longer supported:

+ The position method using `center/size` is no longer supported, and `left/top/bottom/right/width/height` are used to position treemap, as other components do.

+ The configuration item `breadcrumb` is moved outside `itemStyle/itemStyle.emphasis`, and it is in the same level with `itemStyle` now.

+ The configuration item `root` is not available temporarily.User can zoom treemap to see some tiny or deep descendants, or using [leafDepth](~series-treemap.leafDepth) to enable the feature of "drill down".

+ The configuration item `label` is moved outside the `itemStyle/itemStyle.emphasis`, and it is in the same level with `itemStyle` now.

+ The configuration items `itemStyle.childBorderWidth` and `itemStyle.childBorderColor` are not supported anymore (because in this way only 2 levels can be defined). [series-treemap.levels](~series-treemap.levels) is used to define all levels now.

## type(string) = 'treemap'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-rect-layout-width-height(
    componentName = 'treemap ',
    defaultLeft = 'center',
    defaultRight = null,
    defaultTop = 'middle',
    defaultBottom = null,
    defaultWidth = '80%',
    defaultHeight = '80%'
) }}

## squareRatio(number)

<ExampleUIControlNumber min="0.1" default="0.75" step="0.1" />

The expected square ratio. Layout would approach the ratio as close as possible.

It defaults to be the golden ratio: `0.5 * (1 + Math.sqrt(5))`.

## leafDepth(number) = null

<ExampleUIControlNumber min="1" step="1" />

When `leafDepth` is set, the feature "drill down" is enabled, which means when clicking a tree node, this node will be set as root and its children will be shown.

`leafDepth` represents how many levels are shown at most. For example, when `leafDepth` is set to `1`, only one level will be shown.

`leafDepth` is `null`/`undefined` by default, which means that "drill down" is disabled.

**An example about drill down:**
~[800x500](${galleryViewPath}treemap-drill-down&edit=1&reset=1)

## drillDownIcon(string) = '▶'

Marker when the node is able to be drilled down.

## roam(boolean|string) = true

Whether to enable dragging roam (move and zoom). Optional values are:

+ `false`: roam is disabled.
+ `'scale'` or `'zoom'`: zoom only.
+ `'move'` or `'pan'`: move (translation) only.
+ `true`: both zoom and move (translation) are available.

## nodeClick(boolean|string) = 'zoomToNode'

The behaviour when clicking a node. Optional values are:

+ `false`: Do nothing after clicked.
+ `'zoomToNode'`: Zoom to clicked node.
+ `'link'`: If there is [link](~series-treemap.data.link) in node data, do hyperlink jump after clicked.

## zoomToNodeRatio(number) = 0.32*0.32

<ExampleUIControlNumber min="0" default="0.1" step="0.01" />

The treemap will be auto zoomed to a appropriate ratio when a node is clicked (when [nodeClick](~series-treemap.nodeClick) is set as `'zoomToNode'` and no drill down happens). This configuration item indicates the ratio.

{{ use: partial-treemap-level-props(
    prefix = "#"
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## breadcrumb(Object)

To show the path of the current node.

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the breadcrumb.

{{ use: partial-rect-layout(
    componentName = "breadcrumb ",
    prefix = "##",
    noZ = true,
    defaultLeft = "'center'",
    defaultTop = "'bottom'"
) }}

### height(number) = 22

<ExampleUIControlNumber min="0" default="22" step="1" />

The height of breadcrumb.

### emptyItemWidth(number) = 25

<ExampleUIControlNumber min="0" default="25" step="1" />

When is no content in breadcrumb, this minimal width need to be set up.

### itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "###",
    name = "breadcrumb",
    defaultColor = "rgba(0,0,0,0.7)",
    defaultBorderColor = "''",
    defaultBorderWidth = 1
) }}

#### textStyle(Object)

{{ use: partial-text-style(
    prefix = "####",
    defaultColor = "#fff"
) }}

### emphasis(Object)
{{ use: partial-version(
    version = "5.4.0"
) }}

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    name = "breadcrumb",
    hasInherit = true,
    defaultColor = "rgba(0,0,0,0.9)",
    defaultBorderColor = "''",
    defaultBorderWidth = 1
) }}

##### textStyle(Object)

{{ use: partial-text-style(
    prefix = "#####",
    defaultColor = "#fff"
) }}

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## levels(Array)

**Multiple Levels Configuration**

treemap adopts 4-level configuration:

```
"each node" --> "each level" --> "each series".
```

That is, we can configurate each node, can also configurate each level of the tree, or set overall configurations on each series. The highest priority is node configuration.

`levels` is configurations on each levels, which is used most.

For example:

```javascript
// Notice that in fact the data structure is not "tree", but is "forest".
data: [
    {
        name: 'nodeA',
        children: [
            {name: 'nodeAA'},
            {name: 'nodeAB'},
        ]
    },
    {
        name: 'nodeB',
        children: [
            {name: 'nodeBA'}
        ]
    }
],
levels: [
    {...}, // configurations of the top level of the data structure "forest"
        // (the level that contains 'nodeA', 'nodeB' shown above).
    {...}, // configurations of the next level
        // (the level that contains 'nodeAA', 'nodeAB', 'nodeBA' shown above)
    {...}, // configurations of the next level
    ...
]
```

**The Rules about Visual Mapping**

When designing a treemap, we primarily focus on how to visually distinguish "different levels", "different categories in the same level", which requires appropriate settings of "rectangular color", "border thickness", "border color" and even "color saturation of rectangular" and so on on each level.

See [example](${galleryEditorPath}treemap-disk&edit=1&reset=1). The top level is divided into several parts by colors "red", "green", "blue", and etc ... In each color block, `colorSaturation` is used to distinguish nodes in sublevel. The border color of the top level is "white", while the border color of the sublevel is the color that based on the current block color and processed by `borderColorSaturation`.

`treemap` uses this rule of visual configuration: each level computes its visual value based on the configurations (`color`, `colorSaturation`, `borderColor`, `borderColorSaturation`) on this level. If there is no certain configuration in a node, it inherits the configuration from its parent.

In this way, this effect can be configured: set a `color` list on the parent level, and set `colorSaturation` on the child level, and then each node in the parent level would obtain a color from the `color` list, and each node in the child level would obtain a value from `colorSaturation` and compound it with the color inherited from its parent node to get its final color.



**Dimensions and "Extra Visual Mapping"**

See the example below: every `value` field is set as an Array, in which each item in the array represents a dimension respectively.

```javascript
[
    {
        value: [434, 6969, 8382],
        children: [
            {
                value: [1212, 4943, 5453],
                id: 'someid-1',
                name: 'description of this node',
                children: [...]
            },
            {
                value: [4545, 192, 439],
                id: 'someid-2',
                name: 'description of this node',
                children: [...]
            },
            ...
        ]
    },
    {
        value: [23, 59, 12],
        children: [...]
    },
    ...
]
```

`treemap` will map the first dimension (the first item of the array) to "area". If we want to express more information, we could map another dimension (specified by [series-treemap.visualDimension](~series-treemap.viusalDimension)) to another visual types, such as `colorSaturation` and so on. See the [example](${galleryEditorPath}treemap-obama&edit=1&reset=1) and select the legend 'Growth'.

{{ use: partial-treemap-borderColor-setting() }}

**Explanation about borderWidth, gapWidth, borderColor**

![500xauto](~treemap-border-gap.png)

{{ use: partial-treemap-level-props(
    prefix = "##"
) }}

## data(Array)

the the data format of [series-treemap.data](~series-treemap.data) is a forest. For example:

```javascript
[ // Tips, the top level is an array.
    {
        value: 1212,
        children: [
            {
                value: 2323,    // The value of this node, indicating the area size.
                                // it could also be an array, such as [2323, 43, 55], in which the first item of array indicates the area size.
                                // The other items of the array can be used for extra visual mapping. See details in series-treemp.levels.
                id: 'someid-1', // id is not mandatory.
                                // But if using API, id is used to locate node.
                name: 'description of this node', // show the description text in rectangle.
                children: [...],
                label: {        // The label config of this node (if necessary).
                    ...         // see series-treemap.label.
                },
                itemStyle: {    // the itemStyle of this node (if necessary).
                    ...         // the see series-treemap.itemStyle.
                }
            },
            {
                value: 4545,
                id: 'someid-2',
                name: 'description of this node',
                children: [
                    {
                        value: 5656,
                        id: 'someid-3',
                        name: 'description of this node',
                        children: [...]
                    },
                    ...
                ]
            }
        ]
    },
    {
        value: [23, 59, 12]
        // if there is no children, here could be nothing.
    },
    ...
]
```

### value(number|Array)

The value of this node, indicating the area size.

It could also be an array, such as [2323, 43, 55], in which the first item of array indicates the area size.

The other items of the array can be used for extra visual mapping. See details in series-treemp.levels.

### id(string)

`id` is not mandatory.
But if using API, id is used to locate node.

### name(string)

Show the description text in rectangle.

{{ use: partial-treemap-level-props(
    prefix = "##"
) }}

### link(string)

Enable hyperlink jump when clicking on node. It is available when [series-treemap.nodeClick](~series-treemap.nodeClick) is `'link'`.

See [series-treemap.data.target](~series-treemap.data.target).

### target(string) = 'blank'

The same meaning as `target` in `html` `<a>` label, See [series-treemap.data.link](~series-treemap.data.link). Option values are: `'blank'` or `'self'`.

### children(Array)

child nodes, recursive definition, configurations are the same as [series-treemap.data](~series-treemap.data).

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation-init(
    prefix = "#",
    defaultAnimationEasing = 'quinticInOut',
    defaultAnimationDuration = 1500
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-treemap-level-props }}

#${prefix} visualDimension(number) = 0

`treemap` is able to map any dimensions of data to visual.

The value of [series-treemap.data](~series-treemap.data) can be an array. And each item of the array represents a "dimension". `visualDimension` specifies the dimension on which visual mapping will be performed.

{{ use: partial-treemap-visual-detial() }}

{{ use: partial-treemap-prop-location-desc(
    name = "visualDimension"
) }}

#${prefix} visualMin(number) = null

<ExampleUIControlNumber default="0" />

The minimal value of current level. Auto-statistics by default.

When [colorMappingBy](~series-treemap.levels.colorMappingBy) is set to `'value'`, you are able to specify extent manually for visual mapping by specifying `visualMin` or `visualMax`.

#${prefix} visualMax(number) = null

<ExampleUIControlNumber default="100" />

The maximal value of current level. Auto-statistics by default.

When [colorMappingBy](~series-treemap.levels.colorMappingBy) is set to `'value'`, you are able to specify extent manually for visual mapping by specifying `visualMin` or `visualMax`.

{{ if: ${prefix} !== '#' }}
#${prefix} color(Array)

A color list for a level. Each node in the level will obtain a color from the color list (the rule see [colorMappingBy](~series-treemap.levels.colorMappingBy)). It is empty by default, which means the global color list will be used.

{{ use: partial-treemap-visual-detial() }}

{{ use: partial-treemap-prop-location-desc(
    name = "color"
) }}
{{ /if }}

#${prefix} colorAlpha(Array) = null

{{ if: ${prefix} !== '#' }}
It indicates the range of transparent rate (color alpha) for nodes in a level
{{ else }}
It indicates the range of transparent rate (color alpha) for nodes of the series
{{ /if }}

.
The range of values is 0 ~ 1.

For example, `colorAlpha` can be `[0.3, 1]`.

{{ use: partial-treemap-visual-detial() }}

{{ use: partial-treemap-prop-location-desc(
    name = "colorAlpha"
) }}

#${prefix} colorSaturation(number) = null

{{ if: ${prefix} !== '#' }}
It indicates the range of saturation (color alpha) for nodes in a level.
{{ else }}
It indicates the range of saturation (color alpha) for nodes  of the series.
{{ /if }}

The range of values is 0 ~ 1.

For example, `colorSaturation` can be `[0.3, 1]`.

{{ use: partial-treemap-visual-detial() }}

{{ use: partial-treemap-prop-location-desc(
    name = "colorSaturation"
) }}

#${prefix} colorMappingBy(string) = 'index'

<ExampleUIControlEnum options="index,value,id" />

Specify the rule according to which each node obtain color from [color list](~series-treemap.levels.color). Optional values:

* `'value'`:

Map [series-treemap.data.value](~series-treemap.data.value) to color.

In this way, the color of each node indicate its value.

[visualDimension](~series-treemap.levels.visualDimension) can be used to specify which dimension of [data](~series-treemap.data) is used to perform visual mapping.

* `'index'`:

Map the `index` (ordinal number) of nodes to color. Namely, in a level, the first node is mapped to the first color of [color list](~series-treemap.levels.color), and the second node gets the second color.

In this way, adjacent nodes are distinguished by color.


* `'id'`:

Map [series-treemap.data.id](~series-treemap.data.id) to color.

Since `id` is used to identify node, if user call `setOption` to modify the tree, each node will remain the original color before and after `setOption` called. See this [example](${galleryEditorPath}treemap-obama&edit=1&reset=1).

{{ use: partial-treemap-visual-detial() }}

{{ use: partial-treemap-prop-location-desc(
    name = "colorMappingBy"
) }}

#${prefix} visibleMin(number) = 10

<ExampleUIControlNumber default="10" min="0" />

A node will not be shown when its area size is smaller than this value (unit: px square).

In this way, tiny nodes will be hidden, otherwise they will huddle together. When user zoom the treemap, the area size will increase and the rectangle will be shown if the area size is larger than this threshold.

{{ use: partial-treemap-visual-detial() }}

{{ use: partial-treemap-prop-location-desc(
    name = "visibleMin"
) }}

#${prefix} childrenVisibleMin(number) = null

<ExampleUIControlNumber default="10" min="0" step="0.5" />

Children will not be shown when area size of a node is smaller than this value (unit: px square).

This can hide the details of nodes when the rectangular area is not large enough. When users zoom nodes, the child node would show if the area is larger than this threshold.

{{ use: partial-treemap-visual-detial() }}

{{ use: partial-treemap-prop-location-desc(
    name = "childrenVisibleMin"
) }}

#${prefix} label(Object)

`label` describes the style of the label in each node.

{{ use: partial-treemap-prop-location-desc(
    name = "label"
) }}

{{ use: partial-label(
    prefix = ${prefix} + "#",
    defaultPadding = 5,
    defaultPosition = "'inside'",
    formatter = true,
    formatterExtra = {
        treeAncestors: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    }
) }}

#${prefix} upperLabel(Object)

`upperLabel` is used to specify whether show label when the node has children. When [upperLabel.show](~series-treemap.upperLabel.show) is set as `true`, the feature that "show parent label" is enabled.

The same as [series-treemap.label](~series-treemap.label), the option `upperLabel` can be placed at the root of [series-treemap](~series-treemap) directly, or in [series-treemap.level](~series-treemap.level), or in each item of [series-treemap.data](~series-treemap.data).

Specifically, [series-treemap.label](~series-treemap.label) specifies the style when a node is a leaf, while `upperLabel` specifies the style when a node has children, in which case the label is displayed in the inner top of the node.

See:

~[700x500](${galleryViewPath}treemap-show-parent&edit=1&reset=1)

{{ use: partial-treemap-prop-location-desc(
    name = "label"
) }}

{{ use: partial-label(
    prefix = ${prefix} + "#",
    defaultPosition = "'inside'",
    formatter = true,
    formatterExtra = {
        treeAncestors: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    }
) }}

##${prefix} height(number) = 20

<ExampleUIControlNumber default="20" min="0" step="0.5" />

Height of label area.

#${prefix} itemStyle(Object)

{{ use: partial-treemap-prop-location-desc(
    name = "itemStyle"
) }}

{{ use: partial-treemap-item-style(
    prefix = ${prefix} + "#",
    itemStyleType = 'normal'
) }}

#${prefix} emphasis(Object)

Emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "#" + ${prefix}
) }}

{{ if: ${prefix} === '#' }}
{{ use: partial-focus-blur-scope(
    isTree = true
) }}
{{ /if }}

{{ use: treemap-state(
    prefix = "#" + ${prefix}
) }}

#${prefix} blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state.

{{ use: treemap-state(
    prefix = "#" + ${prefix}
) }}

#${prefix} select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state.

{{ use: partial-select-disabled(
    prefix = "#" + ${prefix}
) }}

{{ use: treemap-state(
    prefix = "#" + ${prefix}
) }}



{{ target: partial-treemap-prop-location-desc }}

> Tps: In treemap, `${name}` attribute could appear in more than one places:

{{ if: ${name} !== 'color' }}> * It could appear in [sereis-treemap](~series-treemap), indicating the unified setting of the series.{{ /if }}

> * It could appear in each array element of  [series-treemap.levels](~series-treemap.levels), indicating the unified setting of each level of the tree.

> * It could appear in each node of [series-treemap.data](~series-treemap.data), indicating the particular setting of each node.



{{ target: partial-treemap-visual-detial }}

About visual encoding, see details in [series-treemap.levels](~series-treemap.levels).



{{ target: partial-treemap-item-style }}

#${prefix} color(Color) = null

<ExampleUIControlColor />

The color of a node. It use global palette [option.color](~color) by default.

{{ if: ${itemStyleType} === 'normal' }}
#${prefix} borderRadius(number|Array) = 0

<ExampleUIControlVector min="0" dims="LT,RT, RB, LB" clean="true"  />

Border radius.

#${prefix} borderWidth(number) = 0

<ExampleUIControlNumber step="0.5" min="0" />

The border width of a node. There is no border when it is set as `0`.

Tip, gaps between child nodes are specified by [gapWidth](~series-treemap.levels.gapWidth)

#${prefix} gapWidth(number) = 0

<ExampleUIControlNumber step="0.5" min="0" />

Gaps between child nodes.

#${prefix} borderColor(Color) = '#fff',

<ExampleUIControlColor default="#fff" />

The border color and gap color of a node.

#${prefix} borderColorSaturation(Color) = null

<ExampleUIControlNumber step="0.01" min="0" max="1" default="0.5" />

The color saturation of a border or gap. The value range is between 0 ~ 1.

Tips:

When `borderColorSaturation` is set, the `borderColor` is disabled, and, instead, the final border color is calculated based on the color of this node (this color could be specified explicitly or inherited from its parent node) and mixing with `borderColorSaturation`.

In this way, a effect can be implemented: different sections have different hue of gap color respectively, which makes users easy to distinguish both sections and levels.

{{ use: partial-treemap-borderColor-setting() }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix}
) }}

#${prefix} decal(Object)

{{ use: partial-decal-desc() }}

{{ use: partial-decal(
    prefix = '#' + ${prefix}
) }}
{{ /if }}



{{ target: partial-treemap-borderColor-setting }}

**How to avoid confusion by setting border/gap of node**

If all of the border/gaps are set with the same color, confusion might occur when rectangulars in different levels display at the same time.

See the [example](${galleryEditorPath}doc-example/treemap-borderColor&edit=1&reset=1). Notice that the child rectangles in the red area are in the deeper level than rectangles that are saparated by white gap. So in the red area, basically we set gap color with red, and use `borderColorSaturation` to lift the saturation.



{{ target: treemap-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = ${prefix} + "#",
    defaultPosition = "'inside'",
    formatter = true,
    formatterExtra = {
        treeAncestors: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    }
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = ${prefix} + "#"
) }}

#${prefix} upperLabel(Object)

{{ use: partial-label(
    prefix = ${prefix} + "#",
    defaultPosition = "'inside'",
    formatter = true,
    formatterExtra = {
        treeAncestors: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    }
) }}

#${prefix} itemStyle(Object)

{{ use: partial-treemap-item-style(
    prefix = ${prefix} + "#",
    itemStyleType = 'emphasis'
) }}

