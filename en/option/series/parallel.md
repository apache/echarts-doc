
{{target: series-parallel}}

# series.parallel(Object)

The series of parallel coordinate.
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


{{use: partial-parallel-line-style(prefix="#")}}


## inactiveOpacity(number) = 0.05

In box selection, the unselected line would be set as this『transparency』 (which could lead to melanized effect).

## activeOpacity(number) = 1

In box selection, the selected line would be set as this『opacity』 (which could lead to highlighted effect).



## data(Array)

{{use: partial-parallel-data-example}}

### name(string)

the name of configuration item.

### value(Array)

the value of data item.

{{use: partial-parallel-line-style(prefix="##")}}


{{use:partial-z-zlevel(
    prefix="#",
    componentName="parallel coordinate"
) }}

{{use: partial-animation(
    prefix="#",
    defaultAnimationEasing='linear'
)}}





{{target: partial-parallel-line-style}}

#${prefix} lineStyle(Object)

line style.

##${prefix} normal(Object)

{{use:partial-line-style(
    prefix="###",
    defaultWidth=2,
    defaultOpacity=0.45
)}}

##${prefix} emphasis(Object)

{{use:partial-line-style(
    prefix="###",
    defaultWidth=2,
    defaultOpacity=0.45
)}}



