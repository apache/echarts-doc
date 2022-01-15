{{ target: partial-post-effect }}

#${prefix|default('#')} postEffect(Object)

后处理特效的相关配置。后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。

下面分别是关闭和开启 `postEffect` 的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/globe-posteffect-disable.png" width="100%" title="Disable">
    <img src="documents/asset/gl/img/globe-posteffect-enable.png" width="100%" title="Enable">
</div>

注意在开启 postEffect 的时候默认会开启 [temporalSuperSampling](~${componentType}.temporalSuperSampling) 在画面静止后持续对画面增强，包括抗锯齿、景深、SSAO、阴影等。


##${prefix|default('#')} enable(boolean) = false

是否开启后处理特效。默认关闭。

##${prefix|default('#')} bloom(Object)

高光特效。高光特效用来表现很“亮”的颜色，因为传统的 RGB 只能表现`0 - 255`范围的颜色，所以对于超出这个范围特别“亮”的颜色，会通过这种高光溢出的特效去表现。如下图：

![](~globe-posteffect-bloom.png)

###${prefix|default('#')} enable(boolean) = false

是否开启光晕特效。

###${prefix|default('#')} bloomIntensity(number) = 0.1

光晕的强度，默认为 0.1

##${prefix|default('#')} depthOfField(Object)

景深效果。景深效果是模拟摄像机的光学成像效果，在对焦的区域相对清晰，离对焦的区域越远则会逐渐模糊。

景深效果可以让观察者集中注意力到对焦的区域，而且让画面的镜头感更强，大景深还能塑造出微距的模型效果。

下面分别是关闭和开启景深的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-no-dof.png" width="100%" title="Disable">
    <img src="documents/asset/gl/img/geo-dof.png" width="100%" title="Enable">
</div>

###${prefix|default('#')} enable(boolean) = false

是否开启景深。

###${prefix|default('#')} focalDistance(boolean) = 50

初始的焦距，用户可以点击区域自动聚焦。

###${prefix|default('#')} focalRange(boolean) = 20

完全聚焦的区域范围，在此范围内的物体时完全清晰的，不会有模糊

###${prefix|default('#')} fstop(number) = 2.8

镜头的[F值](https://zh.wikipedia.org/wiki/%E7%84%A6%E6%AF%94)，值越小景深越浅。

###${prefix|default('#')} blurRadius(number) = 10

焦外的模糊半径

不同模糊半径的区别：

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-dof-small.png" width="100%" title="blurSize: 3">
    <img src="documents/asset/gl/img/geo-dof-large.png" width="100%" title="blurSize: 10">
</div>

##${prefix|default('#')} screenSpaceAmbientOcclusion(Object)

屏幕空间的环境光遮蔽效果。环境光遮蔽效果可以让拐角处、洞、缝隙等大部分光无法到达的区域变暗，是传统的阴影贴图的补充，可以让整个场景更加自然，有层次。


下面是无 SSAO 和有 SSAO 的效果对比：

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-no-ssao.png" width="100%" title="No SSAO">
    <img src="documents/asset/gl/img/geo-ssao.png" width="100%" title="SSAO">
</div>

##${prefix|default('#')} SSAO(Object)

同 [screenSpaceAmbientOcclusion](~${componentType}.postEffect.screenSpaceAmbientOcclusion)


###${prefix|default('#')} enable(boolean) = false

是否开启环境光遮蔽。默认不开启。

###${prefix|default('#')} quality(string) = 'medium'

环境光遮蔽的质量。支持`'low'`, `'medium'`, `'high'`, `'ultra'`。

###${prefix|default('#')} radius(number) = 2

环境光遮蔽的采样半径。半径越大效果越自然，但是需要设置较高的`'quality'`。

下面是半径值较小与较大之间的区别：

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-ssao-small-radius.png" width="100%" title="Radius: 1">
    <img src="documents/asset/gl/img/geo-ssao-large-radius.png" width="100%" title="Radius: 10">
</div>

###${prefix|default('#')} intensity(number) = 1

环境光遮蔽的强度。值越大颜色越深。

##${prefix|default('#')} colorCorrection(Object)

颜色纠正和调整。类似 Photoshop 中的 Color Adjustments。

下图同个场景调整为冷色系和暖色系的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/buildings-cold.jpg" width="100%" title="Cold">
    <img src="documents/asset/gl/img/buildings-warm.jpg" width="100%" title="Warm">
</div>


###${prefix|default('#')} enable(boolean) = true
是否开启颜色纠正。

###${prefix|default('#')} lookupTexture(string|HTMLImageElement|HTMLCanvasElement)
颜色查找表，推荐使用。

颜色查找表是一张像下面这样的纹理图片。

![200xauto](~lookup.png)

这张是基础的查找表图片，你可以直接拿来使用，为了方便将场景色调调整你想要的效果，你可以将场景截图后在 Photoshop 等图像处理软件中调整颜色到想要的效果，然后将相同的调整应用到上面这张查找表的图片上。

比如调成冷色调后，查找表的纹理图片就会成为下面这样：

![200xauto](~crispwinter.png)

然后那这张纹理图片就作为该配置项的值，就可以得到相同的在 Photoshop 里调整好的效果了。

当然如果你只是想得到一张截图，完全可以不这样操作，但是如果你想在可以实时交互的作品中能方便的调整到理想的色调，这个就非常有用了。

###${prefix|default('#')} exposure(number) = 0

画面的曝光。

###${prefix|default('#')} brightness(number) = 0

画面的亮度。

###${prefix|default('#')} contrast(number) = 1

画面的对比度。

###${prefix|default('#')} saturation(number) = 1

画面的饱和度。



##${prefix|default('#')} FXAA(Object)

在开启 [postEffect](~${componentType}.postEffect) 后，WebGL 默认的 MSAA (Multi Sampling Anti Aliasing) 会无法使用。这时候通过 FXAA (Fast Approximate Anti-Aliasing) 可以廉价方便的解决抗锯齿的问题，FXAA 会对一些场景的边缘部分进行模糊从而解决锯齿的问题，这在一些场景上效果还不错，但是在 echarts-gl 中，需要保证很多文字和线条边缘的锐利清晰，因此 FXAA 并不是那么适用。这时候我们可以通过设置更高的`devicePixelRatio`来使用超采样，如下所示：

```ts
var chart = echarts.init(dom, null, {
    devicePixelRatio: 2
})
```

但是设置更高的`devicePixelRatio` 对电脑性能有很高的要求，所以更多时候我们建议使用 echarts-gl 中的 [temporalSuperSampling](~${componentType}.temporalSuperSampling)，在画面静止后会持续分帧对一个像素多次抖动采样，从而达到超采样抗锯齿的效果。

###${prefix|default('#')} enable(boolean) = false

是否开启 FXAA。默认为不开启。



