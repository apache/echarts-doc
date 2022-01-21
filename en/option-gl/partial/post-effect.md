{{ target: partial-post-effect }}

#${prefix|default('#')} postEffect(Object)

Post-processing effects related configuration. It can add effects such as highlights, depth of field, screen space ambient occlusion (SSAO), toning to the picture. And it can make the whole picture more textured.

The following are the differences between closing `postEffect` and opening `postEffect`.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/globe-posteffect-disable.png" width="100%" title="Disable">
    <img src="documents/asset/gl/img/globe-posteffect-enable.png" width="100%" title="Enable">
</div>

Note that when postEffect is enable, [temporalSuperSampling](~${componentType}.temporalSuperSampling) is enable by default. After the picture is still, the picture will continue to be enhanced, including anti-aliasing, depth of field, SSAO, shadows, etc.

##${prefix|default('#')} enable(boolean) = false

Whether to enable post-processing effects. Not enabled by default.

##${prefix|default('#')} bloom(Object)

Bloom is used to reproducing the effects that occur in real cameras when taking pictures in a bright environment.
Because traditional RGB can only represent colors in the range of '0 - 255', so we need to use the bloom effect simulates fringes of light extending from the borders of bright areas, creating the illusion of a bright light overwhelming the camera. As shown below：

![](~globe-posteffect-bloom.png)

###${prefix|default('#')} enable(boolean) = false

Whether to enable the bloom effect.

###${prefix|default('#')} bloomIntensity(number) = 0.1

The intensity of the bloom. The default is 0.1.

##${prefix|default('#')} depthOfField(Object)

Depth of Field is a post-processing effect that simulates the focus properties of a camera. The area of focus is clear, and the area away from the focus is gradually blurred.

The depth of field effect allows the observer to focus on the area of focus and make the picture feel stronger. Large depth of field can also create a macro model effect.

The following are the differences between turning off and turning on the depth of field effect.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-no-dof.png" width="100%" title="Disable">
    <img src="documents/asset/gl/img/geo-dof.png" width="100%" title="Enable">
</div>

###${prefix|default('#')} enable(boolean) = false

Whether to enable the depth of field.

###${prefix|default('#')} focalDistance(boolean) = 50

The initial focus distance. The user can click on the area to automatically focus.

###${prefix|default('#')} focalRange(boolean) = 20

The size of the in-focus area. The objects in this range are completely clear and there is no blurring.


###${prefix|default('#')} fstop(number) = 2.8

[F value] of the lens (https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94), the smaller the value, the shallower the depth of field.

###${prefix|default('#')} blurRadius(number) = 10

Blur radius outside the focus.

The difference blur effect between the different radius.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-dof-small.png" width="100%" title="blurSize: 3">
    <img src="documents/asset/gl/img/geo-dof-large.png" width="100%" title="blurSize: 10">
</div>

##${prefix|default('#')} screenSpaceAmbientOcclusion(Object)


The ambient occlusion post-processing effect darkens the corners, holes, crevices, and areas where most light can`t reach. It is a supplement to the traditional shadow map, which makes the whole scene more natural and layered.

Below is a comparison of the effects of no SSAO and SSAO:

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-no-ssao.png" width="100%" title="No SSAO">
    <img src="documents/asset/gl/img/geo-ssao.png" width="100%" title="SSAO">
</div>

##${prefix|default('#')} SSAO(Object)

Same as [screenSpaceAmbientOcclusion](~${componentType}.postEffect.screenSpaceAmbientOcclusion)


###${prefix|default('#')} enable(boolean) = false

Whether to enable SSAO (screen space ambient occlusion). Not enabled by default.

###${prefix|default('#')} quality(string) = 'medium'

The quality of SSAO (screen space ambient occlusion). Supporting`'low'`, `'medium'`, `'high'`, `'ultra'`

###${prefix|default('#')} radius(number) = 2

The radius of the SSAO (screen space ambient occlusion). The larger the radius, the more natural the effect, but you need to set a higher `'quality'`.

The following example is the difference between a smaller and larger radius:

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-ssao-small-radius.png" width="100%" title="Radius: 1">
    <img src="documents/asset/gl/img/geo-ssao-large-radius.png" width="100%" title="Radius: 10">
</div>

###${prefix|default('#')} intensity(number) = 1

The intensity of SSAO (screen space ambient occlusion). The larger the value, the darker the color.


##${prefix|default('#')} colorCorrection(Object)

Color correction and adjustment. Similar to Color Adjustments in Photoshop.

The same scene in the figure below is adjusted to the difference between the cool color system and the warm color system.

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/buildings-cold.jpg" width="100%" title="Cold">
    <img src="documents/asset/gl/img/buildings-warm.jpg" width="100%" title="Warm">
</div>


###${prefix|default('#')} enable(boolean) = true

Whether to enable the color correction.

###${prefix|default('#')} lookupTexture(string|HTMLImageElement|HTMLCanvasElement)

Color correction lookup texture, recommended.

The color correction lookup texture is a texture image like the one below.

![200xauto](~lookup.png)

This is the basic lookup texture image that you can use directly.
To adjust the color of the scene to the effect you want, you can take a screenshot of the scene and adjust the color to the desired effect in image processing software such as Photoshop. Then apply the same adjustment to the image of the lookup texture above.

For example, after turning into a cool tone, the image of the lookup texture will look like this:

![200xauto](~crispwinter.png)

Then the texture image is used as the value of the configuration item, and you can get the same effect in Photoshop.

Of course, if you just want to get a screenshot, you don't have to do it anymore, but if you want to easily adjust to the ideal color in real-time interactive works, this is very useful.

###${prefix|default('#')} exposure(number) = 0

The exposure of the image.

###${prefix|default('#')} brightness(number) = 0

The brightness of the image.

###${prefix|default('#')} contrast(number) = 1

The contrast of the image.

###${prefix|default('#')} saturation(number) = 1

The saturation of the image.



##${prefix|default('#')} FXAA(Object)

After opening [postEffect](~${componentType}.postEffect), WebGL's default MSAA (Multi Sampling Anti Aliasing) will not work. At this time, FXAA (Fast Approximate Anti-Aliasing) can solve the anti-aliasing problem quickly and easily. FXAA blurs the edge of the scene to solve the problem of aliasing. It works well on some scenes, but in echarts-gl, you need to ensure that the edges of many texts and lines are sharp and clear, so FXAA is not suitable. At this point we can use supersampling by setting a higher `devicePixelRatio` as follows:

```ts
var chart = echarts.init(dom, null, {
    devicePixelRatio: 2
})
```

However, setting a higher `devicePixelRatio` has high requirements for computer performance, so more often we recommend using [temporalSuperSampling](~${componentType}.temporalSuperSampling) in echarts-gl. After the picture is still, it will continue to sample multiple times and taken at several instances inside the pixel and an average color value is calculated.,thus achieving anti-aliasing effect.

###${prefix|default('#')} enable(boolean) = false

Whether to enable FXAA. Not enabled by default.



