{{ target: partial-2d-data-label-formatter }}

标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 `\n` 换行。

- 字符串模板

    模板变量有 `{a}`、`{b}`、`{c}`，分别表示系列名，数据名，数据值。

    **示例：**
    ```js
    formatter: '{b}: {c}'
    ```

- 回调函数

    回调函数格式：
    ```js
    (params: Object|Array) => string
    ```
    参数 `params` 是 formatter 需要的单个数据集。格式如下：
    {{ use: partial-formatter-params-structor() }}。




{{ target: partial-2d-data-desc }}

系列中的数据内容数组。数组项通常为具体的数据项。

通常来说，数据用一个二维数组表示。如下，每一列被称为一个『维度』。
```js
series: [{
    data: [
        // 维度X   维度Y   其他维度 ...
        [  3.4,    4.5,   15,   43],
        [  4.2,    2.3,   20,   91],
        [  10.8,   9.5,   30,   18],
        [  7.2,    8.8,   18,   57]
    ]
}]
```

+ 在 [直角坐标系 (grid)](~grid) 中『维度X』和『维度Y』会默认对应于 [xAxis](~xAxis) 和 [yAxis](~yAxis)。
+ 在 [极坐标系 (polar)](~polar) 中『维度X』和『维度Y』会默认对应于 [radiusAxis](~radiusAxis) 和 [angleAxis](~anbleAxis)。
+ 后面的其他维度是可选的，可以在别处被使用，例如：
    + 在 [visualMap](~visualMap) 中可以将一个或多个维度映射到颜色，大小等多个图形属性上。
    + 在 [series.symbolSize](~series.symbolSize) 中可以使用回调函数，基于某个维度得到 symbolSize 值。
    + 使用 [tooltip.formatter](~tooltip.formatter) 或 [series.label.normal.formatter](~series.label.normal.formatter) 可以把其他维度的值展示出来。

特别地，当只有一个轴为类目轴（axis.type 为 `'category'`）的时候，数据可以简化用一个一维数组表示。例如：
```js
xAxis: {
    data: ['a', 'b', 'm', 'n']
},
series: [{
    // 与 xAxis.data 一一对应。
    data: [23,  44,  55,  19]
    // 它其实是下面这种形式的简化：
    // data: [[0, 23], [1, 44], [2, 55], [3, 19]]
}]
```

<br>
**『值』与 [轴类型](~xAxis.type) 的关系：**

+ 当某维度对应于数值轴（axis.type 为 `'value'` 或者 `'log'`）的时候：

    其值可以为 `number`（例如 `12`）。（也可以容忍 `string` 形式的 number，例如 `'12'`）

+ 当某维度对应于类目轴（axis.type 为 `'category'`）的时候：

    其值须为类目的『序数』（从 `0` 开始）或者类目的『字符串值』。例如：
    ```js
    xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四']
    },
    yAxis: {
        type: 'category',
        data: ['a', 'b', 'm', 'n', 'p', 'q']
    },
    series: [{
        data: [
            // xAxis    yAxis
            [  0,        0,    2  ], // 意思是此点位于 xAxis: '星期一', yAxis: 'a'。
            [  '星期四',  2,    1  ], // 意思是此点位于 xAxis: '星期四', yAxis: 'm'。
            [  2,       'p',   2  ], // 意思是此点位于 xAxis: '星期三', yAxis: 'p'。
            [  3,        3,    5  ]
        ]
    }]
    ```
    双类目轴的示例可以参考 [Github Punchcard](${galleryEditorPath}scatter-punchCard) 示例。

+ 当某维度对应于时间轴（type 为 `'time'`）的时候：

    值可以为一个时间戳（如 `1484141700832`），或者一个 Date 实例，或者字符串形式的值（如 '2012-12-12'，'2012/12/12'）。


<br>
**当需要对个别数据进行个性化定义时：**

数组项可用对象，其中的 `value` 像表示具体的数值，如：
```js
[
    12,
    34,
    {
        value : 56,
        //自定义标签样式，仅对该数据项有效
        label: {},
        //自定义特殊 itemStyle，仅对该数据项有效
        itemStyle:{}
    },
    10
]
// 或
[
    [12, 33],
    [34, 313],
    {
        value: [56, 44],
        label: {},
        itemStyle:{}
    },
    [10, 33]
]
```

<br>
**空值：**

当某数据不存在时（ps：*不存在*不代表值为 0），可以用 `'-'` 或者 `null` 或者 `undefined` 或者 `NaN` 表示。

例如，无数据在折线图中可表现为该点是断开的，在其它图中可表示为图形不存在。

<br><br>
