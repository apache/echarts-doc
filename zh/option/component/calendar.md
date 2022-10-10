
{{ target: component-calendar }}

# calendar(Object)

日历坐标系组件。

在ECharts中，我们非常有创意地实现了日历图，是通过使用日历坐标系组件来达到日历图效果的，如下方的几个示例图所示，我们可以在热力图、散点图、关系图中使用日历坐标系。

在日历坐标系中使用热力图的示例:
~[800x400](${galleryViewPath}calendar-heatmap&edit=1&reset=1)

在日历坐标系中使用散点图的示例:
~[800x600](${galleryViewPath}calendar-effectscatter&edit=1&reset=1)

在日历坐标系中使用关系图（以及混合图表）的示例:
~[600x600](${galleryViewPath}calendar-graph&edit=1&reset=1)

灵活利用 echarts 图表和坐标系的组合，以及 API，可以实现更丰富的效果。
[在日历中使用文字](${galleryEditorPath}calendar-lunar&edit=1&reset=1)、
[在日历中放置饼图](${galleryEditorPath}calendar-pie&edit=1&reset=1)

---

**水平和垂直放置日历**

在日历坐标系可以水平放置，也可以垂直放置。如上面的例子，使用热力图时，经常是水平放置的。但是如果需要格子的尺寸大些，水平放置就过于宽了，于是也可以选择垂直放置。参见 [calendar.orient](~calendar.orient)。


---

**尺寸的自适应**

可以设置日历坐标系使他支持不同尺寸的容器（页面）大小变化的自适应。首先，和 echarts 其他组件一样，日历坐标系可以选择使用 [left](~calendar.left) [right](~calendar.right) [top](~calendar.top) [bottom](bottom) [width](~calendar.width) [height](~calendar.height) 来描述尺寸和位置，从而将日历摆放在上下左右各种位置，并随着页面尺寸变动而改变自身尺寸。另外，也可以使用 [cellSize](~calendar.cellSize) 来固定日历格子的长宽。

---

**中西方日历习惯的支持**

中西方日历有所差别，西方常使用星期日作为一周的第一天，中国使用星期一为一周的第一天。日历坐标系做了这种切换的支持。参见 [calendar.dayLabel.firstDay](~calendar.dayLabel.firstDay)。

另外，日历上的『月份』和『星期几』的文字，也可以较方便的切换中英文，甚至自定义。参见 [calendar.dayLabel.nameMap](~calendar.dayLabel.nameMap) [calendar.monthLabel.nameMap](~calendar.monthLabel.nameMap)。



---

<ExampleBaseOption name="calendar" title="日历图" title-en="Calendar">
function getVirtualData(year) {
    year = year || '2017';
    var date = +new Date(year + '/01/01');
    var end = +new Date((+year + 1) + '/01/01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            time,
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

const option = {
    tooltip: {},
    visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000'
        }
    },
    calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
            borderWidth: 0.5
        },
        yearLabel: {show: false}
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtualData(2016)
    }
};
</ExampleBaseOption>

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-rect-layout-width-height(
    componentName = "calendar",
    defaultLeft = "80",
    defaultTop = "60"
) }}

## range(number|string|Array)

必填，日历坐标的范围 支持多种格式

使用示例：
```ts

// 某一年
range: 2017

// 某个月
range: '2017-02'

// 某个区间
range: ['2017-01-02', '2017-02-23']

// 注意 此写法会识别为['2017-01-01', '2017-02-01']
range: ['2017-01', '2017-02']

```

## cellSize(number|Array) = 20

<ExampleUIControlNumber min="0" step="1" default="20" />

日历每格框的大小，可设置单值 或数组  第一个元素是宽 第二个元素是高。
支持设置自适应：`auto`, 默认为高宽均为20

使用示例：
```ts

// 设置宽高均为20
cellSize: 20

// 设置宽为20，高为40
cellSize: [20, 40]

// 设置宽高均为40
cellSize: [40]

// 设置宽高均自适应
cellSize: 'auto'

// 设置宽自适应，高为40
cellSize: ['auto', 40]

```

## width(number|string) = auto

<ExampleUIControlNumber min="0" step="1" />

日历坐标的整体宽度

注意: 默认cellSize 为20，若设置了`width`的值, 则`cellSize`中的宽度强制转为`auto`;

## height(number|string) = auto

<ExampleUIControlNumber min="0" step="1" />

日历坐标的整体高度，

注意: 默认cellSize 为20，若设置了`height`的值, 则`cellSize`中的高度强制转为`auto`;

## orient(string) = 'horizontal'

<ExampleUIControlEnum options="horizontal,vertical" default="horizontal" />

日历坐标的布局朝向。

可选：
+ 'horizontal'
+ 'vertical'

## splitLine(Object)

设置日历坐标分隔线的样式。

### show(boolean) = ${defaultShow|default(true)}

<ExampleUIControlBoolean show="${defaultShow|default(true)}" />

是否显示分隔线。默认显示。

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = '###',
    defaultColor = "#000",
    defaultWidth = 1,
    defaultType = "solid",
    name = "分隔线"
) }}

例如：
```ts
calendar: [{
    splitLine: {
        show: true,
        lineStyle: {
            color: '#000',
            width: 1,
            type: 'solid'
        }
    }
}]
```

## itemStyle(Object)

设置日历格的样式

{{ use: partial-item-style(
    prefix = "##",
    name = "calendar",
    defaultColor = "#fff",
    defaultBorderWidth = 1,
    defaultBorderColor = "'#ccc'"
) }}

例如：
```ts
calendar: [{
    itemStyle: {
        color: '#fff',
        borderWidth: 1,
        borderColor: '#ccc'
    }
}]
```

## dayLabel(Object)

设置日历坐标中 星期轴的样式

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否在普通状态下显示标签。

### firstDay(number) = 0

<ExampleUIControlNumber min="0" max="6" step="1" />

一周从周几开始，默认从周日开始

例如：

```ts

calendar: [{
    dayLabel: {
        firstDay: 1 // 从周一开始
    }
}]

```

### margin(number) = 0

<ExampleUIControlNumber min="0" step="1" />

星期标签与轴线之间的距离

### position(string) = 'start'

<ExampleUIControlEnum options="start,end" default="start" />

星期的位置 在星期轴的开头还是结尾。

可选：
+ 'start'
+ 'end'

### nameMap(string|Array)

<ExampleUIControlEnum options="EN,ZH" default="EN" />

星期显示的效果，默认为'en'。从 `v5.2.2` 起，默认为[初始化图表](api.html#echarts.init) 时指定的语言 `locale`，如未指定则根据浏览器语言自动侦测。

可设置中英文以及自定义。从 `v5.2.2` 起，还可以是任意内置(`ZH` / `EN`)或其他[已注册的语言包](api.html#echarts.registerLocale)名称（区分大小写）。

下标 `0` 为对应 `星期日` 的文字显示

使用示例：
```ts

// v5.2.2 以前版本

// 快捷设置英文 ['S', 'M', 'T', 'W', 'T', 'F', 'S']
nameMap: 'en',
// 快捷设置中文 ['日', '一', '二', '三', '四', '五', '六']
nameMap: 'cn',

// v5.2.2 及以后版本

// 快捷设置英文 ['S', 'M', 'T', 'W', 'T', 'F', 'S']
nameMap: 'EN',
// 快捷设置中文 ['日', '一', '二', '三', '四', '五', '六']
nameMap: 'ZH',

// 自定义设置： 中英文混杂 或者不显示
nameMap: ['S', '一', 'T', '三', '', '五', 'S'],

calendar: [{
    dayLabel: {
        // nameMap: 'en' // v5.2.2 以前版本
        nameMap: 'EN'    // v5.2.2 及以后版本
    }
}]
```

{{ use: partial-text-style(
    prefix = '##',
    defaultColor = "#000"
) }}

## monthLabel(Object)

设置日历坐标中 月份轴的样式

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否在普通状态下显示标签。

### align(string) = 'center'

<ExampleUIControlEnum options="left,center" default="center" />

设置月份区间内的月份文字位置。

可选：
+ 'center' // 区间内的中间
+ 'left'  // 区间内的左边

### margin(number) = 5

<ExampleUIControlNumber min="0" step="5" />

月份标签与轴线之间的距离

### position(string) = 'start'

<ExampleUIControlEnum options="start,end" default="start" />

月份的位置 在开头还是结尾。

可选：
+ 'start'
+ 'end'

### nameMap(string|Array)

<ExampleUIControlEnum options="EN,ZH" default="EN" />

月份显示的效果，默认为'en'。从 `v5.2.2` 起，默认为[初始化图表](api.html#echarts.init) 时指定的语言 `locale`，如未指定则根据浏览器语言自动侦测。

可设置中英文以及自定义。从 `v5.2.2` 起，还可以是任意内置(`ZH` / `EN`)或其他[已注册的语言包](api.html#echarts.registerLocale)名称（区分大小写）。

下标 `0` 为对应 `1月` 的文字显示。

使用示例：
```ts

// v5.2.2 以前版本

// 快捷设置英文
// ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
nameMap: 'en',
// 快捷设置中文
// ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
nameMap: 'cn',

// v5.2.2 及以后版本

// 快捷设置英文
// ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
nameMap: 'EN',
// 快捷设置中文
// ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
nameMap: 'ZH',

// 自定义设置：中英俄混杂 或者不显示
nameMap: [
    '一月', 'Feb', '三月',
    '四月', 'May', '六月',
    'Июль', '八月', '',
    '十月', 'Nov', '十二月'
],

calendar: [{
    monthLabel: {
        // nameMap: 'en' // v5.2.2 以前版本
        nameMap: 'EN'    // v5.2.2 及以后版本
    }
}]
```

### formatter(string|Function) = null

用来格式化月份文本，支持字符串模板和回调函数两种形式。

示例：
```ts
// 使用字符串模板，例如：2017-02
/*
    模板变量{nameMap} 月份原本名称 eg：'Feb'
    模板变量{yyyy}   四位数年份 eg: 2017
    模板变量{yy}   后两位数年份 eg: 17
    模板变量{MM}   两位数月份 eg: 02
    模板变量{M}   一位数月份 eg: 2
*/
formatter: '{yyyy}-{MM}'
// 使用回调函数
/*
    param.nameMap 月份原本名称 eg：'Feb'
    param.yyyy   四位数年份 eg: 2017
    param.yy   后两位数年份 eg: 17
    param.MM   两位数月份 eg: 02
    param.M   一位数月份 eg: 2
*/
formatter: function (param) {
    // ...
    return param.MM;
}
```

{{ use: partial-text-style(
    prefix = '##',
    defaultColor = "#000"
) }}

## yearLabel(Object)

设置日历坐标中 年的样式

### show(boolean) = true

<ExampleUIControlBoolean default="true" />

是否在普通状态下显示标签。

### margin(number) = 30

<ExampleUIControlNumber min="0" step="1" />

年份与轴线之间的距离

### position(string)

<ExampleUIControlEnum options="top,bottom,left,right" />

年份的位置
默认横向是'left' 竖向是'top'

可选：
+ 'top'
+ 'bottom'
+ 'left'
+ 'right'

### formatter(string|Function) = null

用来格式化年份文本，支持字符串模板和回调函数两种形式。
默认显示当前范围的年  若区间跨年 显示('start-end')

示例：
```ts
// 使用字符串模板，例如：['2017-10-11', '2018-01-21']
/*
    模板变量{nameMap} 年份原本名称 eg：'2017-2018'
    模板变量{start}   开始年份 eg: 2017
    模板变量{end}   结束年份 eg: 2018
*/

formatter: '{start}-{end}'
// 使用回调函数
/*
    param.nameMap 年份原本名称 eg：'2017-2018'
    param.start   开始年份 eg: 2017
    param.end   结束年份 eg: 2018
*/
formatter: function (param) {
    // ...
    return param.end;
}
```

{{ use: partial-text-style(
    prefix = '##'
) }}

{{ use: partial-silent(
    prefix = "#",
    defaultFontWeight = "bolder",
    defaultFontSize = "20"
) }}

