{{target: partial-axis-common-axis-line}}
#${prefix} axisLine(Object)

The related settings about axis line.

##${prefix} show(boolean) = ${defaultShow|default(true)}

To show the axis line or not.


{{ if: ${componentType} == 'xAxis' || ${componentType} == 'yAxis' }}
##${prefix} onZero(boolean) = true

specify whether x axis or y axis are in the scale of 0 degree. Only available if another one is numerical axis and contains scale of 0 degree.   
{{ /if }}

##${prefix} lineStyle(Object)
{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="axisLine") }}






{{target: partial-axis-common-axis-label}}
#${prefix} axisLabel(Object)

The related settings about the axistick lable

##${prefix} show(boolean) = ${defaultShow|default(true)}

To show the label of axis tick label or not. 

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="axisTick label",
    isAxisLabel=true,
    componentType=${componentType}
) }}
{{ /if }}

##${prefix} inside(boolean) = false
Specify whether the axisTick label is inside oriented. It defaults to be outside oriented.

{{ if: ${componentType} !== 'angleAxis' }}
##${prefix} rotate(number) = 0

The rotation angle of the tick label. As the category labels in the category axis cannot be shown completely, you can rotate the tick labels to prevent them from overlapping each other.   

The rotation angle is from -90 degree to 90 degree.

{{ /if }}

##${prefix} margin(number) = 8

The margin between the tick lable and the axis.

##${prefix} formatter(string|Function) = null

{{use: axis-common-formatter-desc}}

##${prefix} textStyle(Object)

{{ use: partial-text-style(
    prefix='##' + ${prefix},
    defaultColor="'#333'"
)}}





{{target: partial-axis-common-axis-tick}}

#${prefix} axisTick(Object)

The related settings about the axis tick 

##${prefix} show(boolean) = ${defaultShow|default(true)}

Specify whether to show the axis tick.


{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="axisTick",
    componentType=${componentType}
) }}
{{ /if }}
##${prefix} inside(boolean) = false

specify the axis tick are inside oriented. It defauts to be outside oriented.

##${prefix} length(number) = 5
The length of the axis tick 

##${prefix} lineStyle(Object)
{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="axisTick") }}






{{target: partial-axis-common-split-line}}

#${prefix} splitLine(Object)
The splitLine of coordinate axis in [grid](~grid) area defaults to show.

##${prefix} show(boolean) = ${defaultShow|default(true)}

Specify whether to show the splitLine.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="axis splitLine",
    componentType=${componentType}
) }}
##${prefix} lineStyle(Object)
{{ /if }}

{{ use: partial-line-style(prefix='##' + ${prefix}, defaultColor="'#333'", defaultWidth=1, defaultType="'solid'", name="splitLine") }}

<!-- overwrite color -->
###${prefix} color(Array|string) = ['#ccc']
The color of the splitLine, which could be set as single color. 

The splitLines color could also be set as color array, from which the split lines would circularly set their colors according to the color order in the array. 


example
```
splitLine: {
    lineStyle: {
        // adopt interval color between deep and light
        color: ['#aaa', '#ddd']
    }
}
```





{{target: partial-axis-common-split-area}}

#${prefix} splitArea(Object)

The split area of coordinate axis in [grid](~grid) area defaults not to show.



{{ if: ${hasLabelInterval|default(true)} }}
##${prefix} interval(number|Function) = 'auto'
{{ use: partial-axis-interval(
    name="splitArea of coordinate axis",
    componentType=${componentType}
) }}
{{ /if }}

##${prefix} show(boolean) = ${defaultShow|default(true)}
specify whether to show the splitArea.
##${prefix} areaStyle(Object)

The style settings about split area

###${prefix} color(Array) = ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
The color of split area. 
The color of split area would circularly set their colors according to the color order in the array, which defaults to adopt a interval color between the deep and light one.

{{ use:partial-style-shadow-opacity(prefix='##' + ${prefix}) }}



{{target: axis-common}}

#${prefix} type(string) = ${axisTypeDefault|default('value')}

Type of axis

Option: 
+ `'value'`
    numerical axis, suitable for continuous data.

+ `'category'`
    category axis, suitable for discrete category data, only can set category data through [data](~${componentType}.data). 

+ `'time'`
    timeaxis, suitable for continuous time series data, has a feature of time formatting  and a different tick calculation method when compared with numerical axis.For instance, it would decide to adopt month, week, day or hour to be the tick unit in terms of the range of span.  

+ `'log'`
    log axis,suitable for log data.

{{ if: ${componentType} !== 'angleAxis' }}
#${prefix} name(string)

The name of coordinate axis.

#${prefix} nameLocation(string) = 'start'

The name's location of coordinate axis.

**Option: **
+ `'start'`
+ `'middle'`
+ `'end'`

#${prefix} nameTextStyle(Object)

The text style of the name for coordinate axis.

{{use: partial-text-style(prefix='#' + ${prefix}, name="the name of coordinate axis")}}

#${prefix} nameGap(number) = 15

The distance between the name of coordinate axis and axis line. 

#${prefix} inverse(boolean) = false

Specify whether it is inverse coordinate axis. New option in ECharts 3. 

{{/if}}

#${prefix} boundaryGap(boolean|Array)
The boundary gap on both sides of the coordinate axis. The setting and performance of category axis and non-category axis are different.

The `boundaryGap` of category axis can be allocated as `true` and `false`, which defauts to be allocated as `true`.  Meanwhile,  [axisTick](~${componentType}.axisTick)can be used only as splitline. Both the label and data marker exist on the band between 2 [axis tick](~${componentType}.axisTick). 

non-category axis includes time, numerical value, log axis. `boundaryGap` is an array consisting of 2 values which individually refer to the span range between the maximun and minimum value. The value and the percentage can be directly set. `boundaryGap` is not available after the [min](~${componentType}.min) and [max](~${componentType}.max) being set. **example: **
```js
boundaryGap: ['20%', '20%']
```

#${prefix} min(number|string) = 'auto'

The minimun value of axistick is unavailable in category axis. 

It can be set as particular value `'dataMin'`. Meanwhile, the minmum value in this axis is fetched as the minmun tick.

#${prefix} max(number|string) = 'auto'

The maximum value of axistick is unavailable in category axis. 

It can be set as particular value `'dataMax'`. Meanwhile, the maximum value in this axis is fetched as the maximum tick.

without a particular setting, the maximum value would be caculated automatically to make sure the uniform distribution of axis ticks.

#${prefix} scale(boolean) = false

It is available only in numerical axis（[type](~${componentType}.type): 'value'）. 

specify whether to get rid of 0 value porpotion. As it is set as `true`, the axis tick would not compulsorily contains 0 scale, which is more useful in the scatter diagram of double-numerical axis.

This configuration item is unavailable as the [min](~${componentType}.min) and [max](~${componentType}.max) are set.

#${prefix} splitNumber(number) = 5

SplitNumber. It should be noticed that this splitNumber is just a predicted value. The finally displayed split number results from the adjustment based on the readability of axis tick which is shown after being segmented.   
unavailable in category axis.

#${prefix} interval(number)

The segmented interval of coordinate axis. 

As [splitNumber](~${componentType}.splitNumber)  is a predicted value, the scale caculated through pratical strategy may not achieve the desired effect. Under such condition, interval can be set with [min](~${componentType}.min), [max](~${componentType}.max) to compulsorily divide the scale, which is generally not recommended.   

Unavailable in category axis. The timestamp need to be transmitted in timeaxis（[type](~${componentType}.type): 'time'）, and the index value need to be transmitted in logaxis.（[type](~${componentType}.type): 'log'）.

{{ use: partial-axis-common-axis-line(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ use: partial-axis-common-axis-tick(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ use: partial-axis-common-axis-label(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ if: ${hasSplitLineAndArea} }}

{{ use: partial-axis-common-split-line(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ use: partial-axis-common-split-area(
    prefix=${prefix},
    componentType=${componentType}
) }}

{{ /if }}



#${prefix} data(Array)

Category data, available in category axis（[type](~${componentType}.type): 'category'）.

Example: 

```js
//Name list of all categories
data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// Each item could also be a specific configuration item. Under this condition, `value` in the configuration should be adopted as the category name 
data: [{
    value: 'Monday',
    // highlight Monday
    textStyle: {
        fontSize: 20,
        color: 'red'
    }
}, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
```

##${prefix} value(string)

Single category name

##${prefix} textStyle(Object)

Text style of the category label.

{{ use:partial-text-style(
    prefix='##' + ${prefix},
    hasAlign=true,
    hasBaseline=true
) }}


The display interval of {{ target: partial-axis-interval }}
${name}, available in category axis.{{ if: !${isAxisLabel} }} defaults to be the same as [axisLabel.interval](~${componentType}.axisLabel.interval).{{ /if }}

It defaults to adopt strategic interval to show the labels in case labels repeat, which could be set as 0 to compulsorily display all the labels.

The interval data not only could be presented by numerical value, but also could be controled through callback function.The format of callback function is shown as follow: 
```js
(index:number, value: string) => boolean
```
The first parameter is the index of category, and the second value is the name of the category. If it is skipped, it would be back to `false`.






{{target: axis-common-formatter-desc}}

The formatter of axi stick label, supporting both string template and callback fuction.

Example:
```js
//using string template, the template variable is the default label of axistick  {value}
formatter: '{value} kg'

// using callback function template, function parameters are individually
formatter: function (value, index) {
    // formatting to be Month/day, the particular year display only in the first scale
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (idx === 0) {
        texts.unshift(date.getYear());
    }
    return texts.join('/');
}
```