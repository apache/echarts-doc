
{{ target: partial-component-common-style }}

#${prefix} backgroundColor(Color) = 'transparent'

${componentName}背景色，默认透明。

> 颜色可以使用 RGB 表示，比如 `'rgb(128, 128, 128)'`   ，如果想要加上 alpha 通道，可以使用 RGBA，比如 `'rgba(128, 128, 128, 0.5)'`，也可以使用十六进制格式，比如 `'#ccc'`

{{if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{/if}}

#${prefix} borderColor(Color) = '#ccc'

${componentName}的边框颜色。支持的颜色格式同 backgroundColor。

{{if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{/if}}

#${prefix} borderWidth(number) = 1

${componentName}的边框线宽。

{{if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{/if}}

{{ use:partial-style-shadow(prefix=${prefix}, needShow=true) }}
