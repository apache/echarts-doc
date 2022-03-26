
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

<ExampleUIControlEnum options="auto,start,end" />

Origin position of area.

By default, the area between axis line and data will be filled. This config enables you to fill the area from data to the max or min of the axis data or a specified value.

Valid values:

- `'auto'` to fill between axis line and data (**Default**)
- `'start'` to fill between min axis value (when not [`inverse`](~yAxis.inverse)) and data
- `'end'` to fill between max axis value (when not [`inverse`](~yAxis.inverse)) and data
- `number` to fill between specified value and data (Since `v5.3.2`)
{{ /if }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor}
) }}

