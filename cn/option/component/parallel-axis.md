
{{target: component-parallel-axis}}

# parallelAxis(Object)

这个组件是平行坐标系中的坐标轴。

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}


<br>
<br>

## dim(number)

坐标轴的维度号。

{{use: partial-parallel-data-example}}

`dim` 定义了数据的哪个维度（即哪个『列』）会对应到此坐标轴上。

从 `0` 开始计数。例如，假设坐标轴的 `dim` 为 `1`，则表示数据中的第二列会对应到此坐标轴上。


## parallelIndex(number) = 0

用于定义『坐标轴』对应到哪个『坐标系』中。

比如有如下配置：

```javascript
myChart.setOption({
    parallel: [
        {...},                      // 第一个平行坐标系
        {...}                       // 第二个平行坐标系
    ],
    parallelAxis: [
        {parallelIndex: 1, ...},    // 第一个坐标轴，对应到第二个平行坐标系
        {parallelIndex: 0, ...},    // 第二个坐标轴，对应到第一个平行坐标系
        {parallelIndex: 1, ...},    // 第三个坐标轴，对应到第二个平行坐标系
        {parallelIndex: 0, ...}     // 第四个坐标轴，对应到第一个平行坐标系
    ],
    ...
});
```

只有一个平行坐标系时可不用设置，自动取默认值 `0`。


## areaSelectStyle(Object)

在坐标轴上可以进行框选，这里是一些框选的设置。

<br>


### width(number) = 20

框选范围的宽度。


### borderWidth(number) = 1

选框的边框宽度。


### borderColor(Color) = 'rgba(160,197,232)'

选框的边框颜色。


### color(Color) = 'rgba(160,197,232)'

选框的填充色。


### opacity(number) = 0.3

选框的透明度。



{{ use: axis-common(
    prefix='#',
    componentType='parallelAxis'
) }}