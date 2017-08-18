
{{target: rich-text}}

# 富文本标签

在许多地方（如图、轴的标签等）都可以使用富文本标签。例如：

~[800x400](${galleryViewPath}pie-rich-text&edit=1&reset=1)

~[800x550](${galleryViewPath}treemap-obama&edit=1&reset=1)

~[800x400](${galleryViewPath}bar-rich-text&edit=1&reset=1)

<br>

其他一些例子：
[Map Labels](${galleryEditorPath}map-labels&edit=1&reset=1),
[Pie Labels](${galleryEditorPath}pie-nest&edit=1&reset=1),
[Gauge](${galleryEditorPath}gauge-car&edit=1&reset=1).


<br>


原先 echarts 中的文本标签，只能对整块统一进行样式设置，并且仅仅支持颜色和字体的设置，从而导致不易于制作表达能力更强的文字描述信息。

echarts v3.7 以后，支持了富文本标签，能够：

+ 能够定制文本块整体的样式（如背景、边框、阴影等）、位置、旋转等。
+ 能够对文本块中个别片段定义样式（如颜色、字体、高宽、背景、阴影等）、对齐方式等。
+ 能够在文本中使用图片做小图标或者背景。
+ 特定组合以上的规则，可以做出简单表格、分割线等效果。


---

**文本样式相关的配置项**

echarts 提供了丰富的文本标签配置项，包括：

+ 字体基本样式设置：`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`；
+ 字体颜色和修饰：`color`, `textBorderColor`, `textBorderWidth`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`；
+ 文字块大小和对齐：`lineHeight`, `width`, `height`, `align`, `verticalAlign`, `padding`；
+ 文字块颜色、图片和修饰：`backgroundColor`, `borderColor`, `borderWidth`, `borderRadius`, `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`。


---

**定制文本片段**

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
