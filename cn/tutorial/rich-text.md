
{{target: rich-text}}

# 富文本标签

在许多地方（如图、轴的标签等）都可以使用富文本标签。富文本标签中，支持对部分文字采用特定的样式，如设置颜色、字体大小、字体背景、图片、字体块左右上下对齐方式等，从而可以做出丰富的效果。

例如：

~[800x400](${galleryViewPath}pie-rich-text&edit=1&reset=1)

~[800x550](${galleryViewPath}treemap-obama&edit=1&reset=1)

~[800x400](${galleryViewPath}bar-rich-text&edit=1&reset=1)

<br>

其他一些例子：
[Map Labels](${galleryEditorPath}map-labels&edit=1&reset=1),
[Pie Labels](${galleryEditorPath}pie-nest&edit=1&reset=1),
[Gauge](${galleryEditorPath}gauge-car&edit=1&reset=1).


<br>

---

**富文本标签的使用方式**

echarts 提供了丰富的文本标签设置属性，包括：

+ 字体基本样式设置：`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`；
+ 字体颜色和修饰：`color`, `textBorderColor`, `textBorderWidth`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`；
+ 文字块大小和对齐：`lineHeight`, `width`, `height`, `align`, `verticalAlign`, `padding`；
+ 文字块颜色、图片和修饰：`backgroundColor`, `borderColor`, `borderWidth`, `borderRadius`, `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`。


可以在各处的 `rich` 属性中定义细节的自定义文本片段样式。例如 [series-bar.label.normal.rich](option.html#series-bar.label.normal.rich)

> 注意：如果不定义 `rich`，不能指定文字块的 `width` 和 `height`。

例如：

```
rich: {
    a: {
        color: 'red',
        lineHeight: 10
    },
    b: {
        backgroundColor: {
            image: 'xxx/xxx.jpg'
        },
        height: 40
    },
    x: {
        fontSize: 18,
        fontFamily: 'Microsoft YaHei',
        borderColor: '#449933',
        borderRadius: 4
    },
    ...
}
```

于是，在文本中，可以对部分文本采用这些样式。这里需要在文本中使用标记符号 `{styleName|text content text content}` 标记样式名。例如，文本是：

```js
'{a|这段文本采用样式a}\n{b|这段文本采用样式b}这段用默认样式{c|这段用样式c}'
```

注意，换行仍是使用 `'\n'`。
