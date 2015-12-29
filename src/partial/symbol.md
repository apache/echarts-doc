{{target: partial-symbol}}

##${prefix} symbol(string) = ${symbol}

标记的图形，可选自带的图形类型， 有 `'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`

也可以通过 `'image://url'` 设置为图片，其中 url 为图片的链接。

在 ECharts 3 里还可以通过 `'path://'` 设置为任意的矢量路径，这种方式相比于图片来说不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为 symbolSize 设置的大小。


##${prefix} symbolSize(number|Array) = ${symbolSize}

标记的大小，可以设置成诸如 `10` 这样单一的数字，也可以用数组分开表示高和宽，例如 `[20, 10]` 表示标记宽为`20`，高为`10`

##${prefix} symbolRotate(number)

标记的旋转角度。注意在 `markLine` 中当 `symbol` 为 `arrow` 时会忽略 `symbolRotate` 强制设置为切线的角度。

##${prefix} symbolOffset(Array) = [0, 0]

标记相对于原本位置的偏移。默认情况下，标记会居中置放在数据对应的位置，但是如果 symbol 是自定义的矢量路径或者图片，就有可能不希望 symbol 居中。这时候可以使用该配置项配置 symbol 相对于原本居中的偏移，可以是绝对的像素值，也可以是相对的百分比。

例如 `[0, '50%']` 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。