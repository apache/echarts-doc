{{target: component-common}}

## z(number) = 2

组件的所有图形的 z 值

## zlevel(number) = 0

组件的所有图形的 zlevel 值

## show(boolean) = true

组件是否显示，需要注意的是该属性只会影响组件是否展现，如果组件带有影响图表展示的功能，例如 dataRange 组件，show 的开关并不会影响组件的功能。

## x(string|number) = ${x-default}

组件离容器左侧的距离，x 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 x 的值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

## y(string|number) = ${y-default}

组件离容器上侧的距离，y 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 x 的值为`'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

## x2(string|number)

组件离容器右侧的距离，x2 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 x2 的值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

## y2(string|number)

组件离容器下侧的距离，y2 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 y2 的值为`'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。
