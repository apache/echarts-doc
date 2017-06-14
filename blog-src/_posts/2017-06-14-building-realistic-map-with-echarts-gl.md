---
layout: post
title: 在 ECharts GL 中绘制三维地图
description: "ECharts 前段时间发布了超亮眼的 GL，相对于之前已经圈粉无数的 ECharst-X 而言，ECharst GL 更是帅到爆，无论是性能、颜值、类型都有了巨大的飞跃。但是不是更易上手呢？答案是肯定的，用户除了能够根据数据画出诸如三维地图等三维的可视化图之外，只需要在项目中加入几个简单的配置项，就能配制出想要的风格的高质量画面效果。"
tags: [GL, 教程]
lazyLoad: true
image:
  feature: post/2017-06-14/banner.png
author: dingding
---

ECharts 前段时间发布了超亮眼的 GL，相对于之前已经圈粉无数的 ECharst-X 而言，ECharst GL更是帅到爆，无论是性能、颜值、类型都有了巨大的飞跃。但是对于小编这样的设计师来说是不是更易上手呢？答案是肯定的，我们除了能够根据数据画出诸如三维地图等三维的可视化图之外，只需要在项目中加入几个简单的配置项，就能配制出想要的风格的高质量画面效果。

这篇教程就希望通过在 Gallery 里绘制一个有丰富的光效、阴影的写实风格的三维地图的例子，简单介绍一些ECharts GL与画质相关的配置项，最终效果见 [http://gallery.echartsjs.com/editor.html?c=xBkY4tpszb](http://gallery.echartsjs.com/editor.html?c=xBkY4tpszb)（下图为最后的效果）。涉及到太高深专业的算法、代码、什么什么的小设计师我实在是不会，所以这个仅仅能当 GL 入门级教程使用哦～

![]({{ site.url }}/images/post/2017-06-14/banner.png)

## 绘制一个基础的三维地图

首先我们在 Gallery 中用 ECharts GL 画一个基础的三维地图。注意因为 GL 是 ECharts 的一个扩展，所以我们需要在 Gallery 中额外引入 GL 的脚本文件。
「引入文件」只需要在 Gallery中新建作品，然后在「脚本」的配置中加入这行地址就行了。

[http://echarts.baidu.com/resource/echarts-gl-latest/dist/echarts-gl.min.js](http://echarts.baidu.com/resource/echarts-gl-latest/dist/echarts-gl.min.js)

如果要绘制世界地图的话还需要引入上面「常用脚本」的世界地图文件。

![]({{ site.url }}/images/post/2017-06-14/scripts.png)

做好准备工作后我们就可以开始画一个三维的世界地图了，GL 中画三维地图的配置项跟画普通的二维地图一样，只是系列名称从原来的`map`改成`map3D`。

我们先用下面的最基础配置项，基于引入的脚本，生成一个最基础的三维地图系列。

```js
option = {
    series: [{
        type: 'map3D',
        map: 'world'
    }]
};
```

是不是很简单，当然画出来的效果也是非常基础和简陋的。

![]({{ site.url }}/images/post/2017-06-14/map3D-basic.png)


接下来就我们需要做的就是一步一步的添加光照、阴影、后期的配置项把这个三维地图画得更漂亮。


## 添加更丰富的灯光

GL 中大部分组件都支持灯光的配置，这些灯光会影响到组件中的所有图形，灯光的配置项需要统一在组件`light`属性下设置。

```js
light: {
    main: {
        intensity: 1
    },
    ambient: {
        intensity: 0
    }
}
```

通常情况下组件中默认会有一个主光源`main`和一个全局的环境光`ambient`。主光源起到了主要的照明作用，可以让我们刚才画出来的三维地图产生基础的明暗对比，从而使图形产生真实的立体感。全局的环境光可以为整个场景提供全局照亮和统一材质的效果。（添加光照效果如下图）

![]({{ site.url }}/images/post/2017-06-14/map3D-light.png)


我们可以通过`intensity`属性设置不同光源的强度。例如在上面的代码中我们将主光源的强度设成`2`，环境光源的强度设成`0`后可以得到更加强烈的明暗对比。

![]({{ site.url }}/images/post/2017-06-14/map3D-light-high-contrast.png)

默认的环境光只是单纯的对所有图形都加上一个固定的亮度，所以会显得很平淡，如果把主光源去掉（`intensity`设为`0`）的话，整个地图场景会变成灰色。所以为了更丰富的光照效果，我们可以使用 GL 提供的更为强大的`ambientCubemap`作为环境光源。

`ambientCubemap`是指使用一张全景贴图作为环境光源。一般全景的环境光贴图大概是下面这样。

![]({{ site.url }}/images/post/2017-06-14/hdr.png)


大家使用手机的全景模式中就可以拍出类似的全景照片。不过小编建议去寻找专业的 [HDR](https://zh.wikipedia.org/zh-hans/%E9%AB%98%E5%8A%A8%E6%80%81%E8%8C%83%E5%9B%B4%E6%88%90%E5%83%8F) 格式的全景图资源。这里推荐一个有不少免费的HDR全景图资源的网站 [http://www.hdrlabs.com/sibl/archive.html](http://www.hdrlabs.com/sibl/archive.html)。

找到合适的全景图片后，我们可以在 Gallery 的`导入数据`中上传该图片。

![]({{ site.url }}/images/post/2017-06-14/asset-hdr.png)

得到在 Gallery 上该图片地址链接后插入到`ambientCubemap`的`texture`属性中。
```js
light: {
    main: {
        intensity: 1
    },
    ambient: {
        intensity: 0
    },
    ambientCubemap: {
        diffuseIntensity: 1,
        texture: '/asset/get/s/data-1497251035660-HkVJTnsMW.hdr'
    }
}
```
设置了`texture`属性后 GL 就会自动启用环境光贴图作为环境光源。

![]({{ site.url }}/images/post/2017-06-14/map3D-ambientcubemap.png)

因为全景贴图的每个像素都会被计算到光照里，所以相比普通的环境光，使用环境光贴图会让整个光照会显得更真实和丰富。

为了得到更真实的环境光效果，注意此处建议使用`.hdr`格式的图片，因为 [HDR](https://zh.wikipedia.org/zh-hans/%E9%AB%98%E5%8A%A8%E6%80%81%E8%8C%83%E5%9B%B4%E6%88%90%E5%83%8F) 也就是高动态范围图像，它比其他格式的图像有更大亮度的数据存储。对比一下同一张图片`HDR`和`PNG`格式照亮的不同效果。

![]({{ site.url }}/images/post/2017-06-14/map3D-hdr-compare.png)

## 添加阴影

有光的地方就会有阴影，阴影给了光照更多的层次，失去了阴影的光照是没有灵魂的，是平淡乏味的。

在 GL 中可以简单的加上`shadow: true`为主光源添加阴影。同时为了让三维地图有一种放在地面上的立体模型的感觉，我们再显示一个地面`groundPlane`。

```js
light: {
    main: {
        intensity: 1,
        shadow: true
    },
    ambient: {
        intensity: 0
    },
    ambientCubemap: {
        diffuseIntensity: 1,
        texture: '/asset/get/s/data-1491896094618-H1DmP-5px.hdr'
    }
},
groundPlane: {
    show: true
}
```

![]({{ site.url }}/images/post/2017-06-14/map3D-shadow.png)

通过阴影还可以更容易得感受到光照的方向，我们可以通过设置主光源`alpha`、`beta`两个属性设置不同的光照角度，来查看阴影的变化。

```js
main: {
    intensity: 1,
    shadow: true,
    alpha: 150,
    beta: 70
}
```

![]({{ site.url }}/images/post/2017-06-14/map3D-shadow-long.png)

这样就可以实现之前设计圈非常流行的一种长阴影的风格。

## 更丰富的颜色

到这里我们得到的效果跟最初那个简陋的画面已经是天壤之别了，小编作为一个设计师是很钟情于白模的效果的，但是如果你手里有一份数据的话更是锦上添花。
数据的上传和转换可以通过echarts提供的表格数据转换工具实现，
[http://echarts.baidu.com/spreadsheet.html](http://echarts.baidu.com/spreadsheet.html)，数据部分内容不在此多述。如果暂时没有现成数据，可以直接先复制教程实例中的数据，见左侧代码区域`var regionData = [{……}];`内的全部内容，直接复制粘贴即可进行之后操作。

<img src="{{ site.url }}/images/post/2017-06-14/data.png" width="500px" alt="">

将这份数据导入并写入配置项里，


<img src="{{ site.url }}/images/post/2017-06-14/data-assign.png" width="430px" alt="">


接下来，我们可以使用 ECharts 中视觉映射「visualMap」组件将地图中的每块区域赋予不同的颜色。



在 ECharts GL 中使用 visualMap 和在ECharts中并没有任何的不同：

```js
visualMap: {
    show: false,
    min: 0,
    max: 15,
    inRange: {
        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    }
}
```

就是这样子每个国家根据不同数据就呈现出不同的颜色啦。

![]({{ site.url }}/images/post/2017-06-14/map3D-data.png)

## 后期处理

看到后期可能大家第一个想到的就是使用 PS 调色，小编这次主要用到的确实是调色。但其实GL 中除了调色之外，还有例如景深 、描边等诸多的后期效果能让整个画面呈现出你需要的效果，大家之后可以大胆的尝试。

不知道大家是否能感受到其实此时得到的图片整体明度偏暗，色相偏蓝。就如我们在拍完照片后发现色调和曝光不理想需要再次调整图片一样，我们也需要对这张的画面进行后期处理和调色。

后期处理的配置项都是在组件的`postEffect`下。首先可以通过 enable 属性开启。

```js
postEffect: {
    enable: true
}
```

开启后 GL 会自动对整个画面调整曝光到合适的颜色。

当然如果这个画面并不能让我们满意的话，我们还可以通过`postEffect`下的`colorCorrection`配置项去手动的调整颜色。`colorCorrection`下有常见的曝光`exposure`、亮度`brightness`、对比度`contrast`和饱和度`saturation`选项。

但是这次小编要教大家使用这里面更强大的颜色查找表功能`lookupTexture`。这个功能可以让我们在 PS 等自己用着顺手的图像处理软件里处理好图片之后再到 GL 里复现我们在 PS 里调整的颜色曲线。

小编给大家提供了一张初始的颜色查找表，大家把下面这张查找表的图片下载下来后和你的作品截图一起放入 Photoshop 中（可以把作品截图拖入查找表图层的上方，注意需要保持查找表大小不变，作品截图是为了让我们直观的预览调整的效果，调到满意之后，删除作品图层，只保存查找表，之后在GL中载入查找表，查找表的颜色映射会直接在GL中复现）。

<img src="{{ site.url }}/images/post/2017-06-14/lookup.png" width="300px" alt="">

![]({{ site.url }}/images/post/2017-06-14/ps.png)


点击左下角`创建新的填充或调整工具`来选择自己需要调整的配置项，此时两个图层是可以同时调整的，这里可以自由调整各项参数来实现自己想要的效果。我在此使用的是`颜色查找`下自带的`Candlelight.cube`将图片调整成了一种蜡烛光照的复古风格，又调整了亮度和对比度使其更清晰。

![]({{ site.url }}/images/post/2017-06-14/ps-adjusted.png)

![]({{ site.url }}/images/post/2017-06-14/ps-adjusted2.png)

调整完成之后，隐藏作品截图的图层，只需保存颜色查找表（如下图）

<img src="{{ site.url }}/images/post/2017-06-14/lookup-adjusted.png" width="300px" alt="">

![]({{ site.url }}/images/post/2017-06-14/asset-lookup.png)

将该图在 Gallery 内上传数据，得到在 Gallery 上该图片地址链接后插入到`colorCorrection`的 `lookupTexture`中即可。

![]({{ site.url }}/images/post/2017-06-14/code-lookup.png)

到此，在 ECharts GL 中配置一个三维地图的步骤就完成啦，还想解锁更多 GL 技能的话， 可以直接去 ECharts 官网查看 GL 超多酷炫的实例，或者去查看GL的配置项手册 [http://echarts.baidu.com/option-gl.html](http://echarts.baidu.com/option-gl.html) 尽情的尝试吧～

![]({{ site.url }}/images/post/2017-06-14/banner.png)

## 总结

本文我们介绍了如何在 ECharts GL 中配置出一张好看的写实风格三维地图。小编要偷偷地告诉你，用 ECharts GL 生成的效果图你还可以直接用来做图片素材哦，如果你还在为 PPT 或者自己的设计作品找不到合适的配图素材发愁的话，快来试试直接在 Gallery 里用 ECharts GL 直接生成一张吧。

