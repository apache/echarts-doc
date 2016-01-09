{{ target: echarts }}
# echarts(Object)

全局 echarts 对象，在 script 标签引入 `echarts.js` 文件后获得，或者在 AMD 环境中通过 `require('echarts')` 获得。

## init(Function)
```js
(dom: HTMLDivElement|HTMLCanvasElement, theme?: Object, opts?: {
    devicePixelRatio?: number
    renderer?: string
}) => echartsInstance
```
创建一个 ECharts 示例，返回 [echartsInstance](~echartsInstance)，不能再单个容器上初始化多个 ECharts 实例。

**参数**
+ `dom`

    实例容器，一般是一个具有高宽的`div`元素。

    **注：**如果`div`是隐藏的，ECharts 可能会获取不到`div`的高宽导致初始化失败，这时候可以明确指定`div`的`style.width`和`style.height`，或者在`div`显示后手动调用 [echartsInstance.resize](echartsInstance.resize) 调整尺寸。

    ECharts 3 中支持直接使用`canvas`元素作为容器，这样绘制完图表可以直接将 canvas 作为图片应用到其它地方，例如在 WebGL 中作为贴图，这跟使用 [echartsInstance.getDataURL](~echartsInstance.getDataURL) 生成图片链接相比可以支持图表的实时刷新。

+ `theme`

    主题对象。TODO

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
cahrt2.group = 'group1';
echarts.connect('group1');
// 或者可以直接传入需要联动的实例数组
echarts.connect([chart1, chart2]);
```

## disConnect(Function)
```js
(group:string)
```
解除图表实例的联动，如果只需要移除单个实例，可以将通过将该图表实例 `group` 设为空。

**参数**
+ `group`

    group 的 id。

## dispose(Function)

## getInstanceByDom(Function)

## registerMap(Function)

## registerTheme()