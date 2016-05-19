{{ target: action-series-query }}// 可选，系列 index，可以是一个数组指定多个系列
    seriesIndex?: number|Array,
    // 可选，系列名称，可以是一个数组指定多个系列
    seriesName?: string|Array,{{/target}}

{{ target: action-data-query }}// 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
    dataIndex?: number,
    // 可选，数据名称，在有 dataIndex 的时候忽略
    name?: string{{/target}}


{{ target: action }}
# action

ECharts 中支持的图表行为，通过 [dispatchAction](~echartsInstance.dispatchAction) 触发。

**注：** 代码中的 `?:` 表示该属性是可选的。*EVENT:* 是 action 对应触发的事件。

## highlight(Action)

高亮指定的数据图形。

通过`seriesName`或者`seriesIndex`指定系列。如果要再指定某个数据可以再指定`dataIndex`或者`name`。
```js
dispatchAction({
    type: 'highlight',
    {{ use: action-series-query }}
    // 可选，数据的 index
    dataIndex?: number,
    // 可选，数据的 名称
    name?: string
})
```

## downplay(Action)

取消高亮指定的数据图形。

通过`seriesName`或者`seriesIndex`指定系列。如果要指定某个数据可以再指定`dataIndex`或者`name`。
```js
dispatchAction({
    type: 'downplay',
    {{ use: action-series-query }}
    // 可选，数据的 index
    dataIndex?: number,
    // 可选，数据的 名称
    name?: string
})
```


<!--============= legend ==========-->
## legend

[图例组件](option.html#legend)相关的行为，必须引入[图例组件](option.html#legend)后才能使用。

### legendSelect(Action)
选中图例。

```js
dispatchAction({
    type: 'legendSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendselected](~events.legendselected)

### legendUnSelect(Action)
取消选中图例。

```js
dispatchAction({
    type: 'legendUnSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendunselected](~events.legendunselected)

### legendToggleSelect(Action)
切换图例的选中状态。
```js
dispatchAction({
    type: 'legendToggleSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendselectchanged](~events.legendselectchanged)

<!--============= tooltip ==========-->
## tooltip

[提示框组件](option.html#tooltip)相关的行为，必须引入[提示框组件](option.html#tooltip)后才能使用。

### showTip(Action)

显示提示框。

有下面两种使用方式。

1 指定在相对容器的位置处显示提示框，如果指定的位置无法显示则无效。
```js
dispatchAction({
    type: 'showTip',
    // 屏幕上的 x 坐标
    x: number,
    // 屏幕上的 y 坐标
    y: number
})
```

2 指定数据图形，根据 tooltip 的配置项显示提示框。
```js
dispatchAction({
    type: 'showTip',
    // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
    seriesIndex?: number,
    {{ use: action-data-query }}
})
```

### hideTip(Action)

隐藏提示框。

```js
dispatchAction({
    type: 'hideTip'
})
```

<!--============= dataZoom ==========-->
## dataZoom

[数据区域缩放组件](option.html#dataZoom)相关的行为，必须引入[数据区域缩放组件](option.html#dataZoom)后才能使用。

### dataZoom(Action)

数据区域缩放。

```js
dispatchAction({
    type: 'dataZoom',
    // 可选，dataZoom 组件的 index，多个 dataZoom 组件时有用，默认为 0
    dataZoomIndex: number,
    // 开始位置的百分比，0 - 100
    start: number,
    // 结束位置的百分比，0 - 100
    end: number,
    // 开始位置的数值
    startValue: number,
    // 结束位置的数值
    endValue: number
})
```

**EVENT:** [datazoom](~events.datazoom)

<!--============= visualMap ==========-->
## visualMap

[视觉映射组件](option.html#visualMap)相关的行为，必须引入[视觉映射组件](option.html#visualMap)后才能使用。

### selectDataRange(Action)

选取映射的数值范围。

```js
dispatchAction({
    type: 'selectDataRange',
    // 可选，visualMap 组件的 index，多个 visualMap 组件时有用，默认为 0
    visualMapIndex: number,
    // 连续型 visualMap 和 离散型 visualMap 不一样
    // 连续型的是一个表示数值范围的数组。
    // 离散型的是一个对象，键值是类目或者分段的索引。值是 `true`, `false`
    selected: Object|Array
})
```
å
**示例：**
```js
myChart.dispatchAction({
    type: 'selectDataRange',
    // 选取 20 到 40 的值范围
    selected: [20, 40],
    // 取消选中第二段
    selected: { 1: false },
    // 取消选中类目 `优`
    selected: { '优': false }
});

```

**EVENT:** [datarangeselected](~events.datarangeselected)

<!--============= timeline ==========-->
## timeline

[时间轴组件](option.html#timeline)相关的行为，必须引入[时间轴组件](option.html#timeline)后才能使用。

### timelineChange(Action)

设置当前的时间点。

```js
dispatchAction({
    type: 'timelineChange',
    // 时间点的 index
    currentIndex: number
})
```

**EVENT:** [timelinechanged](~events.timelinechanged)

### timelinePlayChange(Action)

切换时间轴的播放状态。

```js
dispatchAction({
    type: 'timelinePlayChange',
    // 播放状态，true 为自动播放
    playState: boolean
})
```

**EVENT:** [timelineplaychanged](~events.timelineplaychanged)

<!--============= toolbox ==========-->
## toolbox

[工具栏组件](option.html#toolbox)相关的行为，必须引入[工具栏组件](option.html#toolbox)后才能使用。

### restore(Action)
重置 option。

```js
dispatchAction({
    type: 'restore'
})
```

**EVENT:** [restore](~events.restore)
<!--============= pie ==========-->
## pie

[饼图](option.html#series-pie)相关的行为，必须引入[饼图](option.html#series-pie)后才能使用。

{{ use: action-select(
    componentType='pie',
    name='饼图扇形'
) }}

<!--============= geo ==========-->
## geo
[地图组件](option.html#series-geo)相关的行为，必须引入[地图组件](option.html#geo)后才能使用。

{{ use: action-select(
    componentType='geo',
    name='地图区域'
) }}


<!--============= map ==========-->
## map
[地图图表](option.html#series-map)相关的行为，必须引入[地图图表](option.html#series-map)后才能使用。

{{ use: action-select(
    componentType='map',
    name='地图区域'
) }}


{{ target: action-select }}
### ${componentType}Select(Action)
选中指定的${name}。

```js
dispatchAction({
    type: '${componentType}Select',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```

**EVENT:** [${componentType}selected](~events.${componentType}selected)

### ${componentType}UnSelect(Action)
取消选中指定的${name}。

```js
dispatchAction({
    type: '${componentType}UnSelect',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```
**EVENT:** [${componentType}unselected](~events.${componentType}unselected)

### ${componentType}ToggleSelect(Action)
切换指定的${name}选中状态。

```js
dispatchAction({
    type: '${componentType}ToggleSelect',
    {{ use: action-series-query }}
    {{ use: action-data-query }}
})
```
**EVENT:** [${componentType}selectchanged](~events.${componentType}selectchanged)
