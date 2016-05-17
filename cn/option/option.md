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
{{import: component-toolbox}}
{{import: component-geo}}
{{import: component-parallel}}
{{import: component-parallel-axis}}
{{import: component-timeline}}


{{import: series-line}}
{{import: series-bar}}
{{import: series-pie}}
{{import: series-scatter}}
{{import: series-effectScatter}}

{{import: series-radar}}
{{import: series-treemap}}
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

# color(Array)

调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色。

默认为：
```js
['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
```

# backgroundColor(Color)
背景色，默认无背景。

{{ use: partial-color-desc() }}


# textStyle(Object)
全局的字体样式。
{{ use: partial-text-style(
    prefix='#',
    defaultFontSize=12
) }}

{{import: partial-animation }}
