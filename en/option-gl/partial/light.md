{{ target: partial-light }}

#${prefix|default("#")} light(Object)

Light related settings. Invalid when [shading](~${componentType}.shading) is 'color'.

The lighting settings affect the components and all the charts on the component's coordinate system.

A reasonable lighting setting can make the brightness and darkness of the whole scene richer and more layered.

##${prefix|default("#")} main(Object)

The setting of the main light source of the scene. In the [globe](~globe) component is the sun.

###${prefix|default("#")} color(string) = ${defaultMainLightColor|default('#fff')}

The color of the main light source.


###${prefix|default("#")} intensity(number) = ${defaultMainLightIntensity|default(1)}

The intensity of the main light source.

###${prefix|default("#")} shadow(boolean) = false

Whether the main light source displays a shadow. The default is off.

Turning on the shadows can bring more realistic and layered lighting to the scene. But it also increases the operating overhead of the program.

The following two images show the difference between turning on the shadow and turning off the shadow.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-shadow.png" width="100%" title="Shadow">
    <img src="documents/asset/gl/img/geo-no-shadow.png" width="100%" title="No Shadow">
</div>

###${prefix|default("#")} shadowQuality(string) = 'medium'

The quality of the shadow. You can choose `'low'`, `'medium'`, `'high'`, `'ultra'`

The following two images shows the difference between low quality and high quality shadows.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-shadow-low.png" width="100%" title="Low">
    <img src="documents/asset/gl/img/geo-shadow-high.png" width="100%" title="High">
</div>

###${prefix|default("#")} alpha(number) = ${defaultMainLightAlpha|default(0)}

The main light source is around the x-axis, which is the angle of up-down rotation. Control the direction of the light with [beta](~${componentType}.light.main.beta).

As the following image show:

![](~light-alpha-beta.png)

The [globe](~globe) component can control the time of sunlight by [time](~globe.light.main.time).

###${prefix|default("#")} beta(number) = ${defaultMainLightAlpha|default(0)}

The main light source is around the y-axis, which is the angle of the left-right rotation.


{{ block: light-extend }}
{{ /block }}

##${prefix|default("#")} ambient(Object)

Global ambient light settings.

###${prefix|default("#")} color(string) = ${defaultAmbientLightColor|default('#fff')}

The color of ambient light.

###${prefix|default("#")} intensity(number) = ${defaultAmbientLightIntensity|default(0.2)}

The intensity of ambient light.

##${prefix|default("#")} ambientCubemap(Object)

The ambientCubemap uses texture as the source of ambient light, which provides diffuse and specular for objects. The diffuse and specular can be set separately by [diffuseIntensity](~${componentType}.light.ambientCubemap.diffuseIntensity) and [specularIntensity](~${componentType}.light.ambientCubemap.specularIntensity).


###${prefix|default("#")} texture(string)

The URL of the ambient cubemap supports HDR images in the `.hdr` format. You can obtained the resources for `.hdr` from http://www.hdrlabs.com/sibl/archive.html and other websites.

Example：

```ts
ambientCubemap: {
    texture: 'pisa.hdr',
    // The exposure value used when analytic hdr
    exposure: 1.0
}
```

###${prefix|default("#")} diffuseIntensity(number) = ${defaultAmbientCubemapLightDiffuseIntensity|default(0.5)}

The intensity of diffuse.

###${prefix|default("#")} specularIntensity(number) = ${defaultAmbientCubemapLightSpecularIntensity|default(0.5)}

The intensity of specular.

