
{{target: series-parallel}}

# series.parallel(Object)

平行坐标系的系列。

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}


## type(string) = 'parallel'


{{use: partial-coord-sys(
    seriesType="parallel",
    coordSysDefault="'parallel'",
    parallel=true
)}}


{{ use: partial-series-name }}



## lineStyle(Object)

线条样式。

### normal(Object)

{{use:partial-line-style(
    prefix="###",
    defaultWidth=2,
    defaultOpacity=0.45
)}}

### emphasis(Object)

{{use:partial-line-style(
    prefix="###",
    defaultWidth=2,
    defaultOpacity=0.45
)}}


## inactiveOpacity(number) = 0.05

框选时，未被选中的条线会设置成这个『透明度』（从而可以达到变暗的效果）。


## activeOpacity(number) = 1

框选时，选中的条线会设置成这个『透明度』（从而可以达到高亮的效果）。



{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear'
)}}


## data(Array)

{{use: partial-parallel-data-example}}