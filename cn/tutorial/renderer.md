{{target: renderer}}

# 使用 Canvas 或者 SVG 渲染

浏览器端图表库大多会选择 SVG 或者 Canvas 进行渲染。对于绘制图表来说，这两种技术往往是可替换的，效果相近。但是在一些环境和场景中，他们的表现和能力又有一定差异。例如，在不少环境中，SVG 比 Canvas 内存占用低（这对移动端尤其重要）、渲染性能略高、并且支持浏览器内置的缩放功能而不模糊。而 Canvas 更适宜渲染较大的数据量、并且易于实现一些特效。所以他们的表现依据软硬件平台、数据量、功能需求而不同。

echarts 之前的版本主要以 Canvas 进行渲染（对于 IE8- 使用 VML）。[v3.8](https://github.com/ecomfe/echarts/releases) 发布了 SVG 渲染引擎（beta 版）。在多数场景下，两种引擎都可以适用，并可以通过 [API 参数](http://echarts.baidu.com/api.html#echarts.init) 来设置，从而用户可以根据自己的功能需求和使用场景，采用最合适自己的渲染引擎。

我们强烈欢迎开发者们 [反馈](https://github.com/ecomfe/echarts/issues/new) 给我们使用的体验和场景，帮助我们更好的做优化。

> SVG 和 Canvas 这两种使用方式差异很大的技术，能够做到同时透明支持，主要归功于 echarts 底层库 [zender](https://github.com/ecomfe/zrender) 的抽象和实现。


注：目前的 SVG beta 版中，阴影、材质功能尚未实现。


## 设置渲染引擎

echarts 默认使用 Canvas 渲染。如果想使用 SVG 渲染，echarts 代码中须包括有 SVG 渲染器模块。

+ echarts 的 [预构建文件](http://echarts.baidu.com/download.html) 中，[常用版](http://echarts.baidu.com/dist/echarts.common.min.js) 和 [完整版](http://echarts.baidu.com/dist/echarts.min.js) 已经包含了 SVG 渲染器，可直接使用。而 [精简版](http://echarts.baidu.com/dist/echarts.simple.min.js) 没有包括。
+ 如果 [在线自定义构建 echarts](http://echarts.baidu.com/builder.html)，则需要勾上页面下方的 “SVG 渲染”。
+ 如果 [线下自定义构建 echarts](http://echarts.baidu.com/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)，则须引入 SVG 渲染器模块，即：

```js
import 'zrender/src/svg/svg';
```

然后，我们就可以在代码中，初始化图表实例时，[传入参数](http://echarts.baidu.com/api.html#echarts.init) 选择渲染器类型：

```js
// 使用 Canvas 渲染器（默认）
var chart = echarts.init(containerDom, null, {renderer: 'canvas'});
// 使用 SVG 渲染器
var chart = echarts.init(containerDom, null, {renderer: 'svg'});
```



