{{ target: getting-started }}
# Get Started with ECharts in 5 minutes

## Get ECharts

You can get ECharts through the following ways.

1. Choose the version you need and download from [official download page](http://echarts.baidu.com/download.html). Based on developer's varied need of function and package size, we provide different download packages. If you have concern about package size, you can download [full version](http://echarts.baidu.com/dist/echarts.min.js) directly.

2. Download the latest `release` version in ECharts [GitHub](https://github.com/echarts), and you can find the latest version of echarts in `dist` directory of the unzipped files.

3. Alternatively, you may get echarts through npm by `npm install echarts --save`. See detail in [use echarts in webpack](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

## Including ECharts

ECharts 3 no longer emphysis on using AMD to load packages on need, and AMD loader is no longer included in ECharts. Therefore, it is much easier to include ECharts, in that you only need to include ECharts in script label like most other JavaScript libraries require.

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
    <div id="main" style="width: 600px;height:400px;"></div>
</body>
```

Then we can initialize an echarts instance through [echarts.init](api.html#echarts.init), and create a simple bar chart through [setOption](api.html#echartsInstance.setOption). Below is the complete code.


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

Here is your first chart!

~[600x300](${galleryViewPath}doc-example/getting-started&reset=1&edit=1)

You can also go to [ECharts Gallery](${galleryEditorPath}doc-example/getting-started) to view examples.
