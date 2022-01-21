
{{ target: partial-line-border-style }}

{{ if: ${type} === 'border' }}
#${prefix} borderType(string|number|Array) = ${defaultType|default("'solid'")}

{{ elif: ${type} === 'text' }}
#${prefix} textBorderType(string|number|Array) = ${defaultType|default("'solid'")}
{{ else }}
#${prefix} type(string|number|Array) = ${defaultType|default("'solid'")}
{{ /if }}

<ExampleUIControlEnum default="solid" options="solid,dashed,dotted" />

{{ if: ${type} === 'border' }}
${name}描边类型。

{{ elif: ${type} === 'text' }}
文字本身的描边类型。
{{ else }}
线的类型。
{{ /if }}

可选：
+ `'solid'`
+ `'dashed'`
+ `'dotted'`

自 `v5.0.0` 开始，也可以是 `number` 或者 `number` 数组，用以指定线条的 [dash array](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/stroke-dasharray)，配合 {{ if: ${type} === 'border' }}
`borderDashOffset`
{{ elif: ${type} === 'text' }}
`textBorderDashOffset`
{{ else }}
`dashOffset`
{{ /if }} 可实现更灵活的虚线效果。

例如：
```ts
{

{{ if: ${type} === 'border' }}borderType{{ elif: ${type} === 'text' }}textBorderType{{ else }}type{{ /if }}: [5, 10],

{{ if: ${type} === 'border' }}borderDashOffset{{ elif: ${type} === 'text' }}textBorderDashOffset{{ else }}dashOffset{{ /if }}: 5
}
```

{{ if: ${type} === 'border' }}
#${prefix} borderDashOffset(number) = ${defaultDashOffset|default(0)}

{{ elif: ${type} === 'text' }}
#${prefix} textBorderDashOffset(number) = ${defaultDashOffset|default(0)}
{{ else }}
#${prefix} dashOffset(number) = ${defaultDashOffset|default(0)}
{{ /if }}

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlNumber min="0" step="1" default="0" />

用于设置虚线的偏移量，可搭配 {{ if: ${type} === 'border' }}
`borderType`
{{ elif: ${type} === 'text' }}
`textBorderType`
{{ else }}
`type`
{{ /if }} 指定 dash array 实现灵活的虚线效果。

更多详情可以参考 MDN [lineDashOffset](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)。

{{ if: !${noCap} }}
{{ if: ${type} === 'border' }}
#${prefix} borderCap(string) = ${defaultCap|default("'butt'")}
{{ else }}
#${prefix} cap(string) = ${defaultCap|default("'butt'")}
{{ /if }}

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlEnum default="butt" options="butt,round,square" />

用于指定线段末端的绘制方式，可以是：
+ `'butt'`: 线段末端以方形结束。
+ `'round'`: 线段末端以圆形结束。
+ `'square'`: 线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。

默认值为 `'butt'`。 更多详情可以参考 MDN [lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)。
{{ /if }}

{{ if: !${noJoin} }}
{{ if: ${type} === 'border' }}
#${prefix} borderJoin(string) = ${defaultJoin|default("'bevel'")}
{{ else }}
#${prefix} join(string) = ${defaultJoin|default("'bevel'")}
{{ /if }}

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlEnum default="bevel" options="bevel,round,miter" />

用于设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）。

可以是：
+ `'bevel'`: 在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
+ `'round'`: 通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
+ `'miter'`: 通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 {{ if: ${type} === 'border' }}
`borderMiterLimit`
{{ else }}
`miterLimit`
{{ /if }} 属性看到效果。

默认值为 `'bevel'`。 更多详情可以参考 MDN [lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)。
{{ /if }}

{{ if: !${noMiterLimit} }}
{{ if: ${type} === 'border' }}
#${prefix} borderMiterLimit(number) = ${defaultMiterLimit|default(10)}
{{ else }}
#${prefix} miterLimit(number) = ${defaultMiterLimit|default(10)}
{{ /if }}

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlNumber min="0" step="1" default="10" />

用于设置斜接面限制比例。只有当 {{ if: ${type} === 'border' }}
`borderJoin`
{{ else }}
`join`
{{ /if }} 为 `miter` 时，{{ if: ${type} === 'border' }}
`borderMiterLimit`
{{ else }}
`miterLimit`
{{ /if }} 才有效。

默认值为 `10`。负数、`0`、`Infinity` 和 `NaN` 均会被忽略。

更多详情可以参考 MDN [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)。
{{ /if }}

