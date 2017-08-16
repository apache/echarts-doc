
{{target: rich-text}}

# Rich Text

Rich text can be used in labels of series and axis and so on. It is supported to specifty styles (like font, color, background image, align) to part of text.

For example:

~[800x400](${galleryViewPath}pie-rich-text&edit=1&reset=1)

~[800x550](${galleryViewPath}treemap-obama&edit=1&reset=1)

~[800x400](${galleryViewPath}bar-rich-text&edit=1&reset=1)

<br>

More examples:
[Map Labels](${galleryEditorPath}map-labels&edit=1&reset=1),
[Pie Labels](${galleryEditorPath}pie-nest&edit=1&reset=1),
[Gauge](${galleryEditorPath}gauge-car&edit=1&reset=1).


<br>

---

**How to use rich text?**

echarts provides plenty of text options, including:

+ Base font options: `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`;
+ Color and decoration of text: `color`, `textBorderColor`, `textBorderWidth`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`;
+ Size and align of text block: `lineHeight`, `width`, `height`, `align`, `verticalAlign`, `padding`;
+ Color, image and decoration of text block: `backgroundColor`, `borderColor`, `borderWidth`, `borderRadius`, `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`.


User can defined styles in `rich` property everywhere. For example, [series-bar.label.normal.rich](option.html#series-bar.label.normal.rich)

> Notice: `width` 和 `height` only work when `rich` specified.

For example:

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

Then these styles can be apapted in text by adding some marker in text, like `{styleName|text content text content}`. For example:

```js
'{a|Style "a" is adapted to this snippet}\n{b|Style "b" is adapted to this snippet}This snippet use default style{c|use style "c"}'
```

`'\n'` is the newline character.