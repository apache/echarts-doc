{{target:partial-area-style}}

#${prefix} color(Color)={{ if: !${useColorPalatte} }} ${defaultColor|default('"#000"')} {{ else }}'自适应'{{ /if }}

填充的颜色。{{ if: ${useColorPalatte} }} 默认从[option.color 调色盘](~color)获取颜色 {{/if}}

{{ use: partial-color-desc }}

{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor}
) }}
