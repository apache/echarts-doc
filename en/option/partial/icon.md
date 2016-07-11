{{ target: partial-icon }}

Icon types provided by ECharts includes {{ import: partial-icon-buildin}}

It can also be set to an image with `'image://url'` , in which url is the link to a picture.

{{ use: partial-icon-path }}


{{ target: partial-icon-buildin}}
`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`


{{ target: partial-icon-path }}
Icons can be set to arbitrary vector path via `'path://'` in ECharts. As compared with raster image, vector paths prevent from jagging and blurring when scaled, and have a better control over changing colors. Size of vectoer icon will be adapted automatically. It will be set to be `symbolSize` if it's a `symbol`. Refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) for more information about format of path. You may export vector paths from tools like Adobe Illustrator.
