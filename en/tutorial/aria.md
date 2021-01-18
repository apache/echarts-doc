{{ target: aria }}

# Supporting ARIA in Charts

W3C defined the Accessible Rich Internet Applications Suite ([WAI-ARIA](https://www.w3.org/WAI/intro/aria)) to make Web content and Web applications more accessible to the disabled. From Apache ECharts<sup>TM</sup> 4.0, we support ARIA by generating description for charts automatically.

By default, ARIA is disabled. To enable it, you should set [aria.show](~aria.show) to be `true`. After enabling, it will generate descriptions based on charts, series, data, and so on. Users may change the generated description.

**For example:**

For config:

```js
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

The default language is in Chinese, but you can configure it with templates.

Please refer to [ARIA option](option.html#aria) for more detail.

