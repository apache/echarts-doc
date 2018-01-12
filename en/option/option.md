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
['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
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


# useUTC(boolean) = false

Whether to use UTC in display.

+ `true`: When `axis.type` is `'time'`, ticks is determined according to UTC, and `axisLabel` and `tooltip` use UTC by default.
+ `false`: When `axis.type` is `'time'`, ticks is determined according to local time, and `axisLabel` and `tooltip` use local time by default.

The default value of `useUTC` is false, for sake of considering:

+ In many cases, labels should be displayed in local time (whether the time is stored in server in local time or UTC).
+ If user uses time string (like '2012-01-02') in data, it usually means local time if time zone is not specified. Time should be displayed in its original time zone by default.

Notice: the setting only effects "display time", but not "parse time".
About how time value (like `1491339540396`, `'2013-01-04'`, ...) is parsed in echarts, see [the time part in date](~series-line.data).
