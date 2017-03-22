
{{target: component-axisPointer}}

# axisPointer(Object)

这是坐标轴指示器（axisPointer）的全局公用设置。

---

{{ use: partial-axisPointer-introduction(galleryViewPath=${galleryViewPath}) }}

---

{{ use: partial-axisPointer-common(
    prefix="#",
    galleryViewPath=${galleryViewPath}
)}}

## link(Array)

## triggerOn(string) = 'mousemove|click'

提示框触发的条件，可选：

+ `'mousemove'`

    鼠标移动时触发。

+ `'click'`

    鼠标点击时触发。

+ `'none'`

    不在 `'mousemove'` 或 `'click'` 时触发。
