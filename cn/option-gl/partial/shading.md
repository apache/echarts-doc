{{ target: partial-material-texture }}

#${prefix|default("##")} baseTexture(string|HTMLImageElement|HTMLCanvasElement)

材质细节的纹理贴图。

#${prefix|default("##")} textureTiling(number) = 1

材质细节纹理的平铺。默认为 1，也就是拉伸填满，大于 1 的时候数字表示纹理平铺重复的次数

**注：**使用平铺需要 `baseTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

#${prefix|default("##")} textureOffset(number) = 0

材质细节纹理的位移。


{{ target: partial-shading }}

#${prefix|default("#")} shading(string)

${componentName}中三维图形的着色效果，echarts-gl 中支持下面三种着色方式

+ `'color'`
只显示颜色，不受光照等其它因素的影响。

+ `'lambert'`
通过经典的 [lambert](https://en.wikipedia.org/wiki/Lambertian_reflectance) 着色表现光照带来的明暗。

+ `'realistic'`
真实感渲染，配合 [light.ambientCubemap](~globe.light.ambientCubemap) 和 [postEffect](~globe.postEffect) 使用可以让展示的画面效果和质感有质的提升。

{{ block: shading-compare }}
{{ /block }}

#${prefix|default("#")} realisticMaterial(Object)

真实感材质相关的配置项，在 [shading](~${componentType}.shading) 为`'realistic'`时有效。

##${prefix|default("#")} roughness(number) = 0.5

`roughness`属性用于表示材质的光泽度，`0`为完全光滑，`1`完全粗糙，中间的值则是介于这两者之间。

{{ block: roughness-compare }}
下图是 [globe](~globe) 中`roughness`分别是`0.2`（光滑）与`0.8`（粗糙）的效果

![autox280](~globe-gloss.png)
![autox280](~globe-rough.png)
{{ /block }}

##${prefix|default("#")} metalness(number) = 0

`metalness`属性用于表示材质是金属还是非金属，`0`为非金属，`1`为金属，中间的值则是介于这两者之间，但是通常设成`0`和`1`就能满足大部分场景了

{{ block: metalness-compare }}
下图是 [globe](~globe) 中`metalness`分别设成`1`与`0`的效果区别。

![autox280](~globe-metal.png)
![autox280](~globe-non-metal.png)
{{ /block }}

{{ if: ${useTexture} }}
{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}
{{ /if }}

{{ if: ${useTexture} }}
#${prefix|default("#")} lambertMaterial(Object)

lambert 材质相关的配置项，在 [shading](~${componentType}.shading) 为`'lambert'`时有效。

{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}
{{ /if }}

{{ if: ${useTexture} }}
#${prefix|default("#")} colorMaterial(Object)

color 材质相关的配置项，在 [shading](~${componentType}.shading) 为`'color'`时有效。

{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}
{{ /if }}

