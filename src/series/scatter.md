{{target: series-scatter}}

# series.scatter(Object)

散点图

## type(string) = 'scatter'

{{use: partial-coord-sys(
    seriesType="bar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=true,
    geo=true
)}}

{{ use:partial-symbol(
    defaultSymbol="'circle'",
    defaultSymbolSize=10
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array.<string>)
{{use:partial-optional-label-position}}
### emphasis(Object)
{{use:partial-label(prefix="###")}}
#### position(string|Array.<string>)
{{use:partial-optional-label-position}}



## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(prefix="###", useColorPalatte=true)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}




## data(Array)

data 的每个数组项可以是用数组表示的`[x, y, value]`数据，也可以是一个配置项，此时数据取配置项中的 value 作为数值。

### name(string)
数据项名称。

### value(Array)
数据项值，

### label(Object)
{{use:partial-label-desc}}
#### normal(Object)
{{use:partial-label(prefix="###")}}
##### position(string|Array.<string>)
{{use:partial-optional-label-position}}
#### emphasis(Object)
{{use:partial-label(prefix="###")}}
##### position(string|Array.<string>)
{{use:partial-optional-label-position}}


### itemStyle(Object)
{{use:partial-item-style-desc}}
#### normal(Object)
{{use:partial-item-style(prefix="###")}}
#### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

