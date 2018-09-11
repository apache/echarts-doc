
{{target: component-tooltip}}

# tooltip(Object)

Tooltip component.

---

{{use: partial-tooltip-introduction}}

{{use: partial-tooltip-coords-common(
    prefix='#',
    galleryViewPath=${galleryViewPath}
)}}

## showContent(boolean) = true

Whether to show the tooltip floating layer, whose default value is true. It should be configurated to be `false`, if you only need tooltip to trigger the event or show the axisPointer without content.

## alwaysShowContent(boolean) = false

Whether to show tooltip content all the time. By default, it will be hidden [after some time](~tooltip.hideDelay). It can be set to be `true` to preserve displaying.

This attribute is newly added to ECharts 3.0.

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

## showDelay(number) = 0

Delay time for showing tooltip, in ms. No delay by default, and it is not recommended to set. Only valid when [triggerOn](~tooltip.triggerOn) is set to be `'mousemove'`.

## hideDelay(number) = 100

Delay time for hiding tooltip, in ms. It will be invalid when [alwaysShowContent](~tooltip.alwaysShowContent) is `true`.

## enterable(boolean) = true

Whether mouse is allowed to enter the floating layer of tooltip, whose default value is false. If you need to interact in the tooltip like with links or buttons, it can be set as `true`.

## renderMode(string) = 'html'

Render mode for tooltip. By default, it is set to be `'html'` so that extra DOM element is used for tooltip. It can also set to be `'richText'` so that the tooltip will be rendered inside Canvas (SVG rich text is not implemented yet). This is very useful for environments that don't have DOM, such as Wechat applications.

## confine(boolean) = false

Whether confine tooltip content in the view rect of chart instance.

Useful when tooltip is cut because of `'overflow: hidden'` set on outer dom of chart instance, or because of narrow screen on mobile.

## transitionDuration(number) = 0.4

The transition duration of tooltip's animation, in seconds. When it is set to be 0, it would move closely with the mouse.

{{ use: partial-tooltip-common(scope='global', prefix='#') }}

