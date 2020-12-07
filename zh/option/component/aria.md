
{{ target: component-aria }}

# aria(*)

W3C 制定了无障碍富互联网应用规范集（[WAI-ARIA](https://www.w3.org/WAI/intro/aria)，the Accessible Rich Internet Applications Suite），致力于使得网页内容和网页应用能够被更多残障人士访问。Apache ECharts 4 遵从这一规范，支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。除此之外，Apache ECharts 5 新增支持贴花纹理，作为颜色的辅助表达，进一步用以区分数据。

默认关闭，需要通过将 [aria.enabled](~aria.enabled) 设置为 `true` 开启。

## enabled(boolean) = false

是否开启无障碍访问。如果不开启，则不会开启 `label` 或 `decal` 效果。

## label(Object)

如果 [aria.enabled](~aria.enabled) 设置为 `true`，`label` 默认开启。开启后，会根据图表、数据、标题等情况，自动智能生成关于图表的描述，用户也可以通过配置项修改描述。

**例子：**

对于配置项：

```js
option = {
    aria: {
        // 下面几行可以不写，因为 label.enabled 默认 true
        // label: {
        //     enabled: true
        // },
        enabled: true
    },
    title: {
        text: '某站点用户访问来源',
        x: 'center'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ]
        }
    ]
};
```

~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)

生成的图表 DOM 上，会有一个 `aria-label` 属性，在朗读设备的帮助下，盲人能够了解图表的内容。其值为：

> 这是一个关于“某站点用户访问来源”的图表。图表类型是饼图，表示访问来源。其数据是——直接访问的数据是335，邮件营销的数据是310，联盟广告的数据是234，视频广告的数据是135，搜索引擎的数据是1548。

生成描述的基本流程为，如果 [aria.enabled](~aria.enabled) 设置为 `true`（非默认）且 [aria.label.enabled](~aria.label.enabled) 设置为 `true`（默认），则生成无障碍访问描述，否则不生成。如果定义了 [aria.label.description](~aria.description)，则将其作为图表的完整描述，否则根据模板拼接生成描述。我们提供了默认的生成描述的算法，仅当生成的描述不太合适时，才需要修改这些模板，甚至使用 `aria.label.description` 完全覆盖。

使用模板拼接时，先根据是否存在标题 [title.text](~title.text) 决定使用 [aria.label.general.withTitle](~aria.general.withTitle) 还是 [aria.label.general.withoutTitle](~aria.general.withoutTitle) 作为整体性描述。其中，`aria.label.general.withTitle` 配置项包括模板变量 `'{title}'`，将会被替换成图表标题。也就是说，如果 `aria.label.general.withTitle` 被设置为 `'图表的标题是：{title}。'`，则如果包含标题 `'价格分布图'`，这部分的描述为 `'图表的标题是：价格分布图。'`。

拼接完标题之后，会依次拼接系列的描述（[aria.series](~aria.series)），和每个系列的数据的描述（[aria.data](~aria.data)）。同样，每个模板都有可能包括模板变量，用以替换实际的值。

完整的描述生成流程为：

![800xauto](~echarts-aria.jpg)

### enabled(boolean) = true

是否开启无障碍访问的标签生成。开启后将生成 `aria-label` 属性。

### description(string) = null

默认采用算法自动生成图表描述，如果用户需要完全自定义，可以将这个值设为描述。如将其设置为 `'这是一个展示了价格走势的图表'`，则 `aria-label` 属性的值即为该字符串。

这一配置项常用于展示单个的数据并不能展示图表内容时，用户显示指定概括性描述图表的文字。例如图表是一个包含大量散点图的地图，默认的算法只能显示数据点的位置，不能从整体上传达作者的意图。这时候，可以将 `description` 指定为作者想表达的内容即可。

### general(Object)

对于图表的整体性描述。

#### withTitle(string) = '这是一个关于“{title}”的图表。'

如果图表存在 [title.text](~title.text)，则采用 `withTitle`。其中包括模板变量：

- `{title}`：将被替换为图表的 [title.text](~title.text)。

#### withoutTitle(string) = '这是一个图表，'

如果图表不存在 [title.text](~title.text)，则采用 `withoutTitle`。

### series(Object)

系列相关的配置项。

#### maxCount(number) = 10

描述中最多出现的系列个数。

#### single(Object)

当图表只包含一个系列时，采用的描述。

##### prefix(string) = ''

对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：

- `{seriesCount}`：将被替换为系列个数，这里始终为 1。

##### withName(string) = '图表类型是{seriesType}，表示{seriesName}。'

如果系列有 `name` 属性，则采用该描述。其中包括模板变量：

- `{seriesName}`：将被替换为系列的 `name`；
- `{seriesType}`：将被替换为系列的类型名称，如：`'柱状图'`、 `'折线图'` 等等。

##### withoutName(string) = '图表类型是{seriesType}。'

如果系列没有 `name` 属性，则采用该描述。其中包括模板变量：

- `{seriesType}`：将被替换为系列的类型名称，如：`'柱状图'`、 `'折线图'` 等等。

#### multiple(Object)

当图表只包含多个系列时，采用的描述。

##### prefix(string) = '它由{seriesCount}个图表系列组成。'

对于所有系列的整体性描述，显示在每个系列描述之前。其中包括模板变量：

- `{seriesCount}`：将被替换为系列个数。

##### withName(string) = '图表类型是{seriesType}，表示{seriesName}。'

如果系列有 `name` 属性，则采用该描述。其中包括模板变量：

- `{seriesName}`：将被替换为系列的 `name`；
- `{seriesType}`：将被替换为系列的类型名称，如：`'柱状图'`、 `'折线图'` 等等。

##### withoutName(string) = '图表类型是{seriesType}。'

如果系列没有 `name` 属性，则采用该描述。其中包括模板变量：

- `{seriesType}`：将被替换为系列的类型名称，如：`'柱状图'`、 `'折线图'` 等等。

##### separator(Object)

系列与系列之间描述的分隔符。

###### middle(string) = '；'

除了最后一个系列后的分隔符。

###### end(string) = '。'

最后一个系列后的分隔符。

### data(Object)

数据相关的配置项。

#### maxCount(number) = 10

描述中每个系列最多出现的数据个数。

#### allData(string) = '其数据是——'

当数据全部显示时采用的描述。这一配置项**不会**使得数据全部显示，可以通过将 [aria.data.maxCount](~aria.data.maxCount) 设置为 `Number.MAX_VALUE` 实现全部显示的效果。

#### partialData(string) = '其中，前{displayCnt}项是——'

当只有部分数据显示时采用的描述。其中包括模板变量：

- `{displayCnt}`：将被替换为显示的数据个数。

#### withName(string) = '{name}的数据是{value}'

如果数据有 `name` 属性，则采用该描述。其中包括模板变量：

- `{name}`：将被替换为数据的 `name`；
- `{value}`：将被替换为数据的值。

#### withoutName(string) = '{value}'

如果数据没有 `name` 属性，则采用该描述。其中包括模板变量：

- `{value}`：将被替换为数据的值。

#### separator(Object)

数据与数据之间描述的分隔符。

##### middle(string) = '，'

除了最后一个数据后的分隔符。

##### end(string) = ''

最后一个数据后的分隔符。

需要注意的是，通常最后一个数据后是系列的 `separator.end`，所以 `data.separator.end` 在大多数情况下为空字符串。



## decal(Object)

为系列数据增加贴花纹理，作为颜色的辅助，帮助区分数据。

### show(boolean) = false

是否显示贴花图案，默认不显示。如果要显示贴花，需要保证 [aria.enabled](~aria.enabled) 与 `aria.decal.show` 都是 `true`。

```
aria: {
    enabled: true,
    decal: {
        show: true
    }
}
```

### decals(Object|Array)

贴花图案的样式。如果是 `Object` 类型，表示为所有数据采用同样的样式，如果是数组，则数组的每一项各为一种样式，数据将会依次循环取数组中的样式。

#### symbol(string|string[]) = 'rect'

贴花的图案，如果是 `string[]` 表示循环使用数组中的图案。

{{ use: partial-icon() }}

#### symbolSize(number) = 1

取值范围：`0` 到 `1`，表示占图案区域的百分比。

#### symbolKeepAspect(boolean) = true

是否保持图案的长宽比。

#### color(string) = 'rgba(0, 0, 0, 0.2)'

贴花图案的颜色，建议使用半透明色，这样能叠加在系列本身的颜色上。

#### backgroundColor(string) = null

贴花的背景色，将会覆盖在系列本身颜色之上，贴花图案之下。

#### dashArrayX(number | number[] | (number | number[])[]) = 5

贴花图案的基本模式是在横向和纵向上分别以`图案 - 空白 - 图案 - 空白 - 图案 - 空白`的形式无限循环。通过设置每个图案和空白的长度，可以实现复杂的图案效果。

`dashArrayX` 控制了横向的图案模式。当其值为 `number` 或 `number[]` 类型时，与 [SVG stroke-dasharray](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray) 类似。

- 如果是 `number` 类型，表示图案和空白分别是这个值。如 `5` 表示先显示宽度为 5 的图案，然后空 5 像素，再然后显示宽度为 5 的团……

- 如果是 `number[]` 类型，则表示图案和空白依次为数组值的循环。如：`[5, 10, 2, 6]` 表示图案宽 5 像素，然后空 10 像素，然后图案宽 2 像素，然后空 6 像素，然后图案宽 5 像素……

- 如果是 `(number | number[])[]` 类型，表示每行的图案和空白依次为数组值的循环。如：`[10, [2, 5]]` 表示第一行以图案 10 像素空 10 像素循环，第二行以图案 2 像素空 5 像素循环，第三行以图案 10 像素空 10 像素循环……

