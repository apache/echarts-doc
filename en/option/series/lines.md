
{{target: series-lines}}

# series.lines(Object)

**lines graph**

It is used to draw the line data with the information about "from" and "to"; and it is applied fot drawing the air routes on map, which visualizes these routes.

ECharts 2.x uses the `markLine` from map to draw the migrating effect; while in ECharts 3, the `lines` graph is recommended to be used individually.

**migrating example：**
~[700x500](${galleryViewPath}geo-lines&edit=1&reset=1)


## type(string) = 'lines'

{{ use: partial-series-name() }}


{{ use: partial-coord-sys(
    seriesType="lines",
    coordSysDefault="'geo'",
    cartesian2d=true,
    polar=false,
    geo=true
) }}

## effect(Object)
the setting about special effect of lines.

**Tips：**All the graphs with contrail effect should be individually put on one layer. It indicates that [zlevel](~series-lines.zlevel) need to be individually set up and the animation（[animation](~series-lines.animation): false） of this layer is suggested to turn off at the meanwhile. Otherwise, other graphic elements in other series and the [label](~series-lines.label) of animation would produce unnecessary shadows.  

### show(boolean) = false
Whether to show special effect.
### period(number) = 4
the duration of special effect, which unit is s.
### symbol(string) = 'circle'
the symbol of special graph.
{{ use: partial-icon }}

The above example is the graphic elements which present plane by default the symbol of path. 

**Tip:** the angle of symbol changes as the tangent line of track changes. If you use the symbol of default path, you should make sure that the path graphic elements are upward oriented. It would ensure that the graphic elements always move toward the right moving direction when the symbol moves along the track. 

### symbolSize(Array|number) = 3
the symbol size of special effect, which could be set as single number such as `10`. What's more, arrays could be used to decribe the height and width respectively. For instance, `[20, 10]` indicates `20` for width and  `10` for height.  

### color(Color)
the color of special effect symbol, which defaults to be [lineStyle.normal.color](~series-lines.lineStyle.normal.color).

### trailLength(number) = 0.2
the length of contrails of special effect.  The values from 0 to 1 could be set. It would be longer as the the value becomes larger. 

## lineStyle(Object)
### normal(Object)
{{ use: partial-line-style(
    prefix= '###',
    useColorPalatte=true,
    defaultOpacity=0.5,
    hasCallback=true
) }}

#### curveness(number) = 0
the curveness of edge. The values from 0 to 1 could be set. The curveness would be larger as the the value becomes larger. 

### emphasis(Object)
{{ use: partial-line-style(
    prefix='###'
) }}

## label(Object)
the related configuration of label.
### normal(Object)
{{ use: lines-label(
    prefix="###"
)}}
### emphasis(Object)
{{ use: lines-label(prefix="###") }}

## data(Array)
the data set of lines.
{{ use: partial-line-data-desc() }}

### 0(Object)
the date on the starting point.
{{ use: lines-data-item-item(
    name="starting point"
) }}
#### value(number)
data value.

### 1(Object)
the data of the end point.
{{ use: lines-data-item-item(
    name="end point"
) }}


{{ target: lines-data-item-item }}
#### name(string)
the name of ${name}.
#### coord(Array)
the coordinate of ${name}，which could be the `[x, y]` in [rectangular coordinate system](~grid) and `[lng, lat]` in [geographic coordinate system](~geo).

#### lineStyle(Object)
the line style of this data item. the `lineStyle` of both the start and end points would be combined together.
##### normal(Object)
{{ use: partial-line-style(
    prefix="#####",
    hasCurveness=true
) }}
###### curveness(number) = 0
the curveness of edge. The values from 0 to 1 could be set. The curveness would be larger as the the value becomes larger. 
##### emphasis(Object)
{{ use: partial-line-style(
    prefix="#####",
    hasCurveness=true
) }}


{{ target: lines-label }}
#${prefix} show(boolean) = ${defaultShowLabel|default(false)}
whether to show label.
#${prefix} position(string) = 'end'
the position of label，options：
+ `'start'` the start point of lines.
+ `'end'`   the end point of lines.
#${prefix} formatter(string|Function)
{{ use: partial-1d-data-label-formatter }}

{{use: partial-mark-point(
    prefix="#",
    seriesType="lines"
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="lines"
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="lines graph"
) }}

{{use: partial-animation(prefix="#")}}