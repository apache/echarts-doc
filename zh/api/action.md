{{ target: action-series-query }}// 用 index 或 id 或 name 来指定系列。
    // 可以使用数组指定多个系列。
    seriesIndex?: number | number[],
    seriesId?: string | string[],
    seriesName?: string | string[],{{/target}}

{{ target: action-data-query-multiple }}// 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number | number[],
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string | string[],{{/target}}

{{ target: action-data-query-single }}// 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
    dataIndex?: number,
    // 可选，数据项名称，在有 dataIndex 的时候忽略
    name?: string,{{/target}}

{{ target: action-component-query }}// 用 index 或 id 或 name 来指定 ${componentType} 组件。
    // 可以用数组指定多个 ${componentType} 组件。
    ${componentType}Index?: number | number[],
    ${componentType}Id?: string | string[],
    ${componentType}Name?: string | string[],{{/target}}

{{ target: action-component-item-query-multiple }}// ${componentType} 组件中 ${componentItemDesc} 名称。
    // 可以是一个数组指定多个名称。
    name?: string | string[],{{/target}}

{{ target: action-component-item-query-single }}// ${componentType} 组件中 ${componentItemDesc} 名称。
    name?: string,{{/target}}


{{ target: action }}
# action

ECharts 中支持的图表行为，通过 [dispatchAction](~echartsInstance.dispatchAction) 触发。

**注：** 代码中的 `?:` 表示该属性是可选的。*EVENT:* 是 action 对应触发的事件。

## highlight(Action)

高亮指定的数据图形。

```ts
// 如果要高亮系列：
dispatchAction({
    type: 'highlight',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
});

// 如果要高亮 geo 组件（从 `v5.1.0` 开始支持）：
dispatchAction({
    type: 'highlight',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
});
```

## downplay(Action)

取消高亮指定的数据图形。

```ts
// 如果要取消高亮系列：
dispatchAction({
    type: 'downplay',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
})

// 如果要取消高亮 geo 组件（从 `v5.1.0` 开始支持）：
dispatchAction({
    type: 'downplay',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
});
```

## select(Action)

选中指定的数据。选中数据会使用 [select](option.html#series-bar.select) 配置的样式。

```ts
dispatchAction({
    type: 'select',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
})
```

## unselect(Action)

取消选中指定的数据。

```ts
dispatchAction({
    type: 'unselect',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
})
```

## toggleSelect(Action)

切换选中状态

```ts
dispatchAction({
    type: 'toggleSelect',

    {{ use: action-series-query }}

    {{ use: action-data-query-multiple }}
})
```


## legend

[图例组件](option.html#legend)相关的行为，必须引入[图例组件](option.html#legend)后才能使用。

### legendSelect(Action)
选中图例。

```ts
dispatchAction({
    type: 'legendSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendselected](~events.legendselected)

### legendUnSelect(Action)
取消选中图例。

```ts
dispatchAction({
    type: 'legendUnSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendunselected](~events.legendunselected)

### legendToggleSelect(Action)
切换图例的选中状态。
```ts
dispatchAction({
    type: 'legendToggleSelect',
    // 图例名称
    name: string
})
```

**EVENT:** [legendselectchanged](~events.legendselectchanged)

### legendAllSelect(Action)
将图例全选。
```ts
dispatchAction({
    type: 'legendAllSelect'
})
```

**EVENT:** [legendselectall](~events.legendselectall)

### legendInverseSelect(Action)
将图例反选。
```ts
dispatchAction({
    type: 'legendInverseSelect'
})
```

**EVENT:** [legendinverseselect](~events.legendinverseselect)

### legendScroll(Action)
控制图例的滚动。当 [legend.type](option.html#legend.type) 为 `'scroll'` 时有效。
```ts
dispatchAction({
    type: 'legendScroll',
    scrollDataIndex: number,
    legendId: string
})
```

**EVENT:** [legendscroll](~events.legendscroll)

## tooltip

[提示框组件](option.html#tooltip)相关的行为，必须引入[提示框组件](option.html#tooltip)后才能使用。

### showTip(Action)

显示提示框。

有下面几种使用方式。

1 指定在相对容器的位置处显示提示框，如果指定的位置无法显示则无效。
```ts
dispatchAction({
    type: 'showTip',
    // 屏幕上的 x 坐标
    x: number,
    // 屏幕上的 y 坐标
    y: number,
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: number[] | string | Function,
})
```

2 指定系列中的数据图形，根据 tooltip 的配置项显示提示框。
```ts
dispatchAction({
    type: 'showTip',
    // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
    seriesIndex?: number,
    {{ use: action-data-query-single }},
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: number[] | string | Function,
})
```

3 指定 geo 组件中的 region 名，根据 tooltip 的配置项显示提示框。

{{ use: partial-version(version = '5.1.0') }}

```ts
dispatchAction({
    type: 'showTip',
    {{ use: action-component-query(componentType = 'geo') }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    // 本次显示 tooltip 的位置。只在本次 action 中生效。
    // 缺省则使用 option 中定义的 tooltip 位置。
    position: number[] | string | Function,
})
```

参数`position`同[tooltip.position](option.html#tooltip.position)相同。



### hideTip(Action)

隐藏提示框。

```ts
dispatchAction({
    type: 'hideTip'
})
```

## dataZoom

[数据区域缩放组件](option.html#dataZoom)相关的行为，必须引入[数据区域缩放组件](option.html#dataZoom)后才能使用。

### dataZoom(Action)

数据区域缩放。

```ts
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

### takeGlobalCursor(Action)

启动或关闭 `toolbox` 中 `dataZoom` 的刷选状态。

```ts
myChart.dispatchAction({
    type: 'takeGlobalCursor',
    key: 'dataZoomSelect',
    // 启动或关闭
    dataZoomSelectActive: true
});
```


## visualMap

[视觉映射组件](option.html#visualMap)相关的行为，必须引入[视觉映射组件](option.html#visualMap)后才能使用。

### selectDataRange(Action)

选取映射的数值范围。

```ts
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
```ts
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

## timeline

[时间轴组件](option.html#timeline)相关的行为，必须引入[时间轴组件](option.html#timeline)后才能使用。

### timelineChange(Action)

设置当前的时间点。

```ts
dispatchAction({
    type: 'timelineChange',
    // 时间点的 index
    currentIndex: number
})
```

**EVENT:** [timelinechanged](~events.timelinechanged)

### timelinePlayChange(Action)

切换时间轴的播放状态。

```ts
dispatchAction({
    type: 'timelinePlayChange',
    // 播放状态，true 为自动播放
    playState: boolean
})
```

**EVENT:** [timelineplaychanged](~events.timelineplaychanged)

## toolbox

[工具栏组件](option.html#toolbox)相关的行为，必须引入[工具栏组件](option.html#toolbox)后才能使用。

### restore(Action)
重置 option。

```ts
dispatchAction({
    type: 'restore'
})
```

**EVENT:** [restore](~events.restore)
## geo
[地图组件](option.html#series-geo)相关的行为，必须引入[地图组件](option.html#geo)后才能使用。

{{ use: action-select(
    componentType='geo',
    name='地图区域',
    single=true
) }}

## brush
[区域选择](option.html#brush)相关的行为。

### brush
“刷选”动作进行中时，会触发此 action。
此 action 能设置或删除 chart 中的选框，例如：

```javascript
myChart.dispatchAction({
    type: 'brush',
    areas: [ // areas 表示选框的集合，可以指定多个选框。
             // 如果 areas 为空，则删除所有选框。
             // 注意这并非增量接口而是全量接口，所以应包括所有的选框。
        { // 选框一：

            // 指定此选框是“坐标系选框”，属于 index 为 0 的 geo 坐标系。
            // 也可以通过 xAxisIndex 或 yAxisIndex 来指定此选框属于直角坐标系。
            // 如果没有指定，则此选框属于“全局选框”。不属于任何坐标系。
            // 属于『坐标系选框』，可以随坐标系一起缩放平移。属于全局的选框不行。
            geoIndex: 0,
            // xAxisIndex: 0,
            // yAxisIndex: 0,

            // 指定选框的类型。可以为 'polygon', 'rect', 'lineX', 'lineY'
            brushType: 'polygon',

            // 如果是“全局选框”，则使用 range 来描述选框的范围（里面是像素坐标）。
            range: [
                ...
            ],
            // 如果是“坐标系选框”，则使用 coordRange 来指定选框的范围（里面是坐标系坐标）。
            coordRange: [
                // 这个例子中，因为指定了 geoIndex，所以 coordRange 里单位是经纬度。
                [119.72,34.85],[119.68,34.85],[119.5,34.84],[119.19,34.77]
            ]
        },
        ... // 选框二、三、四、...
    ]
});
```

其中，`areas` 中的 `range` 和 `coordRange` 的格式，根据 brushType 不同而不同：

+ brushType 为 'rect'
    `range` 和 `coordRange` 的格式为：`[[minX, maxX], [minY, maxY]]`
+ brushType 为 'lineX' 或 'lineY'
    `range` 和 `coordRange` 的格式为：[min, maxX]
+ brushType 为 'polygon'
    `range` 和 `coordRange` 的格式为：[[point1X, point1X], [point2X, point2X], ...]

`range` 和 `coordRange` 的区别是：

+ 当此选框为『全局选框』时，使用 `range`。
+ 当此选框为『坐标系选框』时（即指定了 `geoIndex` 或 `xAxisIndex` 或 `yAxisIndex` 时），使用 `coordRange`。
+ `range` 的单位为 *像素*，`coordRange` 的单位为 *坐标系单位*，比如 geo 中，`coordRange` 单位为经纬度，直角坐标系中，coordRange 单位为对应轴的数据的单位。

### brushEnd
{{ use: partial-version(version = "4.5.0") }}
“刷选” 动作完毕时，会自动触发此 action。
其参数和 [brush action](~action.brush.brush) 完全相同。


### takeGlobalCursor

刷选模式的开关。使用此 action 可将当前鼠标变为可刷选状态。
事实上，点击 [toolbox](option.html#toolbox.feature.brush) 中的 brush 按钮时，就是通过这个 action，将当前普通鼠标变为刷选器的。例如：

此 action 对应的事件为 [globalCursorTaken](~events.globalCursorTaken)。

```ts
api.dispatchAction({
    type: 'takeGlobalCursor',
    // 如果想变为“可刷选状态”，必须设置。不设置则会关闭“可刷选状态”。
    key: 'brush',
    brushOption: {
        // 参见 brush 组件的 brushType。如果设置为 false 则关闭“可刷选状态”。
        brushType: string,
        // 参见 brush 组件的 brushMode。如果不设置，则取 brush 组件的 brushMode 设置。
        brushMode: string
    }
});
```


{{ target: action-select }}
### ${componentType}Select(Action)
选中指定的${name}。

```ts
dispatchAction({
    type: '${componentType}Select',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ if: ${single} }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    {{ else }}
    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
    {{ /if }}
})
```

**EVENT:** [${componentType}selected](~events.${componentType}selected)

### ${componentType}UnSelect(Action)
取消选中指定的${name}。

```ts
dispatchAction({
    type: '${componentType}UnSelect',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ if: ${single} }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    {{ else }}
    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
    {{ /if }}
})
```
**EVENT:** [${componentType}unselected](~events.${componentType}unselected)

### ${componentType}ToggleSelect(Action)
切换指定的${name}选中状态。

```ts
dispatchAction({
    type: '${componentType}ToggleSelect',

    {{ use: action-component-query(componentType = 'geo') }}

    {{ if: ${single} }}
    {{ use: action-component-item-query-single(componentType = 'geo', componentItemDesc = 'region') }}
    {{ else }}
    {{ use: action-component-item-query-multiple(componentType = 'geo', componentItemDesc = 'region') }}
    {{ /if }}
})
```
**EVENT:** [${componentType}selectchanged](~events.${componentType}selectchanged)
