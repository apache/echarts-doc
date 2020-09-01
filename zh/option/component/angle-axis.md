
{{ target: component-angle-axis }}

# angleAxis(Object)

极坐标系的角度轴。

<ExampleBaseOption name="two-number-axis" title="双数值轴" title-en="Two Number Axes">
const data = [];

for (let i = 0; i <= 360; i++) {
    const t = i / 180 * Math.PI;
    const r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
}

const option = {
    polar: {
        center: ['50%', '54%']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0,
    },
    radiusAxis: {
        min: 0
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        showSymbol: false,
        data: data
    }],
    animationDuration: 2000
};
</ExampleBaseOption>

<ExampleBaseOption name="two-category-axis" title="双类目轴" title-en="Two Category Axes">

const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
const days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

const option = {
    title: {
        text: 'Punch Card of Github'
    },
    legend: {
        data: ['Punch Card'],
        left: 'right'
    },
    polar: {},
    angleAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false
    },
    radiusAxis: {
        type: 'category',
        data: days
    }
};
</ExampleBaseOption>

{{ use: partial-component-id(
    prefix = "#"
) }}

## polarIndex(number) = 0

角度轴所在的极坐标系的索引，默认使用第一个极坐标系。

## startAngle(number) = 90

<ExampleUIControlAngle default="90" min="-360" max="360" step="1" />

起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方。

如下示例是 startAngle 为 45 的效果：

~[400x400](${galleryViewPath}doc-example/polar-start-angle&edit=1&reset=1)

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

刻度增长是否按顺时针，默认顺时针。

如下示例是 clockwise 为 `false` （逆时针）的效果：

~[400x400](${galleryViewPath}doc-example/polar-anticlockwise&edit=1&reset=1)

{{ use: axis-common(
    prefix = '#',
    componentType = 'angleAxis',
    axisTypeDefault = "'category'",
    hasSplitLineAndArea = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "角度轴",
    defaultZ = 0
) }}

