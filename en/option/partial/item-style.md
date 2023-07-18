
{{ target: partial-item-style-desc }}

Graphic style of ${name}, `emphasis` is the style when it is highlighted, like being hovered by mouse, or highlighted via legend connect.



{{ target: partial-item-style }}

#${prefix} color(Color{{ if: ${hasCallback} }}|Function{{ /if }}) = ${defaultColor|default(null)}

<ExampleUIControlColor />

${name} color. {{ if: ${useColorPalatte} }}Color is taken from [option.color Palette](~color) by default. {{ /if }}{{ if: ${hasInherit} }}Since v5.2.0, it can be set to `'inherit'` in the `emphasis` state to disable color highlight.{{ /if }}

{{ use: partial-color-desc() }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```ts
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if }}

#${prefix} borderColor(Color) = ${defaultBorderColor|default("'#000'")}

<ExampleUIControlColor />

${name} border color, whose format is similar to that of `color`.

#${prefix} borderWidth(number) = ${defaultBorderWidth|default(0)}

<ExampleUIControlNumber value="${defaultBorderWidth|default(0)}" min="0" step="0.5" />

${name} border width. No border when it is set to be 0.

${defaultBorderWidthDesc|default((${name} ? ${name} : "") + " border width. No border when it is set to be 0.")}

{{ use: partial-line-border-style(
    prefix = ${prefix},
    name = ${name},
    type = 'border',
    defaultType = ${defaultType},
    defaultDashOffset = ${defaultDashOffset},
    defaultCap = ${defaultCap},
    defaultJoin = ${defaultJoin},
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

{{ if: ${useDecal} }}
#${prefix} decal(Object) = ${defaultDecal}

{{ use: partial-decal-desc(
    onlyWithAreaStyle = ${decalOnlyWithAreaStyle}
) }}

{{ use: partial-decal(
    prefix = '#' + ${prefix}
) }}
{{ /if }}

