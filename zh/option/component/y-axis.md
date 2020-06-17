
{{target: component-y-axis}}

# yAxis(Object)

直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 [offset](~yAxis.offset) 属性防止同个位置多个 Y 轴的重叠。

<ExampleBaseOption title="基础 y 轴示例" name="y-axis">
const option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {},
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
</ExampleBaseOption>

<ExampleBaseOption title="Log 轴示例" name="y-axis-log">
option = {
    legend: {
        left: 'left',
        data: ['2的指数', '3的指数']
    },
    xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        name: 'y',
        minorTick: {
            show: true
        },
        minorSplitLine: {
            show: true
        }
    },
    series: [
        {
            name: '3的指数',
            type: 'line',
            data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        },
        {
            name: '2的指数',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
        },
        {
            name: '1/2的指数',
            type: 'line',
            data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
        }
    ]
};

</ExampleBaseOption>

{{use: partial-component-id(prefix="#")}}

## show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示 y 轴。

## gridIndex(number) = 0

y 轴所在的 grid 的索引，默认位于第一个 grid。

## position(string)

<ExampleUIControlEnum options="left,right" default="left" />

y 轴的位置。

可选：
+ `'left'`
+ `'right'`

默认 grid 中的第一个 y 轴在 grid 的左侧（`'left'`），第二个 y 轴视第一个 y 轴的位置放在另一侧。

## offset(number) = 0

<ExampleUIControlNumber step="0.5" />

Y 轴相对于默认位置的偏移，在相同的 `position` 上有多个 Y 轴的时候有用。

{{ use: axis-common(
    prefix='#',
    componentType='yAxis',
    axisTypeDefault="'value'",
    hasSplitLineAndArea=true,
    galleryViewPath=${galleryViewPath},
    galleryEditorPath=${galleryEditorPath}
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="Y 轴",
    defaultZ=0
) }}