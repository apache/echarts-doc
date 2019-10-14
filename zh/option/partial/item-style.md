{{target:partial-item-style-desc}}
${name} 图形样式。

{{target:partial-item-style}}

#${prefix} color(Color{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('自适应')}

${name}图形的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色 {{/if}}

{{ use: partial-color-desc }}

{{ if: ${hasCallback} }}
支持使用回调函数。回调函数格式如下：
```js
(params: Object) => Color
```
传入的是数据项 `seriesIndex`, `dataIndex`, `data`, `value` 等各个参数。
{{ /if}}

#${prefix} borderColor(Color) = ${defaultBorderColor|default('"#000"')}

${name}图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。


#${prefix} borderWidth(number) = ${defaultBorderWidth|default(0)}

${name}描边线宽。为 0 时无描边。

#${prefix} borderType(string) = 'solid'

柱条的描边类型，默认为实线，支持 `'solid'`, `'dashed'`, `'dotted'`。

{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor},
    defaultShadowOffsetX=${defaultShadowOffsetX},
    defaultShadowOffsetY=${defaultShadowOffsetY}
) }}
