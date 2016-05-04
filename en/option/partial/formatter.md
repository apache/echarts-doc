{{ target: partial-formatter-params-structure }}
    ```js
    {
        // series in the incoming option.index in series
        seriesIndex: number,
        // Series name
        seriesName: string,
        // data name，category name
        name: string,
        // index of data in the incoming data array
        dataIndex: number,
        // Incoming raw data
        data: Object,
        // Incoming data values
        value: number|Array,
    {{ for: ${extra} as ${obj}, ${name} }}
        // ${obj.desc}
        ${name}: ${obj.type},
    {{ /for }}
    }
    ```
{{ /target }}