
{{ target: series-funnel }}

# series.funnel(Object)

**Funnel chart**

**sample: **
~[600x400](${galleryViewPath}funnel&reset=1&edit=1)

## type(string) = 'funnel'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby(
    defaultColorBy = "'data'"
) }}

## min(number) = 0

<ExampleUIControlNumber default="0" step="1" />

The specified minimum value.

## max(number) = 100

<ExampleUIControlNumber default="100" step="1" />

The specified maximum value.

## minSize(number|string) = '0%'

<ExampleUIControlPercent default="0%" />

The mapped width from minimum data value [min](~series-funnel.min).

It can be absolute pixel and also the percentage of [layout width](~series-funnel.width). If you don't want the graph of minimum value to be a triangle, you can set up this property larger than 0.

## maxSize(number|string) = '100%'

<ExampleUIControlPercent default="100%" />

The mapped width from maximum data value [max](~series-funnel.max).

It can be absolute pixel and also the percentage of [layout width](~series-funnel.width).

## orient(string) = 'vertical'

<ExampleUIControlEnum options="vertical,horizontal" />

Orient of funnel，Can be `'vertical'` or `'horizontal'`.

{{ use: partial-version(
    version = "4.9.0"
) }}

## sort(string|Function) = 'descending'

<ExampleUIControlEnum options="none,descending,ascending" default="descending" />

Data sorting, which can be whether `'ascending'`, `'descending'`, `'none'`(in data order) or a function, which is the same as `Array.prototype.sort(function (a, b) { ... })`;

## gap(number) = 0

<ExampleUIControlNumber default="0" min="0" step="0.5" />

Gap between each trapezoid.

{{ use: partial-legend-hover-link() }}

## funnelAlign(string) = 'center'

<ExampleUIControlEnum options="left,center,right" default="center" />

Horizontal align. Defaults to align center. Can be 'left', 'right', 'center'.

## label(Object)

{{ use: partial-label-desc(
    name = "funnel chart"
) }}

{{ use: partial-funnel-label(
    prefix = "##",
    position = true,
    formatter = true
) }}

## labelLine(Object)

The visual guide line style of label. When [label position](~series-funnel.label.position) is set as `'left'`or`'right'`, the visual guide line will show.

{{ use: partial-funnel-label-line(
    prefix = '##',
    length = true
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true,
    useDecal = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: partial-funnel-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-funnel.emphasis.focus) is set.

{{ use: partial-funnel-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-funnel.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: partial-funnel-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "Funnel",
    defaultLeft = 80,
    defaultTop = 60,
    defaultRight = 80,
    defaultBottom = 60
) }}

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

the name of data item.

### value(number)

data value.

### itemStyle(Object)

{{ use: partial-item-style-desc() }}

#### height(string|number)

Height of this data item. By default, the height is evenly divided for all data items. The height can be set to percentage (e.g.: '10%') or pixel value (e.g.: 20). Please make sure that the total height of all data items is 100%.

{{ use: partial-item-style(
    prefix = "###",
    useDecal = true
) }}

### label(Object)

The label configuration of a single data item.

{{ use: partial-funnel-label(
    prefix = "###",
    position = true,
    formatter = false
) }}

### labelLine(Object)

{{ use: partial-funnel-label-line(
    prefix = '###',
    length = true
) }}

### emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: partial-funnel-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

{{ use: partial-funnel-state(
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

{{ use: partial-funnel-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "funnel"
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



{{ target: partial-funnel-state }}

#${prefix} label(Object)

{{ use: partial-funnel-label(
    prefix = "#" + ${prefix},
    position = false,
    formatter = true
) }}

#${prefix} labelLine(Object)

{{ use: partial-funnel-label-line(
    prefix = "#" + ${prefix},
    length = false
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}



{{ target: partial-funnel-label }}

#${prefix} show(boolean) = false

{{ if: ${position} }}
#${prefix} position(string) = 'outside'

Label position.

**Options: **
+ `'left'`Left side of funnel chart. Available when [orient](~series-funnel.orient) is `'vertical'`.
+ `'right'` Right side of funnel chart. Available when [orient](~series-funnel.orient) is `'horizontal'`.
+ `'top'` Top side of funnel chart. Available when [orient](~series-funnel.orient) is `'vertical'`.
+ `'bottom'` Bottom side of funnel chart. Available when [orient](~series-funnel.orient) is `'vertical'`.
+ `'inside'`Inside the trapezoid of funnel chart.
+ `'insideRight'`Right inside the trapezoid of funnel chart.
+ `'insideLeft'`Left inside the trapezoid of funnel chart.
+ `'leftTop'`Top-left of funnel chart.
+ `'leftBottom'`Bottom-left of funnel chart.
+ `'rightTop'`Top-right side of funnel chart.
+ `'rightBottom'`Bottom-right side of funnel chart.
+ `'inner'` equals to `'inside'`.
+ `'center'` equals to `'inside'`.

[labelLine](~series-funnel.labelLine) can be used to guide to the corresponding trapezoid when label is not inside.
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

{{ use: partial-text-style(
    prefix = ${prefix}
) }}



{{ target: partial-funnel-label-line }}

#${prefix} show(boolean)

Whether to show visual guide line.

{{ if: ${length} }}
#${prefix} length(number)

The length of the first part from visual guide line.
{{ /if }}

#${prefix} lineStyle(Object)

{{ use: partial-line-style(
    prefix = "#" + ${prefix}
) }}

