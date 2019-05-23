{{target:partial-simple-text-style}}

{{ use:partial-text-style(
    prefix=${prefix},
    name=${name},
    defaultColor=${defaultColor},
    defaultFontSize=${defaultFontSize},
    noAlign=true,
    noVerticalAlign=true,
    noRich=true,
    noBox=true
) }}









{{target:partial-text-style}}

{{use:partial-text-style-base-item(
    prefix=${prefix},
    name=${name},
    defaultColor=${defaultColor},
    defaultFontSize=${defaultFontSize},
    defaultAlign=${defaultAlign},
    defaultVerticalAlign=${defaultVerticalAlign},
    noAlign=${noAlign},
    noVerticalAlign=${noVerticalAlign},
    noBox=${noBox},
    enableAutoColor=${enableAutoColor}
)}}

{{ if: !${noRich} }}
#${prefix} rich(Object)

"Rich text styles" can be defined in this `rich` property. For example:

```js
label: {
    // Styles defined in 'rich' can be applied to some fregments
    // of text by adding some markers to those fregment, like
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



##${prefix} <user defined style name>(Object)

{{use:partial-text-style-base-item(
    prefix=${prefix} + '##',
    enableAutoColor=${enableAutoColor}
)}}

{{ /if }}







{{target:partial-text-style-base-item}}

#${prefix} color(Color|function)=${defaultColor|default('"#fff"')}

${name} text color.

**Callback function**

Callback function is in form of:
```js
(params: number) => string
```
where `params` is the index of data in `data` array:

{{if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc }}
{{/if}}


#${prefix} fontStyle(string)='normal'

${name} font style

Options are:
+ `'normal'`
+ `'italic'`
+ `'oblique'`


#${prefix} fontWeight(string)=${defaultFontWeight|default('normal')}

${name} font thick weight

Options are:
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...


#${prefix} fontFamily(string)='sans-serif'

${name} font family

Can also be 'serif' , 'monospace', ...

#${prefix} fontSize(number)=${defaultFontSize|default(12)}

${name} font size


{{ if: !${noAlign} }}
#${prefix} align(string)=${defaultAlign}

Horizontal alignment of text, automatic by default.

Options are:
+ `'left'`
+ `'center'`
+ `'right'`

{{ use: partial-text-style-rich-inherit(
    name='align',
    value='right'
) }}

{{ /if }}

{{ if: !${noVerticalAlign} }}
#${prefix} verticalAlign(string)=${defaultVerticalAlign}

Vertical alignment of text, automatic by default.

Options are:
+ `'top'`
+ `'middle'`
+ `'bottom'`

{{ use: partial-text-style-rich-inherit(
    name='verticalAlign',
    value='bottom'
) }}

{{ /if }}







#${prefix} lineHeight(number)

Line height of the text fregment.

{{ use: partial-text-style-rich-inherit(
    name='lineHeight',
    value=56
) }}


{{ if: !${noBox} }}

#${prefix} backgroundColor(string|Object)='transparent'

Background color of the text fregment.

Can be color string, like `'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`.

Or image can be used, for example:

```js
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

{{if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc }}
{{/if}}

#${prefix} borderColor(string)='transparent'

Border color of the text fregment.

{{if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc }}
{{/if}}

#${prefix} borderWidth(number)=0

Border width of the text fregment.

#${prefix} borderRadius(number)=0

Border radius of the text fregment.

#${prefix} padding(number|Array)=0

Padding of the text fregment, for example:

+ `padding: [3, 4, 5, 6]`: represents padding of `[top, right, bottom, left]`.
+ `padding: 4`: represents `padding: [4, 4, 4, 4]`.
+ `padding: [3, 4]`: represents `padding: [3, 4, 3, 4]`.

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

#${prefix} shadowColor(string)='transparent'

Shadow color of the text block.

#${prefix} shadowBlur(number)=0

Show blur of the text block.

#${prefix} shadowOffsetX(number)=0

Shadow X offset of the text block.

#${prefix} shadowOffsetY(number)=0

Shadow Y offset of the text block.

{{ /if }}


#${prefix} width(number|string)

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

`width` can also be percent string, like `'100%'`, which represents the percent of `contentWidth` (that is, the width without `padding`) of its container box. It is based on `contentWidth` because that each text fregment is layout based on the `content box`, where it makes no sense that calculating width based on `outerWith` in prectice.


Notice, `width` and `height` only work when `rich` specified.

#${prefix} height(number|string)

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.

Notice, `width` and `height` only work when `rich` specified.


#${prefix} textBorderColor(string)='transparent'

Storke color of the text.

{{if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc }}
{{/if}}


#${prefix} textBorderWidth(number)=0

Storke line width of the text.

#${prefix} textShadowColor(string)='transparent'

Shadow color of the text itself.

#${prefix} textShadowBlur(number)=0

Shadow blue of the text itself.

#${prefix} textShadowOffsetX(number)=0

Shadow X offset of the text itself.

#${prefix} textShadowOffsetY(number)=0

Shadow Y offset of the text itself.





{{ target: partial-text-style-auto-color-desc }}
If set as `'auto'`, the color will assigned as visual color, such as series color.





{{ target: partial-text-style-rich-inherit }}

If `${name}` is not set in `rich`, `${name}` in parent level will be used. For example:

```js
{
    ${name}: ${value},
    rich: {
        a: {
            // `${name}` is not set, then it will be ${value}
        }
    }
}
```