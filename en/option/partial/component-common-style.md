
{{ target: partial-component-common-style }}

#${prefix} backgroundColor(Color) = 'transparent'

${componentName} background color, transparent by default.

>color can be represented by RGB, for example `'rgb(128, 128, 128)'`   , if you want to add alpha channel, you can use RGBA, for example `'rgba(128, 128, 128, 0.5)'`, you can also use hexadecimal format, for example `'#ccc'`

{{if: ${needShow} }}
**Caution**: This property works only if `show: true` configured.
{{/if}}

#${prefix} borderColor(Color) = '#ccc'

border color of ${componentName}. Support the same color format as backgroundColor.

{{if: ${needShow} }}
**Caution**: This property works only if `show: true` configured.
{{/if}}

#${prefix} borderWidth(number) = 1

border line width of ${componentName}.

{{if: ${needShow} }}
**Caution**: This property works only if `show: true` configured.
{{/if}}

{{ use:partial-style-shadow(prefix=${prefix}, needShow=true) }}
