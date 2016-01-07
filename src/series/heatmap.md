
{{target: series-heatmap}}

# series.heatmap(Object)
**热力图**

热力图主要通过颜色去表现数值的大小，必须要配合 [visualMap](~visualMap) 组件使用。

可以应用在直角坐标系以及地理坐标系上，这两个坐标系上的表现形式相差很大。

直角坐标系上必须要使用两个类目轴，


## type(string) = 'heatmap'

{{ use: partial-series-name() }}

{{use: partial-coord-sys(
    seriesType="heatmap",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=true
)}}