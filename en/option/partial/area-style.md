{{target:partial-area-style}}

#${prefix} color(Color)={{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'adaptive'{{ /if }}

Fill color.{{ if: ${useColorPalatte} }} get color from [option.color Palette](~color) by default {{/if}}

{{ use: partial-color-desc }}

{{ if: ${hasCallback} }}
Supports the use of callback functions.Format of callback function is as followed:
```js
(params: Object) => Color
```
Incoming data are data item `seriesIndex`, `dataIndex`, `data`, `value` and other parameters.
{{ /if}}


{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor}
) }}
