{{ target: aria }}

# 在图表中支持无障碍访问

W3C 制定了无障碍富互联网应用规范集（[WAI-ARIA](https://www.w3.org/WAI/intro/aria)，the Accessible Rich Internet Applications Suite），致力于使得网页内容和网页应用能够被更多残障人士访问。Apache ECharts<sup>TM</sup> 4.0 遵从这一规范，支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。

默认关闭，需要通过将 [aria.enabled](option.html#aria.enabled) 设置为 `true` 开启。开启后，会根据图表、数据、标题等情况，自动智能生成关于图表的描述，用户也可以通过配置项修改描述。

对于配置项：

```ts
option = {
    aria: {
        enabled: true
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

生成的图表 DOM 上，会有一个 `aria-label` 属性，在朗读设备的帮助下，盲人能够了解图表的内容。其值为：

```
这是一个关于“某站点用户访问来源”的图表。图表类型是饼图，表示访问来源。其数据是——直接访问的数据是335，邮件营销的数据是310，联盟广告的数据是234，视频广告的数据是135，搜索引擎的数据是1548。
```

默认语言会根据语言包（默认中文）选择，也可以使用配置项自定义模板。

除此之外，Apache ECharts 5 新增支持贴花纹理，作为颜色的辅助表达，进一步用以区分数据。在 `aria.enabled` 为 `true` 的前提下，将 `aria.decal.show` 设为 `true` 即可采用默认的贴花样式。

~[700x300](${galleryViewPath}doc-example/aria-decal-simple&edit=1&reset=1)

下面，我们更具体地介绍这两种无障碍设计的配置方式。

## 图表描述

#### 采用整体描述

对于有些图表，默认生成的数据点的描述并不足以表现整体的信息。比如下图的散点图，默认生成的描述可以包含数据点的坐标值，但是知道几百几千个点的坐标并不能帮助我们有效地理解图表表达的信息。

![600xauto](~aria-example.png)

这时候，用户可以通过 [aria.label.description](option.html#aria.label.description) 配置项指定图表的整体描述。

#### 定制模板描述

除了整体性修改描述之外，我们还提供了生成描述的模板，可以方便地进行细粒度的修改。

生成描述的基本流程为，如果 [aria.label.show](option.html#aria.label.show) 设置为 `true`，则生成无障碍访问描述，否则不生成。如果定义了 [aria.label.description](option.html#aria.label.description)，则将其作为图表的完整描述，否则根据模板拼接生成描述。我们提供了默认的生成描述的算法，仅当生成的描述不太合适时，才需要修改这些模板，甚至使用 `aria.description` 完全覆盖。

使用模板拼接时，先根据是否存在标题 [title.text](~title.text) 决定使用 [aria.label.general.withTitle](option.html#aria.label.general.withTitle) 还是 [aria.label.general.withoutTitle](option.html#aria.label.general.withoutTitle) 作为整体性描述。其中，`aria.general.withTitle` 配置项包括模板变量 `'{title}'`，将会被替换成图表标题。也就是说，如果 `aria.general.withTitle` 被设置为 `'图表的标题是：{title}。'`，则如果包含标题 `'价格分布图'`，这部分的描述为 `'图表的标题是：价格分布图。'`。

拼接完标题之后，会依次拼接系列的描述（[aria.label.series](option.html#aria.label.series)），和每个系列的数据的描述（[aria.label.data](option.html#aria.label.data)）。同样，每个模板都有可能包括模板变量，用以替换实际的值。


## 贴花图案

上文介绍了使用默认的贴花图案的方式。如果需要自定义贴花图案，可以使用 [aria.decal.decals](option.html#aria.decal.decals) 配置出灵活多变的图案。

~[700x300](${galleryViewPath}doc-example/aria-decal&edit=1&reset=1)

更具体的信息请参见 [ARIA 文档](option.html#aria)。
