{{target:partial-line-style}}

#${prefix} color(string)={{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'自适应'{{ /if }}

${name}线的颜色。{{ if: ${useColorPalatte} }} 默认从[option.color 调色盘](~color) 获取颜色{{/if}}

> 颜色可以使用 RGB 表示，比如 `'rgb(128, 128, 128)'`，如果想要加上 alpha 通道，可以使用 RGBA，比如 `'rgba(128, 128, 128, 0.5)'`，也可以使用十六进制格式，比如 `'#ccc'`


#${prefix} width(number) = ${defaultWidth|default(0)}

${name}线宽。

#${prefix} type(string) = ${defaultType|default('solid')}

${name}线的类型。

可选：
+ `'solid'`
+ `'dashed'`
+ `'dotted'`

{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor}
) }}
{{ if: ${hasCurveness} }}
#${prefix} curveness(number) = 0
边的曲度，支持从 0 到 1 的值，值越大曲度越大。
{{ /if }}

