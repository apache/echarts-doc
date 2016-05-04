
{{target: visual-map}}

# Data visual map

Data visualization is the mapping process from  **data** to **visual element**（this process can also be called visual code, visual element can also be called visual tunnel）.

Each chart in ECharts has this mapping process in itself, such as line chart maps data to『line』and bar chart maps data to『length』.Some more complicated charts, such as `graph`, `event river map` and `treemap` all does inner mapping.

Besides, ECharts also uses [viusalMap component](option.html#visualMap) to provide universal visual mapping. Visual elements available in `visualMap` component are：<br>
`graphic category（symbol）`,`graphic size（symbolSize）`<br>
`color（color）`,`color transparency（colorAlpha）`,<br>
`color lightness（colorLightness）`,`color saturation（colorSaturation）` and `hue（colorHue）`

Below is a brief introduction of how to use `visualMap` component.


<br>
<h2>Data and dimension</h2>

Data in ECharts are usually stored in[series.data](option.html#series.data). Specific format of data may differ based on different chart type, such as『line chart』,『tree』,『chart』 and so on. But they all something in common: they are all collection of 『data item（dataItem）』. Every data item has『data value（value）』and other information（if needed）. Every data value can be a single value（one-dimensional）or an array（multi-dimensional）.

For example, [series.data](option.html#series.data) is the most common format ,『line chart』, namely a common array:

```javascript
series: {
    data: [
        {       // every item here is a data item（dataItem）
            value: 2323, // this is data value（value） of data item
            itemStyle: {...}
        },
        1212,   // it can also be value of dataItem, which is more common.
        2323,   // each value is『one-dimensional』
        4343,
        3434
    ]
}
```

```javascript
series: {
    data: [
        {                        // every item here is a data item（dataItem）
            value: [3434, 129,  'San Marino'], // this is data value（value） of data item
            itemStyle: {...}
        },
        [1212, 5454, 'Vatican'],   //  it can also be value of dataItem, which is more common.
        [2323, 3223, 'Nauru'],     // each value is『three-dimensional』, each column is a dimension.
        [4343, 23,   'Tuvalu']    // if it is『bubble chart』，mapping the first dimension to x axis is very common,
                                 // map the second dimension to y axis,
                                 // map the third dimension to bubble radius（symbolSize）
    ]
}
```

In chart, first two dimensions of value are always mapped by default, such as map the first dimension to x axis and map the second dimension to y axis. If you want to display more dimensions, can use `visualMap` to help. The most common situation is [bubble chart（scatter）](option.html#scatter) using radius to display the third dimension.






<br>
<h2>visualMap component</h2>

visualMap component defines map『which dimension』of data to『what visual element』.

Now there are two types of visualMap component below，which can be distinguished through [visualMap.type](option.html#visualMap.type) .

Here is the example of definition structure:

```javascript
option = {
    visualMap: [ // capable of defining multiple visualMap component at the same time.
        { // first visualMap component
            type: 'continuous', // define as continuous viusalMap
            ...
        },
        { // second visualMap component
            type: 'piecewise', // define as segmented visualMap
            ...
        }
    ],
    ...
};
```

<br>
[Continuous（visualMapContinuous）](option.html#visualMap-continuous)：
~[600x400](${galleryViewPath}doc-example/map-visualMap-continuous&edit=1&reset=1)

[Segmented（visualMapPiecewise）](option.html#visualMap-piecewise)：
~[600x400](${galleryViewPath}doc-example/scatter-visualMap-piecewise&edit=1&reset=1)

<br>
There are three pattern of segmented visual map component（visualMapPiecewise）:

+ Average segment of continuous data : based on [visualMap-piecewise.splitNumber](option.html#visualMap-piecewise.splitNumber) to segment into several pieces automatically.
+ Customizedsegment of continuous data: based on [visualMap-piecewise.pieces](option.html#visualMap-piecewise.pieces) to define range of each piece. 
+ Discrete data（category data）: category is defined in [visualMap-piecewise.categories](option.html#visualMap-piecewise.categories) .


<br>
**configuration of visual mapping method**

Since it is the map from『data』to『visual element』,so in`visualMap` data of『which dimension』can be assigned（see [visualMap.dimension](~visualMap.dimension)）can map to which『visual element』（please see in [visualMap.inRange](option.html#visualMap.inRange) and [visualMap.outOfRange](option.html#visualMap.outOfRange)）.


Example 1：

```javascript
option = {
    visualMap: [
        {
            type: 'piecewise'
            min: 0,
            max: 5000,
            dimension: 3,       // the fourth dimension（ value[3]） of series.data is mapped
            seriesIndex: 4,     // map the fourth series.
            inRange: {          // visual configuration within selected range
                color: ['blue', '#121122', 'red'], // define color list of graphic color mapping,
                                                    // map the minimum data value to 'blue'，
                                                    // map the maximum data value to'red'，
                                                    // the rest will be linear calculated automatically.
                symbolSize: [30, 100]               // define map range of graphic size,
                                                    // map the minimum data value to 30，
                                                    // map the maximum data value to 100，
                                                    //  the rest will be linear calculated automatically.
            },
            outOfRange: {       // visual configuration outside selected range
                symbolSize: [30, 100]
            }
        },
        ...
    ]
};
```

Example 2：
```javascript
option = {
    visualMap: [
        {
            ...,
            inRange: {          // visual configuration within selected range
                colorLightness: [0.2, 1], // map to transparency, which manages intensity of the original color.
                                          // Original color may be chosen from global swatch, which has nothing to do with visualMap component.
                symbolSize: [30, 100]
            },
            ...
        },
        ...
    ]
};
```

For more details, please see[visualMap.inRange](option.html#visualMap.inRange) and[visualMap.outOfRange](option.html#visualMap.outOfRange).
