{{ target: series-bar3D }}

# series.bar3D(Object)

三维柱状图。可以用于[三维直角坐标系 grid3D](~grid3D)，[三维地理坐标系 geo3D](~geo3D)，[地球 globe](~globe)，通过高度，颜色等属性展示数据。

下图就是在 [geo3D](~geo3D) 上通过三维柱状图展示世界的人口密度数据。

![700xauto](~geo-bar3D.jpg)

## type(string) = 'bar3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    cartesian3D=true,
    geo3D=true,
    globe=true
) }}

## bevelSize(number) = 0

柱子的倒角尺寸，默认为 0，即没有倒角。

下面是无倒角和有倒角的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/bar3D-no-bevel.png" width="100%" title="bevelSize: 0">
    <img src="documents/asset/gl/img/bar3D-bevel.png" width="100%" title="bevelSize: 0.3">
</div>

## bevelSmoothness(number) = 2

柱子倒角的光滑/圆润度，数值越大越光滑/圆润。

## minHeight(number) = 0

最小柱子高度。

在柱状图不在笛卡尔坐标系上的时候，需要通过`minHeight`和`maxHeight`指明柱状图数据映射的高度范围。

## maxHeight(number) = 100

最大柱子高度。

## itemStyle(Object)

柱子的样式，包括颜色和不透明度。

{{ use: partial-item-style(
    useColorPalette=true,
    hasCallback=true
) }}

## label(Object)
柱子的标签配置。
{{ use: partial-label(
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}

## emphasis(Object)
柱子高亮状态的标签和样式配置。

### itemStyle(Object)
{{ use: partial-item-style(
    prefix="###"
) }}

### label(Object)
{{ use: partial-label(
    prefix="###",
    defaultShow=true,
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}

## data(Array)

柱状图数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：

```js
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

对于数组中的每一项：

1. 在 [grid3D](~grid3D) 中，每一项的前三个值分别是`x`, `y`, `z`。
2. 在 [geo3D](~geo3D) 以及 [globe](globe) 中，每一项的前两个值分别是经纬度 `lng`, `lat`，第三个值表示数值大小，例如人口的大小。这个值会被映射到 [minHeight](~series-bar3D.minHeight) ~ [maxHeight](~series-bar3D.maxHeight) 的范围。

除了默认给坐标系使用的三个值，每一项还可以加入任意多个值，用于给 [visualMap](~visualMap) 组件映射到颜色等其它图形属性。

更多时候我们需要指定每个数据项的名称，这时候需要每个项为一个对象：
```js
[{
    // 数据项的名称
    name: '数据1',
    // 数据项值
    value: [12, 14, 10]
}, {
    name: '数据2',
    value: [34, 50, 15]
}]
```

需要对个别内容指定进行个性化定义时：

```js
[{
    name: '数据1',
    value: [12, 14, 10]
}, {
    // 数据项名称
    name: '数据2',
    value : [34, 50, 15],
    //自定义特殊itemStyle，仅对该item有效
    itemStyle:{}
}]
```

### name(string)
数据项名称。

### value(Array)
数据项值。

### itemStyle(Object)
单个数据项的样式设置。

{{ use: partial-item-style(
    prefix="###"
) }}

### label(Object)
单个数据项的标签设置。

{{ use: partial-label(
    prefix="###",
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}

### emphasis(Object)
单个数据项高亮状态的标签和样式配置。

#### itemStyle(Object)
{{ use: partial-item-style(
    prefix="####"
) }}

#### label(Object)
{{ use: partial-label(
    prefix="####",
    defaultShow=true,
    defaultDistance=2,
    defaultTextFontSize=20,
    defaultTextBorderWidth=1,
    defaultTextBorderColor='#fff'
) }}



{{ use: partial-shading(
    componentType='series-bar3D',
    componentName='三维柱状图'
) }}


{{ use: partial-zlevel }}
