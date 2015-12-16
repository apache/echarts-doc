{{target: series-common}}

{{use: component-common}}

## width(number)

该系列视图的高度

## height(number)

该系列视图的宽度

## coordinateSystem(string) = ${coordSysDefault}

该系列使用的坐标系，可选：

{{if: ${cartesian2d} }}
+ cartesian2d
    使用二维的笛卡尔坐标系，通过 `xAxisIndex`, `yAxisIndex` 指定相应的坐标轴组件。
{{/if}}

{{if: ${polar} }}
+ polar
    使用极坐标系，通过 `polarIndex` 指定相应的极坐标组件
{{/if}}

{{if: ${geo} }}
+ geo
    使用地理坐标系，通过 `geoIndex` 指定相应的地理坐标系组件
{{/if}}



{{if: ${cartesian2d} }}
## xAxisIndex(number) = 0

使用的 x 轴(xAxis)的 index，在单个图表实例中存在多个 x 轴的时候有用

## yAxisIndex(number) = 0

使用的 y 轴(yAxis)的 index，在单个图表实例中存在多个 y轴的时候有用
{{/if}}



{{if: ${polar} }}
## polarIndex(number) = 0

使用的极坐标系(polar)的 index，在单个图表实例中存在多个极坐标系的时候有用

{{/if}}



{{if: ${geo} }}
## geoIndex(number) = 0

使用的地理坐标系(geo)的 index，在单个图表实例中存在多个地理坐标系的时候有用

{{/if}}