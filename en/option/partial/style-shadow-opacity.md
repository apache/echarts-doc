{{target:partial-style-shadow}}

#${prefix} shadowBlur(number) = ${defaultShadowBlur}

Size of blurriness of graphic shadow. This attribute sets graphic shadow effect together with `shadowColor`,`shadowOffsetX`, `shadowOffsetY`.

for example: 
```js
itemStyle: {
    normal: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10
    }
}
```

#${prefix} shadowColor(Color) = ${defaultShadowColor}

Shadow color. Support same format as `color`.


#${prefix} shadowOffsetX(number) = ${defaultShadowOffsetX|default(0)}

Offset distance on the horizontal direction of the shade.

#${prefix} shadowOffsetY(number) = ${defaultShadowOffsetY|default(0)}

Offset distance on the vertical direction of the shade. 


{{target:partial-style-opacity}}

#${prefix} opacity(number) = ${defaultOpacity}

Graphic transparency. Support number from 0 to 1, and this graphic will not be drawn when transparency is 0.6




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
