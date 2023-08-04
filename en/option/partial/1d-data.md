
{{ target: partial-1d-data-label-formatter }}

Data label formatter, which supports string template and callback function. In either form, `\n` is supported to represent a new line.

**String template**

Model variation includes:
+ `{a}`: series name.
+ `{b}`: the name of a data item.
+ `{c}`: the value of a data item.
+ `{d}`: the percent.
+ `{@xxx}`: the value of a dimension named `'xxx'`, for example, `{@product}` refers the value of `'product'` dimension.
+ `{@[n]}`: the value of a dimension at the index of `n`, for example, `{@[3]}` refers the value at dimensions[3].

**example: **
```ts
formatter: '{b}: {d}'
```

**Callback function**

Callback function is in form of:
```ts
(params: Object|Array) => string
```
where `params` is the single dataset needed by formatter, which is formed as:

{{ use: partial-formatter-params-structure(
    extra = ${extra}
) }}



{{ target: partial-1d-data-desc }}

Data array of ${name} series, which can be a single data value, like:
```ts
[12, 34, 56, 10, 23]
```

Or, if need extra dimensions for components like [visualMap](~visualMap) to map to graphic attributes like color, it can also be in the form of array. For example:
```ts
[[12, 14], [34, 50], [56, 30], [10, 15], [23, 10]]
```

In this case, we can assign the second value in each array item to [visualMap](~visualMap) component.


More likely, we need to assign name to each data item, in which case each item should be an object:
```ts
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

Each data item can be further customized:

```ts
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

