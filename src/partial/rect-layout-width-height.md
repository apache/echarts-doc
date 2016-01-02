{{ target: partial-rect-layout-width-height }}

{{ use: partial-rect-layout(
    componentName=${componentName}, defaultLeft=${defualtLeft},
    defaultTop=${defaultTop},
    defaultRight=${defaultRight},
    defaultBottom=${defaultBottom}
) }}

## width(string|number) = ${defaultWidth|default("'auto'")}

${componentName}组件的宽度。{{ if: !${defaultWidth} }}默认自适应。{{ /if }}

## height(string|number) = ${defaultHeight|default("'auto'")}

${componentName}组件的高度。{{ if: !${defaultHeight} }}默认自适应。{{ /if }}
