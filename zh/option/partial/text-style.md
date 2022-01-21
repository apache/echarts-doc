
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

文本显示宽度。

#${prefix} height(number)

<ExampleUIControlNumber default="50" min="1" max="500" step="1" />

文本显示高度。

#${prefix} overflow(string) = 'none'

<ExampleUIControlEnum options="truncate,break,breakAll" />

文字超出宽度是否截断或者换行。配置`width`时有效

+ `'truncate'` 截断，并在末尾显示`ellipsis`配置的文本，默认为`...`
+ `'break'` 换行
+ `'breakAll'` 换行，跟`'break'`不同的是，在英语等拉丁文中，`'breakAll'`还会强制单词内换行

#${prefix} ellipsis(string) = '...'

在`overflow`配置为`'truncate'`的时候，可以通过该属性配置末尾显示的文本。

{{ if: !${noRich} }}
#${prefix} rich(Object)

在 `rich` 里面，可以自定义富文本样式。利用富文本样式，可以在标签中做出非常丰富的效果。

例如：

```ts
label: {
    // 在文本中，可以对部分文本采用 rich 中定义样式。
    // 这里需要在文本中使用标记符号：
    // `{styleName|text content text content}` 标记样式名。
    // 注意，换行仍是使用 '\n'。
    formatter: [
        '{a|这段文本采用样式a}',
        '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
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


详情参见教程：[富文本标签](tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)

##${prefix} <style_name>(Object)

{{ use: partial-text-style-base-item(
    prefix = ${prefix} + '##',
    enableAutoColor = ${enableAutoColor}
) }}
{{ /if }}



{{ target: partial-text-style-base-item }}

#${prefix} color(Color) = ${defaultColor|default("'#fff'")}

<ExampleUIControlColor default="${defaultColor|default(null)}" />

${name}文字的颜色。

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} fontStyle(string) = 'normal'

<ExampleUIControlEnum default="normal" options="normal,italic,oblique" />

${name}文字字体的风格。

可选：
+ `'normal'`
+ `'italic'`
+ `'oblique'`

#${prefix} fontWeight(string|number) = ${defaultFontWeight|default("'normal'")}

<ExampleUIControlEnum default="normal" options="normal,bold,bolder,lighter" />

${name}文字字体的粗细。

可选：
+ `'normal'`
+ `'bold'`
+ `'bolder'`
+ `'lighter'`
+ 100 | 200 | 300 | 400...

#${prefix} fontFamily(string) = 'sans-serif'

<ExampleUIControlEnum default="sans-serif" options="sans-serif,serif,monospace,Arial,Courier New" />

${name}文字的字体系列。

还可以是 'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...

#${prefix} fontSize(number) = ${defaultFontSize|default(12)}

<ExampleUIControlNumber default="${defaultFontSize|default(12)}" min="1" step="1" />

${name}文字的字体大小。

{{ if: !${noAlign} }}
#${prefix} align(string) = ${defaultAlign}

<ExampleUIControlEnum options="left,center,right" />

文字水平对齐方式，默认自动。

可选：
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

文字垂直对齐方式，默认自动。

可选：
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

行高。

{{ use: partial-text-style-rich-inherit(
    name = 'lineHeight',
    value = 56
) }}

{{ if: !${noBox} }}
#${prefix} backgroundColor(string|Object) = 'transparent'

<ExampleUIControlColor default="#fff" />

文字块背景色。

可以使用颜色值，例如：`'#123234'`, `'red'`, `'rgba(0,23,11,0.3)'`。

也可以直接使用图片，例如：

```ts
backgroundColor: {
    image: 'xxx/xxx.png'
    // 这里可以是图片的 URL，
    // 或者图片的 dataURI，
    // 或者 HTMLImageElement 对象，
    // 或者 HTMLCanvasElement 对象。
}
```

当使用图片的时候，可以使用 `width` 或 `height` 指定高宽，也可以不指定自适应。

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} borderColor(Color)

<ExampleUIControlColor default="#fff" />

文字块边框颜色。

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} borderWidth(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

文字块边框宽度。

{{ use: partial-line-border-style(
    prefix = ${prefix},
    type = 'border',
    name = '文字块边框',
    defaultType = ${defaultType},
    noCap = true,
    noJoin = true,
    noMiterLimit = true
) }}

#${prefix} borderRadius(number|Array) = 0

<ExampleUIControlVector min="0" dims="LT,RT, RB, LB"  />

文字块的圆角。

#${prefix} padding(number|Array) = ${defaultPadding|default(0)}

<ExampleUIControlVector min="0" dims="T,R,B,L"  />

文字块的内边距。例如：

+ `padding: [3, 4, 5, 6]`：表示 `[上, 右, 下, 左]` 的边距。
+ `padding: 4`：表示 `padding: [4, 4, 4, 4]`。
+ `padding: [3, 4]`：表示 `padding: [3, 4, 3, 4]`。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

#${prefix} shadowColor(Color) = 'transparent'

<ExampleUIControlColor />

文字块的背景阴影颜色。

#${prefix} shadowBlur(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

文字块的背景阴影长度。

#${prefix} shadowOffsetX(number) = 0

<ExampleUIControlNumber step="0.5" />

文字块的背景阴影 X 偏移。

#${prefix} shadowOffsetY(number) = 0

<ExampleUIControlNumber step="0.5" />

文字块的背景阴影 Y 偏移。
{{ /if }}

#${prefix} width(number|string)

文字块的宽度。一般不用指定，不指定则自动是文字的宽度。在想做表格项或者使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

`width` 也可以是百分比字符串，如 `'100%'`。表示的是所在文本块的 `contentWidth`（即不包含文本块的 `padding`）的百分之多少。之所以以 `contentWidth` 做基数，因为每个文本片段只能基于 `content box` 布局。如果以 `outerWidth` 做基数，则百分比的计算在实用中不具有意义，可能会超出。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

#${prefix} height(number|string)

文字块的高度。一般不用指定，不指定则自动是文字的高度。在使用图片（参见 `backgroundColor`）时，可能会使用它。

注意，文字块的 `width` 和 `height` 指定的是内容高宽，不包含 `padding`。

注意，如果不定义 `rich` 属性，则不能指定 `width` 和 `height`。

#${prefix} textBorderColor(Color)

<ExampleUIControlColor />

文字本身的描边颜色。

{{ if: ${enableAutoColor} }}
{{ use: partial-text-style-auto-color-desc() }}
{{ /if }}

#${prefix} textBorderWidth(number)

<ExampleUIControlNumber min="0" step="0.5" />

文字本身的描边宽度。

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

文字本身的阴影颜色。

#${prefix} textShadowBlur(number) = 0

<ExampleUIControlNumber min="0" step="0.5" />

文字本身的阴影长度。

#${prefix} textShadowOffsetX(number) = 0

<ExampleUIControlNumber step="0.5" />

文字本身的阴影 X 偏移。

#${prefix} textShadowOffsetY(number) = 0

<ExampleUIControlNumber step="0.5" />

文字本身的阴影 Y 偏移。



{{ target: partial-text-style-auto-color-desc }}

如果设置为 `'inherit'`，则为视觉映射得到的颜色，如系列色。



{{ target: partial-text-style-rich-inherit }}

`rich` 中如果没有设置 `${name}`，则会取父层级的 `${name}`。例如：

```ts
{
    ${name}: ${value},
    rich: {
        a: {
            // 没有设置 `${name}`，则 `${name}` 为 ${value}
        }
    }
}
```

