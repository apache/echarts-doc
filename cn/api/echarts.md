{{ target: echarts }}
# echarts(Object)

全局 echarts 对象，在 script 标签引入 `echarts.js` 文件后获得，或者在 AMD 环境中通过 `require('echarts')` 获得。

## init(Function)
```js
(dom: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {
    devicePixelRatio?: number
    renderer?: string
}) => ECharts
```
创建一个 ECharts 实例，返回 [echartsInstance](~echartsInstance)，不能再单个容器上初始化多个 ECharts 实例。

**参数**
+ `dom`

    实例容器，一般是一个具有高宽的`div`元素。

    **注：**如果`div`是隐藏的，ECharts 可能会获取不到`div`的高宽导致初始化失败，这时候可以明确指定`div`的`style.width`和`style.height`，或者在`div`显示后手动调用 [echartsInstance.resize](echartsInstance.resize) 调整尺寸。

    ECharts 3 中支持直接使用`canvas`元素作为容器，这样绘制完图表可以直接将 canvas 作为图片应用到其它地方，例如在 WebGL 中作为贴图，这跟使用 [echartsInstance.getDataURL](~echartsInstance.getDataURL) 生成图片链接相比可以支持图表的实时刷新。

+ `theme`

    应用的主题。可以是一个主题的配置对象，也可以是使用已经通过 [echarts.registerTheme](~echarts.registerTheme) 注册的主题名称。

+ `opts`

    附加参数。有下面几个可选项：

    + `devicePixelRatio`

        设备像素比，默认取浏览器的值`window.devicePixelRatio`。

    + `renderer`

        渲染器，目前仅支持`'canvas'`。

## connect(Function)
```js
(group:string|Array)
```

多个图表实例实现联动。

**参数：**
+ `group`
    group 的 id，或者图表实例的数组。

**示例：**
```js
// 分别设置每个实例的 group id
chart1.group = 'group1';
chart2.group = 'group1';
echarts.connect('group1');
// 或者可以直接传入需要联动的实例数组
echarts.connect([chart1, chart2]);
```

## disConnect(Function)
```js
(group:string)
```
解除图表实例的联动，如果只需要移除单个实例，可以将通过将该图表实例 `group` 设为空。

**参数：**
+ `group`

    group 的 id。

## dispose(Function)
```js
(target: ECharts|HTMLDivElement|HTMLCanvasElement)
```
销毁实例，实例销毁后无法再被使用。

## getInstanceByDom(Function)
```js
(target: HTMLDivElement|HTMLCanvasElement) => ECharts
```
获取 dom 容器上的实例。

## registerMap(Function)
```js
(mapName: string, geoJson: Object, specialAreas?: Object)
```
注册可用的地图，必须在包括 [geo](option.html#geo) 组件或者 [map](option.html#series-map) 图表类型的时候才能使用。

使用方法见 [option.geo](option.html#geo.map)。

**参数：**
+ `mapName`

    地图名称，在 [geo](option.html#geo) 组件或者 [map](option.html#series-map) 图表类型中设置的 `map` 对应的就是该值。

+ `geoJson`

    GeoJson 格式的数据，具体格式见 [http://geojson.org/](http://geojson.org/)。

+ `specialAreas`

    可选。将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看。

    **示例 [USA Population Estimates](${galleryEditorPath}map-usa)：**
    ```js
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


## getMap(Function)
```js
(mapName: string) => Object
```
获取已注册的地图，返回的对象类型如下

```js
{
    // 地图的 geoJson 数据
    geoJson: Object,
    // 地图的特殊区域，见 registerMap
    specialAreas: Object
}
```

## registerTheme(Function)
```js
(themeName: string, theme: Object)
```

注册主题，用于[初始化实例](~echarts.init)的时候指定。