
{{target: data-zoom}}

# Add interaction to the chart component

Except charts, Echarts provide many interaction components, For example:

`legend component` [legend](option.html#legend)、`title component` [title](option.html#title)、`visualmap component` [visualMap](option.html#visualMap)、`datazoom component` [dataZoom](option.html#dataZoom)、`dataline component` [timeline](option.html#timeline)

Following is an example of `datazoom component` [dataZoom](option.html#dataZoom) as an introduction of how to add this component.





<br>
<h2>Introduction of data zoom component（dataZoom）</h2>

『overview data and pay close attention yo details according to need』is a basic interaction need of data visualization. `dataZoom` component can realize this function in rectangular coordinate system（[grid](option.html#grid)）and polar coordinate system（[polar](option.html#polar)）.


**For example: **
~[600x400](${galleryViewPath}doc-example/scatter-dataZoom-all&edit=1&reset=1)

<br>

+ `dataZoom` operate『data window zoom』『data window tanslate』on `axis（axis）`.

> Specifies which axis `dataZoom`controls through [dataZoom.xAxisIndex](option.html#dataZoom.xAxisIndex) or [dataZoom.yAxisIndex](option.html#dataZoom.yAxisIndex) or [dataZoom.radiusAxisIndex](option.html#dataZoom.radiusAxisIndex) or [dataZoom.angleAxisIndex](option.html#dataZoom.angleAxisIndex)  

+ Multiple `dataZoom` components can exist at the same time as a jointly control function. Components controling the same axis will be linked automatically. The example below will explain in detail.

+ Operation principle of `dataZoom` achieves 『data window zoom』through『data filtering』.

    Different settings of data filtering modes can achieve different effects, please see: [dataZoom.filterMode](option.html#dataZoom.filterMode). 

+Setting of `dataZoom` data zoom range only supports two formats: 

    + Percentage: see [dataZoom.start](option.html#dataZoom.start) and [dataZoom.end](option.html#dataZoom.end). 

    + Absolute value: see [dataZoom.startValue](option.html#dataZoom.startValue) and [dataZoom.endValue](option.html#dataZoom.endValue). 



**dataZoom component supports several seed components: **

+ [Inside data zoom component（dataZoomInside）](option.html#dataZoom-inside): inside coordinates.

+ [Slider data zoom component（dataZoomSlider）](option.html#dataZoom-slider): has seperate slide option.

+ [Select data zoom component（dataZoomSelect）](option.html#toolbox.feature.dataZoom): full-screen box to zoom data area. Entrance and configuration item are in `toolbox`.




<br>
<h2>Add dataZoom component in code</h2>

First, only add dataZoom component to a horizontal axis, code is as followed:

```javascript

option = {
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    dataZoom: [
        {   // This dataZoom component controls X axis by dafault.
            type: 'slider', // This dataZoom component is dataZoom component of slider
            start: 10,      // The left is located at 10%.
            end: 60         // The right is located at 60%.
        }
    ],
    series: [
        {
            type: 'scatter', // This is『scatter chart』
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

Following results can be seen: 
~[600x300](${galleryViewPath}doc-example/scatter-tutorial-dataZoom-1&edit=1&reset=1)

<br>

The grahpics above can only change window by dragging dataZoom component. If you want to drag in coordinate system, use wheel(or move two fingers on a touch screen slide ) to zoom, then another dataZoom component of inside needs to be added. You can just add in the `option.dataZoom` above: 

```javascript
option = {
    ...,
    dataZoom: [
        {   // This dataZoom component controls X axis by dafault.
            type: 'slider', // This dataZoom component is dataZoom component of slider
            start: 10,      // The left is located at 10%.
            end: 60         //  The right is located at 60%.
        },
        {   // This dataZoom component controls X axis by dafault.
            type: 'inside', // This dataZoom component is dataZoom component of inside 
            start: 10,      // The left is located at 10%.
            end: 60         //  The right is located at 60%.
        }
    ],
    ...
}
```

Following results can be seen（you can carry out slide and wheel zoom in coordinate system）: 
~[600x300](${galleryViewPath}doc-example/scatter-tutorial-dataZoom-2&edit=1&reset=1)


<br>

If you want y axis to zoom too, then you need to add dataZoom componet on y axis:

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

Following results can be seen: 
~[600x300](${galleryViewPath}doc-example/scatter-tutorial-dataZoom-3&edit=1&reset=1)


