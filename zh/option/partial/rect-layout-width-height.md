
{{ target: partial-rect-layout-width-height }}

{{ if: ${hostName} }}
{{ var: hostNameStr = ${hostName} }}
{{ else }}
{{ var: hostNameStr = ${componentName} + '组件' }}
{{ /if }}

{{ use: partial-rect-layout(
    hostName = ${hostName},
    defaultLeft = ${defaultLeft},
    defaultTop = ${defaultTop},
    defaultRight = ${defaultRight},
    defaultBottom = ${defaultBottom}
) }}

## width(string|number) = ${defaultWidth|default("'auto'")}

<ExampleUIControlPercent default="50%"/>

${hostNameStr}的宽度。{{ if: !${defaultWidth} }}默认自适应。{{ /if }}

## height(string|number) = ${defaultHeight|default("'auto'")}

<ExampleUIControlPercent default="50%"/>

${hostNameStr}的高度。{{ if: !${defaultHeight} }}默认自适应。{{ /if }}

