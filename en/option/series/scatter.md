{{target: series-scatter}}

# series.scatter(Object)

Scatter (bubble) diagram . The scatter diagram in [rectangular coordinate system](~grid) could be used to present the relation between  `x` and `y`. If there are multiple dimensions of a data item, the values of the other dimensions can be displayed as bubble diagram through [symbol](~series-scatter.symbol) with various sizes and colors. These can be completed by cooperating with [visualMap](~visualMap) component.


It could be applied in [rectangular coordinate system](~grid) and [polar coordinate system](~polar) and [geographical coordinate system](~geo).


**Tip:** Instead of marking a large number of data points through markPoint in ECharts 2.x, the scatter on [geographical coordinate system](~geo) is suggested to achieve the same effect in ECharts 3. The following example shows the distribution of air quality is with a scatter diagram on the map of China. What's more, the [visualMap](~visualMap) component is used to map PM2.5 to colors. 

~[600x400](${galleryViewPath}scatter-map&edit=1&reset=1)

## type(string) = 'scatter'

{{ use: partial-series-name() }}

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true
)}}

## hoverAnimation(boolean)
Whether to enable the reminding animation effect mouse hover.

{{ use: partial-legend-hover-link }}

{{ use:partial-symbol(
    seriesType="scatter",
    defaultSymbol="'circle'",
    defaultSymbolSize=10,
    prefix="#",
    hasCallback=true
) }}

## large(boolean) = true
Whether to enable the optimization of large-scale scatter diagram. The (>=2k)  could be enabled when there is a particularly large number of data graphic elements. 

After being enabled, it should coordinate with [largeThreshold](~series-scatter.largeThreshold) to optimize the draw when the data volume is greater than specified threshold value.

The style of a single data item can't be custom set and can't interact after optimization. 

## largeThreshold(number) = 2000
the threshold enabling the drawing optimization.

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}


## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=true
)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}


## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
the name of data item.

### value(Array)
the value of data item.

{{ use:partial-symbol(
    prefix="##",
    name="single data"
) }}

### label(Object)
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}


### itemStyle(Object)
the style setting about single data point(bubble).
#### normal(Object)
{{use:partial-item-style(prefix="####")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

{{use: partial-mark-point(
    prefix="#",
    seriesType="scatter",
    hasCoord=true,
    hasType=true
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="scatter",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="scatter diagram"
) }}

{{use: partial-animation(prefix="#")}}

