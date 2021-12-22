{{ target: partial-item-style }}

#${prefix|default('##')} ${colorName|default('color')}(string{{if: ${hasCallback} }}|Function{{/if}})=${defaultColor|default('自适应')}

图形的颜色。{{ if: ${useColorPalette} }} 默认从全局调色盘 [option.color](https://echarts.apache.org/zh/option.html#color) 获取颜色 {{/if}}

除了颜色字符串外，支持使用数组表示的 RGBA 值，例如：

```js
// 纯白色
[1, 1, 1, 1]
```

使用数组表示的时候，每个通道可以设置大于 1 的值用于表示 HDR 的色值。


#${prefix|default('##')} opacity(number) = ${defaultOpacity|default(1)}

图形的不透明度。
