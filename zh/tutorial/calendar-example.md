{{target: calendar-example}}

# 小例子：实现日历图

在 Apache ECharts<sup>TM</sup> 中，我们新增了日历坐标系，如何快速写出一个日历图呢？
~[800x300](${galleryViewPath}calendar-simple&edit=1&reset=1)

通过以下三个步骤即可实现上述效果：

## 第一步：引入js文件
下载的最新完整版本 echarts.min.js 即可，无需再单独引入其他文件哦

```html
<script src="echarts.min.js"></script>
<script>
    // ...
</script>
```

## 第二步：指定DOM元素作为图表容器
和ECharts中的其他图表一样，创建一个DOM来作为绘制图表的容器
```html
<div id="main" style="width=100%; height = 400px"></div>
```
使用ECharts进行初始化
```ts
var myChart = echarts.init(document.getElementById('main'));
```

## 第三步：配置参数
以常见的日历图为例: calendar坐标 + heatmap图

```ts
var option = {
    visualMap: {
        show: false
        min: 0,
        max: 1000
    },
    calendar: {
        range: '2017'
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [['2017-01-02', 900], ['2017-01-02', 877], ['2017-01-02', 699], ...]
    }
}
myChart.setOption(option);
```
在heatmap图的基础上，加上`coordinateSystem: 'calendar',`和`calendar: { range: '2017' }`heatmap图就秒变为日历图了。

> 若发现图表没有正确显示，你可以检查以下几种可能：
>
> - JS文件是否正确加载；
> - `echarts` 变量是否存在；
> - 控制台是否报错;
> - DOM 元素在 `echarts.init` 的时候是否有高度和宽度。
> - 若为 `type: heatmap`，检查是否配置了 `visualMap`。

**附完整示例代码**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <script src="echarts.min.js"></script>
</head>
<body>
    <div id="main" style="width:100%;height:400px;"></div>
    <script type="text/javascript">
        var myChart = echarts.init(document.getElementById('main'));

        // 模拟数据
        function getVirtualData(year) {
            year = year || '2017';
            var date = +echarts.time.parse(year + '-01-01');
            var end = +echarts.time.parse(year + '-12-31');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time <= end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 10000)
                ]);
            }
            return data;
        }
        var option = {
            visualMap: {
                show: false,
                min: 0,
                max: 10000
            },
            calendar: {
                range: '2017'
            },
            series: {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: getVirtualData(2017)
            }
        };
        myChart.setOption(option);
    </script>
</body>
</html>

```
以上就是绘制最简日历图的步骤了，如若还想进一步私人定制，还可以通过自定义配置参数来实现

## 自定义配置参数

使用日历坐标绘制日历图时，支持自定义各项属性:

- [range](option.html#calendar.range): `设置时间的范围，可支持某年、某月、某天，还可支持跨年`

- [cellSize](option.html#calendar.cellSize): `设置日历格的大小，可支持设置不同高宽，还可支持自适应auto`

- [width](option.html#calendar.width)、[height](http://xxx): `也可以直接设置改日历图的整体高宽，让其基于已有的高宽全部自适应`

- [orient](option.html#calendar.orient): `设置坐标的方向，既可以横着也可以竖着`

- [splitLine](option.html#calendar.splitLine): `设置分隔线样式，也可以直接不显示`

- [itemStyle](option.html#calendar.itemStyle): `设置日历格的样式，背景色、方框线颜色大小类型、透明度均可自定义，甚至还能加阴影`

- [dayLabel](option.html#calendar.dayLabel): `设置坐标中 星期样式，可以设置星期从第几天开始，快捷设置中英文、甚至是自定义中英文混搭、或局部不显示、通过formatter 可以想怎么显示就怎么显示;`

- [monthLabel](option.html#calendar.monthLabel): `设置坐标中 月样式，和星期一样，可快捷设置中英文和自定义混搭`

- [yearLabel](option.html#calendar.yearLabel): `设置坐标中 年样式，默认显示一年，通过formatter 文字可以想显示什么就能通过string function任性自定义，上下左右方位随便选;`


完整的配置项参数参见：[calendar API](option.html#calendar)


## 日历坐标系的其他形式
日历坐标系是一种新的 `ECharts` 坐标系，提供了在日历上绘制图表的能力; 所以除了制作常用的日历图外，我们可以在热力图、散点图、关系图中使用日历坐标系。

在日历坐标系中使用热力图：
~[800x300](${galleryViewPath}calendar-heatmap&edit=1&reset=1)

在日历坐标系中使用散点图：
~[800x600](${galleryViewPath}calendar-effectscatter&edit=1&reset=1)

还可以混合放置不同的图表，例如下例子，同时放置了热力图和关系图：
~[800x600](${galleryViewPath}calendar-graph&edit=1&reset=1)

**其他更丰富的效果**

灵活利用 `ECharts` 图表和坐标系的组合，以及 API，还可以实现更丰富的效果。

例如，制作农历：
~[600x500](${galleryViewPath}calendar-lunar&edit=1&reset=1)

例如，使用 `chart.convertToPixel` 接口，在日历坐标系绘制饼图。
~[800x640](${galleryViewPath}calendar-pie&edit=1&reset=1)



