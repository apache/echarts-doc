
{{ target: partial-tooltip-introduction }}

**General Introduction:**

tooltip can be configured on different places:

+ Configured on global: [tooltip](~tooltip)

+ Configured in a coordinate system: [grid.tooltip](~grid.tooltip), [polar.tooltip](~polar.tooltip), [single.tooltip](~single.tooltip)

+ Configured in a series: [series.tooltip](~series.tooltip)

+ Configured in each item of `series.data`: [series.data.tooltip](~series.data.tooltip)



{{ target: partial-tooltip-in-coords }}

## tooltip(Object)

{{ if: ${version} }}
{{ use: partial-version(
    version = '5.1.0'
) }}
{{ /if }}

tooltip settings in the coordinate system component.

{{ use: partial-tooltip-introduction() }}

{{ use: partial-tooltip-coords-common(
    prefix = '##',
    noAxis = ${noAxis}
) }}

{{ use: partial-tooltip-common(
    scope = 'coordSys',
    prefix = '##'
) }}



{{ target: partial-tooltip-in-coords-item }}

### tooltip(Object)

{{ if: ${version} }}
{{ use: partial-version(
    version = '5.1.0'
) }}
{{ /if }}

tooltip settings in this ${componentItemDesc}.

{{ use: partial-tooltip-coords-common(
    prefix = '###',
    noAxis = ${noAxis}
) }}

{{ use: partial-tooltip-common(
    scope = 'coordSysItem',
    prefix = '###'
) }}



{{ target: partial-tooltip-in-series }}

## tooltip(Object)

tooltip settings in this series.

{{ use: partial-tooltip-common(
    scope = 'series',
    prefix = '##'
) }}



{{ target: partial-tooltip-in-series-data }}

### tooltip(Object)

tooltip settings in this series data.

{{ use: partial-tooltip-common(
    scope = 'seriesData',
    prefix = '###'
) }}



{{ target: partial-tooltip-scope-tip }}

{{ if: ${scope} === 'series' }}
> **Notice：**series.tooltip only works when [tooltip.trigger](~tooltip.trigger) is `'item'`.<br>

{{ elif: ${scope} === 'seriesData' }}
> **Notice：**series.data.tooltip only works when [tooltip.trigger](~tooltip.trigger) is `'item'`.<br>
{{ /if }}



{{ target: partial-tooltip-coords-common }}

#${prefix} show(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show the tooltip component.

{{ if: !${noAxis} }}
including tooltip floating layer and [axisPointer](~tooltip.axisPointer).
{{ /if }}

{{ if: !${noAxis} }}
#${prefix} trigger(string) = 'item'

<ExampleUIControlEnum options="item,axis,none" default="item" />

Type of triggering.

Options:
+ `'item'`

    Triggered by data item, which is mainly used for charts that don't have a category axis like scatter charts or pie charts.

+ `'axis'`

    Triggered by axes, which is mainly used for charts that have category axes, like bar charts or line charts.

   ECharts 2.x only supports axis trigger for category axis. In ECharts 3, it is supported for all types of axes in [grid](~grid) or [polar](~polar). Also, you may assign axis with [axisPointer.axis](~tooltip.axisPointer.axis).

+ `'none'`

    Trigger nothing.

#${prefix} axisPointer(Object)

Configuration item for axisPointer.

`tooltip.axisPointer` is like syntactic sugar of axisPointer settings on axes (for example, [xAxis.axisPointer](~xAxis.axisPointer) or [angleAxis.axisPointer](~angleAxis.axisPointer)). More detailed features can be configured on `someAxis.axisPointer`. But in common cases, using `tooltip.axisPointer` is more convenient.

> **Notice:** configurations of `tooltip.axisPointer` has lower priority than that of `someAxis.axisPointer`.

---

{{ use: partial-axisPointer-introduction() }}

##${prefix} type(string) = 'line'

<ExampleUIControlEnum options="none,line,shadow,cross" default="line" />

Indicator type.

Options:
+ `'line'` line indicator.

+ `'shadow'` shadow crosshair indicator.

+ `'none'` no indicator displayed.

+ `'cross'` crosshair indicator, which is actually the shortcut of enable two axisPointers of two orthometric axes.

##${prefix} axis(string) = 'auto'

The coordinate axis, which could be `'x'`, `'y'`, `'radius'`, or `'angle'`. By default, each coordinate system will automatically chose the axes whose will display its axisPointer (category axis or time axis is used by default).

{{ use: partial-axisPointer-tooltip-shared(
    prefix = "#" + ${prefix}
) }}

##${prefix} crossStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'cross'`.

{{ use: partial-line-style(
    prefix = "##" + ${prefix},
    defaultColor = "#555",
    defaultWidth = 1,
    defaultType = "dashed"
) }}

{{ use: partial-animation(
    prefix = '#' + ${prefix},
    defaultAnimationEasingUpdate = 'exponentialOut',
    defaultAnimationDurationUpdate = 200
) }}
{{ /if }}



{{ target: partial-tooltip-common }}

#${prefix} position(string|Array)

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

The position of the tooltip's floating layer, which would follow the position of mouse by default.

Options:

+ `Array`

    Display the position of tooltip's floating layer through array, which supports absolute position and relative percentage.

    Example:

    ```ts
    // absolute position, which is 10px to the left side and 10px to the top side of the container
    position: [10, 10]
    // relative position, in the exact center of the container
    position: ['50%', '50%']
    ```

+ `Function`

    Callback function in the following form:
    ```ts
    (point: Array, params: Object|Array.<Object>, dom: HTMLDomElement, rect: Object, size: Object) => Array
    ```

    **Parameters:**<br>
    point: Mouse position.<br>
    param: The same as formatter.<br>
    dom: The DOM object of tooltip.<br>
    rect: It is valid only when mouse is on graphic elements, which stands for a bounding box with `x`, `y`, `width`, and `height`.<br>
    size: The size of dom echarts container. For example: `{contentSize: [width, height], viewSize: [width, height]}`. <br>

    **Return:**<br>
    Return value is an array standing for tooltip position, which can be absolute pixels, or relative percentage.<br>
    Or can be an object, like `{left: 10, top: 30}`, or `{right: '20%', bottom: 40}`.<br>

    For example:
    ```ts
    position: function (point, params, dom, rect, size) {
        // fixed at top
        return [point[0], '10%'];
    }
    ```
    Or:
    ```ts
    position: function (pos, params, dom, rect, size) {
        // tooltip will be fixed on the right if mouse hovering on the left,
        // and on the left if hovering on the right.
        var obj = {top: 60};
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
        return obj;
    }
    ```

+ `'inside'`

   Center position of the graphic element where the mouse is in, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'top'`

    Top position of the graphic element where the mouse is in, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'left'`

    Left position of the graphic element where the mouse is in, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'right'`

    Right position of the graphic element where the mouse is in, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'bottom'`

    Bottom position of the graphic element where the mouse is in, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

#${prefix} formatter(string|Function)

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

The content formatter of tooltip's floating layer which supports string template and callback function.

**1. String template**

The template variables are `{a}`, `{b}`, `{c}`, `{d}` and `{e}`, which stands for series name, data name and data value and ect. When [trigger](~tooltip.trigger) is set to be `'axis'`, there may be data from multiple series. In this time, series index can be referred as `{a0}`, `{a1}`, or `{a2}`.

`{a}`, `{b}`, `{c}`, `{d}` have different meanings for different series types:

+ Line (area) charts, bar (column) charts, K charts: `{a}` for series name, `{b}` for category name, `{c}` for data value, `{d}` for none;

+ Scatter (bubble) charts: `{a}` for series name, `{b}` for data name, `{c}` for data value, `{d}` for none;

+ Map: `{a}` for series name, `{b}` for area name, `{c}` for merging data, `{d}` for none;

+ Pie charts, gauge charts, funnel charts: `{a}` for series name, `{b}` for data item name, `{c}` for data value, `{d}` for percentage.

**Example: **
```ts
formatter: '{b0}: {c0}<br />{b1}: {c1}'
```


**2. Callback function**

The format of callback function:

```ts
(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) => string | HTMLElement | HTMLElement[]
```

The first parameter `params` is the data that the formatter needs. Its format is shown as follows:

{{ use: partial-formatter-params-structure(
    extra = {
        percent: {
            desc: 'The percentage of current data item in the pie/funnel series',
            type: 'number'
        },
        treePathInfo: {
            desc: 'The ancestors of current node in the sunburst series (including self)',
            type: 'Array'
        },
        treeAncestors: {
            desc: 'The ancestors of current node in the tree/treemap series (including self)',
            type: 'Array'
        }
    }
) }}

When [trigger](~tooltip.trigger) is `'axis'`, or when tooltip is triggered by [axisPointer](~xAxis.axisPointer), `params` is the data array of multiple series. The content of each item of the array is the same as above. Besides,

{{ use: partial-formatter-params-structure() }}

**Note: **Using array to present all the parameters in ECharts 2.x is not supported anymore.

The second parameter `ticket` is the asynchronous callback flag which should be used along with the third parameter `callback` when it is used.

The third parameter `callback` is asynchronous callback. When the content of tooltip is acquired asynchronously, `ticket` and `htm` as introduced above can be used to update tooltip with callback.

Example:
```ts
formatter: function (params, ticket, callback) {
    $.get('detail?name=' + params.name, function (content) {
        callback(ticket, toHTML(content));
    });
    return 'Loading';
}
```

#${prefix} valueFormatter(string)

{{ use: partial-version(
    version = '5.3.0'
) }}

Callback function for formatting the value section in tooltip.

Interface:
```ts
(value: number | string) => string
```

Example:
```ts
// Add $ prefix
valueFormatter: (value) => '$' + value.toFixed(2)
```

#${prefix} backgroundColor(Color) = 'rgba(50,50,50,0.7)'

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

The background color of tooltip's floating layer.

#${prefix} borderColor(Color) = '#333'

<ExampleUIControlColor default="#333" />

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

The border color of tooltip's floating layer.

#${prefix} borderWidth(number) = 0

<ExampleUIControlNumber default="0" step="0.5" />

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

The border width of tooltip's floating layer.

#${prefix} padding(number) = 5

<ExampleUIControlVector dims="T,R,B,L" default="5,5,5,5" />

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

{{ use: partial-padding(
    componentName = 'The floating layer of tooltip'
) }}

#${prefix} textStyle(Object)

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

The text style of tooltip's floating layer.

{{ use: partial-simple-text-style(
    prefix = "#" + ${prefix},
    defaultColor = "'#fff'",
    defaultFontSize = 14
) }}

#${prefix} extraCssText(string)

<ExampleUIControlText />

{{ use: partial-tooltip-scope-tip(
    scope = ${scope}
) }}

Extra CSS style for floating layer. The following is an example for adding shadow.

```ts
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

