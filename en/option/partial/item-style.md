{{target:partial-item-style-desc}}
${name} graphic pattern, There are two status, `normal` and `emphasis`, `normal` is the normal pattern of a graphic, `emphasis` is the highlight pattern of a graphic, like the graphic pattern of `emphasis` when mouse hovers over or legend linkage highlights. 

{{target:partial-item-style}}

#${prefix} color(Color{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('self-adaptive')}

${name}color of the graphic.{{ if: ${useColorPalatte} }} Get color from the global palette [option.color](~color) by default.  {{/if}}

{{ use: partial-color-desc }}

{{ if: ${hasCallback} }}
Support the use of callback functions. Callback function takes the following forms：
```js
(params: Object) => Color
```
Incoming are the data item `seriesIndex`, `dataIndex`, `data`, `value` and other parameters.
{{ /if}}

#${prefix} borderColor(Color) = ${defaultBorderColor|default('"#000"')}

${name} stroke color of graphic. Support the same format as `color`


#${prefix} borderWidth(number) = ${defaultBorderWidth|default(0)}

${name}Width of stroke. No stroke when it is 0 .

{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor},
    defaultShadowOffsetX=${defaultShadowOffsetX},
    defaultShadowOffsetY=${defaultShadowOffsetY}
) }}
