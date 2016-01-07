{{target:partial-item-style-desc}}
${name} 图形样式，有 `normal` 和 `emphasis` 两个状态，`normal` 是图形正常的样式，`emphasis` 是图形高亮的样式，比如鼠标悬浮或者图例联动高亮的时候会使用 `emphasis` 作为图形的样式。

{{target:partial-item-style}}

#${prefix} color(Color{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('自适应')}

${name}图形的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色 {{/if}}

{{ use: partial-color-desc }}

{{ if: ${hasCallback} }}
支持使用回调函数。回调函数格式如下：
```js
(params: Object) => Color
```
{{ /if}}

#${prefix} borderColor(Color) = ${defaultBorderColor|default('"#000"')}

${name}图形的描边颜色。支持的格式同`color`。


#${prefix} borderWidth(number) = ${defaultBordereWidth|default(0)}

${name}描边线宽。为 0 时无描边。

{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor}
) }}
