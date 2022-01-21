{{ target: component-axis3D-axis-common }}

## grid3DIndex(number) = 0

坐标轴使用的 [grid3D](~grid3D) 组件的索引。默认使用第一个 [grid3D](~grid3D) 组件。

## nameTextStyle(Object)

坐标轴名称的文字样式。

{{ use: partial-text-style(
    prefix='##',
    defaultFontSize=16
)}}

### color(Color)
坐标轴名称的颜色，默认取 [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color)。

## nameGap(number) = 20

坐标轴名称与轴线之间的距离，注意是三维空间的距离而非屏幕像素值。

## type(string) = ${axisTypeDefault|default('value')}

坐标轴类型。

可选：
+ `'value'`
    数值轴，适用于连续数据。

+ `'category'`
    类目轴，适用于离散的类目数据，为该类型时必须通过 [data](~${componentType}.data) 设置类目数据。

+ `'time'`
    时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月、星期、日、小时范围的刻度。

+ `'log'`
    对数轴，适用于对数数据。

## min(number|string) = null

坐标轴刻度最小值。

可以设置成特殊值 `'dataMin'`，此时取数据在该轴上的最小值作为最小刻度。

不设置时会自动计算最小值保证坐标轴刻度的均匀分布。

在类目轴中，也可以设置为类目的序数（如类目轴 `data: ['类A', '类B', '类C']` 中，序数 `2` 表示 `'类C'`。也可以设置为负数，如 `-3`）。

## max(number|string) = null

坐标轴刻度最大值。

可以设置成特殊值 `'dataMax'`，此时取数据在该轴上的最大值作为最大刻度。

如果不设置，则会自动计算最大值来保证坐标轴刻度的均匀分布。

在类目轴中，也可以设置为类目的序数（如类目轴 `data: ['类A', '类B', '类C']` 中，序数 `2` 表示 `'类C'`。也可以设置为负数，如 `-3`）。


## scale(boolean) = false

只在数值轴中（[type](~${componentType}.type): 'value'）有效。

是否是脱离 0 值比例。设置成 `true` 后坐标刻度不会强制包含零刻度。在双数值轴的散点图中比较有用。

在设置 [min](~${componentType}.min) 和 [max](~${componentType}.max) 之后该配置项无效。

## splitNumber(number) = 5

坐标轴的分割段数，需要注意的是这个分割段数只是个预估值，最后实际显示的段数会在这个基础上根据分割后坐标轴刻度显示的易读程度作调整。

在类目轴中无效。

## minInterval(number) = 0

自动计算的坐标轴最小间隔大小。

例如可以设置成`1`保证坐标轴分割刻度显示成整数。

```ts
{
    minInterval: 1
}
```

只在数值轴中（[type](~${componentType}.type): 'value'）有效。

## interval(number)

强制设置坐标轴分割间隔。

因为 [splitNumber](~${componentType}.splitNumber) 是预估的值，实际根据策略计算出来的刻度可能无法达到想要的效果，这时候可以使用 interval 配合 [min](~${componentType}.min)、[max](~${componentType}.max) 强制设定刻度划分，一般不建议使用。

无法在类目轴中使用。在时间轴（[type](~${componentType}.type): 'time'）中需要传时间戳，在对数轴（[type](~${componentType}.type): 'log'）中需要传指数值。

## logBase(number) = 10

对数轴的底数，只在对数轴中（[type](~${componentType}.type): 'log'）有效。


## data(Array)

类目数据，在类目轴（[type](~${componentType}.type): 'category'）中有效。

如果设置了 [type](~${componentType}.type) 是 `'category'`，但没有设置 `axis.data`，则 `axis.data` 的内容会自动从 [series.data](~series.data) 中获取，这会比较方便。不过注意，`axis.data` 指明的是 `'category'` 轴的取值范围。如果不指定而是从 [series.data](~series.data) 中获取，那么只能获取到 [series.data](~series.data) 中出现的值。比如说，假如 [series.data](~series.data) 为空时，就什么也获取不到。


示例：

```ts
// 所有类目名称列表
data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
// 每一项也可以是具体的配置项，此时取配置项中的 `value` 为类目名
data: [{
    value: '周一',
    // 突出周一
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, '周二', '周三', '周四', '周五', '周六', '周日']
```

### value(string)

单个类目名称。

### textStyle(Object)

类目标签的文字样式。

{{ use:partial-text-style(
    prefix='###'
) }}
