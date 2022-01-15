
{{ target: partial-line-style }}

#${prefix} color(Color) = {{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'self-adaptive'{{ /if }}

<ExampleUIControlColor />

${name}Line color. {{ if: ${useColorPalatte} }}Color is taken from [option.color Palette](~color) by default. {{ /if }}{{ if: ${hasInherit} }}Can set to `'inherit'` in the `emphasis` state to disable color highlight.{{ /if }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```ts
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if }}

{{ use: partial-color-desc() }}

#${prefix} width(number) = ${defaultWidth|default(0)}

<ExampleUIControlNumber value="${defaultWidth|default(1)}" min="0" step="0.5" />

${name} line width.

{{ use: partial-line-border-style(
    prefix = ${prefix},
    name = ${name},
    defaultType = ${defaultType},
    defaultCap = ${defaultCap},
    defaultJoin = ${defaultJoin},
    defaultDashOffset = ${defaultDashOffset},
    defaultMiterLimit = ${defaultMiterLimit}
) }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor},
    defaultShadowOffsetX = ${defaultShadowOffsetX},
    defaultShadowOffsetY = ${defaultShadowOffsetY}
) }}

{{ if: ${hasCurveness} }}
#${prefix} curveness(number) = 0

<ExampleUIControlNumber min="0" max="1" step="0.01" default="0" />

Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.
{{ /if }}

