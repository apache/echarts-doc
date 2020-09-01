
{{ target: partial-area-style }}

#${prefix} color(Color) = {{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'adaptive'{{ /if }}

Fill color. {{ if: ${useColorPalatte} }} Color is taken from [option.color Palette](~color) by default. {{ /if }}

{{ use: partial-color-desc() }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```js
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if }}



{{ if: ${hasOrigin} }}

#${prefix|default('##')} origin(string) = 'auto'

Origin position of area.

By default, the area between axis line and data will be the area to be filled. This config enables you to fill data to the max or min of the axis data.

Valid values include: `'auto'` (default), `'start'`, `'end'`.

- `'auto'` to fill between axis line to data;
- `'start'` to fill between min axis value (when not `inverse`) to data;
- `'end'` to fill between max axis value (when not `inverse`) to data;
{{ /if }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor}
) }}

