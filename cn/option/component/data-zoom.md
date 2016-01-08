
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

如下面的例子，y轴 的 `filter` 被设置为 `'empty'`，x轴的 `filter`被设置为 `'filter'`。当进行对 y轴 进行dataZoom时，尺寸超出 y轴 窗口的柱形，会被『设置为空』，从而柱形在x轴还有占位，只是不显示出来。这样的效果，对于离群点（outlier）过滤功能，比较清晰。

~[600x400](${galleryViewPath}doc-example/bar-dataZoom-filterMode&edit=1&reset=1)


## start(number) = 0

数据窗口范围的起始百分比。范围是：0 ~ 100。

[${dataZoomName}.start](~${dataZoomName}.start) 和 [${dataZoomName}.end](~${dataZoomName}.end) 共同用 **百分比** 的形式定义了数据窗口范围。


## end(number) = 100

数据窗口范围的结束百分比。范围是：0 ~ 100。

[${dataZoomName}.start](~${dataZoomName}.start) 和 [${dataZoomName}.end](~${dataZoomName}.end) 共同用 **百分比** 的形式定义了数据窗口范围。


## startValue(number) = null

数据窗口范围的起始数值。定义了 `startValue` 时，则 [${dataZoomName}.start](~${dataZoomName}.start) 失效。

[${dataZoomName}.startValue](~${dataZoomName}.startValue) 和 [${dataZoomName}.endValue](~${dataZoomName}.endValue) 共同用 **绝对数值** 的形式定义了数据窗口范围。


## endValue(number) = null

数据窗口范围的结束数值。定义了 `endValue` 时，则 [${dataZoomName}.end](~${dataZoomName}.end) 失效。

[${dataZoomName}.startValue](~${dataZoomName}.startValue) 和 [${dataZoomName}.endValue](~${dataZoomName}.endValue) 共同用 **绝对数值** 的形式定义了数据窗口范围。


## orient(string) = null

布局方式是横还是竖。不仅是布局方式，对于直角坐标系而言，也决定了，缺省情况控制横向数轴还是纵向数轴。

可选值为：

+ `'horizontal'`：水平。

+ `'vertical'`：竖直。


## throttle(number) = 100

设置触发视图刷新的频率。单位为毫秒（ms）。一般不需要更改这个值。

