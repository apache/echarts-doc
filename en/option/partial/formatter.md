{{ target: partial-formatter-params-structure }}
```js
{
    componentType: 'series',
    // Series type
    seriesType: string,
    // Series index in option.series
    seriesIndex: number,
    // Series name
    seriesName: string,
    // Data name, or category name
    name: string,
    // Data index in input data array
    dataIndex: number,
    // Original data as input
    data: Object,
    // Value of data
    value: number|Array,
    // data dimension index, for example 0 or 1 or 2 ...
    dimensionIndex: number,
    // Color of data
    color: string,
{{ for: ${extra} as ${obj}, ${name} }}{{ if: ${extra}.hasOwnProperty(${name}) }}
    // ${obj.desc}
    ${name}: ${obj.type},
{{ /if }}{{ /for }}
}
```
{{ /target }}