
{{ target: partial-series-sampling }}

## sampling(string)

折线图在数据量远大于像素点时候的降采样策略，开启后可以有效的优化图表的绘制效率，默认关闭，也就是绘制全部的数据点，不进行过滤。

可选：
+ `'lttb'` 采用 Largest-Triangle-Three-Bucket 算法，可以最大程度保证采样后线条的趋势，形状和极值。
+ `'average'` 取过滤点的平均值
+ `'min'` 取过滤点的最小值
+ `'max'` 取过滤点的最大值
+ `'minmax'` 取过滤点绝对值的最大极值 (从 `v5.5.0` 开始支持)
+ `'sum'` 取过滤点的和
