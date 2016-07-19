{{target: partial-parallel-introduce}}

<br>

---

**Introduction to Parallel Coordinates**

[Parallel coordinates](https://en.wikipedia.org/wiki/Parallel_coordinates) are charts frequently used for visualizating data in high-dimensions.

{{use: partial-parallel-data-example}}

Parallel coordinates are used for visualizating this kind of multi-dimension data. Each dimension (or each column) maps to one axis, and each data item is a line crossing multiple axes. Data can be selected on axes. For example:

~[600x400](${galleryViewPath}doc-example/parallel-all&edit=1&reset=1)

---

**Brief Introduction about Configuration Method**

Basic configuration of `option` of parallel coordinates is as followed: 

```javascript
option = {
    parallelAxis: [                     // Definition of one axis
        {dim: 0, name: schema[0].text}, // Each axis has a 'dim' attribute, representing dimension number of axis.
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
            type: 'category',           //Also supports category data 
            data: ['Excellent', 'good', 'light pollution', 'moderate pollution', 'heavy pollution', 'severe pollution']
        }
    ],
    parallel: {                         // Definition of one coordinate
        left: '5%',                     // Location in parallel coordinate
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {          // Public attributes of axes can be set here to avoid repeating.
            type: 'value',
            nameLocation: 'end',
            nameGap: 20
        }
    },
    series: [                           // These are three series sharing the same parallel coordinate
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

Three involved components are: [parallel](~parallel)、[parallelAxis](~parallelAxis)、[series-parallel](~series-parallel)

+ [parallel](~parallel)

    This configuration item is the *axis* of parallel coordinate itself. One or more series (like *Beijing*, *Shanghai*, and Guangzhou* in the above example are of one series each) may share this *coordinate*.

    Like other coordinates, multiple parallel coordinates can be used.

    Position setting is also carried out here.

+ [parallelAxis](~parallelAxis)

    This is axis configuration for axis in *coordinate*. Of course, multiple axes are needed.

    Among them, there is a [parallelAxis.parallelIndex](~parallelAxis.parallelIndex) attribute, assigning which *coordinate* this *axis* belongs to. The first *coordinate* is used by default.

+ [series-parallel](~series-parallel)

    This is the definition of *series*, which are drawn to *coordinate*.

    Among them, there is an attribute of [series-parallel.parallelIndex](~series-parallel.parallelIndex), assigning which *coordinate* to use. The first *coordinate* is used by default.

<br>

---

**Notes and Best Practices**

{{use: partial-parallel-axis-default}}

**If data amount is too large, and have a severe influence on performance**

It is advised to set [series-parallel.lineStyle.normal.width](~series-parallel.lineStyle.normal.width) to be 0.5, which can increase performance largely.

<br>

---

**Displaying Data in High-Dimensions**

{{use: partial-parallel-high-dim (galleryViewPath=${galleryViewPath})}}


{{target: partial-parallel-data-example}}
For example, [series-parallel.data](~series-parallel.data) contains following data:

```javascript
[
    [1,  55,  9,   56,  0.46,  18,  6,  'good'],
    [2,  25,  11,  21,  0.65,  34,  9,  'excellent'],
    [3,  56,  7,   63,  0.3,   14,  5,  'good'],
    [4,  33,  7,   29,  0.33,  16,  6,  'excellent'],
    { // data item can also be Object, so that special setting of lines can be set here.
        value: [5,  42,  24,  44,  0.76,  40,  16, 'excellent']
        lineStyle: {...},
    }
    ...
]
```
In the above data, each line is an *data item*, and each row belongs to a *dimension*. (For example, the meanings of each column above are: *data*, *AQI*, *PM2.5*, *PM10*, *carbon monoxide level*, *nitrogen dioxide level*, and *sulfur dioxide level*.)




{{target: partial-parallel-axis-default}}

When configure multiple [parallelAxis](~parallelAxis), if there are some shared attributes, to avoid writing for multiple times, they can be put under [parallel.parallelAxisDefault](~parallel.parallelAxisDefault). Before initializing axis, configurations in `parallelAxisDefault` will be merged into [parallelAxis](~parallelAxis) to get the final axis configuration.



{{target: partial-parallel-high-dim}}

When dimension is extremely large, say, more than 50 dimensions, then there will be more than 50 axes, which may hardly display in a page.

In this case, you may use [parallel.axisExpandable](~parallel.axisExpandable) to improve display result. See this example:

~[600x460](${galleryViewPath}map-parallel-prices&edit=1&reset=1)
