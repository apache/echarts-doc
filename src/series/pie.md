{{target:series-pie}}

# series.pie(Object)

饼图

## type(string) = 'pie'

{{use: series-common(cartesian2d=false,polar=false,geo=false)}}

## itemStyle(Object)

饼图的扇形样式

### normal(Object)
{{use:partial-item-style(prefix="###")}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

## center(Array)

显示画布左上角的横向、纵向位置，如['10%', '30%']

## radius(Array)

内外两个同心圆的半径数组，如[40, 55]

显示画布左上角的横向、纵向位置，如['10%', '30%']

## selectedMode(boolean | string)

选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选single，multiple

## selectedOffset(number)

选中时距离原来位置的偏移量

## clockwise(boolean)

是否顺时针显示

## data(Array)
### name(string)
数据名称
### value(number)
数据值

## label(Object)

标注文字

### normal(Object)

#### show(boolean)

是否展示

#### position(string)

文字显示在扇形内部还是外部，可选inside、outside，默认outside

#### formatter(string)

#### textStyle(Object)

##### baseline(string)
可选top、center、bottom


## labelLine(Object)

标注折线样式

### normal(Object)

#### length(number)

内部折线长度

#### length2(number)

外部折线长度







