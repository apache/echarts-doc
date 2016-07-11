{{target:partial-area-style}}

#${prefix} color(Color)={{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'adaptive'{{ /if }}

Fill color. {{ if: ${useColorPalatte} }} Color is taken from [option.color Palette](~color) by default. {{/if}}

{{ use: partial-color-desc }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```js
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if}}


{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor}
) }}
