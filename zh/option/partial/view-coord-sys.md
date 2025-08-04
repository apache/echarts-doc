{{ target: partial-view-coord-sys-common }}

{{ if: ${componentMainType} && ${componentSubType} }}
{{ var: componentNameInLink = ${componentMainType} + '-' + ${componentSubType} }}
{{ else }}
{{ var: componentNameInLink = ${componentMainType} }}
{{ /if }}

{{ if: ${componentNameInLink} === 'geo'
    || ${componentNameInLink} === 'series-map'
}}
{{ var: isGeoOrMap = true }}
{{ var: sourceName = "地图" }}
{{ else }}
{{ var: sourceName = "图形" }}
{{ /if }}

#${prefix} center(Array)

{{ if: ${componentNameInLink} === 'series-graph' || ${componentNameInLink} === 'series-sankey' }}
<ExampleUIControlVector default="0,0" dims="x,y" />
{{ /if }}

`center` 指定了把${sourceName}上的哪个点放在可视区的中心。

{{ if: ${isGeoOrMap} }}
默认使用原始坐标（经纬度）。如果设置了 [proejction](~${componentNameInLink}.projection) 则用投影后的坐标。

示例：
```ts
// 把地图的这个经纬度对应的点放在可视区的中心。
center: [115.97, 29.71]
```

```ts
projection: {
    projection: (pt) => project(pt)
},
center: project([115.97, 29.71])
```
{{ /if }}

`center` 也可以是一个百分比字符串，例如 `'30%'`，分母是${sourceName}的包围盒高宽{{ if: ${isGeoOrMap} }}（由经纬度的最大最小值决定；或者，在设置了 [projection](~${componentNameInLink}.projection) 时，由投影后得到的最大最小坐标决定）{{ /if }}。你可以使用 `'0%'` 将${sourceName}的顶部或左侧对齐到视口（画布）中心，或使用 `'100%'` 将右侧或底部对齐到视口中心。

例如：
```ts
center: [115.97, '30%']
// 将${sourceName}的顶部放置到视口（画布）中心
center: [115.97, '0%']
// 将${sourceName}的最左侧放置到视口（画布）中心
center: ['0%', 13]
// 将${sourceName}的底部放置到视口（画布）中心
center: [115.97, '100%']
// 将${sourceName}的最右侧放置到视口（画布）中心
center: ['100%', 13]
```

> 百分比字符串从 `v5.3.3` 开始引入。最初是分母是画布的宽高，但这种方式并不合理，因此从 `v6.0.0` 起改为基于包围盒。


#${prefix} zoom(number) = 1

{{ if: ${componentNameInLink} === 'series-graph' || ${componentNameInLink} === 'series-sankey' }}
<ExampleUIControlNumber default="1" min="0" step="0.1" />
{{ /if }}

当前视角的缩放比例。

#${prefix} scaleLimit(Object)

{{ use: partial-scale-limit(
    prefix = "#" + ${prefix}
) }}

#${prefix} roam(boolean|string) = false

{{ use: partial-roam() }}
