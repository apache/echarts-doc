
{{ target: partial-sunburst-label-helper }}

{{ use: partial-label-rotate-tangential(
    prefix = ${prefix},
    defaultRotate = "'radial'"
) }}

The following example shows different `rotate` settings:

~[700x400](${galleryViewPath}sunburst-label-rotate&edit=1&reset=1)

#${prefix} align(string) = 'center'

<ExampleUIControlEnum options="left,center,right" default="center" />

Align of text, which can be `'left'`, `'center'`, or `'right'`. Note that `'left'` stands for inner side, and `'right'` stands for outer side.

{{ if: ${prefix} === '##' }}
~[700x400](${galleryViewPath}doc-example/sunburst-label-align&edit=1&reset=1)
{{ else }}
Same to [label.align](~sunburst.label.align)
{{ /if }}

#${prefix} minAngle(number) = null

<ExampleUIControlAngle min="0" step="1" max="360" />

If angle of data piece is smaller than this value (in degrees), then text is not displayed. This is used for hiding text for small piece of data.

{{ use: partial-label(
    prefix = ${prefix},
    defaultPosition = "'inside'",
    formatter = true,
    formatterExtra = {
        treePathInfo: {
            desc: 'The ancestors of current node (including self)',
            type: 'Array'
        }
    },
    defaultShowLabel = "true",
    noRotate = true,
    noAlign = true
) }}



{{ target: partial-sunburst-label-props }}

#${prefix} label(Object)

To specify the style of the label of the sector.

**Priority：[series.data.label](~series-sunburst.data.label) > [series.levels.label](~series-sunburst.levels.label) > [series.label](~series-sunburst.label)。**

{{ use: partial-label-desc(
    name = 'sunburst chart'
) }}

{{ use: partial-sunburst-label-helper(
    prefix = ${prefix} + '#'
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '#' + ${prefix},
    length2 = ${state} === 'normal',
    minTurnAngle = ${state} === 'normal',
    showAbove = ${state} === 'normal',
    smooth = ${state} === 'normal'
) }}



{{ target: partial-sunburst-itemStyle-props }}

#${prefix} itemStyle(Object)

To specify the style of the sector of the sunburst chart.

You can specify the style of all sectors with [series.itemStyle](~series-sunburst.itemStyle), or specify the style of each level of sectors with [series.levels.itemStyle](~series-sunburst.levels.itemStyle), or specify a specific style for each sector with [series.data.itemStyle](~series-sunburst.data.itemStyle). The priority is from low to high, that is, if [series.data.itemStyle](~series-sunburst.data.itemStyle) is defined, it will override [series.itemStyle](~series-sunburst.itemStyle) and [series.levels.itemStyle](~series-sunburst.levels.itemStyle).

**Priority：[series.data.itemStyle](~series-sunburst.data.itemStyle) > [series.levels.itemStyle](~series-sunburst.levels.itemStyle) > [series.itemStyle](~series-sunburst.itemStyle)。**

{{ use: partial-item-style(
    prefix = ${prefix} + '#',
    useColorPalatte = true,
    defaultBorderWidth = 1,
    defaultBorderColor = "'white'",
    defaultOpacity = 1,
    hasInherit = ${state} === 'emphasis',
    useDecal = ${state} === 'normal'
) }}

{{ use: partial-sector-border-radius(
    prefix = "#" + ${prefix},
    type = "sunburst"
) }}


{{ target: partial-sunburst-state }}

{{ use: partial-sunburst-label-props(
    prefix = ${prefix},
    state = ${state}
) }}

{{ use: partial-sunburst-itemStyle-props(
    prefix = ${prefix},
    state = ${state}
) }}

{{ use: partial-sector-border-radius(
    prefix = "#" + ${prefix},
    type = "sunburst"
) }}



{{ target: series-sunburst }}

# series.sunburst(Object)

[Sunburst Chart](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart,_sunburst_chart,_and_multilevel_pie_chart) is composed of multiple pie charts. From the view of data structure, inner rings are the parent nodes of outer rings. Therefore, it can show the partial-overall relationship as [Pie](~series-pie) charts, and also level relation as [Treemap](~series-treemap) charts.

**For example:**

~[700x500](${galleryViewPath}sunburst-monochrome&edit=1&reset=1)

~[700x700](${galleryViewPath}sunburst-drink&edit=1&reset=1)

**Data Drilling**

The sunburst chart supports data drilling by default, which means when a user clicks a sector, it will be used as the root node, and there will be a circle in the center used to return to the parent node. If data drilling is not needed, it can be disabled by [series-sunburst.nodeClick](~series-sunburst.nodeClick).

## type(string) = 'sunburst'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: component-circular-layout(
    componentName = "Sunburst chart",
    defaultRadius = "[0, '75%']"
) }}

## data(Array)

The data structure of [series-sunburst.data](~series-sunburst.data) is like tree. For example:

```ts
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

Link address that redirects to when this sector is clicked. Only useful when [series-sunburst.nodeClick](~series-sunburst.nodeClick) is set to be `'link'`.

See [series-sunburst.data.target](~series-sunburst.data.target).

### target(string) = 'blank'

Like `target` attribute of HTML `<a>`, which can either be `'blank'` or `'self'`. See [series-sunburst.data.link](~series-sunburst.data.link).

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'normal'
) }}

### emphasis

Emphasis state.

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur

Blur state.

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'blur'
) }}

### select

Select state.

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'select'
) }}

### children(Array)

The children nodes defined recursively. The structure is the same as [series-sunburst.data](~series-sunburst.data).

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'normal'
) }}

{{ use: partial-tooltip-in-series-data() }}

## nodeClick(boolean|string) = 'rootToNode'

<ExampleUIControlEnum default="rootToNode" options="rootToNode,link" />

The action of clicking a sector, which can be:

+ `false`: nothing happens.
+ `'rootToNode'`: use the clicked sector as root.
+ `'link'`：if [link](~series-sunburst.data.link) is set, the page will redirect to it.

## sort(string|Function) = 'desc'

<ExampleUIControlEnum default="desc" options="desc,asc" />

Sorting method that sectors use based on [`value`](~series-sunburst.data.value), which is the sum of children when not set. The default value `'desc'` states for descending order, while it can also be set to be `'asc'` for ascending order, or `null` for not sorting, or callback function like:

```ts
function(nodeA, nodeB) {
    return nodeA.getValue() - nodeB.getValue();
}
```

## renderLabelForZeroData(boolean) = false

<ExampleUIControlBoolean />

If there is no `name`, whether need to render it.

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether the layout of sectors of sunburst chart is clockwise.

## startAngle(number) = 90

<ExampleUIControlAngle step="1" min="0" max="360" default="90" />

The start angle, which range is [0, 360].

{{ use: partial-sunburst-label-props(
    prefix = "#",
    state = 'normal'
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

{{ use: partial-sunburst-itemStyle-props(
    prefix = "#",
    state = 'normal'
) }}

## emphasis

Configurations of emphasis state.

{{ use: partial-focus-blur-scope(
    isTree = true
) }}

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur

Configurations of blur state. Available when [emphasis.focus](~series-sunburst.emphasis.focus) is set.

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'blur'
) }}

## select

Configurations of select state. Available when [selectedMode](~series-sunburst.selectedMode) is set.

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## levels(Array)

**Multiple levels**

Sunburst chart has a leveled structure. To make it convenient, we provide a `levels` option, which is an array. The first element of it is for returning to parent node when data mining. The following elements are for levels from center to outside.

For example, if we don't want the data mining, and want to set the most inside sector to be red, and text to be blue, we can set the option like:

```ts
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

### radius(Array)

{{ use: partial-version(
    version = "5.2.0"
) }}

The inner and outer radius of the current layer, noting that the radius of other layers will not be adaptive.

{{ use: partial-sunburst-label-props(
    prefix = "##"
) }}

{{ use: partial-sunburst-itemStyle-props(
    prefix = "##"
) }}

### emphasis

Emphasis state.

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur

Blur state.

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'blur'
) }}

### select

Select state.

{{ use: partial-sunburst-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series() }}

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = "'cubicOut'",
    defaultAnimationDuration = 1000,
    defaultAnimationDurationUpdate = 500
) }}
