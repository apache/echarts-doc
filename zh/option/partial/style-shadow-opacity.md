
{{ target: partial-style-shadow }}

#${prefix} shadowBlur(number) = ${defaultShadowBlur}

<ExampleUIControlNumber default="${defaultShadowBlur}" min="0" step="0.5" />

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：
```ts
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

{{ if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true` 以及值不为 `tranparent` 的背景色 `backgroundColor`。
{{ /if }}

#${prefix} shadowColor(Color) = ${defaultShadowColor}

<ExampleUIControlColor default="${defaultShadowColor}" />

阴影颜色。支持的格式同`color`。

{{ if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{ /if }}

#${prefix} shadowOffsetX(number) = ${defaultShadowOffsetX|default(0)}

<ExampleUIControlNumber default="${defaultShadowOffsetX|default(0)}" step="0.5" />

阴影水平方向上的偏移距离。

{{ if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{ /if }}

#${prefix} shadowOffsetY(number) = ${defaultShadowOffsetY|default(0)}

<ExampleUIControlNumber default="${defaultShadowOffsetY|default(0)}" step="0.5" />

阴影垂直方向上的偏移距离。

{{ if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{ /if }}



{{ target: partial-style-opacity }}

#${prefix} opacity(number) = ${defaultOpacity|default(1)}

<ExampleUIControlNumber default="${defaultOpacity|default(1)}" min="0" max="1" step="0.01" />

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。



{{ target: partial-style-shadow-opacity }}

{{ use: partial-style-shadow(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowColor = ${defaultShadowColor},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowOffsetX = ${defaultShadowOffsetX},
    defaultShadowOffsetY = ${defaultShadowOffsetY}
) }}

{{ use: partial-style-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowColor = ${defaultShadowColor},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowOffsetX = ${defaultShadowOffsetX},
    defaultShadowOffsetY = ${defaultShadowOffsetY}
) }}

