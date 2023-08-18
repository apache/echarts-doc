
{{ target: series-pie }}

# series.pie(Object)

The pie chart is mainly used for showing proportion of different categories. Each arc length represents the proportion of data quantity.


**Tip:** The pie chart is more suitable for illustrating the numerical proportion. If you just to present the numerical differences of various categories, the [bar graph](bar) chart is more suggested. Because compared to tiny length difference,  people is less sensitive to the minor radian difference. Otherwise, it can also be shown as Nightingale chart by using the [roseType](~series-pie.roseType) to distinguish different data through radius.



For multiple pie series in a single chart, you may use [left](~series-pie.left), [right](~series-pie.right), [top](~series-pie.top), [bottom](~series-pie.bottom), [width](~series-pie.width), and [height](~series-pie.height) to locate the pies. Percetage values like [radius](~series-pie.radius) or [label.edgeDistance](~series-pie.label.edgeDistance) are relative to the viewport defined by this setting.

** The below example shows a customized Nightingale chart: **
~[500x400](${galleryViewPath}pie-custom&edit=1&reset=1)

Since ECharts v4.6.0, we provide `'labelLine'` and `'edge'` two extra layouts. Check [label.alignTo](~series-pie.label.alignTo) for more information.

## type(string) = 'pie'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby(
    defaultColorBy = "'data'"
) }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "pie",
    coordSysDefault = "null",
    none = true,
    geo = true,
    calendar = true,
    version = "5.4.0"
) }}

{{ use: partial-selected-mode() }}

## selectedOffset(number) = 10

<ExampleUIControlNumber min="0" default="10" />

The offset distance of selected sector.

## clockwise(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether the layout of sectors of pie chart is clockwise.

## startAngle(number) = 90

<ExampleUIControlAngle step="1" min="0" max="360" default="90" />

The start angle, which range is [0, 360].

## minAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

The minimum angle of sector (0 ~ 360). It prevents some sector from being too small when value is small, which will affect user interaction.

## minShowLabelAngle(number) = 0

<ExampleUIControlAngle step="1" min="0" max="360" default="0" />

If a sector is less than this angle (0 ~ 360), label and labelLine will not be displayed.

## roseType(boolean|string) = false

<ExampleUIControlEnum options="radius,area" />

Whether to show as Nightingale chart, which distinguishs data through radius. There are 2 optional modes:

+ `'radius'` Use central angle to show the percentage of data, radius to show data size.
+ `'area'` All the sectors will share the same central angle, the data size is shown only through radiuses.

## avoidLabelOverlap(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to enable the strategy to avoid labels overlap. Defaults to be enabled, which will move the label positions in the case of labels overlapping

## stillShowZeroSum(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to show sector when all data are zero.

## percentPrecision(number) = 2

<ExampleUIControlNumber min="0" default="2" />

The precision of the percentage value. The default value is `2`.

{{ use: partial-cursor() }}

{{ use: partial-rect-layout-width-height(
    componentName = "pie chart",
    defaultLeft = 0,
    defaultTop = 0,
    defaultRight = 0,
    defaultBottom = 0
) }}

## showEmptyCircle(boolean) = true

<ExampleUIControlBoolean default="true" />

{{ use: partial-version(
    version = "5.2.0"
) }}

If display an placeholder circle when there is no data.

## emptyCircleStyle(Object)

{{ use: partial-version(
    version = "5.2.0"
) }}

Style of circle placeholder.

<ExampleUIControlBoolean default="true" />

{{ use: partial-item-style(
    prefix = "##",
    defaultColor = 'lightgray'
) }}

## label(Object)

{{ use: partial-label-desc(
    name = "pie chart"
) }}

{{ use: partial-pie-label(
    prefix = "##",
    position = true,
    formatter = true
) }}

### alignTo(string) = 'none'

<ExampleUIControlEnum options="labelLine,edge" />

Label aligning policy. Valid only when `position` is `'outer'`.

Since ECharts v4.6.0, we provide `'labelLine'` and `'edge'` two extra valid `alignTo` values.

+ `'none'` (default): label lines have fixed length as [labelLine.length](~series-pie.labelLine.length) and [labelLine.length2](~series-pie.labelLine.length2).
+ `'labelLine'`: aligning to the end of label lines and the length of the shortest horizontal label lines is configured by [labelLine.length2](~series-pie.labelLine.length2).
+ `'edge'`: aligning to text and the distance between the edges of text and the viewport is configured by [label.edgeDistance](~series-pie.label.edgeDistance).

~[900x250](${galleryViewPath}pie-alignTo&reset=1&edit=1)

### edgeDistance(string|number) = '25%'

<ExampleUIControlPercent default="20%" />

The horizontal distance between text edges and viewport when [label.position](~series-pie.label.position) is `'outer'` and [label.alignTo](~series-pie.label.alignTo) is `'edge'`.

~[900x250](${galleryViewPath}doc-example/pie-label-margin&edit=1&reset=1)

In most cases, you need a small `edgeDistance` value like `10` for mobile devices to make sure more text can be shown instead of being `...`. But on larger resolutions, a percentage value should be applied so that the label lines won't be too long. If your chart is used in varied resolutions, it is advised to set [responsive design](tutorial.html#Responsive%20Mobile-End) for different resolutions.

### bleedMargin(number) = 10

<ExampleUIControlNumber default="10" min="0" step="1" />

The horizontal distance between text and viewport when [label.position](~series-pie.label.position) is `'outer'` and [label.alignTo](~series-pie.label.alignTo) is `'none'` or `'labelLine'`. Longer text will be truncated into `'...'`.

~[800x250](${galleryViewPath}doc-example/pie-label-bleedMargin&edit=1&reset=1)

### distanceToLabelLine(number) = 5

<ExampleUIControlNumber default="5" min="0" step="0.5" />

Distance between label line and text.

~[800x250](${galleryViewPath}doc-example/pie-label-distanceToLabelLine&edit=1&reset=1)

## labelLine(Object)

The style of visual guide line. Will show when [label position](~series-pie.label.position) is set as `'outside'`.

{{ use: partial-label-line(
    prefix = '##',
    length = true,
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    defaultMinTurnAngle = 90,
    smooth = true
) }}

### maxSurfaceAngle(number)

{{ use: partial-version(
    version = "5.0.0"
) }}

Max angle between guide line and surface normal. To prevent guide line overlapping with sector.

Can be 0 - 180 degree.

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true
) }}

{{ use: partial-sector-border-radius(
    prefix = '##',
    type = "pie"
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

### scale(boolean) = true

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlBoolean default="true" />

Whether to scale to highlight the data in emphasis state.

### scaleSize(number) = 10

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlNumber min="0" default="10" />

Size of scale. Available when [emphasis.scale](~series-pie.emphasis.scale) is set as `true`.

{{ use: partial-focus-blur-scope() }}

{{ use: pie-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-pie.emphasis.focus) is set.

{{ use: pie-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-pie.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: pie-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: component-circular-layout(
    componentName = "Pie chart",
    defaultRadius = "[0, '75%']"
) }}

Donut chart can be achieved by setting a inner radius.

{{ use: partial-seriesLayoutBy() }}

{{ use: partial-datasetIndex() }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-1d-data-desc() }}

### name(string)

The name of data item.

### value(number)

Data value.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

### selected(boolean) = false

Whether the data item is selected.

### label(Object)

The label configuration of a single sector.

{{ use: partial-pie-label(
    prefix = "###",
    position = true,
    formatter = false
) }}

### labelLine(Object)

{{ use: partial-label-line(
    prefix = '###',
    length = true,
    length2 = true,
    smooth = true
) }}

### itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "###",
    useDecal = true
) }}

{{ use: partial-sector-border-radius(
    prefix = "###",
    type = "pie"
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: pie-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: pie-state(
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

{{ use: pie-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "pie"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

## animationType(string) = 'expansion'

<ExampleUIControlEnum options="expansion,scale" />

Initial animation type.
+ `'expansion'` Default expansion animation.
+ `'scale'` Scale animation. You can use it with `animationEasing='elasticOut'` to have popup effect.

## animationTypeUpdate(string) = 'transition'

<ExampleUIControlEnum options="expansion,transition" />

{{ use: partial-version(
    version = "4.4.0"
) }}

Animation type when data updates.
+ `'transition'` Changing start and end angle of each sector from the old value to new value.
+ `'expansion'` The whole pie expands again.

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-pie-label }}

#${prefix} show(boolean) = false

{{ if: ${position} }}
#${prefix} position(string) = 'outside'

The position of label.

**Options: **
+ `'outside'`

    Outside of sectors of pie chart, which relates to corresponding sector through [visual guide line](~series-pie.labelLine).

+ `'inside'`

    Inside the sectors of pie chart.

+ `'inner'` is the same with `'inside'`.
+ `'center'`

    In the center of pie chart. See [pie-doughnut example](${galleryEditorPath}pie-doughnut)
{{ /if }}

{{ if: ${formatter} }}
#${prefix} formatter(string|Function)

{{ use: partial-1d-data-label-formatter(
    extra = {
    percent: {
        desc: 'percentage',
        type: 'number'
    }
}
) }}
{{ /if }}

#${prefix} rotate(boolean|number|string) = null

Label rotation.

+ If `true` or `'radial'`, the labels are rotated radially. (The `'radial'` literal is supported since `v5.2.0`)
+ If `'tangential'`, the labels are rotated tangentially. (Since `v5.2.0`)
+ If `number`, the labels are rotated in degrees (-90° - 90°). The negative value represents clockwise.

{{ use: partial-text-style(
    prefix = ${prefix},
    noAlign = true,
    noVerticalAlign = true,
    enableAutoColor = true
) }}



{{ target: pie-state }}

#${prefix} label(Object)

{{ use: partial-pie-label(
    prefix = "#" + ${prefix},
    position = false,
    formatter = ${prefix} === '##'
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line(
    prefix = "#" + ${prefix},
    length = false,
    length2 = false,
    smooth = false
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

{{ use: partial-sector-border-radius(
    prefix = "#" + ${prefix},
    type = "pie"
) }}

