
{{target: npm-webpack}}

# Use ECharts with webpack

[Webpack](https://webpack.github.io/) is a popular module packaging tool, which can be used easily to import and packaging ECharts. Here we assume you already have certain understanding about webpack and used it in your project.

## Use npm to install ECharts

Before `3.1.1` version, ECharts package on npm was maintained by third-party. Since `3.1.1`, ECharts and zrender on npm are maintained officially by [EFE](https://github.com/ecomfe/) team.

You can use the following command to install ECharts with npm.

```shell
npm install echarts --save
```

## Include ECharts

ECharts and zrender installed by npm will be placed under `node_modules`. You can obtain echarts directly in project with `require('echarts')`.

```js
var echarts = require('echarts');

// initialize echarts instance with prepared DOM
var myChart = echarts.init(document.getElementById('main'));
// draw chart
myChart.setOption({
    title: {
        text: 'ECharts entry example'
    },
    tooltip: {},
    xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

## Include ECharts charts and components on demand

By default, `require('echarts')` returns the whole ECharts package including all charts and components, so the package size is a bit large. If you have a strict demand of package size, you may include packages on demand.

For example, the code above only uses bar chart, tooltip and title component, so you only need to include these modules, effectively making the package size from more than 400 KB to about 170 KB.

```js
// include ECharts main module
var echarts = require('echarts/lib/echarts');
// include bar chart
require('echarts/lib/chart/bar');
// include tooltip and title component
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// initialize echarts instance with prepared DOM
var myChart = echarts.init(document.getElementById('main'));
// draw chart
myChart.setOption({
    title: {
        text: 'ECharts introductory example'
    },
    tooltip: {},
    xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

Available modules see [https://github.com/ecomfe/echarts/blob/master/index.js](https://github.com/ecomfe/echarts/blob/master/index.js)

The same goes for another popular packaging tools [browserify](http://browserify.org/), which will not be introduced again here. Using [rollup](https://rollupjs.org/) to make a custom build of echarts is introduced in [Create Custom Build of ECharts](http://echarts.baidu.com/tutorial.html#Create%20Custom%20Build%20of%20ECharts)
