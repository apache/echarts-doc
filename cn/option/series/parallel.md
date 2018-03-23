
{{target: series-parallel}}

# series.parallel(Object)

平行坐标系的系列。

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}


## type(string) = 'parallel'

{{use: partial-component-id(prefix="#")}}

{{use: partial-coord-sys(
    seriesType="parallel",
    coordSysDefault="'parallel'",
    parallel=true
)}}


{{ use: partial-series-name }}


{{use: partial-parallel-line-style(prefix="#")}}


## inactiveOpacity(number) = 0.05

框选时，未被选中的条线会设置成这个『透明度』（从而可以达到变暗的效果）。


## activeOpacity(number) = 1

框选时，选中的条线会设置成这个『透明度』（从而可以达到高亮的效果）。


## realtime(boolean) = true

是否实时刷新。

## smooth(boolean|number) = false

是否使用平滑曲线。默认为 `false`，可以设置为 `true` 或者一个范围为 `0` 到 `1` 的小数值，指定平滑程度。

## data(Array)

{{use: partial-parallel-data-example}}

### name(string)

数据项名称。

### value(Array)

数据项值。

{{use: partial-parallel-line-style(prefix="##")}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="平行坐标"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear',
    galleryEditorPath=${galleryEditorPath}
)}}


{{target: partial-parallel-line-style}}

#${prefix} lineStyle(Object)

线条样式。

{{use:partial-line-style(
    prefix="##",
    defaultWidth=2,
    defaultOpacity=0.45
)}}

#${prefix} emphasis(Object)

##${prefix} lineStyle(Object)

{{use:partial-line-style(
    prefix="##" + ${prefix},
    defaultWidth=2,
    defaultOpacity=0.45
)}}



