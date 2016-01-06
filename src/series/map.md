
{{target: series-map}}

# series.map(Object)

## type(string) = 'map'

{{ use: geo-common(prefix='#') }}

## selectedMode(boolean | string)
选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选single，multiple

## showLegendSymbol(boolean)
在图例相应区域显示图例的颜色标识（系列标识的小圆点），存在legend时生效

## roam(boolean | string)
{{ use: partial-roam }}

## data(Array)
data 的每个数组项可以是用对象表示的`{name: '北京', value: 10}`数据，也可以是一个配置项，此时数据取配置项中的 value 作为数值。
### name(string)
区域名字
### value(number)
数据值






