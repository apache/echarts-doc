
{{ target: partial-rect-layout }}

{{ if: ${hostName} }}
{{ var: hostNameStr = ${hostName} }}
{{ else }}
{{ var: hostNameStr = ${componentName} + '组件' }}
{{ /if }}

{{ if: !${noZ} }}
{{ use: partial-z-zlevel(
    prefix = ${prefix},
    defaultZLevel = ${defaultZLevel},
    defaultZ = ${defaultZ}
) }}
{{ /if }}

#${prefix|default("#")} left(string|number) = ${defaultLeft|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

${hostNameStr}离容器左侧的距离。

`left` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比，也可以是 `'left'`, `'center'`, `'right'`。

如果 `left` 的值为 `'left'`, `'center'`, `'right'`，组件会根据相应的位置自动对齐。

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    componentNameInLink = ${componentNameInLink}
) }}

{{ use: partial-geo-rect-layout-approaches-hint(
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}


#${prefix|default("#")} top(string|number) = ${defaultTop|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

${hostNameStr}离容器上侧的距离。

`top` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比，也可以是 `'top'`, `'middle'`, `'bottom'`。

如果 `top` 的值为 `'top'`, `'middle'`, `'bottom'`，组件会根据相应的位置自动对齐。

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    componentNameInLink = ${componentNameInLink}
) }}

{{ use: partial-geo-rect-layout-approaches-hint(
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}


#${prefix|default("#")} right(string|number) = ${defaultRight|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

${hostNameStr}离容器右侧的距离。

`right` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

{{ if: !${defaultRight} }}默认自适应。{{ /if }}

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    componentNameInLink = ${componentNameInLink}
) }}

{{ use: partial-geo-rect-layout-approaches-hint(
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}


#${prefix|default("#")} bottom(string|number) = ${defaultBottom|default("'auto'")}

<ExampleUIControlPercent default="0%"/>

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

${hostNameStr}离容器下侧的距离。

bottom 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

{{ if: !${defaultBottom} }}默认自适应。{{ /if }}

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    componentNameInLink = ${componentNameInLink}
) }}

{{ use: partial-geo-rect-layout-approaches-hint(
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}



{{ target: partial-preserve-aspect-hint }}

{{ if: ${hintPreserveAspect} && ${componentNameInLink} }}
> 注：如果发现图形被拉伸了不符合预期，参见 [preserveAspect](~${componentNameInLink}.preserveAspect)。
{{ /if }}



{{ target: partial-geo-rect-layout-approaches-hint }}

{{ if: ${hintGeoRectLayoutApproaches} && ${componentNameInLink} }}
> 注：${componentNameInLink} 有两种盒布局方式。你可以使用任一种：
> - [${componentNameInLink}.left](~${componentNameInLink}.left) / [.right](~${componentNameInLink}.right) / [.top](~${componentNameInLink}.top) / [.bottom](~${componentNameInLink}.bottom) / [.width](~${componentNameInLink}.width) / [.height](~${componentNameInLink}.height)
> - [${componentNameInLink}.layoutCenter](~${componentNameInLink}.layoutCenter) / [.layoutSize](~${componentNameInLink}.layoutSize)
{{ /if }}
