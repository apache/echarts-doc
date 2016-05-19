{{ target: events }}
# events

在 ECharts 中主要通过 [on](~echartsInstance.on) 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。

ECharts 中的事件分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~echartsInstance.dispatchAction) 后触发的事件。

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
    value: number|Array
    // 数据图形的颜色。当 componentType 为 'series' 时有意义。
    color: string
}
```

鼠标事件包括`'click'`，`'dblclick'`，`'mousedown'`，`'mouseup'`，`'mouseover'`，`'mouseout'`，`'globalout'`。


参见 [ECharts 中的事件和行为](http://echarts.baidu.com/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%92%8C%E8%A1%8C%E4%B8%BA)


### click(Event)
### dblclick(Event)
### mousedown(Event)
### mouseup(Event)
### mouseover(Event)
### mouseout(Event)
### globalout(Event)

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
[平行坐标轴 (Parallel)](option.html#parallelAxis) 范围选取事件。

当进行坐标轴范围选取时，可以用如下方式获取当前高亮的线所对应的 data indices
（即 `series` 的 `data` 中的序号列表）。

```javascript
chart.on('axisareaselected', function () {
    var series1 = chart.getModel().getSeries()[0];
    var series2 = chart.getModel().getSeries()[0];
    var indices1 = series1.getRawIndicesByActiveState('active');
    var indices2 = series2.getRawIndicesByActiveState('active');
    console.log(indices1);
    console.log(indices2);
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

