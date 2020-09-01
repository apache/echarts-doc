
{{ target: partial-rect-layout-width-height }}

{{ use: partial-rect-layout(
    componentName = ${componentName},
    defaultLeft = ${defaultLeft},
    defaultTop = ${defaultTop},
    defaultRight = ${defaultRight},
    defaultBottom = ${defaultBottom}
) }}

## width(string|number) = ${defaultWidth|default("'auto'")}

Width of ${componentName} component. {{ if: !${defaultWidth} }}Adaptive by default.{{ /if }}

## height(string|number) = ${defaultHeight|default("'auto'")}

Height of ${componentName} component. {{ if: !${defaultHeight} }}Adaptive by default.{{ /if }}

