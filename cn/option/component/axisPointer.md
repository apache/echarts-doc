
{{target: component-axisPointer}}

# axisPointer(Object)

这是坐标轴指示器（axisPointer）的全局公用设置。

---

{{ use: partial-axisPointer-introduction(galleryViewPath=${galleryViewPath}) }}

---

## show{boolean} = false

默认不显示。但是如果 [tooltip.trigger](~tooltip.trigger) 设置为 `'axis'` 或者 [tooltip.axisPointer.type](~tooltip.axisPointer.type) 设置为 `'cross'`，则自动显示 axisPointer。坐标系会自动选择显示显示哪个轴的 axisPointer，也可以使用 [tooltip.axisPointer.axis](~tooltip.axisPointer.axis) 改变这种选择。

## link(Array)

## triggerOn(string) = 'mousemove|click'

提示框触发的条件，可选：

+ `'mousemove'`

    鼠标移动时触发。

+ `'click'`

    鼠标点击时触发。

+ `'none'`

    不在 `'mousemove'` 或 `'click'` 时触发。


