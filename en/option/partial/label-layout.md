
{{ target: partial-label-layout }}

{{ use: partial-version(
    version = "5.0.0"
) }}

Unified layout configuration of labels.

It provide a chance to adjust the labels' `(x, y)` position, alignment based on the original layout each series provides.

This option can be a callback with following parameters.

```ts
// corresponding index of data
dataIndex: number
// corresponding type of data. Only available in graph, in which it can be 'node' or 'edge'
dataType?: string
// corresponding index of series
seriesIndex: number
// Displayed text of label.
text: string
// Bounding rectangle of label.
labelRect: {x: number, y: number, width: number, height: number}
// Horizontal alignment of label.
align: 'left' | 'center' | 'right'
// Vertical alignment of label.
verticalAlign: 'top' | 'middle' | 'bottom'
// Bounding rectangle of the element corresponding to.
rect: {x: number, y: number, width: number, height: number}
// Default points array of labelLine. Currently only provided in pie and funnel series.
// It's null in other series.
labelLinePoints?: number[][]
```

**Example:**

Align the labels on the right. Left 10px margin to the edge.

```ts
labelLayout(params) {
    return {
        x: params.rect.x + 10,
        y: params.rect.y + params.rect.height / 2,
        verticalAlign: 'middle',
        align: 'left'
    }
}
```

Set the text size based on the size of element bounding rectangle.

```ts

labelLayout(params) {
    return {
        fontSize: Math.max(params.rect.width / 10, 5)
    };
}
```

#${prefix} hideOverlap(boolean)

If hide the overlapped labels.

The following example shows how to hide the overlapped labels in graph automatically when zooming.

~[600x400](${galleryViewPath}graph-label-overlap&edit=1&reset=1)

#${prefix} moveOverlap(string)

If move the overlapped labels to avoid overlapping.

Currently supported configurations:

+ `'shiftX'` Place the labels on horizontal direction sequencely, used when aligned horizontally.
+ `'shiftY'` Place the labels on vertical direction sequencely, used when aligned vertically.

The following example shows how to use `moverOverlap: 'shiftY'` to place the labels aligned vertically.

~[600x400](${galleryViewPath}scatter-label-align-right&edit=1&reset=1)

#${prefix} x(number|string)

The x position of the label. Support absolute pixel values ​​or relative values ​​such as `'20%'`.

#${prefix} y(number|string)

The y position of the label. Support absolute pixel values ​​or relative values ​​such as `'20%'`.

#${prefix} dx(number)

The pixel offset of the label in the x direction. Can be used with `x`.

#${prefix} dy(number)

The pixel offset of the label in the y direction. Can be used with `y`

#${prefix} rotate(number)

Label rotation angle.

#${prefix} width(number)

The width of displayed label. It can be used with `overflow` to constraint the label in a fixed width.

#${prefix} height(number)

The height of displayed label.

#${prefix} align(string)

The horizontal alignment of the label. Can be `'left'`, `'center'`, `'right'`.

#${prefix} verticalAlign(string)

The vertical alignment of the label. Can be `'top'`, `'middle'`, `'bottom'`.

#${prefix} fontSize(number)

The text size of the label.

#${prefix} draggable(boolean)

Whether to allow the user to adjust the position by dragging.

#${prefix} labelLinePoints(Array)

The array of the three points of the label guide line. The format is:

```ts
[[x, y], [x, y], [x, y]]
```

It is often used in pie charts to fine-tune the guide line that has been calculated. Usually not recommended to set it in other situations.

