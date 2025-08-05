
{{ target: partial-rect-layout-width-height }}

{{ if: ${hostName} }}
{{ var: hostNameStr = ${hostName} }}
{{ else }}
{{ var: hostNameStr = ${componentName} + '组件' }}
{{ /if }}

{{ use: partial-rect-layout(
    hostName = ${hostName},
    version = ${version},
    noZ = ${noZ},
    prefix = ${prefix},
    defaultLeft = ${defaultLeft},
    defaultTop = ${defaultTop},
    defaultRight = ${defaultRight},
    defaultBottom = ${defaultBottom},
    hintPreserveAspect = ${hintPreserveAspect},
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix|default("#")} width(string|number) = ${defaultWidth|default("'auto'")}

<ExampleUIControlPercent default="50%"/>

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

${hostNameStr}的宽度。{{ if: !${defaultWidth} }}默认自适应。{{ /if }}

`width` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器宽度的百分比。

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix|default("#")} height(string|number) = ${defaultHeight|default("'auto'")}

<ExampleUIControlPercent default="50%"/>

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

${hostNameStr}的高度。{{ if: !${defaultHeight} }}默认自适应。{{ /if }}

`height` 的值可以是像 `20` 这样的具体像素值，可以是像 `'20%'` 这样相对于容器高度的百分比。

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}
