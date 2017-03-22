
{{target: component-tooltip}}

# tooltip(Object)

提示框组件。

---

{{use: partial-tooltip-introduction}}

## show(boolean) = true

是否显示提示框组件，包括提示框浮层和 [axisPointer](~tooltip.axisPointer)。

## showContent(boolean) = true

是否显示提示框浮层，默认显示。只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为`false`。

## trigger(string) = 'item'

触发类型。

可选：
+ `'item'`

    数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。

+ `'axis'`

    坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。

    在 ECharts 2.x 中只支持类目轴上使用 axis trigger，在 ECharts 3 中支持在[直角坐标系](~grid)和[极坐标系](~polar)上的所有类型的轴。并且可以通过 [axisPointer.axis](~tooltip.axisPointer.axis) 指定坐标轴。

+ `'none'`

    什么都不触发。

## triggerOn(string) = 'mousemove|click'

提示框触发的条件，可选：

+ `'mousemove'`

    鼠标移动时触发。

+ `'click'`

    鼠标点击时触发。

+ `'mousemove|click'`

    同时鼠标移动和点击时触发。

+ `'none'`

    不在 `'mousemove'` 或 `'click'` 时触发，用户可以通过 [action.tooltip.showTip](api.html#action.tooltip.showTip) 和 [action.tooltip.hideTip](api.html#action.tooltip.hideTip) 来手动触发和隐藏。也可以通过 [axisPointer.handle](~xAxis.axisPointer.handle) 来触发或隐藏。

该属性为 ECharts 3.0 中新加。

## alwaysShowContent(boolean) = false

是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 [一定时间](~tooltip.hideDelay) 后隐藏，设置为 `true` 可以保证一直显示提示框内容。

该属性为 ECharts 3.0 中新加。

## showDelay(number) = 0

浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 [triggerOn](~tooltip.triggerOn) 为 `'mousemove'` 时有效。

## hideDelay(number) = 100

浮层隐藏的延迟，单位为 ms，在 [alwaysShowContent](~tooltip.alwaysShowContent) 为 `true` 的时候无效。

## enterable(boolean) = false

鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 `true`。

## confine(boolean) = false

是否将 tooltip 框限制在图表的区域内。

当图表外层的 dom 被设置为 `'overflow: hidden'`，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。

## transitionDuration(number) = 0.4

提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。


{{ use: partial-tooltip-common(scope='global', prefix='#') }}


## axisPointer(Object)

坐标轴指示器配置项。

`tooltip.axisPointer` 是配置坐标轴指示器的快捷方式。实际上坐标轴指示器的全部功能，都可以通过轴上的 axisPointer 配置项完成（例如 [xAxis.axisPointer](~xAxis.axisPointer) 或 [angleAxis.axisPointer](~angleAxis.axisPointer)）。但是使用 `tooltip.axisPinter` 在简单场景下会更方便一些。

> **注意：** `tooltip.axisPointer` 中诸配置项的优先级低于轴上的 axisPointer 的配置项。

---

{{ use: partial-axisPointer-introduction(galleryViewPath=${galleryViewPath}) }}


### type(string) = 'line'

指示器类型。

可选
+ `'line'` 直线指示器

+ `'shadow'` 阴影指示器

+ `'cross'` 十字准星指示器。其实是种简写，表示启用两个正交的轴的 axisPointer。


### axis(string) = 'auto'

指示器的坐标轴。

默认情况，坐标系会自动选择显示显示哪个轴的 axisPointer（默认取类目轴或者时间轴）。

可以是 `'x'`, `'y'`, `'radius'`, `'angle'`。

{{ use: partial-axisPointer-tooltip-shared(
    prefix="##",
    galleryViewPath=${galleryViewPath}
) }}

### lineStyle(Object)

[axisPointer.type](~tooltip.axisPointer.type) 为 `'line'` 时有效。

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType='solid') }}

### crossStyle(Object)

[axisPointer.type](~tooltip.axisPointer.type) 为 `'cross'` 时有效。

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType="dashed") }}

### shadowStyle(Object)

[axisPointer.type](~tooltip.axisPointer.type) 为 `'shadow'` 时有效。

{{ use: partial-area-style(prefix="###", defaultColor="'rgba(150,150,150,0.3)") }}

{{ use: partial-animation(prefix="##") }}
