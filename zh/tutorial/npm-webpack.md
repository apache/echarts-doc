
{{target: npm-webpack}}

# 在 webpack 中使用 ECharts

[Webpack](https://webpack.js.org/) 是目前比较流行的模块打包工具，你可以在使用 webpack 的项目中轻松的引入和打包 Apache ECharts<sup>TM</sup>，这里假设你已经对 webpack 具有一定的了解并且在自己的项目中使用。

## npm 安装 ECharts

你可以使用如下命令通过 npm 安装 ECharts

```shell
npm install echarts --save
```

## 引入 ECharts

通过 npm 上安装的 ECharts 和 zrender 会放在`node_modules`目录下。可以直接在项目代码中 `require('echarts')` 得到 ECharts。

```js
var echarts = require('echarts');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

## 按需引入 ECharts 图表和组件

默认使用 `require('echarts')` 得到的是已经加载了所有图表和组件的 ECharts 包，因此体积会比较大，如果在项目中对体积要求比较苛刻，也可以只按需引入需要的模块。

例如上面示例代码中只用到了柱状图，提示框和标题组件，因此在引入的时候也只需要引入这些模块，可以有效的将打包后的体积从 400 多 KB 减小到 170 多 KB。

```js
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

可以按需引入的模块列表见 [https://github.com/apache/echarts/blob/master/src/echarts.all.ts](https://github.com/apache/echarts/blob/master/src/echarts.all.ts)


对于流行的模块打包工具 [browserify](http://browserify.org/) 也是同样的用法，这里就不赘述了。而对于使用 [rollup](https://rollupjs.org/) 的自定义构建，参见 [自定义构建 ECharts](${websitePath}/zh/tutorial.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9E%84%E5%BB%BA%20ECharts)。
