
{{target: series-treemap}}

# series.treemap(Object)

[Treemap](https://en.wikipedia.org/wiki/Treemapping) is a common visual way to present 『hierarchical data 』『tree data』.It primarily highlights the important nodes at all hierarchies in 『Tree』with area.



**Example: **

~[700x580](${galleryViewPath}treemap-obama&edit=1&reset=1)


<br>
**visual mapping: **

treemap firstly map the numberical values to the visual element 『area』.  

Moreover, it also map other dimensions of data to colors, lightness of colors and etc.. 

{{ use: partial-treemap-visual-detial }}


<br>
<br>
<br>
Tip: Compared with ECharts2, Treemap configuration items have changed. Some  immature configuration modes are no longer supported or compatible: 

+ `center/size` locate mode is no longer supported, and the locate mode of `left/top/bottom/right/width/height` would be used uniformly.

+ the configuration of `breadcrumb` is moved outside the `itemStyle.normal/itemStyle.emphasis`, which is in the same level with `itemStyle`.

+ `root` setting is not avaliable temporarily.At present, `zoom` could be used to see the details in the subordinate levels.  

+ the configuration of `label` is moved outside the `itemStyle.normal/itemStyle.emphasis`, which is in the same level with `itemStyle`.

+ `itemStyle.normal.childBorderWidth`、`itemStyle.normal.childBorderColor` are not avaliable anymore (because this configuration can only define 2 levels of treemap).[series-treemap.levels](~series-treemap.levels) is used uniformly to define all levels.

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

expected square ratio. The layout would approach the ratio as close as possible.  

It defaults to be the golden ratio: `0.5 * (1 + Math.sqrt(5))`.


## roam(boolean|string) = true

Whether to enable dragging roam (move and zoom). Optional values are: 

+ `false`: close.
+ `'scale'` or  `'zoom'`: zoom only.
+ `'move'` or `'pan'`: translation only.
+ `true`: both zoom and translation are avaliable.


## nodeClick(boolean|string) = 'zoomToNode'

Optional values are: 

+ `false`: no response after node clicking.
+ `'zoomToNode'`: zooming to node after clicking the node.
+ `'link'`: if there is [link](~series-treemap.data.link) in node data, hyperlink jump would happen after clickong the node. 



## zoomToNodeRatio(number) = 0.32*0.32

Clicking on a node, and then this node would  automatically zoom in to the suitable ratio (node area ratio of node occuppying the viewing area). This configuration is the ratio.


## levels(Array) = []

**multiple levels configuration**

treemap adopts『3-level configuration』such as『series』--『each level』--『each node』.

Otherwise, we can configurate each node and also can configurate each level of the tree, or set a overall configuration on the series.

The most frequently used one is『configurate each level』,  the configuration item of `levels` is the configuration of each level.  For example: 

```javascript
levels: [
    {...}, // top configuration
    {...}, // configuration of the next level
    {...}, // configuration of the level after the next level
    ...
]
```

<br>
**The rules for visual mapping**

Treemap primarily focus on how to visually distinguish 『different levels』 from 『different categories in the same level』, which require to properly set 『rectangular color』,『border thickness』, 『border color』and even『color saturation of rectangular』 and so on on each level.

Reference to [example](${galleryEditorPath}treemap-disk&edit=1&reset=1). The top level is divided by colors into several parts respectively in 『red』『green』『blue』and etc.. Each color block is the next level, using color saturation to distinguish (reference to `colorSaturation`). The border of the outermost level of Rectangle is 『white』. The border of the next level rectangular is the processed result of current block color added with saturation (See `borderColorSaturation`).

Treemap supports this configuration through the following rule: each level computes visual information (the configuration in levels)  of  user configuration such as`color`、`colorSaturation`、`borderColor`、`colorSaturation`, then pass them to the child node (sublevel). If there is no configuration of child node, the configuration of the parent node would be inherited, or its own configuration would be used.

Therefore, what can be done is the following: the parent level configurates `color` list, the child level configurates `colorSaturation`. Each node of parent level would obtain a color from the `color` list; and the node of child level would obtain a color from `colorSaturation` and compound it with the color inherited from the parent node to get its final color.



<br>
**dimensions and『extra visual mapping』**

Example: every `value` field is an Array, in which every item corresponds with a dimension (dimension).

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

treemap defalts to map the first dimension (the first item of Array)  to 『area』. If users want to express more information, users could map another dimension ([series-treemap.visualDimension](~series-treemap.viusalDimension))  to another 『visual element』, such as color lightness and so on.  See the status when `Growth` is selected in legend in the [example](${galleryEditorPath}treemap-obama&edit=1&reset=1).

<br>
{{ use: partial-treemap-borderColor-setting(galleryEditorPath=${galleryEditorPath}) }}

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

breadcrumb, showing the path of current node.


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

the height of breadcrumb. .asdf `series-treemap.breadcrumb`


### emptyItemWidth(number) = 25

When is no content in breadcrumb, this minimun width need to be set up.


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

the the data format of [series-treemap.data](~series-treemap.data) is tree. For example: 

```javascript
[ // tips, the outmost level is an array. It is unnecessary to start from a root node. 
    {
        value: 1212,
        children: [
            {
                value: 2323,    // the value of value field, corresponding to area size.
                                // it could also be array, such as [2323, 43, 55], in which the first item of array corresponds to the area size. 
                                // array is used for extra visual mapping. See details in series-treemp.levels. 
                id: 'someid-1', // id is not something have to be set.
                                // If some node need to be changed by API, it need id to locate. 
                name: 'description of this node', // show the description text in rectangle.
                children: [...],
                label: {        // the special label definition of this node(if necessary)
                    ...         // the format of label refers to series-treemap.label.
                },
                itemStyle: {    // the special itemStyle definition of this node(if necessary).
                    ...         // the format of label refers to series-treemap.itemStyle.
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

The value of nodes in each tree, which corresponds to area size. It could be number or array, such as `[2323, 43, 55]`. So the first item corresponds to the area size.

### id(string)

the id of each tree node. id is not necessarily to be set. If some node need to be changed by API, it needs id to locate.  

### name(string)

Show the description text in rectangle. 


{{use: partial-treemap-level-props(
    prefix="##",
    galleryEditorPath=${galleryEditorPath},
    galleryViewPath=${galleryViewPath}
)}}

### link(string)

Click on the hyperlink which could jump. It is avaliable when the value of [series-treemap.nodeClick](~series-treemap.nodeClick) is `'link'`.  

See [series-treemap.data.target](~series-treemap.data.target).

### target(string) = 'blank'

The same meaning with `target` in `html` `<a>` label, referring to [series-treemap.data.link](~series-treemap.data.link). Option values are: `'blank'` or `'self'`.

### children(Array)

children node, recursive definition, its format is the same with [series-treemap.data](~series-treemap.data).



{{use: partial-animation-init(
    prefix="#",
    defaultAnimationEasing='quinticInOut',
    defaultAnimationDuration=1500
)}}







{{target: partial-treemap-level-props}}

#${prefix} visualDimension(number) = 0

`treemap` supports visual mapping of other dimensions of data.

First of all, in data format (See [series-treemap.data](~series-treemap.data))  of treemap, the `value` of every node could be an array. And every item of an array is a『dimension』 (dimension). `visualDimension` assigns which item would be used in extra『visual mapping』. It defaults to be the `0` item.   

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="visualDimension")}}


#${prefix} color(Array)

the color list for nodes at the same level. When it defaults to be empty, the color list of system would be choosed.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="color")}}


#${prefix} colorAlpha(Array) = null

It indicates the selecting range of color thickness for nodes at the same level. the range of values is 0 ~ 1.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="colorAlpha")}}


#${prefix} colorSaturation(number) = null

It Indicates the selecting range of color thickness for nodes at the same level. the range of values is 0 ~ 1.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="colorSaturation")}}


#${prefix} colorMappingBy(string) = 'index'

It indicates that what should be based on When the nodes at the same level select from the color list (See the `color` attribute). Optional values are: 

* `'value'`: 

Map the value of nodes (the [series-treemap.data.value](~series-treemap.data.value))  to the color list. The color obtained through this way reflects values of nodes. It could be set with `visualDimension` attribute and map with that latitudinal value of data. 

* `'index'`: 

Map the `index`(serial number) of nodes to the color list. Namely, in the same level, the first node select the first color from the color list,and the second node gets the second color.  The color obtained through this way could distinguish 2 adjacent nodes easily.


* `'id'`: 

Map the `id` (namely [series-treemap.data.id](~series-treemap.data.id))  of nodes to the color list. `id` is assigned by users. It could make sure the consistency that the same `id` maps to the same color when treemap pass the variable value of  setOption. See the [example](${galleryEditorPath}treemap-obama&edit=1&reset=1). 

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="colorMappingBy")}}


#${prefix} visibleMin(number) = 10

If the area of a rectangular node is less than this value (unit: px square), the node will not display.

Without this limitation, the small nodes will affect the display effect.

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="visibleMin")}}


#${prefix} childrenVisibleMin(number) = null

If the area of a rectangular node is less than this value (unit: px square), the child nodes of this node will not display.

This can hide the details of nodes when the rectangular area is not large enough. When users zoom nodes with mouse, the child node would show if the area is larger than this threshold. 

{{ use: partial-treemap-visual-detial }}
{{use: partial-treemap-prop-location-desc(name="childrenVisibleMin")}}


#${prefix} label(Object)

`label` decribes the text label in each rectangle.

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
    galleryEditorPath=${galleryEditorPath}
)}}

##${prefix} emphasis(Object)

{{use: partial-treemap-item-style(
    prefix=${prefix} + "##",
    galleryEditorPath=${galleryEditorPath}
)}}










{{target: partial-treemap-prop-location-desc}}
<br>
> Tps: In treemap, `${name}` attribute could exist in much places: 

> * It could exist under [sereis-treemap](~series-treemap) root, indicating the unified setting of this overall series.

> * It could exist in every array element of  [series-treemap.levels](~series-treemap.levels), indicating the unified setting of every level of tree. 

> * It could exist n every node of [series-treemap.data](~series-treemap.data), indicating the particular setting of each node.





{{target: partial-treemap-visual-detial}}

About the visual setting, see details in [series-treemap.levels](~series-treemap.levels).





{{target: partial-treemap-item-style}}

#${prefix} color(Color) =  null

the color of rectangle. It defaults to obtain colors from overall palette [option.color](~color).


#${prefix} colorAlpha(number) = null

the color thickness. The value range is floating-point number between 0 ~ 1.


#${prefix} colorSaturation(number) = null

the color saturation of rectangle. The value range is floating-point number between 0 ~ 1.


#${prefix} borderWidth(number) = 0

the border width of rectangle. There is no border when it is 0. 


#${prefix} gapWidth(number) = 0

the gap width of child rectangle inside a rectangle.


#${prefix} borderColor(Color) = '#fff',

the border color of rectangle, supporting `color` with different formats.  


#${prefix} borderColorSaturation(Color) = null

the color saturation of rectangle border. The value range is floating-point number between 0 ~ 1.

Tips: 

If this property is set,  the `borderColor` setting is invalid. Instead, the color (such as the color inherited from the parent node) calculated by the current node. The final color would be get when the `borderColorSaturation` is set on this color value. In this way, 『different sections have rectangular interval lines with different colors』effect could be produced, easily to distinguish levels.

<br>
{{ use: partial-treemap-borderColor-setting(galleryEditorPath=${galleryEditorPath}) }}









{{ target: partial-treemap-borderColor-setting }}
**rectangle border/how to avoid confusion with gap setting**

If the rectangle gap is set with the same color, there may be confusion when different levels of rectangular display at the same time.

See the [example](${galleryEditorPath}doc-example/treemap-borderColor&edit=1&reset=1). It should be noticed that the child rectangles in the included red sections are at the deeper level which is different from the level of other rectangles distinguised by white gaps. Therefore, for distinguishing it from other case, we set the gap line color of the rectangular in red section as 『red color with saturation change』in `borderColorSaturation`.



{{ target: partial-treemap-label }}

#${prefix} show(boolean) = true

Wether to show the text label.


#${prefix} position(string|Array) = ['50%', '50%']

{{ use:partial-label-position }}



#${prefix} textStyle(Object)

##${prefix} ellipsis(boolean) = true

When the text is beyond the rectangle edges, whether to replace the excess part with apostrophe.


{{use:partial-text-style(
    prefix=${prefix} + '#',
    defaultColor="'#fff'"
)}}


##${prefix} align(string) = 'center'

horizontal alignment. Optional values are `'center'`、`'right` and `'left'`.


##${prefix} baseline(string) = 'middle'

vertical alignment, Optional values are  `'middle'`、`'right` and `'left'`.





