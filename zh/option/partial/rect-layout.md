
{{ target: partial-rect-layout }}

{{ if: !${noZ} }}
{{ use: partial-z-zlevel(
    prefix = ${prefix},
    defaultZLevel = ${defaultZLevel},
    defaultZ = ${defaultZ}
) }}
{{ /if }}

#${prefix|default("#")} left(string|number) = ${defaultLeft|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

${componentName}组件离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为 `'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

#${prefix|default("#")} top(string|number) = ${defaultTop|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

${componentName}组件离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为 `'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

#${prefix|default("#")} right(string|number) = ${defaultRight|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

${componentName}组件离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比。

{{ if: !${defaultRight} }}默认自适应。{{ /if }}

#${prefix|default("#")} bottom(string|number) = ${defaultBottom|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

${componentName}组件离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比。

{{ if: !${defaultBottom} }}默认自适应。{{ /if }}

