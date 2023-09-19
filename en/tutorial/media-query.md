
{{target: media-query}}

# Responsive Mobile-End

Apache ECharts<sup>TM</sup> works in DOM nodes with user defined width and height. ECharts *component* and *series* are both in this DOM node, whose location can be assigned by user separately. Inner components of charts are not suitable for implementing DOM flow layout. Instead, we use a simpler and more understandable layout similar to absolute layout. But sometimes when container is of extreme size, this method cannot avoid component overlapping automatically, especially on small screens on mobile-end.

Besides, sometimes one chart may need to be displayed on both PC and mobile-end, which involves the ability of ECharts inner components to be responsive with different container sizes.

To solve this problem, ECharts improved component location algorithm, and implemented responsive ability similar to [CSS Media Query](https://www.w3.org/TR/css3-mediaqueries/).


## Location and layout of ECharts components


Most *component* and *series* follow two locating methods:

<br>
**left/right/top/bottom/width/height locating method:**

Each of those six parameters can be *absolute value* or *percentage* or *location description*.

+ Absolute value

    in browser pixels (px); in form of `number` (no unit); e.g.: `{left: 23, height: 400}`.

+ Percentage

    to the width and height of DOM container; in form of `string`; e.g.: `{right: '30%', bottom: '40%'}`.

+ Location Description

    + can be set to `left: 'center'`, for horizontally centering.
    + can be set to `top: 'middle'`, for vertically centering.


The concept of these six parameters is similar to that in CSS:

+ left: distance to left border of DOM container.
+ right: distance to right border of DOM container.
+ top: distance to top border of DOM container.
+ bottom: distance to bottom border of DOM container.
+ width: width.
+ height: height.

Two out of the three horizontal parameters, `left`, `right`, `width`, are enough to determine the component location. For example, `left` and `right`, or `right` and `width` can both determine component location and size.
The same goes for vertical parameters `top`, `bottom` and `height`.

<br>
**Locating method of `center` / `radius`: **

+ `center`

    an array in form of `[x, y]`, in which `x` and `y` can either be *absolute value* or *percentage*, as described above.

+ `radius`

    an array in form of `[innerRadius, outerRadius]`, in which `innerRadius` and `outerRadius` can either be *absolute value* or *percentage*, as described above.

    Percentage location turns out to be very useful for responsive positioning.


<br>
**Horizontal and vertical**

Most of ECharts's long and narrow components (such as `legend`,`visualMap`,`dataZoom`,`timeline` and so on), provide option to set them to be horizontal or vertical. For example, long and narrow screen of mobile-end, vertical layout may be a more suitable choice, while horizontal may more suit for PC's wide screen.

Setting of horizontal or vertical layout is usually with component or series's `orient` or `layout` option, which can be set to `'horizontal'` or `'vertical'`.


<br>
**Compatibility with ECharts2: **

Naming of `x/x2/y/y2` in ECharts2 is still compatible, as well as the newly added `left/right/top/bottom`. But `left/right/top/bottom` is recommended.

To be compatible with ECharts2, there may be settings that seems to be odd, e.g.: `left: 'right'`, `left: 'left'`, `top: 'bottom'`, `top: 'top'`, which are equal to: `right: 0`, `left: 0`, `bottom: 0`, `top: 0`, in a more normal expression.


## Media Query

[Media Query](https://www.w3.org/TR/css3-mediaqueries/#media1) provides the ability to be responsive with container size.

As shown in the following example, you may drag **the circle in bottom-right corner** to see the legend and series change layout position and method with container size.
~[750x600](${galleryViewPath}doc-example/pie-media&edit=1&reset=1)

The following format should be followed if you need to set Media Query in option:

```javascript
option = {
    // here defines baseOption
    title: {...},
    legend: {...},
    series: [{...}, {...}, ...],
    ...,
    media: [ // each rule of media query is defined here
        {
            query: {...},   // write rule here
            option: {       // write options accordingly
                legend: {...},
                ...
            }
        },
        {
            query: {...},   // the second rule
            option: {       // the second option
                legend: {...},
                ...
            }
        },
        {                   // default with no rules,
            option: {       // when all rules fail, use this option
                legend: {...},
                ...
            }
        }
    ]
};
```

In the above example, `baseOption` and every option in `media` are all *simple options*, which are regular options containing components and series. `baseOption` is always be used, while options of every will be merged with `chart.mergeOption()` when given `query` condition is satisfied with.


**query: **

A `query` is in the following format:

```javascript
{
    minWidth: 200,
    maxHeight: 300,
    minAspectRatio: 1.3
}
```

Currently there are three supported attributes:`width`, `height`, `aspectRatio` (height / width), each of which can add `min` or `max` as prefix. E.g., `minWidth: 200` stands for when width is greater than or equal to 200px. When two attributes are written together, it means *and* in Bool logic. For example, `{minWidth: 200, maxHeight: 300}` stands for when width is greater than or equal to 200px and height is smaller than or equal to 300px.


**option: **

Since option in `media` is *simple option*, technically speaking, you can write every option configuration item. But usually we only write those related to layout. Take part of the above query option as example:

```javascript
media: [
    ...,
    {
        query: {
            maxAspectRatio: 1           // when length-to-width ratio is less than 1
        },
        option: {
            legend: {                   // legend is placed in middle-bottom
                right: 'center',
                bottom: 0,
                orient: 'horizontal'    // horizontal layout of legend
            },
            series: [                   // left and right layout of two pie charts
                {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                },
                {
                    radius: [30, '50%'],
                    center: ['50%', '70%']
                }
            ]
        }
    },
    {
        query: {
            maxWidth: 500               // when container width is smaller than 500
        },
        option: {
            legend: {
                right: 10,              // legend is placed in middle-right
                top: '15%',
                orient: 'vertical'      // vertical layout
            },
            series: [                   // top and bottom layout of two pie charts
                {
                    radius: [20, '50%'],
                    center: ['50%', '30%']
                },
                {
                    radius: [30, '50%'],
                    center: ['50%', '75%']
                }
            ]
        }
    },
    ...
]
```


**Priority when multiple queries are satisfied: **

Attention: When multiple `query` are satisfied at the same time, all of them will be merged with `mergeOption` and those are defined later will be merged later, thus provides them with higher priority.


**Query by default: **

If an item in `media` has no not `query`, then it means *default value*, which will be used when all other rules fail.


**Pay attention when container size changes:**

In many cases, container DOM node doesn't need to change size with user dragging. Instead, it may set to several sizes on varied ends.

But if the container DOM node needs to change size with dragging, you need to pay attention to this: if certain configuration item appears in one `query option`, then it should also appeared in other `query option`, or it will not be able to return to the original state. (`left/right/top/bottom/width/height` are not restricted to this rule.)


**`media` in *composite option* does not support merge**

When `chart.setOption(rawOption)` for the second, third, fourth, fifth, and etc. times, if `rawOption` is `composite option` (which means it contains `media` list), then, the new `rawOption.media` list will not merge with the old `media`. instead, it will simply replace the option. Of course, `baseOption` will still merge with the old option normally.

<br>
Finally, let's see an example combining with timeline:

~[750x700](${galleryViewPath}doc-example/bar-media-timeline&edit=1&reset=1)
