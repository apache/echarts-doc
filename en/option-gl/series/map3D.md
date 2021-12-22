{{ target: series-map3D }}

# series.map3D(Object)

**3D map**

3D maps are mainly used for visualizing geographic area data. With the [visualMap] (https://echarts.apache.org/en/option.html#visualMap) component, it can be used to display data such as population distribution density in different regions.

Compared to 2D maps, 3D maps can set different heights for each area. This height can be used to display data and to display the height of the building in the building data.

## type(string) = 'map3D'


{{ use: partial-series-name() }}


{{ use: component-geo3D-common(
    componentType="series-map3D",
    inMap=true,
    componentName="三维地图"
)  }}