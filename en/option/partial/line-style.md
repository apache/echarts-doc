
{{ target: partial-line-style }}

#${prefix} color(Color) = {{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'self-adaptive'{{ /if }}

${name}Line color. {{ if: ${useColorPalatte} }} Color is taken from [option.color Palette](~color) by default. {{ /if }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```js
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if }}

{{ use: partial-color-desc() }}

#${prefix} width(number) = ${defaultWidth|default(0)}

${name} line width.

#${prefix} type(string) = ${defaultType|default('solid')}

${name} line type.

Options are:
+ `'solid'`
+ `'dashed'`
+ `'dotted'`

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor}
) }}

{{ if: ${hasCurveness} }}
#${prefix} curveness(number) = 0

Edge curvature, which supports value from 0 to 1. The larger the value, the greater the curvature.
{{ /if }}

