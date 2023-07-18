
{{ target: partial-label-desc }}

${name}图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。



{{ target: partial-label }}

#${prefix} show(boolean) = ${defaultShowLabel|default("false")}

<ExampleUIControlBoolean default="${defaultShowLabel|default(false)}" />

是否显示标签。

{{ if: !${noPosition} }}
#${prefix} position(string|Array) = ${defaultPosition}

<ExampleUIControlEnum options="top,left,right,bottom,inside,insideLeft,insideRight,insideTop,insideBottom,insideTopLeft,insideBottomLeft,insideTopRight,insideBottomRight,outside" />

{{ use: partial-label-position() }}
{{ /if }}

{{ if: !${noDistance} }}
#${prefix} distance(number) = 5

<ExampleUIControlNumber default="5" min="0" step="0.5" />

距离图形元素的距离。

{{ if: !${noPosition} }}
当 position 为字符描述值（如 `'top'`、`'insideRight'`）时候有效。

参见：[label position](${galleryEditorPath}doc-example/label-position)。
{{ /if }}
{{ /if }}

{{ if: !${noRotate} }}
#${prefix} rotate(number) = ${defaultRotate}

<ExampleUIControlAngle default="${defaultRotate|default(0)}" min="-90" max="90" step="1" />

标签旋转。从 -90 度到 90 度。正值是逆时针。

参见：[label rotation](${galleryEditorPath}bar-label-rotation)。
{{ /if }}

#${prefix} offset(Array)

<ExampleUIControlVector dims="x,y" step="0.5" separate="true" />

是否对文字进行偏移。默认不偏移。例如：`[30, 40]` 表示文字在横向上偏移 `30`，纵向上偏移 `40`。

{{ if: ${formatter} }}
#${prefix} formatter(string|Function)

{{ use: partial-2d-data-label-formatter(
    extra = ${formatterExtra}
) }}

{{ elif: ${formatter1d} }}
#${prefix} formatter(string|Function)

{{ use: partial-1d-data-label-formatter(
    extra = ${formatterExtra}
) }}
{{ /if }}

{{ if: !${noTextStyle} }}
{{ use: partial-text-style(
    prefix = ${prefix},
    noAlign = ${noAlign},
    noVerticalAlign = ${noVerticalAlign},
    name = ${name},
    defaultColor = ${defaultColor},
    defaultPadding = ${defaultPadding},
    defaultFontSize = ${defaultFontSize},
    noRich = ${noRich},
    noBox = ${noBox},
    enableAutoColor = true
) }}
{{ /if }}



{{ target: partial-label-position }}

标签的位置。

+ 可以通过内置的语义声明位置：

    示例：
    ```ts
    position: 'top'
    ```

    支持：`top` / `left` / `right` / `bottom` / `inside` / `insideLeft` / `insideRight` / `insideTop` / `insideBottom` / `insideTopLeft` / `insideBottomLeft` / `insideTopRight` / `insideBottomRight`

+ 也可以用一个数组表示相对的百分比或者绝对像素值表示标签相对于图形包围盒左上角的位置。

    示例：
    ```ts
    // 绝对的像素值
    position: [10, 10],
    // 相对的百分比
    position: ['50%', '50%']
    ```

参见：[label position](${galleryViewPath}doc-example/label-position)。

