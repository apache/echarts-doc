
{{target: series-map}}

# series.map(Object)

## type(string) = 'map'

{{use: series-common}}

## map(string)

地图显示区域：支持world，china及全国34个省市自治区。
省市自治区直接使用简体中文，比如湖南、天津等。支持子区域模式，通过主地图类型扩展出所包含的子区域地图，格式为'主地图类型|子区域名称'，如'world|Brazil'，'china|广东'，详见[例子](http://echarts.baidu.com/doc/example/map8.html)


## selectedMode(boolean | string)

选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选single，multiple

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(prefix="###", useColorPalatte=true)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

## showLegendSymbol(boolean)

在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在legend时生效

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

## data(Array)

data 的每个数组项可以是用对象表示的`{name: '北京', value: 10}`数据，也可以是一个配置项，此时数据取配置项中的 value 作为数值。

### name(string)

### value(number)

## roam(boolean | string)

是否开启滚轮缩放和拖拽漫游，默认为false（关闭），其他有效输入为true（开启），'scale'（仅开启滚轮缩放），'move'（仅开启拖拽漫游）







