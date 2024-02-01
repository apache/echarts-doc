
{{ target: partial-parallel-introduce }}

**Introduction about Parallel coordinates**

[Parallel Coordinates](https://en.wikipedia.org/wiki/Parallel_coordinates) is a common way of visualizing high-dimensional geometry and analyzing multivariate data.

{{ use: partial-parallel-data-example() }}

Parallel coordinates are often used to visualize multi-dimension data shown above. Each axis represents a dimension (namely, a column), and each line represents a data item. Data can be brush-selected on axes. For example:

~[600x400](${galleryViewPath}doc-example/parallel-all&edit=1&reset=1)


**Brief about Configuration**

Basic configuration parallel coordinates is shown as follow:

```javascript
option = {
    parallelAxis: [                     // Definitions of axes.
        {dim: 0, name: schema[0].text}, // Each axis has a 'dim' attribute, representing dimension index in data.
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
            type: 'category',           // Also supports category data.
            data: ['Excellent', 'good', 'light pollution', 'moderate pollution', 'heavy pollution', 'severe pollution']
        }
    ],
    parallel: {                         // Definition of a parallel coordinate system.
        left: '5%',                     // Location of parallel coordinate system.
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {          // A pattern for axis definition, which can avoid repeating in `parallelAxis`.
            type: 'value',
            nameLocation: 'end',
            nameGap: 20
        }
    },
    series: [                           // Here the three series sharing the same parallel coordinate system.
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

Three components are involved here: [parallel](~parallel), [parallelAxis](~parallelAxis), [series-parallel](~series-parallel)

+ [parallel](~parallel)

    This component is the coordinate system. One or more series (like "Beijing", "Shanghai", and "Guangzhou" in the above example) can share one coordinate system.

    Like other coordinate systems, multiple parallel coordinate systems can be created in one echarts instance.

    Position setting is also carried out here.

+ [parallelAxis](~parallelAxis)

    This is axis configuration. Multiple axes are needed in parallel coordinates.

    [parallelAxis.parallelIndex](~parallelAxis.parallelIndex) is used to specify which coordinate system this axis belongs to. The first coordinate system is used by default.

+ [series-parallel](~series-parallel)

    This is the definition of parallel series, which will be drawn on parallel coordinate system.

    [parallelAxis.parallelIndex](~parallelAxis.parallelIndex) is used to specify which coordinate system this axis belongs to. The first coordinate system is used by default.

**Notes and Best Practices**

{{ use: partial-parallel-axis-default() }}

**If data is too large and cause bad performance**

It is suggested to set [series-parallel.lineStyle.width](~series-parallel.lineStyle.width) to be `0.5` (or less), which may improve performance significantly.

**Display High-Dimension Data**

{{ use: partial-parallel-high-dim() }}



{{ target: partial-parallel-data-example }}

For example, [series-parallel.data](~series-parallel.data) is the following data:

```javascript
[
    [1,  55,  9,   56,  0.46,  18,  6,  'good'],
    [2,  25,  11,  21,  0.65,  34,  9,  'excellent'],
    [3,  56,  7,   63,  0.3,   14,  5,  'good'],
    [4,  33,  7,   29,  0.33,  16,  6,  'excellent'],
    { // Data item can also be an Object, so that perticular settings of its line can be set here.
        value: [5,  42,  24,  44,  0.76,  40,  16, 'excellent']
        lineStyle: {...},
    }
    ...
]
```
In data above, each row is a "data item", and each column represents a "dimension". For example, the meanings of columns above are: "data", "AQI", "PM2.5", "PM10", "carbon monoxide level", "nitrogen dioxide level", and "sulfur dioxide level".



{{ target: partial-parallel-axis-default }}

When configuring multiple [parallelAxis](~parallelAxis), there might be some common attributes in each axis configuration. To avoid writing them repeatedly, they can be put under [parallel.parallelAxisDefault](~parallel.parallelAxisDefault). Before initializing axis, configurations in [parallel.parallelAxisDefault](~parallel.parallelAxisDefault) will be merged into [parallelAxis](~parallelAxis) to generate the final axis configuration.



{{ target: partial-parallel-high-dim }}

When dimension number is extremely large, say, more than 50 dimensions, there will be more than 50 axes, which may hardly display in a page.

In this case, you may use [parallel.axisExpandable](~parallel.axisExpandable) to improve the display. See this example:

~[600x460](${galleryViewPath}map-parallel-prices&edit=1&reset=1)

