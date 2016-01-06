{{ target: partial-mark-point }}

#${prefix} markPoint(Object)
图表标注。

{{ use:partial-symbol(
    defaultSymbol="'pin'",
    defaultSymbolSize=50,
    prefix="#" + ${prefix},
    enableCallback=true
) }}

##${prefix} label(Object)
标注的文本。
###${prefix} normal(Object)
{{use:partial-label(
    prefix="###" + ${prefix},
    defaultPosition="'inside'",
    formatter=true
)}}
###${prefix} emphasis(Object)
{{use:partial-label(
    prefix="###" + ${prefix},
    formatter=true
)}}

##${prefix} itemStyle(Object)
标注的样式。
###${prefix} normal(Object)
{{use:partial-item-style(
    prefix="###" + ${prefix}
)}}
###${prefix} emphasis(Object)
{{use:partial-item-style(prefix="###" + ${prefix})}}

##${prefix} data(Array)
标注的数据数组。每个数组项是一个对象，有下面三种方式指定标注的位置。

1. 用 `coord` 属性指定数据的坐标位置。
2. 直接用 `type` 属性标注系列中的最大值，最小值。
3. 通过 `x`, `y` 属性指定容器上的像素位置。

**示例：**
```js
data: [{
    name: '最大值',
    type: 'max'
}, {
    name: '某个坐标',
    coord: [10, 20]
}, {
    name: '某个像素位置',
    x: 100,
    y: 100
}]
```
###${prefix} name(string) = ''
标注名称。
###${prefix} type(string)
特殊的标注类型，用于标注最大值最小值等。

**可选:**
+ `'min'` 最大值。
+ `'max'` 最大值。
+ `'average'` 平均值。

###${prefix} coord(Array)
标注的坐标。



