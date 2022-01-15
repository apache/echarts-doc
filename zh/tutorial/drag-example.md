{{target: drag-example}}

# 小例子：自己实现拖拽

介绍一个实现拖拽的小例子。这个例子是在原生 Apache ECharts<sup>TM</sup> 基础上做了些小小扩展，带有一定的交互性。通过这个例子，我们可以了解到，如何使用 ECharts 提供的 API 实现定制化的富交互的功能。

~[600x400](${galleryViewPath}line-draggable&edit=1&reset=1)

这个例子主要做到了这样一件事，用鼠标可以拖拽曲线的点，从而改变曲线的形状。例子很简单，但是有了这个基础我们还可以做更多的事情，比如在图中可视化得编辑。所以我们从这个简单的例子开始。

echarts 本身没有提供封装好的『拖拽改变图表』功能，因为现在认为这个功能并不足够有通用性。那么这个功能就留给开发者用 API 实现，这也有助于开发者按自己的需要个性定制。


## （一）实现基本的拖拽功能

在这个例子中，基础的图表是一个 [折线图 (series-line)](option.html#series-line)。参见如下配置：

```ts
var symbolSize = 20;

// 这个 data 变量在这里单独声明，在后面也会用到。
var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];

myChart.setOption({
    xAxis: {
        min: -100,
        max: 80,
        type: 'value',
        axisLine: {onZero: false}
    },
    yAxis: {
        min: -30,
        max: 60,
        type: 'value',
        axisLine: {onZero: false}
    },
    series: [
        {
            id: 'a',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize, // 为了方便拖拽，把 symbolSize 尺寸设大了。
            data: data
        }
    ]
});
```

既然折线中原生的点没有拖拽功能，我们就为它加上拖拽功能：用 [graphic](option.html#graphic) 组件，在每个点上面，覆盖一个隐藏的可拖拽的圆点。

```ts
myChart.setOption({
    // 声明一个 graphic component，里面有若干个 type 为 'circle' 的 graphic elements。
    // 这里使用了 echarts.util.map 这个帮助方法，其行为和 Array.prototype.map 一样，但是兼容 es5 以下的环境。
    // 用 map 方法遍历 data 的每项，为每项生成一个圆点。
    graphic: echarts.util.map(data, function (dataItem, dataIndex) {
        return {
            // 'circle' 表示这个 graphic element 的类型是圆点。
            type: 'circle',

            shape: {
                // 圆点的半径。
                r: symbolSize / 2
            },
            // 用 transform 的方式对圆点进行定位。position: [x, y] 表示将圆点平移到 [x, y] 位置。
            // 这里使用了 convertToPixel 这个 API 来得到每个圆点的位置，下面介绍。
            position: myChart.convertToPixel('grid', dataItem),

            // 这个属性让圆点不可见（但是不影响他响应鼠标事件）。
            invisible: true,
            // 这个属性让圆点可以被拖拽。
            draggable: true,
            // 把 z 值设得比较大，表示这个圆点在最上方，能覆盖住已有的折线图的圆点。
            z: 100,
            // 此圆点的拖拽的响应事件，在拖拽过程中会不断被触发。下面介绍详情。
            // 这里使用了 echarts.util.curry 这个帮助方法，意思是生成一个与 onPointDragging
            // 功能一样的新的函数，只不过第一个参数永远为此时传入的 dataIndex 的值。
            ondrag: echarts.util.curry(onPointDragging, dataIndex)
        };
    })
});
```

上面的代码中，使用 [convertToPixel](api.html#echartsInstance.convertToPixel) 这个 API，进行了从 data 到『像素坐标』的转换，从而得到了每个圆点应该在的位置，从而能绘制这些圆点。`myChart.convertToPixel('grid', dataItem)` 这句话中，第一个参数 `'grid'` 表示 `dataItem` 在 [grid](option.html#grid) 这个组件中（即直角坐标系）中进行转换。所谓『像素坐标』，就是以 echarts 容器 dom element 的左上角为零点的以像素为单位的坐标系中的坐标。

注意这件事需要在第一次 setOption 后再进行，也就是说，须在坐标系（[grid](option.html#grid)）初始化后才能调用 `myChart.convertToPixel('grid', dataItem)`。

有了这段代码后，就有了诸个能拖拽的点。接下来要为每个点，加上拖拽响应的事件：

```ts
// 拖拽某个圆点的过程中会不断调用此函数。
// 此函数中会根据拖拽后的新位置，改变 data 中的值，并用新的 data 值，重绘折线图，从而使折线图同步于被拖拽的隐藏圆点。
function onPointDragging(dataIndex) {
    // 这里的 data 就是本文最初的代码块中声明的 data，在这里会被更新。
    // 这里的 this 就是被拖拽的圆点。this.position 就是圆点当前的位置。
    data[dataIndex] = myChart.convertFromPixel('grid', this.position);
    // 用更新后的 data，重绘折线图。
    myChart.setOption({
        series: [{
            id: 'a',
            data: data
        }]
    });
}
```

上面的代码中，使用了 [convertFromPixel](api.html#echartsInstance.convertFromPixel) 这个 API。它是 [convertToPixel](api.html#echartsInstance.convertToPixel) 的逆向过程。`myChart.convertFromPixel('grid', this.position)` 表示把当前像素坐标转换成 [grid](option.html#grid) 组件中直角坐标系的 dataItem 值。

最后，为了使 dom 尺寸改变时，图中的元素能自适应得变化，加上这些代码：

```ts
window.addEventListener('resize', function () {
    // 对每个拖拽圆点重新计算位置，并用 setOption 更新。
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
});

```





## （二）添加 tooltip 组件

到此，拖拽的基本功能就完成了。但是想要更进一步得实时看到拖拽过程中，被拖拽的点的 data 值的变化状况，我们可以使用 [tooltip](option.html#tooltip) 组件来实时显示这个值。但是，tooltip 有其默认的『显示』『隐藏』触发规则，在我们拖拽的场景中并不适用，所以我们还要手动定制 tooltip 的『显示』『隐藏』行为。

在上述代码中分别添加如下定义：

```ts
myChart.setOption({
    ...,
    tooltip: {
        // 表示不使用默认的『显示』『隐藏』触发规则。
        triggerOn: 'none',
        formatter: function (params) {
            return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }
    }
});
```

```ts
myChart.setOption({
    graphic: echarts.util.map(data, function (item, dataIndex) {
        return {
            type: 'circle',
            ...,
            // 在 mouseover 的时候显示，在 mouseout 的时候隐藏。
            onmousemove: echarts.util.curry(showTooltip, dataIndex),
            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
        };
    })
});

function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}
```

这里使用了 [dispatchAction](api.html#echartsInstance.dispatchAction) 来显示隐藏 tooltip。用到了 [showTip](api.html#action.tooltip.showTip)、[hideTip](api.html#action.tooltip.hideTip)。



## （三）全部代码

总结一下，全部的代码如下：

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script src="dist/echarts.min.js"></script>
</head>
<body>
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">

    var symbolSize = 20;
    var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];

    var myChart = echarts.init(document.getElementById('main'));

    myChart.setOption({
        tooltip: {
            triggerOn: 'none',
            formatter: function (params) {
                return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
            }
        },
        xAxis: {
            min: -100,
            max: 80,
            type: 'value',
            axisLine: {onZero: false}
        },
        yAxis: {
            min: -30,
            max: 60,
            type: 'value',
            axisLine: {onZero: false}
        },
        series: [
            {
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: data
            }
        ],
    });

    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                type: 'circle',
                position: myChart.convertToPixel('grid', item),
                shape: {
                    r: symbolSize / 2
                },
                invisible: true,
                draggable: true,
                ondrag: echarts.util.curry(onPointDragging, dataIndex),
                onmousemove: echarts.util.curry(showTooltip, dataIndex),
                onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                z: 100
            };
        })
    });

    window.addEventListener('resize', function () {
        myChart.setOption({
            graphic: echarts.util.map(data, function (item, dataIndex) {
                return {
                    position: myChart.convertToPixel('grid', item)
                };
            })
        });
    });

    function showTooltip(dataIndex) {
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: dataIndex
        });
    }

    function hideTooltip(dataIndex) {
        myChart.dispatchAction({
            type: 'hideTip'
        });
    }

    function onPointDragging(dataIndex, dx, dy) {
        data[dataIndex] = myChart.convertFromPixel('grid', this.position);
        myChart.setOption({
            series: [{
                id: 'a',
                data: data
            }]
        });
    }

</script>
</body>
</html>
```


<br>

有了这些基础，就可以定制更多的功能了。可以加 [dataZoom](option.html#dataZoom) 组件，可以制作一个直角坐标系上的绘图板等等。可以发挥想象力。




