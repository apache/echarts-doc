
{{ target: component-visual-map }}

# visualMap(Array|Object)

`visualMap` is a type of component for visual encoding, which maps the data to visual channels, including:

{{ use: partial-visual-map-visual-type() }}

Multiple `visualMap` component could be defined in a chart instance, which enable that different dimensions of a series data are mapped to different visual channels.

`visualMap` could be defined as [Piecewise (visualMapPiecewise)](~visualMap-piecewise) or [Continuous (visualMapContinuous)](~visualMap-continuous), which is distinguished by the property `type`. For instance:

```javascript
option = {
    visualMap: [
        { // the first visualMap component
            type: 'continuous', // defined to be continuous visualMap
            ...
        },
        { // the second visualMap component
            type: 'piecewise', // defined to be piecewise visualMap
            ...
        }
    ],
    ...
};
```

<br>
**✦ Configure mapping ✦**

The dimension of [series.data](~series.data) can be specified by [visualMap.dimension](~visualMap.dimension), from which the value can be retrieved and mapped onto visual channels, which can be defined in [visualMap.inRange](~visualMap.inRange) and [visualMap.outOfRange](~visualMap.outOfRange).

<br>
In series that controlled by visualMap, if a data item needs to escape from controlled by visualMap, you can set like this:
```
series: {
    type: '...',
    data: [
        {name: 'Shanghai', value: 251},
        {name: 'Haikou', value: 21},
        // Mark as `visualMap: false`, then this item does not controlled by visualMap any more,
        // and series visual config (like color, symbol, ...) can be used to this item.
        {name: 'Beijing', value: 821, },
        ...
    ]
}
```


<br>
**✦ The relationship between visualMap of ECharts3 and dataRange of ECharts2 ✦**

`visualMap` is renamed from the `dataRange` of ECharts2, and the scope of functionalities are extended a lot. The configurations of `dataRange` are still compatible in ECharts3, which automatically convert them to `visualMap`. It is recommended to use `visualMap` instead of `dataRange` in ECharts3.

<br>
**✦ The detailed configurations of visualMap are elaborated as follows. ✦**

<br>
<br>

{{ use: component-visual-map-continuous() }}

{{ use: component-visual-map-piecewise() }}



{{ target: partial-visual-map-range }}

`${rangeType}` could customize visual channels both in series (by [${visualMapName}.seriesIndex](~${visualMapName}.seriesIndex)) and in `${visualMapName}` itself.

For instance, if a `${visualMapName}` component is used on a scatter chart, the mapping approach from data to `color` (or `symbol`, `size`, ...) can be both customized in the scatter chart and `${visualMapName}` component itself. See the code as following:

```javascript
visualMap: [
    {
        ...,
        // Define visual channels both in target series and ${visualMapName} component itself:
        ${rangeType}: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [30, 100]
        }
    }
]
```

If you want to define visual channels for target series and ${visualMapName} component separately, you should do as follows:

```javascript
visualMap: [
    {
        ...,
        // Define visual channels only for target series.
        target: {
            ${rangeType}: {
                color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
                symbolSize: [60, 200]
            }
        },
        // Define visual channels only for ${visualMapName} component.
        controller: {
            ${rangeType}: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

Or define as follows:
```javascript
visualMap: [
    {
        ...,
        // Define visual channels for both target series and ${visualMapName} component.
        ${rangeType}: {
            color: ['#121122', 'rgba(3,4,5,0.4)', 'red'],
            symbolSize: [60, 200]
        },
        // Define visual channels only for ${visualMapName} component, which
        // will overlap the properties with the same name in the above common
        // definition. (symbolSize is overlapped by [30, 100] while color
        // keeps the original value)
        controller: {
            ${rangeType}: {
                symbolSize: [30, 100]
            }
        }
    }
]
```

<br>

---

**✦ About visual channels ✦**

+ Various visual channels (such as `color`、`symbolSize` and ect.) can be defined in ${rangeType} at the same time and all of them will be apopted.

+ Basically visual channels `opacity` is recommended, rather than `colorAlpha`. The former controls the transparency of both graphical element and its attachments (like label), whereas the latter only controls the transparency of graphical element.

+ There are two approaches of visual mapping supported: 'Linear Mapping' and 'Table Mapping'.

<br>

---

**✦ Linear Mapping to visual channel ✦**

`Linear Mapping` means that linear calculation will be performed on each dataValue (value of series.data), mapping them from the domain of `[visaulMap.min, visualMap.max]` to a given range of `[visual value 1, visual value 2]` and obtaining a final value (say visual value) for visual channel rendering.

For instance, `[visualMap.min, visualMap.max]` is set to be `[0, 100]`, and there is series.data: `[50, 10, 100]`. We intend to map them to an `opacity` range `[0.4, 1]`, by which the size of value can be demonstrated by the transparency of graphical elements. visualMap component will then linear calculate them and get opacity values `[0.7, 0.44, 1]`, cooresponding to each dataValue.

We can also set the visual range inversely, such as `opacity: [1, 0.4]`, and the final mapping result for the given series.data above will be `[0.7, 0.96, 0.4]`.

Notice: [visualMap.min, visualMap.max] should be set manually and is [0, 100] by default, but not `dataMin` and `dataMax` in series.data.


How to configure visualMap component to do Linear Mapping?

+ When use [visualMap-continuous](~visualMap-continuous), or

+ When use [visualMap-piecewise](~visualMap-piecewise) and [visualMap-piecewise.categories](~visualMap-piecewise.categories) is not used.


About the value of visual channel (visual value):

+ Basically `Array` is used to express the range of visual value, e.g., `color: ['#333', '#777']`.

+ Single `number` or single `string` can also be used, which will be converted to an `Array` by visualMap component. e.g.:  `opacity: 0.4` will be converted to `opacity: [0.4, 0.4]`, `color: '#333'` will be converted to `color: ['#333', '#333']`.

+ For visual channel `symbolSize`, `opacity`, `colorAlpha`, `colorLightness`, `colorSaturation`, `colorHue`, the range of visual value is always in the form of: `[visual value of visualMap.min, visual value of visualMap.max]`. For example, `colorLightness: [0.8, 0.2]` means that the dataValue in series.data that equals to `visualMap.min` (if any) will be mapped to lightness `0.8`, and the dataValue that equals to `visualMap.max` (if any) will be mapped to lightness `0.2`, and other dataValues will be mapped by the linear calculateion based on the domain of `[visualMap.min, visualMap.max]` and the range of `[0.8, 0.2]`.

+ For visual channel `color`, array is used, like: `['#333', '#78ab23', 'blue']`, which means a color ribbon is formed based on the three color stops, and dataValues will be mapped to the ribbon. Specifically, the dataValue that equals to `visualMap.min` will be mapped onto `'#333'`, the dataValue that equals to `visualMap.max` will be mapped onto `'blue'`, and other dataValues will be piecewisely interpolated to get the final color.

+ For visual channel `symbol`, array is used, like: `['circle', 'rect', 'diamond']`, where the dataValue that equals to `visualMap.min` will be mapped onto `'circle'`, the dataValue that equals to `visualMap.max` will be mapped onto `'diamond'`, and other dataValues will be calculated based on the numerical distance to `visualMax.min` and to `visualMap.max`, and mapped onto one of `'circle'`, `'rect'`, `'diamond'`.


About the possible value range of visual value:

+ `opacity`、`colorAlpha`、`colorLightness`、`colorSaturation`、`visual value`

    possible value range is `[0, 1]`.

+ `colorHue`：

    possible value range is `[0, 360]`.

+ `color`：

    color can use RGB expression, like `'rgb(128, 128, 128)'`, or RGBA expression, like `'rgba(128, 128, 128, 0.5)'`, or Hex expression, like '#ccc'.

+ `symbol`：

{{ use: partial-icon() }}

<br>

---

**✦ Table Mapping to visual channel ✦**

`Table Mapping` could be used when dataValue (values in series.data, specified by [visualMap.dimension](~visualMap.dimension)) is enumerable and we intend to map them to visual value by looking up a given table.

For instance, in a [visualMap-piecewise](~visualMap-piecewise) component, [visualMap-piecewise.categories](~visualMap-piecewise.categories) is set to `['Demon Hunter', 'Blademaster', 'Death Knight', 'Warden', 'Paladin']`. And there is series.data: `['Demon Hunter', 'Death Knight', 'Warden', 'Paladin']`. Then we can establish the lookup rule for color: `color: {'Warden': 'red', 'Demon Hunter': 'black'}`, by which the `visualMap` component will map `dataValue` to `color`.

How to configure `visualMap` component to do `Table Mapping`?

When use [visualMap-piecewise](~visualMap-piecewise) and [visualMap-piecewise.categories](~visualMap-piecewise.categories)is set.

About the value of visual channel (visual value):

Generally `Object` or `Array` is used, for instance:

```javascript
visualMap: {
    type: 'piecewise',
    // categories defines the items that to be displayed in visualMap-piecewise component.
    categories: [
        'Demon Hunter', 'Blademaster', 'Death Knight', 'Warden', 'Paladin'
    ],
    ${rangeType}: {
        // visual value can be an Object：
        color: {
            'Warden': 'red',
            'Demon Hunter': 'black',
            '': 'green' // Blank string means that except 'Warden' and 'Demon Hunter',
                        // all other dataValues should be mapped to 'green'.
        }
        // visual value can also be a single value,
        // means that all dataValues should be mapped to the value.
        color: 'green',
        // visual value can also be a array, with the same length
        // as the array of categories and one-one mapping onto it.
        color: ['red', 'black', 'green', 'yellow', 'white']
    }
}
```

[Example](${galleryEditorPath}doc-example/scatter-visualMap-categories&edit=1&reset=1)



{{ target: partial-visual-map-merge }}

**✦ How to modify configurations of visual encoding? ✦**

If you want to modify the configurations of visual encoding after chart been rendered (by invoke `setOption` to set the initial `option`), `setOption` can be used again to modify configurations of visual encoding. For instance:

```javascript
chart.setOption({
    ${componentMainType}: {
        inRange: {color: ['red', 'blue']}
    }
});
```

Notice:

+ These ${componentMainType} properties (i.e. `inRange`, `outOfRange`, `target`, `controller`) do not support "merge", that is, anyone among them is modified when use `setOption` again, all of the original values of them will not be kept but erased. The "merge" brings complication in implemnentation and understanding, whereas "erase all" normalize the practise: once you want to modify some visual values, you should pass all of them to `setOption`, no matter they are to be changed.

+ This way, `getOption() -> modify the gotten option -> setOption(modified option)`, is strongly **not recommended**, for instance:

```javascript
// Not recommended approach, regardless of its correctness:

var option = chart.getOption(); // Get the entire option.
option.${componentMainType}.inRange.color = ['red', 'blue']; // modify color, which is what you want.

// You have to modify those two properties, otherwise you will not get what you want.
option.${componentMainType}.target.inRange.color = ['red', 'blue'];
option.${componentMainType}.controller.inRange.color = ['red', 'blue'];

chart.setOption(option); // set the modified option back.
// You should not use this approach, but use the
// approach demonstrated before this example.
```



{{ target: partial-visual-map-common }}

## show(boolean) = true

Whether to show ${visualMapName} component. If set as `false`, ${visualMapName} component will not show, but it can still perform visual mapping from dataValue to visual channel in chart.

## dimension(string)

Specify which dimension should be used to fetch dataValue from [series.data](~series.data), and then map them to visual channel.

[series.data](~series.data) can be regarded as a two-dimensional array, for instance:

```javascript
[
    [12, 23, 43],
    [12, 23, 43],
    [43, 545, 65],
    [92, 23, 33]
]
```

Each column of the above array is regarded as a `dimension`. For example, when property `dimension` is set to 1, the second column (i.e., 23, 23, 545, 23) is chosen to perform visual mapping.

Use the last dimension of `data` by default.

## seriesIndex(number|Array)

Specify visual mapping should be performed on which series, from which
[series.data](~series.data) is fetched.

All series are used by default.

## hoverLink(boolean) = true

`hoverLink` enable highlight certain graphical elements of chart when mouse hovers on some place of `visualMap` component that is corresponding to those graphical elements by visual mapping.

Inversely, when mouse hovers a graphical element of chart, its value label will be displayed on its corresponding position in `visualMap`.

## inRange(Object)

Define visual channels that will mapped from dataValues that are **in selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

{{ use: partial-visual-map-visual-type() }}

{{ use: partial-visual-map-range(
    rangeType = 'inRange',
    visualMapName = ${visualMapName}
) }}

{{ use: partial-visual-map-merge(
    componentMainType = 'visualMap'
) }}

**Notice:** There is default color `['#f6efa6', '#d88273', '#bf444c']` in `inRange` if you not set `inRange`. If you don't want it, set `inRange: {color: null}` to disable it.

## outOfRange(Object)

Define visual channels that will mapped from dataValues that are **out of selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

See available configurations in [${visualMapName}.inRange](~${visualMapName}.inRange)

## controller(Object)

Property `inRange` and `outOfRange` can be set within property `controller`, which means those `inRange` and `outOfRange` are only used on the controller (`visualMap` component itself), but are not used on chart (series). This property is useful in some scenarios when the view of controller needs to be customized in detail.

### inRange(Object)

Define visual channels that will mapped from dataValues that are **in selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

See available configurations in [${visualMapName}.inRange](~${visualMapName}.inRange)

### outOfRange(Object)

Define visual channels that will mapped from dataValues that are **out of selected range**. User can interact with visualMap component and make a selected range by mouse or touch.

See available configurations in [${visualMapName}.inRange](~${visualMapName}.inRange)

{{ use: partial-rect-layout(
    componentName = "visualMap ",
    defaultZ = "4",
    defaultLeft = "0",
    defaultRight = "auto",
    defaultTop = "auto",
    defaultBottom = "0"
) }}

## orient(string) = 'vertical'

How to layout the visualMap component, `'horizontal'` or `'vertical'`.

## padding(number|Array) = 5

{{ use: partial-padding(
    componentName = ${visualMapName}
) }}

## backgroundColor(Color) = 'rgba(0,0,0,0)'

background color of visualMap component.

## borderColor(Color) = '#ccc'

border color of visualMap component.

## borderWidth(number) = 0

border width of visualMap component, with unit: px.

## color(Array) = ['#bf444c', '#d88273', '#f6efa6']

This property remains only for compatibility with ECharts2, and is not recommended in ECharts3. It is recommended to configure color in [${visualMapName}.inRange](~${visualMapName}.inRange), or [${visualMapName}.outOfRange](~${visualMapName}.outOfRange) if needed.

If you persist in using it, the following issue should be noticed: the sequence of dataValues that are mapped to colorValues in property `color` is from `large` to `small`, whereas that in [${visualMapName}.inRange](~${visualMapName}.inRange) or [${visualMapName}.outOfRange](~${visualMapName}.outOfRange) is from `small` to `large`.

## textStyle(*)

{{ use: partial-simple-text-style(
    prefix = '##',
    name = 'visualMap ',
    defaultColor = '#333'
) }}

