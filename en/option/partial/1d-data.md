{{ target: partial-1d-data-label-formatter }}

Data label formatter, which supoports string template and callback function. In either form, `\n` is supported to represent a new line.

**String template**

Template variables includes `{a}`, `{b}`, `{c}`, `{d}`, representing series name, data name, data value, and percent respectively.
**example: **
```js
formatter: '{b}: {d}'
```

**Callback function**

Callback function is in form of:
```js
(params: Object|Array) => string
```
where `params` is the single dataset needed by formatter, which is formed as:
{{ use: partial-formatter-params-structure(extra = ${extra}) }}



{{ target: partial-1d-data-desc }}

Data array of ${name} series, which can be a single data value, like:
```js
[12, 34, 56, 10, 23]
```

Or, if need extra dimensions for components like [visualMap](~visualMap) to map to graphic attributes like color, it can also be in the form of array. For example:
```js
[[12, 14], [34, 50], [56, 30], [10, 15], [23, 10]]
```

In this case, we can assgin the second value in each arrary item to [visualMap](~visualMap) component.


More likely, we need to assign name to each data item, in which case each item should be an object:
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

Each data item can be further custerized:

```js
[{
    name: 'data1',
    value: 10
}, {
    // name of data item
    name: 'data2',
    value : 56,
    // user-defined label format that only useful for this data item
    label: {},
    // user-defined special itemStyle that only useful for this data item
    itemStyle:{}
}]
```