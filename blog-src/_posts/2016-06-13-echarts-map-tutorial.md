---
layout: post
title: ECharts 实现地图散点图（下）
description: "作为国内良心开源软件的主页君，我们以后会为大家带来更多 ECharts 优质教程！本期，主页君邀请到了百度 EFE 美女前端工程师王说，为我们介绍如何在地图散点图。如果看得跃跃欲试，文末还有小作业，跟着主页君一起学 ECharts 吧！"
tags: [map, tutorial]
image:
  feature: post/2016-06-13-bmap-4.png
---

上一篇我们介绍了如何使用 ehcarts 内置地图实现地图上绘制的散点图，这篇中，我们将讲解如何在百度地图上绘制散点图。


## 一、初始准备


首先要创建 html 和引入 ECharts 包，具体说明详见上篇：[ECharts 实现地图散点图（一）]({{ site.url }}/2016/04/28/echarts-map-tutorial.html)。


## 二、引入echarts百度地图扩展包

在 [github](https://github.com/ecomfe/echarts/tree/master/extension/bmap) 上下载 ECharts 扩展 bmap.js，放在 /extension/ 目录下，并引入 html 中：


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

	<script src="/extension/bmap.js"></script>

	</html>


```

## 三、绘制地图

1.在 js 中，新建 ECharts 示例，并为其设置配置项 option：


```javascript
var bmapChart = echarts.init(document.getElementById('map-wrap'));

var option = {
	// 这里是 ECharts 的配置项，接下来会说明
}

bmapChart.setOption(option);


```

2.添加百度地图：

在 option 中添加 bmap 相关设置：

```javascript
var option = {
	bmap: {
      	center: [116.307698, 40.056975], // 中心位置坐标
      	zoom: 5, // 地图缩放比例
      	roam: true // 开启用户缩放
  	}

}

```

ECharts 将百度地图部分配置集成在了 bmap 中，包括：


|参数|说明|格式|
|--|--|--|
|center|中心点的百度坐标|坐标数组, 如：[116.307698, 40.056975]|
|zoom|初始缩放比|number|
|roam|是否允许用户缩放操作|boolean|
|mapStyle|地图自定义样式|object, 如：{ styleJson: [...] }|




这样百度地图就加载到页面中了，这里显示百度地图的默认样式，稍后第四部分将为百度地图添加自定义样式的配置：

![百度地图1]({{ site.url }}/images/post/2016-06-13-bmap-1.png)




## 四、绘制散点图


绘制散点图的方法与上篇中绘制散点图方法相同，需要修改的部分是，将散点图的坐标系 `coordinateSystem` 改成使用 bmap


```javascript
var myData = [

	{name: '海门', value: [121.15, 31.89, 90]},
  	{name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
  	{name: '招远', value: [120.38, 37.35, 142]},
    {name: '舟山', value: [122.207216, 29.985295, 123]},
  	...
]


var option = {
	bmap: {
      	...
  	},
  	visualMap: {	// 视觉映射组件
		type: 'continuous',
		min: 0,
		max: 200,
		calculable: true,
		inRange: {
             	color: ['#50a3ba','#eac736','#d94e5d']
          },
		textStyle: {
			color: '#fff'
		}
     	}
	series: [
		{
			name: '销量',
			type: 'scatter',

			coordinateSystem: 'bmap', // 坐标系使用bmap

			data: myData
		}
	]
}

```


绘制散点后的百度地图：

![百度地图2]({{ site.url }}/images/post/2016-06-13-bmap-2.png)


## 四、	自定义百度地图样式


地图的样式配置 `bmap.mapStyle` 中 `styleJson` 与百度地图内置的样式配置一致，具体参考百度地图API开发指南中 [定制个性地图](http://lbsyun.baidu.com/index.php?title=jspopular/guide/custom) 章节的介绍。


这里我们设置一个较暗色调的地图,如下：


```javascript
var option = {
		bmap: {
      		center: [116.307698, 40.056975],
         		zoom: 5,

     	    	roam: true, // 允许缩放

     	    	mapStyle: {  // 百度地图自定义样式
     	    		styleJson: [
     	    			// 陆地
                 		{
						"featureType": "land",
                          "elementType": "all",
                          "stylers": {
                              "color": "#073763"
                          }
                      },
                      // 水系
                      {
                          "featureType": "water",
                          "elementType": "all",
                          "stylers": {
                              "color": "#073763",
                              "lightness": -54
                          }
                      },
                      // 国道与高速
                      {
                          "featureType": "highway",
                          "elementType": "all",
                          "stylers": {
                              "color": "#45818e"
                          }
                      },
                      // 边界线
                      {
                          "featureType": "boundary",
                          "elementType": "all",
                          "stylers": {
                              "color": "#ffffff",
                              "lightness": -62,
                              "visibility": "on"
                          }
                      },
                      // 行政标注
                      {
                          "featureType": "label",
                          "elementType": "labels.text.fill",
                          "stylers": {
                              "color": "#ffffff",
                              "visibility": "on"
                          }
                      },
                      {
                          "featureType": "label",
                          "elementType": "labels.text.stroke",
                          "stylers": {
                              "color": "#444444",
                              "visibility": "on"
                          }
                      }
     	    		]
     	    	}
  		},
  		...
	}
```

实现效果如下图：

![百度地图3]({{ site.url }}/images/post/2016-06-13-bmap-3.png)


除了上述四个配置，其他地图设置都可以通过 [百度地图提供的API](http://lbsyun.baidu.com/index.php?title=jspopular) 实现

获取百度地图实例的方法如下：

```javascript
var bmap = bmapCharts.getModel().getComponent('bmap').getBMap(); // 百度地图实例

```

例如，我们可以为地图添加一个缩放控件和一个比例尺：

```javascript
bmap.addControl(new BMap.NavigationControl()); // 缩放控件
bmap.addControl(new BMap.ScaleControl()); // 比例尺

```

![百度地图4]({{ site.url }}/images/post/2016-06-13-bmap-4.png)



