
{{ target: partial-component-common-style }}

#${prefix} backgroundColor(Color) = 'transparent'

<ExampleUIControlColor />

Background color of ${componentName}, which is transparent by default.

> Color can be represented in RGB, for example `'rgb(128, 128, 128)'`. RGBA can be used when you need alpha channel, for example `'rgba(128, 128, 128, 0.5)'`. You may also use hexadecimal format, for example `'#ccc'`.

{{ if: ${needShow} }}
**Attention**: Works only if `show: true` is set.
{{ /if }}

#${prefix} borderColor(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

Border color of ${componentName}. Support the same color format as backgroundColor.

{{ if: ${needShow} }}
**Attention**: Works only if `show: true` is set.
{{ /if }}

#${prefix} borderWidth(number) = 1

<ExampleUIControlNumber default="${defaultBorderWidth|default(1)}" min="0" step="0.5" />

Border width of ${componentName}.

{{ if: ${needShow} }}
**Attention**: Works only if `show: true` is set.
{{ /if }}

{{ if: ${hasBorderRadius} }}
{{ use: partial-border-radius(
    prefix = ${prefix}
) }}
{{ /if }}

{{ use: partial-style-shadow(
    prefix = ${prefix},
    needShow = true
) }}



{{ target: partial-border-radius }}

#${prefix} ${propName|default('borderRadius')}(number|Array) = ${defaultBorderRadius|default(0)}

{{ if: ${version} }}
{{ use: partial-version(
    version = ${version}
) }}
{{ /if }}

<ExampleUIControlVector min="0" dims="LT,RT,RB,LB"  />

The radius of rounded corner. Its unit is px. And it supports use array to respectively specify the 4 corner radiuses.

For example:
```
${propName|default('borderRadius')}: 5, // consistently set the size of 4 rounded corners
${propName|default('borderRadius')}: [5, 5, 0, 0] // (clockwise upper left, upper right, bottom right and bottom left)
```

