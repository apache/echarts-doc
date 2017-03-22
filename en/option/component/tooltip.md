
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

## confine(boolean) = false

Whether confine tooltip content in the view rect of chart instance.

Useful when tooltip is cut because of `'overflow: hidden'` set on outer dom of chart instance, or because of narrow screen on mobile.

## transitionDuration(number) = 0.4

The transition duration of tooltip's animation, in seconds. When it is set to be 0, it would move closely with the mouse.


{{ use: partial-tooltip-common(scope='global', prefix='#') }}


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
