{{target:series-line}}

# series.line(Object)

折线图

## type(string) = 'line'

{{use: series-common(coordSysDefault="cartesian2d",cartesian2d=true,polar=true,geo=false)}}

## itemStyle(Object)
折线拐点标记的样式

### normal(Object)
{{use:partial-item-style(prefix="###")}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

{{use:partial-symbol()}}

## lineStyle(Object)
{{use:partial-line-style(prefix="##")}}

### normal(Object)
{{use:partial-line-style(prefix="###")}}
### emphasis(Object)
{{use:partial-line-style(prefix="###")}}

## hoverAnimation(boolean) = true
鼠标浮动在拐点上时是否显示动画效果

## legendHoverLink(boolean) = true
是否启用图例（legend）hover时的联动响应（高亮显示）

## stack(string) = null
组合名称，双数值轴时无效，多组数据的堆积图时使用，eg：stack:'group1'，则series数组中stack值等于'group1'的数据做堆积计算

## areaStyle(Object)
{{use:partial-area-style(prefix="##")}}

## showSymbol(boolean) = true
是否显示 symbol, 只有在 tooltip hover 的时候显示

## showAllSymbol(boolean) = false
标志图形默认只有主轴显示（随主轴标签间隔隐藏策略），如需全部显示可把showAllSymbol设为true

## smooth(false) = false
平滑曲线显示，smooth为true时lineStyle不支持虚线
### normal(Object)
{{use:partial-area-style(prefix="###")}}
### emphasis(Object)
{{use:partial-area-style(prefix="###")}}

{{use:partial-animation(prefix="#")}}
