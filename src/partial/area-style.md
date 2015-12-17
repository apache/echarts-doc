{{target:partial-area-style}}

#${prefix} color(string)=${defaultColor|default('"#000"')}

填充的颜色。{{ if: ${useColorPalatte} }} 默认从[option.color 调色盘](~color) 获取颜色 {{/if}}

颜色可以使用 RGB 表示，比如 `'rgb(128, 128, 128)'`，如果想要加上 alpha 通道，可以使用 RGBA，比如 `'rgba(128, 128, 128, 0.5)'`，也可以使用十六进制格式，比如 `'#ccc'`

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}