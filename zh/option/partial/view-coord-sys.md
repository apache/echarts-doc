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

`center` 一般用于控制或获取 [平移缩放（roam）](~${componentNameInLink}.roam) 时${sourceName}的位置。当平移缩放时，`center` 和 [zoom](~${componentNameInLink}.zoom) 的值会被相应改变。

注意：`center` 的值基于的是对象布局的原始坐标系而非画布的坐标。
如果想使用画布坐标调整绘制对象的位置和大小，使用：[${componentNameInLink}.left](~${componentNameInLink}.left) / [.right](~${componentNameInLink}.right) / [.top](~${componentNameInLink}.top) / [.bottom](~${componentNameInLink}.bottom) / [.width](~${componentNameInLink}.width) / [.height](~${componentNameInLink}.height) {{ if: ${isGeoOrMap} }}或者 [${componentNameInLink}.layoutCenter](~${componentNameInLink}.layoutCenter) / [layoutSize](~${componentNameInLink}.layoutSize){{ /if }}。


{{ if: ${isGeoOrMap} }}
`center` 默认使用原始坐标（经纬度）。如果设置了 [proejction](~${componentNameInLink}.projection) 则用投影后的坐标。

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
{{ elif: ${componentNameInLink} === 'series-graph' }}
如果 `center` 中使用绝对数值：
- 如果 [${componentNameInLink}.layout](~${componentNameInLink}.layout) 为 `'none'`，你需要在 [${componentNameInLink}.data.x](~${componentNameInLink}.data.x), [${componentNameInLink}.data.y](~${componentNameInLink}.data.y) 里提供每个节点的坐标。这时 `center` 中可使用绝对数值表示这种坐标。例如，
    ```ts
    option = {
        series: {
            type: 'graph',
            center: [0, 10],
            data: [
                {x: 100, y: 3000},
                {x: 150, y: 3500},
                {x: 200, y: 4000},
            ],
        }
    }
    // 这个关系图的包围盒（bounding rect）由 series.data.x/series.data.y 决定:
    //    minX: 100, maxX: 200,
    //    minY: 3000, maxY: 4000,
    // `center: [0, 10]` 指定了 `[0, 10]` 这个点应被放置于视口（一般为画布）中心。
    // 结果，这个关系图会被显示到很右边的位置，甚至超出画布。
    ```
- 否则，如果在 [${componentNameInLink}.layout](~${componentNameInLink}.layout) 中设定了自动布局，坐标是自动计算的不可提前预知，于是也无法用绝对数值在 `center` 中设定合适的坐标。
{{ else }}
`center` 中使用绝对数值一般无意义，因为`center` 中的绝对数值一般用于表示布局的原始坐标，而坐标是自动计算的不可预知。
{{ /if }}

百分比（字符串）值也可被用在 `center` 中，例如 `'30%'`，基于包围盒{{ if: ${isGeoOrMap} }}（由经纬度的最大最小值决定；或者，在设置了 [projection](~${componentNameInLink}.projection) 时，由投影后得到的最大最小坐标决定）{{ /if }}。你可以使用 `'0%'` 将包围盒的顶部或左侧对齐到视口（画布）中心，或使用 `'100%'` 将右侧或底部对齐到视口中心，或使用 `'50%'` 表示把整个图放于视口中心。

例如：
```ts
center: [115, '30%']
// 将${sourceName}的顶部放置到视口（画布）中心
center: [115, '0%']
// 将${sourceName}的最左侧放置到视口（画布）中心
center: ['0%', 13]
// 将${sourceName}的底部放置到视口（画布）中心
center: [115, '100%']
// 将${sourceName}的最右侧放置到视口（画布）中心
center: ['100%', 13]
// 将${sourceName}放置到视口（画布）中心
center: ['50%', '50%']
```

> 百分比字符串从 `v5.3.3` 开始引入。最初是分母是画布的宽高，但这种方式并不合理，因此从 `v6.0.0` 起改为基于包围盒。


#${prefix} zoom(number) = 1

{{ if: ${componentNameInLink} === 'series-graph' || ${componentNameInLink} === 'series-sankey' }}
<ExampleUIControlNumber default="1" min="0" step="0.1" />
{{ /if }}

当前视角的缩放比例。

{{ use: partial-zoom-value-desc() }}

当 [平移缩放（roam）](~${componentNameInLink}.roam) 时，[center](~${componentNameInLink}.center) 和 `zoom` 的值会被相应改变。

#${prefix} scaleLimit(Object)

{{ use: partial-scale-limit-desc(
    prefix = "#" + ${prefix},
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} roam(boolean|string) = false

{{ use: partial-roam-desc() }}

当缩放和平移时，[center](~${componentNameInLink}.center) 和 [zoom](~${componentNameInLink}.zoom) 的值会被相应改变。
