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
    {{ use: partial-formatter-params-structor(extra = {
        percent: {
            desc: '百分比',
            type: 'number'
        }
    }) }}。

formatter 返回的字符串支持用 `\n` 换行。



{{ target: partial-1d-data-desc }}

系列中的数据内容数组。数组项可以为单个数值，如：
```js
[12, 34, 56, ..., 10, 23]
```

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