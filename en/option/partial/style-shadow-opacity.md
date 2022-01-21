
{{ target: partial-style-shadow }}

#${prefix} shadowBlur(number) = ${defaultShadowBlur}

<ExampleUIControlNumber default="${defaultShadowBlur}" min="0" step="0.5" />

Size of shadow blur. This attribute should be used along with `shadowColor`,`shadowOffsetX`, `shadowOffsetY` to set shadow to component.

For example:
```ts
{
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10
}
```

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` is configured and `backgroundColor` is defined other than `transparent`.
{{ /if }}

#${prefix} shadowColor(Color) = ${defaultShadowColor}

<ExampleUIControlColor default="${defaultShadowColor}" />

Shadow color. Support same format as `color`.

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` configured.
{{ /if }}

#${prefix} shadowOffsetX(number) = ${defaultShadowOffsetX|default(0)}

<ExampleUIControlNumber default="${defaultShadowOffsetX|default(0)}" step="0.5" />

Offset distance on the horizontal direction of shadow.

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` configured.
{{ /if }}

#${prefix} shadowOffsetY(number) = ${defaultShadowOffsetY|default(0)}

<ExampleUIControlNumber default="${defaultShadowOffsetY|default(0)}" step="0.5" />

Offset distance on the vertical direction of shadow.

{{ if: ${needShow} }}
**Attention**: This property works only if `show: true` configured.
{{ /if }}



{{ target: partial-style-opacity }}

#${prefix} opacity(number) = ${defaultOpacity}

<ExampleUIControlNumber default="${defaultOpacity|default(1)}" min="0" max="1" step="0.01" />

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

