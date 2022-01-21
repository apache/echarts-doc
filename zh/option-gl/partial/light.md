{{ target: partial-light }}

#${prefix|default("#")} light(Object)

光照相关的设置。在 [shading](~${componentType}.shading) 为 `'color'` 的时候无效。

光照的设置会影响到组件以及组件所在坐标系上的所有图表。

合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。

##${prefix|default("#")} main(Object)

场景主光源的设置，在 [globe](~globe) 组件中就是太阳光。

###${prefix|default("#")} color(string) = ${defaultMainLightColor|default('#fff')}

主光源的颜色。

###${prefix|default("#")} intensity(number) = ${defaultMainLightIntensity|default(1)}

主光源的强度。

###${prefix|default("#")} shadow(boolean) = false

主光源是否投射阴影。默认为关闭。

开启阴影可以给场景带来更真实和有层次的光照效果。但是同时也会增加程序的运行开销。

下图是开启阴影以及关闭阴影的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-shadow.png" width="100%" title="Shadow">
    <img src="documents/asset/gl/img/geo-no-shadow.png" width="100%" title="No Shadow">
</div>

###${prefix|default("#")} shadowQuality(string) = 'medium'

阴影的质量。可选`'low'`, `'medium'`, `'high'`, `'ultra'`

下图是低质量和高质量阴影的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-shadow-low.png" width="100%" title="Low">
    <img src="documents/asset/gl/img/geo-shadow-high.png" width="100%" title="High">
</div>

###${prefix|default("#")} alpha(number) = ${defaultMainLightAlpha|default(0)}

主光源绕 x 轴，即上下旋转的角度。配合 [beta](~${componentType}.light.main.beta) 控制光源的方向。

如下示意图：

![](~light-alpha-beta.png)

[globe](~globe) 组件中可以通过 [time](~globe.light.main.time) 控制日光的时间。

###${prefix|default("#")} beta(number) = ${defaultMainLightAlpha|default(0)}

主光源绕 y 轴，即左右旋转的角度。


{{ block: light-extend }}
{{ /block }}

##${prefix|default("#")} ambient(Object)

全局的环境光设置。

###${prefix|default("#")} color(string) = ${defaultAmbientLightColor|default('#fff')}

环境光的颜色。

###${prefix|default("#")} intensity(number) = ${defaultAmbientLightIntensity|default(0.2)}

环境光的强度。

##${prefix|default("#")} ambientCubemap(Object)

ambientCubemap 会使用纹理作为环境光的光源，会为物体提供漫反射和高光反射。可以通过 [diffuseIntensity](~${componentType}.light.ambientCubemap.diffuseIntensity) 和 [specularIntensity](~${componentType}.light.ambientCubemap.specularIntensity) 分别设置漫反射强度和高光反射强度。

###${prefix|default("#")} texture(string)

环境光贴图的 url，支持使用`.hdr`格式的 HDR 图片。可以从 http://www.hdrlabs.com/sibl/archive.html 等网站获取 `.hdr` 的资源。

例如：

```ts
ambientCubemap: {
    texture: 'pisa.hdr',
    // 解析 hdr 时使用的曝光值
    exposure: 1.0
}
```

###${prefix|default("#")} diffuseIntensity(number) = ${defaultAmbientCubemapLightDiffuseIntensity|default(0.5)}

漫反射的强度。

###${prefix|default("#")} specularIntensity(number) = ${defaultAmbientCubemapLightSpecularIntensity|default(0.5)}

高光反射的强度。

