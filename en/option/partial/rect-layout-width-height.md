
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
    defaultBottom = ${defaultBottom}
) }}

#${prefix|default("#")} width(string|number) = ${defaultWidth|default("'auto'")}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Width of ${hostNameStr}. {{ if: !${defaultWidth} }}Adaptive by default.{{ /if }}

#${prefix|default("#")} height(string|number) = ${defaultHeight|default("'auto'")}

{{ if: ${version} }}
{{ use: partial-version(version = ${version}) }}
{{ /if }}

Height of ${hostNameStr}. {{ if: !${defaultHeight} }}Adaptive by default.{{ /if }}

