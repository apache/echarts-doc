{{target:partial-style-shadow}}

#${prefix} shadowBlur(number) = ${defaultShadowBlur}

图形阴影的模糊大小。该属性配合 `shadowColor`,`shadowOffsetX`, `shadowOffsetY` 一起设置图形的阴影效果。

示例：
```js
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

{{if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{/if}}


#${prefix} shadowColor(Color) = ${defaultShadowColor}

阴影颜色。支持的格式同`color`。

{{if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{/if}}


#${prefix} shadowOffsetX(number) = ${defaultShadowOffsetX|default(0)}

阴影水平方向上的偏移距离。

{{if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{/if}}


#${prefix} shadowOffsetY(number) = ${defaultShadowOffsetY|default(0)}

阴影垂直方向上的偏移距离。

{{if: ${needShow} }}
**注意**：此配置项生效的前提是，设置了 `show: true`。
{{/if}}



{{target:partial-style-opacity}}

#${prefix} opacity(number) = ${defaultOpacity}

图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。




{{target:partial-style-shadow-opacity}}

{{use: partial-style-shadow(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowColor=${defaultShadowColor},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowOffsetX=${defaultShadowOffsetX},
    defaultShadowOffsetY=${defaultShadowOffsetY}
)}}
{{use: partial-style-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowColor=${defaultShadowColor},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowOffsetX=${defaultShadowOffsetX},
    defaultShadowOffsetY=${defaultShadowOffsetY}
)}}
