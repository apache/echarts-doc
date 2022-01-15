{{ target: partial-line-style }}

#${prefix|default('##')} ${colorName|default('color')}(string{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('adaptive')}

The color of the line. {{ if: ${useColorPalatte} }} Color is taken from [option.color Palette](~color) by default. {{/if}}

In addition to color strings, RGBA values represented by arrays are supported, for example:


```ts
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.

#${prefix|default('##')} opacity(number) = ${defaultOpacity|default(1)}

The opacity of the line.

#${prefix|default('##')} width(number) = ${defaultWidth|default(1)}

The width of the line.
