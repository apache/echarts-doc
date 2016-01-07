{{target:partial-line-style}}

#${prefix} color(Color)={{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'自适应'{{ /if }}

${name}线的颜色。{{ if: ${useColorPalatte} }} 默认从[option.color 调色盘](~color) 获取颜色{{/if}}

{{ use: partial-color-desc }}

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

