
{{target: series-lines}}

# series.lines(Object)

线数据绘制，主要用于地图上的航线，路线的可视化。

ECharts 2.x 里会用地图上的 `markLine` 去绘制迁徙效果，在 ECharts 3 里建议使用单独的 `lines` 类型图表。

**迁徙示例：**
~[700x500](${galleryViewPath}geo-lines)


## type(string) = 'lines'

{{ use: partial-coord-sys(
    seriesType="lines",
    coordSysDefault="'geo'",
    cartesian2d=true,
    polar=false,
    geo=true
) }}

## effect(Object)
线特效的配置。
### show(boolean) = false
是否显示特效。
### period(number) = 4
### symbol(string)

{{ use: partial-icon }}

### symbolSize(Array|number)
特效标记的大小，可以设置成诸如 `10` 这样单一的数字，也可以用数组分开表示高和宽，例如 `[20, 10]` 表示标记宽为`20`，高为`10`。
