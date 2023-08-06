
{{ target: series-lines }}

# series.lines(Object)

**Lines graph**

It is used to draw the line data with the information about "from" and "to"; and it is applied for drawing the air routes on map, which visualizes these routes.

ECharts 2.x uses the `markLine` to draw the migrating effect, while in ECharts 3, the `lines` graph is recommended to be used.

## type(string) = 'lines'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-coord-sys(
    seriesType = "lines",
    coordSysDefault = "'geo'",
    cartesian2d = true,
    polar = false,
    geo = true
) }}

## polyline(boolean) = false

If draw as a polyline.

Default to be `false`. Can only draw a two end straight line.

If it is set true, [data.coords](~series-lines.data.coords) can have more than two coord to draw a polyline. It is useful when visualizing GPS track data. See example [lines-bus](${galleryEditorPath}lines-bmap-bus).

## effect(Object)

The setting about the special effects of lines.


**Tips: **All the graphs with trail effect should be put on a individual layer, which means that [zlevel](~series-lines.zlevel) need to be different with others. And the animation ([animation](~series-lines.animation): false)  of this layer is suggested to be turned off at the meanwhile. Otherwise, other graphic elements in other series and the [label](~series-lines.label) of animation would produce unnecessary ghosts.

### show(boolean) = false

Whether to show special effect.

### period(number) = 4

The duration of special effect, which unit is second.

### delay(number|Function)

Effect animation delay. Can be number or callback function.

### constantSpeed(number) = 0

If symbol movement of special effect has a constant speed, which unit is pixel per second. [period](~series-lines.effect.period) will be ignored if `constantSpeed` is larger than 0.

### symbol(string) = 'circle'

The symbol of special effect.

{{ use: partial-icon() }}

The above example uses a custom path of plane shape.

**Tip:** Ahe angle of symbol changes as the tangent of track changes. If you use a custom path, you should make sure that the path shape are upward oriented. It would ensure that the symbol will always move toward the right moving direction when the symbol moves along the track.

### symbolSize(Array|number) = 3

The symbol size of special effect, which could be set as single number such as `10`. What's more, arrays could be used to describe the width and height respectively. For instance, `[20, 10]` indicates `20` for width and  `10` for height.

### color(Color)

The color of special effect symbol, which defaults to be same with [lineStyle.color](~series-lines.lineStyle.color).

### trailLength(number) = 0.2

The length of trail of special effect.  The values from 0 to 1 could be set. Trail would be longer as the the value becomes larger.

### loop(boolean) = true

Whether to loop the special effect animation.

### roundTrip(boolean) = false

{{ use: partial-version(
    version = "5.4.0"
) }}

Whether to go back when the animation reach the end.

## large(boolean) = true

Whether to enable the optimization of large-scale lines graph. It could be enabled when there is a particularly large number of data(>=5k) .

After being enabled, [largeThreshold](~series-lines.largeThreshold) can be used to indicate the minimum number for turning on the optimization.

The style of a single data item can't be customized

## largeThreshold(number) = 2000

The threshold enabling the drawing optimization.

## symbol(string|Array) = 'none'

Symbol type at the two ends of the line. It can be an array for two ends, or assigned separately. See [data.symbol](~series-line.markLine.data.0.symbol) for more format information.

## symbolSize(number|Array) = 10

Symbol size at the two ends of the line. It can be an array for two ends, or assigned separately.

**Attention: ** You cannot assign width and height separately as normal `symbolSize`.

## lineStyle(Object)

{{ use: partial-line-style(
    prefix = '##',
    useColorPalatte = true,
    defaultOpacity = 0.5,
    hasCallback = true
) }}

### curveness(number) = 0

The curveness of edge. The values from 0 to 1 could be set. The curveness would be larger as the the value becomes larger.

## label(Object)

Label settings. Does not work when [polyline](~series-lines.polyline) is `true`.

{{ use: lines-label(
    prefix = "##"
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

Emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: lines-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-lines.emphasis.focus) is set.

{{ use: lines-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-lines.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: lines-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-progressive(
    prefix = '#'
) }}

{{ use: partial-series-group-id() }}

## data(Array)

The data set of lines.

### name(string)

the name of data.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

### coords(Array)

An array includes two ore more than two coordinates. Each coordinate could be `[x, y]` in [rectangular coordinate](~grid) and `[lng, lat]` in [geographic coordinate](~geo).

### lineStyle(Object)

The line style of this data item.

{{ use: partial-line-style(
    prefix = "###",
    hasCurveness = true
) }}

### label(Object)

Label of a single line. Available when [polyline](~series-lines.polyline) is not `true`.

{{ use: lines-label(
    prefix = "###"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: lines-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: lines-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: lines-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "lines"
) }}

{{ use: partial-clip(
    prefix = "#"
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "路径图"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: lines-label }}

#${prefix} show(boolean) = ${defaultShowLabel|default(false)}

Whether to show label.

#${prefix} position(string) = 'end'

the position of label, options:
+ `'start'`
+ `'middle'`
+ `'end'`

#${prefix} formatter(string|Function)

{{ use: partial-2d-data-label-formatter() }}

{{ use: partial-text-style(
    prefix = ${prefix}
) }}



{{ target: lines-state }}

#${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = '#' + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

#${prefix} label(Object)

{{ use: lines-label(
    prefix = "#" + ${prefix}
) }}

