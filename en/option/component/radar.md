{{target: component-radar}}

# radar(Object)

Radar chart coordinate system component, only suitable for [radar chart](~series-radar). This component is equal to the polar component in ECharts 2. Because the polar in the echarts 3 is reconstructed to be the standard polar coordinate system component, in order to avoid mixing up, radar chart adopts radar component as its coordinate system. 

Compared with polar coordinate system, every axis（indicator） of the radar chart coordinate system is a individual dimension. The style of indicator coordinate axis could be allocated through the following configuration items, including [name](~radar.name)、[axisLine](~radar.axisLine)、[axisTick](~radar.axisTick)、[axisLabel](~radar.axisLabel)、[splitLine](~radar.splitLine)、 [splitArea](~radar.splitArea).


Here is a custom example of radar component.

~[400x400](${galleryViewPath}doc-example/radar&edit=1&reset=1)

{{use: component-circular-layout(
    defaultRadius="75%",
    defaultRadiusType="number|string"
)}}

## startAngle(number) = 90

The start angle of coordinate system, which is the angle of the first indicator axis.

## name(Object)

The configuration items of every indicator's name in radar chart.

### show(boolean) = true

Specify whether to show the indicator's name.

### formatter(string|Function)

The formatter of showing indicator's name, in which the string and callback function are valid. See the following example: 

```js
// using string template, the template variable should be the indicator's name {value}
formatter: '【{value}】'
// using callback function, the first parameter is the indicator's name, and the second parameter id the indicator's cinfiguration item 
formatter: function (value, indicator) {
    return '【' + value + '】';
}
```

## nameGap(number) = 15

the distance between the indicator's name and axis.

### textStyle(Object)
{{ use: partial-text-style(
    prefix='###',
    defaultColor="'#333'"
)}}

### splitNumber(number) = 5

the split number of indicator axis.

### shape(string) = 'polygon'

The categories of radar chart drawing, in which the `'polygon'` and `'circle'` is valid.

### scale(boolean) = false

Specifies whether to get rid of the propotion of 0. with the setting of `true`, the coordinate tick would not compulsorily contains zero tick, which is more useful in scatter diagram of double numerical values axis. 

{{ use: partial-axis-common-axis-line(
    prefix="#"
)}}

{{ use: partial-axis-common-axis-tick(
    prefix="#",
    defaultShow=false,
    hasLabelInterval=false
)}}

{{ use: partial-axis-common-axis-label(
    prefix="#",
    defaultShow=false,
    hasLabelInterval=false
)}}

{{ use: partial-axis-common-split-line(
    prefix="#",
    hasLabelInterval=false
)}}

{{ use: partial-axis-common-split-area(
    prefix="#",
    hasLabelInterval=false
)}}

## indicator(Array)

the indicator of radar chart, which refers to multiple variables(dimensions) in radar chart. Here is the example. 

```js
indicator: [
   { name: 'sales（sales）', max: 6500},
   { name: 'administration（Administration）', max: 16000},
   { name: 'Information Techology（Information Techology）', max: 30000},
   { name: 'Customer Support（Customer Support）', max: 38000},
   { name: 'Development（Development）', max: 52000},
   { name: 'Marketing（Marketing）', max: 25000}
]
```

### name(string)

Indicator's name.

### max(number)

The maximum of indicator, optional, recommond to set 

### min(number)

The minimum of indicator, optional, default to be 0.



