{{ target: series-map3D }}

# series.map3D(Object)

**三维地图**

三维地图主要用于地理区域数据的可视化，配合 [visualMap](https://echarts.apache.org/zh/option.html#visualMap) 组件用于展示不同区域的人口分布密度等数据。

相比于二维的地图，三维地图还能每个区域设置不同的高度，这个高度能够用来展示数据，也能够用来显示建筑数据中建筑的高度。

## type(string) = 'map3D'


{{ use: partial-series-name() }}


{{ use: component-geo3D-common(
    componentType="series-map3D",
    inMap=true,
    componentName="三维地图"
)  }}