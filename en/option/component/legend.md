{{target: component-legend}}

# legend(Object)

Legend component.

Legend component shows symbol, color and name of different series. You can click legends to toggle displaying series in the chart.

In ECharts 3, a single echarts instance may contain multiple legend components, which makes it easier for the layout of multiple legend components.

## show(boolean) = true

{{use: partial-rect-layout-width-height(componentName="legend")}}

## orient(string) = 'horizontal'

The layout orientation of legend.

Options:
+ 'horizontal'
+ 'vertical'

## align(string) = 'auto'

Legend mrker and text aligning. By default, it automatically calculates from component location and orient. When [left](~legend.left) value of this component is 'right', and the vertical layout ([orient](~legend.orient) is 'vertical'), it would be aligned to 'right'.

Option:
+ 'auto'
+ 'left'
+ 'right'

## padding(number) = 5

{{ use: partial-padding(componentName="legend")}}

## itemGap(number) = 10

The distance between each legend, horizontal distance in horizontal layout, and vertical distance in vertical layout.

## itemWidth(number) = 25

Image width of legend symbol.

## itemHeight(number) = 14

Image height of legend symbol.

## formatter(string|Function) = null

Formatter is used to format label of legend, which supports string template and callback function.

Example:
```js
// using string template, the template variable is legend name {name}
formatter: 'Legend {name}'
// using callback function
formatter: function (name) {
    return 'Legend ' + name;
}
```

## selectedMode(string|boolean) = true

Selected mode of legend, which controls whether series can be toggled displaying by clicking legends. It is enabled by default, and you may set it to be `false` to disabled it.

Besides, it can be set to `'single'` or `'multiple'`, for single selection and multiple selection.

## inactiveColor(Color) = '#ccc'

Legend color when not selected.

## selected(Object)

State table of selected legend.

example:
```
selected: {
    // selected'series 1'
    'series 1': true,
    // unselected'series 2'
    'series 2': false
}
```

## textStyle(Object)

Legend text style.

{{ use: partial-text-style(componentName='legend', prefix='##') }}

## tooltip(Object)

Tooltip configuration for legend tooltip, which is similar to [tooltip](http://localhost/echarts-doc/public/option.html#tooltip).

## data(Array)

Data array of legend. An array item is usually a `name` representing string. (If it is a [pie chart](~series-pie), it could also be the `name` of a single data in the pie chart) of a series. Legend component would automatically calculate the color and icon according to series. Special string `''` (null string) or `'\n'` (new line string) can be used for a new line.

If you need to set the style for a single item, you may also set the configuration of it. In this case, `name` attribute is used to represent name of `series`.

Example:
```
data: [{
    name: 'series 1',
    // compulsorily set icon as a circle
    icon: 'circle',
    // set up the text in red
    textStyle: {
        color: 'red'
    }
}]
```

### name(string)
Name of legend, which should be the `name` value of a certain series. If it is a pie chart, legend name can also be the name of a single data item.

### icon(string)

Icon of the legend.

{{ use: partial-icon }}

### textStyle(Object)

Text style of legend.

{{ use: partial-component-common-style(
    componentName='legend', prefix='#', defaultBorderColor="'#ccc'"
) }}
