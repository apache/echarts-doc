{{ target: partial-environment }}

#${prefix|default("#")} environment(string) = 'auto'

Environment map. Support for solid colors, gradual colors, URL of panoramic texture. The default is `'auto'`, which is used as the environment texture when [light.ambientCubemap.texture](~${componentType}.light.ambientCubemap.texture) is configured. Otherwise, the environment texture is not displayed.

Example:
```ts
// Configure as a panoramic texture
environment: 'asset/starfield.jpg'
// Configured as a solid black background
environment: '#000'
// Configured as a background with a vertical gradient
environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  offset: 0, color: '#00aaff' // Sky color
}, {
  offset: 0.7, color: '#998866' // Ground color
}, {
  offset: 1, color: '#998866' // Ground color
}], false)

```
