{{target: option}}

{{import: component-title}}
{{import: component-legend}}
{{import: component-grid}}
{{import: component-x-axis}}
{{import: component-y-axis}}
{{import: component-polar}}
{{import: component-radius-axis}}
{{import: component-angle-axis}}
{{import: component-radar}}
{{import: component-data-zoom}}
{{import: component-visual-map}}
{{import: component-tooltip}}
{{import: component-axisPointer}}
{{import: component-toolbox}}
{{import: component-brush}}
{{import: component-geo}}
{{import: component-parallel}}
{{import: component-parallel-axis}}
{{import: component-single-axis}}
{{import: component-timeline}}
{{import: component-graphic}}
{{import: component-calendar}}
{{import: component-dataset}}
{{import: component-aria}}


{{import: series-line}}
{{import: series-bar}}
{{import: series-pie}}
{{import: series-scatter}}
{{import: series-effectScatter}}

{{import: series-radar}}
{{import: series-tree}}
{{import: series-treemap}}
{{import: series-sunburst}}
{{import: series-boxplot}}
{{import: series-candlestick}}
{{import: series-heatmap}}
{{import: series-map}}
{{import: series-parallel}}
{{import: series-lines}}
{{import: series-graph}}
{{import: series-sankey}}
{{import: series-funnel}}
{{import: series-gauge}}
{{import: series-pictorialBar}}
{{import: series-themeRiver}}
{{import: series-custom}}

# color(Array)

The color list of palette. If no color is set in series, the colors would be adopted sequentially and circularly from this list as the colors of series.

Defaults:
```js
['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
```


# backgroundColor(Color)
Background color. Defaults to have no background.

{{ use: partial-color-desc() }}


# textStyle(Object)
Global font style.

{{ use: partial-simple-text-style(
    prefix: '#',
    defaultFontSize: 12
) }}

{{import: partial-animation }}

# blendMode(string) = 'source-over'

Sets the type of compositing operation to apply when drawing a new shape. See the different type: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation.

The default is `'source-over'`. Support settings for each series.

`'lighter'` is also a common type of compositing operation. In this mode, the area where the number of graphics is concentrated is superimposed into a high-brightness color (white). It often used to highlight the effect of the area. See example [Global airline](${galleryEditorPath}lines-airline)

# hoverLayerThreshold(number) = 3000

When the number of element of the whole chart is larger than `hoverLayerThreshold`, a seperate hover layer is used to render hovered elements.

The seperate hover layer is used to avoid re-painting the whole canvas when hovering on elements. Instead, the hovered elements are rendered in a seperate layer so that other elements don't have to be rendered again.

ECharts 2 use seperate layer for all cases. But it brings some problems like the hovered elements may not covering everything else correctly, or translucent elements may not overlay correctly to each other. And it brings extra member cost due to the extra canvas and may bring burden on mobile devices. So since ECharts 3, the hover layer is not used by default. Only when the element amount is large enough will the hover layer used.

# useUTC(boolean) = false

Whether to use UTC in display.

+ `true`: When `axis.type` is `'time'`, ticks is determined according to UTC, and `axisLabel` and `tooltip` use UTC by default.
+ `false`: When `axis.type` is `'time'`, ticks is determined according to local time, and `axisLabel` and `tooltip` use local time by default.

The default value of `useUTC` is false, for sake of considering:

+ In many cases, labels should be displayed in local time (whether the time is stored in server in local time or UTC).
+ If user uses time string (like '2012-01-02') in data, it usually means local time if time zone is not specified. Time should be displayed in its original time zone by default.

Notice: the setting only affects "display time", not "parse time".
For how time value (like `1491339540396`, `'2013-01-04'`, ...) is parsed in echarts, see [the time part in date](~series-line.data).


# options(Array) = undefined

Option array used in [timeline](option.html#timeline). Each item of this array is an echarts option (`ECUnitOption`).


# media(Array)

See [Responsive Mobile-End](tutorial.html#Responsive%20Mobile-End) for details.

## query(Object)

If more than one properties used, it means "and".

### minWidth(number) = undefined

### maxHeight(number) = undefined

### minAspectRatio(number) = undefined

That is the radio of `width / height`. The value can be like `1.3`.

## option(Object)

Each item of this array is an echarts option (`ECUnitOption`). It will be applied when this query is matched.
