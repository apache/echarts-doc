{{ target: styling }}
# Customized chart format

ECharts provides rich custom configuration options and you can set data graphic format from three layers, namely, global, series and data.Next we are going to learn how to use ECharts to realize the following Nightingale chart:

~[500x400](${galleryViewPath}doc-example/tutorial-styling-step5&edit=1&reset=1)

## Draw Nightingale chart

[In the previous chapter](~getting-started) we learnt to draw a simple bar chart, this time we learn the pie chart. Pie chart mainly displays percentage of different categories data to the total sum through sector arc, its format is easier than bar chart with one-dimensional data value and no category. Since it is not in right angle coordinate system, so there is no need for `xAxis` and `yAxis`.

```js
myChart.setOption({
    series : [
        {
            name: 'access source ',
            type: 'pie',
            radius: '55%',
            data:[
                {value:400, name:'search engine'},
                {value:335, name:'direct access'},
                {value:310, name:'email marketing'},
                {value:274, name:'Affiliate advertisement'},
                {value:235, name:'video advertisement'}
            ]
        }
    ]
})
```

code above can draw a simple pie chart:

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step0&edit=1&reset=1)

Attribute value of `data` here is not the single data value for each item as it showd in introductory tutorial, but an object including attributes of `name` and `value`. Data item in ECharts can all be set to data value as well as an object including name, format configuration of the data chart and label configuration object, see details in [data](option.html#series-pie.data).


[pie chart](option.html#series-pie) in ECharts  also supports to display Nightingale chart through setting [roseType](option.html#series-pie.roseType).

```js
roseType: 'angle'
```

Nightingale chart show data size through radius.

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step1&edit=1&reset=1)

## shadow configuration

There are some universal formats in ECharts such as shadow, transparency, color, border color, border width and so on, these formats are usually set in [itemStyle](~series-pie.itemStyle) of series. For example, shadow format can be set through the following configuration items: 

```js
itemStyle: {
    normal: {
        // shadow size
        shadowBlur: 200,
        // Shadow is offset horizontally
        shadowOffsetX: 0,
        // Shadow is offset vertically
        shadowOffsetY: 0,
        // shadow color
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
}
```

Effect after adding shadow:

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step2&edit=1&reset=1)

`itemStyle` has two options as `normal` and `emphasis`, `normal` is format of normal display, `emphasis` is the highlight format when mouse hovers. This example is normal format adds shadow, but more often it stands out through shadow when hovering. 
```js
itemStyle: {
    emphasis: {
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
}
```

## Dark background and light label

Now we need change the whole theme into the dark one as in the example, this needs to change background color and text color.

Background color is universal, so you can directly set [backgroundColor] under option.(option.html#backgroundColor)
```js
setOption({
    backgroundColor: '#2c343c'
})
```

text format can set overall [textStyle](option.html#textStyle). 
```js
setOption({
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    }
})
```

You can also set each series respectively, text of each series is located in[label.normal.textStyle](option.html#series-pie.label.normal.textStyle). 
```js
label: {
    normal: {
        textStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
        }
    }
}
```

Pie charts need to set the color of visual guides to light color.
```js
labelLine: {
    normal: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
        }
    }
}
```

For example: 

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step3&edit=1&reset=1)

Same as `itemStyle`, formats of `label` and `labelLine` also have two status as `normal` and `emphasis`.


## set color of sector

sector color is also set in itemStyle: 

```js
itemStyle: {
    normal: {
        // set color of sector
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
}
```

~[400x300](${galleryViewPath}doc-example/tutorial-styling-step4&edit=1&reset=1)

This is very close to the effect we want, apart from color of each sector, sectors under  shading have darker color as light is being blocked to display layer and space. 

Color of each sector in ECharts can be reakized through setting data item under data respectively. 
```js
data: [{
    value:400,
    name:'search engine',
    itemStyle: {
        normal: {
            color: 'c23531'
        }
    }
}, ...]
```

But because this time there is only a change in shading, so the faster way to map data value to shading is through [visualMap](~option.html#visualMap) component.

```js
visualMap: {
    // does not show visualMap component, only used to map shading
    show: false,
    // minimum value of map 80
    min: 80,
    // Maximum value of map is 600
    max: 600,
    inRange: {
        // shading range from 0 to 1
        colorLightness: [0, 1]
    }
}
```

final effect: 

~[500x400](${galleryViewPath}doc-example/tutorial-styling-step5&edit=1&reset=1)

