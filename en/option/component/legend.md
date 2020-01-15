{{target: component-legend}}

# legend(Object)

Legend component.

Legend component shows symbol, color and name of different series. You can click legends to toggle displaying series in the chart.

In ECharts 3, a single echarts instance may contain multiple legend components, which makes it easier for the layout of multiple legend components.

If there have to be too many legend items, [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1) are options to paginate them. Check [legend.type](~legend.type) please.


## type(string)

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


{{use: partial-component-id(prefix="#")}}

## show(boolean) = true


{{use: partial-rect-layout-width-height(componentName="legend")}}

## orient(string) = 'horizontal'

The layout orientation of legend.

Options:
+ 'horizontal'
+ 'vertical'

## align(string) = 'auto'

Legend mrker and text aligning. By default, it automatically calculates from component location and orient. When [left](~legend.left) value of this component is 'right', and the vertical layout ([orient](~legend.orient) is 'vertical'), it would be aligned to 'right'.

Option:
+ 'auto'
+ 'left'
+ 'right'

## padding(number) = 5

{{ use: partial-padding(componentName="legend")}}

## itemGap(number) = 10

The distance between each legend, horizontal distance in horizontal layout, and vertical distance in vertical layout.

## itemWidth(number) = 25

Image width of legend symbol.

## itemHeight(number) = 14

Image height of legend symbol.

## symbolKeepAspect(boolean) = true

Whether to keep aspect for icons (from `series.symbol` or user-defined `legend.data.icon`) in the form of `path://`.

## formatter(string|Function) = null

Formatter is used to format label of legend, which supports string template and callback function.

Example:
```js
// using string template, the template variable is legend name {name}
formatter: 'Legend {name}'
// using callback function
formatter: function (name) {
    return 'Legend ' + name;
}
```

## selectedMode(string|boolean) = true

Selected mode of legend, which controls whether series can be toggled displaying by clicking legends. It is enabled by default, and you may set it to be `false` to disabled it.

Besides, it can be set to `'single'` or `'multiple'`, for single selection and multiple selection.

## inactiveColor(Color) = '#ccc'

Legend color when not selected.

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

{{ use: partial-text-style(componentName='legend', prefix='##') }}

## tooltip(Object)

Tooltip configuration for legend tooltip, which is similar to [tooltip](~tooltip).

## icon(string)

Icon of the legend items.

{{ use: partial-icon }}

## data(Array)

Data array of legend. An array item is usually a `name` representing string. (If it is a [pie chart](~series-pie), it could also be the `name` of a single data in the pie chart) of a series. Legend component would automatically calculate the color and icon according to series. Special string `''` (null string) or `'\n'` (new line string) can be used for a new line.

If `data` is not specified, it will be auto collected from series. For most of series, it will be collected from [series.name](~series.name) or the dimension name specified by `seriesName` of [series.encode](~series.encode). For some types of series like [pie](~series-pie) and [funnel](~series-funnel), it will be collected from the name field of `series.data`.

If you need to set the style for a single item, you may also set the configuration of it. In this case, `name` attribute is used to represent name of `series`.

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

{{ use: partial-icon }}

### textStyle(Object)

Text style of legend.

{{ use: partial-component-common-style(
    componentName='legend',
    prefix='#',
    defaultBorderColor="'#ccc'",
    hasBorderRadius=true
) }}






## scrollDataIndex(number) = 0

It works when [legend.type](~legend.type) is `'scroll'`.

`dataIndex` of the left top most displayed item.

Although the scrolling of legend items can be controlled by calling `setOption` and specifying this property, we suggest that do not controll legend in this way unless necessary (`setOption` might be time-consuming), but just use action [legendScroll](api.html#action.legend.legendScroll) to do that.

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
```js
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

{{ use: partial-icon-image-path }}

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).


### vertical(Array)

The icons of page buttons when [legend.orient](~legend.orient) is `'vertical'`.

It should be an array, `[previous page button, next page button]`, `['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']` by default.

For the each item of the array,

{{ use: partial-icon-image-path }}

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).


## pageIconColor(string) = '#2f4554'

It works when [legend.type](~legend.type) is `'scroll'`.

The color of page buttons.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).


## pageIconInactiveColor(string) = '#aaa'

It works when [legend.type](~legend.type) is `'scroll'`.

The color of page buttons when they are inactive.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).


## pageIconSize(number|Array) = 15

It works when [legend.type](~legend.type) is `'scroll'`.

The size of page buttons. It can be a number, or an array, like `[10, 3]`, represents `[width, height]`.

See [vertically scrollable legend](${galleryEditorPath}pie-legend&edit=1&reset=1) or [horizontally scrollable legend](${galleryEditorPath}radar2&edit=1&reset=1).


## pageTextStyle(Object)

It works when [legend.type](~legend.type) is `'scroll'`.

The text style of page info.

{{ use: partial-simple-text-style(
    componentName='图例页信息',
    prefix='##',
    defaultColor="#333"
)}}

## animation(boolean)

Whether to use animation when page scrolll.

## animationDurationUpdate(number) = 800

Duration of the page scroll animation.


## emphasis(Object)

### selectorLabel(Object)

{{use:partial-label(
    prefix='###',
    defaultShowLabel=true,
    noPosition=true,
    formatter=false,
    formatter1d=false
)}}


## selector(boolean|Array) = false

The selector button in the legend component. Currently includes both a full selection and an inverse selection. The selector button doesn't display by default, the user can manually configure it.

Usage:

```js
selector: [
    {
        type: 'all or inverse',
        // can be any title you like
        title: 'All'
    },
    {
        type: 'inverse',
        title: 'Inv'
    }
]

// or
selector: true

// or
selector: ['all', 'inverse']
```

## selectorLabel(Object)

The text label style of the selector button, which is displayed by default.

{{use:partial-label(
    prefix='##',
    defaultShowLabel=true,
    noPosition=true,
    formatter=false,
    formatter1d=false
)}}

## selectorPosition(string) = 'auto'

The position of the selector button, which can be placed at the end or start of the legend component, the corresponding values are `'end'` and `'start'`. By default, when the legend is laid out horizontally, the selector is placed at the end of it, and when the legend is laid out vertically, the selector is placed at the start of it.

## selectorItemGap(number) = 7

The gap between the selector button.

## selectorButtonGap(number) = 10

The gap between selector button and legend component.
