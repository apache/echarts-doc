{{target: partial-symbol}}

##${prefix} symbol(string) = ${symbol}

标记的图形，可选自带的图形类型， 有 `'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`

也可以通过 `'image://url'` 设置为图片，其中 url 为图片的链接。

在 ECharts 3 里还可以通过 `'path://'` 设置为任意的矢量路径，这种方式相比于图片来说不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为 symbolSize 设置的大小。


##${prefix} symbolSize(number|Array) = ${symbolSize}

标记的大小，可以设置成诸如 `10` 这样单一的数字，也可以用数组分开表示高和宽，例如 `[20, 10]` 表示标记宽为`20`，高为`10`

##${prefix} symbolRotate(number)

标记的旋转角度。注意在 `markLine` 中当 `symbol` 为 `arrow` 时会忽略 `symbolRotate` 强制设置为切线的角度。