{{target: component-legend}}

# legend(Object)

Legend component.

Legend component shows the symbol(symbol),  color and name of different series. You can click legend to specify which serise could not be shown. 

In a single echarts instance of ECharts 3, multiple legend components could exist at the same time, which would be convinient for the layout of multiple legend components.

## show(boolean) = true

{{use: partial-rect-layout-width-height(componentName="legend")}}

## orient(string) = 'horizontal'

The layout orientation of legend. 

Option：
+ 'horizontal'
+ 'vertical'

## align(string) = 'auto'

Legend mrker and text aligning. It defaults to align automatically, which is decided by the component location and orient. as the [left](~legend.left) value of this component is 'right' , and the vertical layout（[orient](~legend.orient) is  'vertical'）, it would be right align,'right'.

Option：
+ 'auto'
+ 'left'
+ 'right'

## padding(number) = 5

{{ use: partial-padding(componentName="legend")}}

## itemGap(number) = 10

The interval between each legend. There is  horizontal interval in horizontal layout, while vertical layout in vertical layout.

## itemWidth(number) = 25

Image width of legend symbol.

## itemHeight(number) = 14

Image height of legend symbol.

## formatter(string|Function) = null

Content formatter of legend text, which supports string template and callback function.

Example：
```js
// using string template, the template variable is legend name {name}
formatter: 'Legend {name}'
// using callback function
formatter: function (name) {
    return 'Legend ' + name;
}
```

## selectedMode(string|boolean) = true

Selected mode of legend, defaulting to be set as turning on legend select. And it could be set as `false` turning off.

Beyond that, it could be set also as  `'single'` or `'multiple'` which refer to single selection and multiple selection.

## selected(Object)

State table of selected legend.

example：
```
selected: {
    // selected'series 1'
    'series 1': true,
    // unselected'series 2'
    'series 2': false
}
```

## textStyle(Object)

Public text style of legend.

{{ use: partial-text-style(componentName='legend', prefix='##') }}

## data(Array)

Data array of legend. An array item is usually a string and every item represents the `name`（if it is[pie chart](~series-pie), it would also be the `name` of a single data in the pie chart） of a series . Legend component would automatically acquire the color of the corresponding series. As the automatically drawn color and symbol, special string `''`（null string）or `'\n'` (line feed string), diagram symbol（symbol）is used in lind feedof legend.

If you want to set the style of a single item, this item could be written as the object to the configuration item. At this time, you must use the `name`  property to correspond with the `name` of series.   

Example
```
data: [{
    name: 'series 1',
    // compulsorily set the image as a circle
    icon: 'circle',
    // set up the text in red
    textStyle: {
        color: 'red'
    }
}]
```

### name(string)
Name of legend item, corresponding with the `name`of series（if it was pie diagram, it could be the `name` of singel data in the pie diagram）.

### icon(string)

 icon of the legend item

{{ use: partial-icon }}

### textStyle(Object)

Text style of legend item

{{ use: partial-component-common-style(componentName='legend', prefix='#', defaultBorderColor="'#ccc'") }}
