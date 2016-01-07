
{{target: component-parallel}}

# parallel(Object)

{{ use: partial-parallel-introduce(
    galleryViewPath=${galleryViewPath}
)}}

<br>
<br>

{{ use: partial-rect-layout(
    componentName='parallel ',
    defaultLeft: 80,
    defaultRight: 80,
    defaultTop: 60,
    defaultBottom: 60
) }}


## layout: 'horizontal'

布局方式，可选值为：

+ `'horizontal'`：水平排布各个坐标轴。

+ `'vertical'`：竖直排布各个坐标轴。


## parallelAxisDefault(Object)

{{ use: axis-common(
    prefix='#',
    componentType='parallelAxis'
) }}