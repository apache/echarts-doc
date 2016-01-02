
{{target: series-funnel}}

# series.funnel(Object)

漏斗图

## type(string) = 'funnel'

## min(number) = 0
指定的最小值

## max(number) = 100
指定的最大值

## minSize(string) = '0%'
最小值min映射到总宽度的比例，如果需要最小值的图形并不是尖端三角，可设置minSize实现

## maxSize(string) = '100%'
最大值max映射到总宽度的比例

## sort(string) = 'descending'
数据排序， 可以取ascending, descending

## gap(number) = 0
数据图形间距

## legendHoverLink(boolean) = true
是否启用图例（legend）hover时的联动响应（高亮显示）

## funnelAlign(string) = 'center'
水平方向对齐布局类型，默认居中对齐，可用选项还有：'left' | 'right' | 'center'

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(prefix="###",useColorPalatte=true)}}
### emphasis(Object)
{{use:partial-item-style(prefix="###")}}

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

## labelLine(Object)
标注折线样式
### normal(Object)
#### length(number) = 20
折线长度
#### show(boolean) = true
是否显示
#### lineStyle(Object)
{{use:partial-line-style(prefix="####")}}





