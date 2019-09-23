{{ target: partial-material-texture }}

#${prefix|default("##")} detailTexture(string|HTMLImageElement|HTMLCanvasElement)

材质细节的纹理贴图。

#${prefix|default("##")} textureTiling(number) = 1

材质细节纹理的平铺。默认为`1`，也就是拉伸填满。大于 `1` 的时候，数字表示纹理平铺重复的次数。

**注：** 使用平铺需要 `detailTexture` 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。

#${prefix|default("##")} textureOffset(number) = 0

材质细节纹理的位移。

{{ target: partial-shading }}

#${prefix|default("#")} shading(string)

${componentName}中三维图形的着色效果。echarts-gl 中支持下面三种着色方式：

+ `'color'`
只显示颜色，不受光照等其它因素的影响。

+ `'lambert'`
通过经典的 [lambert](https://en.wikipedia.org/wiki/Lambertian_reflectance) 着色表现光照带来的明暗。

+ `'realistic'`
真实感渲染，配合 [light.ambientCubemap](~globe.light.ambientCubemap) 和 [postEffect](~globe.postEffect) 使用可以让展示的画面效果和质感有质的提升。ECharts GL 中使用了[基于物理的渲染（PBR）](https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/) 来表现真实感材质。

{{ block: shading-compare }}
{{ /block }}

#${prefix|default("#")} realisticMaterial(Object)

真实感材质相关的配置项，在 [shading](~${componentType}.shading) 为`'realistic'`时有效。

{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}

##${prefix|default("#")} roughness(number|string|HTMLImageElement|HTMLCanvasElement) = 0.5

`roughness`属性用于表示材质的粗糙度，`0`为完全光滑，`1`完全粗糙，中间的值则是介于这两者之间。

{{ block: roughness-compare }}
下图是 [globe](~globe) 中`roughness`分别是`0.2`（光滑）与`0.8`（粗糙）的效果。

![autox280](~globe-gloss.png)
![autox280](~globe-rough.png)
{{ /block }}

当你想要表达更复杂的材质时。你可以直接将 `roughness` 设置为如下用每个像素存储粗糙度的贴图。

![300x300](~roughness.png)

贴图中颜色越白的地方值越大，就越粗糙。你可以从 [http://freepbr.com/](http://freepbr.com/) 等资源网站获取不同材质的贴图资源，也可以使用其他工具自己生成。

##${prefix|default("#")} metalness(number|string|HTMLImageElement|HTMLCanvasElement) = 0

`metalness`属性用于表示材质是金属还是非金属，`0`为非金属，`1`为金属，中间的值则是介于这两者之间。通常设成`0`和`1`就能满足大部分场景了。

{{ block: metalness-compare }}
下图是 [globe](~globe) 中`metalness`分别设成`1`与`0`的效果区别。

![autox280](~globe-metal.png)
![autox280](~globe-non-metal.png)
{{ /block }}

跟 [roughness](~${componentType}.realisticMaterial.roughness) 一样 你可以直接将 `metalness` 设置为金属度贴图。

##${prefix|default("#")} roughnessAdjust(number) = 0.5

粗糙度调整，在使用粗糙度贴图的时候有用。可以对贴图整体的粗糙度进行调整。默认为 `0.5`，`0`的时候为完全光滑，`1`的时候为完全粗糙。

##${prefix|default("#")} metalnessAdjust(number) = 0.5

金属度调整，在使用金属度贴图的时候有用。可以对贴图整体的金属度进行调整。默认为 `0.5`，`0`的时候为非金属，`1`的时候为金属。


##${prefix|default("#")} normalTexture(string|HTMLImageElement|HTMLCanvasElement)

材质细节的法线贴图。

使用法线贴图可以在较少的顶点下依然表现出物体表面丰富的明暗细节。



#${prefix|default("#")} lambertMaterial(Object)

lambert 材质相关的配置项，在 [shading](~${componentType}.shading) 为`'lambert'`时有效。

{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}

#${prefix|default("#")} colorMaterial(Object)

color 材质相关的配置项，在 [shading](~${componentType}.shading) 为`'color'`时有效。

{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}

