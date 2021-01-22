{{target: whats-new-in-echarts-v5}}

# New Features in ECharts 5

Data visualization has come a long way in the last few years. Developers no longer expect visualization products to be simple chart creation tools, but have more advanced needs in terms of interaction, performance, data processing, and more.

Apache ECharts has always been committed to making it easier for developers to create flexible and rich visualizations. In the latest release of Apache ECharts 5, we have focused on enhancing the narrative capabilities of charts, allowing developers to tell the story behind the data in a simpler way.

! [Apache ECharts 5](~echarts-5.png)

"The core of Apache ECharts 5 is "table-delivery", which is a comprehensive upgrade of five modules and fifteen features around the narrative expression ability of visualization works, so that the chart "table" can better convey the story behind the data. It helps developers to create visualizations that meet the needs of various scenarios more easily.



## Dynamic Narrative

The importance of animation to human cognition cannot be overstated. In our previous work, we used initialization animations and transition animations to help users understand the connection between data transformations, making the appearance of charts and transformations seem less rigid. This time, we have even enhanced our animation narrative capabilities, even more significantly. We hope to further exploit the role of animation to help users' cognition, and help them understand the story behind the chart more easily with the dynamic narrative function of the chart.

#### Dynamic Sorting Charts

Apache ECharts 5 adds support for dynamically sorted bar-racing and dynamically sorted line-racing charts to help developers easily create time-series charts that show how data changes over time and tell the evolution of the data.

~[700x300](${galleryViewPath}bar-race&edit=1&reset=1)

~[700x400](${galleryViewPath}line-race&edit=1&reset=1)

The dynamic sorting graph shows how the data changes, allowing the user to understand how the data evolves gradually over time. And developers can achieve such effect with Apache ECharts by simply configuring items.

#### Custom Series Animation

In addition to dynamic sorting charts, Apache ECharts 5 provides even richer and more powerful animation effects in the custom series, supporting interpolation animations for label value text, transition animations for morph, combine, and separate effects of graphs.

Imagine what amazing visualizations you can create with these dynamic effects!



## Visual Design

The role of visual design is not only to make the chart look better, but more importantly, a design that conforms to the principles of visualization can help users understand what the chart is trying to say more quickly and eliminate as many misunderstandings as possible from poor design.

#### Default Design

We have found that a large percentage of developers use ECharts' default theme style, so it is important to design an elegant, visual default theme. In Apache ECharts 5, we redesigned the default theme style, optimizing it for different families and components. The theme colors, for example, take into account factors such as differentiation between colors, contrast with background colors, and harmony with adjacent colors, and ensure that people with color vision impairments can clearly distinguish data.

For scenarios that require further high contrast, we provide additional high contrast theme styles, so developers can easily provide special styles for people who need special help.

#### labels

Labels are one of the core elements of a chart, and clear and unambiguous labels help users to have a more accurate understanding of the data. Apache ECharts 5 provides a variety of new labeling features that allow dense labels to be clearly displayed and accurately represented.

By default, Apache ECharts 5 will automatically hide overlapping labels. Labels that are outside the display area are automatically truncated or line wrapped. Dense pie chart labels now have a more aesthetically pleasing automatic layout.

These features can help avoid too dense text affecting readability. Also, no additional code needs to be written by the developer for this to take effect by default, greatly simplifying development costs for developers.

We also provide several configuration options to allow developers to actively control the layout strategy of tabs, such as tab dragging, displaying them as a whole at the edge of the canvas, connecting them with guide lines and graphic elements, and still linking to highlight to express the association.

#### Timeline

Apache ECharts 5 brings a timeline suitable for expressing timestamp scales. The default design of the timeline highlights important information and provides more flexible customization capabilities, allowing developers to tailor the timeline's label content to different needs.

First of all, the timeline is no longer split absolutely evenly as before, but instead selects more meaningful points like year, month, day, and whole point to display, and can show different levels of scales at the same time. The `formatter` of labels supports templates for time (e.g. `{yyyy}-{MM}-{dd}`), and different `formatter`s can be specified for labels with different time granularity, which can be combined with existing rich text labels to create eye-catching and diverse time effects.

#### Tooltips

Tooltip is one of the most commonly used visualization components to help users interactively understand the details of data. In Apache ECharts 5, we have optimized the style of the tooltip box to provide a visualization-compliant design for different chart families. And the rendering logic of rich text has been improved to ensure that the display is consistent with the HTML way, allowing users to choose different technical solutions to achieve the same effect in different scenarios.

#### Gauge

We have seen many cool gauge charts created by community users, but the way they are configured is often complex and tricky. Therefore, we have upgraded the gauge to support image or vector path drawing pointers, anchor configurations, progress bars, rounded corner effects, and more.

These upgrades not only allow developers to achieve cool effects with simpler configuration items, but also bring richer customization capabilities.

~[600x600](${galleryViewPath}gauge-clock&edit=1&reset=1)


#### Scalloped rounded corners

Apache ECharts 5 supports scalloped rounded corners for pie charts, sunburst charts, and rectangular tree charts. Don't underestimate the simplicity of the rounded corners configuration, but combine them with other effects to create a more personalized visualization.

~[400x400](${galleryViewPath}sunburst-borderRadius&edit=1&reset=1)



## Interactivity

The interactive capabilities of the visual artwork help users to explore and understand the artwork and deepen their understanding of the main idea of the chart.

#### State Management

In ECharts 4, there are two interactive states, highlight and normal, which will enter the highlight state when the mouse moves over the graph to distinguish the data.

This time in Apache ECharts 5, we have added a new effect of **fade out** other non-related elements to the original mouse hover highlighting, so that the target data can be focused.

For example, in this [bar chart](https://echarts.apache.org/examples/zh/editor.html?c=bar-y-category-stack) example, when the mouse hovers over a series, the other non-related series will fade out, so that you can more clearly highlight the contrast of the data in the focused series. On diagrams with more complex data structures such as relationship, tree, sunburst, sankey, etc., it is also possible to see the connections between data by fading out non-related elements. Also, colors, shadows, and other styles that can be set in highlighting (emphasis) can now be set in blur.

In addition, we've added **click to select** to all series, an interaction that was previously only available in a few series such as pie charts and maps, allowing developers to set it to single or multiple selection mode, and to listen to the `selectchanged` event to get all the selected shapes for further processing. As with highlighting and fading, the selection style can also be configured in `select`.

#### Performance Improvements

Apache ECharts 5 now supports dirty rectangle rendering to address performance bottlenecks in scenarios with only local changes. And the rendering performance of line graphs has been further optimized.

When using the Canvas renderer, the dirty rectangle rendering technique detects and updates only the parts of the view that have changed, rather than causing a complete redraw of the canvas with any change. This can help improve rendering frame rates in special scenarios, such as scenes where the mouse frequently triggers some graphical highlighting during graphical many times. Previously for such scenes, additional Canvas layers were used to optimize performance, but this approach had unsolvable bugs for translucent scenes. dirty rectangle rendering is perfect for both performance and functional correctness.

Line graphs with large amounts of data are a more common drawing scenario, such as various real-time timing data. Apache ECharts 5 optimizes CPU consumption, memory usage, and initialization time for these scenarios so that million-dollar data can be updated in tens of milliseconds with several times less memory usage than before, and interactions such as tooltip boxes remain frame-free.



## Development Experience

We hope that such a powerful visualization tool can be used by more developers in an easier way, so the developer experience is also a very important aspect for us.

#### datasets

ECharts 5 enhances the data transformation capabilities of datasets, allowing developers to implement common data manipulations such as filtering, sorting, aggregating, histogram, simple clustering, regression line calculation, etc. in a simple way. regression), etc. Developers can use these functions in a uniform and declarative way, and can easily implement common data operations.

#### Internationalization

The original internationalization scheme of ECharts takes the form of different deployment files packaged according to different language parameters. In this way, the dynamic language and static code package are bound together, and the only way to switch languages is to reload different language versions of ECharts code when using it.

Therefore, starting with Apache ECharts 5, the dynamic language package is separated from the static code package. To switch languages, you only need to load the corresponding language package, use the `registerLocale` function to mount the language package object in a similar way to mount the theme, and then reinitialize it to complete the language switch.

```js
// import the lang object and set when init
echarts.registerLocale('EN', lang).
echarts.init(DomElement, null, {
   locale: 'EN'
});
```

#### TypeScript Refactoring

In the past 8 years, Apache ECharts has grown into a very complex visualization library. In order to continue to refactor and develop new features more safely and efficiently, we started the development of Apache ECharts 5 by rewriting the code using TypeScript. The strong typing that TypeScript brings gives us the confidence to refactor the code in a radical way to implement more exciting features during ECharts 5 development.

For developers, we can also generate better and more code-compliant `DTS` type description files directly from TypeScript code. Until now, ECharts type description files have been maintained by community developers and published to [DefinityTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/echarts ), which is a lot of work, so thanks for your contribution.

In addition, if a developer's component is introduced on-demand, we provide a `ComposeOption` type method that can combine a configuration item type that contains only the introduced components, which can bring stricter type checking and help you detect unintroduced component types in advance.




## Accessibility

Apache ECharts has always taken accessibility design seriously, and we want to make the information conveyed by charts equally accessible to the visually impaired. We also want to make this possible for chart developers at a very low development cost, thus making developers more willing to support the visually impaired.

In the last major release, we supported automatic one-click intelligent generation of chart descriptions based on different chart types and data, making it very easy for developers to support DOM description information for charts. In ECharts 5, we have also made more accessibility improvements to help people with visual impairments better understand the chart content.

#### Theme color scheme

When we designed the new default theme style, we took accessibility design as an important consideration and repeatedly tested the color brightness and color values to help users with visual impairment to clearly identify the chart data.

Moreover, for developers with further accessibility needs, we also provide special high-contrast themes to further differentiate the data with higher contrast color themes.

#### Decal Patterns

ECharts 5 also provides a new feature of decals to help users further differentiate data by using patterns to assist with color representation.

~[700x400](${galleryViewPath}doc-example/aria-decal-simple&edit=1&reset=1)

In addition, decal patterns can help in some other scenarios, such as: helping to better distinguish data in printed materials like newspapers and books that have only a single color or very few colors; using graphical elements to facilitate a more intuitive understanding of the data by the user.

~[700x400](${galleryViewPath}doc-example/aria-decal&edit=1&reset=1)



## Summary

In addition to the features described above, Apache ECharts has been improved in a very large number of details to help developers more easily create charts that work well by default, are flexible in configuration, and tell the story behind the data with charts.

Thank you to all the developers who have used ECharts, and even participated in community contributions, for making Apache ECharts 5 possible. We'll be working on future developments with even more enthusiasm, and we'll see you all in 6 with even more enthusiasm!
