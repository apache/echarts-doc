
{{ target: partial-colorby }}

## colorBy(string) = ${defaultColorBy|default("'series'")}

<ExampleUIControlEnum options="series,data" />

{{ use: partial-version(
    version = '5.2.0'
) }}

The policy to take color from [option.color](~color). Valid values:

+ `'series'`: assigns the colors in the palette by series, so that all data in the same series are in the same color;
+ `'data'`: assigns colors in the palette according to data items, with each data item using a different color.

