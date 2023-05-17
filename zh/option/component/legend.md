
{{ target: component-legend }}

# legend(Object)

图例组件。

图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。

ECharts 3 中单个 echarts 实例中可以存在多个图例组件，会方便多个图例的布局。

当图例数量过多时，可以使用 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)，参见：[legend.type](~legend.type)


<ExampleBaseOption name="legend" title="基础图例" title-en="Basic Legend">

option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    dataset: {
        source: [
            ['type', '2012', '2013', '2014', '2015', '2016'],
            ['Forest', 320, 332, 301, 334, 390],
            ['Steppe', 220, 182, 191, 234, 290],
            ['Desert', 150, 232, 201, 154, 190],
            ['Wetland', 98, 77, 101, 99, 40]
        ]
    },
    legend: {
    },
    xAxis: {
        type: 'category',
        axisTick: {show: false}
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            seriesLayoutBy: 'row'
        }
    ]
};
</ExampleBaseOption>

<ExampleBaseOption name="legend-more" title="多源图例" title-en="Legend on Multiple Source">
const option = {
    legend: {
        width: 350,
        left: 0
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    xAxis: [
        {type: 'category', gridIndex: 0},
        {type: 'category', gridIndex: 1}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1}
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        // These series are in the first grid.
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        // These series are in the second grid.
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
    ]
};

</ExampleBaseOption>

## type(string)

<ExampleUIControlEnum options="plain,scroll" />

图例的类型。可选值：

+ `'plain'`：普通图例。缺省就是普通图例。
+ `'scroll'`：可滚动翻页的图例。当图例数量较多时可以使用。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

当使用 `'scroll'` 时，使用这些设置进行细节配置：
+ [legend.scrollDataIndex](~legend.scrollDataIndex)
+ [legend.pageButtonItemGap](~legend.pageButtonItemGap)
+ [legend.pageButtonGap](~legend.pageButtonGap)
+ [legend.pageButtonPosition](~legend.pageButtonPosition)
+ [legend.pageFormatter](~legend.pageFormatter)
+ [legend.pageIcons](~legend.pageIcons)
+ [legend.pageIconColor](~legend.pageIconColor)
+ [legend.pageIconInactiveColor](~legend.pageIconInactiveColor)
+ [legend.pageIconSize](~legend.pageIconSize)
+ [legend.pageTextStyle](~legend.pageTextStyle)
+ [legend.animation](~legend.animation)
+ [legend.animationDurationUpdate](~legend.animationDurationUpdate)

{{ use: partial-component-id(
    prefix = "#"
) }}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

{{ use: partial-rect-layout-width-height(
    componentName = "图例"
) }}

## orient(string) = 'horizontal'

<ExampleUIControlEnum options="vertical,horizontal" default="horizontal" />

图例列表的布局朝向。

可选：
+ `'horizontal'`
+ `'vertical'`

## align(string) = 'auto'

<ExampleUIControlEnum options="auto,left,right" default="auto" />

图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 [left](~legend.left) 值为 `'right'` 以及纵向布局（[orient](~legend.orient) 为 `'vertical'`）的时候为右对齐，即为 `'right'`。

可选：
+ `'auto'`
+ `'left'`
+ `'right'`

## padding(number|Array) = 5

<ExampleUIControlVector dims="T,R,B,L" default="5" min="0" step="0.5" />

{{ use: partial-padding(
    componentName = "图例"
) }}

## itemGap(number) = 10

<ExampleUIControlNumber default="10" min="0" step="0.5" />

图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。

## itemWidth(number) = 25

<ExampleUIControlNumber default="25" min="0" step="0.5" />

图例标记的图形宽度。

## itemHeight(number) = 14

<ExampleUIControlNumber default="14" min="0" step="0.5" />

图例标记的图形高度。

{{ use: partial-legend-style(
    name = "图例",
    prefix = "#"
) }}

## symbolRotate(number|string) = 'inherit'

图形旋转角度，类型为 `number | 'inherit'`。如果为 `'inherit'`，表示取系列的 `symbolRotate`。

## formatter(string|Function) = null

用来格式化图例文本，支持字符串模板和回调函数两种形式。

示例：
```ts
// 使用字符串模板，模板变量为图例名称 {name}
formatter: 'Legend {name}'
// 使用回调函数
formatter: function (name) {
    return 'Legend ' + name;
}
```

## selectedMode(string|boolean) = true

<ExampleUIControlBoolean options="true,false,single,multiple" />

图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 `false` 关闭。

除此之外也可以设成 `'single'` 或者  `'multiple'` 使用单选或者多选模式。

## inactiveColor(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

图例关闭时的颜色。

## inactiveBorderColor(Color) = '#ccc'

<ExampleUIControlColor default="#ccc" />

图例关闭时的描边颜色。

## inactiveBorderWidth(Color) = 'auto'

<ExampleUIControlColor default="#ccc" />

图例关闭时的描边粗细。如果为 `'auto'` 表示：如果系列存在描边，则取 2，如果系列不存在描边，则取 0。如果为 `'inherit'` 则表示：始终取系列的描边粗细。

## selected(Object)

图例选中状态表。

示例：
```
selected: {
    // 选中'系列1'
    '系列1': true,
    // 不选中'系列2'
    '系列2': false
}
```

## textStyle(Object)

图例的公用文本样式。

{{ use: partial-text-style(
    componentName = '图例',
    prefix = '##',
    defaultColor = "#333",
    noAlign = true,
    noVerticalAlign = true
) }}

## tooltip(Object)

图例的 tooltip 配置，配置项同 [tooltip](~tooltip)。默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip，如下示例：

```ts
legend: {
    formatter: function (name) {
        return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
    },
    tooltip: {
        show: true
    }
}
```

## icon(string)

<ExampleUIControlIcon />

图例项的 icon。

{{ use: partial-icon() }}

## data(Array)

图例的数据数组。数组项通常为一个字符串，每一项代表一个系列的 `name`（如果是[饼图](~series-pie)，也可以是饼图单个数据的 `name`）。图例组件会自动根据对应系列的图形标记（symbol）来绘制自己的颜色和标记，特殊字符串 `''`（空字符串）或者 `'\n'`（换行字符串）用于图例的换行。

如果 `data` 没有被指定，会自动从当前系列中获取。多数系列会取自 [series.name](~series.name) 或者 [series.encode](~series.encode) 的 `seriesName` 所指定的维度。如 [饼图](~series-pie) and [漏斗图](~series-funnel) 等会取自 series.data 中的 name。

如果要设置单独一项的样式，也可以把该项写成配置项对象。此时必须使用 `name` 属性对应表示系列的 `name`。

示例
```
data: [{
    name: '系列1',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'red'
    }
}]
```

### name(string)

图例项的名称，应等于某系列的`name`值（如果是饼图，也可以是饼图单个数据的 `name`）。

### icon(string)

图例项的 icon。

{{ use: partial-icon() }}

{{ use: partial-legend-style(
    name = "图例项",
    prefix = "##"
) }}

### symbolRotate(number|string) = 'inherit'

图形旋转角度，类型为 `number | 'inherit'`。如果为 `'inherit'`，表示取系列的 `symbolRotate`。

### textStyle(Object)

图例项的文本样式。

{{ use: partial-component-common-style(
    componentName = '图例',
    prefix = '#',
    defaultBorderColor = "'#ccc'",
    hasBorderRadius = true
) }}

## scrollDataIndex(number) = 0

[legend.type](~legend.type) 为 `'scroll'` 时有效。

图例当前最左上显示项的 `dataIndex`。

`setOption` 时指定此项的话，可决定当前图例滚动到哪里。

但是，如果仅仅想改变图例翻页，一般并不调用 `setOption`（因为这太重量了），仅仅使用 action [legendScroll](api.html#action.legend.legendScroll) 即可。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageButtonItemGap(number) = 5

[legend.type](~legend.type) 为 `'scroll'` 时有效。

图例控制块中，按钮和页信息之间的间隔。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageButtonGap(number) = null

[legend.type](~legend.type) 为 `'scroll'` 时有效。

图例控制块和图例项之间的间隔。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageButtonPosition(string) = 'end'

[legend.type](~legend.type) 为 `'scroll'` 时有效。

图例控制块的位置。可选值为：

+ `'start'`：控制块在左或上。
+ `'end'`：控制块在右或下。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageFormatter(string|Function) = '{current}/{total}'

[legend.type](~legend.type) 为 `'scroll'` 时有效。

图例控制块中，页信息的显示格式。默认为 `'{current}/{total}'`，其中 `{current}` 是当前页号（从 1 开始计数），`{total}` 是总页数。

如果 `pageFormatter` 使用函数，须返回字符串，参数为：
```ts
{
    current: number
    total: number
}
```


参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageIcons(Object)

[legend.type](~legend.type) 为 `'scroll'` 时有效。

图例控制块的图标。

### horizontal(Array)

[legend.orient](~legend.orient) 为 `'horizontal'` 时的翻页按钮图标。

是一个数组，表示 `[previous page button, next page button]`。默认值为 `['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z']`，。

数组中每项，

{{ use: partial-icon-image-path() }}

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

### vertical(Array)

[legend.orient](~legend.orient) 为 `'vertical'` 时的翻页按钮图标。

是一个数组，表示 `[previous page button, next page button]`。默认值为 `['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']`，。

数组中每项，

{{ use: partial-icon-image-path() }}

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageIconColor(string) = '#2f4554'

<ExampleUIControlColor default="#2f4554" />

[legend.type](~legend.type) 为 `'scroll'` 时有效。

翻页按钮的颜色。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageIconInactiveColor(string) = '#aaa'

<ExampleUIControlColor default="#aaa" />

[legend.type](~legend.type) 为 `'scroll'` 时有效。

翻页按钮不激活时（即翻页到头时）的颜色。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageIconSize(number|Array) = 15

<ExampleUIControlVector default="15,15" dims="w,h" />

[legend.type](~legend.type) 为 `'scroll'` 时有效。

翻页按钮的大小。可以是数字，也可以是数组，如 `[10, 3]`，表示 `[宽，高]`。

参见 [滚动图例（垂直）](${galleryEditorPath}pie-legend&edit=1&reset=1) 或 [滚动图例（水平）](${galleryEditorPath}radar2&edit=1&reset=1)。

## pageTextStyle(Object)

[legend.type](~legend.type) 为 `'scroll'` 时有效。

图例页信息的文字样式。

{{ use: partial-simple-text-style(
    componentName = '图例页信息',
    prefix = '##',
    defaultColor = "#333"
) }}

## animation(boolean)

<ExampleUIControlBoolean default="true" />

图例翻页是否使用动画。

## animationDurationUpdate(number) = 800

<ExampleUIControlNumber min="0" default="800" step="20" />

图例翻页时的动画时长。

## emphasis(Object)

### selectorLabel(Object)

{{ use: partial-version(
    version = "4.4.0"
) }}

{{ use: partial-label(
    prefix = '###',
    defaultShowLabel = true,
    noPosition = true,
    formatter = false,
    formatter1d = false
) }}

## selector(boolean|Array) = false

{{ use: partial-version(
    version = "4.4.0"
) }}

图例组件中的选择器按钮，目前包括“全选”和“反选”两种功能。默认不显示，用户可手动开启，也可以手动配置每个按钮的标题。

使用方式如下：

```ts
selector: [
    {
        // 全选
        type: 'all',
        // 可以是任意你喜欢的标题
        title: '全选'
    },
    {
        // 反选
        type: 'inverse',
        // 可以是任意你喜欢的标题
        title: '反选'
    }
]

// 或
selector: true

// 或
selector: ['all', 'inverse']
```

## selectorLabel(Object)

{{ use: partial-version(
    version = "4.4.0"
) }}

选择器按钮的文本标签样式，默认显示。

{{ use: partial-label(
    prefix = '##',
    defaultShowLabel = true,
    noPosition = true,
    formatter = false,
    formatter1d = false
) }}

## selectorPosition(string) = 'auto'

<ExampleUIControlEnum options="auto,start,end" />

{{ use: partial-version(
    version = "4.4.0"
) }}

选择器的位置，可以放在图例的尾部或者头部，对应的值分别为 `'end'` 和 `'start'`。默认情况下，图例横向布局的时候，选择器放在图例的尾部；图例纵向布局的时候，选择器放在图例的头部。

## selectorItemGap(number) = 7

<ExampleUIControlNumber min="0" default="7" step="0.5" />

{{ use: partial-version(
    version = "4.4.0"
) }}

选择器按钮之间的间隔。

## selectorButtonGap(number) = 10

<ExampleUIControlNumber min="0" default="10" step="0.5" />

{{ use: partial-version(
    version = "4.4.0"
) }}

选择器按钮与图例组件之间的间隔。



{{ target: partial-legend-style }}

#${prefix} itemStyle(Object)

${name}的图形样式。其属性的取值为 `'inherit'` 时，表示继承系列中的属性值。

{{ use: partial-item-style(
    prefix = '#' + ${prefix},
    defaultColor = 'inherit',
    defaultBorderColor = 'inherit',
    defaultBorderWidth = 'auto',
    defaultBorderWidthDesc = '当其值为 `"auto"` 时，如果系列有 `borderWidth` 取 2，如果系列没有 `borderWidth` 则取 0。当其值为 `"inherit"` 时，始终取系列的 `borderWidth`。',
    defaultType = 'inherit',
    defaultOpacity = 'inherit',
    defaultShadowBlur = 0,
    defaultShadowColor = 'null',
    defaultShadowOffsetX = 0,
    defaultShadowOffsetY = 0,
    useDecal = true,
    defaultDecal = 'inherit',
    defaultDashOffset = 'inherit',
    defaultCap = 'inherit',
    defaultJoin = 'inherit',
    defaultMiterLimit = 'inherit'
) }}

#${prefix} lineStyle(Object)

${name}图形中线的样式，用于诸如折线图图例横线的样式设置。其属性的取值为 `'inherit'` 时，表示继承系列中的属性值。

{{ use: partial-line-style(
    prefix = '#' + ${prefix},
    defaultWidth = 'auto',
    defaultColor = 'inherit',
    defaultOpacity = 'inherit',
    defaultType = 'inherit',
    defaultCap = 'inherit',
    defaultJoin = 'inherit',
    defaultDashOffset = 'inherit',
    defaultMiterLimit = 'inherit',
    defaultShadowBlur = 'inherit',
    defaultShadowOffsetX = 0,
    defaultShadowOffsetY = 0
) }}

