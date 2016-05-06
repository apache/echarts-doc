{{ target: getting-started }}
# Master ECharts in 5 minutes

## Obtain ECharts

You can obtain ECharts through the following ways.

1. Choose the version you need to download from [Official download page](http://echarts.baidu.com/download.html), based on developer's need of function and volume, we provide different download packages. If you have no need on volume, you can [download full version] directly(http://echarts.baidu.com/dist/echarts.min.js)。

2. Download the lattest `release`in ECharts [github](https://github.com/echarts) , you can find the lattest version of  echarts in the  `dist` catalog of the decompressing folder.

3. Obtain echarts through npm, `npm install echarts --save`, see details in “[use echarts in webpack]”(http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

## introduce ECharts

ECharts 3 no longer uses AMD as means of introducing mandatory, AMD loader is no longer placed in code. Therefore, it is much easier to introduce and you only need to introduce script label like normal JavaScript bank.

```html
<!DOCTYPE html>
<html>
<header>
    <meta charset="utf-8">
    <!-- incoming ECharts document -->
    <script src="echarts.min.js"></script>
</header>
</html>
```

## Draw a simple chart

Before drawing, we need to prepare a Dom with size(height and width) for ECharts.

```
<body>
    <!-- preparing a Dom with size(height and width) for ECharts -->
    <div id="main" style="width: 600px;height:400px;"></div>
</body>
```

Then through [echarts.init](api.html#echarts.init) , we can initialize an echarts example and create a simple bar chart through [setOption](api.html#echartsInstance.setOption), below is the complete code.


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <!-- 引入 echarts.js -->
    <script src="echarts.js"></script>
</head>
<body>
    <!--preparing a Dom with size(height and width) for ECharts -->
    <div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // based on prepared dom, initialize echarts example
        var myChart = echarts.init(document.getElementById('main'));

        // Specifies chart configuration item and data
        var option = {
            title: {
                text: 'ECharts entry example'
            },
            tooltip: {},
            legend: {
                data:['Sales']
            },
            xAxis: {
                data: ["shirt",cardign","chiffon shirt","pants","heels","socks"]
            },
            yAxis: {},
            series: [{
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // Use configuration item and data specified just now to show chart.
        myChart.setOption(option);
    </script>
</body>
</html>
```

Here is your first chart!

~[600x300](${galleryViewPath}doc-example/getting-started&reset=1&edit=1)

You can also enter [ECharts Gallery](${galleryEditorPath}doc-example/getting-started) directly to view editing samples.
