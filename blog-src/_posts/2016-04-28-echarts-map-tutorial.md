---
layout: post
title: ECharts 实现地图散点图（上）
description: "ECharts 作为国内应用最广泛的前端可视化生成工具，提供了丰富的图表展现方式和便捷的图表操作。ECharts 支持 geoJson 格式的地图，并且官网上提供了现成的 world，china 及全国34个省市自治区地图的下载。这篇文章中我们将会讲解如何使用 ECharts 实现一个中国地图上绘制的散点图。"
tags: [map, tutorial]
image:
  feature: post/2016-04-28-echarts-map-tutorial-scatter-2.png
---

ECharts 作为国内应用最广泛的前端可视化生成工具，提供了丰富的图表展现方式和便捷的图表操作。
ECharts 支持 geoJson 格式的地图，并且官网上提供了现成的 world，china 及全国34个省市自治区地图的下载。这篇文章中我们将会讲解如何使用 ECharts 实现一个中国地图上绘制的散点图。

## 一、初始准备

#### 1. 新建html

首先，新建项目目录 echartsMapDemo，在其中新建一个 html 文件 `index.html`。

echartsMapDemo/index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  	<meta charset="UTF-8">
  	<title>ECharts map Demo</title>
</head>
<body>
</body>
</html>

```

#### 2.引入echarts文件

从 [echarts官网](http://echarts.baidu.com/download.html) 下载最新完整开发包（目前最新版本是3.1.4）。

将下载好的包放置在 `echartsMapDemo/dep` 目录下并在 html 中以 script 标签引入：


```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>ECharts map Demo</title>
</head>
<body>
</body>

<script src="/dep/echarts.min.js"></script>

</html>
```
#### 3.创建图标容器

在 html 中定义一个 div 作为地图的容器，高度设为 500px 。别忘了，一定要保证容器高度不为 0：

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>ECharts map Demo</title>
</head>
<body>

	<div id="map-wrap" style="height: 500px;">
		<!-- 这里以后是地图 -->
	</div>

</body>
<script src="/dep/echarts.min.js"></script>
</html>
```


然后，我们还需要一个地图文件，echart 提供两种格式的地图数据，一种是 js 格式，一种是 JSON 格式。下文中我们会分别使用这两种方式实现。

同样去 [官网](http://echarts.baidu.com/download-map.html) 上下载，这里选择下载中国地图 china.js 或 china.json 。你也可以根据需要选择其他省份地图或世界地图

好了，准备工作完成，现在就开始绘制地图了~



## 二、绘制地图



echart 提供两种格式的地图数据，一种是 js 格式，一种是 JSON 格式。下面分别介绍两种格式的用法：


### 引用js格式地图数据：

#### 1.在[官网](http://echarts.baidu.com/download-map.html)上下载 js 格式中国地图 china.js，将下载好的 china.js 放在 `echartsMapDemo/map/js` 目录下，以 script 标签引入到 html 中:


```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>ECharts map Demo</title>
</head>
<body>
	<div id="map-wrap" style="height: 500px;">
		<!-- 这里以后是地图 -->
	</div>
</body>
<script src="/dep/echarts.min.js"></script>

<script src="/map/js/china.js"></script>

</html>
```


#### 2.在js中用 `echarts.init()` 方法初始化一个 ECharts 实例，在 init() 中传入图表容器 Dom 对象，

同时定义一个变量 `option`，作为图表的配置项：


```javascript
// 初始化echarts示例mapChart
var mapChart = echarts.init(document.getElementById('map-wrap'));

// mapChart的配置
var option = {

};

```


#### 3.通过配置 option，新建一个地理坐标系 `geo` ，地图类型为中国地图。


```javascript
var option = {
	geo: {
      	map: 'china'
  	}
}

```


geo.map 属性定义该地理坐标系中的地图数据，这里我们要用 china.js ，设置map值为 'china'。

这里需要注意，中国地图的map值为 'china' ，世界地图的map值为 'world' ，但如果要引用省市自治区地图 map 值为**简体中文**，例如 beijing.js，map 值为'北京'。


#### 4.调用 `setOption(option)` 为图表设置配置项。

```javascript
mapChart.setOption(option);

```





### 引用JSON格式地图数据：




#### 1.同样在[官网](http://echarts.baidu.com/download-map.html)下载JSON格式的地图数据，放在`echartsMapDemo/map/json`目录下

#### 2.json数据通过异步方式加载，加载完成后需要手动注册地图

这里我们使用 jQuery 的 $.get() 方法异步加载 china.json （首先要在html中引用 jquery ，这里省略操作说明），在回调函数中，以上述同样的方法初始化一个 mapCharts 、注册地图并设置 option：



```javascript
$.get('map/json/china.json', function (chinaJson) {

		echarts.registerMap('china', chinaJson); // 注册地图

		var mapChart = echarts.init(document.getElementById('map-wrap'));

  		var option = {
  			geo: {
      			map: 'china'
  			}
  		}

 		 	mapChart.setOption(option);

  	});
});

```




现在就可以在页面中看到中国地图了：

![地图]({{ site.url }}/images/post/2016-04-28-echarts-map-tutorial-china-js-1.png)




为了突出散点效果，先为地图改个颜色


```javascript
var option = {
	geo: {
        map: 'china',

        itemStyle: {					// 定义样式
            normal: {					// 普通状态下的样式
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {					// 高亮状态下的样式
                areaColor: '#2a333d'
            }
        }
    },
	backgroundColor: '#404a59',  		// 图表背景色
}

```


换装后的地图：

![中国地图底图]({{ site.url }}/images/post/2016-04-28-echarts-map-tutorial-china-js-2.png)




## 三、绘制散点图

---


#### 1.新建散点图series

在 option 中添加一个 series ， series 的类型为散点图 `scatter` ，坐标系为地理坐标系 `geo` 。


```javascript
var option = {
	geo: {
      	...
  	},
	backgroundColor: '#404a59',

	series: [
		{
			name: '销量', // series名称
			type: 'scatter', // series图表类型
			coordinateSystem: 'geo' // series坐标系类型
		}
	]
}

```




#### 2.添加数据

ECharts 中 series.data 是定义图表数据内容的数组，其中每个项数据格式为：


```javascript
{
	name: '北京',    // 数据项名称，在这里指地区名称

	value: [        // 数据项值
		116.46,     // 地理坐标，经度
		39.92,      // 地理坐标，纬度
		340         // 北京地区的数值
	]
}


```

首先我们将需要渲染的数据转换成上述数据格式，存在一个变量中：

```javascript
var myData = [

	{name: '海门', value: [121.15, 31.89, 90]},
  	{name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
  	{name: '招远', value: [120.38, 37.35, 142]},
    {name: '舟山', value: [122.207216, 29.985295, 123]},
  	...
]


```

然后，将 myData 赋值给 series.data：

```javascript
var option = {
	geo: {
      	...
  	},
  	backgroundColor: '#404a59',
	series: [
		{
			name: '销量',
			type: 'scatter',
			coordinateSystem: 'geo',

			data: myData // series数据内容
		}
	]
}

```

数据添加完成，就可以在图表中看到渲染出的散点了：

![散点图1]({{ site.url }}/images/post/2016-04-28-echarts-map-tutorial-scatter-1.png)




#### 3.添加视觉映射组件

[视觉映射组件](http://echarts.baidu.com/option.html#visualMap)是标识某一数据范围内数据及颜色对应关系的控件，视觉映射组件分为连续型和分段型，这里我们选用连续型 `type:continuous` 。同时，通过视觉映射组件可以实现 ECharts 值域漫游功能，即通过拖拽控件手柄选择不同数值范围，达到对图表数据的筛选显示。
在 `visualMap` 属性中设置值域控件的相关配置：

```javascript
var option = {
	...

	visualMap: {
		type: 'continuous', // 连续型
		min: 0,       		// 值域最小值，必须参数
		max: 200,			// 值域最大值，必须参数
		calculable: true,	// 是否启用值域漫游
		inRange: {
             	color: ['#50a3ba','#eac736','#d94e5d']
                             // 指定数值从低到高时的颜色变化
          },
		textStyle: {
			color: '#fff'	// 值域控件的文本颜色
		}
     	}
}

```


添加了值域控件的图表效果：

![散点图2]({{ site.url }}/images/post/2016-04-28-echarts-map-tutorial-china-js-2.png)

这样一个基于中国地图的散点图就基本实现了，如果想要继续完善图表，可以为它添加标题，图例，高亮提示等控件，配置方式在这里查看（[ECharts 配置项手册](http://echarts.baidu.com/option.html#title)），在此不再详细说明。


