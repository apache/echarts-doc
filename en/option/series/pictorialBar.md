
{{ target: series-pictorialBar }}

# series.pictorialBar(Object)

**pictorial bar chart**

Pictorial bar chart is a type of bar chart that customized glyph (like images, [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)) can be used instead of rectangular bar. This kind of chart is usually used in infographic.

Pictorial bar chart can only be used in [rectangular coordinate](~grid) with at least 1 category axis.


**Example:**
~[800x400](${galleryViewPath}pictorialBar-hill&reset=1&edit=1)


**Layout**

Basically `pictorialBar` is a type of bar chart, which follows the bar chart layout. In `pictorialBar`, each bar is named as `reference bar`, which does not be shown, but only be used as a reference for layout of pictorial graphic elements. Each pictorial graphic element is positioned with respect to its `reference bar` according to the setting of [symbolPosition](~series-pictorialBar.symbolPosition)、[symbolOffset](~series-pictorialBar.symbolOffset).

See the example below:
~[800x600](${galleryViewPath}doc-example/pictorialBar-position&reset=1&edit=1)

[symbolSize](~series-pictorialBar.symbolSize) is used to specify the size of graphic elements.

See the example below:
~[800x600](${galleryViewPath}doc-example/pictorialBar-symbolSize&reset=1&edit=1)



**Graphic types**

[symbolRepeat](~series-pictorialBar.symbolRepeat) can be

Graphic elements can be set as 'repeat' or not by [symbolRepeat](~series-pictorialBar.symbolRepeat).

+ If set as `false` (default), a single graphic element is used to represent a data item.
+ If set as `true`, a group of repeat graphic elements are used to represent a data item.

See the example below:
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeat&reset=1&edit=1)

Each graphic element can be basic shape (like `'circle'`, `'rect'`, ...), or [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData), or image. See [symbolType](~series-pictorialBar.symbolType).

See the example below:
~[800x400](${galleryViewPath}doc-example/pictorialBar-graphicType&reset=1&edit=1)

[symbolClip](~series-pictorialBar.symbolClip) can be used to clip graphic elements.

See the example below:
~[800x600](${galleryViewPath}doc-example/pictorialBar-clip&reset=1&edit=1)

## type(string) = 'pictorialBar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "pictorialBar",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = false,
    geo = false
) }}

{{ use: partial-cursor() }}

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'inside'",
    formatter = true
) }}

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = false,
    useDecal = true
) }}

## emphasis(Object)

Configurations of emphasis state.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: pictorialBar-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-pictorialBar.emphasis.focus) is set.

{{ use: pictorialBar-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-pictorialBar.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: pictorialBar-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-barGrid(
    seriesType = 'pictorialBar',
    barGapDefault = "-100%"
) }}

{{ use: pictorialBar-symbol-attrs(
    prefix = "#"
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

The name of data item.

### value(number)

The value of a single data item.

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: pictorialBar-symbol-attrs(
    prefix = "##",
    useZ2 = true
) }}

### label(Object)

The style setting of the text label in a single bar.

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "inside"
) }}

### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '###',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    useDecal = true
) }}

### emphasis(Object)

Emphasis state of the specified single data.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of the specified single data.

{{ use: partial-bar-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state of the specified single data.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "pictorialBar",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Pictorial bar chart "
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#",
    noAnimationDelay = true
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: pictorialBar-animation-delay(
    prefix = "##"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: pictorialBar-symbol-attrs }}

#${prefix} symbol(string) = 'circle'

Specify the type of graphic elements.

{{ use: partial-icon() }}

Example:
~[800x400](${galleryViewPath}doc-example/pictorialBar-graphicType&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbol'
) }}

#${prefix} symbolSize(number|Array) = ['100%', '100%']

<ExampleUIControlPercent default="100%,100%" dims="W,H" />

Symbol size.

It can be set as a array, which means [width, height]. For example, `[20, 10]` means width `20` and height `10`. It can also be set as a single number, like `10`, which is equivalent to `[10, 10]`.

Absolute value can be used (like `10`), or percent value can be used (like `'120%'`, `['55%', 23]`).

When percent value is used, final size of the graphic element is calculated based on its [reference bar](~series-pictorialBar).

For example, there is a reference bar based on x axis (that is, it is a vertical bar), and [symbolSize](~series-pictorialBar.symbolSize) is set as `['30%', '50%']`, the final size of its graphic elements is:

+ width: `<width of reference bar> * 30%`.
+ height:
    + If [symbolRepeat](~series-pictorialBar.symbolRepeat) is used: `<height of reference bar> * 50%`.
    + If [symbolRepeat](~series-pictorialBar.symbolRepeat) is not used: `<height of reference bar> * 50%`.

Analogously, the case that based on y axis can be obtained by exchanging them.

For example:
~[800x600](${galleryViewPath}doc-example/pictorialBar-symbolSize&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolSize'
) }}

#${prefix} symbolPosition(string) = 'start'

<ExampleUIControlEnum options="start,end,center" default="start" />

Specify the location of the graphic elements. Optional values:

+ `'start'`: The edge of graphic element inscribes with the start of the reference bar.
+ `'end'`: The edge of graphic element inscribes with the end of the reference bar.
+ `'center'`: The graphic element is at the center of the reference bar.

For example:
~[800x600](${galleryViewPath}doc-example/pictorialBar-position&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolPosition'
) }}

#${prefix} symbolOffset(Array) = [0, 0]

<ExampleUIControlPercentVector default="0,0" dims="x,y" />

Specify the offset of graphic element according to its original position. Adopting `symbolOffset` is the final step in layout, which enables adjustment of graphic element position.

A absolute value can be set (like `10`), or a percent value can be set (like `'120%'`、`['55%', 23]`), which is based on its [symbolSize](~series-pictorialBar.symbolSize).

For example, `[0, '-50%']` means the graphic element will be adjusted upward half of the size of itself.

For example:
~[800x600](${galleryViewPath}doc-example/pictorialBar-position&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolOffset'
) }}

#${prefix} symbolRotate(number)

<ExampleUIControlAngle min="-360" max="360" step="1" />

The degree of the rotation of a graphic element.

Notice, `symbolRotate` will not affect the position of the graphic element, but just rotating by its center.

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolRotate'
) }}

#${prefix} symbolRepeat(boolean|number|string)

<ExampleUIControlEnum options="true,false,fixed" />

Whether to repeat a graphic element. Optional values:

+ `false`/`null`/`undefined`: Do not repeat, that is, each graphic element represents a data item.
+ `true`: Repeat, that is, a group of repeated graphic elements represent a data item. The repeat times is calculated according to [data](~series-pictorialBar.data).
+ a number: Repeat, that is a group of repeated graphic elements represent a data item. The repeat times is always the given number.
+ `'fixed'`: Repeat, that is a group of repeated graphic elements represent a data item. The repeat times is calcuated according to [symbolBoundingData](~series-pictorialBar.symbolBoundingData), that is, the repeat times has nothing to do with [data](~series-pictorialBar.data). The setting is useful when graphic elements are used as background.

For example:
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeat&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolRepeat'
) }}

#${prefix} symbolRepeatDirection(string) = 'start'

<ExampleUIControlEnum options="start,end" default="start" />

When [symbolRepeat](~series-pictorialBar.symbolRepeat) is used, `symbolRepeatDirection` specifies the render order of the repeated graphic elements. The setting is useful in these cases below:

+ If [symbolMargin](~series-pictorialBar.symbolMargin) is set as a negative value, repeated elements will overlap with each other. `symbolRepeatDirection` can be used to specify the order of overlap.

+ If [animationDelay](~series-pictorialBar.animationDelay) or [animationDelayUpdate](~series-pictorialBar.animationDelayUpdate) is used, `symbolRepeatDirection` specifies the order of index.

Optional values can be `'start'` and `'end'`.

For example:
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeatDirection&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolRepeatDirection'
) }}

#${prefix} symbolMargin(number|string)

<ExampleUIControlPercentVector default="0,0" dims="x,y" />

Specify margin of both sides of a graphic element. ("both sides" means the two sides in the direction of its value axis). It works only when [symbolRepeat](~series-pictorialBar.symbolRepeat) is used.

Absolute value can be used (like `20`), or percent value can be used (like `'-30%'`), which is based on its [symbolSize](~series-pictorialBar.symbolSize).

`symbolMargin` can be positive value or negative value, which enables overlap of graphic elements when [symbolRepeat](~series-pictorialBar.symbolRepeat) is used.

A `"!"` can be appended on the end of the value, like `"30%!"` or `25!`, which means a extra blank will be added on the both ends, otherwise the graphic elements on both ends will reach the boundary by default.

Notice:

+ When [symbolRepeat](~series-pictorialBar.symbolRepeat) is `true`/`'fixed'`:
    The given `symbolMargin` is just a reference value. The final gap of graphic elements will be calculated according to [symbolRepeat](~series-pictorialBar.symbolRepeat), `symbolMargin` and [symbolBoundingData](~series-pictorialBar.symbolBoundingData).
+ When [symbolRepeat](~series-pictorialBar.symbolRepeat) is set as a number:
    `symbolMargin` does not work any more.

For example:
~[800x600](${galleryViewPath}doc-example/pictorialBar-repeatLayout&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolMargin'
) }}

#${prefix} symbolClip(boolean) = false

<ExampleUIControlBoolean />

Whether to clip graphic elements.

+ `false`/null/undefined: The whole graphic elements represent the size of value.
+ `true`: The clipped graphic elements reperent the size of value.

`symbolClip` is usually used in this case: both "amount value" and "current value" should be displayed. In this case, tow series can be used. One for background, using complete graphic elements, while another for current value, using clipped graphic elements.

For example:
~[800x600](${galleryViewPath}doc-example/pictorialBar-clip&reset=1&edit=1)

Notice, in the example above,

+ The same [symbolBoundingData](~series.pictorialBar.symbolBoundingData) is used in "background series" and "current value seires", which makes their graphic elements are the same size.
+ A bigger [z](~series.pictorialBar.z) is set on "current value series", which makes it is over "background series".

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolClip'
) }}

#${prefix} symbolBoundingData(number)

Defines a bounding area available for the graphic elements. This setting gives a data, which will then be translated to a coordinate on the coordinate system. The coordinate specifies the bounding. Namely, if `symbolBoundingData` is set, the final size (or layout) of the graphic elements depend on the `symbolBoundingData`.

When reference bar is horizontal, `symbolBoundingData` is corresponding to x axis, while reference bar is vertical, `symbolBoundingData` is corresponding to y axis.

Rule:

+ If [symbolRepeat](~series-pictorialBar.symbolRepeat) is not used:

    `symbolBoundingData` is the same as the size of reference bar by default. The size of the graphic element is determined by `symbolBoundingData`. For example, if reference bar is vertical, its data is `24`, `symbolSize` is set as `[30, '50%']`, `symbolBoundingData` is set as `124`, the final size of the graphic element will be `124 * 50% = 62`. If `symbolBoundingData` is not set, the final size will be `24 * 50% = 12`.

+ If [symbolRepeat](~series-pictorialBar.symbolRepeat) is used:

    `symbolBoundingData` is the extreme value of the coordinate system. `symbolBoundingData` defines a bounding area, where repeated graphic elements layout according to [symbolMargin](~series-pictorialBar.symbolMargin) and [symbolRepeat](~series-pictorialBar.symbolRepeat) and [symbolSize](~series-pictorialBar.symbolSize). Both these settings determine the gap size of the repeated graphic elements.

`symbolBoundingData` is usually used in these cases:

+ When [symbolCilp](~series-pictorialBar.symbolClip) is used:

    And a series is used to display "amont value", while another series is used to display "current value". `symbolBoundingData` can be used to ensure that the graphic elements of these two series are at the same size.

For example:
~[800x600](${galleryViewPath}doc-example/pictorialBar-clip&reset=1&edit=1)

+ When [symbolRepeat](~series-pictorialBar.symbolRepeat) is used:

    `symbolBoundingData` can be use to ensure the gaps of the elements in different bars are the same. Of cource, you can do not set `symbolBoundingData`, whose default value is a stable value (extreme value of the coordinate system).

For example:
~[800x600](${galleryViewPath}doc-example/pictorialBar-repeatLayout&reset=1&edit=1)

<br>
`symbolBoundingData` can also be an array, such as `[-40, 60]`, which specifies both negative and positive symbolBoundingData.

Check this example:
~[800x400](${galleryViewPath}doc-example/pictorialBar-symbolBoundingDataArray&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolBoundingData'
) }}

#${prefix} symbolPatternSize(number) = 400

<ExampleUIControlNumber default="400" step="10" min="0" />

Image can be used as the pattern of graphic elements.

```ts
var textureImg = new Image();
textureImg.src = 'data:image/jpeg;base64,...'; // dataURI
// Or
// textureImg.src = 'http://example.website/xx.png'; // URL
...
itemStyle: {
    color: {
        image: textureImg,
        repeat: 'repeat'
    }
}
```

`symbolPatternSize` specifies the size of pattern image. For example, if `symbolPatternSize` is `400`, the pattern image will be displayed at the size of `400px * 400px`.

For example:
~[800x400](${galleryViewPath}doc-example/pictorialBar-patternSize&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolPatternSize'
) }}

{{ if: ${useZ2} }}
#${prefix} z(number)

Specify the relationship of overlap between graphic elements. A bigger value means higher.
{{ /if }}

#${prefix} hoverAnimation(boolean) = false

<ExampleUIControlBoolean />

Whether to enable hover animation.

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'hoverAnimation'
) }}

{{ use: partial-animation(
    prefix = "##",
    noAnimationDelay = true
) }}

{{ use: pictorialBar-animation-delay(
    prefix = "##"
) }}



{{ target: pictorialBar-animation-delay }}

#${prefix} animationDelay(number|Function) = 0

Specify the delay time before animation start. Callback function can be used, where different delay time can be used on different element.

For example:
```ts
animationDelay: function (dataIndex, params) {
    return params.index * 30;
}
// Or inverse:
animationDelay: function (dataIndex, params) {
    return (params.count - 1 - params.index) * 30;
}
```

For example:
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeatDirection&reset=1&edit=1)

#${prefix} animationDelayUpdate(number|Function) = 0

Specify the delay time before update animation. Callback function can be used, where different delay time can be used on different element.

For example:
```ts
animationDelay: function (dataIndex, params) {
    return params.index * 30;
}
// Or inverse:
animationDelay: function (dataIndex, params) {
    return (params.count - 1 - params.index) * 30;
}
```

For example:
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeatDirection&reset=1&edit=1)



{{ target: pictorialBar-symbol-attrs-cascade }}

This attribute can be set at the [root level of a series](~series-pictorialBar.${attrName}), where all data items in the series will be affected by this attribute. And this attribute can also be set at [each data item](~series-pictorialBar.data.${attrName}) in [series-pictorialBar.data](series-pictorialBar.data), where only the data item is affected by this attribute.

For example:
```ts
series: [{
    ${attrName}: ... // Affect all data items.
    data: [23, 56]
}]
// Or
series: [{
    data: [{
        value: 23
        ${attrName}: ... // Only affect this data item.
    }, {
        value: 56
        ${attrName}: ... // Only affect this data item.
    }]
}]
```



{{ target: pictorialBar-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = ${prefix} === '##'
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = "#" + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

