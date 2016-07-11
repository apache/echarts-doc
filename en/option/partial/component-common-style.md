
{{ target: partial-component-common-style }}

#${prefix} backgroundColor(Color) = 'transparent'

Background color of ${componentName}, which is transparent by default.

>Color can be represented in RGB, for example `'rgb(128, 128, 128)'`. RGBA can be used when you need alpha channel, for example `'rgba(128, 128, 128, 0.5)'`. You may also use hexadecimal format, for example `'#ccc'`.

{{if: ${needShow} }}
**Attention**: Works only if `show: true` is set.
{{/if}}

#${prefix} borderColor(Color) = '#ccc'

Border color of ${componentName}. Support the same color format as backgroundColor.

{{if: ${needShow} }}
**Attention**: Works only if `show: true` is set.
{{/if}}

#${prefix} borderWidth(number) = 1

Border width of ${componentName}.

{{if: ${needShow} }}
**Attention**: Works only if `show: true` is set.
{{/if}}

{{ use:partial-style-shadow(prefix=${prefix}, needShow=true) }}
