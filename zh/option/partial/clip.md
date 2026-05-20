
{{ target: partial-clip }}

#${prefix|default('#')} clip(boolean) = ${defaultClip|default(true)}

<ExampleUIControlBoolean default="${defaultClip|default(true)}" />

{{ use: partial-version(
    version = ${version|default("4.4.0")}
) }}

是否基于坐标系区域对系列的图形进行剪裁。

具体裁剪效果是：

{{ if: ${seriesType} === 'scatter' || ${seriesType} === 'effectScatter' }}
任一图形如果中心超出坐标系则被整体剪裁掉，否则整体保留哪怕部分超出。
{{ elif: ${seriesType} === 'bar' || ${seriesType} === 'pictorialBar' }}
自 `v6.1.0`，任一柱子超出坐标系的部分会被剪裁掉。
`v6.1.0` 前（不含），任一柱子如果中心超出坐标系则被整体剪裁掉，否则整体保留哪怕部分超出。
{{ elif: ${seriesType} === 'line' }}
- 对于折线：剪裁掉折线的超出坐标系的部分。
- 对于拐点图形：如果图形中心点超出坐标系，则此图形整体不显示；不会裁剪单个图形。
{{ elif: ${seriesType} === 'lines' }}
对于任一图形，裁掉超出坐标系的部分。
{{ elif: ${seriesType} === 'candlestick' }}
自 `v6.1.0`，任一图形超出坐标系的部分会被剪裁掉。
`v6.1.0` 前（不含），任一图形如果中心超出坐标系则被整体剪裁掉，否则整体保留哪怕部分超出。
{{ elif: ${seriesType} === 'boxplot' }}
任一图形超出坐标系的部分会被剪裁掉。
{{ elif: ${seriesType} === 'custom' }}
对于任一图形，裁掉超出坐标系的部分。
{{ /if }}
