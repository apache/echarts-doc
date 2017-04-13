{{ target: series-lines3D }}

# series.lines3D(Object)

三维的飞线图。跟二维的[飞线图](http://echarts.baidu.com/option.html#series-line)一样用于表现起点终点的线数据。更多用在地理可视化上。

下图是使用 [lines3D](~series-lines3D) 在 [globe](~globe) 上可视化飞机航班的一个例子。

![700xauto](~globe-airline.png)

## type(string) = 'lines3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    geo3D=true,
    globe=true
 ) }}

## effect(Object)

飞线的尾迹特效。

### show(boolean) = false

是否显示尾迹特效，默认不显示。

### period(number) = 4

尾迹特效的周期。

### trailWidth(number) = 4

尾迹的宽度。

### trailLength(number) = 0.1

尾迹的长度，范围从 0 到 1，为线条长度的百分比。

### trailColor(string)

尾迹的颜色，默认跟线条颜色相同。

### trailOpacity(number)

尾迹的不透明度，默认跟线条不透明度相同。

## lineStyle(Object)
飞线的线条样式。

{{ use: partial-line-style(
    prefix="##",
    useColorPalatte=true,
    defaultOpacity=0.5
) }}

## data(Array)

三维飞线图的数据数组，通常数据的每一项可以是一个包含起点和终点的坐标集。如下：

```js
data: [
    [
        [120, 66], // 起点的经纬度坐标
        [122, 67]  // 终点的经纬度坐标
    ]
]
```

有些时候需要配置数据项的名字或者单独的样式。需要把经纬度坐标写到 coords 属性下。如下：

```js
data: [
    {
        coords: [ [120, 66], [122, 67] ],
        // 数据值
        value: 10,
        // 数据名
        name: 'foo',
        // 线条样式
        lineStyle: {}
    }
]
```

### coords(Array)

一个包含两个到多个经纬度坐标的数组。

### value(Array|number)

数据值。

### lineStyle(Object)

单个数据（单条线）的样式设置。

{{ use: partial-line-style(
    prefix="###"
) }}


{{ use: partial-blend-mode() }}

{{ use: partial-zlevel }}

{{ use: partial-silent }}