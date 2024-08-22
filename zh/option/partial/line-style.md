
{{ target: partial-line-style }}

#${prefix} color(Color) = {{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'自适应'{{ /if }}

<ExampleUIControlColor />

${name}线的颜色。{{ if: ${useColorPalatte} }} 默认从[option.color 调色盘](~color) 获取颜色。{{ /if }}{{ if: ${hasInherit} }}在`emphasis`状态中支持设置为 `'inherit'` 取消高亮颜色。{{ /if }}

{{ if: ${hasCallback} }}
支持使用回调函数。回调函数格式如下：
```ts
(params: Object) => Color
```
传入的是数据项 `seriesIndex`, `dataIndex`, `data`, `value` 等各个参数。
{{ /if }}

{{ use: partial-color-desc() }}

#${prefix} width(number) = ${defaultWidth|default(1)}

<ExampleUIControlNumber value="${defaultWidth|default(1)}" min="0" step="0.5" />

${name}线宽。

{{ use: partial-line-border-style(
    prefix = ${prefix},
    name = ${name},
    defaultType = ${defaultType},
    defaultCap = ${defaultCap},
    defaultJoin = ${defaultJoin},
    defaultDashOffset = ${defaultDashOffset},
    defaultMiterLimit = ${defaultMiterLimit}
) }}

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor},
    defaultShadowOffsetX = ${defaultShadowOffsetX},
    defaultShadowOffsetY = ${defaultShadowOffsetY}
) }}

{{ if: ${hasCurveness} }}
#${prefix} curveness(number) = 0

<ExampleUIControlNumber min="0" max="1" step="0.01" default="0" />

边的曲度，支持从 0 到 1 的值，值越大曲度越大。
{{ /if }}

