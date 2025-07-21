
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


{{ use: partial-label-margin(
    prefix = ${prefix},
    labelMargin = ${labelMargin}
) }}


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





{{ target: partial-label-margin }}
{{ if: ${labelMargin} }}
#${prefix} textMargin(number|Array)

{{ use: partial-version(
    version = "6.0.0"
) }}

标签周围的间距，用于避免标签重叠。单位为像素（px）。

注意：`textMargin` 是作用在标签的本地包围盒上的，也就是说，如果标签设置了旋转（`rotate`），先在未旋转的标签上应用 `textMargin`，再进行旋转。

> 名字是 `textMargin`，因历史原因 `margin` 已被它用。

示例：
```ts
// 设置所有方向的间距为 5，等价于 [5, 5, 5, 5]
textMargin: 5
// 设置上下间距为 5，左右间距为 10
textMargin: [5, 10]
// 分别设置四个方向的间距
textMargin: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

#${prefix} minMargin(number)

{{ use: partial-version(
    version = "5.0.0"
) }}

用于控制标签之间的最小距离，当启用 [labelLayout](~series.labelLayout) 时可能会用到。

`minMargin` 和 `textMargin` 含义相似，但有细微区别。如果不确定，可使用 `textMargin`，因为它基本包含了 `minMargin` 的能力，并且在某些旋转标签的场景下可以提供更紧凑的布局。

> 区别如下：
> + 两个标签之间的最小间隔（如适用）为 `label1.minMargin/2 + label2.minMargin/2`，或 `label1.textMargin[number] + label2.textMargin[number]`。
> + 如果标签设置了 `rotate`：
>     + `minMargin`：先旋转标签，取四个角的 x/y 的 min/max 得到新的矩形（即扩展后的包围盒），最后在新矩形上应用 `minMargin`。
>     + `textMargin`：先在标签的包围盒上应用 `textMargin`，再进行旋转。
> + 数据类型：`minMargin` 只能为 `number`，`textMargin` 可以为 `number | number[]`（类似 CSS margin）。
{{ /if }}


{{ if: ${labelMargin} }}
#${prefix} textMargin(number|Array)

{{ use: partial-version(
    version = "6.0.0"
) }}

标签周围的间距，用于避免标签重叠。单位为像素（px）。

注意：`textMargin` 是作用在标签的本地包围盒上的，也就是说，如果标签设置了旋转（`rotate`），先在未旋转的标签上应用 `textMargin`，再进行旋转。

> 名字是 `textMargin`，因历史原因 `margin` 已被它用。

示例：
```ts
// 设置所有方向的间距为 5，等价于 [5, 5, 5, 5]
textMargin: 5
// 设置上下间距为 5，左右间距为 10
textMargin: [5, 10]
// 分别设置四个方向的间距
textMargin: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

#${prefix} minMargin(number)

{{ use: partial-version(
    version = "5.0.0"
) }}

用于控制标签之间的最小距离，当启用 [labelLayout](~series.labelLayout) 时可能会用到。

`minMargin` 和 `textMargin` 含义相似，但有细微区别。如果不确定，可使用 `textMargin`，因为它基本包含了 `minMargin` 的能力，并且在某些旋转标签的场景下可以提供更紧凑的布局。

> 区别如下：
> + 两个标签之间的最小间隔（如适用）为 `label1.minMargin/2 + label2.minMargin/2`，或 `label1.textMargin[number] + label2.textMargin[number]`。
> + 如果标签设置了 `rotate`：
>     + `minMargin`：先旋转标签，取四个角的 x/y 的 min/max 得到新的矩形（即扩展后的包围盒），最后在新矩形上应用 `minMargin`。
>     + `textMargin`：先在标签的包围盒上应用 `textMargin`，再进行旋转。
> + 数据类型：`minMargin` 只能为 `number`，`textMargin` 可以为 `number | number[]`（类似 CSS margin）。
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

