{{ target: component-calendar }}

# calendar(Object)

日历坐标系组件，可以用于热力图、散点图、关系图。

**在日历坐标系中使用热力图的示例:**
~[800x400](${galleryViewPath}calendar-heatmap&edit=1&reset=1)

**在日历坐标系中使用散点图的示例:**
~[800x400](${galleryViewPath}calendar-effectscatter&edit=1&reset=1)

**在日历坐标系中使用关系图的示例:**
~[800x400](${galleryViewPath}calendar-graph&edit=1&reset=1)


{{ use: partial-rect-layout-width-height(
    componentName="calendar",
    defaultLeft="80",
    defaultTop="60"
) }}

## range(number|string|Array)
必填，日历坐标的范围 支持多种格式

使用示例：
```js

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

日历每格框的大小，可设置单值 或数组  第一个元素是宽 第二个元素是高。
支持设置自适应：`auto`, 默认为高宽均为20

使用示例：
```js

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

## orient(string) = 'horizontal'
日历坐标的布局朝向。

可选：
+ 'horizontal'
+ 'vertical'

## splitLine(Object)
设置日历坐标分隔线的样式。

### show(boolean) = ${defaultShow|default(true)}
是否显示分隔线。默认显示。

### lineStyle(Object)

{{ use: partial-line-style(
    prefix='###',
    defaultColor="#000",
    defaultWidth=1,
    defaultType="solid",
    name="分隔线"
) }}


例如：
```js
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
### normal(Object)
{{ use:partial-item-style(
    prefix="###",
    name="calendar",
    defaultColor="#fff",
    defaultBorderWidth=1,
    defaultBorderColor="'#ccc'"
) }}


例如：
```js
calendar: [{
    itemStyle: {
        normal: {
            color: '#fff',
            borderWidth: 1,
            borderColor: '#ccc'
        }
    }
}]
```

## dayLabel(Object)
设置日历坐标中 星期轴的样式

### show(boolean) = true
是否在普通状态下显示标签。

### firstDay(number) = 0
一周从周几开始，默认从周日开始

例如：

```js

calendar: [{
    dayLabel: {
        firstDay: 1 // 从周一开始
    }
}]

```

### margin(number) = 0
星期标签与轴线之间的距离

### position(string) = 'start'
星期的位置 在星期轴的开头还是结尾。

可选：
+ 'start'
+ 'end'

### nameMap(string|Array) = 'en'
星期显示的效果，默认为'en'
可设置中英文以及自定义
下标0为对应星期天的文字显示

使用示例：
```js
// 快捷设置英文 ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
nameMap: 'en'
// 快捷设置中文 ['日', '一', '二', '三', '四', '五', '六']
nameMap: 'cn'
// 自定义设置： 中英文混杂 或者不显示
nameMap: ['S', '一', 'T', '三', '', '五', 'S'],

calendar: [{
    dayLabel: {
        nameMap: 'en'
    }
}]
```

### textStyle(Object)
普通状态下的标签文本样式。
{{ use: partial-text-style(prefix='###', defaultColor="#000",) }}


## monthLabel(Object)
设置日历坐标中 月份轴的样式

### show(boolean) = true
是否在普通状态下显示标签。

### align(string) = 'center'
设置月份区间内的月份文字位置。

可选：
+ 'center' // 区间内的中间
+ 'left'  // 区间内的左边

### margin(number) = 5
月份标签与轴线之间的距离

### position(string) = 'start'
月份的位置 在开头还是结尾。

可选：
+ 'start'
+ 'end'

### nameMap(string|Array) = 'en'
月份显示的效果，默认为'en'
可设置中英文以及自定义
下标0为对应一月的文字显示

使用示例：
```js
// 快捷设置英文 [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ],
nameMap: 'en'
// 快捷设置中文 [
                '一月', '二月', '三月',
                '四月', '五月', '六月',
                '七月', '八月', '九月',
                '十月', '十一月', '十二月'
            ]
nameMap: 'cn'
// 自定义设置： 中英文混杂 或者不显示
nameMap: [
            '一月', 'Feb', '三月',
            '四月', 'May', '六月',
            '七月', '八月', '',
            '十月', 'Nov', '十二月'
        ],

calendar: [{
    monthLabel: {
        nameMap: 'en'
    }
}]
```

### formatter(string|Function) = null

用来格式化月份文本，支持字符串模板和回调函数两种形式。

示例：
```js
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

### textStyle(Object)
普通状态下的标签文本样式。
{{ use: partial-text-style(prefix='###', defaultColor="#000") }}

## yearLabel(Object)
设置日历坐标中 年的样式

### show(boolean) = true
是否在普通状态下显示标签。

### margin(number) = 30
年份与轴线之间的距离

### position(string)
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
```js
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

### textStyle(Object)
普通状态下的标签文本样式。
{{ use: partial-text-style(prefix='###') }}


{{ use:partial-silent(
    prefix="#",
    defaultFontWeight="bolder",
    defaultFontSize="20"
) }}
