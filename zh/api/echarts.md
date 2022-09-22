{{ target: echarts }}
# echarts(Object)

全局 echarts 对象，在 script 标签引入 `echarts.js` 文件后获得，或者在 AMD 环境中通过 `require('echarts')` 获得。

## init(Function)
```ts
(dom?: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {
    devicePixelRatio?: number,
    renderer?: string,
    useDirtyRect?: boolean,     // 从 `5.0.0` 开始支持
    useCoarsePointer?: boolean, // 从 `5.4.0` 开始支持
    pointerSize?: number,       // 从 `5.4.0` 开始支持
    ssr?: boolean,              // 从 `5.3.0` 开始支持
    width?: number|string,
    height?: number|string,
    locale?: string             // 从 `5.0.0` 开始支持
}) => ECharts
```
创建一个 ECharts 实例，返回 [echartsInstance](~echartsInstance)，不能在单个容器上初始化多个 ECharts 实例。

**参数解释**

+ `dom`

    实例容器，一般是一个具有高宽的 DIV 元素。只有在设置`opts.ssr`开启了服务端渲染后该参数才是可选。

    也支持直接使用`canvas`元素作为容器，这样绘制完图表可以直接将 canvas 作为图片应用到其它地方，例如在 WebGL 中作为贴图，这跟使用 [getDataURL](~echartsInstance.getDataURL) 生成图片链接相比可以支持图表的实时刷新。

+ `theme`

    应用的主题。可以是一个主题的配置对象，也可以是使用已经通过 [echarts.registerTheme](~echarts.registerTheme) 注册的主题名称。参见 [ECharts 中的样式简介](${handbookPath}concepts/style)。

+ `opts`

    附加参数。有下面几个可选项：

    + `devicePixelRatio`设备像素比，默认取浏览器的值`window.devicePixelRatio`。
    + `renderer` 渲染模式，支持`'canvas'`或者`'svg'`。参见 [使用 Canvas 或者 SVG 渲染](${handbookPath}best-practices/canvas-vs-svg)。
    + `ssr` 是否使用服务端渲染，只有在 SVG 渲染模式有效。开启后不再会每帧自动渲染，必须要调用 [renderToSVGString](~echartsInstance.renderToSVGString) 方法才能得到渲染后 SVG 字符串。
    + `useDirtyRect`是否开启脏矩形渲染，只有在 Canvas 渲染模式有效，默认为`false`。参见 [ECharts 5 新特性](${handbookPath}basics/release-note/v5-feature)。
    + `useCoarsePointer` 是否扩大可点击元素的响应范围。`null` 表示对移动设备开启；`true` 表示总是开启；`false` 表示总是不开启。参见[增加交互响应范围](${handbookPath}how-to/interaction/coarse-pointer)。
    + `pointerSize` 扩大元素响应范围的像素大小，配合 `opts.useCoarsePointer`使用。
    + `width` 可显式指定实例宽度，单位为像素。如果传入值为`null`/`undefined`/`'auto'`，则表示自动取 `dom`（实例容器）的宽度。
    + `height` 可显式指定实例高度，单位为像素。如果传入值为`null`/`undefined`/`'auto'`，则表示自动取 `dom`（实例容器）的高度。
    + `locale` 使用的语言，内置 `'ZH'` 和 `'EN'` 两个语言，也可以使用 [echarts.registerLocale](~echarts.registerLocale) 方法注册新的语言包。目前支持的语言见 [src/i18n](https://github.com/apache/echarts/tree/release/src/i18n)。

    如果不指定主题，也需在传入`opts`前先传入`null`，如：
    ```ts
    const chart = echarts.init(dom, null, {renderer: 'svg'});
    ```

**注：**
如果容器是隐藏的，ECharts 可能会获取不到 DIV 的高宽导致初始化失败，这时候可以明确指定 DIV 的`style.width`和`style.height`，或者在`div`显示后手动调用 [resize](~echartsInstance.resize) 调整尺寸。

在使用服务端渲染的模式下，必须通过`opts.width`和`opts.height`设置高和宽。


## connect(Function)
```ts
(group:string|Array)
```

多个图表实例实现联动。

**参数：**
+ `group`
    group 的 id，或者图表实例的数组。

**示例：**
```ts
// 分别设置每个实例的 group id
chart1.group = 'group1';
chart2.group = 'group1';
echarts.connect('group1');
// 或者可以直接传入需要联动的实例数组
echarts.connect([chart1, chart2]);
```

## disconnect(Function)
```ts
(group:string)
```
解除图表实例的联动，如果只需要移除单个实例，可以将通过将该图表实例 `group` 设为空。

**参数：**
+ `group`

    group 的 id。

## dispose(Function)
```ts
(target: ECharts|HTMLDivElement|HTMLCanvasElement)
```
销毁实例，实例销毁后无法再被使用。

## getInstanceByDom(Function)
```ts
(target: HTMLDivElement|HTMLCanvasElement) => ECharts
```
获取 dom 容器上的实例。

## use(Function)

> 从 `5.0.1` 开始支持

使用组件，配合新的按需引入的接口使用。

注意：该方法必须在`echarts.init`之前使用。

```ts
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {
    BarChart
} from 'echarts/charts';
// 引入直角坐标系组件，组件后缀都为 Component
import {
    GridComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
    CanvasRenderer
} from 'echarts/renderers';

// 注册必须的组件
echarts.use(
    [GridComponent, BarChart, CanvasRenderer]
);
```
更详细的使用方式见 [在项目中引入 Apache ECharts](${handbookPath}basics/import) 一文

## registerMap(Function)

```ts
(
    mapName: string,
    opt: {
        geoJSON: Object | string;
        specialAreas?: Object;
    }
)
| (
    mapName: string,
    opt: {
        svg: Object | string;
    }
)
| (
    mapName: string,
    geoJSON: Object | string,
    specialAreas?: Object
)
```
注册可用的地图，只在 [geo](option.html#geo) 组件或者 [map](option.html#series-map) 图表类型中使用。

使用方法见 [option.geo](option.html#geo.map)。

**参数：**
+ `mapName`

    地图名称，在 [geo](option.html#geo) 组件或者 [map](option.html#series-map) 图表类型中设置的 `map` 对应的就是该值。

+ `opt`

    + `geoJSON` 可选。GeoJson 格式的数据，具体格式见 [https://geojson.org/](https://geojson.org/)。可以是 JSON 字符串，也可以是解析得到的对象。这个参数也可以写为 `geoJson`，效果相同。

    + `svg` 可选。从 `v5.1.0` 开始支持SVG 格式的数据。可以是字符串，也可以是解析得到的 SVG DOM 对象。更多信息参见 [SVG 底图](tutorial.html#%E5%9C%B0%E7%90%86%E5%9D%90%E6%A0%87%E7%B3%BB%E5%92%8C%E5%9C%B0%E5%9B%BE%E7%B3%BB%E5%88%97%E7%9A%84%20SVG%20%E5%BA%95%E5%9B%BE)。

    + `specialAreas` 可选。将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看。只在 `geoJSON` 中生效，`svg` 中不生效。

示例 [USA Population Estimates](${galleryEditorPath}map-usa)：

```ts
echarts.registerMap('USA', usaJson, {
    // 把阿拉斯加移到美国主大陆左下方
    Alaska: {
        // 左上角经度
        left: -131,
        // 左上角纬度
        top: 25,
        // 经度横跨的范围
        width: 15
    },
    // 夏威夷
    Hawaii: {
        left: -110,
        top: 28,
        width: 5
    },
    // 波多黎各
    'Puerto Rico': {
        left: -76,
        top: 26,
        width: 2
    }
});
```

注：如果你在项目中使用了按需引入，从 v5.3.0 开始`registerMap`必须要在引入地图组件后才能使用。

## getMap(Function)
```ts
(mapName: string) => Object
```
获取已注册的地图，返回的对象类型如下

```ts
{
    // 地图的 geoJSON 数据
    geoJSON: Object,
    // 地图的特殊区域，见 registerMap
    specialAreas: Object
}
```

注：
+ `geoJSON` 也可写为 `geoJson`，二者引用的是相同的内容。
+ 对于 `registerMap` 所注册的 SVG ，暂并不支持从此方法中返回。
+ 如果你在项目中使用了按需引入，从 v5.3.0 开始`getMap`必须要在引入地图组件后才能使用。


## registerTheme(Function)
```ts
(themeName: string, theme: Object)
```

注册主题，用于[初始化实例](~echarts.init)的时候指定。

## registerLocale(Function)

> 从 `5.0.0` 开始支持

```ts
(locale: string, localeCfg: Object)
```

注册语言包，用于[初始化实例](~echarts.init)的时候指定。语言包格式见 [src/i18n/langEN.ts](https://github.com/apache/echarts/blob/release/src/i18n/langEN.ts)

## setPlatformAPI(Function)

> 从 `5.3.0` 开始支持

```ts
(platformAPI?: {
    createCanvas(): HTMLCanvasElement
    measureText(text: string, font?: string): { width: number }
    loadImage(
        src: string,
        onload: () => void,
        onerror: () => void
    ): HTMLImageElement
}) => void
```

设置平台相关的 API，在 NodeJS 等非浏览器平台的时候可能需要提供。

+ `createCanvas` 创建 Canvas 元素，主要用于测量文本宽度，在没提供`measureText`的时候需要提供。
+ `measureText` 测量文本宽度，默认会通过`createCanvas`得到 Canvas 元素提供的接口来测量文本宽度，也可以替换成更轻量的实现。
+ `loadImage` 加载图片，在使用 Canvas 渲染模式的时候并且使用 URL 作为图片的时候需要提供。

{{ use: echarts-graphic }}
