
{{target: media-query}}

# Adaptive mobile end

ECharts works in dom node with user assigned height and width, ECharts『component』and『series』are all in this dom node, location of every node can be assigned by user. Dom document flow may not be used for layout inside chart bank, but similar and simole absolute layout can be realized. Sometimes when container size are extreme, this method can not avoid overlapping component automatically, especially on small screens of mobile end.

Besides, sometimes one chart may need to be displayed on PC and mobile end at the same time, this needs inner components of ECharts to change along with container size.

To solve this problem, ECharts has improved location setting of component and realized self-adaptive ability similiar to [CSS Media Query](http://www.w3.org/TR/css3-mediaqueries/).


<br>
<h2>Location and layout of ECharts component</h2>


Most『component』and『series』follow two locating methods: 

<br>
**left/right/top/bottom/width/height locating method: **

In the six measures, each one can be 『absolute value』or『percentage』or『location description』.

+ Absolute value

    unit is browser pixels（px）, write with `number`（no unit）, such as `{left: 23, height: 400}`. 

+ percentage

    representing the percentage of height and width of dom container, write with `string`, such as `{right: '30%', bottom: '40%'}`.

+ location description

    + capable to set `left: 'center'`, stands for centered horizontally.
    + capable to set `top: 'middle'`, stands for centered vertically.


The concept of these six measures is similar to the six ones in css: 

+ left: distance to left border of dom container.
+ right: distance to right border of dom container.
+ top: distance to top border of dom container.
+ bottom: distance to bottom border of dom container.
+ width: width.
+ height: height.

In the three horizontal measures of `left`、`right`、`width` , two is enough, because any two values can determine component location and size, such as `left` and `right` or `right` and `width` can all determine component location and size.
Three vertical measures of`top`,`bottom` and `height` are same as the horizontal one, details will not be elaborated here.

<br>
**Locating method of center/radius : **

+ `center`

    is an array, representing `[x, y]`, among which x、y can be『absolute value』or『percentage』, meaning is the same as described before.

+ `radius`

    is an array, representing `[inner radius, outer radius]`, , among which inner and outer radius can be『absolute value』or『percentage』, meaning is the same as described before.

    When adapting to container size, perventage setting turns out to be very useful.



<br>
**Horizontal（horizontal）and vertical（vertical）**

『narrow appearance』ECharts component（such as `legend`,`visualMap`,`dataZoom`,`timeline` and so on）, mostly provide options like『horizontal layout』『vertical layout』.For example, on a narrow and long screen of mobile end,『vertical layout』may be more appropriate；『horizontal layout』may be more appropriate on PC wide screen.

Settings of horizontal and vertical layout are usually located in『component』or `orient` or `layout` configuration of『series』, set to `'horizontal'` or `'vertical'`.


<br>
**About ECharts2 compatibility: **

Naming of `x/x2/y/y2` in ECharts2 is still compatible, corresponding to `left/right/top/bottom`. But `left/right/top/bottom` is recommended.

In the position description is compatible  ECharts2, some weirdly-looking setting is also  supported: `left: 'right'`,`left: 'left'`,`top: 'bottom'`,`top: 'top'`. These words equal to: `right: 0`、`left: 0`、`bottom: 0`、`top: 0`, when written in the later way, it is not weird.



<br>
<h2>Media Query</h2>

[Media Query](http://www.w3.org/TR/css3-mediaqueries/#media1) provides the ability『change along with container size』

In the example below you can try to drag **point in the lower right corner**, along with the size change, legend and series will change layout position and method automatically. 
~[750x600](${galleryViewPath}doc-example/pie-media&edit=1&reset=1)

If you want to set Media Query in option, the framework below must be followed: 

```javascript
option = {
    baseOption: { // Here is the basic『atom option』.
        title: {...},
        legend: {...},
        series: [{...}, {...}, ...],
        ...
    },
    media: [ // every rule of media query is defined here.
        {
            query: {...},   // write rule here.
            option: {       // write options met this rule here.
                legend: {...},
                ...
            }
        },
        {
            query: {...},   // second rule.
            option: {       // corresponding option of the second rule.
                legend: {...},
                ...
            }
        },
        {                   // There is no rule written here, meaning『by default』,
            option: {       // when all rules are not met, adopt this option.
                legend: {...},
                ...
            }
        }
    ]
};
```

In the exemplary framework, `baseOption` and every option in `media` is『atom option』, namely normal option that includes all components and series definition. `baseOption` must be used, besides when certain `query` is met, corresponding option will be merged by using chart.mergeOption().


**query: **

Each `query` is like this to some extend: 

```javascript
{
    minWidth: 200,
    maxHeight: 300,
    minAspectRatio: 1.3
}
```

By now three attributes are supported:`width`、`height`、`aspectRatio`（lenght-to-width ratio）. Every attribute can add prefix of `min` or `max`, such as `minWidth: 200` stands for『greater than or equal to 200px width』.When two attributes are written together means『and』, for example: `{minWidth: 200, maxHeight: 300}` stands for『greater than or equal to 200px width and smaller than or equal to 300px height』.


**option: **

Since option in `media` is『atom option』, theoratically configuration item of any optioncan be written. But usually we only write those related to layout, such as intercepting part of query option in the example above: 

```javascript
media: [
    ...,
    {
        query: {
            maxAspectRatio: 1           // when length-to-width ratio is less than 1.
        },
        option: {
            legend: {                   // legend is placed in the middle of the bottom.
                right: 'center',
                bottom: 0,
                orient: 'horizontal'    // horizontal layout of legend.
            },
            series: [                   // left and right layout of two pie charts.
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
            maxWidth: 500               // when container width is less than 500.
        },
        option: {
            legend: {
                right: 10,              // legend is placed in the middle of the right.
                top: '15%',
                orient: 'vertical'      // vertical layout.
            },
            series: [                   // up and down layout of two pie charts.
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


**Priority when multiple query are satisfied: **

Attention: When multiple `query` are being satisfied at the same time, all will be defined by mergeOption and those are difined later will be merged（those with higher priority）.


**query by default: **

If certain item in `media` is not `query`, then it means『default value』, namely when all the rules are not met,  dapot this option.


**Pay attention when container size changes with time: **

In many circumstances, the container DOM node doesn't need to change size with dragging, but only need to set several classic size based on different end.

But if the container DOM node needs to change size with dragging, attention needs to be paied to this: if certain configuration item appears in certain `query option`, then it should also appeared in other `query option`, or it would not return to the original state.（`left/right/top/bottom/width/height` does not subject to the restrictions）


<br>
Last let's see an example combined with time:

~[750x700](${galleryViewPath}doc-example/bar-media-timeline&edit=1&reset=1)
