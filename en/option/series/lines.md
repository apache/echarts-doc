
{{target: series-lines}}

# series.lines(Object)

**Lines graph**

It is used to draw the line data with the information about "from" and "to"; and it is applied fot drawing the air routes on map, which visualizes these routes.

ECharts 2.x uses the `markLine` to draw the migrating effect, while in ECharts 3, the `lines` graph is recommended to be used.

**Migrating example: **
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

## polyline(boolean) = false
If draw as polyline.

Default to be `false`. Can only draw a two end straight line.

If it is set true, [data.coords](~series-lines.data.coords) can have more than two coord to draw a polyline. It is useful when visualizing GPS track data. See example [lines-bus](${galleryEditorPath}lines-bmap-bus).

## effect(Object)
The setting about special effect of lines.

**Tips: **All the graphs with trail effect should be put on a individual layer, which means that [zlevel](~series-lines.zlevel) need to be different with others. And the animation ([animation](~series-lines.animation): false)  of this layer is suggested to be turned off at the meanwhile. Otherwise, other graphic elements in other series and the [label](~series-lines.label) of animation would produce unnecessary ghosts.

### show(boolean) = false
Whether to show special effect.
### period(number) = 4
The duration of special effect, which unit is second.

### constantSpeed(number) = 0
If symbol movement of special effect has a constant speed, which unit is pixel per second. [period](~series-lines.effect.period) will be ignored if `constantSpeed` is larger than 0.

### symbol(string) = 'circle'
The symbol of special effect.
{{ use: partial-icon }}

The above example uses a custom path of plane shape.

**Tip:** Ahe angle of symbol changes as the tangent of track changes. If you use a custom path, you should make sure that the path shape are upward oriented. It would ensure that the symbol will always move toward the right moving direction when the symbol moves along the track.

### symbolSize(Array|number) = 3
The symbol size of special effect, which could be set as single number such as `10`. What's more, arrays could be used to decribe the width and height respectively. For instance, `[20, 10]` indicates `20` for width and  `10` for height.

### color(Color)
The color of special effect symbol, which defaults to be same with [lineStyle.normal.color](~series-lines.lineStyle.normal.color).

### trailLength(number) = 0.2
The length of trail of special effect.  The values from 0 to 1 could be set. Trail would be longer as the the value becomes larger.

### loop(boolean) = true
Whether to loop the special effect animation.

## large(boolean) = true
Whether to enable the optimization of large-scale lines graph. It could be enabled when there is a particularly large number of data(>=5k) .

After being enabled, [largeThreshold](~series-lines.largeThreshold) can be used to indicate the minimum number for turning on the optimization.

The style of a single data item can't be customized

## largeThreshold(number) = 2000
The threshold enabling the drawing optimization.

## lineStyle(Object)
### normal(Object)
{{ use: partial-line-style(
    prefix= '###',
    useColorPalatte=true,
    defaultOpacity=0.5,
    hasCallback=true
) }}

#### curveness(number) = 0
The curveness of edge. The values from 0 to 1 could be set. The curveness would be larger as the the value becomes larger.

### emphasis(Object)
{{ use: partial-line-style(
    prefix='###'
) }}

## label(Object)
### normal(Object)
{{ use: lines-label(
    prefix="###"
)}}
### emphasis(Object)
{{ use: lines-label(prefix="###") }}

## data(Array)
The data set of lines.

### name(string)
the name of data.

### coords(Array)

An array includes two ore more than two coordinates. Each coordinate could be `[x, y]` in [rectangular coordinate](~grid) and `[lng, lat]` in [geographic coordinate](~geo).

### lineStyle(Object)
The line style of this data item.
#### normal(Object)
{{ use: partial-line-style(
    prefix="####",
    hasCurveness=true
) }}
##### emphasis(Object)
{{ use: partial-line-style(
    prefix="#####",
    hasCurveness=true
) }}

### label(Object)
#### normal(Object)
{{ use: lines-label(
    prefix="####"
) }}
#### emphasis(Object)
{{ use: lines-label(
    prefix="####"
) }}


{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="lines"
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="lines graph"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{ use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
) }}


{{ target: lines-label }}
#${prefix} show(boolean) = ${defaultShowLabel|default(false)}
Whether to show label.
#${prefix} position(string) = 'end'
the position of label, options:
+ `'start'`
+ `'middle'`
+ `'end'`
#${prefix} formatter(string|Function)
{{ use: partial-1d-data-label-formatter }}
#${prefix} textStyle(Object)
{{ use: partial-text-style(prefix=${prefix} + '#') }}

