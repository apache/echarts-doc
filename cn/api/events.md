{{ target: events }}
# events

在 ECharts 中主要通过 [on](~echartsInstance.on) 方法添加事件处理函数，该文档描述了所有 ECharts 的事件列表。

ECharts 中的事件列表分为两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 [dispatchAction](~echartsInstance.dispatchAction) 后触发的事件。

## 鼠标事件

事件参数是事件对象的数据的各个属性，具体见各个图表类型的 label formatter 回调函数的 params 参数。

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
    // 所有图例的选中状态表。
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
    // 所有图例的选中状态表。
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
视觉映射组件中映射的数值范围的选取事件。

```js
{
    type: 'datarangeselected',
    // 连续型 visualMap 和 离散型 visualMap 不一样
    // 连续型的是一个表示数值范围的数组。
    // 离散型的是一个对象，键值是类目或者分段的索引。值是 `true`, `false`
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
    componentType='pie',
    name='饼图扇形'
) }}

{{ use: event-select(
    componentType='map',
    name='地图区域'
) }}



{{ target: event-select }}
## ${componentType}selectchanged(Event)
**ACTION:** [${componentType}ToggleSelect](~action.${componentType}.${componentType}ToggleSelect)

${name}切换选中状态的事件。

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
**注：** 该事件同 ECharts 2 中的 `${componentType}Selected` 事件相同。

## ${componentType}selected(Event)
**ACTION:** [${componentType}Select](~action.${componentType}.${componentType}Select)

${name}选中后的事件。

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

**注：** ECharts 2.x 中用户开关图例对应的事件从 `${componentType}selected` 改为 [${componentType}selectchanged](~events.${componentType}selectchanged)。

## ${componentType}unselected(Event)
**ACTION:** [${componentType}UnSelect](~action.${componentType}.${componentType}UnSelect)

${name}取消选中后的事件。

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

