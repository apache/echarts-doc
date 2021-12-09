
{{ target: partial-progressive }}

#${prefix} progressive(number) = ${defaultProgressive|default(400)}

`progressive` specifies the amount of graphic elements that can be rendered within a frame (about 16ms) if "progressive rendering" enabled.

When data amount is from thousand to more than 10 million, it will take too long time to render all of the graphic elements. Since ECharts 4, "progressive rendering" is supported in its workflow, which processes and renders data chunk by chunk alone with each frame, avoiding to block the UI thread of the browser.

Set `progressive: 0` to disable progressive permanently. By default, progressive is auto-enabled when data amount is bigger than `progressiveThreshold`.

#${prefix} progressiveThreshold(number) = ${defaultProgressiveThreshold|default(3000)}

If current data amount is over the threshold, "progressive rendering" is enabled.

{{ if: ${supportProgressiveChunkMode} }}
#${prefix} progressiveChunkMode(string) = ${defaultProgressiveChunkMode|default("'sequential'")}

Chunk approach, optional values:
+ `'sequential'`: slice data by data index.
+ `'mod'`: slice data by mod, which make the data items of each chunk coming from all over the data, bringing better visual effect while progressive rendering.
{{ /if }}

