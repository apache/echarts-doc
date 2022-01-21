{{ target: partial-item-style }}

#${prefix|default('##')} ${colorName|default('color')}(string{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('adaptive')}

The color of the graphic. {{ if: ${useColorPalatte} }} Color is taken from [option.color Palette](~color) by default. {{/if}}


```ts
// pure white
[1, 1, 1, 1]
```

When using an array representation, each channel can set a value greater than 1 to represent the color value of HDR.


#${prefix|default('##')} opacity(number) = ${defaultOpacity|default(1)}

The opacity of the graphic.
