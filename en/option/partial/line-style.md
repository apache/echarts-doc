{{target:partial-line-style}}

#${prefix} color(Color)={{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'self-adaptive'{{ /if }}

${name}line color.{{ if: ${useColorPalatte} }} get color from [option.color palette](~color) by default{{/if}}

{{ if: ${hasCallback} }}
Support the use of callback functions. Callback function takes the following forms: 
```js
(params: Object) => Color
```
Incoming are data item `seriesIndex`, `dataIndex`, `data`, `value` and other parameters.
{{ /if }}

{{ use: partial-color-desc }}

#${prefix} width(number) = ${defaultWidth|default(0)}

${name}line width.

#${prefix} type(string) = ${defaultType|default('solid')}

${name}line type.

Options are as followed: 
+ `'solid'`
+ `'dashed'`
+ `'dotted'`

{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor}
) }}
{{ if: ${hasCurveness} }}
#${prefix} curveness(number) = 0
Edge curvature supports the value from 0 to 1, the bigger the value, the greater the curvature.
{{ /if }}

