
{{target: series-lines}}

# series.lines(Object)

**线图**

用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化。

ECharts 2.x 里会用地图上的 `markLine` 去绘制迁徙效果，在 ECharts 3 里建议使用单独的 `lines` 类型图表。

**迁徙示例：**
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
线特效的配置。

**注意：** 所有带有尾迹特效的图表需要单独放在一个层，也就是需要单独设置 [zlevel](~series-lines.zlevel)，同时建议关闭该层的动画（[animation](~series-lines.animation): false）。不然位于同个层的其它系列的图形，和动画的[标签](~series-lines.label)也会产生不必要的残影。

### show(boolean) = false
是否显示特效。
### period(number) = 4
特效动画的时间，单位为 s。
### symbol(string) = 'circle'
特效图形的标记。
{{ use: partial-icon }}

上面示例中就是使用自定义 path 的 symbol 表现飞机的图形。

**Tip:** symbol 的角度会随着轨迹的切线变化，如果使用自定义 path 的 symbol，需要保证 path 图形的朝向是朝上的，这样在 symbol 沿着轨迹运动的时候可以保证图形始终朝着运动的方向。

### symbolSize(Array|number) = 3
特效标记的大小，可以设置成诸如 `10` 这样单一的数字，也可以用数组分开表示高和宽，例如 `[20, 10]` 表示标记宽为`20`，高为`10`。

### color(Color)
特效标记的颜色，默认取 [lineStyle.normal.color](~series-lines.lineStyle.normal.color)。

### trailLength(number) = 0.2
特效尾迹的长度。取从 0 到 1 的值，数值越大尾迹越长。

## lineStyle(Object)
### normal(Object)
{{ use: partial-line-style(
    prefix= '###',
    useColorPalatte=true,
    defaultOpacity=0.5,
    hasCallback=true
) }}

#### curveness(number) = 0
边的曲度，支持从 0 到 1 的值，值越大曲度越大。

### emphasis(Object)
{{ use: partial-line-style(
    prefix='###'
) }}

## label(Object)
标签相关配置。
### normal(Object)
{{ use: lines-label(prefix="###")}}
### emphasis(Object)
{{ use: lines-label(prefix="###") }}

## data(Array)
线数据集。
{{ use: partial-line-data-desc() }}

### 0(Object)
起点的数据。
{{ use: lines-data-item-item(
    name="起点"
) }}
#### value(number)
数据值。

### 1(Object)
终点的数据。
{{ use: lines-data-item-item(
    name="终点"
) }}


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
    componentName="线图"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{ use: partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
) }}

{{ target: lines-data-item-item }}
#### name(string)
${name}的名称。
#### coord(Array)
${name}的坐标，可以是[直角坐标系](~grid)上的`[x, y]`，[地理坐标系](~geo)上的`[lng, lat]`。
#### lineStyle(Object)
该数据项线的样式，起点和终点的`lineStyle`会合并到一起。
##### normal(Object)
{{ use: partial-line-style(
    prefix="#####",
    hasCurveness=true
) }}
###### curveness(number) = 0
边的曲度，支持从 0 到 1 的值，值越大曲度越大。
##### emphasis(Object)
{{ use: partial-line-style(
    prefix="#####",
    hasCurveness=true
) }}

{{ target: lines-label }}
#${prefix} show(boolean) = ${defaultShowLabel|default(false)}
是否显示标签。
#${prefix} position(string) = 'end'
标签位置，可选：
+ `'start'` 线的起始点。
+ `'middle'` 线的中点。
+ `'end'`   线的结束点。
#${prefix} formatter(string|Function)
{{ use: partial-2d-data-label-formatter }}

#${prefix} textStyle(Object)
{{ use: partial-text-style(prefix=${prefix} + '#') }}