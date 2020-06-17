
{{target: series-themeRiver}}

# series.themeRiver(Object)

** 主题河流 **

是一种特殊的流图, 它主要用来表示事件或主题等在一段时间内的变化。

**示例：**

~[700x580](${galleryViewPath}themeRiver-lastfm&edit=1&reset=1)


<br>
**可视编码：**

主题河流中不同颜色的条带状河流分支编码了不同的事件或主题，河流分支的宽度编码了原数据集中的value值。

此外，原数据集中的时间属性，映射到单个时间轴上。

<ExampleBaseOption name="themeRiver" title="主题河流图">

// From https://github.com/jsundram/streamgraph.js/blob/master/examples/data/lastfm.js
var rawData = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 49, 67, 16, 0, 19, 19, 0, 0, 1, 10, 5, 6, 1, 1, 0, 25, 0, 0, 0],
    [0, 6, 3, 34, 0, 16, 1, 0, 0, 1, 6, 0, 1, 56, 0, 2, 0, 2, 0, 0],
    [0, 8, 13, 15, 0, 12, 23, 0, 0, 1, 0, 1, 0, 0, 6, 0, 0, 1, 0, 1],
    [0, 9, 28, 0, 91, 6, 1, 0, 0, 0, 7, 18, 0, 9, 16, 0, 1, 0, 0, 0],
    [0, 3, 42, 36, 21, 0, 1, 0, 0, 0, 0, 16, 30, 1, 4, 62, 55, 1, 0, 0],
    [0, 7, 13, 12, 64, 5, 0, 0, 0, 8, 17, 3, 72, 1, 1, 53, 1, 0, 0, 0],
    [1, 14, 13, 7, 8, 8, 7, 0, 1, 1, 14, 6, 44, 8, 7, 17, 21, 1, 0, 0],
    [0, 6, 14, 2, 14, 1, 0, 0, 0, 0, 2, 2, 7, 15, 6, 3, 0, 0, 0, 0],
    [0, 9, 11, 3, 0, 8, 0, 0, 14, 2, 0, 1, 1, 1, 7, 13, 2, 1, 0, 0],
    [0, 7, 5, 10, 8, 21, 0, 0, 130, 1, 2, 18, 6, 1, 5, 1, 4, 1, 0, 7],
    [0, 2, 15, 1, 5, 5, 0, 0, 6, 0, 0, 0, 4, 1, 3, 1, 17, 0, 0, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 27, 26, 1, 0, 11, 1, 0, 0, 0, 1, 1, 2, 0, 0, 9, 1, 0, 0, 0],
    [31, 81, 11, 6, 11, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 3, 14, 0, 0, 12],
    [19, 53, 6, 20, 0, 4, 37, 0, 30, 86, 43, 7, 5, 7, 17, 19, 2, 0, 0, 5],
    [0, 22, 14, 6, 10, 24, 18, 0, 13, 21, 5, 2, 13, 35, 7, 1, 8, 0, 0, 1],
    [0, 56, 5, 0, 0, 0, 0, 0, 7, 24, 0, 17, 7, 0, 0, 3, 0, 0, 0, 8],
    [18, 29, 3, 6, 11, 0, 15, 0, 12, 42, 37, 0, 3, 3, 13, 8, 0, 0, 0, 1],
    [32, 39, 37, 3, 33, 21, 6, 0, 4, 17, 0, 11, 8, 2, 3, 0, 23, 0, 0, 17],
    [72, 15, 28, 0, 0, 0, 0, 0, 1, 3, 0, 35, 0, 9, 17, 1, 9, 1, 0, 8],
    [11, 15, 4, 2, 0, 18, 10, 0, 20, 3, 0, 0, 2, 0, 0, 2, 2, 30, 0, 0],
    [14, 29, 19, 3, 2, 17, 13, 0, 7, 12, 2, 0, 6, 0, 0, 1, 1, 34, 0, 1],
    [1, 1, 7, 6, 1, 1, 15, 1, 1, 2, 1, 3, 1, 1, 9, 1, 1, 25, 1, 72]
];

var labels = [
    'The Sea and Cake',
    'Andrew Bird',
    'Laura Veirs',
    'Brian Eno',
    'Christopher Willits',
    'Wilco',
    'Edgar Meyer',
    'B\xc3\xa9la Fleck',
    'Fleet Foxes',
    'Kings of Convenience',
    'Brett Dennen',
    'Psapp',
    'The Bad Plus',
    'Feist',
    'Battles',
    'Avishai Cohen',
    'Rachael Yamagata',
    'Norah Jones',
    'B\xc3\xa9la Fleck and the Flecktones',
    'Joshua Redman'
];

var data = [];
for (var i = 0; i < rawData.length; i++) {
    for (var j = 0; j < rawData[i].length; j++) {
        var label = labels[i];
        data.push([
            j, rawData[i][j], label
        ]);
    }
}

const option = {
    singleAxis: {
        max: 'dataMax'
    },
    series: [{
        type: 'themeRiver',
        data: data,
        label: {
            show: false
        }
    }]
};
</ExampleBaseOption>

## type(string) = 'themeRiver'

{{use: partial-component-id(prefix="#")}}

{{ use: partial-rect-layout-width-height(
    componentName='thmemRiver',
    defaultLeft: '5%',
    defaultRight: '5%',
    defaultTop: '5%',
    defaultBottom: '5%',
    defaultWidth: 'null',
    defaultHeight: 'null'
) }}

** 注意：**
整个主题河流view的位置信息复用了单个时间轴的位置信息，即left，top，right，bottom。


## coordinateSystem(string) = "single"

坐标系统，主题河流用的是单个的时间轴。


## boundaryGap(Array) = ["10%", "10%"]

图中与坐标轴正交的方向的边界间隙，设置该值是为了调整图的位置，使其尽量处于屏幕的正中间，避免处于屏幕的上方或下方。


## singleAxisIndex(number) = 0

单个时间轴的index，默认值为0，因为只有单个轴。


## label(Object)

`label` 描述了主题河流中每个带状河流分支对应的文本标签的样式。

{{use:partial-label(
    prefix="##",
    defaultShowLabel=true,
    defaultPosition="'left'",
    defaultMargin=4,
    noAlign=true,
    noVerticalAlign=true,
    defaultColor="'#000'",
    defaultFontSize=11,
)}}

## itemStyle(Object)

主题河流中每个带状河流分支的样式。

{{use: partial-item-style(
    prefix="##"
)}}

## emphasis(Object)

高亮的图形和标签样式。

### label(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'left'",
    defaultMargin=4,
    noAlign=true,
    noVerticalAlign=true,
    defaultColor="'#000'",
    defaultFontSize=11,
)}}

### itemStyle(Object)
{{use: partial-item-style(
    prefix="###",
    defaultShadowBlur=20,
    defaultShadowColor="'rgba(0,0,0,0.8)'"
)}}


## data(Array)

```js
data: [
    ["2015/11/09",10,"DQ"],
    ["2015/11/10",10,"DQ"],
    ["2015/11/11",10,"DQ"],
    ["2015/11/08",10,"SS"],
    ["2015/11/09",10,"SS"],
    ["2015/11/10",10,"SS"],
    ["2015/11/11",10,"SS"],
    ["2015/11/12",10,"SS"],
    ["2015/11/13",10,"QG"],
    ["2015/11/08",10,"QG"],
    ["2015/11/11",10,"QG"],
    ["2015/11/13",10,"QG"],
]
```
**数据说明：**

如上所示，主题河流的数据格式是二维数组的形式，里层数组的每一项由事件或主题的时间属性、事件或主题在某个时间点的值，以及事件或主题的名称组成。值得注意的是，一定要提供一个具有完整时间段的事件或主题作为主干河流，其他事件或主题以该主干河流为依据，将缺省的时间点上的值补为0，也就是说其他事件或主题的时间段是包含在主干河流内的，如果超出，布局会出错，这么做的原因是，在计算整个图的布局的时候要计算一条baseline，以便将每个事情画成流带状。如上图中的"SS"这一事件就是一个主干河流，经过处理，我们会将"DQ"中缺省的三个时间点以["2015/11/08",0,"DQ"]，["2015/11/12",0,"DQ"]，［"2015/11/13",0,"DQ"］的格式补齐，使其与主干河流对其。从中还可以看出，我们可以在完整时间段的任意位置缺省。


### date(string)
时间或主题的时间属性。
### value(number)
事件或主题在某个时间点的值。
### name(string)
事件或主题的名称。

{{use: partial-tooltip-in-series(
    galleryViewPath=${galleryViewPath}
)}}
