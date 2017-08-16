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
    noBox=${noBox}
)}}

{{ if: !${noRich} }}
#${prefix} rich(Object)

"Rich text styles" can be defined in this `rich` property. For example:

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

For more details, see [Rich Text](tutorial.html#Rich%20Text) please.



##${prefix} <user defined style name>(Object)

{{use:partial-text-style-base-item(
    prefix=${prefix} + '##',
    inRichToken=true
)}}

{{ /if }}







{{target:partial-text-style-base-item}}

#${prefix} color(Color)=${defaultColor|default('"#fff"')}

${name} text color.


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
{{ /if }}

{{ if: !${noVerticalAlign} }}
#${prefix} verticalAlign(string)=${defaultVerticalAlign}

Vertical alignment of text, automatic by default.

Options are:
+ `'top'`
+ `'middle'`
+ `'bottom'`
{{ /if }}







#${prefix} lineHeight(number)

Line height of the text snippet.


{{ if: !${noBox} }}

#${prefix} backgroundColor(string|Object)='transparent'

Background color of the text snippet.

Can be color string, like `'#123234'`, `'red'`, `rgba(0,23,11,0.3)'`.

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

#${prefix} borderColor(string)='transparent'

Border color of the text snippet.

#${prefix} borderWidth(number)=0

Border width of the text snippet.

#${prefix} borderRadius(number)=0

Border radius of the text snippet.

#${prefix} padding(number|Array)=0

Padding of the text snippet, for example:

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





{{ if: ${inRichToken} }}

#${prefix} width(number)

Width of the text block. It is the width of the text by default. In most cases, there is no need to specify it. You may want to use it in some cases like make simple table or using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.


#${prefix} height(number)

Height of the text block. It is the width of the text by default. You may want to use it in some cases like using background image (see `backgroundColor`).

Notice, `width` and `height` specifies the width and height of the content, without `padding`.


{{ /if }}


#${prefix} textBorderColor(string)='transparent'

Storke color of the text.

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

