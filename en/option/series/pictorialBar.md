{{target:series-pictorialBar}}

# series.pictoialBar(Object)

**pictorial bar chart**

Pictorial bar chart is a type of bar chart that custimzed glyph (like images, [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)) can be used instead of rectangular bar. This kind of chart is usually used in infographic.

Pictorial bar chart can only be used in [rectangular coordinate](~grid) with at least 1 category axis.

## type(string) = 'pictorialBar'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="pictorialBar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=false
)}}
### emphasis(Object)
{{use:partial-item-style(
    prefix="###"
)}}

{{use: partial-barGrid}}

{{use: pictorialBar-symbol-attrs(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}

## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
) }}

### name(string)
The name of data item.

### value(number)
The value of a single data item.

{{use: pictorialBar-symbol-attrs(
    prefix="##",
    galleryEditorPath=${galleryEditorPath}
)}}

### label(Object)
The style setting of the text label in a single bar.

#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
#### normal(Object)
{{use:partial-item-style(
    prefix="####"
)}}
#### emphasis(Object)
{{use:partial-item-style(
    prefix="####"
)}}

{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="pictorialBar",
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="pictorial bar chart"
) }}

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}









{{target: pictorialBar-symbol-attrs}}

#${prefix} symbol(string) = 'circle'

Specify the type of graphic elements.

{{ use: partial-icon }}

#${prefix} symbolSize(number|Array{{ if: ${hasCallback} }}|Function{{ /if}}) = ${defaultSymbolSize}

${name} symbol size. It can be set to single numbers like `10`, or use an array to represent width and height. For example, `[20, 10]` means symbol width is `20`, and height is`10`.

{{ if: ${hasCallback} }}
If size of symbols needs to be different, you can set with callback function in the following format:
```js
(value: Array|number, params: Object) => number|Array
```
The first parameter `value` is the value in [data](~series-${seriesType}.data), and the second parameter `params` is the rest parameters of data item.
{{ /if }}

#${prefix} symbolRotate(number)

Rotate degree of ${name} symbol. Note that when `symbol` is set to be `'arrow'` in `markLine`, `symbolRotate` value will be ignored, and compulsively use tangent angle.

#${prefix} symbolOffset(Array) = [0, 0]

Offset of ${name} symbol relative to original position. By default, symbol will be put in the center position of data. But if symbol is from user-defined vector path or image, you may not expect symbol to be in center. In this case, you may use this attribute to set offset to default position. It can be in absolute pixel value, or in relative percentage value.

For example, `[0, '50%']` means to move upside side position of symbol height. It can be used to make the arrow in the bottom to be at data position when symbol is pin.


#${prefix} z2(number)

Specify the overlap relationship among graphic elements.

#${prefix} hoverAnimation(boolean) = false

Whether to enable animitation when hovering on graphic elements.


