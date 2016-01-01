{{ target: partial-icon}}

可选自带的图形类型， 有 `'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`

也可以通过 `'image://url'` 设置为图片，其中 url 为图片的链接。

在 ECharts 3 里还可以通过 `'path://'` 设置为任意的矢量路径，这种方式相比于图片来说不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适（如果是 symbol 的话就是 symbolSize）的大小。