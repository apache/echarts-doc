
{{target: series-boxplot}}

# series.boxplot(Object)

[Boxplot](https://en.wikipedia.org/wiki/Box_plot) is called in chinese as『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』. It would not be introduced here because users know its concept.

**Sample: **

~[600x400](${galleryViewPath}boxplot-light-velocity&edit=1&reset=1)

<br>
Multiple `series` are allow to be in the same coordinate axis. Reference to [sample](${galleryEditorPath}boxplot-multi&edit=1&reset=1). 

<br>
<br>

## type(string) = 'boxplot'

{{use: partial-coord-sys(
    seriesType="cartesian2d",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true
)}}


{{ use: partial-series-name }}

{{ use: partial-legend-hover-link }}

## hoverAnimation(boolean) = true

Whether to enable the motion effect of hover on box.  


## layout(string) = null

layout methods, optional values: 

+ `'horizontal'`: horizontal layout of all boxes.

+ `'vertical'`: vertical layout of all boxes.

The default value is decided by the current situation of coordinate axis: if `category` is horizontal axis, there would be horizontal layout; otherwise, there would be vertical layout; if there is no `category` axis, it would be horizontal layout.  


## boxWidth(Array) = [7, 50]

the limitation of box width. the array means: `[min, max]`.

It could be absolute value, such as `[7, 50]`, and also could be percentage, such as `['40%', '90%']`. The percentage means the percentage of the maximum possible width. 


{{use:partial-boxplot-item-style(prefix="#")}}


## data(Array)

Data format is double dimensional array which is shown in the following example. 

```javascript
[
    [655, 850, 940, 980, 1175],
    [672.5, 800, 845, 885, 1012.5],
    [780, 840, 855, 880, 940],
    [621.25, 767.5, 815, 865, 1011.25],
    { // the data item could also be Object, so it could contains special setting values for this data item.

        value: [713.75, 807.5, 810, 870, 963.75],
        itemStyle: {...}
    },
    ...
]
```

Every data item（each line in the example above） in double dimensional array renders a box, which contains 5 values. They are:

```javascript
[min,  Q1,  median (or Q2),  Q3,  max]
```

**data processing**

the original data processing is not internally installed in ECharts. The data input to `boxplot` should be the values as above from the 5 statistical results. 

However, ECharts also provide extra and simple [original data manipulation function](https://github.com/ecomfe/echarts/tree/dev-3.0.0/extension/dataTool). For example, this [sample](${galleryEditorPath}boxplot-light-velocity&edit=1&reset=1) uses `echarts.dataTool.prepareBoxplotData` to proceed simple data statistics.


### name(string)

the name of data item. 

### value(Array)

the value of data item.

```javascript
[min,  Q1,  median (or Q2),  Q3,  max]
```

{{use:partial-boxplot-item-style(prefix="##")}}


{{use: partial-mark-point(
    prefix="#",
    seriesType="scatter",
    hasCoord=true
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="scatter",
    hasCoord=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="Box plot"
) }}

{{use: partial-animation-init(
    prefix="#",
    defaultAnimationEasing='elasticOut',
    defaultAnimationDuration=800
)}}













{{target:partial-boxplot-item-style}}

#${prefix} itemStyle(Object)

{{use:partial-item-style-desc(name="boxplot")}}


##${prefix} normal(Object)

{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    name="boxplot",
    defaultColor="#fff",
    defaultBorderWidth=1
)}}


##${prefix} emphasis(Object)

{{use: partial-item-style(
    prefix="###",
    useColorPalatte=true,
    name="boxplot",
    defaultColor="#fff",
    defaultBorderWidth=2,
    defaultShadowBlur=5,
    defaultShadowOffsetX=2,
    defaultShadowOffsetY=2,
    defaultShadowColor="rgba(0,0,0,0.4)"
)}}