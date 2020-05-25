{{target: component-radar}}

# radar(Object)

Coordinate for [radar charts](~series-radar). This component is equal to the polar component in ECharts 2. Because the polar component in the echarts 3 is reconstructed to be the standard polar coordinate component, this component is renamed to be radar to avoid confusion.

Radar chart coordinate is different from polar coordinate, in that every axis indicator of the radar chart coordinate is an individual dimension. The style of indicator coordinate axis could be configured through the following configuration items, including [name](~radar.name), [axisLine](~radar.axisLine), [axisTick](~radar.axisTick), [axisLabel](~radar.axisLabel), [splitLine](~radar.splitLine), [splitArea](~radar.splitArea).


Here is a custom example of radar component.

~[400x400](${galleryViewPath}doc-example/radar&edit=1&reset=1)

{{use: partial-component-id(prefix="#")}}

{{use: component-circular-layout(
    defaultRadius="75%"
)}}

## startAngle(number) = 90

The start angle of coordinate, which is the angle of the first indicator axis.

## name(Object)

Name of radar chart.

### show(boolean) = true

Whether to display the indicator's name.

### formatter(string|Function)

The formatter of indicator's name, in which the string and callback function are supported. See the following example:

```js
// using string template, the template variable should be the indicator's name {value}
formatter: '【{value}】'
// using callback function, the first parameter is the indicator's name, and the second parameter id the indicator's cinfiguration item
formatter: function (value, indicator) {
    return '【' + value + '】';
}
```

{{ use: partial-text-style(
    prefix='##',
    defaultColor="'#333'",
    noAlign=true,
    noVerticalAlign=true
)}}

## nameGap(number) = 15

Distance between the indicator's name and axis.

## axisType(string) = 'value'
{{ use: partial-version(version = "4.5.0") }}
{{ use: partial-axis-type-content() }}

## splitNumber(number) = 5

Segments of indicator axis.

## shape(string) = 'polygon'

Radar render type, in which `'polygon'` and `'circle'` are supported.

## scale(boolean) = false

Whether to prevent calculating the scaling relative to zero. If it is set to be `true`, the coordinate tick would not compulsorily contain zero value, which is usually useful in scatter diagram of double numerical values axis.

{{ use: partial-axis-common-axis-line(
    prefix="#"
)}}

{{ use: partial-axis-common-axis-tick(
    prefix="#",
    hasLabelInterval=false,
    hasAlignWithLabel=false,
    hasInside=false
) }}

{{ use: partial-axis-common-axis-label(
    prefix="#",
    hasLabelInterval=false,
    hasInside=false
) }}

{{ use: partial-axis-common-split-line(
    prefix="#",
    hasLabelInterval=false
)}}

{{ use: partial-axis-common-split-area(
    prefix="#",
    hasLabelInterval=false,
    defaultShow=true
)}}

## indicator(Array)

Indicator of radar chart, which is used to assign multiple variables(dimensions) in radar chart. Here is the example.

```js
indicator: [
   { name: 'Sales (sales) ', max: 6500},
   { name: 'Administration (Administration) ', max: 16000, color: 'red'}, // Set the indicator as 'red'
   { name: 'Information Technology (Information Technology) ', max: 30000},
   { name: 'Customer Support (Customer Support) ', max: 38000},
   { name: 'Development (Development) ', max: 52000},
   { name: 'Marketing (Marketing) ', max: 25000}
]
```

### name(string)

Indicator's name.

### max(number)

The maximum value of indicator. It is an optional configuration, but we recommend to set it manually.

### min(number)

The minimum value of indicator. It it an optional configuration, with default value of 0.

## color(string)

Specfy a color the the indicator.