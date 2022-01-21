{{ target: basic-concepts-overview }}

# ECharts Basic Concepts Overview

This chapter describes some of the common concepts and terms of Apache ECharts<sup>TM</sup>.


## ECharts instance

We can create multiple `echarts instances` in a webpage. In each `echarts instance` we can create multiple diagrams, coordinate systems, etc. (described by `option`). With a DOM element prepared (as the container of an echarts instance), we can create a `echarts instance` based on that element. Each `echarts instance` takes its DOM element exclusively.

<br>

![500xauto](~basic-concepts-overview/multiple-ec-instance.jpg)


## Series

[series](option.html#series) is a very common term. In echarts, [series](option.html#series) represents a series of value and the diagram generated from them. So the concept [series](option.html#series) includes these key points: a series of value, the type of the diagram (`series.type`) and other parameters specified for the mapping from the values to a diagram.

In echarts, the `series.type` and the "diagram type" are the same concept. `series.type` includes: [line](option.html#series-line) (line plot), [bar](option.html#series-bar) (bar chart), [pie](option.html#series-pie) (pie chart), [scatter](option.html#series-scatter) (scatter plot), [graph](option.html#series-graph) (graph plot), [tree](option.html#series-tree) (tree plot), etc.

In the example below, there are three [series](option.html#series) ([pie](option.html#series-pie), [line](option.html#series-line), [bar](option.html#series-bar)) declared in the `option` on the right, where [series.data](option.html#series.data) are declared in each series:

<br>

![700xauto](~basic-concepts-overview/series-all-a.jpg)

<br>

Similarly, the following example shows another style of `option`, where each series retrieves data from [dataset](option.html#dataset):

<br>

![600xauto](~basic-concepts-overview/series-all-b.jpg)


## Component

Over series, the entities in echarts are abstracted using the term "component". For example, echarts includes these components: [xAxis](option.html#xAxis) (the x axis of Cartesian coordinate system), [yAxis](option.html#yAxis) (the y axis of Cartesian coordinate system), [grid](option.html#grid) (the baseboard of Cartesian coordinate system), [angleAxis](option.html#angleAxis) (the angle axis of polar coordinate system), [radiusAxis](option.html#radiusAxis) (the radius axis of polar coordinate system), [polar](option.html#polar) (the baseboard of polar coordinate system), [geo](option.html#geo) (GEO coordinate system), [dataZoom](option.html#dataZoom) (the component for changing the displayed range of data), [visualMap](option.html#visualMap) (the component for specifying the visual mapping), [tooltip](option.html#tooltip) (the tooltip component), [toolbox](option.html#toolbox) (the toolbox component), [series](option.html#series), etc.

Notice that [series](option.html#series) is a kind of component, a component for rendering diagram.

Check the example below. Components (including series) are declared in `option` on the right, and the are finally rendered in the echarts instance.

<br>

![800xauto](~basic-concepts-overview/components.jpg)

<br>

Notice: although [series](option.html#series) is a kind of component, sometimes we can see phrases like "series and components". The term "component" in this context actually means "components except series".


## Define charts using option

We have met the term `option` above. Users should use `option` to describe all of their requirements and input it to echarts. The requirements includes: "what does the data like", "what the diagram we need", "what components we need", "what the user interactions we need", etc. In short, `option` defines: `data`, `visual mapping`, `interaction`.

```ts
// Create an echarts instance.
var dom = document.getElementById('dom-id');
var chart = echarts.init(dom);

// Use option to describe `data`, `visual mapping`, `interaction`, ...
// `option` is a big JavaScript object.
var option = {
    // Each property represents a kind of components.
    legend: {...},
    grid: {...},
    tooltip: {...},
    toolbox: {...},
    dataZoom: {...},
    visualMap: {...},
    // If there are more than one components in one kind, we use an array.
    // For example, there are three x axes here.
    xAxis: [
        // Each item represents an instance of component.
        // `type` is used to indicate the sub-type of the component.
        {type: 'category', ...},
        {type: 'category', ...},
        {type: 'value', ...}
    ],
    yAxis: [{...}, {...}],
    // There are multiple series, using an array.
    series: [
        // `type` is also used to indicate the sub-type
        // (i.e., diagram type) of each series.
        {type: 'line', data: [['AA', 332], ['CC', 124], ['FF', 412], ... ]},
        {type: 'line', data: [2231, 1234, 552, ... ]},
        {type: 'line', data: [[4, 51], [8, 12], ... ]}
    }]
};

// Call `setOption` and input the `option`. And then the
// echarts instance processes data and renders charts.
chart.setOption(option);
```

Data is put in [series.data](option.html#series.data) in the above example. And we give another example showing another way, where each series retrieves data from [dataset](option.html#dataset):

```ts
var option = {
    dataset: {
        source: [
            [121, 'XX', 442, 43.11],
            [663, 'ZZ', 311, 91.14],
            [913, 'ZZ', 312, 92.12],
            ...
        ]
    },
    xAxis: {},
    yAxis: {},
    series: [
        // Each series retrieves data from `dataset`. The values in `encode`
        // are the indices of the dimensions (i.e., column) of `dataset.source`.
        {type: 'bar', encode: {x: 1, y: 0}},
        {type: 'bar', encode: {x: 1, y: 2}},
        {type: 'scatter', encode: {x: 1, y: 3}},
        ...
    ]
};
```



## Position a component

These approaches are used to Position a component.

<br>

**[Absolute positioning like CSS]**

<br>

Most components and series can be absolutely positioned according to `top` / `right` / `down` / `left` / `width` / `height`. This approach is like the absolute positioning in CSS. The absolute positioning is based on the container DOM element of the echarts.

The value of each attribute can be:
+ Absolute value (like `bottom: 54`, means: the distance from the boundary of the echarts container to bottom boundary of the component is `54` pixel).
+ Or the percentage based on the width/height of the echarts container (like `right: '20%'`, means: the distance from the boundary of the echarts container to the right boundary of this component is `20%` of the width of the echarts container).

Check the example below, where the [grid](option.html#grid) component (that is the baseboard of a Cartesian coordinate system) are configured with `left`、`right`、`height`、`bottom`.

<br>

![800xauto](~basic-concepts-overview/locate.jpg)

<br>

Note that `left` `right` `width` are one group of attributes for horizontal layout, while `top` `bottom` `height` are another group of attributes for vertical layout. The two groups have nothing to do with each other. In each group, it is enough to set only one or at most two attributes. For example, when `left` and `right` have been specified, `width` can be automatically calculated by them.

<br>

**[Center-radius positioning]**

<br>

A few circular components or series need to be positioned by "center" and "radius". For example, [pie](option.html#series-pie) (pie chart)、[sunburst](option.html#series-sunburst) (sunburst chart)、[polar](option.html#polar) (polar coordinate system).

As the name implies, it position the component according to [center](option.html#series-pie.center) and [radius](option.html#series-pie.radius).

<br>

**[Other positioning]**

<br>

A few other components may has their own specific positioning approach. Check their docs before using them.


## Coordinate system

Many series, like [line](option.html#series-line), [bar](option.html#series-bar), [scatter](option.html#series-scatter), [heatmap](option.html#series-heatmap), etc., need to work on a coordinate system. Coordinate system is used to layout each graphic elements and display some ticks and labels. For example, echarts at least provides these coordinate systems: [Cartesian coordinate system](option.html#grid), [polar coordinate system](option.html#polar), [GEO coordinate system](option.html#geo), [single axis coordinate system](option.html#singleAxis), [calendar coordinate system](option.html#calendar), etc. Some other series like [pie](option.html#series-pie), [tree](option.html#series-tree), work independently without any coordinate systems. And still some other series like [graph](option.html#series-graph) are available either independently or on some coordinate system, depending on user settings.

A coordinate system may consist of several components. For example, Cartesian coordinate system consists of [xAxis](option.html#xAxis), [yAxis](option.html#yAxis) and [grid](option.html#grid) (the baseboard). [xAxis](option.html#xAxis) and [yAxis](option.html#yAxis) are referenced and assembled by `grid` and work together cooperatively.

The following example demonstrates the most simple way to use a Cartesian coordinate system, where only [xAxis](option.html#xAxis), [yAxis](option.html#yAxis) and a [scatter series](option.html#series-scatter) are declared, and `echarts` create and a `grid` implicitly to link them.

<br>

![450xauto](~basic-concepts-overview/coord-sys-0.jpg)

<br>

And the following example demonstrates a more complicated case, where two [yAxis](option.html#yAxis) share one [xAxis](option.html#xAxis). And the two `series` are also share the [xAxis](option.html#xAxis), but use different [yAxis](option.html#yAxis) respectively. The property [yAxisIndex](option.html#series-line.yAxisIndex) is used to specify which [yAxis](option.html#yAxis) is used.

<br>

![600xauto](~basic-concepts-overview/coord-sys-1.jpg)

<br>

The following echarts instance contain more than one [grid](option.html#grid). Each [grid](option.html#grid) has its own [xAxis](option.html#xAxis) and [yAxis](option.html#yAxis). The properties [xAxisIndex](option.html#series-line.xAxisIndex), [yAxisIndex](option.html#series-line.yAxisIndex) and [gridIndex](option.html#yAxis.gridIndex) are used to specify the reference relationships.

<br>

![600xauto](~basic-concepts-overview/coord-sys-2.jpg)

<br>

Moreover, a type of series is usually available on various coordinate systems. For example, a [scatter series](option.html#series-scatter) can work on [Cartesian coordinate system](option.html#grid), [polar coordinate system](option.html#polar), [GEO coordinate system](option.html#geo) or other coordinate systems. Similarly, a coordinate system can serve different type of series. As the examples shown above, a [Cartesian coordinate system](option.html#grid) serves several [line series](option.html#series-line) and [bar series](option.html#series-bar).

