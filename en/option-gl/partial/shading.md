{{ target: partial-material-texture }}

#${prefix|default("##")} detailTexture(string|HTMLImageElement|HTMLCanvasElement)

The texture map of the material detail.

#${prefix|default("##")} textureTiling(number) = 1

Tiles the texture map of the material detail. The default is `1`, which means that the stretch is filled. When greater than `1`, the number indicates how many times the texture is tiled.

**Note:**  The use of tiling requires the `detail texture` height and width to be 2 to the power of n. For example, 512x512, if it is a 200x200 texture, you cannot use tiling.

#${prefix|default("##")} textureOffset(number) = 0

The displacement of the texture detail texture.

{{ target: partial-shading }}

#${prefix|default("#")} shading(string)

The coloring effect of 3D graphics in ${componentName}. The following three coloring methods are supported in echarts-gl:

+ `'color'`
Only display colors, not affected by other factors such as lighting.

+ `'lambert'`
Through the classic [lambert] coloring, can express the light and dark that the light shows.

+ `'realistic'`
Realistic rendering, combined with [light.ambientCubemap](~globe.light.ambientCubemap) and [postEffect](~globe.postEffect), can improve the quality and texture of the display. [Physical Based Rendering (PBR)] (https://www.marmoset.co/posts/physically-based-rendering-and-you-can-too/) is used in ECharts GL to represent realistic materials.

{{ block: shading-compare }}
{{ /block }}

#${prefix|default("#")} realisticMaterial(Object)

The configuration item of the realistic material is valid when [shading](~${componentType}.shading) is `'realistic'`.

{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}

##${prefix|default("#")} roughness(number|string|HTMLImageElement|HTMLCanvasElement) = 0.5

The `roughness` attribute is used to indicate the roughness of the material, `0` is completely smooth, `1` is completely rough, and the middle value is between the two.

{{ block: roughness-compare }}
The following images show the effect of `roughness` in [`globe`](~globe) `0.2` (smooth) and `0.8` (rough).

![autox280](~globe-gloss.png)
![autox280](~globe-rough.png)
{{ /block }}

When you want to express more complex materials. You can set `roughness` directly to the texture that stores the roughness with each pixel as follows.

![300x300](~roughness.png)

The more white the color in the texture, the larger the value and the rougher it is. You can get texture resources of different materials from resource websites such as [http://freepbr.com/] (http://freepbr.com/). You can also generate it yourself using other tools.

##${prefix|default("#")} metalness(number|string|HTMLImageElement|HTMLCanvasElement) = 0

The `metalness` attribute is used to indicate whether the material is metal or non-metal, `0` is non-metallic, `1` is metal, and the middle value is between the two. Usually set to `0` and `1` to meet most of the scenes.

{{ block: metalness-compare }}
The picture below show the difference between `metal' and '0' in [globe](~globe).

![autox280](~globe-metal.png)
![autox280](~globe-non-metal.png)
{{ /block }}

As with [roughness](~${componentType}.realisticMaterial.roughness) you can set `metalness` directly to the metal texture.

##${prefix|default("#")} roughnessAdjust(number) = 0.5

Roughness adjustment is useful when using roughness map. The overall roughness of the texture can be adjusted. The default is `0.5`, `0` is completely smooth, `1` is completely rough.

##${prefix|default("#")} metalnessAdjust(number) = 0.5

Metalness adjustment is useful when using metalness maps. The overall metallicity of the texture can be adjusted. The default is `0.5`, `0` is non-metal, `1` is metal.

##${prefix|default("#")} normalTexture(string|HTMLImageElement|HTMLCanvasElement)

Normal map of material details.

Using normal maps, you can still display rich shades of detail on the surface of the object with fewer vertices.


#${prefix|default("#")} lambertMaterial(Object)

The configuration item of the lambert material is valid when [shading](~${componentType}.shading) is `'lambert'`.


{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}

#${prefix|default("#")} colorMaterial(Object)

The color material related configuration item is valid when [shading](~${componentType}.shading) is `'color'`.

{{ use: partial-material-texture(prefix=${prefix|default("#")} + '#') }}

