
{{target: series-candlestick}}

# series.candlestick(Object)

[Candlestick](https://en.wikipedia.org/wiki/Candlestick_chart) is what we usually call `K line graph`。

ECharts3  supports both `'candlestick'` and `'k'` which are 2 kinds of `'series.type'`（`'k'` would automatically turns into `'candlestick'`）.

**Here is the example：**

~[600x400](${galleryViewPath}candlestick-sh&edit=1&reset=1)


<br>
**about the colors of『rise』『fall』：**

Different countries or areas define the colors of K line graph differently. It may be 『red for rise and green for fall』or『red for rise and blue for fall』（such as Mainland China, Taiwan, Japan, Korea and etc.）; and it may be 『green for rise and red for fall』（such as western countries, Hongkong, Singapore and etc.）. It is not necessary to use red and blue, red and green to show rise and fall. Other methods such as 『colorful/colorless』are also available.


Thre default configuration item is『red for rise and blue for fall』. If you want to change this color configuration, it should be changed in these configuration items：

+ [series-candlestick.itemStyle.normal.color](~series-candlestick.itemStyle.normal.color)：positive filling color（namely『rise』）
+ [series-candlestick.itemStyle.normal.color0](~series-candlestick.itemStyle.normal.color0)：negtive filling color（namely『fall』）
+ [series-candlestick.itemStyle.normal.borderColor](~series-candlestick.itemStyle.normal.borderColor)：positive border color（namely『rise』）
+ [series-candlestick.itemStyle.normal.borderColor0](series-candlestick.itemStyle.normal.borderColor0)：negtive border color（namely『fall』）


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

layout method, optional values：

+ `'horizontal'`：horizontal layout of all boxs.

+ `'vertical'`：vertical layout of all boxs.

The default value is decided by the current situation of coordinate axis: if `category` is horizontal axis, there would be horizontal layout; otherwise, there would be vertical layout; if there is no `category` axis, it would be horizontal layout. 



{{use:partial-candlestick-item-style(prefix="#")}}


## data(Array)

Data format is double dimensional array which is shown in the following example.

```javascript
[
    [2320.26, 2320.26, 2287.3,  2362.94],
    [2300,    2291.3,  2288.26, 2308.38],
    { // the data item could also be Object，so it could contains special setting values for this data item.
        value: [2300,    2291.3,  2288.26, 2308.38],
        itemStyle: {...}
    },
    ...
]
```

Every data item（each line in the example above） in double dimensional array renders a box, which contains 5 values. They are：

```javascript
[open, close, lowest, highest] （namely：[opening value, closing value, lowest value, highest value]）
```

### name(string)

the name of data item.

### value(Array)

The value of data item.


```javascript
[open, close, lowest, highest] （namely：[opening value, closing value, lowest value, highest value]）
```


{{use:partial-candlestick-item-style(prefix="##")}}



{{use: partial-mark-point(
    prefix="#",
    seriesType="scatter",
    hasCoord=true
)}}
{{use: partial-mark-line(
    prefix="#",
    seriesType="scatter",
    hasCoord=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="K line graph"
) }}

{{use: partial-animation-init(
    prefix="#",
    defaultAnimationEasing='linear',
    defaultAnimationDuration=300
)}}







{{target: partial-candlestick-item-style-detail}}

#${prefix} color(Color)=${defaultColor}

color of `positive line` .

{{ use: partial-color-desc }}

#${prefix} color0(Color)=${defaultColor0}

color of `negtive line` . It supports the same format of `color`.


#${prefix} borderColor(Color) = ${defaultBorderColor}

border color of `positive line` in graph.  It supports the same format of `color`. 


#${prefix} borderColor0(Color) = ${defaultBorderColor0}

border color of `negtive line` in graph.  It supports the same format of `color`. 


#${prefix} borderWidth(number) = ${defaultBorderWidth}

border width of candlestick. There is no border when it is 0.

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

