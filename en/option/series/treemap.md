
{{target: series-treemap}}

# series.treemap(Object)

[Treemap](https://en.wikipedia.org/wiki/Treemapping) is a common way to present "hierarchical data" or "tree data".It primarily highlights the important nodes at all hierarchies in 『Tree』with area.



**Example:**

~[700x580](${galleryViewPath}treemap-obama&edit=1&reset=1)


<br>
**Visual Mapping:**

treemap maps the numerical values to area.

Moreover, it is able to map some dimensions of data to other visual channel, like colors, lightness of colors and etc.

{{ use: partial-treemap-visual-detial }}


<br>
**Drill Down:**

The feature `drill down` means: when clicking a tree node, this node will be set as root and its children will be shown. When [leafDepth](~series-treemap.leafDepth) is set, this feature is enabled.

**An example about drill down:**
~[800x500](${galleryViewPath}treemap-drill-down&edit=1&reset=1)

<br>
<br>
<br>
Notice: There are some difference in treemap configuration between ECharts3 and ECharts2. Some immature configuration ways are no longer supported:

+ The position method using `center/size` is no longer supported, and `left/top/bottom/right/width/height` are used to position treemap, as other components do.

+ The configuration item `breadcrumb` is moved outside `itemStyle.normal/itemStyle.emphasis`, and it is in the same level with `itemStyle` now.

+ The configuration item `root` is not avaliable temporarily.User can zoom treemap to see some tiny or deep descendants, or using [leafDepth](~series-treemap.leafDepth) to enable the feature of "drill down".

+ The configuration item `label` is moved outside the `itemStyle.normal/itemStyle.emphasis`, and it is in the same level with `itemStyle` now.

+ The configuration items `itemStyle.normal.childBorderWidth` and `itemStyle.normal.childBorderColor` are not supported anymore (because in this way only 2 levels can be defined). [series-treemap.levels](~series-treemap.levels) is used to define all levels now.

<br>
<br>

## type(string) = 'treemap'

{{ use: partial-rect-layout-width-height(
    componentName='treemap ',
    defaultLeft: 'center',
    defaultRight: null,
    defaultTop: 'middle',
    defaultBottom: null,
    defaultWidth: '80%',
    defaultHeight: '80%'
) }}

## squareRatio(number)

The expected square ratio. Layout would approach the ratio as close as possible.

It defaults to be the golden ratio: `0.5 * (1 + Math.sqrt(5))`.


## leafDepth(number) = null

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
+ `true`: both zoom and move (translation) are avaliable.


## nodeClick(boolean|string) = 'zoomToNode'

The behaviour when clicking a node. Optional values are:

+ `false`: Do nothing after clicked.
+ `'zoomToNode'`: Zoom to clicked node.
+ `'link'`: If there is [link](~series-treemap.data.link) in node data, do hyperlink jump after clicked.


## zoomToNodeRatio(number) = 0.32*0.32

The treemap will be auto zoomed to a appropriate ratio when a node is clicked (when [nodeClick](~series-treemap.nodeClick) is set as `'zoomToNode'` and no drill down happens). This configuration item indicates the ratio.


## levels(Array) = []

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

<br>
**The Rules about Visual Mapping**

When designing a treemap, we primarily focus on how to visually distinguish "different levels", "different categories in the same level", which requires appropriate settings of "rectangular color", "border thickness", "border color" and even "color saturation of rectangular" and so on on each level.

See [example](${galleryEditorPath}treemap-disk&edit=1&reset=1). The top level is divided into several parts by colors "red", "green", "blue", and etc ... In each color block, `colorSaturation` is used to distinguish nodes in sublevel. The border color of the top level is "white", while the border color of the sublevel is the color that based on the current block color and processed by `borderColorSaturation`.

`treemap` uses this rule of visual configuration: each level computes its visual value based on the configurations (`color`, `colorSaturation`, `borderColor`, `colorSaturation`) on this level. If there is no certain configuration in a node, it inherits the configuration from its parent.

In this way, this effect can be configured: set a `color` list on the parent level, and set `colorSaturation` on the child level, and then each node in the parent level would obtain a color from the `color` list, and each node in the child level would obtain a value from `colorSaturation` and compound it with the color inherited from its parent node to get its final color.



<br>
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

<br>
{{ use: partial-treemap-borderColor-setting(galleryEditorPath=${galleryEditorPath}) }}


<br>
**Explanation about borderWidth, gapWidth, borderColor**

![500xauto](~treemap-border-gap.png)



{{use: partial-treemap-level-props(
    prefix="##",
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
)}}



{{use: partial-treemap-level-props(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
)}}


## breadcrumb(Object)

breadcrumb, showing the path of the current node.


### show(boolean) = true

Whether to show the breadcrumb.


{{ use: partial-rect-layout(
    componentName="asdf ",
    prefix="##",
    noZ=true,
    defaultLeft="'center'",
    defaultBottom=0
) }}


### height(number) = 22

The height of breadcrumb.


### emptyItemWidth(number) = 25

When is no content in breadcrumb, this minimal width need to be set up.


### itemStyle(Object)

{{ use: partial-item-style-desc }}


#### normal

{{use: partial-item-style(
    prefix="####",
    name="boxplot",
    defaultColor="rgba(0,0,0,0.7)",
    defaultBorderColor="rgba(255,255,255,0.7)",
    defaultBorderWidth=1,
    defaultShadowColor='rgba(150,150,150,1)',
    defaultShadowBlur=3,
    defaultShadowOffsetX=0,
    defaultShadowOffsetY=0
)}}


##### textStyle(Object)

{{use: partial-text-style(
    prefix="#####",
    defaultColor="#fff"
)}}


#### emphasis

{{use: partial-item-style(
    prefix="####",
    name="boxplot",
    defaultColor="rgba(0,0,0,0.7)",
    defaultBorderColor="rgba(255,255,255,0.7)",
    defaultBorderWidth=1,
    defaultShadowColor='rgba(150,150,150,1)',
    defaultShadowBlur=3,
    defaultShadowOffsetX=0,
    defaultShadowOffsetY=0
)}}


##### textStyle(Object)

{{use: partial-text-style(
    prefix="#####",
    defaultColor="#fff"
)}}



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


{{use: partial-treemap-level-props(
    prefix="##",
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
)}}

### link(string)

Enable hyperlink jump when clicking on node. It is avaliable when [series-treemap.nodeClick](~series-treemap.nodeClick) is `'link'`.

See [series-treemap.data.target](~series-treemap.data.target).

### target(string) = 'blank'

The same meaning as `target` in `html` `<a>` label, See [series-treemap.data.link](~series-treemap.data.link). Option values are: `'blank'` or `'self'`.

### children(Array)

child nodes, recursive definition, configurations are the same as [series-treemap.data](~series-treemap.data).

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use: partial-animation-init(
    prefix="#",
    defaultAnimationEasing='quinticInOut',
    defaultAnimationDuration=1500,
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}






{{target: partial-treemap-level-props}}

#${prefix} visualDimension(number) = 0

`treemap` is able to map any dimensions of data to visual.

The value of [series-treemap.data](~series-treemap.data) can be an array. And each item of the array represents a "dimension". `visualDimension` specifies the dimension on which visual mapping will be performed.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="visualDimension")}}

#${prefix} visualMin(number) = null

The minimal value of current level. Auto-statistics by default.

When [colorMappingBy](~series-treemap.levels.colorMappingBy) is set to `'value'`, you are able to specify extent manually for visual mapping by specifying `visualMin` or `visualMax`.

#${prefix} visualMax(number) = null

The maximal value of current level. Auto-statistics by default.

When [colorMappingBy](~series-treemap.levels.colorMappingBy) is set to `'value'`, you are able to specify extent manually for visual mapping by specifying `visualMin` or `visualMax`.

{{ if: ${prefix} !== '#' }}
#${prefix} color(Array)

A color list for a level. Each node in the level will obtain a color from the color list (the rule see [colorMappingBy](~series-treemap.levels.colorMappingBy)). It is empty by default, which means the global color list will be used.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="color")}}

{{ /if }}
#${prefix} colorAlpha(Array) = null

It indicates the range of tranparent rate (color alpha) {{ if: ${prefix} !== '#' }}for nodes in a level {{ else }} of the series{{ /if }}. The range of values is 0 ~ 1.

For example, `colorAlpha` can be `[0.3, 1]`.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="colorAlpha")}}


#${prefix} colorSaturation(number) = null

It indicates the range of saturation (color alpha) {{ if: ${prefix} !== '#' }}for nodes in a level {{ else }} of the series{{ /if }}. The range of values is 0 ~ 1.

For example, `colorSaturation` can be `[0.3, 1]`.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="colorSaturation")}}


#${prefix} colorMappingBy(string) = 'index'

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

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="colorMappingBy")}}


#${prefix} visibleMin(number) = 10

A node will not be shown when its area size is smaller than this value (unit: px square).

In this way, tiny nodes will be hidden, otherwise they will huddle together. When user zoom the treemap, the area size will increase and the rectangle will be shown if the area size is larger than this threshold.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="visibleMin")}}


#${prefix} childrenVisibleMin(number) = null

Children will not be shown when area size of a node is smaller than this value (unit: px square).

This can hide the details of nodes when the rectangular area is not large enough. When users zoom nodes, the child node would show if the area is larger than this threshold.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="childrenVisibleMin")}}


#${prefix} label(Object)

`label` decribes the style of the label in each node.

{{use: partial-treemap-prop-location-desc(name="label")}}

<br>

##${prefix} normal(Object)

{{use:partial-treemap-label(prefix=${prefix} + "##")}}


##${prefix} emphasis(Object)

{{use:partial-treemap-label(prefix=${prefix} + "##")}}



#${prefix} itemStyle(Object)

{{use: partial-treemap-prop-location-desc(name="itemStyle")}}

<br>

##${prefix} normal(Object)

{{use: partial-treemap-item-style(
    prefix=${prefix} + "##",
    galleryEditorPath=${galleryEditorPath},
    itemStyleType='normal'
)}}

##${prefix} emphasis(Object)

{{use: partial-treemap-item-style(
    prefix=${prefix} + "##",
    galleryEditorPath=${galleryEditorPath},
    itemStyleType='emphasis'
)}}

{{ use:partial-silent(
    prefix="##"
) }}







{{target: partial-treemap-prop-location-desc}}
<br>
> Tps: In treemap, `${name}` attribute could appear in more than one places:

{{ if: ${name} !== 'color' }}
> * It could appear in [sereis-treemap](~series-treemap), indicating the unified setting of the series.

{{ /if }}
> * It could appear in each array element of  [series-treemap.levels](~series-treemap.levels), indicating the unified setting of each level of the tree.

> * It could appear in each node of [series-treemap.data](~series-treemap.data), indicating the particular setting of each node.





{{target: partial-treemap-visual-detial}}

About visual encoding, see details in [series-treemap.levels](~series-treemap.levels).





{{target: partial-treemap-item-style}}

#${prefix} color(Color) =  null

The color of a node. It use global palette [option.color](~color) by default.

{{if: ${itemStyleType} === 'normal' }}

#${prefix} colorAlpha(number) = null

The tranparent rate of a node, the range is between 0 ~ 1.


#${prefix} colorSaturation(number) = null

The color saturation of a node. The range is between 0 ~ 1.


#${prefix} borderWidth(number) = 0

The border width of a node. There is no border when it is set as `0`.

Tip, gaps between child nodes are specified by [gapWidth](~series-treemap.levels.gapWidth)


#${prefix} gapWidth(number) = 0

Gaps between child nodes.


#${prefix} borderColor(Color) = '#fff',

The border color and gap color of a node.


#${prefix} borderColorSaturation(Color) = null

The color saturation of a border or gap. The value range is between 0 ~ 1.

Tips:

When `borderColorSaturation` is set, the `borderColor` is disabled, and, instead, the final border color is calculated based on the color of this node (this color could be sepcified explicitly or inherited from its parent node) and mixing with `borderColorSaturation`.

In this way, a effect can be implemented: different sections have different hue of gap color repectively, which makes users easy to distinguish both sections and levels.

<br>
{{ use: partial-treemap-borderColor-setting(galleryEditorPath=${galleryEditorPath}) }}

{{/if }}







{{ target: partial-treemap-borderColor-setting }}
**How to avoid confusion by setting border/gap of node**

If all of the border/gaps are set with the same color, confusion might occur when rectangulars in different levels display at the same time.

See the [example](${galleryEditorPath}doc-example/treemap-borderColor&edit=1&reset=1). Noticed that the child rectangles in the red area are in the deeper level than rectangles that are saparated by white gap. So in the red area, basically we set gap color with red, and use `borderColorSaturation` to lift the saturation.





{{ target: partial-treemap-label }}

{{use:partial-label(
    prefix=${prefix},
    defaultPosition="'inside'",
    formatter=true,
    noTextStyle=true
)}}

#${prefix} textStyle(Object)

##${prefix} ellipsis(boolean) = true

When the text is overflow the rectangle boundary, whether to replace the excess part with apostrophe.


{{use:partial-text-style(
    prefix=${prefix} + '#',
    defaultColor="'#fff'"
)}}


##${prefix} align(string) = 'center'

Horizontal alignment. Optional values are `'center'`, `'right` and `'left'`.


##${prefix} baseline(string) = 'middle'

Vertical alignment, Optional values are  `'middle'`, `'right` and `'left'`.





