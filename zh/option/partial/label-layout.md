
{{ target: partial-label-layout }}

{{ use: partial-version(
    version = "5.0.0"
) }}

标签的统一布局配置。

该配置项是在每个系列默认的标签布局基础上，统一调整标签的`(x, y)`位置，标签对齐等属性以实现想要的标签布局效果。

该配置项也可以是一个有如下参数的回调函数

```ts
// 标签对应数据的 dataIndex
dataIndex: number
// 标签对应的数据类型，只在关系图中会有 node 和 edge 数据类型的区分
dataType?: string
// 标签对应的系列的 index
seriesIndex: number
// 标签显示的文本
text: string
// 默认的标签的包围盒，由系列默认的标签布局决定
labelRect: {x: number, y: number, width: number, height: number}
// 默认的标签水平对齐
align: 'left' | 'center' | 'right'
// 默认的标签垂直对齐
verticalAlign: 'top' | 'middle' | 'bottom'
// 标签所对应的数据图形的包围盒，可用于定位标签位置
rect: {x: number, y: number, width: number, height: number}
// 默认引导线的位置，目前只有饼图(pie)和漏斗图(funnel)有默认标签位置
// 如果没有该值则为 null
labelLinePoints?: number[][]
```

**示例：**

将标签显示在图形右侧 10px 的位置，并且垂直居中：

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

根据图形的包围盒尺寸决定文本尺寸

```ts

labelLayout(params) {
    return {
        fontSize: Math.max(params.rect.width / 10, 5)
    };
}
```

#${prefix} hideOverlap(boolean)

是否隐藏重叠的标签。

下面示例演示了在关系图中开启该配置后，在缩放时可以实现自动的标签隐藏。

~[600x400](${galleryViewPath}graph-label-overlap&edit=1&reset=1)

#${prefix} moveOverlap(string)

在标签重叠的时候是否挪动标签位置以防止重叠。

目前支持配置为：

+ `'shiftX'` 水平方向依次位移，在水平方向对齐时使用
+ `'shiftY'` 垂直方向依次位移，在垂直方向对齐时使用

下面是标签右对齐并配置垂直方向依次位移以防止重叠的示例。

~[600x400](${galleryViewPath}scatter-label-align-right&edit=1&reset=1)

#${prefix} x(number|string)

标签的 x 位置。支持绝对的像素值或者`'20%'`这样的相对值。

#${prefix} y(number|string)

标签的 y 位置。支持绝对的像素值或者`'20%'`这样的相对值。

#${prefix} dx(number)

标签在 x 方向上的像素偏移。可以和`x`一起使用。

#${prefix} dy(number)

标签在 y 方向上的像素偏移。可以和`y`一起使用

#${prefix} rotate(number)

标签旋转角度。

#${prefix} width(number)

标签显示的宽度。可以配合`overflow`使用控制标签显示在固定宽度内

#${prefix} height(number)

标签显示的高度。

#${prefix} align(string)

标签水平对齐方式。可以设置`'left'`, `'center'`, `'right'`。

#${prefix} verticalAlign(string)

标签垂直对齐方式。可以设置`'top'`, `'middle'`, `'bottom'`。

#${prefix} fontSize(number)

The text size of the label.

#${prefix} draggable(boolean)

标签是否可以允许用户通过拖拽二次调整位置。

#${prefix} labelLinePoints(Array)

标签引导线三个点的位置。格式为：

```ts
[[x, y], [x, y], [x, y]]
```

在饼图中常用来微调已经计算好的引导线，其它情况一般不建议设置。

