{{ target: series-common-coordinate-system }}

## coordinateSystem(string) = ${defaultCoordinateSystem}

该系列使用的坐标系，可选：

{{if: ${none} }}
+ `null`

    无坐标系。
{{/if}}

{{if: ${cartesian3D} }}

+ `'cartesian3D'`

    使用三维笛卡尔坐标系，通过 [grid3DIndex](~series-${seriesType}.grid3DIndex) 指定相应的三维笛卡尔坐标系组件。
{{/if}}

{{if: ${geo3D} }}

+ `'geo3D'`

    使用三维地理坐标系，通过 [geo3DIndex](~series-${seriesType}.geo3DIndex) 指定相应的三维地理坐标系组件
{{/if}}

{{if: ${globe} }}

+ `'globe'`

    使用地球坐标系，通过 [globeIndex](~series-${seriesType}.globeIndex) 指定相应的地球坐标系组件
{{/if}}


{{if: ${cartesian3D} }}
## grid3DIndex(number) = 0

使用的 [grid3D](~grid3D) 组件的索引。默认使用第一个 [grid3D](~grid3D) 组件。

{{/if}}



{{if: ${geo3D} }}
## geo3DIndex(number) = 0

坐标轴使用的 [geo3D](~geo3D) 组件的索引。默认使用第一个 [geo3D](~geo3D) 组件。

{{/if}}



{{if: ${globe} }}
## globeIndex(number) = 0

坐标轴使用的 [globe](~globe) 组件的索引。默认使用第一个 [globe](~globe) 组件。

{{/if}}
