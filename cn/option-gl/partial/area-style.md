{{ target: partial-area-style }}

#${prefix|default('##')} ${colorName|default('color')}(string{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('自适应')}

图形区域的颜色。{{ if: ${useColorPalette} }} 默认从全局调色盘 [option.color](http://echarts.baidu.com/option.html#color) 获取颜色 {{/if}}

#${prefix|default('##')} opacity(number) = ${defaultOpacity|default(1)}

图形区域的不透明度。
