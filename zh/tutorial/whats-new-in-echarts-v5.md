{{target: whats-new-in-echarts-v5}}


# ECharts 5 新特性

<a href="https://echarts-5-live.bj.bcebos.com/echarts-5-event.html?ref=ec-tutorial" target="_blank">
   <picture>
      <source type="image/webp" srcset="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/event/20200128-apache-echarts-5.webp" />
      <source type="image/png" srcset="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/event/20200128-apache-echarts-5.png" />
      <img width="700px" src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/event/20200128-apache-echarts-5.png" />
   </picture>
</a>

数据可视化在过去的几年中得到了长足的发展。开发者对于可视化产品的期待不再是简单的图表创建工具，而在交互、性能、数据处理等方面有了更高级的需求。

Apache ECharts 始终致力于让开发者以更方便的方式创造灵活丰富的可视化作品。在最新推出的 Apache ECharts 5，我们着力加强了图表的叙事能力，让开发者可以以更简单的方式，讲述数据背后的故事。

<img src="documents/asset/img/feature-v5/echarts-5.png" width="800px" />

“表·达”是 Apache ECharts 5 的核心，通过五大模块、十五项特性的全面升级，围绕可视化作品的叙事表达能力，让图“表”更能传“达”数据背后的故事，帮助开发者更轻松地创造满足各种场景需求的可视化作品。



## 动态叙事

动画对于人类认知的重要性不言而喻。在之前的作品中，我们会通过初始化动画和过渡动画帮助用户理解数据变换之间的联系，让图表的出现和变换显得不那么生硬。这次，我们更是大幅度增强了我们的动画叙事能力，。希望能够进一步发挥动画对于用户认知的帮助作用，借助图表的动态叙事功能，帮助用户更容易理解图表背后表达的故事。

#### 动态排序图

Apache ECharts 5 新增支持动态排序柱状图（bar-racing）以及动态排序折线图（line-racing），帮助开发者方便地创建带有时序性的图表，展现数据随着时间维度上的变化，讲述数据的演变过程。

~[700x400](${galleryViewPath}bar-race-country&edit=1&reset=1)

~[700x400](${galleryViewPath}line-race&edit=1&reset=1)

动态排序图展现了不同的类目随着时间在排名上的衍变。而开发者只需要通过几行简单的配置项就可以在 ECharts 中开启这样的效果。

#### 自定义系列动画

除了动态排序图，Apache ECharts 5 在自定义系列中提供了更加丰富强大的动画效果，支持标签数值文本的插值动画，图形的形变（morph）、分裂（separate）、合并（combine）等效果的过渡动画。

想象一下，用这些动态效果，你可以创造出多么令人称奇的可视化作品！


## 视觉设计

视觉设计的作用并不仅仅是为了让图表更好看，更重要的是，符合可视化原理的设计可以帮用户更快速地理解图表想表达的内容，并且尽可能消除不良设计带来的误解。

#### 默认设计

我们发现，有很大一部分开发者使用了 ECharts 默认的主题样式，因而设计优雅、符合可视化原理的默认主题设计是非常重要的。在 Apache ECharts 5 中，我们重新设计了默认的主题样式，针对不同的系列和组件分别做了优化调整。以主题色为例，我们考量了颜色之间的区分度、与背景色的对比度、相邻颜色的和谐度等因素，并且确保色觉辨识障碍人士也能清楚地区分数据。

<img src="documents/asset/img/feature-v5/theme-color.png" width="400px" />

我们以最常用的柱状图为例，来看看新版本浅色主题和深色主题的样式：

<img src="documents/asset/img/feature-v5/new-theme-light.png" width="500px" />
<img src="documents/asset/img/feature-v5/new-theme-dark.png" width="500px" />

对于数据区域缩放，时间轴等交互组件，我们也设计了全新的样式并且提供了更好的交互体验：

<img src="documents/asset/img/feature-v5/dataZoom.png" width="500px" />

<img src="documents/asset/img/feature-v5/timeline.png" width="500px" />

#### 标签

标签是图表中的核心元素之一，清晰而明确的标签可以帮助用户对数据有更准确的理解。Apache ECharts 5 提供了多种新的标签功能，让密集的标签能清晰显示、准确表意。

Apache ECharts 5 可以通过一个配置项开启自动隐藏重叠的标签。对于超出显示区域的标签，可以选择自动截断或者换行。密集的饼图标签，现在有了更美观的自动排布。

这些功能可以帮助避免文字过于密集影响可读性。并且，无需开发者编写额外的代码就能默认生效，大大简化了开发者的开发成本。

我们也提供了多个配置项来让开发者主动控制标签的布局策略，例如标签拖动、整体显示在画布边缘，用引导线和图形元素连接，并且仍可联动高亮表达关联关系。

新的标签功能可以让你在移动端这样局限的空间内也可以有很优雅的标签展示：

<img src="documents/asset/img/feature-v5/pie-label.png" height="150px" />
<img src="documents/asset/img/feature-v5/pie-label-2.png" height="150px" />

#### 时间轴

Apache ECharts 5 带来了适于表达时间标签刻度的时间轴。时间轴的默认设计更突出重要的信息，并且提供了更灵活的定制化能力，让开发者根据不同的需求定制时间轴的标签内容。

首先，时间轴不再如之前般绝对平均分割，而是选取年、月、日、整点这类更有意义的点来展示，并且能同时显示不同层级的刻度。标签的 `formatter` 支持了时间模版（例如 `{yyyy}-{MM}-{dd}`），并且可以为不同时间粒度的标签指定不同的 `formatter`，结合已有的富文本标签，可以定制出醒目而多样的时间效果。

不同的 dataZoom 粒度下时间刻度的显示：

<img src="documents/asset/img/feature-v5/time-axis.png" width="600px" />

<img src="documents/asset/img/feature-v5/time-axis-2.png" width="600px" />

#### 提示框

提示框（Tooltip）是一种最常用的可视化组件，可以帮助用户交互式地了解数据的详细信息。在 Apache ECharts 5 中，我们对提示框的样式进行了优化，通过对字体样式，颜色的调整，指向图形的箭头，跟随图形颜色的边框色等功能，让提示框的默认展示优雅又清晰。并且改进了富文本的渲染逻辑，确保显示效果与 HTML 方式一致，让用户在不同场景下可以选择不同的技术方案实现同样的效果。

<img src="documents/asset/img/feature-v5/new-tooltip.png" height="200px" />
<img src="documents/asset/img/feature-v5/new-tooltip-2.png" height="200px" />

除此之外，我们这次也加上了提示框内的列表按照数值大小或者类目顺序排序的功能。

#### 仪表盘

我们看到社区用户创建了很多酷炫的仪表盘图表，但是他们的配置方式往往比较复杂而取巧。因此，我们对仪表盘的功能作了全面升级，支持了图片或者矢量路径绘制指针、也支持了锚点（anchor）配置项、进度条（progress）、圆角效果等等配置项。

不同样式的仪表盘指针：

<img src="documents/asset/img/feature-v5/gauge-pointer.png" width="600px" />


这些升级，不仅可以让开发者用更简单的配置项实现酷炫的效果，而且带来了更丰富的定制能力。

~[600x600](${galleryViewPath}gauge-clock&edit=1&reset=1)

#### 扇形圆角

圆角可以带来更美观而柔和的视觉，也能够赋予更多的创造力。Apache ECharts 5 支持了饼图、旭日图、矩形树图的扇形圆角。可不要小看了简单的圆角配置项，合理地搭配其他的效果，就可以形成更具个性的的可视化作品。

~[400x400](${galleryViewPath}sunburst-borderRadius&edit=1&reset=1)



## 交互能力

可视化作品的交互能力帮助用户探索了解作品，加深对于图表主旨的理解。

#### 状态管理

在 ECharts 4 中有高亮（emphasis）和普通（normal）两个交互的状态，在鼠标移到图形上的时候会进入高亮状态以区分该数据，开发者可以分别设置这两个状态的颜色，阴影等样式。

这次在 Apache ECharts 5 中，我们在原先的鼠标 hover 高亮的基础上，新增加了**淡出**其它非相关元素的效果，从而可以达到聚焦目标数据的目的。

比如在这个[柱状图](https://echarts.apache.org/examples/zh/editor.html?c=bar-y-category-stack)的例子中，鼠标移到一个系列上的时候，其它非相关的系列就会淡出，从而可以更清晰的突出聚焦系列中数据的对比。在关系图，树图，旭日图，桑基等更复杂数据结构的图上，也可以通过淡出非相关元素来观察数据之间的联系。而且颜色，阴影等在高亮（emphasis）中可以设置的样式，现在也可以在淡出（blur）状态中设置了。

除此之外，我们为所有系列还添加了**点击选中**这个之前只有在饼图、地图等少数系列中才能开启的交互，开发者可以设置为单选或多选模式，并且通过监听 `selectchanged` 事件获取到选中的所有图形然后进行更进一步的处理。与高亮和淡出一样，选中的样式也可以在 `select` 中配置。

#### 性能提升

##### 脏矩形渲染

Apache ECharts 5 新支持了脏矩形渲染，解决只有局部变化的场景下的性能瓶颈。在使用 Canvas 渲染器时，脏矩形渲染技术探测并只更新视图变化的部分，而不是任何变动都引起画布完全重绘。这能在一些特殊场景下帮助提高渲染帧率，例如在图形很多时候，鼠标频繁触发一些图形高亮的场景。以往这类场景，会使用额外的 Canvas 层以优化性能，但是这种方式不是所有场景都通用，而且对于复杂的样式的效果并不理想。脏矩形渲染很好地同时满足了性能和显示正确。

脏矩形的可视化演示，红色框选部分为该帧重绘区域：

<img src="documents/asset/img/feature-v5/dirty-rect.gif" width="500px" />

大家在新的示例页面选择开启脏矩形优化就可以看到该效果。

##### 实时时序数据的折线图性能优化

除此之外，海量数据下折线图的性能也有了大幅度的性能提升。我们经常碰到大量的实时时序数据的高性能绘制的需求，这些数据可能需要几百或者几十毫秒更新一次。

Apache ECharts 5 对这些场景下的 CPU 消耗、内存占用、初始化时间都进行了深度的优化，使得百万量级的数据也能做到实时的更新（每次更新耗时少于 30ms），甚至对于千万级的数据，也可以在 1s 内渲染完，并且保持很小的内存占用以及流畅的提示框（tooltip）等交互。

## 开发体验

我们希望如此强大的可视化工具可以被更多开发者以更简单的方式使用，因而开发者的开发体验也是我们非常关注的方面。

#### 数据集

ECharts 5 加强了数据集的数据转换能力，让开发者可以使用简单的方式实现常用的数据处理，如：数据过滤（filter）、排序（sort）、聚合（aggregate）、直方图（histogram）、简单聚类（clustering）、回归线计算（regression）等。开发者可以用统一的声明式方式来使用这些功能，可以方便地实现常用的数据操作。

#### 国际化

ECharts 原有的国际化方案，采用的是根据不同的语言参数打包出不同的部署文件的形式。​这种方式，使动态的语言和静态的代码包绑定在一起，使用的时候只能通过重新加载不同语言版本的 ECharts 代码来达到切换语言的目的。

因此，从 Apache ECharts 5 开始，动态的语言包和静态的代码包分离开。切换语言的时候，只需要加载相应语言包​，通过类似挂载主题的方式，使用 `registerLocale` 函数挂载语言包对象​，重新初始化后就完成了语言的切换​。

```js
// import the lang object and set when init​
echarts.registerLocale('DE', lang);​
echarts.init(DomElement, null, {​
   locale: 'DE'​
});
```

#### TypeScript 重构

在近 8 年的时间里，Apache ECharts 已经发展成一个非常复杂的可视化库了，为了续可以更安全高效的进行重构和新功能的开发，我们在 Apache ECharts 5 的开发之初，使用 TypeScript 对代码进行了重写，TypeScript 所带来的强类型让我们更有信心地在 ECharts 5 开发的时候对代码进行大刀阔斧的重构以实现更多令人激动人心的特性。

对于开发者，我们也可以从 TypeScript 代码直接生成更好更符合代码的`DTS`类型描述文件。在此之前，ECharts 的类型描述文件一直是由社区开发者帮我们维护并发布到[DefinityTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/echarts)，这个有着不小的工作量，非常感谢大家的贡献。

除此之外，如果开发者的组件是按需引入的，我们还提供了一个 `ComposeOption` 类型方法，可以组合出一个只包含了引入组件的配置项类型，可以带来更严格的类型检查，帮助你提前检测到未引入的组件类型。




## 可访问性

Apache ECharts 一直非常重视无障碍设计，我们希望让视觉障碍人士也能平等了解图表传递的信息。并且也希望图表的开发者能以极低的开发成本实现这一点，因而有利于让开发者更愿意为视觉障碍人士提供支持。

在上一个大版本中，我们支持了根据不同的图表类型和数据自动一键智能生成图表描述的功能，帮助开发者非常方便地支持图表的 DOM 描述信息。在 ECharts 5 中，我们也做了更多提高可访问性的设计，帮助视觉障碍人士更好地理解图表内容。

#### 主题配色

我们在设计新版默认主题样式的时候，将无障碍设计作为一个重要的考量依据，对颜色的明度和色值都进行反复测试，帮助视觉辨识障碍用户清楚地识别图表数据。​

并且，针对有更进一步无障碍需求的开发者，我们还提供了特殊的高对比度主题，以更高对比度颜色的主题将数据作进一步区分。

#### 贴花图案

ECharts 5 还新增提供了贴花的功能，用图案辅助颜色表达，进一步帮助用户区分数据。

~[600x350](${galleryViewPath}doc-example/aria-decal-simple&edit=1&reset=1)

此外，贴花图案还能在一些其他的场景下提供帮助，比如：在报纸、书籍之类只有单色或者非常少的颜色的印刷品中，帮助更好地区分数据；用图形元素方便用户对数据产生更直观的理解等。

~[600x350](${galleryViewPath}doc-example/aria-decal-newspaper&edit=1&reset=1)



## 小结

除了以上介绍的功能，Apache ECharts 还在非常多的细节中做了改进，帮助开发者更轻松地创建默认好用、配置灵活的图表，用图表讲述数据背后的故事。

感谢所有使用过 ECharts，甚至参与过社区贡献的开发者，正是你们才使得 Apache ECharts 5 成为可能。我们会以更大的热情投入到未来的开发中，Apache ECharts 也会以更大的诚意和大家在 6 相见！
