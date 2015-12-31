{{target: partial-z-zlevel}}

## zlevel(number) = ${defaultZLevel|default(0)}

${componentName}组件的所有图形的 zlevel 值。

不同 zlevel 值的图形会放置在不同的 canvas 中，这是 canvas 绘制中一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的 zlevel。需要注意的是过多的 canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。

zlevel 大的 canvas 会放在 zlevel 小的 canvas 的上面。

## z(number) = ${defaultZ|default(2)}

${componentName}组件的所有图形的 z 值。控制图形的前后顺序。z 值小的图形会被 z 值大的图形覆盖。

z 相比 zlevel 优先级更低，而且不会创建新的 canvas。
