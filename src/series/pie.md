{{target:series-pie}}

# series.pie(Object)

饼图

## type(string) = 'pie'

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

## center(Array)
显示画布左上角的横向、纵向位置，如['10%', '30%']

## radius(Array)
内外两个同心圆的半径数组，如[40, 55]

## selectedMode(boolean | string)
选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选single，multiple

## selectedOffset(number)
选中时距离原来位置的偏移量

## clockwise(boolean)
是否顺时针显示

## startAngle(number)
开始角度，支持范围[0, 360]，默认90度即时钟12点的位置

## minAngle(number)
最小角度，默认为0

## data(Array)
数组数据
### name(string)
数据名称
### value(number)
数据值
### selected(boolean)
当前选中
### itemStyle(Object)
{{use:partial-item-style-desc}}
#### normal(Object)
{{use:partial-item-style(prefix="####", useColorPalatte=true)}}
#### emphasis(Object)
{{use:partial-item-style(prefix="####")}}

## labelLine(Object)
标注折线样式
### normal(Object)
#### length(number)
内部折线长度
#### length2(number)
外部折线长度
#### lineStyle(Object)
{{use:partial-line-style(prefix="####")}}







