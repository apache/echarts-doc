{{ target: getting-started }}
# Get Started with ECharts in 5 minutes

## Get ECharts

First, install ECharts using one of the following methods:

1. The [official download page](https://ecomfe.github.io/echarts-doc/public/en/download.html), which has different builds for common needs. If you want to include all packages, you can download [the full minified version](http://echarts.baidu.com/dist/echarts.min.js).

2. From the latest [GitHub](https://github.com/ecomfe/echarts) release, you can find the latest version of echarts in `dist` directory of the unzipped files.

3. Using npm: `npm install echarts --save`. [Using ECharts with webpack](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Use%20ECharts%20with%20webpack)

4. Using the [online build tool](http://echarts.baidu.com/builder.html) (Chinese).

## Including ECharts

ECharts 3 no longer requires using AMD to load packages, and the AMD loader is no longer included in ECharts. Instead, ECharts should be included using a traditonal `<script>` tag:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- including ECharts file -->
    <script src="echarts.min.js"></script>
</head>
</html>
```

## Draw a simple chart

Before drawing charts, we need to prepare a DOM container with width and height for ECharts.

```
<body>
    <!-- preparing a DOM with width and height for ECharts -->
    <div id="main" style="width:600px; height:400px;"></div>
</body>
```

Then we can initialize an ECharts instance using [echarts.init](api.html#echarts.init), and create a simple bar chart with [setOption](api.html#echartsInstance.setOption). Below is the complete code.


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- including ECharts file -->
    <script src="echarts.js"></script>
</head>
<body>
    <!-- prepare a DOM container with width and height -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // based on prepared DOM, initialize echarts instance
        var myChart = echarts.init(document.getElementById('main'));

        // specify chart configuration item and data
        var option = {
            title: {
                text: 'ECharts entry example'
            },
            tooltip: {},
            legend: {
                data:['Sales']
            },
            xAxis: {
                data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // use configuration item and data specified to show chart
        myChart.setOption(option);
    </script>
</body>
</html>
```

You've made your first chart!

~[600x300](${galleryViewPath}doc-example/getting-started&reset=1&edit=1)

For more examples, go to the [ECharts Gallery](${galleryEditorPath}doc-example/getting-started)
