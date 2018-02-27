{{ target: partial-sunburst-label-helper }}

#${prefix} rotate(string|number) = 'radial'

If it is `number` type, then is stands for rotation, from -90 degrees to 90 degrees, and positive values stand for counterclockwise.

Besides, it can be string `'radial'`, standing for radial rotation; or `'tangential'`, standing for tangential rotation.

By default, it is `'radial'`. If no rotation is wanted, it can be set to `0`.

The following example shows different `rotate` settings:

~[700x400](${galleryViewPath}sunburst-label-rotate&edit=1&reset=1)

#${prefix} align(string) = 'center'

Align of text, which can be `'left'`, `'center'`, or `'right'`. Note that `'left'` stands for inner side, and `'right'` stands for outer side.

~[700x400](${galleryViewPath}doc-example/sunburst-label-align&edit=1&reset=1)

#${prefix} minAngle(number) = null

If angle of data piece is smaller than this value (in degrees), then text is not displayed. This is used for hiding text for small piece of data.

{{use:partial-label(
    prefix=${prefix},
    defaultPosition="'inside'",
    formatter=true,
    defaultShowLabel="true",
    noRotate=true,
    noAlign=true
)}}



{{ target: partial-sunburst-label-props }}
${prefix} label(Object)

`label` sets the text style for every sectors.

**Priority: [series.data.label](~series-sunburst.data.label) > [series.levels.label](~series-sunburst.levels.label) > [series.label](~series-sunburst.label).**


{{use:partial-label-desc}}

{{ use: partial-sunburst-label-helper(prefix=${prefix}) }}



{{ target: partial-sunburst-itemStyle-props }}

${prefix} itemStyle(Object)

Style of Sunburst sectors.

Style can be set in [series.itemStyle](~series-sunburst.itemStyle) for sectors of this series, or [series.levels.itemStyle](~series-sunburst.levels.itemStyle) for the whole level, or[series.data.itemStyle](~series-sunburst.data.itemStyle) for single sector. If [series.data.itemStyle](~series-sunburst.data.itemStyle) is defined, it will cover the setting of [series.itemStyle](~series-sunburst.itemStyle) and [series.levels.itemStyle](~series-sunburst.levels.itemStyle).

**Priority: [series.data.itemStyle](~series-sunburst.data.itemStyle) > [series.levels.itemStyle](~series-sunburst.levels.itemStyle) > [series.itemStyle](~series-sunburst.itemStyle).**

In ECharts, *emphasis* is for styles when mouse hovers. For Sunburst charts, there are two extra states: *highlight* for highlighting items that relates to the emphasized one, and *downplay* for others when emphasizing an item. See [highlightPolicy](~series-sunburst.highlightPolicy).

{{use: partial-item-style(
    prefix=${prefix},
    useColorPalatte=true,
    defaultBorderWidth=1,
    defaultBorderColor="'white'",
    defaultOpacity=1
)}}

#${prefix} emphasis(Object)

Item style when mouse is hovering. See [highlightPolicy](~series-sunburst.highlightPolicy).

{{use: partial-sunburst-label-props(
    prefix="##" + ${prefix}
)}}

{{use: partial-sunburst-itemStyle-props(
    prefix="##" + ${prefix}
)}}

#${prefix} highlight(Object)

Item style when mouse is hovering related items. See [highlightPolicy](~series-sunburst.highlightPolicy).

{{use: partial-sunburst-label-props(
    prefix="##" + ${prefix}
)}}

{{use: partial-sunburst-itemStyle-props(
    prefix="##" + ${prefix}
)}}

##${prefix} downplay(Object)

Item style when mouse is hovering unrelated items. See [highlightPolicy](~series-sunburst.highlightPolicy).

{{use: partial-sunburst-label-props(
    prefix="##" + ${prefix}
)}}

{{use: partial-sunburst-itemStyle-props(
    prefix="##" + ${prefix}
)}}

{{ target: series-sunburst }}

# series.sunburst(Object)

[Sunburst Chart](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart_/_Sunburst_chart_/_Multilevel_pie_chart) is composed of multiple pie charts. From the view of data structure, inner rings are the parent nodes of outer rings. Therefore, it can show the partial-overall relationship as [Pie](~series-pie) charts, and also level relation as [Treemap](~series-treemap) charts.

**For example:**

~[700x500](${galleryViewPath}sunburst-monochrome&edit=1&reset=1)

~[700x700](${galleryViewPath}sunburst-drink&edit=1&reset=1)

**Data mining**

Sunburst charts support data mining by default. That means, when a user clicks a sector, it will be used as root node, and there will be a circle in the center for return to parent node. If data mining is not needed, it can be disabled by [series-sunburst.nodeClick](~series-treemap.nodeClick).


## type(string) = 'sunburst'


{{use: component-circular-layout(
    componentName="Sunburst chart",
    defaultRadius="[0, '75%']"
)}}


## data(Array)

The data structure of [series-sunburst.data](~series-sunburst.data) is like tree. For example:

```js
[{
    name: 'parent1',
    value: 10,          // value of parent node can be left unset, and sum of
                        // children values will be used in this case.
                        // If is set, and is larger than sum of children nodes,
                        // the reset can be used for other parts in parent.
    children: [{
        value: 5,
        name: 'child1',
        children: [{
            value: 2,
            name: 'grandchild1',
            itemStyle: {
                // every data can have its own itemStyle,
                // which will overwrites series.itemStyle and level.itemStyle
            },
            label: {
                // label style, the same to above
            }
        }]
    }, {
        value: 3,
        name: 'child2'
    }],
    itemStyle: {
        // itemStyle of parent1, which will not be inherited for children
    },
    label: {
        // label of parent1, which will not be inherited for children
    }
}, {
    name: 'parent2',
    value: 4
}]
```

### value(number)

Value for each item. If contains children, value can be left unset, and sum of children values will be used in this case.

### name(string)

Name displayed in each sector.

### link(string)

Link address that redirects to when this sector is clicked. Only useful when [series-sunburst.nodeClick](~series-treemap.nodeClick) is set to be `'link'`.

See [series-sunburst.data.target](~series-sunburst.data.target).

### target(string) = 'blank'

Like `target` attribute of HTML `<a>`, which can either be `'blank'` or `'self'`. See [series-sunburst.data.link](~series-sunburst.data.link).

### children(Array)

Children nodes, which is recursively defined. In the same format to [series-sunburst.data](~series-sunburst.data).

{{use: partial-sunburst-label-props(
    prefix="##"
)}}

{{use: partial-sunburst-itemStyle-props(
    prefix="##"
)}}

## highlightPolicy(string) = 'descendant'

When mouse hovers a sector, the sector is emphasized. **If `highlightPolicy` is set to be `'descendant'`, then the sector and its descendant will be *highlighted*, and others will be *downplayed*. If `highlightPolicy` is `'ancestor'`, then the sector and its ancestors will be highlighted. If it is set to be `'self'`, then the sector will be highlighted and others downplayed. If it is set to be `'none'`, then others will not be downplayed.**

~[700x350](${galleryViewPath}doc-example/sunburst-highlight-descendant&edit=1&reset=1)

The `highlightPolicy` value above is the default value `'descendant'`. We use `dispatchAction` to highlight certain sector. Target sector will use the style of `emphasis`, and related sectors decided by `highlightPolicy` uses the style of `highlight`, and others use `downplay`.

```js
itemStyle: {
    color: 'yellow',
    borderWidth: 2,
    emphasis: {
        color: 'red'
    },
    highlight: {
        color: 'orange'
    },
    downplay: {
        color: '#ccc'
    }
}
```

If `highlightPolicy` is set to be `'ancestor'`, then the result looks like:

~[700x350](${galleryViewPath}doc-example/sunburst-highlight-ancestor&edit=1&reset=1)



## nodeClick(boolean|string) = 'rootToNode'

The action of clicking a sector, which can be:

+ `false`: nothing happens.
+ `'rootToNode'`: use the clicked sector as root.
+ `'link'`：if [link](~series-sunburst.data.link) is set, the page will redirect to it.



## sort(string|Function) = 'desc'

Sorting method that sectors use based on [`value`](~series-sunburst.data.value), which is the sum of children when not set. The default value `'desc'` states for descending order, while it can also be set to be `'asc'` for ascending order, or `null` for not sorting, or callback function like:

```js
function(nodeA, nodeB) {
    return nodeA.getValue() - nodeB.getValue();
}
```


## renderLabelForZeroData(boolean) = false

If there is no `name`, whether need to render it.

{{use: partial-sunburst-label-props(
    prefix="##"
)}}

{{use: partial-sunburst-itemStyle-props(
    prefix="##"
)}}

{{ use: partial-sunburst-other-state(prefix="#") }}



## levels(Array) = []

**Multiple levels**

Sunburst chart has a leveled structure. To make it convenient, we provide a `levels` option, which is an array. The first element of it is for returning to parent node when data mining. The following elements are for levels from center to outside.

For example, if we don't want the data mining, and want to set the most inside sector to be red, and text to be blue, we can set the option like:

```js
series: {
    // ...
    levels: [
        {
            // Blank setting for data mining
        },
        {
            // The most inside level
            itemStyle: {
                color: 'red'
            },
            label: {
                color: 'blue'
            }
        },
        {
            // The second level
        }
    ]
}
```

{{use: partial-sunburst-label-props(
    prefix="###"
)}}

{{use: partial-sunburst-itemStyle-props(
    prefix="###"
)}}

{{ use: partial-sunburst-other-state(prefix="##") }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing="'cubicOut'",
    defaultAnimationDuration=1000,
    defaultAnimationDurationUpdate=500,
    galleryEditorPath=${galleryEditorPath}
)}}
