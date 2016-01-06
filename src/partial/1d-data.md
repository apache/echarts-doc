{{ target: partial-1d-data-label-formatter }}

标签内容格式器，支持字符串模板和回调函数两种形式。
1. 字符串模板。

    模板变量有 `{a}`, `{b}`，`{c}`, `{d}`，分别表示系列名，数据名，数据值，百分比。

    **示例：**
    ```js
    formatter: '{b}: {d}'
    ```

2. 回调函数。

    回调函数格式：
    ```js
    (params: Object|Array) => string
    ```
    参数 `params` 是 formatter 需要的单个数据集。格式如下：
    {{ use: partial-formatter-params-structure(extra = ${extra}) }}

formatter 返回的字符串支持用 `\n` 换行。



{{ target: partial-1d-data-desc }}

系列中的数据内容数组。数组项可以为单个数值，如：
```js
[12, 34, 56, 10, 23]
```

如果需要在数据中加入其它维度给 [visualMap](~visualMap) 组件用来映射到颜色等其它图形属性。每个数据项也可以是数组，如：
```js
[[12, 14], [34, 50], [56, 30], [10, 15], [23, 10]]
```

这时候可以将每项数组中的第二个值指定给 [visualMap](~visualMap) 组件。


更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象：
```js
[{
    // 数据项的名称
    name: '数据1',
    // 数据项值8
    value: 10
}, {
    name: '数据2',
    value: 20
}]
```

需要对个别内容指定进行个性化定义时：

```js
[{
    name: '数据1',
    value: 10
}, {
    // 数据项名称
    name: '数据2',
    value : 56,
    //自定义特殊 tooltip，仅对该数据项有效
    tooltip:{},
    //自定义特殊itemStyle，仅对该item有效
    itemStyle:{}
}]
```