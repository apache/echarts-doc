{{ target: aria }}

# Supporting ARIA in Charts

The W3C has developed the [WAI-ARIA](https://www.w3.org/WAI/intro/aria), the Accessible Rich Internet Applications Suite, which is dedicated to making web content and web applications accessible. Apache ECharts<sup>TM</sup> 4 complies with this specification by supporting the automatic generation of intelligent descriptions based on chart configuration items, allowing blind people to understand the chart content with the help of a reading device, making the chart accessible to a wider audience.

By default, ARIA is disabled. To enable it, you should set [aria.enabled](~aria.enabled) to be `true`. After enabling, it will generate descriptions based on charts, series, data, and so on. Users may change the generated description.

**For example:**

For config:

```ts
option = {
    aria: {
        show: true
    },
    title: {
        text: 'Source of user access to a site',
        x: 'center'
    },
    series: [
        {
             Name: 'access source',
            type: 'pie',
            data: [
                { value: 335, name: 'direct access' },
                { value: 310, name: 'mail marketing' },
                { value: 234, name: 'union ad' },
                { value: 135, name: 'video ad' },
                { value: 1548, name: 'search engine' }
            ]
        }
    ]
};
```

~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)

There should be an `aria-label` attribute on the chart DOM, which can help the disabled understand the content of charts with the help of certain devices. The value of the label is:

```
This is a chart of "Source of user access to a site." The chart type is a pie chart that indicates the source of the visit. The data is - direct access data is 335, mail marketing data is 310, union ad data is 234, video ad data is 135, search engine data is 1548.
```

The default language is in defined by the language package (Chinese by default), but you can configure it with templates.


In addition, Apache ECharts 5 now supports applique textures as a secondary expression of color to further differentiate data. If `aria.enabled` is set to `true`, `aria.decal.show` is set to `true` to adopt the default applique style.

~[700x300](${galleryViewPath}doc-example/aria-decal-simple&edit=1&reset=1)


Next, let's describe more specifically how these two accessible designs can be configured.

## Chart Labels

### Apply Overall Modification Description

For some charts, the default generated descriptions of the data points are not sufficient to represent the overall information. For example, in the scatter plot below, the default description can include the coordinates of the data points, but knowing the coordinates of hundreds or thousands of points does not help us to effectively understand the information presented in the chart.

![600xauto](~aria-example.png)

At this point, the user can specify the overall description of the chart via the [aria.label.description](option.html#aria.label.description) configuration item.

### Customizing the Template Description

In addition to modifying descriptions holistically, we also provide templates for generating descriptions that can be easily modified at a fine-grained level.

The basic flow for generating descriptions is that if [aria.label.description](option.html#aria.label.show) is set to `true`, then the accessibility description is generated, otherwise it is not. If [aria.label.description](option.html#aria.label.description) is defined, it is used as the full description of the chart, otherwise the description is generated according to the template stitching. We provide a default algorithm for generating descriptions, and only if the generated descriptions are not quite right, we need to modify these templates, or even override them completely with `aria.description`.

When using the template, whether [title.text](~title.text) is used along with [aria.label.general.withTitle](option.html#aria.label.general.withTitle) while [aria.label.general.withoutTitle](option.html#aria.label.general.withoutTitle) is used if there is no title text. `aria.general.withTitle` supports a template `'{title}'`, which will be replaced with chart title. This means, if `aria.general.withTitle` is set to be `'The chart title is {title}.'` and the chart title is `Price Distribution`, it will be interpreted into `'The chart title is Price Distribution.'`

After generating the title, the description of the series ([aria.label.series](option.html#aria.label.series)) and the description of the data for each series ([aria.label.data](option.html#aria.label.data)) are generated in turn. The following is an example of a template. Likewise, each template may include template variables to replace actual values.

## Decal Pattern

The way to use the default applique pattern was described above. If you need to customize the decal pattern, you can use [aria.decal.decals](option.html#aria.decal.decals) to configure a flexible decal pattern.

~[700x300](${galleryViewPath}doc-example/aria-decal&edit=1&reset=1)

Please refer to [ARIA option](option.html#aria) for more detail.
