
{{target: npm-webpack}}

# Use ECharts  in webpack 

[Webpack](https://webpack.github.io/) is a relatively popular module packing tool, you can easily introduce and pack echarts while using webpack project on the assumption that you already have certain understanding and have used webpack in your project.

## npm installs ECharts

Before `3.1.1` version,  echarts on npm package is maintained unoffically, from `3.1.1` echarts on npm and zrender package are maintained officially by [EFE](https://github.com/ecomfe/). 

You can use the following order to install echarts through npm 

```shell
npm install echarts --save
```

## introduce ECharts

Echarts and zrender installed through npm will be placed under `node_modules`. You can obtain echarts directly in project code `require('echarts')`.

```js
var echarts = require('echarts');

// based on prepared dom, initialize echarts example
var myChart = echarts.init(document.getElementById('main'));
// draw chart
myChart.setOption({
    title: { text: 'ECharts entry example' },
    tooltip: {},
    xAxis: {
        data: ["shirt",cardign","chiffon shirt","pants","heels","socks"]
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

## introduce ECharts chart and component based on need

Use `require('echarts')` by default, you will get echarts bag loaded with all charts and component. so the volume will be large. If volume requirement is strict in project, you can also introduce needed module.

For example, the code above only uses bar chart, tooltip and title component, so you only need to introduce these modules to minimize package from more than 400 KB to 170 KB or some effectively.

```js
// introduce ECharts main module
var echarts = require('echarts/lib/echarts');
// introduce bar chart
require('echarts/lib/chart/bar');
// introduce tooltip and title component
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// based on prepared dom, initialize echarts example
var myChart = echarts.init(document.getElementById('main'));
// Draw chart
myChart.setOption({
    title: { text: 'ECharts introductory example' },
    tooltip: {},
    xAxis: {
        data: ["shirt",cardign","chiffon shirt","pants","heels","socks"]
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```


Same method is used on another popular module packaging tools [browserify](http://browserify.org/), so details will not be elaborated here.