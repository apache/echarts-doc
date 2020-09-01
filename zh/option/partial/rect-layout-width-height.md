
{{ target: partial-rect-layout-width-height }}

{{ use: partial-rect-layout(
    componentName = ${componentName},
    defaultLeft = ${defaultLeft},
    defaultTop = ${defaultTop},
    defaultRight = ${defaultRight},
    defaultBottom = ${defaultBottom}
) }}

## width(string|number) = ${defaultWidth|default("'auto'")}

<ExampleUIControlPercent default="50%"/>

${componentName}组件的宽度。{{ if: !${defaultWidth} }}默认自适应。{{ /if }}

## height(string|number) = ${defaultHeight|default("'auto'")}

<ExampleUIControlPercent default="50%"/>

${componentName}组件的高度。{{ if: !${defaultHeight} }}默认自适应。{{ /if }}

