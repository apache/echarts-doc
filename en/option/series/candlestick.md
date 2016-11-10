
{{target: series-candlestick}}

# series.candlestick(Object)

[Candlestick](https://en.wikipedia.org/wiki/Candlestick_chart) is what we usually call `K line graph`.

ECharts3 supports both `'candlestick'` and `'k'` which are the same `'series.type'` (`'k'` would automatically turns into `'candlestick'`).

**Here is the example: **

~[600x400](${galleryViewPath}candlestick-sh&edit=1&reset=1)


<br>
**About color of *ups* and *downs* **

Different countries or regions have different implications on the color of candle stick chart. It may use red to imply increasing with red and decreasing with blue (in China mainland, Taiwan, Japan, Koera, and so on), or to imply increasing with green and decreasing with red (in Western countries, Hong Kong, Singapore, and so on). Besides color, the ups and downs of stock may also be represented with candle stick with or without filling colors.

We use red to represent increasing and blue decreasing by default. If you want to change the configuration, you may change the following parameters.

+ [series-candlestick.itemStyle.normal.color](~series-candlestick.itemStyle.normal.color): filling color for positive values (or, *ups*)
+ [series-candlestick.itemStyle.normal.color0](~series-candlestick.itemStyle.normal.color0): filling color for negtive values (or, *downs*)
+ [series-candlestick.itemStyle.normal.borderColor](~series-candlestick.itemStyle.normal.borderColor): border color for positive values (or, *ups*)
+ [series-candlestick.itemStyle.normal.borderColor0](series-candlestick.itemStyle.normal.borderColor0): border color for negtive values (or, *downs*)


<br>
<br>

## type(string) = 'candlestick'

{{use: partial-coord-sys(
    seriesType="cartesian2d",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true
)}}

{{ use: partial-series-name }}

{{ use: partial-legend-hover-link }}


## hoverAnimation(boolean) = true

Whether to enable the hover animitation on box.


## layout(string) = null

Layout method, whose values may be:

+ `'horizontal'`: horizontally layout all boxs.

+ `'vertical'`: vertically layout all boxs.

The default value is decided by the current situation of coordinate axis: if `category` is horizontal axis, there would be horizontal layout; otherwise, there would be vertical layout; if there is no `category` axis, it would be horizontal layout.



{{use:partial-candlestick-item-style(prefix="#")}}


## data(Array)

Data format is in a two dimensional array:

```javascript
[
    [2320.26, 2320.26, 2287.3,  2362.94],
    [2300,    2291.3,  2288.26, 2308.38],
    { // the data item could also be Object, so it could contains special setting values for this data item.
        value: [2300,    2291.3,  2288.26, 2308.38],
        itemStyle: {...}
    },
    ...
]
```

Each data item of the two dimensional array (each line in the example above) is rendered into a box, which contains 4 values. They are:

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



{{use: partial-marker(
    prefix="#",
    galleryEditorPath=${galleryEditorPath},
    seriesType="scatter",
    hasCoord=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="K line graph"
) }}

{{ use:partial-silent(
    prefix="#"
) }}

{{use: partial-animation-init(
    prefix="#",
    defaultAnimationEasing='linear',
    defaultAnimationDuration=300
)}}







{{target: partial-candlestick-item-style-detail}}

#${prefix} color(Color)=${defaultColor}

Filling color for positive data.

{{ use: partial-color-desc }}

#${prefix} color0(Color)=${defaultColor0}

Filling color for negtive data. It supports the same format of `color`.


#${prefix} borderColor(Color) = ${defaultBorderColor}

Border color for positive data. It supports the same format of `color`.


#${prefix} borderColor0(Color) = ${defaultBorderColor0}

Border color for negtive data. It supports the same format of `color`.


#${prefix} borderWidth(number) = ${defaultBorderWidth}

Border width of candlestick. No border when it is 0.

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


##${prefix} normal(Object)

{{use: partial-candlestick-item-style-detail(
    prefix="###",
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

