
{{ target: partial-axisPointer-introduction }}

`axisPointer` is a tool for displaying reference line and axis value under mouse pointer.

For example:
~[600x450](${galleryViewPath}doc-example/candlestick-axisPointer&edit=1&reset=1)

In the demo above, [axisPointer.link](~axisPointer.link) is used to link axisPointer from different coordinate systems.


`axisPointer` can also be used on touch device, where user can drag the button to move the reference line and label.

~[600x400](${galleryViewPath}line-tooltip-touch&edit=1&reset=1)

In the cases that more than one axis exist, axisPointer helps to look inside the data.

~[600x300](${galleryViewPath}multiple-y-axis&edit=1&reset=1)
~[600x300](${galleryViewPath}multiple-x-axis&edit=1&reset=1)


---

> **Notice:**
> Generally, axisPointers is configured in each axes who need them (for example [xAxis.axisPointer](~xAxis.axisPointer)), or configured in `tooltip` (for example [tooltip.axisPointer](~tooltip.axisPointer)).

> But these configurations can only be configured in global axisPointer:
[axisPointer.triggerOn](~axisPointer.triggerOn), [axisPointer.link](~axisPointer.link).

---



---

**How to display axisPointer:**

In [cartesian (grid)](~grid) and [polar](~polar) and (single axis](~single), each axis has its own axisPointer.

Those axisPointer will not be displayed by default, utill configured as follows:

+ Set `someAxis.axisPointer.show` (like [xAxis.axisPointer.show](~xAxis.axisPointer.show)) as `true`. Then axisPointer of this axis will be displayed.

+ Set [tooltip.trigger](~tooltip.trigger) as `'axis'`, or set [tooltip.axisPointer.type](~tooltip.axisPointer.type) as `'cross'`. Then coordinate system will automatically chose the axes who will display their axisPointers. ([tooltip.axisPointer.axis](~tooltip.axisPointer.axis) can be used to change the choice.) Notice, `axis.axisPointer` will override `tooltip.axisPointer` settings.

---

**How to display the label of axisPointer:**

The label of axisPointer will not be displayed by default(namely, only reference line will be displayed by default), utill configured as follows:

+ Set `someAxis.axisPointer.label.show` (for example [xAxis.axisPointer.label.show](~xAxis.axisPointer.show)) as `true`. Then the label of the axisPointer will be displayed.

+ Set [tooltip.axisPointer.type](~tooltip.axisPointer.type) as  `'cross'`. Then the label of the crossed axisPointers will be displayed.

---

**How to configure axisPointer on touch device:**

Set `someAxis.axisPointer.handle.show` (for example [xAxis.axisPointer.handle.show](~xAxis.axisPointer.handle.show) as `true`. Then the button for dragging will be displayed. (This feature is not supported on polar).

**Notice:**
If tooltip does not work well in this case, try to set[tooltip.triggerOn](~tooltip.triggerOn) as `'none'` (for the effect: show tooltip when finger holding on the button, and hide tooltip after finger left the button), or set [tooltip.alwaysShowContent](~tooltip.alwaysShowContent) as `true` (then tooltip will always be displayed).

See the [example](${galleryEditorPath}line-tooltip-touch&edit=1&reset=1).


---

**Snap to point**

In value axis and time axis, if [snap](~xAxis.axisPointer.snap) is set as true, axisPointer will snap to point automatically.

---



{{ target: partial-axisPointer-common }}

#${prefix} show(boolean) = false

<ExampleUIControlBoolean />

axisPointer will not be displayed by default. But if [tooltip.trigger](~tooltip.trigger) is set as `'axis'` or [tooltip.axisPointer.type](~tooltip.axisPointer.type) is set as  `'cross'`, axisPointer will be displayed automatically. Each coordinate system will automatically chose the axes whose will display its axisPointer. [tooltip.axisPointer.axis](~tooltip.axisPointer.axis) can be used to change the choice.

#${prefix} type(string) = 'line'

<ExampleUIControlEnum options="line,shadow,none" />

Indicator type.

Options:
+ `'line'` line indicator.

+ `'shadow'` shadow crosshair indicator.

+ `'none'` no indicator displayed.

{{ use: partial-axisPointer-tooltip-shared(
    prefix = ${prefix}
) }}

#${prefix} triggerEmphasis(boolean) = true

<ExampleUIControlBoolean default="true" />

{{ use: partial-version(
    version = "5.4.3"
) }}

Whether to trigger emphasis of series.

#${prefix} triggerTooltip(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to trigger tooltip.

#${prefix} value(number) = null

current value. When using [axisPointer.handle](xAxisPointer.handle), `value` can be set to define the initial position of axisPointer.

#${prefix} status(boolean)

<ExampleUIControlEnum options="show,hide" />

Current status, can be `'show'` 和 `'hide'`.

#${prefix} handle(Object)

A button used to drag axisPointer. This feature is applicable in touch device. See [example](${galleryEditorPath}line-tooltip-touch&edit=1&reset=1).

##${prefix} show(boolean) = false

<ExampleUIControlBoolean />

Set to `true` to use handle.

##${prefix} icon(*)

<ExampleUIControlIcon clean="true" />

The icon of the handle.

{{ use: partial-icon-image-path() }}

See the [example of using image](${galleryEditorPath}doc-example/axisPointer-handle-image&edit=1&reset=1)

##${prefix} size(number|Array) = 45

<ExampleUIControlVector default="45,45" min="0" step="0.5" dims="width,height" />

The size of the handle, which can be set as a single value or an array (`[width, height]`).

##${prefix} margin(number) = 50

<ExampleUIControlNumber default="50" min="0" step="0.5" />

Distance from handle center to axis.

##${prefix} color(string) = '#333'

<ExampleUIControlColor />

The color of the handle.

##${prefix} throttle(number) = 40

<ExampleUIControlNumber default="40" min="0" step="10" />

Throttle rate of trigger view update when dragging handle, in ms. Increase the value to improve performance, but decrease the experience.

{{ use: partial-style-shadow(
    prefix = '#' + ${prefix},
    defaultShadowBlur = 3,
    defaultShadowColor = '#aaa',
    defaultShadowOffsetX = 2
) }}



{{ target: partial-axisPointer-tooltip-shared }}

#${prefix} snap(boolean)

Whether snap to point automatically. The default value is auto determined.

This feature usually makes sense in value axis and time axis, where tiny points can be seeked automatically.

#${prefix} z(number)

z value, which controls order of drawing graphical components. Components with smaller `z` values may be overwritten by those with larger `z` values.

#${prefix} label(Object)

label of axisPointer

##${prefix} show(boolean) = false

Whether show label. Label will not show by default. But if [tooltip.axisPointer.type](~tooltip.axisPointer.type) is set as  `'cross'`, label will be displayed automatically.

##${prefix} precision(number|string) = 'auto'

The precision of value in label. It is auto determined by default. You can also set it as `'2'`, which indicates that two decimal fractions are reserved.

##${prefix} formatter(string|Function) = null

The formatter of label.

If set as `string`, for example it can be: `formatter: 'some text {value} some text`, where `{value}` will be replaced by axis value automatically.

If set as `function`:

**Parameters:**

`{Object}` params: Including fields as follows:

`{Object}` params.value: current value of this axis. If `axis.type` is `'category'`, it is one of the value in `axis.data`. If `axis.type` is `'time'`, it is a timestamp.

`{Array.<Object>}` params.seriesData: An array, containing info of nearest points. Each item is:

`{string}` params.axisDimension: The dimension name of the axis. For example, in catesian it will be `'x'`, `'y'`, and in polar it will be `'radius'`, `'angle'`.

`{number}` params.axisIndex: The index of the axis, for example, `0`,`1`, `2`, ...

{{ use: partial-formatter-params-structure() }}

{{ use: partial-formatter-params-axisPointer() }}

**Return:**

The string to be displayed.

For example:
```ts
formatter: function (params) {
    // If axis.type is 'time'
    return 'some text' + echarts.format.formatTime(params.value);
}
```

##${prefix} margin(number) = 3

Distance between label and axis.

{{ use: partial-simple-text-style(
    prefix = '#' + ${prefix},
    defaultColor = "'#fff'"
) }}

##${prefix} padding(string|Array) = [5, 7, 5, 7]

{{ use: partial-padding(
    componentName = 'axisPointer'
) }}

##${prefix} backgroundColor(string) = 'auto'

Background color of label, the same as [axis.axisLine.lineStyle.color](~xAxis.axisLine.lineStyle.color) by default.

##${prefix} borderColor(string) = null

Border color of label.

##${prefix} borderWidth(string) = 0

Border width of label.

{{ use: partial-style-shadow(
    prefix = '#' + ${prefix},
    defaultShadowBlur = 3,
    defaultShadowColor = '#aaa'
) }}

#${prefix} lineStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'line'`.

{{ use: partial-line-style(
    prefix = "#" + ${prefix},
    defaultColor = "#555",
    defaultWidth = 1,
    defaultType = 'solid'
) }}

#${prefix} shadowStyle(Object)

It is valid when [axisPointer.type](~tooltip.axisPointer.type) is `'shadow'`.

{{ use: partial-area-style(
    prefix = "#" + ${prefix},
    defaultColor = "'rgba(150,150,150,0.3)"
) }}



{{ target: partial-formatter-params-axisPointer }}

Each item also includes axis information:

```ts
{
    axisDim: 'x', // 'x', 'y', 'angle', 'radius', 'single'
    axisId: 'xxx',
    axisName: 'xxx',
    axisIndex: 3,
    axisValue: 121, // The current value of axisPointer
    axisValueLabel: 'text of value'
}
```

