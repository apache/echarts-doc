
{{target: data-zoom}}

# Add interaction to the chart component

Echarts provides many interaction components besides chart. For example:

`legend component` [legend](option.html#legend)、`title component` [title](option.html#title)、`visualmap component` [visualMap](option.html#visualMap)、`datazoom component` [dataZoom](option.html#dataZoom)、`dataline component` [timeline](option.html#timeline)

Following is an example of `datazoom component` [dataZoom](option.html#dataZoom) as an introduction of how to add this kind of component.





<br>
<h2>Introduction of data zoom component (dataZoom)</h2>

Data overview by default, and detail by requirement is a basic interaction need of data visualization. `dataZoom` component can implement this function in rectangular coordinate system ([grid](option.html#grid)) and polar coordinate system ([polar](option.html#polar).


**For example: **
~[600x400](${galleryViewPath}doc-example/scatter-dataZoom-all&edit=1&reset=1)

<br>

+ `dataZoom` component operates *data window zoom* and *data window translation* on `axis`.

> Use [dataZoom.xAxisIndex](option.html#dataZoom.xAxisIndex), [dataZoom.yAxisIndex](option.html#dataZoom.yAxisIndex), [dataZoom.radiusAxisIndex](option.html#dataZoom.radiusAxisIndex), or [dataZoom.angleAxisIndex](option.html#dataZoom.angleAxisIndex) to specify which axis `dataZoom` controls.

+ Multiple `dataZoom` components can exist at the same time to control function together. Components controling the same axis will be connected automatically. The example below explains in detail.

+ Operation principle of `dataZoom` achieves *data window zooming* through *data filtering*.

    Different settings of data filtering modes lead to different data window zooming effects, please see: [dataZoom.filterMode](option.html#dataZoom.filterMode). 

+ Setting of `dataZoom` data window range supports two formats currently: 

    + Percentage: see [dataZoom.start](option.html#dataZoom.start) and [dataZoom.end](option.html#dataZoom.end). 

    + Absolute value: see [dataZoom.startValue](option.html#dataZoom.startValue) and [dataZoom.endValue](option.html#dataZoom.endValue). 



**dataZoom component supports several child components: **

+ [Inside data zoom component (dataZoomInside)](option.html#dataZoom-inside): inside coordinates.

+ [Slider data zoom component (dataZoomSlider)](option.html#dataZoom-slider): has seperate slide option.

+ [Select data zoom component (dataZoomSelect)](option.html#toolbox.feature.dataZoom): full-screen box for zoom data area. Entrance and configuration item are both in `toolbox`.




<br>
<h2>Adding dataZoom component</h2>

First, only add dataZoom component to x-axis. Following examples shows the code.

```javascript

option = {
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [
        {   // This dataZoom component controls x-axis by dafault
            type: 'slider', // this dataZoom component is dataZoom component of slider
            start: 10,      // the left is located at 10%
            end: 60         // the right is located at 60%
        }
    ],
    series: [
        {
            type: 'scatter', // this is scatter chart
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            symbolSize: function (val) {
                return val[2] * 40;
            },
            data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"],["9.051","9.710","0.171"],["14.046","4.182","0.536"],["12.295","1.429","0.962"],["4.417","8.167","0.113"],["0.492","4.771","0.785"],["7.632","2.605","0.645"],["14.242","5.042","0.368"]]
        }
    ]
}
```

which will show the following result: 
~[600x300](${galleryViewPath}doc-example/scatter-tutorial-dataZoom-1&edit=1&reset=1)

<br>

The chart above can only change window by dragging dataZoom component. If you want to drag in coordinate system, or use mouse wheel (or slides with two fingers on mobile) to zoom, then another inside dataZoom component needs to be added. You can just add in the `option.dataZoom` above: 

```javascript
option = {
    ...,
    dataZoom: [
        {   // this dataZoom component controls x-axis by dafault
            type: 'slider', // this dataZoom component is dataZoom component of slider
            start: 10,      // the left is located at 10%
            end: 60         // the right is located at 60%
        },
        {   // This dataZoom component controls x-axis by dafault
            type: 'inside', // this dataZoom component is dataZoom component of inside 
            start: 10,      // the left is located at 10%
            end: 60         // the right is located at 60%
        }
    ],
    ...
}
```

Following results can be seen (you can now slide or use mouse wheel to zoom in coordinate system) : 
~[600x300](${galleryViewPath}doc-example/scatter-tutorial-dataZoom-2&edit=1&reset=1)


<br>

If you want to enable zooming on y-axis, then you need to add dataZoom componet on y-axis:

```javascript
option = {
    ...,
    dataZoom: [
        {
            type: 'slider',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'inside',
            xAxisIndex: 0,
            start: 10,
            end: 60
        },
        {
            type: 'slider',
            yAxisIndex: 0,
            start: 30,
            end: 80
        },
        {
            type: 'inside',
            yAxisIndex: 0,
            start: 30,
            end: 80
        }
    ],
    ...
}
```

Following result can be seen: 
~[600x300](${galleryViewPath}doc-example/scatter-tutorial-dataZoom-3&edit=1&reset=1)


