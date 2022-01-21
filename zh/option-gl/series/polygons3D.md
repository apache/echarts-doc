{{ target: series-polygons3D }}

# series.polygons3D(Object)

`polygons3D` 用于可视化地图上带有高度信息的多边形数据，常用于建筑群的绘制。下图就是用`polygons3D`绘制的近 50w 数量的纽约建筑群。

![900xauto](~polygons3D-ny.jpg)

## type(string) = 'polygons3D'

## multiPolygon(boolean) = true

是否一个数据包含多个多边形。

## itemStyle(Object)

图形样式，包括颜色、透明度、描边等。

{{ use: partial-item-style(
    prefix="##",
    hasCallback=true,
    useColorPalette=true
) }}

## emphasis(Object)

鼠标 hover 高亮时图形和标签的样式。

### itemStyle(Object)

{{ use: partial-item-style(
    prefix="###"
) }}

## data(Object)

多边形的数据列表。

```ts
data: [{
    // A square
    coords: [[0, 0], [100, 0], [100, 100], [0, 100]],
    // Height
    height: 3
}, {
    // A triangle
    coords: [[50, 0], [100, 100], [0, 100]],
    // Height
    height: 5
}]
```

### coords(Array)

多边形的坐标列表。如果 [multiPolygon](~series-polygons3D.multiPolygon) 设成 true，则是包含多个多边形的数组。


## progressiveThreshold(number) = 1000

启用渐进渲染的阈值，渐进渲染可以让你在加载画面的过程中不会有阻塞。

## progressive(number) = 1000

渐进渲染每次渲染的数据量。