{{ target: partial-2d-data-label-formatter }}

Data label formatter supoports string template and callback function.

1. string template.

    Model variation includes `{a}`, `{b}`, `{c}`, representing series name, date name, data value respectively.

    **example: **
    ```js
    formatter: '{b}: {c}'
    ```

2. callback function.

    Format of callback function: 
    ```js
    (params: Object|Array) => string
    ```
    parameter `params` is the single dataset that formatter needs.Format is as followed: 
     {{ use: partial-formatter-params-structor() }}. 

formatter return string supports line feed with`\n` .




{{ target: partial-2d-data-desc }}

Array of data content in series.Array item usually is specific data item. Followings are three data formats 

1. When an axis in the coordinate is category axis, data can be the value of one dimension, the length of array equals to the length of [xAxis.data](~xAxis.data),which is the label array of category axis content.And there is a  one-to-one correspondence between them, for example: 
    ```js
    [12, 34, 56, 10, 23]
    ```

2. When both axes in the coordinate are  value axes, every data item needs one array, and at least two of them should represent `x`,  `y`in cartesian coordinates or `radius`, `angle`in polar coordinates, for example: 
    ```js
    [[3.4, 4.5, 15], [4.2, 2.3, 20], [10.8, 9.5, 30], [7.2, 8.8, 18]]
    ```
    Every array of data value is able to present other data dimensions from the third one, using [visualMap](~visualMap) component can map one or more assigned dimensions to color, size and other graphic properties.

3. When both axes in the coordinate are  category axes, every data item also needs one array, a single data item needs to have at least two values representing category index or name on two axes, for example: 
    ```js
    [[0, 0, 2], ['monday', 2, 1], [2, 1, 2], [3, 3, 5]]
    ```
    Every array of data value is able to present other data dimensions from the third one, using [visualMap](~visualMap) component can map one or more assigned dimensions to color, size and other graphic properties.


    Examples of double category axis can refer to [Github Punchcard](${galleryEditorPath}scatter-punchCard).

When it needs to customize certain data label, array item can be treated as subject, among which`value` stands for specific value, for example: 
```js
[
    12, 34,
    {
        value : 56,
        //self-define label format, only valid for this data item
        label: {},
        //special self-define itemStyle, only valid for this data item
        itemStyle:{}
    },
    10, 23
]
```

**Tip: **When data to certain category does not exist (ps: 'inexistence' doesn't mean the value is 0), can use'-'to represent, when there is no data, it should be disconnected in  line chart, and no graph in other graphics.

