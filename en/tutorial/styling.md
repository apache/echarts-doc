{{ target: styling }}
# Customized Chart Styles

ECharts provides a rich amount of configurable items, which can be set in global, series, and data three different levels. Next, let's see an example of how to use ECharts to implement the following Nightingale rose chart:

~[500x400](${galleryViewPath}doc-example/tutorial-styling-step5&edit=1&reset=1)

## Drawing Nightingale Rose Chart

[Getting started tutorial](~Get%20Started%20with%20ECharts%20in%205%20minutes) introduced how to make a simple bar chart. This time, we are going to make a pie chart. Pie charts use arc length of fans to represent ratio of a certain series in total share. It's data format is simpler than bar chart, because it only contains one dimension without category. Besides, since it's not in rectangular system, it doesn't need `xAxis`、`yAxis` either.

```js
myChart.setOption({
    series : [
        {
            name: 'Reference Page',
            type: 'pie',
            radius: '55%',
            data:[
                {value:400, name:'Searching Engine'},
                {value:335, name:'Direct'},
                {value:310, name:'Email'},
                {value:274, name:'Alliance Advertisement'},
                {value:235, name:'Video Advertisement'}
            ]
        }
    ]
})
```

With the above code, we can create a simple pie chart:

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step0&edit=1&reset=1)

Here, the value of `data` is not a single value, as that of the example in get started. Instead, it's an object containing `name` and `value`. Data in ECharts can always be a single value, or a configurable object with name, style and label. You may refer to [data](option.html#series-pie.data) for more information.

[Pie charts](option.html#series-pie) of EChart can be made into Nightingale rose charts with [roseType](option.html#series-pie.roseType) field.

```js
roseType: 'angle'
```

Nightingale rose charts use radius to represent data value.

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step1&edit=1&reset=1)

## Configuring Shadow

Commonly used styles of ECharts, like shadow, opacity, color, border-color, border-width, and etc., are set by [itemStyle](~series-pie.itemStyle) in series.

```js
itemStyle: {
    // shadow size
    shadowBlur: 200,
    // horizontal offset of shadow
    shadowOffsetX: 0,
    // vertical offset of shadow
    shadowOffsetY: 0,
    // shadow color
    shadowColor: 'rgba(0, 0, 0, 0.5)'
}
```

The effect after added shadow is:

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step2&edit=1&reset=1)

Each `itemStyle` has `emphasis` as the highlighted style when mouse hovered. The last example shows the effect of adding shadow by default. But in most situations, we may probably need to add shadow to emphasis when mouse is hovered.

```js
itemStyle: {
    emphasis: {
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
}
```

## Dark Background and Light Text

Now, we need to change the whole theme as that shown in the example at the beginning of this tutorial. This can be achieved by changing background color and text color.

Background is a global configurable object, so we can set it directly with [backgroundColor](option.html#backgroundColor) of option.

```js
setOption({
    backgroundColor: '#2c343c'
})
```

Text style can also be set globally in [textStyle](option.html#textStyle).

```js
setOption({
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    }
})
```

On the other hand, we can also set them in [label.textStyle](option.html#series-pie.label.textStyle) of each series.

```js
label: {
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    }
}
```

We also need to set line color of pie chart to be lighter.

```js
labelLine: {
    lineStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    }
}
```

Thus, we can get the following effect.

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step3&edit=1&reset=1)

Similar to `itemStyle`, `label` and `labelLine` also have `emphasis` children.


## Setting Fan Colors

Fan colors can be set in `itemStyle`:

```js
itemStyle: {
    // 设置扇形的颜色
    color: '#c23531',
    shadowBlur: 200,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
}
```

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step4&edit=1&reset=1)

This is quite similar to our expect effect, except that fan colors should be made darker within shadow area, so as to make a sense of layering and space with blocked light.

Each fan's color can be set under `data`:

```js
data: [{
    value:400,
    name:'搜索引擎',
    itemStyle: {
        color: '#c23531'
    }
}, ...]
```

But since we only need the variation of color in this example, there's a simpler way to map data value to lightness through [visualMap](~option.html#visualMap).

```js
visualMap: {
    // hide visualMap component; use lightness mapping only
    show: false,
    // mapping with min value at 80
    min: 80,
    // mapping with max value at 600
    max: 600,
    inRange: {
        // mapping lightness from 0 to 1
        colorLightness: [0, 1]
    }
}
```

The final effect is:

~[500x400](${galleryViewPath}doc-example/tutorial-styling-step5&edit=1&reset=1)
