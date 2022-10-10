
{{ target: component-axisPointer }}

# axisPointer(Object)

这是坐标轴指示器（axisPointer）的全局公用设置。

<ExampleBaseOption name="axis-pointer" title="坐标轴指示器" title-en="Axis Pointer">
var base = +new Date(2016, 9, 3);
var oneDay = 24 * 3600 * 1000;
var valueBase = Math.random() * 300;
var valueBase2 = Math.random() * 50;
var data = [];
var data2 = [];

for (var i = 1; i < 10; i++) {
    var now = new Date(base += oneDay);
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);

    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
}

option = {
    legend: {
        top: 'bottom',
        data: ['意向']
    },
    tooltip: {
        triggerOn: 'none',
        position: function (pt) {
            return [pt[0], 130];
        }
    },
    xAxis: {
        type: 'time',
        // boundaryGap: [0, 0],
        axisPointer: {
            value: '2016-10-7',
            snap: true,
            label: {
                show: true,
                formatter: function (params) {
                    return echarts.format.formatTime('yyyy-MM-dd', params.value);
                }
            },
            handle: {
                show: true
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            inside: true
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            inside: true,
            formatter: '{value}\n'
        },
        z: 10
    },
    grid: {
        top: 110,
        left: 15,
        right: 15,
        height: 160
    },
    series: [
        {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'lttb',
            itemStyle: {
                color: '#8ec6ad'
            },
            stack: 'a',
            areaStyle: {
            },
            data: data
        },
        {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'lttb',
            itemStyle: {
                color: '#d68262'
            },
            areaStyle: {
            },
            data: data2
        }

    ]
};

</ExampleBaseOption>

---

{{ use: partial-axisPointer-introduction() }}

---

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-axisPointer-common(
    prefix = "#"
) }}

## link(Array)

不同轴的 axisPointer 可以进行联动，在这里设置。联动表示轴能同步一起活动。轴依据他们的 axisPointer 当前对应的值来联动。

联动的效果可以看这两个例子：[例子A](${galleryViewPath}candlestick-brush&edit=1&reset=1)，[例子B](${galleryViewPath}scatter-nutrients-matrix&edit=1&reset=1)。

link 是一个数组，其中每一项表示一个 link group，一个 group 中的坐标轴互相联动。例如：

```ts
link: [
    {
        // 表示所有 xAxisIndex 为 0、3、4 和 yAxisName 为 'someName' 的坐标轴联动。
        xAxisIndex: [0, 3, 4],
        yAxisName: 'someName'
    },
    {
        // 表示左右 xAxisId 为 'aa'、'cc' 以及所有的 angleAxis 联动。
        xAxisId: ['aa', 'cc'],
        angleAxis: 'all'
    },
    ...
]
```

如上所示，每个 link group 中可以用这些方式引用坐标轴：

```ts
{
    // 以下的 'some' 均表示轴的维度，也就是表示 'x', 'y', 'radius', 'angle', 'single'
    someAxisIndex: [...], // 可以是一个数组或单值或 'all'
    someAxisName: [...],  // 可以是一个数组或单值或 'all'
    someAxisId: [...],    // 可以是一个数组或单值或 'all'
}
```

---

**如何联动不同类型（[axis.type](~xAxis.type)）的轴？**

如果 axis 的类型不同，比如 axisA type 为 'category'，axisB type 为 'time'，可以在每个 link group 中写转换函数（mapper）来进行值的转换，例如：

```ts
link: [{
    xAxisIndex: [0, 1],
    yAxisName: ['yy'],
    mapper: function (sourceVal, sourceAxisInfo, targetAxisInfo) {
        if (sourceAxisInfo.axisName === 'yy') {
            // from timestamp to '2012-02-05'
            return echarts.time.format('yyyy-MM-dd', sourceVal);
        }
        else if (targetAxisInfo.axisName === 'yy') {
            // from '2012-02-05' to date
            return echarts.time.parse(dates[sourceVal]);
        }
        else {
            return sourceVal;
        }
    }
}]
```

mapper 的输入参数：

`{number}` sourceVal

`{Object}` sourceAxisInfo 里面包含 {axisDim, axisId, axisName, axisIndex} 等信息

`{Object}` targetAxisInfo 里面包含 {axisDim, axisId, axisName, axisIndex} 等信息

mapper 的返回值：

`{number}` 转换结果

## triggerOn(string) = 'mousemove|click'

<ExampleUIControlEnum options="mousemove,click,none" />

提示框触发的条件，可选：

+ `'mousemove'`

    鼠标移动时触发。

+ `'click'`

    鼠标点击时触发。

+ `'none'`

    不在 `'mousemove'` 或 `'click'` 时触发。

