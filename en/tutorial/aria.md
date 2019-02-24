{{ target: aria }}

# Supporting ARIA in Charts

W3C defined the Accessible Rich Internet Applications Suite ([WAI-ARIA](https://www.w3.org/WAI/intro/aria)) to make Web content and Web applications more accessible to the disabled. From ECharts 4.0, we support ARIA by generating description for charts automatically.

By default, ARIA is disabled. To enable it, you should set [aria.show](~aria.show) to be `true`. After enabling, it will generate descriptions based on charts, series, data, and so on. Users may change the generated description.

**For example:**

For config:

```js
option = {
    aria: {
        show: true
    },
    title: {
        text: '某站点用户访问来源',
        x: 'center'
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ]
        }
    ]
};
```

~[700x300](${galleryViewPath}doc-example/aria-pie&edit=1&reset=1)

There should be an `aria-label` attribute on the chart DOM, which can help the disabled understand the content of charts with the help of certain devices. The value of the label is:

```
这是一个关于“某站点用户访问来源”的图表。图表类型是饼图，表示访问来源。其数据是——直接访问的数据是335，邮件营销的数据是310，联盟广告的数据是234，视频广告的数据是135，搜索引擎的数据是1548。
```

The default language is in Chinese, but you can configure it with templates.

Please refer to [ARIA option](option.html#aria) for more detail.
