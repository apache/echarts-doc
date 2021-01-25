{{target: whats-new-in-echarts-v5}}

# New features in ECharts 5

Data visualization has come a long way in the last few years. Developers no longer expect visualization products to be simple chart creation tools, but have more advanced needs in terms of interaction, performance, data processing, and more.

Apache ECharts has always been committed to making it easier for developers to create flexible and rich visualizations. In the latest release of Apache ECharts 5, we have focused on enhancing the storytelling of charts, allowing developers to tell the story behind the data in a simpler way.

<img src="documents/asset/img/feature-v5/echarts-5-en.png" width="800px" />

"The core of Apache ECharts 5 is "Show, do not tell", which is a comprehensive upgrade of five topics and 15 features around the stroy telling of visualizations, allowing charts to better tell the story behind the data. It helps developers to create visualizations that meet the needs of various scenarios more easily.



## Storytelling

The importance of animation to human cognition cannot be overstated. In our previous work, we used initialization animations and transition animations to help users understand the connection between data transformations, making the appearance of charts and transformations seem less rigid. This time, we have even enhanced our animation capabilities, even more significantly. We hope to further exploit the role of animation to help users' cognition, and help them understand the story behind the chart more easily with the dynamic stroy function of the chart.

#### Bar/Line Racing

Apache ECharts 5 adds support for dynamically sorted bar-racing and dynamically sorted line-racing charts to help developers easily create time-series charts that show changes in data over time and tell the evolution of data.

~[700x400](${galleryViewPath}bar-race-country&edit=1&reset=1)

~[700x400](${galleryViewPath}line-race&edit=1&reset=1)

The dynamic sorting chart shows the derivation of different categories in the ranking over time. The developer can enable this effect in ECharts with a few simple configuration code.

#### Custom Series Animation

In addition to dynamic sorting charts, Apache ECharts 5 provides even richer and more powerful animations in the custom series, supporting interpolation animations for label value text, transition animations for morph, combine, separate, and other effects of graphics.

Imagine what amazing visualizations you can create with these dynamic effects!


## Visual Design

The role of visual design is not only to make the chart look better, but more importantly, a design that conforms to the principles of visualization can help users understand more quickly what the chart is trying to say and eliminate as much misunderstanding as possible from poor design.

#### Overall Design

We have found that a large percentage of developers use the default theme style for ECharts, so it is important to have an elegant default theme design. In Apache ECharts 5, we redesigned the default theme style, optimizing it for different charts and components. For example, we took into account factors such as differentiation between colors, contrast with background colors, and harmony with adjacent colors, and ensured that people with color blindness could clearly distinguish data.

<img src="documents/asset/img/feature-v5/theme-color.png" width="400px" />

Let's look at the new version of the light and dark theme styles using the most commonly used bar chart as an example.

<img src="documents/asset/img/feature-v5/new-theme-light.png" width="500px" />
<img src="documents/asset/img/feature-v5/new-theme-dark.png" width="500px" />

For the data area zoom, timeline and other interactive components, we also designed a new style and provide a better interactive experience: <img src="documents/asset/img/feature/v5/new-theme-dark.png

<img src="documents/asset/img/feature-v5/dataZoom.png" width="500px" />

<img src="documents/asset/img/feature-v5/timeline.png" width="500px" />

#### Label

Labels are one of the core elements of a chart, and clear and unambiguous labels help users to have a more accurate understanding of the data. Apache ECharts 5 provides a variety of new labeling features that allow dense labels to be clearly displayed and accurately represented.

Apache ECharts 5 can be enabled to automatically hide overlapping labels through a configuration item. For labels that exceed the display area, you can choose to automatically truncate or line break them. Dense pie chart labels now have a more aesthetically pleasing automatic layout.

These features can help avoid text that is too dense and affects readability. And, no additional code needs to be written by the developer for them to take effect by default, greatly simplifying the development cost for developers.

We also provide several configuration options to allow developers to actively control the layout strategy of tabs, such as tab dragging, overall display at the edge of the canvas, connecting with guide lines and graphical elements, and still linking to highlight the associated relationships.

The new label feature allows you to have very clear label presentation even in a confined space mobile:

<img src="documents/asset/img/feature-v5/pie-label.png" height="150px" />
<img src="documents/asset/img/feature-v5/pie-label-2.png" height="150px" />

#### Time Axis

Apache ECharts 5 brings a time axis suitable for expressing timestamp scales. The default design of the time axis highlights important information more prominently and provides more flexible customization capabilities, allowing developers to tailor the time axis's label content to different needs.

First of all, the time axis is no longer split absolutely evenly as before, but instead selects more meaningful points like year, month, day, and whole point to display, and can show different levels of scales at the same time. The `formatter` of labels supports templates for time (e.g. `{yyyy}-{MM}-{dd}`), and different `formatter` can be specified for labels with different time granularity, which can be combined with rich text labels to create eye-catching and diverse time effects.

The display of the time scale at different dataZoom granularities.

<img src="documents/asset/img/feature-v5/time-axis.png" width="600px" />

<img src="documents/asset/img/feature-v5/time-axis-2.png" width="600px" />

#### Tooltip

Tooltip is one of the most commonly used visualization components to help users interactively understand the details of data. In Apache ECharts 5, we have optimized the style of the tooltip, making the default display of the tooltip elegant and clear by adjusting the font style, color, arrow pointing to the graph, border color following the graph color, and other features. The rendering logic of rich text has been improved to ensure that the display is consistent with the HTML way, allowing users to choose different technical solutions to achieve the same effect in different scenarios.

<img src="documents/asset/img/feature-v5/new-tooltip.png" height="200px" />
<img src="documents/asset/img/feature-v5/new-tooltip-2.png" height="200px" />

In addition to this, we have also added the ability to sort the list in the tip box by value size or category order this time.

#### Gauge

We have seen a lot of cool gauge charts created by community users, but the way they are configured is often complex and tricky. Therefore, we have upgraded the gauge to support image or vector path drawing pointers, anchor configurations, progress bars, rounded corner effects, and more.

Different styles of gauge pointers.

<img src="documents/asset/img/feature-v5/gauge-pointer.png" width="600px" />


These upgrades not only allow developers to achieve cool effects with simpler configuration items, but also bring richer customization capabilities.

~[600x600](${galleryViewPath}gauge-clock&edit=1&reset=1)

#### Round Corner

Apache ECharts 5 supports round corner for pie charts, sunburst charts, and treemap charts. Don't underestimate the simplicity of the rounded corners configuration, but combine them with other effects to create a more personalized visualization.

~[400x400](${galleryViewPath}sunburst-borderRadius&edit=1&reset=1)


## Interactivity

The interactivity of the visualization helps users explore the work and deepen their understanding of the main idea of the diagram.

#### Multi-State

In ECharts 4, there were two interactive states, `emphasis` and `normal`, graph will enter the `emphasis` state when the mouse hovered to distinguish the data.

This time in Apache ECharts 5, we have added a new effect of **blur** other non-related elements to the original mouse hover highlighting, so that the target data can be focused.

For example, in this [bar chart](https://echarts.apache.org/examples/zh/editor.html?c=bar-y-category-stack) example, when the mouse hovers over a series, other non-related series will fade out, thus highlighting more clearly the comparison of data in the focused series. of data in the comparison. On diagrams with more complex data structures such as relationship, tree, sunburst, sankey, etc., it is also possible to see the connections between data by fading out non-related elements. Also, colors, shadows, and other styles that can be set in `emphasis` can now be set in `blur`.

In addition, we've added **click to select** to all series, an interaction that was previously only available in a few series such as pie charts and maps, allowing developers to set it to single or multiple selection mode, and to listen to the `selectchanged` event to get all the selected shapes for further processing. As with `emphasis` and `blur`, the selection style can also be configured in `select`.

#### Performance improvements

##### Dirty Rectangle Rendering

Apache ECharts 5 has new support for dirty rectangle rendering to address performance bottlenecks in large scenes with only local changes. When using the Canvas renderer, the dirty rectangle rendering technique detects and updates only the parts of the view that have changed, rather than any changes causing a complete redraw of the canvas. This can help improve rendering frame rates in some special scenarios, such as scenes where the mouse frequently triggers some graphical highlighting many times. In the past for such scenes, additional Canvas layers were used to optimize performance, but this approach is not universal for all scenes and does not work well for complex styles. Dirty Rectangle rendering does a good job of satisfying both performance and display correctness.

A visual demonstration of a dirty rectangle, with the red boxed area redrawn for the frame.

<img src="documents/asset/img/feature-v5/dirty-rect.gif" width="500px" />

You can see the effect by enable dirty rectangle optimization on the new example page.

##### Line Chart Performance Optimization for Real-Time Time-Series Data

In addition, the performance of line graphs with large amounts of data has also seen a significant performance improvement. We often encounter the need for high-performance plotting of large amounts of real-time time-series data, which will be updated every hundreds or tens of milliseconds.

Apache ECharts 5 deeply optimizes CPU consumption, memory usage, and initialization time in these scenarios, enabling real-time updates (less than 30ms per update) for millions of data, and even rendering within 1s for ten millions of data, with low memory usage and smooth tooltip interactions.

## Development Experience

We want such a powerful visualization tool to be used by more developers in a simpler way, so the developer experience is also a very important aspect for us.

#### Datasets

ECharts 5 enhances the data transformation capabilities of datasets, allowing developers to implement common data processing such as filtering, sorting, aggregating, histogram, simple clustering, regression, etc. in a simple way. Developers can use these functions in a uniform and declarative way, and can easily implement common data operations.

#### Internationalization

The original internationalization implementation of ECharts takes the form of different distribution files packaged according to different language parameters. In this way, the dynamic language and main code are bound together, and the only way to switch languages when using ECharts is to reload different language versions of ECharts distributions.

Therefore, starting with Apache ECharts 5, the dynamic language is separated from the main code. To switch languages, you only need to load the corresponding language, use the `registerLocale` function to mount the language object in a similar way to mount the theme, and then reinitialize it to complete the language switch.

```js
// import the lang object and set when init
echarts.registerLocale('DE', lang).
echarts.init(DomElement, null, {
   locale: 'DE'
});
```

#### TypeScript Refactoring

In order to continue to refactor and develop new features more safely and efficiently, we started the development of Apache ECharts 5 by rewriting the code using TypeScript. The strong typing brought by TypeScript gave us the confidence to refactor the code drastically to achieve more exciting features during the development of ECharts 5.

For developers, we can also generate better and more code-compliant `DTS` type description files directly from TypeScript code. Until now, ECharts type description files have been maintained by community developers and published to [DefinityTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/echarts ), which is a lot of work, so thanks for your contribution.

In addition, if a developer's component is introduced on-demand, we provide a `ComposeOption` type method that can combine a configuration item type that contains only the introduced components, which can bring stricter type checking and help you detect unintroduced component types in advance.




## Accessibility

Apache ECharts has always taken accessibility design seriously, and we want to make the information conveyed by charts equally to be accessed. We also want to make this possible for chart developers at a very low development cost, thus making developers more willing to support the accessibility.

In the last major release, we supported automatic intelligent generation of chart descriptions based on different chart types and data, making it very easy for developers to support DOM description information for charts. In ECharts 5, we have also made more accessibility improvements to help people with visual impairments better understand the chart content.

#### Theme Colors

We took accessibility into account when designing the new default theme, and we repeatedly tested the brightness and color values of the colors to help accessibility users clearly identify the chart data.

Moreover, for developers with further accessibility needs, we also provide special high-contrast themes to further differentiate the data with higher contrast colors.

#### Decal Patterns

ECharts 5 also provides a new feature of decals to help users further differentiate data by using patterns to assist with color representation.

~[600x350](${galleryViewPath}doc-example/aria-decal-simple&edit=1&reset=1)

In addition, decal patterns can also help in some other scenarios, such as: helping to better distinguish data in printed materials like newspapers and books that have only a single color or very few colors; using graphical elements to facilitate a more intuitive understanding of the data by the user.

~[600x350](${galleryViewPath}doc-example/aria-decal-newspaper&edit=1&reset=1)



## Summary

In addition to the features described above, Apache ECharts has been improved in a very large number of details to help developers more easily create charts that good by default, are flexible in configuration, and tell the story behind the data with charts.

Thank you to all the developers who have used ECharts, and even participated in community contributions, for making Apache ECharts 5 possible. We'll be working on future developments with even more enthusiasm, and we'll see you all in 6 with even more enthusiasm!
