
{{ target: partial-rect-layout-width-height }}

{{ if: ${hostName} }}
{{ var: hostNameStr = ${hostName} }}
{{ else }}
{{ var: hostNameStr = ${componentName} + ' component' }}
{{ /if }}

{{ use: partial-rect-layout(
    hostName = ${hostName},
    noZ = ${noZ},
    prefix = ${prefix},
    defaultLeft = ${defaultLeft},
    defaultTop = ${defaultTop},
    defaultRight = ${defaultRight},
    defaultBottom = ${defaultBottom}
) }}

#${prefix|default("#")} width(string|number) = ${defaultWidth|default("'auto'")}

Width of ${hostNameStr}. {{ if: !${defaultWidth} }}Adaptive by default.{{ /if }}

#${prefix|default("#")} height(string|number) = ${defaultHeight|default("'auto'")}

Height of ${hostNameStr}. {{ if: !${defaultHeight} }}Adaptive by default.{{ /if }}

