
{{ target: component-legend }}

# legend(Object)

Legend component.

Legend component shows symbol, color and name of different series. You can click legends to toggle displaying series in the chart.

See [legend.data](~legend.data) for the matching rules between legend items and series or series data items.

A single echarts instance may contain multiple legend components, which makes it easier for the layout of multiple legend components. (since `v3.0.0`)

If there have to be too many legend items, [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1) are options to paginate them. Check [legend.type](~legend.type) please.

## type(string)

<ExampleUIControlEnum options="plain,scroll" />

Type of legend. Optional values:

+ `'plain'`: Simple legend. (default)
+ `'scroll'`: Scrollable legend. It helps when too many legend items needed to be shown.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

When `'scroll'` used, these options below can be used for detailed configuration:

+ [legend.scrollDataIndex](~legend.scrollDataIndex)
+ [legend.pageButtonItemGap](~legend.pageButtonItemGap)
+ [legend.pageButtonGap](~legend.pageButtonGap)
+ [legend.pageButtonPosition](~legend.pageButtonPosition)
+ [legend.pageFormatter](~legend.pageFormatter)
+ [legend.pageIcons](~legend.pageIcons)
+ [legend.pageIconColor](~legend.pageIconColor)
+ [legend.pageIconInactiveColor](~legend.pageIconInactiveColor)
+ [legend.pageIconSize](~legend.pageIconSize)
+ [legend.pageTextStyle](~legend.pageTextStyle)
+ [legend.animation](~legend.animation)
+ [legend.animationDurationUpdate](~legend.animationDurationUpdate)

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

{{ use: partial-rect-layout-width-height(
    componentName = "legend"
) }}

{{ use: partial-coord-sys(
    version = '6.0.0',
    nonSeriesComponentMainType = "legend",
    coordSysDefault = "'none'",
    matrix = true,
    calendar = true,
    none = true
) }}

## orient(string) = 'horizontal'

<ExampleUIControlEnum options="vertical,horizontal" default="horizontal" />

The layout orientation of legend.

Options:
+ 'horizontal'
+ 'vertical'

## align(string) = 'auto'

<ExampleUIControlEnum options="auto,left,right" default="auto" />

Legend marker and text aligning. By default, it automatically calculates from component location and orientation. When [left](~legend.left) value of this component is 'right', and the vertical layout ([orient](~legend.orient) is 'vertical'), it would be aligned to 'right'.

Option:
+ 'auto'
+ 'left'
+ 'right'

## padding(number|Array) = 5

<ExampleUIControlVector dims="T,R,B,L" default="5" min="0" step="0.5" />

{{ use: partial-padding(
    componentName = "legend"
) }}

## itemGap(number) = 10

<ExampleUIControlNumber default="10" min="0" step="0.5" />

The distance between each legend, horizontal distance in horizontal layout, and vertical distance in vertical layout.

## itemWidth(number) = 25

<ExampleUIControlNumber default="25" min="0" step="0.5" />

Image width of legend symbol.

## itemHeight(number) = 14

<ExampleUIControlNumber default="14" min="0" step="0.5" />

Image height of legend symbol.

{{ use: partial-legend-style(
    name = "Legend",
    prefix = "#"
) }}

## symbolRotate(number|string) = 'inherit'

Rotation of the symbol, which can be `number | 'inherit'`. If it's `'inherit'`, `symbolRotate` of the series will be used.

## formatter(string|Function) = null

Formatter is used to format label of legend, which supports string template and callback function.

Example:
```ts
// using string template, the template variable is legend name {name}
formatter: 'Legend {name}'
// using callback function
formatter: function (name) {
    return 'Legend ' + name;
}
```

## selectedMode(string|boolean) = true

<ExampleUIControlBoolean options="true,false,single,multiple" />

Selected mode of legend, which controls whether series can be toggled displaying by clicking legends. It is enabled by default, and you may set it to be `false` to disable it.

Besides, it can be set to `'single'` or `'multiple'`, for single selection and multiple selection.

## inactiveColor(Color) = '#ccc'

Legend color when not selected.

## inactiveBorderColor(Color) = '#ccc'

Legend border color when not selected.

## inactiveBorderWidth(number|string) = 'auto'

Legend border width when not selected.

If it is `'auto'`, the border width is set to be 2 if there is border width in the series, 0 elsewise.

If it is `'inherit'`, it always takes the border width of the series.

## selected(Object)

State table of selected legend.

example:
```
selected: {
    // selected'series 1'
    'series 1': true,
    // unselected'series 2'
    'series 2': false
}
```

## textStyle(Object)

Legend text style.

{{ use: partial-text-style(
    componentName = 'legend',
    prefix = '##',
    defaultColor = "#333",
    noAlign = true,
    noVerticalAlign = true
) }}

## tooltip(Object)

Tooltip configuration for legend tooltip, which is similar to [tooltip](~tooltip).

## icon(string)

<ExampleUIControlIcon />

Icon of the legend items.

{{ use: partial-icon() }}

## data(Array)

<br>

**Explicitly Specify `legend.data`:**

`legend.data` is an array. An array item can be a string (representing `name`) or an object (containing a `name` field).

If the `name` of an array item is a special string `''` or `'\n'`, this array item is only used to create a line break.
```js
legend: {
    data: ['a', 'b', '\n', 'c', 'd']
    // The final displayed items are (line wrapped):
    //  'a' 'b'
    //  'c' 'd'
}
```

If the `name` of an array item dose not match any `LEGEND_TARGET`, this legend item is ignored. (See also the description of `LEGEND_TARGET` below.)

<br>

**Automatically Collect `legend.data`:**

If `legend.data` is not explicitly specified, it is automatically collected from `series` or `dataset`.
- It is basically collected from [series.name](~series.name).
- It can also collect from `dataset` according to the dimension specified in `seriesName` field in [series.encode](~series.encode).
- Some series supports `LEGEND_CONTROL_SERIES_DATA_ITEM` (see details below). It is collected from the `name` field (if present) of each `series.data` item. For a single series, if these `name`s from `series.data` are collected, series name is no longer collected.

Some examples:
```ts
option = {
    legend: {/* No `legend.data` field is specified. */},
    xAxis: {},
    yAxis: {},
    series: [{
        type: 'line', name: 'lineA', data: [11, 22]
    }, {
        type: 'line', name: 'lineB', data: [111, 222]
    }, {
        type: 'pie', name: 'pieC',
        data: [
            {name: 'pieItemA', value: 9},
            {name: 'pieItemB', value: 8},
            {name: 'pieItemC', value: 7},
        ]
    }],
}
// The final displayed legend items are:
//  'lineA' 'lineB' 'pieItemA' 'pieItemB' 'pieItemC'
```
```ts
option = {
    legend: {/* No `legend.data` field is specified. */},
    dataset: {
        source: [
            [null, 'nameH', 'nameI', 'nameJ', 'nameK'],
            ['2012-01', 32, 65, 71, 31],
            ['2012-02', 41, 67, 89, 23],
            ['2012-03', 58, 61, 97, 12],
            ['2012-04', 67, 73, 105, 9],
            ['2012-05', 72, 67, 122, 18],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [{
        type: 'bar',
        // Retrieve `seriesName` from dataset column with index 1; get 'nameH'.
        encode: {x: 0, y: 1, seriesName: 1}
    }, {
        type: 'bar',
        // Retrieve `seriesName` from dataset column with index 3; get 'nameJ'.
        encode: { x: 0, y: 3, seriesName: 3 }
    }, {
        type: 'bar',
        // Retrieve `seriesName` from dataset column with index 3; get 'nameI'.
        encode: { x: 0, y: 2, seriesName: 2 }
    }]
};
// The final displayed legend items are:
//  'nameH' 'nameJ' 'nameI'
```

<br>

**LEGEND_TARGET and LEGEND_MATCHING_RULES:**

A legend item can control the visibility of a entire series or a series data item (see `LEGEND_CONTROL_SERIES_DATA_ITEM` below). They can be called as `LEGEND_TARGET`. A `LEGEND_TARGET` is under control if and only if the `name` from `legend.data` (either explicitly specified or automatically collected) matches the name from `LEGEND_TARGET`, i.e., matches series names or series data item names.

This mapping is allowed to be many-to-many. For example, if multiple series share the same series name, they can be controlled by a single legend item.

<br>

**LEGEND_CONTROL_SERIES_DATA_ITEM:**

These series support that legend items control each series data items: [pie](~series-pie), [funnel](~series-funnel), [chord](~series-chord), [graph](~series-graph), [radar](~series-radar) and [themeRiver](~series-themeRiver). They are matched according to `name` fields of legend items and series data items.

<br>

**Legend Item Styles:**

If you need to set the style for a single item, you may also set the configuration of it.

Example:
```
data: [{
    name: 'series 1',
    // compulsorily set icon as a circle
    icon: 'circle',
    // set up the text in red
    textStyle: {
        color: 'red'
    }
}]
```

### name(string)

Name of legend, which should be the `name` value of a certain series. If it is a pie chart, legend name can also be the name of a single data item.

### icon(string)

Icon of the legend.

{{ use: partial-icon() }}

{{ use: partial-legend-style(
    name = "Legend Item",
    prefix = "##"
) }}

### inactiveColor(Color) = '#ccc'

Legend color when not selected.

### inactiveBorderColor(Color) = '#ccc'

Legend border color when not selected.

### inactiveBorderWidth(number|string) = 'auto'

Legend border width when not selected.

If it is `'auto'`, the border width is set to be 2 if there is border width in the series, 0 elsewise.

If it is `'inherit'`, it always takes the border width of the series.

### symbolRotate(number|string) = 'inherit'

Rotation of the symbol, which can be `number | 'inherit'`. If it's `'inherit'`, `symbolRotate` of the series will be used.

### textStyle(Object)

Text style of legend.

{{ use: partial-simple-text-style(
    prefix: '###'
) }}

{{ use: partial-component-common-style(
    componentName = 'legend',
    prefix = '#',
    defaultBorderColor = "'#ccc'",
    hasBorderRadius = true
) }}

## scrollDataIndex(number) = 0

It works when [legend.type](~legend.type) is `'scroll'`.

`dataIndex` of the left top most displayed item.

Although the scrolling of legend items can be controlled by calling `setOption` and specifying this property, we suggest that do not control legend in this way unless necessary (`setOption` might be time-consuming), but just use action [legendScroll](api.html#action.legend.legendScroll) to do that.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageButtonItemGap(number) = 5

It works when [legend.type](~legend.type) is `'scroll'`.

The gap between page buttons and page info text.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageButtonGap(number) = null

It works when [legend.type](~legend.type) is `'scroll'`.

The gap between page buttons and legend items.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageButtonPosition(string) = 'end'

It works when [legend.type](~legend.type) is `'scroll'`.

The position of page buttons and page info. Optional values:

+ `'start'`: on the left or top.
+ `'end'`: on the right or bottom.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageFormatter(string|Function) = '{current}/{total}'

It works when [legend.type](~legend.type) is `'scroll'`.

Page info formatter. It is `'{current}/{total}'` by default, where `{current}` is current page number (start from 1), and `{total}` is the total page number.

If `pageFormatter` is a function, it should return a string. The parameters is:
```ts
{
    current: number
    total: number
}
```


See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageIcons(Object)

It works when [legend.type](~legend.type) is `'scroll'`.

The icons of page buttons.

### horizontal(Array)

The icons of page buttons when [legend.orient](~legend.orient) is `'horizontal'`.

It should be an array, `[previous page button, next page button]`, `['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z']` by default.

For the each item of the array,

{{ use: partial-icon-image-path() }}

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

### vertical(Array)

The icons of page buttons when [legend.orient](~legend.orient) is `'vertical'`.

It should be an array, `[previous page button, next page button]`, `['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']` by default.

For the each item of the array,

{{ use: partial-icon-image-path() }}

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageIconColor(string) = '#2f4554'

<ExampleUIControlColor default="#2f4554" />

It works when [legend.type](~legend.type) is `'scroll'`.

The color of page buttons.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageIconInactiveColor(string) = '#aaa'

<ExampleUIControlColor default="#aaa" />

It works when [legend.type](~legend.type) is `'scroll'`.

The color of page buttons when they are inactive.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageIconSize(number|Array) = 15

<ExampleUIControlVector default="15,15" dims="w,h" />

It works when [legend.type](~legend.type) is `'scroll'`.

The size of page buttons. It can be a number, or an array, like `[10, 3]`, represents `[width, height]`.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).

## pageTextStyle(Object)

It works when [legend.type](~legend.type) is `'scroll'`.

The text style of page info.

{{ use: partial-simple-text-style(
    componentName = '图例页信息',
    prefix = '##',
    defaultColor = "#333"
) }}

## animation(boolean)

<ExampleUIControlBoolean default="true" />

Whether to use animation when page scrolls.

## animationDurationUpdate(number) = 800

<ExampleUIControlNumber min="0" default="800" step="20" />

Duration of the page scroll animation.

## emphasis(Object)

### selectorLabel(Object)

{{ use: partial-version(
    version = "4.4.0"
) }}

{{ use: partial-label(
    prefix = '###',
    defaultShowLabel = true,
    noPosition = true,
    formatter = false,
    formatter1d = false
) }}

## selector(boolean|Array) = false

{{ use: partial-version(
    version = "4.4.0"
) }}

The selector button in the legend component. Currently, there are two types of button:

- `all`: Select All
- `inverse`: Inverse Selection

The selector button doesn't display by default, you need to enable it manually as follows.

```ts
selector: [
    {
        type: 'all',
        // can be any title you like
        title: 'All'
    },
    {
        type: 'inverse',
        // can be any title you like
        title: 'Inv'
    }
]

// or
selector: true

// or
selector: ['all', 'inverse']
```

## selectorLabel(Object)

{{ use: partial-version(
    version = "4.4.0"
) }}

The text label style of the selector button, which is displayed by default.

{{ use: partial-label(
    prefix = '##',
    defaultShowLabel = true,
    noPosition = true,
    formatter = false,
    formatter1d = false
) }}

## selectorPosition(string) = 'auto'

<ExampleUIControlEnum options="auto,start,end" />

{{ use: partial-version(
    version = "4.4.0"
) }}

The position of the selector button, which can be placed at the end or start of the legend component, the corresponding values are `'end'` and `'start'`. By default, when the legend is laid out horizontally, the selector is placed at the end of it, and when the legend is laid out vertically, the selector is placed at the start of it.

## selectorItemGap(number) = 7

<ExampleUIControlNumber min="0" default="7" step="0.5" />

{{ use: partial-version(
    version = "4.4.0"
) }}

The gap between the selector button.

## selectorButtonGap(number) = 10

<ExampleUIControlNumber min="0" default="10" step="0.5" />

{{ use: partial-version(
    version = "4.4.0"
) }}

The gap between selector button and legend component.


## triggerEvent(boolean) = false

{{ use: partial-trigger-event-common-content(
    version = "6.0.0"
) }}

Parameters of the event include:

```ts
{
    componentType: 'legend';
    // legend component index. (based on echarts option)
    componentIndex: number;
    // The `name` of this legend item, which controls the
    // visibility of LEGEND_TARGET.
    // See `legend.data` for more details.
    value: string;
    // The index of the triggering legend item.
    dataIndex: number;
    // The index of the first series that matches
    // this legend item. (based on echarts option)
    seriesIndex: number;
}
```


{{ target: partial-legend-style }}

#${prefix} itemStyle(Object)

${name} item style. If its children have values as `'inherit'`, the values are inherited from corresponding series options.

{{ use: partial-item-style(
    prefix = '#' + ${prefix},
    defaultColor = 'inherit',
    defaultBorderColor = 'inherit',
    defaultBorderWidth = 'auto',
    defaultBorderWidthDesc = 'When its value is `"auto"`, if there is `borderWidth` in series, then it is set to be 2, otherwise, it is set to be 0. If its value is `"inherit"`, then the `borderWidth` of the series are always used',
    defaultType = 'inherit',
    defaultOpacity = 'inherit',
    defaultShadowBlur = 0,
    defaultShadowColor = 'null',
    defaultShadowOffsetX = 0,
    defaultShadowOffsetY = 0,
    useDecal = true,
    defaultDecal = 'inherit',
    defaultDashOffset = 'inherit',
    defaultCap = 'inherit',
    defaultJoin = 'inherit',
    defaultMiterLimit = 'inherit'
) }}

#${prefix} lineStyle(Object)

${name} line style. If its children have values as `'inherit'`, the values are inherited from corresponding series options.

{{ use: partial-line-style(
    prefix = '#' + ${prefix},
    defaultWidth = 'auto',
    defaultColor = 'inherit',
    defaultOpacity = 'inherit',
    defaultType = 'inherit',
    defaultCap = 'inherit',
    defaultJoin = 'inherit',
    defaultDashOffset = 'inherit',
    defaultMiterLimit = 'inherit',
    defaultShadowBlur = 'inherit',
    defaultShadowOffsetX = 0,
    defaultShadowOffsetY = 0
) }}

##${prefix} inactiveColor(Color) = '#ccc'

Legend line stroke color when not selected.

##${prefix} inactiveWidth(number) = 2

Legend line stroke width when not selected.
