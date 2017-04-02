{{ target: partial-post-effect }}

#${prefix|default('#')} postEffect(Object)

后处理特效的相关配置，后处理特效可以为画面添加高光，景深，全局阴影（SSAO），调色等效果。可以让整个画面更富有质感。

下面分别是关闭和开启 `postEffect` 的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/globe-posteffect-disable.png" width="100%" title="Disable">
    <img src="documents/asset/gl/img/globe-posteffect-enable.png" width="100%" title="Enable">
</div>

##${prefix|default('#')} enable(boolean) = false

是否开启后处理特效，默认关闭。

##${prefix|default('#')} bloom(Object)

高光特效。高光特效用来表现很“亮”的颜色，因为传统的 RGB 只能表现`0 - 255`范围的颜色，所以对于超出这个范围特别“亮”的颜色，会通过这种高光溢出的特效去表现。如下图

![](~globe-posteffect-bloom.png)

###${prefix|default('#')} enable(boolean) = false

是否开启光晕特效。

###${prefix|default('#')} bloomIntensity(number) = 0.1

光晕的强度，默认为 0.1

##${prefix|default('#')} depthOfField(Object)

景深效果。景深效果是模拟摄像机的光学成像效果，在对焦的区域相对清晰，原理对焦的区域则会逐渐模糊。

景深效果可以让观察者几种注意力到对焦的区域，而且让画面的镜头感更强，大景深还能塑造出微距的模型效果。

下面分别是关闭和开启景深的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/geo-no-dof.png" width="100%" title="Disable">
    <img src="documents/asset/gl/img/geo-dof.png" width="100%" title="Enable">
</div>

