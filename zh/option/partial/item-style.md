
{{ target: partial-item-style-desc }}

${name} 图形样式。



{{ target: partial-item-style }}

#${prefix} color(Color{{ if: ${hasCallback} }}|Function{{ /if }}) = ${defaultColor|default('自适应')}

<ExampleUIControlColor />

${name}图形的颜色。{{ if: ${useColorPalatte} }} 默认从全局调色盘 [option.color](~color) 获取颜色。{{ /if }}{{ if: ${hasInherit} }}从 v5.2.0 开始支持在 `emphasis` 状态中支持设置为 `'inherit'` 取消高亮颜色。{{ /if }}

{{ use: partial-color-desc() }}

{{ if: ${hasCallback} }}
支持使用回调函数。回调函数格式如下：
```ts
(params: Object) => Color
```
传入的是数据项 `seriesIndex`, `dataIndex`, `data`, `value` 等各个参数。
{{ /if }}

#${prefix} borderColor(Color) = ${defaultBorderColor|default("'#000'")}

<ExampleUIControlColor />

${name}图形的描边颜色。支持的颜色格式同 `color`，不支持回调函数。

#${prefix} borderWidth(number) = ${defaultBorderWidth|default(0)}

<ExampleUIControlNumber value="${defaultBorderWidth|default(0)}" min="0" step="0.5" />

${defaultBorderWidthDesc|default((${name} ? ${name} : "") + "描边线宽。为 0 时无描边。")}

{{ use: partial-line-border-style(
    prefix = ${prefix},
    name = ${name},
    type = 'border',
    defaultType = ${defaultType},
    defaultDashOffset = ${defaultDashOffset},
    defaultCap = ${defaultCap},
    defaultJoin = ${defaultJoin},
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

{{ if: ${useDecal} }}
#${prefix} decal(Object) = ${defaultDecal}

{{ use: partial-decal-desc(
    onlyWithAreaStyle = ${decalOnlyWithAreaStyle}
) }}

{{ use: partial-decal(
    prefix = '#' + ${prefix}
) }}
{{ /if }}

