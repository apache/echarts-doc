{{ target: partial-material-texture }}

##${prefix|default("##")} baseTexture(string|HTMLImageElement|HTMLCanvasElement)

##${prefix|default("##")} textureTiling(number) = 1

##${prefix|default("##")} textureOffset(number) = 0


{{ target: partial-shading }}

#${prefix|default("#")} shading(string)

${componentName}组件中三维图形的着色效果，echarts-gl 中支持下面三种着色方式

+ `'color'`
只显示颜色，不受光照等其它因素的影响。

+ `'lambert'`
通过经典的 [lambert](https://en.wikipedia.org/wiki/Lambertian_reflectance) 着色表现光照带来的明暗。

+ `'realistic'`
真实感渲染，配合 [light.ambientCubemap](~globe.light.ambientCubemap) 和 [postEffect](~globe.postEffect) 使用可以让展示的画面效果和质感有质的提升。

{{ block: shading-compare }}
{{ /block }}

#${prefix|default("#")} realisticMaterial

##${prefix|default("#")} roughness(number) = 0.5

`roughness`属性用于表示材质的光泽度，`0`为完全光滑，`1`完全粗糙，中间的值则是介于这两者之间。

下图是 [globe](~globe)

![autox350](~globe-gloss.png)
![autox350](~globe-rough.png)

##${prefix|default("#")} metalness(number) = 0

`metalness`属性用于表示材质是金属还是非金属，`0`为非金属，`1`为金属，中间的值则是介于这两者之间，但是通常设成`0`和`1`就能满足大部分场景了

下图是 [globe](~globe) 中`metalness`分别设成`1`与`0`的效果区别。

![autox350](~globe-metal.png)
![autox350](~globe-non-metal.png)

{{ if: ${useTexture} }}
{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}
{{ /if }}