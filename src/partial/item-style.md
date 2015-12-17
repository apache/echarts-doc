{{target:partial-item-style-desc}}
图形的样式，图形有 `normal` 和 `emphasis` 两个状态，`normal` 是图形正常的样式，`emphasis` 是图形高亮的样式，比如鼠标悬浮或者图例联动高亮的时候会使用 `emphasis` 作为图形的样式

{{target:partial-item-style}}

#${prefix} color(string)=${defaultColor|default('"#000"')}

图形的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色 {{/if}}

颜色可以使用 RGB 表示，比如 `'rgb(128, 128, 128)'`，如果想要加上 alpha 通道，可以使用 RGBA，比如 `'rgba(128, 128, 128, 0.5)'`，也可以使用十六进制格式，比如 `'#ccc'`


#${prefix} borderColor(string) = ${defaultBorderColor|default('"#000"')}

图形的描边颜色。支持的格式同`color`。


#${prefix} borderWidth(number) = ${defaultBordereWidth|default(0)}

描边线宽。为 0 时无描边。

{{ use:partial-style-shadow-opacity(prefix=${prefix}) }}