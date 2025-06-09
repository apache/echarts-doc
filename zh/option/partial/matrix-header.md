{{ target: partial-matrix-header }}

### show(boolean) = true

是否显示 ${name}。

{{ use: partial-matrix-region(
    prefix = '###',
    name: ${name}
) }}

### levelSize(number|string)

标题行列所有单元格的大小。对于 x 的标题行来说指单元格高度，对于 y 的标题列来说指单元格宽度。

值的类型可以是：

+ `number`：表示像素值。
+ `string`：百分比值（例如 `'33%'），表示相对整个图表容器的宽度或高度的百分比。
+ 未指定：表示根据内容自适应的最小值。

例如：

```js
{
    x: {
        levelSize: undefined,
        levels: [undefined, {levelSize: '10%'}]
    }
}
```

在上面的例子中，表示第二列标题的宽度为整个图表宽度的 10%，其他标题列的单元格使用每列标题内容的最大值作为宽度。

### levels(Array)

标题行列每一行列的设置。其中第一个元素表示第一行/列，以此类推。如果数组中的某项为空，表示采用默认值。

#### levelSize(number|string)

标题行某一行/列单元格的大小。对于 x 的标题行来说指单元格高度，对于 y 的标题列来说指单元格宽度。

值的类型可以是：

+ `number`：表示像素值。
+ `string`：百分比值（例如 `'33%'），表示相对整个图表容器的宽度或高度的百分比。
+ 未指定：表示根据内容自适应的最小值。

### dividerLineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = "'#aaa'",
    defaultWidth = 1,
    defaultType = "'solid'",
    name = "标题列分割线"
) }}
