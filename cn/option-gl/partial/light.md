{{ target: partial-light }}

#${prefix|default("#")} light(Object)

光照相关的设置。在 [shading](${componentType}.shading) 为 `'color'` 的时候无效。

光照的设置会影响到组件以及组件所在坐标系上的所有图表。

合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。

##${prefix|default("#")} main(Object)

场景主光源的设置，在 [globe](~globe) 组件中就是太阳光。

###${prefix|default("#")} color(string) = ${defaultMainLightColor|default('#fff')}

主光源的颜色。

###${prefix|default("#")} intensity(number) = ${defaultMainLightIntensity|default(1)}

主光源的强度。

###${prefix|default("#")} alpha(number) = ${defaultMainLightAlpha|default(0)}

主光源绕 x 轴，即上下旋转的角度。配合 [beta](${componentType}.light.main.beta) 控制光源的方向。

如下示意图：

![](~light-alpha-beta.png)

###${prefix|default("#")} beta(number) = ${defaultMainLightAlpha|default(0)}

主光源绕 y 轴，即左右旋转的角度。

##${prefix|default("#")} ambient(Object)

环境光设置。

###${prefix|default("#")} color(string) = ${defaultAmbientLightColor|default('#fff')}

环境光的颜色。

###${prefix|default("#")} intensity(number) = ${defaultAmbientLightIntensity|default(0.2)}

环境光的强度。

##${prefix|default("#")} ambientCubemap(Object)

ambientCubemap 会使用纹理作为光源的环境光， 会为物体提供漫反射和高光反射。可以通过 [diffuseIntensity](${componentType}.light.ambientCubemap.diffuseIntensity) 和 [specularIntensity](${componentType}.light.ambientCubemap.specularIntensity) 分别设置漫反射强度和高光反射强度。

###${prefix|default("#")} texture(string)

环境光纹理的 url，支持使用`.hdr`格式的 HDR 贴图。可以从 http://www.hdrlabs.com/sibl/archive.html 等网站获取 `.hdr` 的资源。

例如：

```js
ambientCubemap: {
    texture: 'pisa.hdr',
    // 解析 hdr 时使用的曝光值
    exposure: 1.0
}
```

###${prefix|default("#")} diffuseIntensity(number) = ${defaultAmbientCubemapLightDiffuseIntensity|default(0.5)}

漫反射的强度。

###${prefix|default("#")} diffuseIntensity(number) = ${defaultAmbientCubemapLightSpecularIntensity|default(0.5)}

高光反射的强度。

