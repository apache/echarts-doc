
{{ target: partial-style-shadow }}

#${prefix} shadowBlur(number) = ${defaultShadowBlur}

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:
```js
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` is configured and `backgroundColor` is defined other than `transparent`.
{{ /if }}

#${prefix} shadowColor(Color) = ${defaultShadowColor}

Shadow color. Support same format as `color`.

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` configured.
{{ /if }}

#${prefix} shadowOffsetX(number) = ${defaultShadowOffsetX|default(0)}

Offset distance on the horizontal direction of shadow.

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` configured.
{{ /if }}

#${prefix} shadowOffsetY(number) = ${defaultShadowOffsetY|default(0)}

Offset distance on the vertical direction of shadow.

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` configured.
{{ /if }}



{{ target: partial-style-opacity }}

#${prefix} opacity(number) = ${defaultOpacity}

Opacity of the component. Supports value from 0 to 1, and the component will not be drawn when set to 0.



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

