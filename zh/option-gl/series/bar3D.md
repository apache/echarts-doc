{{ target: series-bar3D }}

# series.bar3D(Object)

三维柱状图。可以用于[三维直角坐标系 grid3D](~grid3D)，[三维地理坐标系 geo3D](~geo3D)，[地球 globe](~globe)，通过高度，颜色等属性展示数据。

下图就是在 [geo3D](~geo3D) 上通过三维柱状图展示世界的人口密度数据。

![700xauto](~geo-bar3D.jpg)

## type(string) = 'bar3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    defaultCoordinateSystem='cartesian3D',
    cartesian3D=true,
    geo3D=true,
    globe=true
) }}

## bevelSize(number) = 0

柱子的倒角尺寸。支持设置为从 0 到 1 的值。默认为 0，即没有倒角。

下面是无倒角和有倒角的区别。

<div class="twentytwenty-container" style="width: 700px;">
    <img src="documents/asset/gl/img/bar3D-no-bevel.png" width="100%" title="bevelSize: 0">
    <img src="documents/asset/gl/img/bar3D-bevel.png" width="100%" title="bevelSize: 0.3">
</div>

## bevelSmoothness(number) = 2

柱子倒角的光滑/圆润度，数值越大越光滑/圆润。

## stack(string)

柱状图堆叠，相同 `stack` 值的柱状图系列数据会有叠加。注意不同系列需要叠加的数据项在数组中的索引必须是一样的。关于如何定制数值的堆叠方式，参见 [stackStrategy](~series-bar3D.stackStrategy)。

注：目前 `stack` 只支持堆叠于 `value` 和 `log` 类型的类目轴上，不支持 `time` 和 `category` 类型的类目轴。

## stackStrategy(string) = 'samesign'

{{ use: partial-version(
    isECharts = true,
    version = '5.3.3'
) }}

堆积数值的策略，前提是[stack](~series-bar3D.stack)属性已被设置。其值可以是：

+ `'samesign'` 只在要堆叠的值与当前累积的堆叠值具有相同的正负符号时才堆叠。
+ `'all'` 堆叠所有的值，不管当前或累积的堆叠值的正负符号是什么。
+ `'positive'` 只堆积正值。
+ `'negative'` 只堆叠负值。

## minHeight(number) = 0

最小柱子高度。

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

三维柱状图数据数组。数组每一项为一个数据。通常这个数据是用数组存储数据的每个属性/维度。例如下面：

```ts
data: [
    [[12, 14, 10], [34, 50, 15], [56, 30, 20], [10, 15, 12], [23, 10, 14]]
]
```

对于数组中的每一项：

1. 在 [grid3D](~grid3D) 中，每一项的前三个值分别是`x`, `y`, `z`。
2. 在 [geo3D](~geo3D) 以及 [globe](~globe) 中，每一项的前两个值分别是经纬度 `lng`, `lat`，第三个值表示数值大小，例如人口的多少。这个值会被映射到 [minHeight](~series-bar3D.minHeight) ~ [maxHeight](~series-bar3D.maxHeight) 的范围。

除了默认给坐标系使用的三个值，每一项还可以加入任意多个值，用于给 [visualMap](~visualMap) 组件映射到颜色等其它图形属性。

{{ use: common-data-option-desc() }}

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

{{ use: partial-silent }}

{{ use: partial-animation }}
