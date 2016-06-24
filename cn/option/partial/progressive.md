{{ target: partial-progressive}}

#${prefix} progressive(number) = ${defaultProgressive|default(400)}

渐进式渲染时每一帧绘制图形数量，设为 0 时不启用渐进式渲染，支持每个系列单独配置。


在图中有数千图形甚至好几万图形的时候，一下子把图形绘制出来，或者交互重绘的时候可能会造成界面的卡顿甚至假死，因此 ECharts 从 3.2.0 开始支持大量图形的渐进式渲染（progressive rendering），渲染的时候会把创建好的图形分到数帧中渲染，每一帧渲染只渲染指定数量的图形。

该配置项就是用于配置该系列每一帧渲染的图形数，默认是 400 个，可以根据图表图形复杂度的需要适当调整这个数字使得在不影响交互流畅性的前提下达到绘制速度的最大化。比如在 lines 图或者平行坐标中线宽大于 1 的 polyline 绘制会很慢，这个数字就可以设置小一点，而线宽小于等于 1 的 polyline 绘制非常快，该配置项就可以相对调得比较大。

#${prefix} progressiveThreshold(number) = ${defaultProgressiveThreshold|default(3000)}

启用渐进式渲染的图形数量阈值，在单个系列的图形数量超过该阈值时启用渐进式渲染。
