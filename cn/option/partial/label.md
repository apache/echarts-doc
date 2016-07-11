{{target:partial-label-desc}}

${name}图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，`label`选项在 ECharts 2.x 中放置于`itemStyle.normal`下，在 ECharts 3 中为了让整个配置项结构更扁平合理，`label` 被拿出来跟 `itemStyle` 平级，并且跟 `itemStyle` 一样拥有 `normal`, `emphasis` 两个状态。


{{target:partial-label}}
#${prefix} show(boolean) = ${defaultShowLabel|default("false")}
是否显示标签。
#${prefix} position(string|Array) = ${defaultPosition}
{{use:partial-label-position}}
{{ if: ${formatter} }}
#${prefix} formatter(string|Function)
{{use:partial-2d-data-label-formatter}}
{{ elif: ${formatter1d} }}
#${prefix} formatter(string|Function)
{{use:partial-1d-data-label-formatter}}
{{ /if }}
#${prefix} textStyle(Object)
标签的字体样式。
{{ use:partial-text-style(prefix=${prefix} + '#') }}


{{ target:partial-label-position }}
标签的位置。

**可选：**

+ [x, y]

    通过相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。
    示例：
    ```js
    // 绝对的像素值
    position: [10, 10],
    // 相对的百分比
    position: ['50%', '50%']
    ```

+ 'top'
+ 'left'
+ 'right'
+ 'bottom'
+ 'inside'
+ 'insideLeft'
+ 'insideRight'
+ 'insideTop'
+ 'insideBottom'
+ 'insideTopLeft'
+ 'insideBottomLeft'
+ 'insideTopRight'
+ 'insideBottomRight'