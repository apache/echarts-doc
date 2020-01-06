{{ target: events }}
# events

在 ECharts 中主要通过 [on](~echartsInstance.on) 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。

ECharts 中的事件分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~echartsInstance.dispatchAction) 后触发的事件。

**示例：**
```js
myChart.on('click', function (params) {
    console.log(params);
});

myChart.on('legendselectchanged', function (params) {
    console.log(params);
});

chart.on('click', 'series.line', function (params) {
    console.log(params);
});

chart.on('mouseover', {seriesIndex: 1, name: 'xx'}, function (params) {
    console.log(params);
});
```

详细的事件注册方式参见 [on](~echartsInstance.on)。

## 鼠标事件

鼠标事件的事件参数是事件对象的数据的各个属性，对于图表的点击事件，基本参数如下，其它图表诸如饼图可能会有部分附加参数。例如饼图会有`percent`属性表示百分比，具体见各个图表类型的 label formatter 回调函数的 `params`。

```js
{
    // 当前点击的图形元素所属的组件名称，
    // 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
    componentType: string,
    // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
    seriesType: string,
    // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
    seriesIndex: number,
    // 系列名称。当 componentType 为 'series' 时有意义。
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
    // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
    // 其他大部分图表中只有一种 data，dataType 无意义。
    dataType: string,
    // 传入的数据值
    value: number|Array,
    // 数据图形的颜色。当 componentType 为 'series' 时有意义。
    color: string,
    // 用户自定义的数据。只在 graphic component 和自定义系列（custom series）
    // 中生效，如果节点定义上设置了如：{type: 'circle', info: {some: 123}}。
    info: *
}
```

鼠标事件包括 `'click'`、`'dblclick'`、`'mousedown'`、`'mousemove'`、`'mouseup'`、`'mouseover'`、`'mouseout'`、`'globalout'`、`'contextmenu'`。


参见 [ECharts 中的事件和行为](http://echarts.baidu.com/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%92%8C%E8%A1%8C%E4%B8%BA)


### click(Event)
### dblclick(Event)
### mousedown(Event)
### mousemove(Event)
### mouseup(Event)
### mouseover(Event)
### mouseout(Event)
### globalout(Event)
### contextmenu(Event)

## legendselectchanged(Event)
**ACTION:** [legendToggleSelect](~action.legend.legendToggleSelect)
切换图例选中状态后的事件。

**注：**图例组件用户切换图例开关会触发该事件。

```js
{
    type: 'legendselectchanged',
    // 切换的图例名称
    name: string
    // 所有图例的选中状态表
    selected: Object
}
```
## legendselected(Event)
**ACTION:** [legendSelect](~action.legend.legendSelect)
图例选中后的事件。

```js
{
    type: 'legendselected',
    // 选中的图例名称
    name: string
    // 所有图例的选中状态表
    selected: Object
}
```

**注：** ECharts 2.x 中用户开关图例对应的事件从 `legendselected` 改为 [legendselectchanged](~events.legendselectchanged)。

## legendunselected(Event)
**ACTION:** [legendUnSelect](~action.legend.legendUnSelect)
图例取消选中后的事件。

```js
{
    type: 'legendunselected',
    // 取消选中的图例名称
    name: string
    // 所有图例的选中状态表。
    selected: Object
}
```


## legendscroll(Event)
**ACTION:** [legendscroll](~action.legend.legendScroll)
图例滚动事件。

```js
{
    type: 'legendscroll',
    scrollDataIndex: number
    legendId: string
}
```


## datazoom(Event)
**ACTION:** [dataZoom](~action.dataZoom.dataZoom)

数据区域缩放后的事件。

```js
{
    type: 'datazoom',
    // 缩放的开始位置的百分比，0 - 100
    start: number
    // 缩放的结束位置的百分比，0 - 100
    end: number
    // 缩放的开始位置的数值，只有在工具栏的缩放行为的事件中存在。
    startValue?: number
    // 缩放的结束位置的数值，只有在工具栏的缩放行为的事件中存在。
    endValue?: number
}
```
## datarangeselected(Event)
**ACTION:** [selectDataRange](~action.dataRange.selectDataRange)
视觉映射组件中，`range` 值改变后触发的事件。

```js
{
    type: 'datarangeselected',
    // 连续型 visualMap 和 离散型 visualMap 不一样
    // 连续型的是一个表示数值范围的数组。
    // 离散型的是一个对象，键值是类目或者分段的索引。值是`true`或`false`
    selected: Object|Array
}
```

## timelinechanged(Event)
**ACTION:** [timelineChange](~action.timeline.timelineChange)
时间轴中的时间点改变后的事件。

```js
{
    type: 'timelinechanged',
    // 时间点的 index
    currentIndex: number
}
```

## timelineplaychanged(Event)
**ACTION:** [timelinePlayChange](~action.timeline.timelinePlayChange)
时间轴中播放状态的切换事件。

```js
{
    type: 'timelineplaychanged',
    // 播放状态，true 为自动播放
    playState: boolean
}
```

## restore(Event)
**ACTION:** [restore](~action.toolbox.restore)
重置 option 事件。
```js
{
    type: 'restore'
}
```

## dataviewchanged(Event)
[工具栏中数据视图](option.html#toolbox.feature.dataView)的修改事件。
```js
{
    type: 'dataviewchanged'
}
```

## magictypechanged(Event)
[工具栏中动态类型切换](option.html#toolbox.feature.magicType)的切换事件。
```js
{
    type: 'magictypechanged',
    // 点击切换的当前类型，同 echarts 2.x 中的 type 属性
    currentType: string
}
```

{{ use: event-select(
    componentType='geo',
    componentTypeFull='geo',
    name='地图区域'
) }}

{{ use: event-select(
    componentType='pie',
    componentTypeFull='series-pie',
    name='饼图扇形'
) }}

{{ use: event-select(
    componentType='map',
    componentTypeFull='series-map',
    name='地图区域'
) }}



## axisareaselected(Event)
[平行坐标轴 (Parallel)](option.html#parallelAxis)范围选取事件。

当进行坐标轴范围选取时，可以用如下方式获取当前高亮的线所对应的 data indices
（即 `series` 的 `data` 中的序号列表）。

```javascript
chart.on('axisareaselected', function () {
    var series0 = chart.getModel().getSeries()[0];
    var series1 = chart.getModel().getSeries()[1];
    var indices0 = series0.getRawIndicesByActiveState('active');
    var indices1 = series1.getRawIndicesByActiveState('active');
    console.log(indices0, indices1);
});
```

## focusnodeadjacency(Event)
[graph](option.html#graph)的邻接节点高亮事件。

参见[focusNodeAdjacency](~action.graph.focusNodeAdjacency)。


## unfocusnodeadjacency(Event)
[graph](option.html#graph)的邻接节点取消高亮事件。

参见[unfocusNodeAdjacency](~action.graph.unfocusNodeAdjacency)。


## brush(Event)

选框添加事件。即发出 [brush](~action.brush) action 得到的事件。

## brushselected(Event)

对外通知当前选中了什么。

参见 [区域选择](option.html#brush)。

这个事件，在 `setOption` 时不会发出，在其他的 dispatchAction 时，或者用户在界面中创建、删除、修改选框时会发出。

事件参数内容为：
```javascript
{
    type: 'brushselected',
    batch: [
        {
            // brush 组件的 id，大多数情况只使用一个 brush 组件，所以不必理会。
            brushId: string,
            // brush 组件的 index。
            brushIndex: number,
            // brush 组件的 name。
            brushName: string,

            // 各个选框
            areas: [
                { // 第一个选框
                    // 则此处使用 range 或者 coordRange 记录了选框当前的形状。
                    // 其值参见 brush action 中 range/coordRange 的解释。

                    // 如果此选框是“全局选框”（即并不属于哪个坐标系），则使用 range 单位是像素。
                    range: Array.<number>,

                    // 如果此选框是“坐标系选框”，则使用 coordRange 和 coordRanges，单位为坐标系单位。
                    coordRange: Array.<number>,
                    // 其中，如果选框属于直角坐标系（grid）的某个轴（例如指定了 xAxisIndex: 0），
                    // 且此轴对应于多个 cartesian（例如，对应两个 yAxis），那么这里 coordRanges
                    // 是每个 cartesian 中的选框的范围值。而 coordRange 是 coordRanges[0]。
                    coordRanges: Array.<Array.<number>>,
                },
                ...
            ],

            // 每个系列被选中的项。
            // 注意，如果某个系列不支持 brush，但是还是会在这里出现对应的项。
            // 也就是说，selected 可以使用 seriesIndex 来直接找到对应的项。
            selected: [
                { // series 0 被选中的项
                    seriesIndex: number,
                    dataIndex: [ 3, 6, 12, 23 ] // 用这些 dataIndex，可以去原始数据中找到真正的值。
                },
                { // series 1 被选中的项
                    seriesIndex: number,
                    dataIndex: []
                },
                ...
            ]
        },
        ...
    ]
}
```

事件使用方式例如：

```javascript
var dataBySeries = [
    [ 12, 23, 54, 6 ], // series 0 的数据
    [ 34, 34433, 2223, 21122, 1232, 34 ] // series 1 的数据
];

chart.setOption({
    ...,
    brush: {
        ...
    },
    series: [
        { // series 0
            data: dataBySeries[0]
        },
        { // series 1
            data: dataBySeries[1]
        }
    ]
});

chart.on('brushSelected', function (params) {
    var brushComponent = params.batch[0];

    var sum = 0; // 统计选中项的数据值的和

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        // 对于每个 series：
        var dataIndices = brushComponent.selected[sIdx].dataIndex;

        for (var i = 0; i < dataIndices.length; i++) {
            var dataIndex = dataIndices[i];
            sum += dataBySeries[sIdx][dataIndex];
        }
    }
    console.log(sum); // 用某种方式输出统计值。
});
```

如果想**避免此事件频繁触发**，可以使用 [brush.throttleType](option.html#brush.throttleType)。



## globalcursortaken(Event)

参见 [takeGlobalCursor](~action.brush.takeGlobalCursor)。



## rendered(Event)

渲染结束事件。注意 `rendered` 事件并不代表渲染动画（参见 [animation](~animation) 相关配置）或者渐进渲染（参见 [progressive](~series-scatter.progressive) 相关配置）停止，只代表本帧的渲染结束。

例如：
```js
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('rendered', function () {
    snapshotImage.src = chart.getDataURL();
});
```


## finished(Event)

渲染完成事件。当渲染动画（参见 [animation](~animation) 相关配置）或者渐进渲染（参见 [progressive](~series-scatter.progressive) 相关配置）停止时触发。

```js
var snapshotImage = new Image();
document.body.append(snapshotImage);
chart.on('finished', function () {
    snapshotImage.src = chart.getDataURL();
});
```



{{ target: event-select }}
## ${componentType}selectchanged(Event)
**ACTION:** [${componentType}ToggleSelect](~action.${componentType}.${componentType}ToggleSelect)

[${componentTypeFull}](option.html#${componentTypeFull}) 中${name}切换选中状态的事件。

用户点击选中会触发该事件。

```js
{
    type: '${componentType}selectchanged',
    // 系列 ID，可以在 option 中传入
    seriesId: string
    // 数据名称
    name: name,
    // 所有数据的选中状态表。
    selected: Object
}
```
{{ if: ${componentType} !== 'geo' }}
**注：** 该事件同 ECharts 2 中的 `${componentType}Selected` 事件相同。
{{ /if }}

## ${componentType}selected(Event)
**ACTION:** [${componentType}Select](~action.${componentType}.${componentType}Select)

[${componentTypeFull}](option.html#{componentTypeFull}) 中${name}选中后的事件。

使用`dispatchAction`可触发此事件，用户点击不会触发此事件（用户点击事件请使用 [${componentType}selectchanged](~events.${componentType}selectchanged)）。

```js
{
    type: '${componentType}selected',
    // 系列 ID，可以在 option 中传入
    seriesId: string
    // 数据名称
    name: name,
    // 所有数据的选中状态表。
    selected: Object
}
```

{{ if: ${componentType} !== 'geo' }}
**注：** ECharts 2.x 中用户开关图例对应的事件从 `${componentType}selected` 改为 [${componentType}selectchanged](~events.${componentType}selectchanged)。
{{ /if }}

## ${componentType}unselected(Event)
**ACTION:** [${componentType}UnSelect](~action.${componentType}.${componentType}UnSelect)

[${componentTypeFull}](option.html#${componentTypeFull}) 中${name}取消选中后的事件。

使用`dispatchAction`可触发此事件，用户点击不会触发此事件（用户点击事件请使用 [${componentType}selectchanged](~events.${componentType}selectchanged)）。

```js
{
    type: '${componentType}unselected',
    // 系列 ID，可以在 option 中传入
    seriesId: string
    // 数据名称
    name: name,
    // 所有数据的选中状态表。
    selected: Object
}
```

