{{ target: partial-formatter-params-structure }}
```js
{
    // 系列在传入的 option.series 中的 index
    seriesIndex: number,
    // 系列名称
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // 传入的数据值
    value: number,
{{ for: ${extra} as ${obj}, ${name} }}
    // ${obj.desc}
    ${name}: ${obj.type},
{{ /for }}
}
```