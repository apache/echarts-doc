
{{target: partial-tooltip-introduction}}

**General Introduction:**

tooltip can be configured on different places:

+ Configured on glboal: [tooltip](~tooltip)

+ Configured in a coordinate system: [grid.tooltip](~grid.tooltip), [polar.tooltip](~polar.tooltip), [single.tooltip](~single.tooltip)

+ Configured in a series: [series.tooltip](~series.tooltip)

+ Configured in each item of `series.data`: [series.data.tooltip](~series.data.tooltip)


---








{{target: partial-tooltip-in-series}}

## tooltip

tooltip settings in this series.

{{ use: partial-tooltip-common(scope='series', prefix='##') }}






{{target: partial-tooltip-in-series-data}}

### tooltip

tooltip settings in this series data.

{{ use: partial-tooltip-common(scope='seriesData', prefix='###') }}








{{target: partial-tooltip-scope-tip}}

{{if: ${scope} === 'series'}}
<br>
> **Notice：**series.tooltip only works when [tooltip.trigger](~tooltip.trigger) is `'item'`.<br>
{{elif: ${scope} === 'seriesData'}}
> **Notice：**series.data.tooltip only works when [tooltip.trigger](~tooltip.trigger) is `'item'`.<br>
{{/if}}










{{target: partial-tooltip-common}}

#${prefix} position(string|Array)

{{use: partial-tooltip-scope-tip(scope=${scope})}}

The position of the tooltip's floating layer, which would follow the position of mouse by default.

Options:

+ `Array`

    Display the position of tooltip's floating layer through array, which supports absolute position and relative percentage.

    Example:

    ```js
    // absolute position, which is 10px to the left side and 10px to the top side of the container
    position: [10, 10]
    // relative position, in the exact center of the container
    position: ['50%', '50%']
    ```

+ `Function`

    Callback function in the following form:
    ```js
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
    ```js
    position: function (point, params, dom, rect, size) {
        // fixed at top
        return [point[0], '10%'];
    }
    ```
    Or:
    ```js
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

{{use: partial-tooltip-scope-tip(scope=${scope})}}

The content formatter of tooltip's floating layer which supports string template and callback function.

1. String template

    The template variables are `{a}`, `{b}`, `{c}`, `{d}` and `{e}`, which stands for series name, data name and data value and ect. When [trigger](~tooltip.trigger) is set to be `'axis'`, there may be data from multiple series. In this time, series index can be refered as `{a0}`, `{a1}`, or `{a2}`.

    `{a}`, `{b}`, `{c}`, `{d}` have different meanings for different series types:

    + Line (area) charts, bar (column) charts, K charts: `{a}` for series name, `{b}` for category name, `{c}` for data value, `{d}` for none;

    + Scatter (bubble) charts: `{a}` for series name, `{b}` for data name, `{c}` for data value, `{d}` for none;

    + Map: `{a}` for series name, `{b}` for area name, `{c}` for merging data, `{d}` for none;

    + Pie charts, gauge charts, funnel charts: `{a}` for series name, `{b}` for data item name, `{c}` for data value, `{d}` for percentage.

    **Example: **
    ```js
    formatter: '{b0}: {c0}<br />{b1}: {c1}'
    ```

2. callback function

    The format of callback function:

    ```js
    (params: Object|Array, ticket: string, callback: (ticket: string, html: string)) => string
    ```

    The first parameter `params` is the data that the formatter needs. Its format is shown as follows:
    {{ use: partial-formatter-params-structure(extra = {
        percent: {
            desc: 'the percentage of pie chart',
            type: 'number'
        }
    }) }}
    When [trigger](~tooltip.trigger) is `'axis'`, or when tooltip is triggered by [axisPointer](~xAxis.axisPointer), `params` is the data array of multiple series.

    **Note: **Using array to present all the parameters in ECharts 2.x is not supported anymore.

    The second parameter `ticket` is the asynchronous callback flag which should be used along with the third parameter `callback` when it is used.

    The third parameter `callback` is asynchronous callback. When the content of tooltip is acquired asynchronously, `ticket` and `htm` as introduced above can be used to update tooltip with callback.

    Example:
    ```js
    formatter: function (params, ticket, callback) {
        $.get('detail?name=' + params.name, function (content) {
            callback(ticket, toHTML(content));
        });
        return 'Loading';
    }
    ```

#${prefix} backgroundColor(Color) = 'rgba(50,50,50,0.7)'

{{use: partial-tooltip-scope-tip(scope=${scope})}}

The background color of tooltip's floating layer.

#${prefix} borderColor(Color) = '#333'

{{use: partial-tooltip-scope-tip(scope=${scope})}}

The border color of tooltip's floating layer.

#${prefix} borderWidth(number) = 0

{{use: partial-tooltip-scope-tip(scope=${scope})}}

The border width of tooltip's floating layer.

#${prefix} padding(number) = 5

{{use: partial-tooltip-scope-tip(scope=${scope})}}

{{ use: partial-padding(componentName='The floating layer of tooltip') }}

#${prefix} textStyle(Object)

{{use: partial-tooltip-scope-tip(scope=${scope})}}

The text syle of tooltip's floating layer.

{{ use: partial-text-style(prefix="#" + ${prefix}, defaultColor="'#fff'", defaultFontSize=14) }}

#${prefix} extraCssText(string)

{{use: partial-tooltip-scope-tip(scope=${scope})}}

Extra CSS style for floating layer. The following is an example for adding shadow.

```js
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```
