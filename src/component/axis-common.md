{{target: axis-common}}

#${prefix} name(string)

坐标轴名称。

#${prefix} nameLocation(string) = 'start'

坐标轴名称显示位置。

**可选：**
+ 'start'
+ 'middle'
+ 'end'

#${prefix} nameTextStyle(Object)

坐标轴名称的文字样式。

{{use: partial-text-style(prefix='#' + ${prefix}, name="坐标轴名称")}}

#${prefix} nameGap(number) = 15

坐标轴名称与轴线之间的距离。

#${prefix} inverse(boolean) = false

是否是反向坐标轴。

#${prefix} type(string) = ${axisTypeDefault|default('value')}

坐标轴类型。

可选：
+ `'value'`
    数值轴，适用于连续数据。

+ `'category'`
    类目轴，适用于离散的类目数据，为该类型时必须通过 [data](~${componentType}.data) 设置类目数据。

+ `'time'`
    时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。

+ `'log'`
    对数轴。适用于对数数据。

#${prefix} min(number|string) = 'auto'

坐标轴刻度最小值，只在数值轴中（[type](~${componentType}.type): 'value'）有效。

不设置时会自动计算最小值保证坐标轴刻度的均匀分布。

#${prefix} max(number|string) = 'auto'

坐标轴刻度最大值，只在数值轴中（[type](~${componentType}.type): 'value'）有效。

不设置时会自动计算最大值保证坐标轴刻度的均匀分布。




#${prefix} axisLine(Object)

坐标轴轴线相关设置。

##${prefix} show(boolean) = true

是否显示坐标轴轴线。

{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}

##${prefix} onZero(boolean) = true
X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效。

{{ /if }}

##${prefix} lineStyle(Object)

{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="坐标轴线") }}




#${prefix} axisTick(Object)

坐标轴刻度相关设置。

##${prefix} show(boolean) = true

是否显示坐标轴刻度。

##${prefix} interval(number|Function) = 'auto'

坐标轴刻度的显示间隔，默认同 [axisLabel.interval](~${componentType}.axisLabel.interval) 一样。


##${prefix} inside(boolean) = false

坐标轴刻度是否朝内，默认朝外。

##${prefix} length(number) = 5

坐标轴刻度的长度。

##${prefix} lineStyle(Object)

{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="坐标轴刻度") }}


#${prefix} axisLabel(Object)

坐标轴刻度标签的相关设置。

##${prefix} show(boolean) = true

是否显示刻度标签。

##${prefix} inside(boolean) = false

刻度标签是否朝内，默认朝外。

##${prefix} rotate(number) = 0

刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。

旋转的角度从 -90 度到 90 度。

##${prefix} margin(number) = 8

刻度标签与轴线之间的距离。

##${prefix} formatter(string|Function)

刻度标签的内容格式器，支持字符串模板和回调函数两种形式。

示例:
```js
// 使用字符串模板，模板变量为刻度默认标签 {value}
formatter: '{value} kg'

// 使用函数模板，函数参数分别为刻度数值（类目），刻度的索引
formatter: function (value, index) {
    // 格式化成月/日，只在第一个刻度显示年份
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (idx === 0) {
        texts.unshift(date.getYear());
    }
    return texts.join('/');
}
```
##${prefix} textStyle(Object)

{{ use: partial-text-style(prefix='##' + ${prefix},
defaultColor="'#333'"
)}}

#${prefix} splitLine
#${prefix} splitArea

#${prefix} data(Array)

在类目轴（[type](~${componentType}.type): 'category'）中有效，坐标轴数据数组，只支持字符串类型。如：
```js
['周一', '周二', '周三', '周四', '周五', '周六', '周日']
```