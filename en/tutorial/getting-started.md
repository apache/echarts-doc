{{ target: getting-started }}
# Get Started with ECharts in 5 minutes

## Installing ECharts

First, install Apache ECharts<sup>TM</sup> using one of the following methods:

* Download official source release from [Apache ECharts website](${websitePath}/en/download.html). Then [build](https://github.com/apache/incubator-echarts#build) from the source release.

* Download from [GitHub](https://github.com/apache/incubator-echarts/releases)

* Using npm: `npm install echarts --save`. [Using ECharts with webpack](tutorial.html#Use%20ECharts%20with%20webpack)

* Use CDN like [jsDelivr](https://www.jsdelivr.com/package/npm/echarts).

## Including ECharts

Load `echarts.min.js` with a script tag.

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
