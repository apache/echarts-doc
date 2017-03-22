
{{target: component-tooltip}}

# tooltip(Object)

Tooltip component.

---

{{use: partial-tooltip-introduction}}

## show(boolean) = true

Whether to show the tooltip component, including tooltip floating layer and [axisPointer](~tooltip.axisPointer).

## showContent(boolean) = true

Whether to show the tooltip floating layer, whose default value is true. It should be configurated to be `false`, if you only need tooltip to trigger the event or show the axisPointer without content.

## trigger(string) = 'item'

Type of triggering.

Options:
+ `'item'`

    Triggered by data item, which is mainly used for charts that don't have a category axis like scatter charts or pie charts.

+ `'axis'`

    Triggered by axes, which is mainly used for charts that have category axes, like bar charts or line charts.

   ECharts 2.x only supports axis trigger for category axis. In ECharts 3, it is supported for all types of axes in [grid](~grid) or [polar](~polar). Also, you may assign axis with [axisPointer.axis](~tooltip.axisPointer.axis).

+ `'none'`

    Trigger nothing.

## triggerOn(string) = 'mousemove|click'

Conditions to trigger tooltip. Options:

+ `'mousemove'`

    Trigger when mouse moves.

+ `'click'`

    Trigger when mouse clicks.

+ `'mousemove|click'`

    Trigger when mouse clicks and moves.

+ `'none'`

    Do not triggered by `'mousemove'` and `'click'`. Tooltip can be triggered and hidden manually by calling [action.tooltip.showTip](api.html#action.tooltip.showTip) and [action.tooltip.hideTip](api.html#action.tooltip.hideTip). It can also be triggered by [axisPointer.handle](~xAxis.axisPointer.handle) in this case.

This attribute is new to ECharts 3.0.

## alwaysShowContent(boolean) = false

Whether to show tooltip content all the time. By default, it will be hidden [after some time](~tooltip.hideDelay). It can be set to be `true` to preserve displaying.

This attribute is newly added to ECharts 3.0.

## showDelay(number) = 0

Delay time for showing tooltip, in ms. No delay by default, and it is not recommended to set. Only valid when [triggerOn](~tooltip.triggerOn) is set to be `'mousemove'`.

## hideDelay(number) = 100

Delay time for hiding tooltip, in ms. It will be invalid when [alwaysShowContent](~tooltip.alwaysShowContent) is `true`.

## enterable(boolean) = true

Whether mouse is allowed to enter the floating layer of tooltip, whose default value is false. If you need to interact in the tooltip like with links or buttons, it can be set as `true`.

## position(string|Array)

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

## confine(boolean) = false

Whether confine tooltip content in the view rect of chart instance.

Useful when tooltip is cut because of `'overflow: hidden'` set on outer dom of chart instance, or because of narrow screen on mobile.

## transitionDuration(number) = 0.4

The transition duration of tooltip's animation, in seconds. When it is set to be 0, it would move closely with the mouse.

## formatter(string|Function)

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

## backgroundColor(Color) = 'rgba(50,50,50,0.7)'

The background color of tooltip's floating layer.

## borderColor(Color) = '#333'

The border color of tooltip's floating layer.

## borderWidth(number) = 0

The border width of tooltip's floating layer.

## padding(number) = 5

{{ use: partial-padding(componentName='The floating layer of tooltip') }}

## textStyle(Object)

The text syle of tooltip's floating layer.


{{ use: partial-text-style(prefix="##", defaultColor="'#fff'", defaultFontSize=14) }}

## extraCssText(string)

Extra CSS style for floating layer. The following is an example for adding shadow.

```js
extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
```

## axisPointer(Object)

Configuration item for axis indicator.

`tooltip.axisPointer` is like syntactic sugar of axisPointer settings on axes (for example, [xAxis.axisPointer](~xAxis.axisPointer) or [angleAxis.axisPointer](~angleAxis.axisPointer)). More detailed features can be configured on `someAxis.axisPointer`. But in common cases, using `tooltip.axisPinter` is more convenient.

> **Notice:** configurations of `tooltip.axisPointer` has lower priority than that of `someAxis.axisPointer`.

---

{{ use: partial-axisPointer-introduction(galleryViewPath=${galleryViewPath}) }}


### type(string) = 'line'

Indicator type.

Options:
+ `'line'` line indicator

+ `'shadow'` shadow crosshair indicator

+ `'cross'` crosshair indicator, which is actually the shortcut of enable two axisPointers of two orthometric axes.


### axis(string) = 'auto'

The coordinate axis, which could be `'x'`, `'y'`, `'radius'`, or `'angle'`. By default, each coordinate system will automatically chose the axes whose will display its axisPointer (category axis or time axis is used by default).

{{ use: partial-axisPointer-tooltip-shared(
    prefix="##",
    galleryViewPath=${galleryViewPath}
) }}

### lineStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'line'`.

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType='solid') }}

### crossStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'cross'`.

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType="dashed") }}

### shadowStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'shadow'`.

{{ use: partial-area-style(prefix="###", defaultColor="'rgba(150,150,150,0.3)") }}

{{ use: partial-animation(prefix="##") }}
