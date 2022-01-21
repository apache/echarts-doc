{{ target: partial-environment }}

#${prefix|default("#")} environment(string) = 'auto'

环境贴图。支持纯色、渐变色、全景贴图的 url。默认为 `'auto'`，在配置有 [light.ambientCubemap.texture](~${componentType}.light.ambientCubemap.texture) 的时候会使用该纹理作为环境贴图。否则则不显示环境贴图。

示例：
```ts
// 配置为全景贴图
environment: 'asset/starfield.jpg'
// 配置为纯黑色的背景
environment: '#000'
// 配置为垂直渐变的背景
environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  offset: 0, color: '#00aaff' // 天空颜色
}, {
  offset: 0.7, color: '#998866' // 地面颜色
}, {
  offset: 1, color: '#998866' // 地面颜色
}], false)

```
