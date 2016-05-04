{{ target: partial-rect-layout-width-height }}

{{ use: partial-rect-layout(
    componentName=${componentName}, defaultLeft=${defualtLeft},
    defaultTop=${defaultTop},
    defaultRight=${defaultRight},
    defaultBottom=${defaultBottom}
) }}

## width(string|number) = ${defaultWidth|default("'auto'")}

${componentName} width of component.{{ if: !${defaultWidth} }}self-adaptive by default.{{ /if }}

## height(string|number) = ${defaultHeight|default("'auto'")}

${componentName} height of component.{{ if: !${defaultHeight} }}self-adaptive by default.{{ /if }}
