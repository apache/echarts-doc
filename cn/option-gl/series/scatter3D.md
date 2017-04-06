{{ target: series-scatter3D }}

# series.scatter3D(Object)

三维散点/气泡图。可以用于[三维直角坐标系 grid3D](~grid3D)，[三维地理坐标系 geo3D](~geo3D)，[地球 globe](~globe)，通过大小，颜色等属性展示数据。

## type(string) = 'scatter3D'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    cartesian3D=true,
    geo3D=true,
    globe=true
 ) }}

{{ use: partial-zlevel }}
