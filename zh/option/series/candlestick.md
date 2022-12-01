
{{ target: series-candlestick }}

# series.candlestick(Object)

[Candlestick](https://en.wikipedia.org/wiki/Candlestick_chart) 即我们常说的 `K线图`。

在 ECharts3 中，同时支持 `'candlestick'` 和 `'k'`这两种 `'series.type'`（`'k'` 会被自动转为 `'candlestick'`）。

**示例如下：**

~[600x400](${galleryViewPath}candlestick-sh&edit=1&reset=1)


<br>
**关于『涨』『跌』的颜色：**

不同国家或地区对于 K线图 的颜色定义不一样，可能是『红涨绿跌』或『红涨蓝跌』（如大陆、台湾、日本、韩国等），可能是『绿涨红跌』（如西方国家、香港、新加坡等）。K线图也不一定要用红蓝、红绿来表示涨跌，也可以是『有色/无色』等表示方法。

默认配置项，采用的是『红涨蓝跌』。如果想更改这个颜色配置，在这些配置项中更改即可：

+ [series-candlestick.itemStyle.color](~series-candlestick.itemStyle.color)：阳线填充色（即『涨』）
+ [series-candlestick.itemStyle.color0](~series-candlestick.itemStyle.color0)：阴线填充色（即『跌』）
+ [series-candlestick.itemStyle.borderColor](~series-candlestick.itemStyle.borderColor)：阳线边框色（即『涨』）
+ [series-candlestick.itemStyle.borderColor0](~series-candlestick.itemStyle.borderColor0)：阴线边框色（即『跌』）
+ [series-candlestick.itemStyle.borderColorDoji](~series-candlestick.itemStyle.borderColorDoji)：十字星边框色（即开盘价等于收盘价时候的边框色）


<br>
<br>

<ExampleBaseOption name="candlestick" title="K 线图" title-en="Candlestick">
var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';


// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
    ['2013/1/24', 2320.26,2320.26,2287.3,2362.94],
    ['2013/1/25', 2300,2291.3,2288.26,2308.38],
    ['2013/1/28', 2295.35,2346.5,2295.35,2346.92],
    ['2013/1/29', 2347.22,2358.98,2337.35,2363.8],
    ['2013/1/30', 2360.75,2382.48,2347.89,2383.76],
    ['2013/1/31', 2383.43,2385.42,2371.23,2391.82],
    ['2013/2/1', 2377.41,2419.02,2369.57,2421.15],
    ['2013/2/4', 2425.92,2428.15,2417.58,2440.38],
    ['2013/2/5', 2411,2433.13,2403.3,2437.42],
    ['2013/2/6', 2432.68,2434.48,2427.7,2441.73],
    ['2013/2/7', 2430.69,2418.53,2394.22,2433.89],
    ['2013/2/8', 2416.62,2432.4,2414.4,2443.03],
    ['2013/2/18', 2441.91,2421.56,2415.43,2444.8],
    ['2013/2/19', 2420.26,2382.91,2373.53,2427.07],
    ['2013/2/20', 2383.49,2397.18,2370.61,2397.94],
    ['2013/2/21', 2378.82,2325.95,2309.17,2378.82],
    ['2013/2/22', 2322.94,2314.16,2308.76,2330.88],
    ['2013/2/25', 2320.62,2325.82,2315.01,2338.78],
    ['2013/2/26', 2313.74,2293.34,2289.89,2340.71],
    ['2013/2/27', 2297.77,2313.22,2292.03,2324.63],
    ['2013/2/28', 2322.32,2365.59,2308.92,2366.16],
    ['2013/3/1', 2364.54,2359.51,2330.86,2369.65],
    ['2013/3/4', 2332.08,2273.4,2259.25,2333.54],
    ['2013/3/5', 2274.81,2326.31,2270.1,2328.14],
    ['2013/3/6', 2333.61,2347.18,2321.6,2351.44],
    ['2013/3/7', 2340.44,2324.29,2304.27,2352.02],
    ['2013/3/8', 2326.42,2318.61,2314.59,2333.67],
    ['2013/3/11', 2314.68,2310.59,2296.58,2320.96],
    ['2013/3/12', 2309.16,2286.6,2264.83,2333.29],
    ['2013/3/13', 2282.17,2263.97,2253.25,2286.33],
    ['2013/3/14', 2255.77,2270.28,2253.31,2276.22],
    ['2013/3/15', 2269.31,2278.4,2250,2312.08],
    ['2013/3/18', 2267.29,2240.02,2239.21,2276.05],
    ['2013/3/19', 2244.26,2257.43,2232.02,2261.31],
    ['2013/3/20', 2257.74,2317.37,2257.42,2317.86],
    ['2013/3/21', 2318.21,2324.24,2311.6,2330.81],
    ['2013/3/22', 2321.4,2328.28,2314.97,2332],
    ['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
    ['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
    ['2013/3/27', 2299.38,2301.26,2289,2323.48],
    ['2013/3/28', 2273.55,2236.3,2232.91,2273.55],
    ['2013/3/29', 2238.49,2236.62,2228.81,2246.87],
    ['2013/4/1', 2229.46,2234.4,2227.31,2243.95],
    ['2013/4/2', 2234.9,2227.74,2220.44,2253.42],
    ['2013/4/3', 2232.69,2225.29,2217.25,2241.34],
    ['2013/4/8', 2196.24,2211.59,2180.67,2212.59],
    ['2013/4/9', 2215.47,2225.77,2215.47,2234.73],
    ['2013/4/10', 2224.93,2226.13,2212.56,2233.04],
    ['2013/4/11', 2236.98,2219.55,2217.26,2242.48],
    ['2013/4/12', 2218.09,2206.78,2204.44,2226.26],
    ['2013/4/15', 2199.91,2181.94,2177.39,2204.99],
    ['2013/4/16', 2169.63,2194.85,2165.78,2196.43],
    ['2013/4/17', 2195.03,2193.8,2178.47,2197.51],
    ['2013/4/18', 2181.82,2197.6,2175.44,2206.03],
    ['2013/4/19', 2201.12,2244.64,2200.58,2250.11],
    ['2013/4/22', 2236.4,2242.17,2232.26,2245.12],
    ['2013/4/23', 2242.62,2184.54,2182.81,2242.62],
    ['2013/4/24', 2187.35,2218.32,2184.11,2226.12],
    ['2013/4/25', 2213.19,2199.31,2191.85,2224.63],
    ['2013/4/26', 2203.89,2177.91,2173.86,2210.58],
    ['2013/5/2', 2170.78,2174.12,2161.14,2179.65],
    ['2013/5/3', 2179.05,2205.5,2179.05,2222.81],
    ['2013/5/6', 2212.5,2231.17,2212.5,2236.07],
    ['2013/5/7', 2227.86,2235.57,2219.44,2240.26],
    ['2013/5/8', 2242.39,2246.3,2235.42,2255.21],
    ['2013/5/9', 2246.96,2232.97,2221.38,2247.86],
    ['2013/5/10', 2228.82,2246.83,2225.81,2247.67],
    ['2013/5/13', 2247.68,2241.92,2231.36,2250.85],
    ['2013/5/14', 2238.9,2217.01,2205.87,2239.93],
    ['2013/5/15', 2217.09,2224.8,2213.58,2225.19],
    ['2013/5/16', 2221.34,2251.81,2210.77,2252.87],
    ['2013/5/17', 2249.81,2282.87,2248.41,2288.09],
    ['2013/5/20', 2286.33,2299.99,2281.9,2309.39],
    ['2013/5/21', 2297.11,2305.11,2290.12,2305.3],
    ['2013/5/22', 2303.75,2302.4,2292.43,2314.18],
    ['2013/5/23', 2293.81,2275.67,2274.1,2304.95],
    ['2013/5/24', 2281.45,2288.53,2270.25,2292.59],
    ['2013/5/27', 2286.66,2293.08,2283.94,2301.7],
    ['2013/5/28', 2293.4,2321.32,2281.47,2322.1],
    ['2013/5/29', 2323.54,2324.02,2321.17,2334.33],
    ['2013/5/30', 2316.25,2317.75,2310.49,2325.72],
    ['2013/5/31', 2320.74,2300.59,2299.37,2325.53],
    ['2013/6/3', 2300.21,2299.25,2294.11,2313.43],
    ['2013/6/4', 2297.1,2272.42,2264.76,2297.1],
    ['2013/6/5', 2270.71,2270.93,2260.87,2276.86],
    ['2013/6/6', 2264.43,2242.11,2240.07,2266.69],
    ['2013/6/7', 2242.26,2210.9,2205.07,2250.63],
    ['2013/6/13', 2190.1,2148.35,2126.22,2190.1]
]);


function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}



const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: data0.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: {onZero: false},
        splitLine: {show: false},
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: true
        }
    },
    dataZoom: [
        {
            type: 'inside',
            start: 50,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            top: '90%',
            start: 50,
            end: 100
        }
    ],
    series: [
        {
            name: '日K',
            type: 'candlestick',
            data: data0.values
        }
    ]
};


</ExampleBaseOption>

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

是否开启 hover 在 box 上的动画效果。

## layout(string) = null

<ExampleUIControlEnum options="horizontal,vertical">

布局方式，可选值：

+ `'horizontal'`：水平排布各个 box。

+ `'vertical'`：竖直排布各个 box。

默认值根据当前坐标系状况决定：如果 `category` 轴为横轴，则水平排布；否则竖直排布；如果没有 `category` 轴则水平排布。

## barWidth(number)

<ExampleUIControlPercent default="70%" min="0" />

指定柱宽度。可以使用绝对数值（如 `10`）或百分比（如 `'20%'`，表示 band width 的百分之多少）。默认自适应。

## barMinWidth(number|string)

指定柱最小宽度。可以使用绝对数值（如 `10`）或百分比（如 `'20%'`，表示 band width 的百分之多少）。默认自适应。

## barMaxWidth(number|string)

指定柱最大宽度。可以使用绝对数值（如 `10`）或百分比（如 `'20%'`，表示 band width 的百分之多少）。默认自适应。

## itemStyle(Object)

K 线图的图形样式。

{{ use: partial-candlestick-item-style-detail(
    prefix = "##",
    defaultColor = "#c23531",
    defaultColor0 = "#314656",
    defaultBorderColor = "#c23531",
    defaultBorderColor0 = "#314656",
    defaultBorderWidth = 1
) }}

## emphasis(Object)

K 线图的高亮状态。

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

K 线图的淡出状态。开启 [emphasis.focus](~series-candlestick.emphasis.focus) 后有效

### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "###",
    defaultBorderWidth = 2
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

K 线图的选中状态。开启 [selectedMode](~series-candlestick.selectedMode) 后有效。

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

数据格式是如下的二维数组。

```javascript
[
    [2320.26, 2320.26, 2287.3,  2362.94],
    [2300,    2291.3,  2288.26, 2308.38],
    { // 数据项也可以是 Object，从而里面能含有对此数据项的特殊设置。
        value: [2300,    2291.3,  2288.26, 2308.38],
        itemStyle: {...}
    },
    ...
]
```

二维数组的每一数组项（上例中的每行）是渲染一个box，它含有四个量值，依次是：

```javascript
[open, close, lowest, highest] （即：[开盘值, 收盘值, 最低值, 最高值]）
```

### name(string)

数据项名称。

### value(Array)

数据项值。


```javascript
[open, close, lowest, highest] （即：[开盘值, 收盘值, 最低值, 最高值]）
```

{{ use: partial-data-group-id(
    prefix = '##'
) }}

### itemStyle(Object)

单个 K 线图数据的图形样式。

{{ use: partial-candlestick-item-style-detail(
    prefix = "###"
) }}

### emphasis(Object)

单个 K 线图数据的高亮状态配置。

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

单个 K 线图数据的淡出状态配置。

#### itemStyle(Object)

{{ use: partial-candlestick-item-style-detail(
    prefix = "####"
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

单个 K 线图数据的选中状态配置。

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
    componentName = "K线图"
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

`阳线` 图形的颜色。

{{ use: partial-color-desc() }}

#${prefix} color0(Color) = ${defaultColor0}

<ExampleUIControlColor />

`阴线` 图形的颜色。

{{ use: partial-color-desc() }}

#${prefix} borderColor(Color) = ${defaultBorderColor}

<ExampleUIControlColor />

`阳线` 图形的描边颜色。

{{ use: partial-color-desc() }}

#${prefix} borderColor0(Color) = ${defaultBorderColor0}

<ExampleUIControlColor />

`阴线` 图形的描边颜色。

{{ use: partial-color-desc() }}

#${prefix} borderColorDoji(Color) = null

<ExampleUIControlColor />

{{ use: partial-version(
    version = "5.4.1"
) }}

十字星（开盘价等于收盘价）的描边颜色。

{{ use: partial-color-desc() }}

#${prefix} borderWidth(number) = ${defaultBorderWidth}

<ExampleUIControlNumber min="0" step="0.5" default="${defaultBorderWidth}" />

candlestick 描边线宽。为 0 时无描边。

{{ use: partial-style-shadow-opacity(
    prefix = ${prefix},
    defaultOpacity = ${defaultOpacity},
    defaultShadowBlur = ${defaultShadowBlur},
    defaultShadowColor = ${defaultShadowColor},
    defaultShadowOffsetX = ${defaultShadowOffsetX},
    defaultShadowOffsetY = ${defaultShadowOffsetY}
) }}
