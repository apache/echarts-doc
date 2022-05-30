{{ target: partial-icon }}

ECharts 提供的标记类型包括 {{ import: partial-icon-buildin}}

{{ use: partial-icon-path }}


{{ target: partial-icon-buildin}}
`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`, `'none'`


{{ target: partial-icon-path }}
可以通过 `'path://'` 将图标设置为任意的矢量路径。这种方式相比于使用图片的方式，不用担心因为缩放而产生锯齿或模糊，而且可以设置为任意颜色。路径图形会自适应调整为合适（如果是 `symbol` 的话就是 `symbolSize`）的大小。路径的格式参见 [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)。可以从 Adobe Illustrator 等工具编辑导出。
