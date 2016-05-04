{{ target: partial-1d-data-label-formatter }}

Data label formatter supoports string template and callback function.

1. string template.

    Model variation includes `{a}`, `{b}`，`{c}`, `{d}`，representing series name, data name, data value and percent respectively.
    **example：**
    ```js
    formatter: '{b}: {d}'
    ```

2. callback function.

    Format of callback function：
    ```js
    (params: Object|Array) => string
    ```
    parameter `params` is the single dataset that formatter needs.Format is as followed：
    {{ use: partial-formatter-params-structure(extra = ${extra}) }}

formatter return string supports line feed with`\n` .



{{ target: partial-1d-data-desc }}

${name} data content and array in the series.Array item can be a single data value，for example：
```js
[12, 34, 56, 10, 23]
```

If other dimensions need to be added to data  [visualMap](~visualMap) component to map color and other graphic properties.Each data item can also be an array, for example：
```js
[[12, 14], [34, 50], [56, 30], [10, 15], [23, 10]]
```

Now second value in each arrary can be assigned to [visualMap](~visualMap) component.


In most situation, we need to assign name to each data item,so each item need to be one subject：
```js
[{
    // name of date item
    name: 'data1',
    // value of date item is 8
    value: 10
}, {
    name: 'data2',
    value: 20
}]
```

When personalized definition needs to be conducted to  sepcific content：

```js
[{
    name: 'data1',
    value: 10
}, {
    // name of data item
    name: 'data2',
    value : 56,
    //special self-define tooltip，only valid for this data item
    tooltip:{},
    //special self-define itemStyle，only valid for this data item
    itemStyle:{}
}]
```