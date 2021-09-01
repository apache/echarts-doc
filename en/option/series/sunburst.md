
{{ target: partial-sunburst-label-helper }}

#${prefix} rotate(string|number) = 'radial'

<ExampleUIControlEnum options="radial,tangential" default="radial" />

{{ if: ${prefix} === '##' }}
If it is `number` type, then is stands for rotation, from -90 degrees to 90 degrees, and positive values stand for counterclockwise.

Besides, it can be string `'radial'`, standing for radial rotation; or `'tangential'`, standing for tangential rotation.

By default, it is `'radial'`. If no rotation is wanted, it can be set to `0`.

The following example shows different `rotate` settings:

~[700x400](${galleryViewPath}sunburst-label-rotate&edit=1&reset=1)

Same to [label.rotate](~sunburst.label.rotate)
{{ else }}
同 [label.rotate](~sunburst.label.rotate)
{{ /if }}

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
    defaultShowLabel = "true",
    noRotate = true,
    noAlign = true
) }}



{{ target: partial-sunburst-label-props }}

#${prefix} label(Object)

`label` 描述了每个扇形块中，文本标签的样式。

**优先级：[series.data.label](~series-sunburst.data.label) > [series.levels.label](~series-sunburst.levels.label) > [series.label](~series-sunburst.label)。**

{{ use: partial-label-desc() }}

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

旭日图扇形块的样式。

可以在 [series.itemStyle](~series-sunburst.itemStyle) 定义所有扇形块的样式，也可以在 [series.levels.itemStyle](~series-sunburst.levels.itemStyle) 定义每一层扇形块的样式，还可以在 [series.data.itemStyle](~series-sunburst.data.itemStyle) 定义每个扇形块单独的样式，这三者的优先级从低到高。也就是说，如果定义了 [series.data.itemStyle](~series-sunburst.data.itemStyle)，将会覆盖 [series.itemStyle](~series-sunburst.itemStyle) 和 [series.levels.itemStyle](~series-sunburst.levels.itemStyle)。

**优先级：[series.data.itemStyle](~series-sunburst.data.itemStyle) > [series.levels.itemStyle](~series-sunburst.levels.itemStyle) > [series.itemStyle](~series-sunburst.itemStyle)。**

{{ use: partial-item-style(
    prefix = ${prefix} + '#',
    useColorPalatte = true,
    defaultBorderWidth = 1,
    defaultBorderColor = "'white'",
    defaultOpacity = 1,
    hasInherit = ${state} === 'emphasis',
    useDecal = ${state} === 'normal'
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



{{ target: series-sunburst }}

# series.sunburst(Object)

[Sunburst Chart](https://en.wikipedia.org/wiki/Pie_chart#Ring_chart_/_Sunburst_chart_/_Multilevel_pie_chart) is composed of multiple pie charts. From the view of data structure, inner rings are the parent nodes of outer rings. Therefore, it can show the partial-overall relationship as [Pie](~series-pie) charts, and also level relation as [Treemap](~series-treemap) charts.

**For example:**

~[700x500](${galleryViewPath}sunburst-monochrome&edit=1&reset=1)

~[700x700](${galleryViewPath}sunburst-drink&edit=1&reset=1)

**Data mining**

Sunburst charts support data mining by default. That means, when a user clicks a sector, it will be used as root node, and there will be a circle in the center for return to parent node. If data mining is not needed, it can be disabled by [series-sunburst.nodeClick](~series-treemap.nodeClick).

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

{{ use: partial-sunburst-state(
    prefix = "##",
    state = 'normal'
) }}

## labelLayout(Object|Function)

{{ use: partial-sunburst-state(
    prefix = "#",
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

子节点，递归定义，格式同 [series-sunburst.data](~series-sunburst.data)。

## nodeClick(boolean|string) = 'rootToNode'

<ExampleUIControlEnum default="rootToNode" options="rootToNode,link" />

The action of clicking a sector, which can be:

+ `false`: nothing happens.
+ `'rootToNode'`: use the clicked sector as root.
+ `'link'`：if [link](~series-sunburst.data.link) is set, the page will redirect to it.

## sort(string|Function) = 'desc'

<ExampleUIControlEnum default="desc" options="desc,asc" />

Sorting method that sectors use based on [`value`](~series-sunburst.data.value), which is the sum of children when not set. The default value `'desc'` states for descending order, while it can also be set to be `'asc'` for ascending order, or `null` for not sorting, or callback function like:

```js
function(nodeA, nodeB) {
    return nodeA.getValue() - nodeB.getValue();
}
```

## renderLabelForZeroData(boolean) = false

<ExampleUIControlBoolean />

If there is no `name`, whether need to render it.

{{ use: partial-sunburst-label-props(
    prefix = "#",
    state = 'normal'
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

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = "'cubicOut'",
    defaultAnimationDuration = 1000,
    defaultAnimationDurationUpdate = 500
) }}

