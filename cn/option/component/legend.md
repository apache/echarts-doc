
{{target: component-legend}}

# legend(Object)

图例组件。

图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。

ECharts 3 中单个 echarts 实例中可以存在多个图例组件，会方便多个图例的布局。

## show(boolean) = true

{{use: partial-rect-layout-width-height(componentName="图例")}}

## orient(string) = 'horizontal'

图例列表的布局朝向。

可选：
+ 'horizontal'
+ 'vertical'

## align(string) = 'auto'

图例标记和文本的对齐。默认自动，根据组件的位置和 orient 决定，当组件的 [left](~legend.left) 值为 'right' 以及纵向布局（[orient](~legend.orient) 为  'vertical'）的时候为右对齐，及为 'right'。

可选：
+ 'auto'
+ 'left'
+ 'right'

## padding(number) = 5

{{ use: partial-padding(componentName="图例")}}

## itemGap(number) = 10

图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。

## itemWidth(number) = 25

图例标记的图形宽度。

## itemHeight(number) = 14

图例标记的图形高度。

## formatter(string|Function) = null

图例文本的内容格式器，支持字符串模板和回调函数两种形式。

示例：
```js
// 使用字符串模板，模板变量为图例名称 {name}
formatter: 'Legend {name}'
// 使用回调函数
formatter: function (name) {
    return 'Legend ' + name;
}
```

## selectedMode(string|boolean) = true

图例选择的模式，默认开启图例选择，可以设成 `false` 关闭。

除此之外也可以设成 `'single'` 或者  `'multiple'` 使用单选或者多选模式。

## inactiveColor(Color) = '#ccc'

图例关闭时的颜色。

## selected(Object)

图例选中状态表。

示例：
```
selected: {
    // 选中'系列1'
    '系列1': true,
    // 不选中'系列2'
    '系列2': false
}
```

## textStyle(Object)

图例的公用文本样式。

{{ use: partial-text-style(componentName='图例', prefix='##', defaultColor="#333") }}

## tooltip(Object)

图例的 tooltip 配置，配置项同 [tooltip](~tooltip)。默认不显示，可以在 legend 文字很多的时候对文字做裁剪并且开启 tooltip，如下示例：

```js
legend: {
    formatter: function (name) {
        return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
    },
    tooltip: {
        show: true
    }
}
```

## data(Array)

图例的数据数组。数组项通常为一个字符串，每一项代表一个系列的 `name`（如果是[饼图](~series-pie)，也可以是饼图单个数据的 `name`）。图例组件会自动获取对应系列的颜色，图形标记（symbol）作为自己绘制的颜色和标记，特殊字符串 `''`（空字符串）或者 `'\n'` (换行字符串)用于图例的换行。

如果要设置单独一项的样式，也可以把该项写成配置项对象。此时必须使用 `name` 属性对应表示系列的 `name`。

示例
```
data: [{
    name: '系列1',
    // 强制设置图形为圆。
    icon: 'circle',
    // 设置文本为红色
    textStyle: {
        color: 'red'
    }
}]
```

### name(string)
图例项的名称，对应系列的 `name`（如果是饼图，也可以是饼图单个数据的 `name`）。

### icon(string)

图例项的 icon。

{{ use: partial-icon }}

### textStyle(Object)

图例项的文本样式。

{{ use: partial-component-common-style(componentName='图例', prefix='#', defaultBorderColor="'#ccc'") }}
