{{target: drag-example}}

# An Example: Implement Dragging

This is a tiny example, introducing how to implement dragging of graphic elements in Apache ECharts<sup>TM</sup>. From this example, we will see how to make an application with rich intractivity based on echarts API.

~[600x400](${galleryViewPath}line-draggable&edit=1&reset=1)

This example mainly implements that dragging points of a curve and by which the curve is modified. Although it is simple example, but we can do more based on that, like edit charts viually. So let's get started from this simple example.



## [ Part 1 ] Implement basic dragging

First of all, we create a basic [line chart (line series)](option.html#series-line):

```ts
var symbolSize = 20;
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
            // Set a big symbolSize for dragging convenience.
            symbolSize: symbolSize,
            data: data
        }
    ]
});
```

Since the symbols in line is not draggable, we make them draggable by using [graphic component](option.html#graphic) to add draggable circular elements to symbols respectively.

```ts
myChart.setOption({
    // Declare a graphic component, which contains some graphic elements
    // with the type of 'circle'.
    // Here we have used the method `echarts.util.map`, which has the same
    // behavior as Array.prototype.map, and is compatible with ES5-.
    graphic: echarts.util.map(data, function (dataItem, dataIndex) {
        return {
            // 'circle' means this graphic element is a shape of circle.
            type: 'circle',

            shape: {
                // The radius of the circle.
                r: symbolSize / 2
            },
            // Transform is used to located the circle. position:
            // [x, y] means translate the circle to the position [x, y].
            // The API `convertToPixel` is used to get the position of
            // the circle, which will introduced later.
            position: myChart.convertToPixel('grid', dataItem),

            // Make the circle invisible (but mouse event works as normal).
            invisible: true,
            // Make the circle draggable.
            draggable: true,
            // Give a big z value, which makes the circle cover the symbol
            // in line series.
            z: 100,
            // This is the event handler of dragging, which will be triggered
            // repeatedly while dragging. See more details below.
            // A util method `echarts.util.curry` is used here to generate a
            // new function the same as `onPointDragging`, except that the
            // first parameter is fixed to be the `dataIndex` here.
            ondrag: echarts.util.curry(onPointDragging, dataIndex)
        };
    })
});
```

In the code above, API [convertToPixel](api.html#echartsInstance.convertToPixel) is used to convert data to its "pixel coordinate", based on which each graphic elements can be rendered on canvas. The term "pixel coordinate" means the coordinate is in canvas pixel, whose origin is the top-left of the canvas. In the sentence `myChart.convertToPixel('grid', dataItem)`, the first parameter `'grid'` indicates that `dataItem` should be converted in the first [grid component (cartesian)](option.html#grid).

**Notice:** `convertToPixel` should not be called before the first time that `setOption` called. Namely, it can only be used after coordinate systems (grid/polar/...) initialized.

Now points have been made draggable. Then we will bind event listeners on dragging to those points.

```ts
// This function will be called repeatedly while dragging.
// The mission of this function is to update `series.data` based on
// the new points updated by dragging, and to re-render the line
// series based on the new data, by which the graphic elements of the
// line series can be synchronized with dragging.
function onPointDragging(dataIndex) {
    // Here the `data` is declared in the code block in the beginning
    // of this article. The `this` refers to the dragged circle.
    // `this.position` is the current position of the circle.
    data[dataIndex] = myChart.convertFromPixel('grid', this.position);
    // Re-render the chart based on the updated `data`.
    myChart.setOption({
        series: [{
            id: 'a',
            data: data
        }]
    });
}
```

In the code above, API [convertFromPixel](api.html#echartsInstance.convertFromPixel) is used, which is the reversed process of [convertToPixel](api.html#echartsInstance.convertToPixel). `myChart.convertFromPixel('grid', this.position)` converts a pixel coordinate to data item in [grid (cartesian)](option.html#grid).

Finally, add those code to make graphic elements responsive to change of canvas size.

```ts
window.addEventListener('resize', function () {
    // Re-calculate the position of each circle and update chart using `setOption`.
    myChart.setOption({
        graphic: echarts.util.map(data, function (item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
    });
});

```




## [ Part 2 ] Add tooltip component

Now basic functionality have been implemented by parte 1. If we need the data can be displayed realtime when dragging, we can use [tooltip component](option.html#tooltip) to do that. Nevertheless, tooltip component has its default "show/hide rule", which is not applicable in this case. So we need to customize the "show/hide rule" for our case.

Add these snippets to the code block above:

```ts
myChart.setOption({
    ...,
    tooltip: {
        // Means disable default "show/hide rule".
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
            // Customize "show/hide rule", show when mouse over, hide when mouse out.
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

The API [dispatchAction](api.html#echartsInstance.dispatchAction) is used to show/hide tooltip content, where actions [showTip](api.html#action.tooltip.showTip) and [hideTip](api.html#action.tooltip.hideTip) is dispatched.


## [ Part 3 ] Full code

Full code is shown as follow:

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

With knowledge introduced above, more feature can be implemented. For example, [dataZoom component](option.html#dataZoom) can be added to cooperate with the cartesian, or we can make a plotting board on coordinate systems. Use your imagination ~




