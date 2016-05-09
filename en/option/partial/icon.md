{{ target: partial-icon }}

You can choose the marking type, there are {{ import: partial-icon-buildin}}

you can also set to picture through `'image://url'` , in which url is the link to a picture.

{{ use: partial-icon-path }}


{{ target: partial-icon-buildin}}
`'circle'`, `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, `'arrow'`


{{ target: partial-icon-path }}
In ECharts 3, you can set to any vector paths through `'path://'` , and you need not to worry about the serrate or blurriness cause the zoom comparing to the pictures, what's more you can set to any color.Path graphics will adjust to appropriate size automatically（ symbol as in symbolSize). Path format can refer to [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData). You can also edit and extract it from tools such as Adobe Illustrator.
