{{ target: partial-viewport }}

#${prefix|default("#")} left(string|number) = ${defaultLeft|default('auto')}

${componentName}组件的视图离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为`'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。


#${prefix|default("#")} top(string|number) = ${defaultTop|default('auto')}

${componentName}组件的视图离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为`'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

#${prefix|default("#")} right(string|number) = ${defaultRight|default('auto')}

${componentName}组件的视图离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比。

{{ if: !${defaultRight} }}默认自适应。{{ /if }}

#${prefix|default("#")} bottom(string|number) = ${defaultBottom|default('auto')}

${componentName}组件的视图离容器下侧的距离。

`bottom` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高宽的百分比。

{{ if: !${defaultBottom} }}默认自适应。{{ /if }}


#${prefix|default("#")} width(string|number) = ${defaultWidth|default('auto')}

${componentName}组件的视图宽度。

#${prefix|default("#")} height(string|number) = ${defaultHeight|default('auto')}

${componentName}组件的视图高度。

