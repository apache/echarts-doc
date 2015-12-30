{{target: component-common}}

## zlevel(number) = ${defaultZLevel|default(0)}

组件的所有图形的 zlevel 值。

不同 zlevel 值的图形会放置在不同的 canvas 中，这是 canvas 绘制中一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的 zlevel。需要注意的是过多的 canvas 会引起内存开销的增大，在手机端这种

## z(number) = ${defaultZ|default(2)}

组件的所有图形的 z 值

## show(boolean) = ${defaultShow|default(true)}

组件是否显示，需要注意的是该属性只会影响组件是否展现，如果组件带有影响图表展示的功能，例如 dataRange 组件，show 的开关并不会影响组件的功能。

## left(string|number) = ${defaultLeft}

组件离容器左侧的距离。

left 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 left 的值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

## top(string|number) = ${defaultTop}

组件离容器上侧的距离。

top 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 top 的值为`'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

## right(string|number)

组件离容器右侧的距离。

right 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比。

## bottom(string|number)

组件离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比。
