
{{ target: component-aria }}

# aria(*)

The W3C has developed the [WAI-ARIA](https://www.w3.org/WAI/intro/aria), the Accessible Rich Internet Applications Suite, which is dedicated to making web content and web applications accessible. Apache ECharts 4 complies with this specification by supporting the automatic generation of intelligent descriptions based on chart configuration items, allowing blind people to understand the chart content with the help of a reading device, making the chart accessible to a wider audience. In addition, Apache ECharts 5 adds support for applique textures as an auxiliary expression of color to further differentiate the data.

It is turned off by default and needs to be turned on by setting [aria.enabled](~aria.enabled) to `true`.

## enabled(boolean) = false

Whether or not aria is turned on. If not, the `label` or `decal` effect is not applied.

## label(Object)

If [aria.enabled](~aria.enabled) is set to `true`, `label` is enabled by default. When enabled, the description of the chart will be automatically and intelligently generated based on the chart, data, title, etc. Users can also modify the description through the configuration item.

**Example:**

```ts
option = {
    aria: {
        // The following lines can be omitted because label.enabled defaults to true.
        // label: {
        // enabled: true
        // },
        enabled: true
    },
    title: {
        text: 'User access sources for a site',
        x: 'center'
    },
    series: [
        {
            name: 'access source',
            type: 'pie',
            data: [
                { value: 335, name: 'Direct Access' },
                { value: 310, name: 'Email Marketing' },
                { value: 234, name: 'Affiliate Ads' },
                { value: 135, name: 'Video Ads' },
                { value: 1548, name: 'Search Engine' }
            ]
        }
    ]
};
```

~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)

On the generated chart DOM, there is an `aria-label` attribute that allows the blind to understand the chart with the help of a reading device. Its value is.

> This is a chart of "Source of user access to a site." The chart type is a pie chart that indicates the source of the visit. The data is - direct access data is 335, mail marketing data is 310, union ad data is 234, video ad data is 135, search engine data is 1548.

The basic process for generating the description is that if [aria.enabled](~aria.enabled) is set to `true` (not the default) and [aria.label.enabled](~aria.label.enabled) is set to `true` (the default), then the accessibility description is generated. Otherwise it is not generated. If [aria.label.description](~aria.label.description) is defined, it is used as the full description of the chart, otherwise the description is generated according to the template stitching. We provide a default algorithm for generating descriptions, and only if the generated descriptions are not quite right, you need to modify these templates, or even override them completely with `aria.label.description`.

When using the template, whether [title.text](~title.text) is used along with [aria.label.general.withTitle](option.html#aria.label.general.withTitle) while [aria.label.general.withoutTitle](option.html#aria.label.general.withoutTitle) is used if there is no title text. `aria.general.withTitle` supports a template `'{title}'`, which will be replaced with chart title. This means, if `aria.general.withTitle` is set to be `'The chart title is {title}.'` and the chart title is `Price Distribution`, it will be interpreted into `'The chart title is Price Distribution.'`

After generating the title, the description of the series ([aria.label.series](option.html#aria.label.series)) and the description of the data for each series ([aria.label.data](option.html#aria.label.data)) are generated in turn. The following is an example of a template. Likewise, each template may include template variables to replace actual values.

The complete description generation process is:

![800xauto](~echarts-aria.jpg)

### enabled(boolean) = true

Whether or not to enable label generation for accessibility. When enabled, the attribute `aria-label` will be generated.

### description(string) = null

By default, an algorithm is used to automatically generate a chart description, but if you want to fully customize it, you can set this value to a description. If it is set to `'This is a chart showing price changes'`, then the value of the `aria-label` attribute of the chart DOM is this string.

This configuration item is often used to display text that specifies a general description of the chart, when displaying individual data does not show the contents of the chart. For example, if the chart is a map with a large number of scattered points, the default algorithm can only show the locations of the data points and cannot convey the author's intent as a whole. In this case, you can specify `description` as what the author wants to say.

### general(Object)

For the overall description of the chart.

#### withTitle(string) = 'This is a chart about "{title}".'

If the chart exists [title.text](~title.text), then `withTitle` is used. This includes the template variable.

- `{title}`: will be replaced with [title.text](~title.text) of the chart.

#### withoutTitle(string) = 'This is a chart,'

If the chart does not have [title.text](~title.text), then `withoutTitle` is used.

### series(Object)

series-related configuration items.

#### maxCount(number) = 10

The maximum number of series in the description.

#### single(Object)

The description used when the chart contains only one series.

##### prefix(string) = ''

Holistic descriptions for all series are shown before each series description. This includes template variables.

- `{seriesCount}`: will be replaced with the number of series, where it is always 1.

##### withName(string) = ' with type {seriesType} named {seriesName}.'

This description is used if the series has the `name` attribute. This includes the template variable.

- `{seriesName}`: will be replaced with `name` of the series.
- `{seriesType}`: the name of the type that will be replaced with the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

##### withoutName(string) = ' with type {seriesType}.'

This description is used if the series has no `name` attribute. This includes the template variable.

- `{seriesType}`: the name of the type that will be replaced with the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

#### multiple(Object)

Description to use when the chart contains only multiple series.

##### prefix(string) = '. It consists of {seriesCount} series count.'

A holistic description for all series is displayed before each series description. This includes the template variable.

- `{seriesCount}`: will be replaced with the number of series.

##### withName(string) = ' The {seriesId} series is a {seriesType} representing {seriesName}.

This description is used if the series has the `name` attribute. This includes the template variable.

- `{seriesName}`: will be replaced with `name` of the series.
- `{seriesType}`: the name of the type that will be replaced with the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

##### withoutName(string) = ' The {seriesId} series is a {seriesType}.'

This description is used if the series has no `name` attribute. This includes the template variable.

- `{seriesType}`: the name of the type that will be replaced with the name of the series, e.g. `'Bar chart'`, `'Line chart'`, etc.

##### separator(Object)

The separator between the series and the description of the series.

###### middle(string) = ';'

Except for the separator after the last series.

###### end(string) = '.'

Delimiter after the last series.

### data(Object)

Data-related configuration items.

#### maxCount(number) = 10

The maximum number of data occurrences per series in the description.

#### allData(string) = 'whose data is --'

Description to be used when all data is displayed. This item **doesn't** make all the data displayed. It can be achieved by setting [aria.data.maxCount](~aria.data.maxCount) to `Number.MAX_VALUE`.

#### partialData(string) = 'where the first {displayCnt} term is --'

Descriptions used when only partial data is displayed. This includes template variables.

- `{displayCnt}`: the number of data that will be replaced with the number of displays.

#### withName(string) = 'The data for {name} is {value}'

This description is used if the data has the `name` attribute. This includes the template variable.

- `{name}`: `name` that will be replaced with the data.
- `{value}`: the value that will be replaced with the data.

#### withoutName(string) = '{value}'

This description is used if the data does not have the `name` attribute. This includes the template variable.

- `{value}`: the value that will be replaced with the data.

#### separator(Object)

The separator between data and data description.

##### middle(string) = ','

The delimiter of the data except the last one.

##### end(string) = ''

The delimiter after the last data.

Note that usually the last series is followed by the series `separator.end`, so `data.separator.end` is an empty string in most cases.

## decal(Object)

Decal patterns are added to series data as an additional hint other than colors to help differentiate the data. It is easy to enabled the default decal patterns by enabling it:

```
aria: {
    enabled: true,
    decal: {
        show: true
    }
}
```

~[700x300](${galleryViewPath}doc-example/aria-decal-simple&edit=1&reset=1)

Most series types are supported, including: `'line'`, `'bar'`, `'pie'`, `'radar'`, `'treemap'`, `'sunburst'`, `'boxplot'`, `'sankey'`, `'funnel'`, `'gauge'`, `'pictorialBar'`, `'themeRiver'`, `'custom'` and so on. Among them, some series have no filling color by default (such as `'line'`, `'radar'`, `'boxplot'`), which take effect only if the `'areaStyle'` is set.

### show(boolean) = false

Whether or not to display the decal pattern is not shown by default. If you want to display the applique, you need to make sure [aria.enabled](~aria.enabled) and `aria.decal.show` are both `true`.

### decals(Object|Array)

The style of the decal pattern. If it is an `Object` type, it means all data will have the same style, if it is an array, then each item in the array will have one style and the data will be looped through the array in order.

{{ use: partial-decal(
    prefix = "###"
) }}

