{{target: partial-parallel-introduce}}

**Introduction of parallel coordinates**

[parallel coordinates (Parallel Coordinates)](https://en.wikipedia.org/wiki/Parallel_coordinates) is a frequently used data chart of  high-dimensional visualization.

{{use: partial-parallel-data-example}}

Parallel coordinate system is suited to conduct visualization analysis on multidimensional data. Every dimension (row) corresponds to an axis, every『data item』is a line, going through multiple axes. In this axis, data selection and other operations can be carried out, as following:

~[600x400](${galleryViewPath}doc-example/parallel-all&edit=1&reset=1)



**brief introduction of configuration mode**

basic configurations of `option` in『parallel coordinates』are as followed: 

```javascript
option = {
    parallelAxis: [                     // These are definitions of numerous 『axis』
        {dim: 0, name: schema[0].text}, // Every『axis』has a 'dim' attribute, representing dimension number of axis.
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
            type: 'category',           //Axis also support category data 
            data: ['Excellent', 'good', 'light pollution', 'moderate pollution', 'heavy pollution', 'severe pollution']
        }
    ],
    parallel: {                         // This is the definition of『coordinate system』
        left: '5%',                     // Location setting of parallel coordinate system
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {          // Public attribute of 『axis』can be set here to aviod repeated writing.
            type: 'value',
            nameLocation: 'end',
            nameGap: 20
        }
    },
    series: [                           // These three series share one parallel coordinate system
        {
            name: 'Beijing',
            type: 'parallel',           // The type of this series is 'parallel'
            data: [
                [1,  55,  9,   56,  0.46,  18,  6,  'good'],
                [2,  25,  11,  21,  0.65,  34,  9,  'excellent'],
                ...
            ]
        },
        {
            name: 'Shanghai',
            type: 'parallel',
            data: [
                [3,  56,  7,   63,  0.3,   14,  5,  'good'],
                [4,  33,  7,   29,  0.33,  16,  6,  'excellent'],
                ...
            ]
        },
        {
            name: 'Guangzhou',
            type: 'parallel',
            data: [
                [4,  33,  7,   29,  0.33,  16,  6,  'excellent'],
                [5,  42,  24,  44,  0.76,  40,  16, 'excellent'],
                ...
            ]
        }
    ]
};
```

Three concerned components: [parallel](~parallel)、[parallelAxis](~parallelAxis)、[series-parallel](~series-parallel)

+ [parallel](~parallel)

    The configuration item of this parallel coordinate system is『coordinate system』itsel.one series (`series`) or many series (like 『Beijing』、『Shanghai』、『Guangzhou』in the above picture is a series respectively.) They can share thi『coordinate system』

    The same as other coordinate systems, multiple coordinate systems can be created.

    Location setting is also carried out here.

+ [parallelAxis](~parallelAxis)

    This is axis configuration of 『coordinate system』. Naturally, multiple axes are needed.

    Among which are attributes of  [parallelAxis.parallelIndex](~parallelAxis.parallelIndex), assigning this『axis』in which『coordinate system』. Use the first 『coordinate system』by default.

+ [series-parallel](~series-parallel)

    This is the definition of『series』. Series will be drawn to『coordinate system』.

    Among which are attributes of [series-parallel.parallelIndex](~series-parallel.parallelIndex), assigning usage of which『coordinate system』.Use the first 『coordinate system』by default.

**Configuration note and best practices**

{{use: partial-parallel-axis-default}}





{{target: partial-parallel-data-example}}
For example, following data are in [series-parallel.data](~series-parallel.data) : 

```javascript
[
    [1,  55,  9,   56,  0.46,  18,  6,  'good'],
    [2,  25,  11,  21,  0.65,  34,  9,  'excellent'],
    [3,  56,  7,   63,  0.3,   14,  5,  'good'],
    [4,  33,  7,   29,  0.33,  16,  6,  'excellent'],
    { // data item can also be Object, therefore special setting of lines can be included.
        value: [5,  42,  24,  44,  0.76,  40,  16, 'excellent']
        lineStyle: {...},
    }
    ...
]
```
In data, every line is a 『data item』, every row belongs to a『dimension』. (like every row of data above means: 『date』,『AQI index』, 『PM2.5』, 『PM10』, 『carbon monoxide value』, 『nitrogen dioxide value』, 『sulfur dioxide value』). 




{{target: partial-parallel-axis-default}}

When configure multiple [parallelAxis](~parallelAxis), there are some value share the same attribute, If write them multiple times is complicated, then they could be placed in [parallel.parallelAxisDefault](~parallel.parallelAxisDefault). Before initializing axis, configuration item in `parallelAxisDefault` will integrate into [parallelAxis](~parallelAxis) respectively, and finally form the configuration of axis.

