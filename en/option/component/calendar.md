{{ target: component-calendar }}

# calendar(Object)

Calendar coordinates.

In ECharts, we are very creative to achieve the calendar chart, by using the calendar coordinates to achieve the calendar chart,
as shown in the following example, we can use calendar coordinates in heatmap, scatter, effectScatter, and graph.

**Example of using heatmap in calendar coordinates:**
~[800x400](${galleryViewPath}calendar-heatmap&edit=1&reset=1)

**Example of using effectScatter in calendar coordinates:**
~[800x600](${galleryViewPath}calendar-effectscatter&edit=1&reset=1)

**Example of using graph in calendar coordinates:**
~[600x600](${galleryViewPath}calendar-graph&edit=1&reset=1)

**Other examples:**
[Display Text in Calendar](${galleryEditorPath}calendar-lunar&edit=1&reset=1),
[Display Pies in Calendar](${galleryEditorPath}calendar-pie&edit=1&reset=1)

---


{{ use: partial-rect-layout-width-height(
    componentName="calendar",
    defaultLeft="80",
    defaultTop="60"
) }}

## range(number|string|Array)
Required, range of Calendar coordinates, support multiple formats.

Examples:
```js

// one year
range: 2017

// one month
range: '2017-02'

//  a range
range: ['2017-01-02', '2017-02-23']

// note: they will be identified as ['2017-01-01', '2017-02-01']
range: ['2017-01', '2017-02']

```


## cellSize(number|Array) = 20

The size of each rect of calendar coordinates, can be set to a single value or array, the first element is width and the second element is height.

Support setting self-adaptation: `auto`, the default width and height to be 20.


Examples:
```js

// Set the width and height to be 20
cellSize: 20

// Set the width to be 20, and height to be 40
cellSize: [20, 40]

// Set width and height to be self-adaptation
cellSize: [40]

// Set the width and height to be 20
cellSize: 'auto'

// Set the width to be self-adaptation, and height to be 40
cellSize: ['auto', 40]

```

## width(number|string) = auto
The height of calendar coordinates.

Note: `cellSize` is 20 by default. If `width` is set,
  `cellSize[0]` will be forced to `auto`;

## height(number|string) = auto
The height of calendar coordinates.

Note: `cellSize` is 20 by default. If `height` is set,
  `cellSize[1]` will be forced to `auto`;


## orient(string) = 'horizontal'

The layout orientation of calendar.

Options:
+ 'horizontal'
+ 'vertical'


## splitLine(Object)
Calendar coordinates splitLine style.

### show(boolean) = ${defaultShow|default(true)}
Whether to show the splitLine.

### lineStyle(Object)

{{ use: partial-line-style(
    prefix='###',
    defaultColor="#000",
    defaultWidth=1,
    defaultType="solid",
    name="splitLine"
) }}


Examples:
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
Every rect style in calendar coordinates.

### normal(Object)
{{ use:partial-item-style(
    prefix="###",
    name="calendar",
    defaultColor="#fff",
    defaultBorderWidth=1,
    defaultBorderColor="'#ccc'"
) }}


Examples:
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
Day style in calendar coordinates.

### show(boolean) = true
Whether to show the dayLabel.

### firstDay(number) = 0
A week from the beginning of the week, the default starting on Sunday.

Examples:

```js

calendar: [{
    dayLabel: {
        firstDay: 1 // start on Monday
    }
}]

```

### margin(number) = 0
The margin between the day label and the axis line.

### position(string) = 'start'
Position of week, at the beginning or end of the range.

Options:
+ 'start'
+ 'end'

### nameMap(string|Array) = 'en'
Week text content, defaults to 'en';
It supports Chinese, English, and custom;
index 0 always means Sunday;

Examples:
```js

// shortcut to English  ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
nameMap: 'en'

// shortcut to Chinese ['日', '一', '二', '三', '四', '五', '六']
nameMap: 'cn'

// Custom settings: mixed in English and Chinese or not displayed
nameMap: ['S', '一', 'T', '三', '', '五', 'S'],

calendar: [{
    dayLabel: {
        nameMap: 'en'
    }
}]
```

### textStyle(Object)
Style of text in normal state.
{{ use: partial-text-style(prefix='###', defaultColor="#000",) }}


## monthLabel(Object)
Month label in calendar coordinates.

### show(boolean) = true
Whether to show monthLabel.

### align(string) = 'center'
Set the month text location in the month interval.

Options:
+ 'center'
+ 'left'

### margin(number) = 5
The margin between the month label and the axis line.

### position(string) = 'start'
Position of week, at the beginning or end of the range.

Options:
+ 'start'
+ 'end'

### nameMap(string|Array) = 'en'
Month text content, defaults to 'en';
It supports Chinese, English, and custom;
Index 0 always means Jan;


Examples:
```js
// Shortcut to English [
                'Jan', 'Feb', 'Mar',
                'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ],
nameMap: 'en'

// Shortcut to Chinese [
                '一月', '二月', '三月',
                '四月', '五月', '六月',
                '七月', '八月', '九月',
                '十月', '十一月', '十二月'
            ]
nameMap: 'cn'

// Custom settings: mixed in English and Chinese or not displayed
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
Formatter of month text label, which supports string template and callback function.


Examples:
```js
// Use string template; eg: 2017-02
/*
    template variables:
    {nameMap} default nameMap eg：'Feb'
    {yyyy}   four-digit years eg: 2017
    {yy}   two-digit years eg: 17
    {MM}   two-digit month eg: 02
    {M}   single-digit month eg: 2
*/
formatter: '{yyyy}-{MM}'

// Use callback function;
/*
    function parameters:
    param.nameMap default nameMap eg：'Feb'
    param.yyyy   four-digit years eg: 2017
    param.yy   two-digit years eg: 17
    param.MM   two-digit month eg: 02
    param.M   single-digit eg: 2
*/
formatter: function (param) {
    // ...
    return param.MM;
}
```

### textStyle(Object)
Style of text in normal state.
{{ use: partial-text-style(prefix='###', defaultColor="#000") }}


## yearLabel(Object)
Year label in calendar coordinates.

### show(boolean) = true
Whether to show yearLabel.

### margin(number) = 30
The margin between the month label and the axis line.

### position(string)
Position of year.

Default:
when orient is set as `horizontal`, position is `left`
when orient is set as `vertical`, position is `top`

Options:
+ 'top'
+ 'bottom'
+ 'left'
+ 'right'

### formatter(string|Function) = null
Formatter of year text label, which supports string template and callback function.

By default, the current range of the year, if the interval across the year, showing the first year and the last year

Examples:
```js
// Use string template; eg: ['2017-10-11', '2018-01-21']
/*
    template variables:
    {nameMap} default nameMap eg：'2017-2018'
    {start}   start year eg: 2017
    {end}   end year eg: 2018
*/

formatter: '{start}-{end}'

// Use callback function;
/*
    function parameters:
    param.nameMap default nameMap eg：'2017-2018'
    param.start   start year eg: 2017
    param.end   end year eg: 2018
*/
formatter: function (param) {
    // ...
    return param.end;
}
```

### textStyle(Object)
Style of text in normal state.
{{ use: partial-text-style(prefix='###') }}


{{ use:partial-silent(
    prefix="#",
    defaultFontWeight="bolder",
    defaultFontSize="20"
) }}
