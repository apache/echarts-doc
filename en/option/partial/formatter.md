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
        // Color of data
        color: string,
    {{ for: ${extra} as ${obj}, ${name} }}
        // ${obj.desc}
        ${name}: ${obj.type},
    {{ /for }}
    }
    ```
{{ /target }}