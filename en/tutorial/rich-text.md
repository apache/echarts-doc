
{{target: rich-text}}

# Rich Text

Rich text can be used in Apache ECharts<sup>TM</sup> labels of series, axis or other components. For example:

~[800x400](${galleryViewPath}pie-rich-text&edit=1&reset=1)

~[800x550](${galleryViewPath}treemap-obama&edit=1&reset=1)

~[800x400](${galleryViewPath}bar-rich-text&edit=1&reset=1)

<br>

More examples:
[Map Labels](${galleryEditorPath}map-labels&edit=1&reset=1),
[Pie Labels](${galleryEditorPath}pie-nest&edit=1&reset=1),
[Gauge](${galleryEditorPath}gauge-car&edit=1&reset=1).


<br>

Before v3.7, the style options was only able to applied to the whole label text block, and only color and font can be configured, which restricted the expressability of text descriptions.

Since v3.7, rich text has been supported:

+ Box styles (background, border, shadow, etc.), rotation, position of a text block can be specified.
+ Styles (color, font, width/height, background, shadow, etc.) and alignment can be customized on fragments of text.
+ Image can be used in text as icon or background.
+ Combine these configurations, some special effects can be made, such as simple table, horizontal rule (hr).


At the beginning, the meanings of two terms that will be used below should be clarified:
+ Text Block: The whole block of label text.
+ Text fragment: Some piece of text in a text block.

For example:
~[340x240](${galleryViewPath}doc-example/text-block-fragment&edit=1&reset=1)


## Options about Text

echarts provides plenty of text options, including:

+ Basic font style: `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`.
+ Fill of text: `color`.
+ Stroke of text: `textBorderColor`, `textBorderWidth`.
+ Shadow of text: `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`.
+ Box size of text block or text fragment: `lineHeight`, `width`, `height`, `padding`.
+ Alignment of text block or text fragment: `align`, `verticalAlign`.
+ Border, background (color or image) of text block or text fragment: `backgroundColor`, `borderColor`, `borderWidth`, `borderRadius`.
+ Shadow of text block or text fragment: `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`.
+ Position and rotation of text block: `position`, `distance`, `rotate`.


User can defined styles for text fragment in `rich` property. For example, [series-bar.label.rich](option.html#series-bar.label.rich)

For example:

```ts
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this fragment}'
        '{b|Style "b" is applied to this fragment}This fragment use default style{x|use style "x"}'
    ].join('\n'),

    // Styles for the whole text block are defined here:
    color: '#333',
    fontSize: 5,
    fontFamily: 'Arial',
    borderWidth: 3,
    backgroundColor: '#984455',
    padding: [3, 10, 10, 5],
    lineHeight: 20,

    // Styles for text fragments are defined here:
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
}
```

> Notice: `width` 和 `height` only work when `rich` specified.


## Basic Styles of Text, Text Block and Text Fragment

Basic font style can be set to text: `fontStyle`, `fontWeight`, `fontSize`, `fontFamily`.

Fill color and stroke color can be set to text: `color`, `textBorderColor`, `textBorderWidth`.

Border style and background style can be set to text block: `borderColor`, `borderWidth`, `backgroundColor`, `padding`.

Border style and background style can be set to text fragment too: `borderColor`, `borderWidth`, `backgroundColor`, `padding`.

For example:
~[700x300](${galleryViewPath}doc-example/text-options&edit=1&reset=1)


## Label Position

`label` option can be use in charts like `bar`, `line`, `scatter`, etc. The position of a label, can be specified by [label.position](option.html#series-scatter.label.position)、[label.distance](option.html#series-scatter.label.distance).

For example:
~[800x400](${galleryViewPath}doc-example/label-position&edit=1&reset=1)

> Notice, there are different optional values of `position` by different chart types. And `distance` is not supported in every chart. More detailed info can be checked in [option doc](option.html).


## Label Rotation

Sometimes label is needed to be rotated. For example:

~[900x500](${galleryViewPath}bar-label-rotation&edit=1&reset=1)

[align](option.html#series-bar.label.align) and[verticalAlign](option.html#series-bar.label.verticalAlign) can be used to adjust location of label in this scenario.

Notice, `align` and `verticalAlign` are applied firstly, then rotate.


## Layout and Alignment of Text fragment

To understand the layout rule, every text fragment can be imagined as a `inline-block` dom element in CSS.

`content box size` of a text fragment is determined by its font size by default. It can also be specified directly by `width` and `height`, although they are rarely set. `border box size` of a text fragment is calculated by adding the `border box size` and `padding`.

Only `'\n'` is the newline character, which breaks a line.

Multiple text fragment exist in a single line. The height of a line is determined by the biggest `lineHeight` of text fragments. `lineHeight` of a text fragment can be specified in `rich`, or in the parent level of `rich`, otherwise using `box size` of the text fragment.

Having `lineHeight` determined, the vertical position of text fragments can be determined by `verticalAlign` (there is a little different from the rule in CSS):

+ `'bottom'`: The bottom edge of the text fragment sticks to the bottom edge of the line.
+ `'top'`: The top edge of the text fragment sticks to the top edge of the line.
+ `'middle'`: In the middle of the line.

The width of a text block can be specified by `width`, otherwise, by the longest line. Having the width determined, text fragment can be placed in each line, where the horizontal position of text fragments can be determined by its `align`.

+ Firstly, place text fragments whose `align` is `'left'` from left to right continuously.
+ Secondly, place text fragments whose `align` is `'right'` from right to left continuously.
+ Finally, the text fragments remained will be sticked and placed in the center of the rest of space.

The position of text in a text fragment:
+ If `align` is `'center'`, text aligns at the center of the text fragment box.
+ If `align` is `'left'`, text aligns at the left of the text fragment box.
+ If `align` is `'right'`, text aligns at the right of the text fragment box.

For example:

~[800x220](${galleryViewPath}doc-example/text-fragment-align&edit=1&reset=1)



## Effects: Icon, Horizontal Rule, Title Block, Simple Table


See example:

~[600x400](${galleryViewPath}doc-example/title-block&edit=1&reset=1)

Icon is implemented by using image in `backgroundColor`.

```ts
rich: {
    Sunny: {
        backgroundColor: {
            image: './data/asset/img/weather/sunny_128.png'
        },
        // Can only height specified, but leave width auto obtained
        // from the image, where the aspect ratio kept.
        height: 30
    }
}
```

Horizontal rule (like HTML &lt;hr&gt; tag) can be implemented by border:

```ts
rich: {
    hr: {
        borderColor: '#777',
        // width is set as '100%' to fulfill the text block.
        // Notice, the percentage is based on the content box, without
        // padding. Although it is a little different from CSS rule,
        // it is convenient in most cases.
        width: '100%',
        borderWidth: 0.5,
        height: 0
    }
}
```

Title block can be implemented by `backgroundColor`:

```ts
// Title is at left.
formatter: '{titleBg|Left Title}',
rich: {
    titleBg: {
        backgroundColor: '#000',
        height: 30,
        borderRadius: [5, 5, 0, 0],
        padding: [0, 10, 0, 10],
        width: '100%',
        color: '#eee'
    }
}

// Title is in the center of the line.
// This implementation is a little tricky, but is works
// without more complicated layout mechanism involved.
formatter: '{tc|Center Title}{titleBg|}',
rich: {
    titleBg: {
        align: 'right',
        backgroundColor: '#000',
        height: 30,
        borderRadius: [5, 5, 0, 0],
        padding: [0, 10, 0, 10],
        width: '100%',
        color: '#eee'
    }
}
```

Simple table can be implemented by specify the same width to text fragments that are in the same column of different lines. See the [example](${galleryViewPath}pie-rich-text&edit=1&reset=1) at the mentioned above.



