
{{ target: series-boxplot }}

# series.boxplot(Object)

[Boxplot](https://en.wikipedia.org/wiki/Box_plot) is a convenient way of graphically depicting groups of numerical data through their quartiles.

**Example:**

~[600x400](${galleryViewPath}boxplot-light-velocity&edit=1&reset=1)

<br>
Multiple `series` can be displayed in the same coordinate system. Please refer to [this example](${galleryEditorPath}boxplot-multi&edit=1&reset=1).

<br>
<br>

## type(string) = 'boxplot'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-coord-sys(
    seriesType = "boxplot",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

## hoverAnimation(boolean) = true

Whether to enable the animation when hovering on box.

## layout(string) = null

Layout methods, whose optional values are:

+ `'horizontal'`: horizontally layout all boxes.

+ `'vertical'`: vertically layout all boxes.

The default value is decided by:

+ if there is a `category` axis:
    + if it is horizontal, use `'horizontal'`;
    + otherwise use `'vertical'`;
+ otherwise use `'horizontal'`.

## boxWidth(Array) = [7, 50]

<ExampleUIControlPercentVector default="7,50" min="0" dims="min,max" />

Up and bottom boundary of box width. The array is in the form of `[min, max]`.

It could be absolute value in pixel, such as `[7, 50]`, or percentage, such as `['40%', '90%']`. The percentage means the percentage to the maximum possible width.

## itemStyle(Object)

Style of boxplot.

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    name = "boxplot",
    defaultColor = "#fff",
    defaultBorderWidth = 1,
    useDecal = true
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    name = "boxplot",
    hasInherit = true,
    defaultColor = "#fff",
    defaultBorderWidth = 2,
    defaultShadowBlur = 5,
    defaultShadowOffsetX = 1,
    defaultShadowOffsetY = 1,
    defaultShadowColor = "rgba(0,0,0,0.2)"
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-boxplot.emphasis.focus) is set.

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    name = "boxplot"
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-boxplot.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    name = "boxplot"
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-series-group-id() }}

## data(Array)

Data should be the two-dimensional array shown as follow.

```javascript
[
    [655, 850, 940, 980, 1175],
    [672.5, 800, 845, 885, 1012.5],
    [780, 840, 855, 880, 940],
    [621.25, 767.5, 815, 865, 1011.25],
    { // the data item could also be an Object, so that it could contains special settings for this data item.
        value: [713.75, 807.5, 810, 870, 963.75],
        itemStyle: {...}
    },
    ...
]
```

Every data item (each line in the example above) in the two-dimensional array will be rendered into a box, and each line have five values as:

```javascript
[min,  Q1,  median (or Q2),  Q3,  max]
```

**Data Processing**

ECharts doesn't contain data processing modules, so the five statistic values should be calculated by yourself and then passes into `boxplot`.

However, ECharts also provide some simple [raw data processing tools](https://github.com/apache/echarts/tree/master/extension/dataTool). For example, this [example](${galleryEditorPath}boxplot-light-velocity&edit=1&reset=1) uses `echarts.dataTool.prepareBoxplotData` to proceed simple data statistics.

### name(string)

Name of data item.

### value(Array)

Value of data item.

```javascript
[min,  Q1,  median (or Q2),  Q3,  max]
```

{{ use: partial-data-group-id(
    prefix = '##'
) }}

### itemStyle(Object)

Style of a single data.

{{ use: partial-item-style(
    prefix = "###",
    name = "boxplot",
    useDecal = true,
    decalOnlyWithAreaStyle = true
) }}

### emphasis(Object)

Emphasis state of a single data.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    name = "boxplot",
    hasInherit = true
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of single data.

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    name = "boxplot"
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state of single data.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    name = "boxplot"
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "boxplot",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Boxplot "
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation-init(
    prefix = "#",
    defaultAnimationEasing = 'elasticOut',
    defaultAnimationDuration = 800
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}

