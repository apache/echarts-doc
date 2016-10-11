
{{target: component-tooltip}}

# tooltip(Object)

Tooltip component.

## show(boolean) = true

Whether to show the tooltip component, including tooltip floating layer and [axisPointer](~tooltip.axisPointer).

## showContent(boolean) = true

Whether to show the tooltip floating layer which defaults to be shown.It should be configurated with `false`, if you only need tooltip to trigger the event or show the axisPointer without content.

## trigger(string) = 'item'

Type of triggering.

Options:
+ `'item'`

    Data item figure triggring, which is mainly used in non-category axis diagram such as scatter diagram and pie chart.

+ `'axis'`

    Axis triggering which is mainly used in diagrams with category axis such as bar graph and broken line graph.

   ECharts 2.x only adopts axis triggering in category axis. While in ECharts 3, axis triggering is valid in all axes of [rectangular coordinate](~grid) and [polar coordinate](~polar). What's more, the coordinate axis could be assigned through  [axisPointer.axis](~tooltip.axisPointer.axis).

## triggerOn(string) = 'mousemove'

The conditions for tooltip triggering. Options:

+ `'mousemove'`

    Trigger when mouse moves.

+ `'click'`

    Trigger when mouse click.

+ `'none'`

    Do Not trigger by default, which enable user to trigger and hide tooltip manually by [action.tooltip.showTip](api.html#action.tooltip.showTip) and [action.tooltip.hideTip](api.html#action.tooltip.hideTip).

This attribute is newly added to ECharts 3.0.

## alwaysShowContent(boolean) = false

Whether to show the content of tooltip permanently. Under default condition, when it is moved out of the the tooltip area[during specific period](~tooltip.hideDelay) which could be triggered, the content would be hidden. It could be set up as `true` to guarantee that the content of tooltip always show.

This attribute is newly added to ECharts 3.0.

## hideDelay(number) = 100

The hide-delay of floating layer. Its unit is ms. When [alwaysShowContent](~tooltip.alwaysShowContent) is set as `true`, it is invalid.

## enterable(boolean) = true

Whether mouse could be allowed to the floating layer of tooltip, which defaults to be false. If the interaction in details is needed, such as adding a link or button, it could be set as `true`.

## position(string|Array)

The position of the tooltip's floating layer, which would follow the position of mouse when it defaults to have no setting.

Options:

+ `Array`

    Display the position of tooltip's floating layer through array, which is valid when number is set with absolute position and the percentage is set with relative position.

    Example:

    ```js
    // absolute position, which is 10px to the left side and 10px to the upward side of the container
    position: [10, 10]
    // relative position, in the exact center of the container
    position: ['50%', '50%']
    ```

+ `'inside'`

   The center inside the figure in which the mouse locates, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'top'`

    The top of the figure in which the mouse locates, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'left'`

    The left of the figure in which the mouse locates, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'right'`

    The right of the figure in which the mouse locates, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

+ `'bottom'`

    The bottom of the figure in which the mouse locates, which is only valid when [trigger](~tooltip.trigger) is `'item'`.

## transitionDuration(number) = 0.4

The transition duration of motion in tooltip's floating layer. Its unit is s. When it is set as 0, it would move closely with the mouse.

## formatter(string|Function)

The content formatter of tooltip's floating layer which supports character string template and callback function.

1. character string template

    The template variables are `{a}`, `{b}`, `{c}`, `{d}` and `{e}` which individually refers to series name, data name and numberical value and ect..

    When [trigger](~tooltip.trigger) is `'axis'`, there would be multiple series of data. At this point, the index of these series could be expressed by the method of adding the index backward, such as `{a0}`, `{a1}`, `{a2}`.
    In differnt types of diagrams, the meanings of `{a}`, `{b}`, `{c}`, `{d}` are different.
    In different types of diagrams, the meanings of the variables including `{a}`, `{b}`, `{c}`, `{d}` represent the data meaning below:

    + broken line (area) diagram、bar (bar type) diagram、K-line diagram : `{a}` (series name), `{b}` (category value), `{c}` (numerical value), `{d}` (none)

    + scatter diagram (bubble) diagram : `{a}` (series name), `{b}` (data name), `{c}` (numerical value array), `{d}` (none)

    + map : `{a}` (series name), `{b}` (area name), `{c}` (merge numerical value), `{d}` (none)

    + pie chart、instrument panel、funnel plot: `{a}` (series name), `{b}` (data item name), `{c}` (numerical value), `{d}` (percentage)

   See more meanings about other variables of diagram template in label.normal.formatter configuration item in corresponding diagram.

    **sample: **
    ```js
    formatter: '{b0}: {c0}<br />{b1}: {c1}'
    ```

2. callback function

    The format of callback function:

    ```js
    (params: Object|Array, ticket: string, callback: (ticket: string, html: string)) => string
    ```

    The first parameter `params` is the data set the formatter needs. Its format is shown as follows:
    {{ use: partial-formatter-params-structure(extra = {
        percent: {
            desc: 'the percentage of pie chart',
            type: 'number'
        }
    }) }}
    When [trigger](~tooltip.trigger) is `'axis'` , `params` is the data array of multiple series.

    **Note: **Using array to express all the parameters in ECharts 2.x is not supported anymore.

    The second parameter `ticket` is the asynchronous callback identity which should coordinate with the third parameter `callback` when it is used.

    The third parameter `callback` is asynchronous callback. When the content of tooltip's floating layer is acquired asynchronously, you can introduce the mentioned `ticket` and `html` to update the content of tooltip's floating layer.

    Sample:
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

## axisPointer(Object)

The indicator configuration item of coordinate axis, which is valid when [trigger](~tooltip.trigger) is `'axis'`.

### type(string) = 'line'

the type of indicator.

Options:
+ `'line'` line indicator

+ `'cross'`  crosshair indicator

+ `'shadow'` shadow  crosshair


### axis(string) = 'auto'

The coordinate axis, which could be `'x'`, `'y'`, `'radius'`, `'angle'` and defaults to adopt category axis and time axis.

{{ use: partial-animation(prefix="##") }}

### lineStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'line'`.

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType='solid') }}

### crossStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'cross'`.

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType="dashed") }}

#### textStyle(Object)

The text style of crosshair.

{{ use: partial-text-style(prefix="####") }}

### shadowStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'shadow'`.

{{ use: partial-area-style(prefix="###", defaultColor="'rgba(150,150,150,0.3)") }}