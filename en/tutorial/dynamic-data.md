{{ target: dynamic-data }}

# Loading and Updating of Asynchronous Data

## Asynchronous Loading

Data in [Get started](~getting-started) is directly filled in `setOption` after initialization, but in some cases, data may be filled after asynchronous loading. Data updating asynchronously in Apache ECharts<sup>TM</sup> is very easy. After initialization, you can pass in data and configuration item through `setOption` after data obtained through  jQuery and other tools at any time.

```ts
var myChart = echarts.init(document.getElementById('main'));

$.get('data.json').done(function (data) {
    myChart.setOption({
        title: {
            text: 'asynchronous data loading example'
        },
        tooltip: {},
        legend: {
            data:['Sales']
        },
        xAxis: {
            data: data.categories
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: data.data
        }]
    });
});
```

Or, you may set other styles, displaying an empty rectangular axis, and then fill in data when ready.

```ts
var myChart = echarts.init(document.getElementById('main'));
// show title. legend and empty axis
myChart.setOption({
    title: {
        text: 'asynchronous data loading example'
    },
    tooltip: {},
    legend: {
        data:['Sales']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'bar',
        data: []
    }]
});

// Asynchronous data loading
$.get('data.json').done(function (data) {
    // fill in data
    myChart.setOption({
        xAxis: {
            data: data.categories
        },
        series: [{
            // find series by name
            name: 'Sales',
            data: data.data
        }]
    });
});
```

For example:

~[400x300](${galleryViewPath}doc-example/tutorial-async&edit=1&reset=1)

In ECharts, updating data need to find the corresponding series through `name`. In the above example, updating can be performed correctly according to series order if `name` is not defined. But in most cases, it is recommended to update data with series `name` information.

## Loading Animation

If data loading time is too long, an empty axis on the canvas may confuse users. In this case, a loading animation is needed to tell the user that it's still loading.

ECharts provides a simple loading animation by default. You only need [showLoading](api.html#echartsInstance.showLoading) to show, and then use [hideLoading](api.html#echartsInstance.hideLoading) to hide loading animation after data loading.
```ts
myChart.showLoading();
$.get('data.json').done(function (data) {
    myChart.hideLoading();
    myChart.setOption(...);
});
```

Effects are as followed:

~[400x300](${galleryViewPath}doc-example/tutorial-loading&edit=1&reset=1)

## Dynamic Data Updating

ECharts is driven by data. Change of data changes the presentation of chart, therefore, implementing dynamic data updating is extremely easy.

All data updating are through [setOption](~api.html#echartsInstance.setOption). You only need to get data as you wish, fill in data to [setOption](~api.html#echartsInstance.setOption) without considering the changes brought by data, ECharts will find the difference between two group of data and present the difference through proper animation.

>In ECharts 3, addData in ECharts 2 is removed.If a single data needs to be added, you can first data.push(value) and then setOption.

See details in the following example:

~[400x300](${galleryViewPath}doc-example/tutorial-dynamic-data&edit=1&reset=1)