
{{ target: partial-simple-text-style }}

{{ use: partial-text-style(
    prefix = ${prefix},
    name = ${name},
    defaultColor = ${defaultColor},
    defaultFontSize = ${defaultFontSize},
    defaultFontWeight = ${defaultFontWeight},
    defaultLineHeight = ${defaultLineHeight},
    noAlign = true,
    noVerticalAlign = true,
    noRich = true,
    noBox = true
) }}



{{ target: partial-text-style }}

{{ use: partial-text-style-base-item(
    prefix = ${prefix},
    name = ${name},
    defaultColor = ${defaultColor},
    defaultPadding = ${defaultPadding},
    defaultFontSize = ${defaultFontSize},
    defaultFontWeight = ${defaultFontWeight},
    defaultLineHeight = ${defaultLineHeight},
    defaultAlign = ${defaultAlign},
    defaultVerticalAlign = ${defaultVerticalAlign},
    noAlign = ${noAlign},
    noVerticalAlign = ${noVerticalAlign},
    noBox = ${noBox},
    enableAutoColor = ${enableAutoColor}
) }}

#${prefix} width(number)

<ExampleUIControlNumber default="100" min="1" max="500" step="1" />

Width of text block.

#${prefix} height(number)

<ExampleUIControlNumber default="50" min="1" max="500" step="1" />

Height of text block.

#${prefix} overflow(string) = 'none'

<ExampleUIControlEnum options="truncate,break,breakAll" />

Determine how to display the text when it's overflow. Available when `width` is set.

+ `'truncate'` Truncate the text and trailing with `ellipsis`.
+ `'break'` Break by word
+ `'breakAll'` Break by character.

#${prefix} ellipsis(string) = '...'

Ellipsis to be displayed when `overflow` is set to `truncate`.

+ `'truncate'` Truncate the overflow lines.

{{ if: !${noRich} }}
#${prefix} rich(Object)

"Rich text styles" can be defined in this `rich` property. For example:

```ts
label: {
    // Styles defined in 'rich' can be applied to some fragments
    // of text by adding some markers to those fragment, like
    // `{styleName|text content text content}`.
    // `'\n'` is the newline character.
    formatter: [
        '{a|Style "a" is applied to this snippet}'
        '{b|Style "b" is applied to this snippet}This snippet use default style{x|use style "x"}'
    ].join('\n'),

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


For more details, see [Rich Text](tutorial.html#Rich%20Text) please.

##${prefix} <style_name>(Object)

{{ use: partial-text-style-base-item(
    prefix = ${prefix} + '##',
    enableAutoColor = ${enableAutoColor}
) }}
{{ /if }}



{{ target: partial-text-style-base-item }}

#${prefix} color(Color) = ${defaultColor|default("'#fff'")}

<ExampleUIControlColor default="${defaultColor|default(null)}" />

${name} text color.

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} fontStyle(string) = 'normal'

<ExampleUIControlEnum default="normal" options="normal,italic,oblique" />

${name} font style.

Options are:
+ `'normal'`
+ `'italic'`
+ `'oblique'`

#${prefix} fontWeight(string|number) = ${defaultFontWeight|default("'normal'")}

<ExampleUIControlEnum default="normal" options="normal,bold,bolder,lighter" />

${name} font thick weight.

Options are:
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...

#${prefix} fontFamily(string) = 'sans-serif'

<ExampleUIControlEnum default="sans-serif" options="sans-serif,serif,monospace,Arial,Courier New" />

${name} font family.

Can also be 'serif' , 'monospace', ...

#${prefix} fontSize(number) = ${defaultFontSize|default(12)}

<ExampleUIControlNumber default="${defaultFontSize|default(12)}" min="1" step="1" />

${name} font size.

{{ if: !${noAlign} }}
#${prefix} align(string) = ${defaultAlign}

<ExampleUIControlEnum options="left,center,right" />

Horizontal alignment of text, automatic by default.

Options are:
+ `'left'`
+ `'center'`
+ `'right'`

{{ use: partial-text-style-rich-inherit(
    name = 'align',
    value = 'right'
) }}
{{ /if }}

{{ if: !${noVerticalAlign} }}
#${prefix} verticalAlign(string) = ${defaultVerticalAlign}

<ExampleUIControlEnum options="top,middle,bottom" />

Vertical alignment of text, automatic by default.

Options are:
+ `'top'`
+ `'middle'`
+ `'bottom'`

{{ use: partial-text-style-rich-inherit(
    name = 'verticalAlign',
    value = 'bottom'
) }}
{{ /if }}

#${prefix} lineHeight(number) = ${defaultLineHeight|default('')}

<ExampleUIControlNumber min="0" step="1" default="12" />

Line height of the text fragment.

{{ use: partial-text-style-rich-inherit(
    name = 'lineHeight',
    value = 56
) }}

{{ if: !${noBox} }}
#${prefix} backgroundColor(string|Object) = 'transparent'

<ExampleUIControlColor default="#fff" />

Background color of the text fragment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```ts
backgroundColor: {
    image: 'xxx/xxx.png'
    // It can be URL of a image,
    // or dataURI,
    // or HTMLImageElement,
    // or HTMLCanvasElement.
}
```

`width` or `height` can be specified when using background image, or
auto adapted by default.

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} borderColor(Color)

<ExampleUIControlColor default="#fff" />

Border color of the text fragment.

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} borderWidth(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

Border width of the text fragment.

{{ use: partial-line-border-style(
    prefix = ${prefix},
    type = 'border',
    name = 'the text fragment',
    defaultType = ${defaultType},
    noCap = true,
    noJoin = true,
    noMiterLimit = true
) }}

#${prefix} borderRadius(number) = 0

<ExampleUIControlVector min="0" dims="LT,RT, RB, LB"  />

Border radius of the text fragment.

#${prefix} padding(number|Array) = ${defaultPadding|default(0)}

<ExampleUIControlVector min="0" dims="T,R,B,L"  />

Padding of the text fragment, for example:

+ `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
+ `padding: 4`: represents `padding: [4, 4, 4, 4]`.
+ `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

#${prefix} shadowColor(Color) = 'transparent'

<ExampleUIControlColor />

Shadow color of the text block.

#${prefix} shadowBlur(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

Show blur of the text block.

#${prefix} shadowOffsetX(number) = 0

<ExampleUIControlNumber step="0.5" />

Shadow X offset of the text block.

#${prefix} shadowOffsetY(number) = 0

<ExampleUIControlNumber step="0.5" />

Shadow Y offset of the text block.
{{ /if }}

#${prefix} width(number|string)

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fragment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.


Notice, `width` and `height` only work when `rich` specified.

#${prefix} height(number|string)

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.

#${prefix} textBorderColor(Color)

<ExampleUIControlColor />

Stroke color of the text.

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} textBorderWidth(number)

<ExampleUIControlNumber min="0" step="0.5" />

Stroke line width of the text.

{{ use: partial-line-border-style(
    prefix = ${prefix},
    name = ${name},
    type = 'text',
    defaultType = ${defaultType},
    noCap = true,
    noJoin = true,
    noMiterLimit = true
) }}

#${prefix} textShadowColor(Color) = 'transparent'

<ExampleUIControlColor default="#000" />

Shadow color of the text itself.

#${prefix} textShadowBlur(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

Shadow blue of the text itself.

#${prefix} textShadowOffsetX(number) = 0

<ExampleUIControlNumber step="0.5" />

Shadow X offset of the text itself.

#${prefix} textShadowOffsetY(number) = 0

<ExampleUIControlNumber step="0.5" />

Shadow Y offset of the text itself.



{{ target: partial-text-style-auto-color-desc }}

If set as `'inherit'`, the color will assigned as visual color, such as series color.



{{ target: partial-text-style-rich-inherit }}

If `${name}` is not set in `rich`, `${name}` in parent level will be used. For example:

```ts
{
    ${name}: ${value},
    rich: {
        a: {
            // `${name}` is not set, then it will be ${value}
        }
    }
}
```

