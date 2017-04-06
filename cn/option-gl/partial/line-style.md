{{ target: partial-line-style }}

#${prefix|default('##')} ${colorName|default('color')}(string{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('自适应')}

线条的颜色。{{ if: ${useColorPalette} }} 默认从全局调色盘 [option.color](http://echarts.baidu.com/option.html#color) 获取颜色 {{/if}}

#${prefix|default('##')} opacity(number) = ${defaultOpacity|default(1)}

线条的不透明度。

#${prefix|default('##')} width(number) = ${defaultWidth|default(1)}

线条的宽度。
