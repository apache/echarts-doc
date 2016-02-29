
{{target: component-data-zoom}}

# dataZoom(Array|Object)


`dataZoomx` 组件 用于对数据进行区域缩放，从而能自由关注细节的数据信息，或者概览数据整体。


现在支持几种子组件：

+ [内置型数据区域缩放组件（dataZoomInside）](~dataZoom-inside)：内置于坐标系中。

+ [滑动条型数据区域缩放组件（dataZoomSlider）](~dataZoom-slider)：有单独的滑动条操作。

+ [框选型数据区域缩放组件（dataZoomSelect）](~toolbox.feature.dataZoom)：全屏的选框进行数据区域缩放。入口和配置项均在 `toolbox`中。


如下例子：
~[600x400](${galleryViewPath}doc-example/scatter-dataZoom-all&edit=1&reset=1)



**使用注意：**

+ `dataZoom` 主要是对 `数轴（axis）` 进行操作。

    可以通过 [dataZoom.xAxisIndex](~dataZoom.xAxisIndex) 或 [dataZoom.yAxisIndex](~dataZoom.yAxisIndex) 或 [dataZoom.radiusAxisIndex](~dataZoom.radiusAxisIndex) 或 [dataZoom.angleAxisIndex](~dataZoom.angleAxisIndex) 来指定 `dataZoom` 控制哪个或哪些数轴。

+ `dataZoom` 组件可 **同时存在多个**，起到共同控制的作用。控制同一个数轴的组件，会自动联动。

+ `dataZoom` 的运行原理是通过 `数据过滤` 来达到 `数据窗口缩放` 的效果。

    数据过滤模式的设置不同，效果也不同，参见：[dataZoom.filterMode](~dataZoom.filterMode)。

+ `dataZoom` 的数据窗口范围的设置，目前支持两种形式：

    + 百分比形式：参见 [dataZoom.start](~dataZoom.start) 和 [dataZoom.end](~dataZoom.end)。

    + 绝对数值形式：参见 [dataZoom.startValue](~dataZoom.startValue) 和 [dataZoom.endValue](~dataZoom.endValue)。

+ 当使用百分比形式指定 `dataZoom` 范围时（且轴的 `min`/`max`/`scale`没有设置时），`dataZoom` 的结果是和其定义顺序相关的。例如，我们有这样一组定义：

    ```javascript
    {
        dataZoom: [
             {xAxisIndex: 0, start: 30, end: 70},
             {yAxisIndex: 0, start: 20, end: 80}
        ]
    }
    ```
    x 轴的 dataZoom 组件定义在 y 轴的 dataZoom 组件之前，那么，x 轴的 [30, 70] 表示全部数据的 30% 到 70%，
    而 y 轴的 dataZoom 组件的 [20, 80] 表示经过 x 轴的 [30, 70] 过滤处理后，所得数据集的 20% 到 80%。所以在这种设置下，y 轴的 dataZoom 组件拖动时，只会改变 y 方向的数据范围，而 x 轴的 dataZoom 组件拖动时，可能会同时改变 x 轴和 y 轴方向的数据范围（即 y 轴方向自动随 x 轴窗口变化而缩放）。

    如果需要改变这种处理顺序，那么改变 dataZoom 中各项的顺序即可。

    当然，如果 y 轴的 min/max 进行了设置，那么 [20, 80] 表示 min / max 的 20% 到 80%，x 轴的 dataZoom 组件不再能影响 y 轴方向的数据范围。


<br>
<br>


下面是详细介绍：



{{import: component-data-zoom-inside}}
{{import: component-data-zoom-slider}}






{{target: partial-data-zoom-axis-example}}
如果是 `number` 表示控制一个轴，如果是 `Array` 表示控制多个轴。

例如有如下 ECharts option：

```javascript
option: {
    ${axisName}: [
        {...}, // 第一个 ${axisName}
        {...}, // 第二个 ${axisName}
        {...}, // 第三个 ${axisName}
        {...}  // 第四个 ${axisName}
    ],
    dataZoom: [
        { // 第一个 dataZoom 组件
            ${axisName}Index: [0, 2] // 表示这个 dataZoom 组件控制 第一个 和 第三个 ${axisName}
        },
        { // 第二个 dataZoom 组件
            ${axisName}Index: 3      // 表示这个 dataZoom 组件控制 第四个 ${axisName}
        }
    ]
}
```




{{target: partial-data-zoom-common}}



## xAxisIndex(number|Array) = null

设置 `${dataZoomName}` 组件控制的 `x轴`（即[xAxis](~xAxis)，是直角坐标系中的概念，参见 [grid](~grid)）。

不指定时，当 [${dataZoomName}.orient](~${dataZoomName}.orient) 为 `'horizontal'`时，默认控制所有 `xAxis`。

{{use: partial-data-zoom-axis-example(
    axisName='xAxis'
)}}


## yAxisIndex(number|Array) = null

设置 `${dataZoomName}` 组件控制的 `y轴`（即[yAxis](~yAxis)，是直角坐标系中的概念，参见 [grid](~grid)）。

不指定时，当 [${dataZoomName}.orient](~${dataZoomName}.orient) 为 `'vertical'`时，默认控制所有 `yAxis`。

{{use: partial-data-zoom-axis-example(
    axisName='yAxis'
)}}


## angleAxisIndex(number|Array) = null


设置 `${dataZoomName}` 组件控制的 `角度轴`（即[angleAxis](~angleAxis)，是极坐标系中的概念，参见 [polar](~polar)）。

不指定时，默认控制所有 `angleAxis`。

{{use: partial-data-zoom-axis-example(
    axisName='angleAxis'
)}}


## radiusAxisIndex(number|Array) = null

设置 `${dataZoomName}` 组件控制的 `半径轴`（即[radiusAxis](~radiusAxis)，是极坐标系中的概念，参见 [polar](~polar)）。

不指定时，默认控制所有 `radiusAxis`。

{{use: partial-data-zoom-axis-example(
    axisName='radiusAxis'
)}}


## filterMode(string) = 'filter'

`dataZoom` 的运行原理是通过 `数据过滤` 来达到 `数据窗口缩放` 的效果。

数据过滤模式的设置不同，效果也不同。

可选值为：

+ 'filter'

    数据窗口外的数据，被 **过滤掉**。这个配置项是最常用的。

+ 'empty'

    数据窗口外的数据，被 **设置为空**。
    与『过滤掉』的区别是，『设置为空』的数据当空数据展示，也就是说还会占有位置。

如下面的例子，y轴 的 `filterMode` 被设置为 `'empty'`，x轴的 `filterMode` 被设置为 `'filter'`。当进行对 y轴 进行dataZoom时，尺寸超出 y轴 窗口的柱形，会被『设置为空』，从而柱形在x轴还有占位，只是不显示出来。这样的效果，对于离群点（outlier）过滤功能，比较清晰。

~[600x400](${galleryViewPath}doc-example/bar-dataZoom-filterMode&edit=1&reset=1)


## start(number) = 0

数据窗口范围的起始百分比。范围是：0 ~ 100。

[${dataZoomName}.start](~${dataZoomName}.start) 和 [${dataZoomName}.end](~${dataZoomName}.end) 共同用 **百分比** 的形式定义了数据窗口范围。


## end(number) = 100

数据窗口范围的结束百分比。范围是：0 ~ 100。

[${dataZoomName}.start](~${dataZoomName}.start) 和 [${dataZoomName}.end](~${dataZoomName}.end) 共同用 **百分比** 的形式定义了数据窗口范围。


## startValue(number|string|Date) = null

数据窗口范围的起始数值。如果设置了 [${dataZoomName}.start](~${dataZoomName}.start) 则 `startValue` 失效。

[${dataZoomName}.startValue](~${dataZoomName}.startValue) 和 [${dataZoomName}.endValue](~${dataZoomName}.endValue) 共同用 **绝对数值** 的形式定义了数据窗口范围。

注意，如果轴的类型为 `category`，则 `startValue` 即可以设置为 `axis.data` 数组的 `index`，也可以设置为数组值本身。
但是如果设置为数组值本身，会在内部自动转化为数组的 index。


## endValue(number|string|Date) = null

数据窗口范围的结束数值。如果设置了 [${dataZoomName}.end](~${dataZoomName}.end) 则 `endValue` 失效。

[${dataZoomName}.startValue](~${dataZoomName}.startValue) 和 [${dataZoomName}.endValue](~${dataZoomName}.endValue) 共同用 **绝对数值** 的形式定义了数据窗口范围。

注意，如果轴的类型为 `category`，则 `endValue` 即可以设置为 `axis.data` 数组的 `index`，也可以设置为数组值本身。
但是如果设置为数组值本身，会在内部自动转化为数组的 index。


## orient(string) = null

布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。

可选值为：

+ `'horizontal'`：水平。

+ `'vertical'`：竖直。


## zoomLock(boolean) = false

是否锁定选择区域（或叫做数据窗口）的大小。

如果设置为 `true` 则锁定选择区域的大小，也就是说，只能平移，不能缩放。


## throttle(number) = 100

设置触发视图刷新的频率。单位为毫秒（ms）。一般不需要更改这个值。

