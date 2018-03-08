
{{target: series-candlestick}}

# series.candlestick(Object)

A [candlestick](https://en.wikipedia.org/wiki/Candlestick_chart) chart (also called Japanese candlestick chart) is a style of financial chart used to describe price movements of a security, derivative, or currency.

ECharts3 supports both `'candlestick'` and `'k'` in [series.type](~(series.type) (`'k'` would automatically turns into `'candlestick'`).

**An example:**

~[600x400](${galleryViewPath}candlestick-sh&edit=1&reset=1)


<br>
**About color of increase and decrease**

Different countries or regions have different implications on the color of candle stick chart. It may use red to imply increasing with red and decreasing with blue (in China mainland, Taiwan, Japan, Koera, and so on), or to imply increasing with green and decreasing with red (in Europ, North America, Hong Kong, Singapore, and so on). Besides color, the increase and decrease of stock may also be represented with candle stick with or without filling colors.

We use red to represent increasing and blue decreasing by default. If you want to change the configuration, you may change the following parameters.

+ [series-candlestick.itemStyle.color](~series-candlestick.itemStyle.color): fill color for bullish candle stick (namely, increase)
+ [series-candlestick.itemStyle.color0](~series-candlestick.itemStyle.color0): fill color for bearish candle stick (namely, decrease)
+ [series-candlestick.itemStyle.borderColor](~series-candlestick.itemStyle.borderColor): border color for bullish candle stick (namely, increase)
+ [series-candlestick.itemStyle.borderColor0](series-candlestick.itemStyle.borderColor0): border color for bearish candle stick (namely, decrease)


<br>
<br>

## type(string) = 'candlestick'

{{use: partial-component-id(prefix="#")}}

{{use: partial-coord-sys(
    seriesType="cartesian2d",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true
)}}

{{ use: partial-series-name }}

{{ use: partial-legend-hover-link }}


## hoverAnimation(boolean) = true

Whether to enable animitation when hovering on box.


## layout(string) = null

Layout method, whose values may be:

+ `'horizontal'`: horizontally layout all boxs.

+ `'vertical'`: vertically layout all boxs.

The default value is decided by:

+ if there is a `category` axis:
    + if it is horizontal, use `'horizontal'`;
    + otherwise use `'vertical'`;
+ otherwise use `'horizontal'`.

## barWidth(number)

Specify bar width. Absolute value (like `10`) or percentage (like `'20%'`, according to band width) can be used. Auto adapt by default.

## barMinWidth(number)

Specify bar min width. Absolute value (like `10`) or percentage (like `'20%'`, according to band width) can be used. Auto adapt by default.

## barMaxWidth(number)

Specify bar max width. Absolute value (like `10`) or percentage (like `'20%'`, according to band width) can be used. Auto adapt by default.


{{use:partial-candlestick-item-style(prefix="#")}}


{{use:partial-series-dimensions(
    prefix="#"
)}}

{{use:partial-series-encode(
    prefix="#"
)}}


## data(Array)

Data should be the two-dimensional array shown as follow.

```javascript
[
    [2320.26, 2320.26, 2287.3,  2362.94],
    [2300,    2291.3,  2288.26, 2308.38],
    { // the data item could also be an Object, so that it could contains special settings for this data item.
        value: [2300,    2291.3,  2288.26, 2308.38],
        itemStyle: {...}
    },
    ...
]
```

Every data item (each line in the example above) represents a box, which contains 4 values. They are:

```javascript
[open, close, lowest, highest]  (namely: [opening value, closing value, lowest value, highest value])
```

### name(string)

Name of data item.

### value(Array)

Value of data item.

```javascript
[open, close, lowest, highest]  (namely: [opening value, closing value, lowest value, highest value])
```


{{use:partial-candlestick-item-style(prefix="##")}}

{{use: partial-tooltip-in-series-data(
    galleryViewPath=${galleryViewPath}
)}}


{{use: partial-marker(
    prefix="#",
    seriesType="candlestick",
    galleryEditorPath=${galleryEditorPath},
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="candlestick"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation-init(
    prefix="#",
    defaultAnimationEasing='linear',
    defaultAnimationDuration=300,
    galleryEditorPath=${galleryEditorPath}
)}}


{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}






{{target: partial-candlestick-item-style-detail}}

#${prefix} color(Color)=${defaultColor}

Fill color of bullish candle stick.

{{ use: partial-color-desc }}

#${prefix} color0(Color)=${defaultColor0}

Fill color of bearish candle stick.

{{ use: partial-color-desc }}

#${prefix} borderColor(Color) = ${defaultBorderColor}

Border color of bullish candle stick.

{{ use: partial-color-desc }}

#${prefix} borderColor0(Color) = ${defaultBorderColor0}

Border color of bearish candle stick.

{{ use: partial-color-desc }}

#${prefix} borderWidth(number) = ${defaultBorderWidth}

Border width of candlestick. There is no border when it is `0`.

{{ use:partial-style-shadow-opacity(
    prefix=${prefix},
    defaultOpacity=${defaultOpacity},
    defaultShadowBlur=${defaultShadowBlur},
    defaultShadowColor=${defaultShadowColor},
    defaultShadowOffsetX=${defaultShadowOffsetX},
    defaultShadowOffsetY=${defaultShadowOffsetY}
) }}









{{target:partial-candlestick-item-style}}


#${prefix} itemStyle(Object)

{{use:partial-item-style-desc(name="candlestick")}}

{{use: partial-candlestick-item-style-detail(
    prefix="##",
    defaultColor="#c23531",
    defaultColor0="#314656",
    defaultBorderColor="#c23531",
    defaultBorderColor0="#314656",
    defaultBorderWidth=1
)}}

##${prefix} emphasis(Object)

{{use: partial-candlestick-item-style-detail(
    prefix="###",
    defaultColor="#c23531",
    defaultColor0="#314656",
    defaultBorderColor="#c23531",
    defaultBorderColor0="#314656",
    defaultBorderWidth=2
)}}

