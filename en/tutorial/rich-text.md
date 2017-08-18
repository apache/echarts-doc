
{{target: rich-text}}

# Rich Text

Rich text can be used in labels of series, axis or other components. For example:

~[800x400](${galleryViewPath}pie-rich-text&edit=1&reset=1)

~[800x550](${galleryViewPath}treemap-obama&edit=1&reset=1)

~[800x400](${galleryViewPath}bar-rich-text&edit=1&reset=1)

<br>

More examples:
[Map Labels](${galleryEditorPath}map-labels&edit=1&reset=1),
[Pie Labels](${galleryEditorPath}pie-nest&edit=1&reset=1),
[Gauge](${galleryEditorPath}gauge-car&edit=1&reset=1).


<br>

Before v3.7, the style options was only able to adopted to the whole label text block, and only color and font can be configured, which restricted the expressability of text descriptions.

Since v3.7, rich text has been supported:

+ Box styles (background, border, shadow, etc.), rotation, position of a text block can be specified.
+ Styles (color, font, width/height, background, shadow, etc.) and alignment can be adopted to some snippets (some parts of text) in a text block.
+ Image can be used in text as icon or background.
+ Combine these configurations, some special effects can be made, such as simple table, horizontal rule (hr).



---

**Options about Text**

echarts provides plenty of text options, including:

+ Base font options: `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`;
+ Color and decoration of text: `color`, `textBorderColor`, `textBorderWidth`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`;
+ Size and align of text block: `lineHeight`, `width`, `height`, `align`, `verticalAlign`, `padding`;
+ Color, image and decoration of text block: `backgroundColor`, `borderColor`, `borderWidth`, `borderRadius`, `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`.


---

**Customize Snippets**

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






