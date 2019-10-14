
{{target: visual-map}}

# Visual Map of Data

Data visualization is a procedure of mapping data into visual elements. This procedure can also be called visual coding, and visual elements can also be called visual tunnels.

Every type of charts in ECharts has this built-in mapping procedure. For example, line charts map data into *lines*, bar charts map data into *length*. Some more complicated charts, like `graph`, `themeRiver`, and `treemap` have their own built-in mapping.

Besides, ECharts provides [visualMap component](option.html#visualMap) for general visual mapping. Visual elements allowed in `visualMap` component are:<br>
`symbol`, `symbolSize`<br>
`color`, `opacity`, `colorAlpha`, <br>
`colorLightness`, `colorSaturation`, `colorHue`

Next, we are going to introduce how to use `visualMap` component.

<br>
<h2>Data and Dimension</h2>

Data are usually stored in [series.data](option.html#series.data) in ECharts. Depending on chart types, like list, tree, graph, and so on, the form of data may vary somehow. But they have one common feature, that they are a collection of `dataItem`s. Every data item contains data value, and other information if needed. Every data value can be a single value (one dimension) or an array (multiple dimensions).

For example, [series.data](option.html#series.data) is the most common form, which is a `list`, a common array:

```javascript
series: {
    data: [
        {       // every item here is a dataItem
            value: 2323, // this is data value
            itemStyle: {...}
        },
        1212,   // it can also be a value of dataItem, which is a more common case
        2323,   // every data value here is one dimension
        4343,
        3434
    ]
}
```

```javascript
series: {
    data: [
        {                        // every item here is a dataItem
            value: [3434, 129,  'San Marino'], // this is data value
            itemStyle: {...}
        },
        [1212, 5454, 'Vatican'],   // it can also be a value of dataItem, which is a more common case
        [2323, 3223, 'Nauru'],     // every data value here is three dimension
        [4343, 23,   'Tuvalu']    // If is scatter chart, usually map the first dimension to x axis,
                                 // the second dimension to y axis,
                                 // and the third dimension to symbolSize
    ]
}
```

Usually the first one or two dimensions are used for mapping. For example, map the first dimension to x axis, and the second dimension to y axis. If you want to represent more dimensions, `visualMap` is what you need. Most likely, [scatter charts](option.html#series-scatter) use radius to represent the third dimension.







<br>
<h2>visualMap Component</h2>

visualMap component defines the mapping from *which dimension of data* to *what visual elements*.

The following two types of visualMap components are supported, identified with [visualMap.type](option.html#visualMap.type).

Its structure is defined as:

```javascript
option = {
    visualMap: [ // can define multiple visualMap components at the same time
        { // the first visualMap component
            type: 'continuous', // defined as continuous visualMap
            ...
        },
        { // the second visualMap component
            type: 'piecewise', // defined as discrete visualMap
            ...
        }
    ],
    ...
};
```

<br>
[visualMapContinuous](option.html#visualMap-continuous)：

[visualMapPiecewise](option.html#visualMap-piecewise)：
~[600x400](${galleryViewPath}doc-example/scatter-visualMap-piecewise&edit=1&reset=1)

<br>

Piecewise visual map component has three types:


分段型视觉映射组件（visualMapPiecewise），有三种模式：

+ Equal division of continuous data: divide equally based on [visualMap-piecewise.splitNumber](option.html#visualMap-piecewise.splitNumber);
+ User-defined division of continuous data: divide with range in [visualMap-piecewise.pieces](option.html#visualMap-piecewise.pieces);
+ Discrete data (data in category type): divide with [visualMap-piecewise.categories](option.html#visualMap-piecewise.categories).


<br>
**Configuration of visualMap mapping method**

As we have introduced above, `visualMap` maps a certain dimension to a certain visual element, we can configure which dimension of the data (see in [visualMap.dimension](~visualMap.dimension)) to be mapped to which visual elements (see in [visualMap.inRange](option.html#visualMap.inRange) and [visualMap.outOfRange](option.html#visualMap.outOfRange)).


Example A:

```javascript
option = {
    visualMap: [
        {
            type: 'piecewise'
            min: 0,
            max: 5000,
            dimension: 3,       // the fourth dimension of series.data, or value[3], is mapped
            seriesIndex: 4,     // map with the fourth series
            inRange: {          // visual configuration items in selected range
                color: ['blue', '#121122', 'red'], // defines color list of mapping
                                                   // The largest value will be mapped to 'red',
                                                   // and others will be interpolated
                symbolSize: [30, 100]              // the smallest value will be mapped to size of 30,
                                                   // the largest to 100,
                                                   // and others will be interpolated
            },
            outOfRange: {       // visual configuration items out of selected range
                symbolSize: [30, 100]
            }
        },
        ...
    ]
};
```

Example B:

```javascript
option = {
    visualMap: [
        {
            ...,
            inRange: {          // visual configuration items in selected range
                colorLightness: [0.2, 1], // map to lightness, which will process lightness based on original color
                                          // original color may be selected from global color palette,
                                          // which is not concerned by visualMap component
                symbolSize: [30, 100]
            },
            ...
        },
        ...
    ]
};
```

For more information, please refer to [visualMap.inRange](option.html#visualMap.inRange) and [visualMap.outOfRange](option.html#visualMap.outOfRange).
