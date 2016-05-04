{{ target: dynamic-data }}

# loading and updating of asynchronous data

## Asynchronous load

[Entry example]data in (~getting-started) is directly entered in `setOption` after initializing, but data can only enter after  asynchronous load on many occasions. Asynchronous data updating in `ECharts` is very easy, after charts initializing, you can enter data and configuration item through `setOption` after obtaining data through  jQuery and other tools at any time.
```js
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
            data: ["shirts","cardigan","chiffon shirt","pants","heels","sockes"]
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
});
```

Or you can finish setting other patterns, show an empty right angle axes, and then enter data  after obtaining.

```js
var myChart = echarts.init(document.getElementById('main'));
// show title. legend adn empty axis
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
    // enter data
    myChart.setOption({
        xAxis: {
            data: data.categories
        },
        series: [{
            // correspond to the corresponding series by name
            name: 'Sales',
            data: data.data
        }]
    });
});
```

For example：

~[400x300](${galleryViewPath}doc-example/tutorial-async&edit=1&reset=1)

In ECharts, updating data need to correspond to the corresponding series through `name`. In the above example, normal update can be carried out according to series order if `name` doesn't exist，but adding series `name`data when updating data is recommended more often. 

## loading animation

If data loading went long, an empty axis on the canvas may make user think that there is a bug, so a loading animation is needed to remind user of data loading. 

ECharts provides a simple loading animation by default.You only use [showLoading](api.html#echartsInstance.showLoading) to show, and then use [hideLoading](api.html#echartsInstance.hideLoading) to hide loading animation after data loading.
```js
myChart.showLoading();
$.get('data.json').done(function (data) {
    myChart.hideLoading();
    myChart.setOption(...);
});
```

Effects are as followed：

~[400x300](${galleryViewPath}doc-example/tutorial-loading&edit=1&reset=1)

## Dynamic update of data

ECharts is driven by data, change of data changes the presentation of chart, therefore dymatic data is much easier to realized.

All data updating are achieved through [setOption](~api.html#echartsInstance.setOption), you only need to obtian data regularly, enter data in[setOption](~api.html#echartsInstance.setOption) and you don't need to consider the changes brought by data, ECharts will find the difference between two data and present data change through proper animation. 

>In ECharts 3, addData in ECharts 2 is removed.If a single data needs to be added, you can first data.push(value) and then setOption.

See details in the following example:

~[400x300](${galleryViewPath}doc-example/tutorial-dynamic-data&edit=1&reset=1)