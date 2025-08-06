
{{ target: partial-rect-layout-width-height }}

{{ if: ${hostName} }}
{{ var: hostNameStr = ${hostName} }}
{{ else }}
{{ var: hostNameStr = ${componentName} + ' component' }}
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

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Width of ${hostNameStr}. {{ if: !${defaultWidth} }}Adaptive by default.{{ /if }}

`width` can be a pixel value like `20`; it can also be a percentage value relative to the container width like `'20%'`.

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix|default("#")} height(string|number) = ${defaultHeight|default("'auto'")}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Height of ${hostNameStr}. {{ if: !${defaultHeight} }}Adaptive by default.{{ /if }}

`height` can be a pixel value like `20`; it can also be a percentage value relative to the container height like `'20%'`.

{{ use: partial-preserve-aspect-hint(
    hintPreserveAspect = ${hintPreserveAspect},
    hintGeoRectLayoutApproaches = ${hintGeoRectLayoutApproaches},
    componentNameInLink = ${componentNameInLink}
) }}
