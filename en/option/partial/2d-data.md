{{ target: partial-2d-data-label-formatter }}

Data label formatter, which supoports string template and callback function. In either form, `\n` is supported to represent a new line.

**String template**

Model variation includes `{a}`, `{b}`, `{c}`, representing series name, date name, data value respectively.

**example: **
```js
formatter: '{b}: {c}'
```

**Callback function**

Callback function is in form of:
```js
(params: Object|Array) => string
```
where `params` is the single dataset needed by formatter, which is formed as:
{{ use: partial-formatter-params-structure(extra = ${extra}) }}




{{ target: partial-2d-data-desc }}

Data array of series, which can be in the following forms:

Basically, data is represented by a two-dimension array, like the example below, where each colum is named as a "dimension".
```js
series: [{
    data: [
        // dimX   dimY   other dimensions ...
        [  3.4,    4.5,   15,   43],
        [  4.2,    2.3,   20,   91],
        [  10.8,   9.5,   30,   18],
        [  7.2,    8.8,   18,   57]
    ]
}]
```

+ In [cartesian (grid)](~grid), "dimX" and "dimY" correspond to [xAxis](~xAxis) and [yAxis](~yAxis) repectively.
+ In [polar](~polar) "dimX" and "dimY" correspond to [radiusAxis](~radiusAxis) 和 [angleAxis](~anbleAxis) repectively.
+ Other dimensions are optional, which can be used in other place. For example:
    + [visualMap](~visualMap) can map one or more dimensions to viusal (color, symbol size ...).
    + [series.symbolSize](~series.symbolSize) can be set as a callback function, where symbol size can be calculated by values of a certain dimension.
    + Values in other dimensions can be shown by [tooltip.formatter](~tooltip.formatter) or [series.label.normal.formatter](~series.label.normal.formatter).

Especially, when there is one and only one category axis (axis.type is `'category'`), data can be simply be represented by a one-dimension array, like:
```js
xAxis: {
    data: ['a', 'b', 'm', 'n']
},
series: [{
    // Each item corresponds to each item in xAxis.data.
    data: [23,  44,  55,  19]
    // In fact, it is the simplification of the format below:
    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]
}]
```

<br>
**Relationship between "value" and [axis.type](~xAxis.type)**

+ When a dimension corresponds to a value axis (axis.type is `'value'` or `'log'`):

    The value can be a `number` (like `12`) (can also be a number in a `string` format, like `'12'`).

+ When a dimension corresponds to a category axis (axis.type is `'category'`):

    The value should be the ordinal of the axis.data (based on `0`), the string value of the axis.data. For example:
    ```js
    xAxis: {
        type: 'category',
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
    },
    yAxis: {
        type: 'category',
        data: ['a', 'b', 'm', 'n', 'p', 'q']
    },
    series: [{
        data: [
            // xAxis      yAxis
            [  0,           0,    2  ], // This point is located at xAxis: 'Monday', yAxis: 'a'.
            [  'Thursday',  2,    1  ], // This point is located at xAxis: 'Thursday', yAxis: 'm'.
            [  2,          'p',   2  ], // This point is located at xAxis: 'Wednesday', yAxis: 'p'.
            [  3,           3,    5  ]
        ]
    }]
    ```
    There is an example of double category axes: [Github Punchcard](${galleryEditorPath}scatter-punchCard).

+ When a dimension corresponds to a time axis (type is `'time'`), the value can be:
    + a timestamp, like `1484141700832`, which represents a UTC time.
    + a date string, in one of the formats below:
        + a subset of [ISO 8601](http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15), only including (all of these are treated as local time unless timezone is specified, which is consistent with [moment](https://momentjs.com/)):
            + only part of year/month/date/time are specified: `'2012-03'`, `'2012-03-01'`, `'2012-03-01 05'`, `'2012-03-01 05:06'`.
            + separated by `"T"` or a space: `'2012-03-01T12:22:33.123'`, `'2012-03-01 12:22:33.123'`.
            + timezone specified: `'2012-03-01T12:22:33Z'`, `'2012-03-01T12:22:33+8000'`, `'2012-03-01T12:22:33-05:00'`.
        + other date string format (all of these are treated as local time):
          `'2012'`, `'2012-3-1'`, `'2012/3/1'`, `'2012/03/01'`,
          `'2009/6/12 2:00'`, `'2009/6/12 2:05:08'`, `'2009/6/12 2:05:08.123'`.
    + a JavaScript Date instance created by user:
        + Caution, when using a data string to create a Date instance, [browser differences and inconsistencies](http://dygraphs.com/date-formats.html) should be considered.
        + For example: In chrome, `new Date('2012-01-01')` is treated as a Jan 1st 2012 in UTC, while `new Date('2012-1-1')` and `new Date('2012/01/01')` are treated as Jan 1st 2012 in local timezone. In safari `new Date('2012-1-1')` is not supported.
        + So if you intent to perform `new Date(dateString)`, it is strongly recommended to use a time parse library (e.g., [moment](https://momentjs.com/)), or use `echarts.number.parseDate`, or check [this](http://dygraphs.com/date-formats.html).



<br>
**Customize a data item:**

When needing to customize a data item, it can be set as an object, where property `value` reprensent real value. For example:
```js
[
    12,
    24,
    {
        value: [24, 32],
        // label style, only works in this data item.
        label: {},
        // item style, only works in this data item.
        itemStyle:{}
    },
    33
]
// Or
[
    [12, 332],
    [24, 32],
    {
        value: [24, 32],
        // label style, only works in this data item.
        label: {},
        // item style, only works in this data item.
        itemStyle:{}
    },
    [33, 31]
]
```

<br>
**Empty value:**

`'-'` or `null` or `undefined` or `NaN` can be used to describe that a data item is not exists (ps：*not exist* does not means its value is `0`).

For example, line chart can break when encounter an empty value, and scatter chart do not display graphic elements for empty values.

<br><br>
