The display interval of {{ target: component-axis3D-common-axis-interval }}
${name} is valid in the category axis. {{ if: !${isAxisLabel} }} Defaults to the same as [axisLabel.interval](~${componentType}.axisLabel.interval). {{ /if }}

By default, `interval` is automatically calculated to ensure a good display.

It can be set to 0 to force all labels to be displayed.

If the value is `1`, it means "displays a label every other label". If the value is `2`, it means "displays a label between two labels", and so on.

The interval data can be represented by a numerical value or by a callback function. The format of the callback function is as follows:

```ts
(index:number, value: string) => boolean
```

The first parameter is the index of the class, the second value is the name of the class, and if it is skipped, it returns `false`.

{{target: component-axis3D-common-formatter-desc}}

The content formatter for tick labels. Supports both string templates and callback functions.

Example:
```ts
// Use string template; template variable is the default label of axis {value}
formatter: '{value} kg'

// Use callback function; function parameters are axis index
formatter: function (value, index) {
    // Formatted to be month/day; display year only in the first label
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    if (index === 0) {
        texts.unshift(date.getFullYear());
    }
    return texts.join('/');
}
```



{{ target: component-axis3D-common-axisLine }}

#${prefix|default('#')} axisLine(Object)
Settings related to axis line.
##${prefix|default('#')} show(boolean) = ${defaultShow|default(true)}
Set this to be `false` to prevent the axis line from showing.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix|default('#')} interval(number|Function) = 'auto'
{{ use: component-axis3D-common-axis-interval(
    name="axis scale label",
    isAxisLabel=true,
    componentType=${componentType}
) }}
{{ /if }}

##${prefix|default('#')} lineStyle(Object)
{{ use: partial-line-style(prefix='##' + ${prefix|default('#')}, defaultColor="'#333'", defaultWidth=2, name="axisLine") }}




{{ target: component-axis3D-common-axisLabel }}

#${prefix|default('#')} axisLabel(Object)
Settings related to axis label.
##${prefix|default('#')} show(boolean) = ${defaultShow|default(true)}
Set this to be `false` to prevent the axis label from appearing.

##${prefix|default('#')} margin(number) = 8
The margin between the axis label and the axis line.

**Note：** This distance is three-dimensional space, not screen space.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix|default('#')} interval(number|Function) = 'auto'
{{ use: component-axis3D-common-axis-interval(
    name="axis scale label",
    isAxisLabel=true,
    componentType=${componentType}
) }}
{{ /if }}

##${prefix|default('#')} formatter(string|Function) = null
{{use: axis-common-formatter-desc}}


##${prefix|default('#')} textStyle(Object)
{{ use: partial-text-style(
    prefix='##' + ${prefix|default('#')},
    defaultColor="'#333'"
)}}
<!-- Overwrite color -->
###${prefix|default('#')} color(Color|Function)

Color of axis label is set to be [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default. Callback function is supported, in the following format:

```ts
(val: string) => Color
```
Parameter is the text of label, and return value is the color. See the following example:

```ts
textStyle: {
    color: function (value, index) {
        return value >= 0 ? 'green' : 'red';
    }
}
```


{{ target: component-axis3D-common-axisTick }}

#${prefix|default('#')} axisTick(Object)
Settings related to axis tick.
##${prefix|default('#')} show(boolean) = ${defaultShow|default(true)}
Set this to be `false` to prevent the axis tick from showing.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix|default('#')} interval(number|Function) = 'auto'
{{ use: component-axis3D-common-axis-interval(
    name="axis scale label",
    componentType=${componentType}
) }}
{{ /if }}

##${prefix|default('#')} length(number) = 5
The length of the axis tick.

##${prefix|default('#')} lineStyle(Object)
{{ use: partial-line-style(prefix='##' + ${prefix|default('#')}, defaultColor="'#333'", defaultWidth=1, name="axisLine") }}
<!-- Overwrite color -->
###${prefix|default('#')} color(Color)

Color of axis label is set to be [axisLine.lineStyle.color](~${componentType}.axisLine.lineStyle.color) by default.


{{ target: component-axis3D-common-splitLine }}

#${prefix|default('#')} splitLine(Object)
Settings related to axis line.
##${prefix|default('#')} show(boolean) = ${defaultShow|default(true)}
Set this to be `false` to prevent the axis line from showing.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix|default('#')} interval(number|Function) = 'auto'
{{ use: component-axis3D-common-axis-interval(
    name="axis scale label",
    isAxisLabel=true,
    componentType=${componentType}
) }}
{{ /if }}

##${prefix|default('#')} lineStyle(Object)
{{ use: partial-line-style(prefix='##' + ${prefix|default('#')}, defaultColor="'#333'", defaultWidth=2, name="axisLine") }}



{{ target: component-axis3D-common-splitArea }}

#${prefix|default('#')} splitArea(Object)

Split area of axis in [grid](~grid) area.

##${prefix|default('#')} show(boolean) = ${defaultShow|default(false)}
Set this to be `true` to show the splitArea.

{{ if: ${hasLabelInterval|default(true)} }}
##${prefix|default('#')} interval(number|Function) = 'auto'
{{ use: component-axis3D-common-axis-interval(
    name="Axis splitArea",
    componentType=${componentType}
) }}
{{ /if }}

##${prefix|default('#')} areaStyle(Object)
Split area style.
###${prefix|default('#')} color(Array) = ['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)']
Color of the split area.
The split area color could also be set in color array, which the split lines would take as their colors in turns. Dark and light colors in turns are used by default.
{{ use:partial-style-shadow-opacity(prefix='##' + ${prefix|default('#')}) }}




{{ target: component-axis3D-common-axisPointer }}

#${prefix|default('#')} axisPointer(Object)

Configurations for axis pointer.

##${prefix|default('#')} show(boolean) = ${defaultShow|default(true)}

Whether to display the axisPointer. Set this to be `true` to show the splitArea.

##${prefix|default('#')} lineStyle(Object)

{{ use: partial-line-style(prefix='##' + ${prefix|default('#')}, defaultColor="'rgba(0, 0, 0, 0.8)'", defaultWidth=1, name="axisPointer") }}

##${prefix|default('#')} label(Object)

The label of axisPointer.

###${prefix|default('#')} show(boolean) = true

Whether to display the label of axisPointer. Value axes are displayed by default, while category axes are not.

###${prefix|default('#')} formatter(Function)
The formatter of the label. . The first parameter to the function is the value of the current axis. The second parameter to the function is an array of values for all axes.

```ts
(value: number, valueAll: Array) => string
```

###${prefix|default('#')} margin(number)
Distance between label and axis.
Like the scale label, this distance is a 3D space rather than a screen pixel.

###${prefix|default('#')} textStyle(Object)

{{ use: partial-text-style(
    prefix='###' + ${prefix|default('#')},
    defaultFontSize=16
)}}




{{ target: component-axis3D-common }}

{{ use: component-axis3D-common-axisLine(
    prefix=${prefix|default('#')}
) }}

{{ use: component-axis3D-common-axisLabel(
    prefix=${prefix|default('#')}
) }}

{{ use: component-axis3D-common-axisTick(
    prefix=${prefix|default('#')}
) }}

{{ use: component-axis3D-common-splitLine(
    prefix=${prefix|default('#')}
) }}

{{ use: component-axis3D-common-splitArea(
    prefix=${prefix|default('#')}
) }}

{{ use: component-axis3D-common-axisPointer(
    prefix=${prefix|default('#')}
) }}
