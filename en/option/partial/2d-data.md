{{ target: partial-2d-data-label-formatter }}

Data label formatter, which supoports string template and callback function. In either form, `\n` is supported to represent a new line.

- String template

    Model variation includes `{a}`, `{b}`, `{c}`, representing series name, date name, data value respectively.

    **example: **
    ```js
    formatter: '{b}: {c}'
    ```

- Callback function

    Callback function is in form of: 
    ```js
    (params: Object|Array) => string
    ```
    where `params` is the single dataset needed by formatter, which is formed as: 
    {{ use: partial-formatter-params-structure(extra = ${extra}) }}




{{ target: partial-2d-data-desc }}

Data array of series, which can be in the following forms:

1. When an axis of the coordinate is of category type, data can be in one dimension, whose length is equals to that of [xAxis.data](~xAxis.data), and they are one-to-one matches. For example: 
    ```js
    [12, 34, 56, 10, 23]
    ```

2. When both axes of the coordinate are of value type, every data item needs an array, and at least two values should represent `x` and `y` in rectangular coordinates, or `radius` and `angle` in polar coordinates. For example: 
    ```js
    [[3.4, 4.5, 15], [4.2, 2.3, 20], [10.8, 9.5, 30], [7.2, 8.8, 18]]
    ```
    Every data values from the third value can be used to present other data dimensions. With [visualMap](~visualMap) component, one or more dimensions can be assigned to map to color, size and other graphic attributes.

3. When both axes in the coordinate are of category type, every data item also needs to be one array. At least two values of a data item should represent category index or name of two axes. For example: 
    ```js
    [[0, 0, 2], ['monday', 2, 1], [2, 1, 2], [3, 3, 5]]
    ```
    Every data values from the third value can be used to present other data dimensions. With [visualMap](~visualMap) component, one or more dimensions can be assigned to map to color, size and other graphic attributes.

    Example with two category axes can be found at [Github Punchcard](${galleryEditorPath}scatter-punchCard).

When a data item need to be custerized, data item can be an object, whose `value` stands for data value, for example: 
```js
[
    12, 34,
    {
        value : 56,
        // user-defined label format that only useful for this data item
        label: {},
        // user-defined special itemStyle that only useful for this data item
        itemStyle:{}
    },
    10, 23
]
```

**Tip: **When data of certain category does not exist (ps: *not exist* doesn't mean the value is 0), you may use `-` to represent. When there is no data, it should be disconnected in line chart, and no symbols in the chart.

