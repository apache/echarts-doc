
{{ target: partial-item-style-desc }}

Graphic style of ${name}, `emphasis` is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.



{{ target: partial-item-style }}

#${prefix} color(Color{{ if: ${hasCallback} }}|Function{{ /if }}) = ${defaultColor|default(null)}

<ExampleUIControlColor />

${name} color. {{ if: ${useColorPalatte} }} Color is taken from [option.color Palette](~color) by default. {{ /if }}

{{ use: partial-color-desc() }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```js
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if }}

#${prefix} borderColor(Color) = ${defaultBorderColor|default('"#000"')}

<ExampleUIControlColor />

${name} border color, whose format is similar to that of `color`.

#${prefix} borderWidth(number) = ${defaultBorderWidth|default(0)}

<ExampleUIControlNumber value="${defaultBorderWidth|default(0)}" min="0" step="0.5" />

${name} border width. No border when it is set to be 0.

#${prefix} borderType(string) = 'solid'

<ExampleUIControlEnum default="solid" options="solid,dashed,dotted" />

Border type, which can be `'solid'`, `'dashed'`, or `'dotted'`. `'solid'` by default.

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor},
    defaultShadowOffsetX = ${defaultShadowOffsetX},
    defaultShadowOffsetY = ${defaultShadowOffsetY}
) }}

