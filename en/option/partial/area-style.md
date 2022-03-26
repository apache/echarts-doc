
{{ target: partial-area-style }}

#${prefix} color(Color) = {{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'adaptive'{{ /if }}

<ExampleUIControlColor />

Fill color. {{ if: ${useColorPalatte} }}Color is taken from [option.color Palette](~color) by default. {{ /if }}{{ if: ${hasInherit} }}Can set to `'inherit'` in the `emphasis` state to disable color highlight.{{ /if }}

{{ use: partial-color-desc() }}

{{ if: ${hasCallback} }}
Supports callback functions, in the form of:
```ts
(params: Object) => Color
```
Input parameters are `seriesIndex`, `dataIndex`, `data`, `value`, and etc. of data item.
{{ /if }}

{{ if: ${hasOrigin} }}
#${prefix|default('##')} origin(string|number) = 'auto'

Origin position of area.

By default, the area between axis line and data will be the area to be filled. This config enables you to fill the area from data to the max or min of the axis data or a specified value.

Valid values include: `'auto'` (default), `'start'`, `'end'`, `number`.

- `'auto'` to fill between axis line and data;
- `'start'` to fill between min axis value (when not `inverse`) and data;
- `'end'` to fill between max axis value (when not `inverse`) and data;
- `number` to fill between specified value and data.
{{ /if }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor}
) }}

