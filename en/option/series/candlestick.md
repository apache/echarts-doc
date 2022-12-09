
{{ target: series-candlestick }}

# series.candlestick(Object)

A [candlestick](https://en.wikipedia.org/wiki/Candlestick_chart) chart (also called Japanese candlestick chart) is a style of financial chart used to describe price movements of a security, derivative, or currency.

ECharts3 supports both `'candlestick'` and `'k'` in [series.type](~(series.type) (`'k'` would automatically turns into `'candlestick'`).

**An example:**

~[600x400](${galleryViewPath}candlestick-sh&edit=1&reset=1)


<br>
**About color of increase and decrease**

Different countries or regions have different implications on the color of candle stick chart. It may use red to imply increasing with red and decreasing with blue (in China mainland, Taiwan, Japan, Koera, and so on), or to imply increasing with green and decreasing with red (in Europe, North America, Hong Kong, Singapore, and so on). Besides color, the increase and decrease of stock may also be represented with candle stick with or without filling colors.

We use red to represent increasing and blue decreasing by default. If you want to change the configuration, you may change the following parameters.

+ [series-candlestick.itemStyle.color](~series-candlestick.itemStyle.color): fill color for bullish candle stick (namely, increase)
+ [series-candlestick.itemStyle.color0](~series-candlestick.itemStyle.color0): fill color for bearish candle stick (namely, decrease)
+ [series-candlestick.itemStyle.borderColor](~series-candlestick.itemStyle.borderColor): border color for bullish candle stick (namely, increase)
+ [series-candlestick.itemStyle.borderColor0](~series-candlestick.itemStyle.borderColor0): border color for bearish candle stick (namely, decrease)
+ [series-candlestick.itemStyle.borderColorDoji](~series-candlestick.itemStyle.borderColorDoji): border color for doji (when the open price is the same as the close price)


<br>
<br>

## type(string) = 'candlestick'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-coord-sys(
    seriesType = "candlestick",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

## hoverAnimation(boolean) = true

Whether to enable animation when hovering on box.

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

<ExampleUIControlPercent default="70%" min="0" />

Specify bar width. Absolute value (like `10`) or percentage (like `'20%'`, according to band width) can be used. Auto adapt by default.

## barMinWidth(number|string)

Specify bar min width. Absolute value (like `10`) or percentage (like `'20%'`, according to band width) can be used. Auto adapt by default.

## barMaxWidth(number|string)

Specify bar max width. Absolute value (like `10`) or percentage (like `'20%'`, according to band width) can be used. Auto adapt by default.

## itemStyle(Object)

Item style of candlestick.

{{ use: partial-candlestick-item-style-detail(
    prefix = "##",
    defaultColor = "#c23531",
    defaultColor0 = "#314656",
    defaultBorderColor = "#c23531",
    defaultBorderColor0 = "#314656",
    defaultBorderWidth = 1
) }}

## emphasis(Object)

Emphasis style of candlestick.

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "###",
    defaultBorderWidth = 2
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of blur state. Available when [emphasis.focus](~series-candlestick.emphasis.focus) is set.

### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "###",
    defaultBorderWidth = 2
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Configurations of select state. Available when [selectedMode](~series-candlestick.selectedMode) is set.

{{ use: partial-select-disabled(
    prefix = "##"
) }}

### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "###",
    defaultBorderWidth = 2
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: partial-large(
    prefix = "#",
    defaultLarge = true,
    defaultLargeThreshold = 600
) }}

{{ use: partial-progressive(
    prefix = '#',
    supportProgressiveChunkMode = true,
    defaultProgressive = 3000,
    defaultProgressiveThreshold = 10000,
    defaultProgressiveChunkMode = 'mod'
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-series-group-id() }}

## data(Array)

Data should be the two-dimensional array shown as follows.

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

{{ use: partial-data-group-id(
    prefix = '##'
) }}

### itemStyle(Object)

Style of a candle box.

{{ use: partial-candlestick-item-style-detail(
    prefix = "###"
) }}

### emphasis(Object)

Emphasis style of a candle box.

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

#### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "####"
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Blur state of single data.

#### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "####"
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

Select state of single data.

{{ use: partial-select-disabled(
    prefix = "###"
) }}

#### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "####"
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "candlestick",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-clip(
    prefix = "#",
    version = "4.5.0"
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "Candlestick "
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation-init(
    prefix = "#",
    defaultAnimationEasing = 'linear',
    defaultAnimationDuration = 300
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: partial-candlestick-item-style-detail }}

#${prefix} color(Color) = ${defaultColor}

<ExampleUIControlColor />

Fill color of bullish candle stick.

{{ use: partial-color-desc() }}

#${prefix} color0(Color) = ${defaultColor0}

<ExampleUIControlColor />

Fill color of bearish candle stick.

{{ use: partial-color-desc() }}

#${prefix} borderColor(Color) = ${defaultBorderColor}

<ExampleUIControlColor />

Border color of bullish candle stick.

{{ use: partial-color-desc() }}

#${prefix} borderColor0(Color) = ${defaultBorderColor0}

<ExampleUIControlColor />

Border color of bearish candle stick.

{{ use: partial-color-desc() }}

#${prefix} borderColorDoji(Color) = null

<ExampleUIControlColor />

{{ use: partial-version(
    version = "5.4.1"
) }}

Border color of doji (when the open price is the same as the close price).

{{ use: partial-color-desc() }}

#${prefix} borderWidth(number) = ${defaultBorderWidth}

<ExampleUIControlNumber min="0" step="0.5" default="${defaultBorderWidth}" />

Border width of candlestick. There is no border when it is `0`.

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor},
    defaultShadowOffsetX = ${defaultShadowOffsetX},
    defaultShadowOffsetY = ${defaultShadowOffsetY}
) }}
