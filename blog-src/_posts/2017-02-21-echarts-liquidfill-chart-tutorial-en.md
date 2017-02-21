---
layout: post
category: en
cnUrl: '2017/02/21/echarts-liquidfill-chart-tutorial.html'
title: 'ECharts Liquid-fill Chart Tutorial'
description: "Liquid-fill is a type of charts that are suitable for displaying single percentage data. ECharts liquid-fill Chart provides fancy presentation of percentage data through single but power configurations. This post introduces how to use it."
tags: [extension, tutorial]
image:
  feature: post/2017-02-21-echarts-liquidfill-chart-tutorial.gif
---

Liquid-fill is a type of charts that are suitable for displaying single percentage data. [ECharts liquid-fill Chart](https://github.com/ecomfe/echarts-liquidfill) provides fancy presentation of percentage data through single but power configurations.

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-basic"></iframe>

Now, let's learn how to use it.

## Step 1: Including JavaScript Files

ECharts liquid-fill chart is a *plugin* for ECharts, which means it is not included in the full version downloaded from official site. This ensures those who don't need liquid-fill charts can have a smaller package size. When use it, you need to include `echarts-liquidfill.js` after `echarts.js`, the former of which can be downloaded at [GitHub](https://github.com/ecomfe/echarts-liquidfill/tree/gh-pages/dist).

```html
<script src="echarts.js"></script>
<script src="echarts-liquidfill.js"></script>

<script>
// your code here
</script>
```

## Step 2: Assign DOM Element As Chart Container

We need to assign a DOM element with width and height as chart container, just as we do with other chart types when using ECharts.

```html
<div id="liquidfill-chart" style="width=100%; height = 400px"></div>
```

Use the DOM element to init chart.

```js
var chart = echarts.init(document.getElementById('liquidfill-chart'));
```

## Step 3: Configure The Chart

We set the chart series `type` to be `'liquidFill'` to use it.

A simple configuration item may be:

```js
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3]
    }]
};
chart.setOption(option);
```

Thus, we can get the liquid-fill chart at the beginning of this post.

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-basic"></iframe>

> If the chart doesn't display as expected, you may check the following things:
>
> - Whether JS files are loaded correctly;
> - Whether `echarts` variable exists;
> - Whether there are error messages in Console;
> - Whether the DOM element has width and height when init.

As you can see, we only assigned series type to be `'liquidFill'`, and set the data to be `[0.6, 0.5, 0.4, 0.3]`, which generate the four waves in the chart. Other parameters are all by default.

Even without much configuration, you may get an elegant liquid-fill chart with default parameters. And if you have specific demands, you may easily acheive them with our configuration. Here is how to customerize it.

## Step 4: Customerize The Chart

ECharts liquid-fill chart supports highly customizable configuration, including color, radius, amplitude, wave length, phase, period, wave direction, shape, wave animation and so on. Full configuration please refer to [API](https://github.com/ecomfe/echarts-liquidfill#api). Here, we are going to introduces some important parameters.

### Shape And Animation

<iframe style="width: 100%; height: 600px" src="http://gallery.echartsjs.com/view.html?cid=xry0tUfcBe"></iframe>

Besides the default `'circle'` shape, it also supports symbols like `'rect'`, `'roundRect'`, `'triangle'`, `'diamond'`, `'pin'`, and `'arrow'`. Even more, you can set it to be an [SVG path](http://gallery.echartsjs.com/editor.html?c=liquidfill-echarts) to get some fancy effect.

<iframe style="width: 100%; height: 400px" src="http://gallery.echartsjs.com/view.html?cid=liquidfill-echarts"></iframe>

By setting `direction` to be `'left'` or `'right'`, we may assign the moving direction of the wave. Or, we can set it to be `'none'` for still.

Full configuration of the above is:

```js
// run at: http://gallery.echartsjs.com/editor.html?c=xry0tUfcBe
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '40%',
        shape: 'diamond',
        center: ['25%', '25%']
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        direction: 'left',
        radius: '40%',
        shape: 'rect',
        center: ['75%', '25%']
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '40%',
        shape: 'roundRect',
        center: ['25%', '75%'],
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        outline: {
            show: false
        },
        waveAnimation: false, // disable moving
    }, {
        type: 'liquidFill',
        data: [0.6, 0.5, 0.4, 0.3],
        radius: '50%',
        shape: 'pin',
        center: ['75%', '75%'],
        amplitude: 0,
        waveAnimation: false,
        outline: {
            show: false
        },
        backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        }
    }]
};
```

### Configuration For A Single Wave

Besides the configuration of the waves as introduced above, each single wave can have configuration to be overwritten.

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=xry6CHNCVl"></iframe>

In this example, we set the second wave to be red, and changed its moving direction.

```js
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, {
            value: 0.5,
            direction: 'left',
            itemStyle: {
                normal: {
                    color: 'red'
                }
            }
        }, 0.4, 0.3]
    }]
};
```

You may notice that an item of the previous `data` is a number, but for those to be configured, they are an object containing `value`.

## Label

Label of liquid-fill charts have a nice effect that the text colors before wave and background are different. `insideColor` can be used to set the text color before wave, and `color` can be used to set the color before background.

```js
var option = {
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [0.5, 0.45, 0.4, 0.3],
        label: {
            normal: {
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 50
                }
            }
        }
    }]
};
```

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=xHyUvV_tFe"></iframe>

Label displays percentage data by default. If you want to set it otherwise, you may use `formatter` to do this. This is similar to other formatter of ECharts.

`formatter` can be a string, in which `'{a}'`, `'{b}'`, `'{c}'` will be replaced to be series name, data name, and data value.

For example:

```js
var option = {
    series: [{
        type: 'liquidFill',
        name: 'Liquid Fill',
        data: [{
            name: 'First Data',
            value: 0.6
        }, 0.5, 0.4, 0.3],
        label: {
            normal: {
                formatter: '{a}\n{b}\nValue: {c}',
                textStyle: {
                    fontSize: 28
                }
            }
        }
    }]
};
```

<iframe style="width: 100%; height: 350px" src="http://gallery.echartsjs.com/view.html?cid=xHk5831cHg"></iframe>

Besides, `formatter` can also be a function. The following code provides the same effect as before.

```js
formatter: function(param) {
    return param.seriesName + '\n'
        + param.name + '\n'
        + 'Value:' + param.value;
}
```

## Conclusion

In this post, we introduced how to use ECharts liquid-fill charts. Hopefully, you can be inspired by it and create more interesting works.

Full document please refer to [GitHub](https://github.com/ecomfe/echarts-liquidfill). And you may go to [ECharts Gallery](http://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~query=liquidFill~author=all) to view more liquid-fill charts.


