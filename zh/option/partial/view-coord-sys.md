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

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} zoom(number) = 1

{{ if: ${componentNameInLink} === 'series-graph' || ${componentNameInLink} === 'series-sankey' }}
<ExampleUIControlNumber default="1" min="0" step="0.1" />
{{ /if }}

当前视角的缩放比例。

{{ use: partial-zoom-value-desc() }}

当 [平移缩放（roam）](~${componentNameInLink}.roam) 时，[center](~${componentNameInLink}.center) 和 `zoom` 的值会被相应改变。

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} scaleLimit(Object)

{{ use: partial-scale-limit-desc(
    prefix = "#" + ${prefix},
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} roam(boolean|string) = false

{{ use: partial-roam-desc() }}

当缩放和平移时，[center](~${componentNameInLink}.center) 和 [zoom](~${componentNameInLink}.zoom) 的值会被相应改变。

#${prefix} roamTrigger(string) = ${roamTriggerDefault|default("'selfRect'")}

{{ use: partial-version(version = "6.0.0") }}

[缩放和平移（roam）](~${componentNameInLink}.roam) 可被鼠标触发。

Options:
- `'selfRect'`:

    缩放和平移的触发点只能是图形元素形成的包围盒中。

- `'global'`:

    {{ if: ${supportClip} }}如果 `clip: true`，缩放和平移的触发点是剪裁矩形中的任何地方；否则，触发点是画布中的任何地方。{{ else }}缩放和平移的触发点是画布中的任何地方。{{ /if }}

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}



{{ target: partial-preserve-aspect }}

#${prefix} preserveAspect(boolean|string) = ${preserveAspectDefault|default(false)}

{{ if: ${componentNameInLink} === 'geo' || ${componentNameInLink} === 'series-map' }}
{{ var: isGeoOrMap = true }}
{{ /if }}

<ExampleUIControlBoolean default="false" />

{{ use: partial-version(version = "6.0.0") }}

`aspect ratio` 指 `width / height`。

"preserve aspect" 指是否要保持被渲染的内容的原始包围盒的 `aspect ratio`。

{{ use: partial-view-coord-sys-allocated-rect-desc(
    componentNameReadable = ${componentNameReadable},
    componentNameInLink = ${componentNameInLink},
    isGeoOrMap = ${isGeoOrMap}
) }}

但是这个矩形的 `aspect ratio` 不一定和内容的原始 `aspect ratio` 一致，从而可能导致内容被拉伸而失真。

`preserveAspect` 的不同选项有如下效果：
- `null` / `undefined` / `false`（默认）：不会保持内容的原始 `aspect ratio`，而是拉伸内容以填满 `${componentNameReadable}矩形区域`。拉伸有可能导致图形失真。
- `'contain'` / `true`：保持内容的 `aspect ratio`。内容的包围盒被完整地包含在 `${componentNameReadable}矩形区域` 中，并尽可能放大以触达边界。此时可使用 [preserveAspectAlign](~${componentNameInLink}.preserveAspectAlign) 和 [preserveAspectVerticalAlign](~${componentNameInLink}.preserveAspectVerticalAlign) 调整位置。
- `'cover'`：保持内容的原始 `aspect ratio`。内容的包围盒会覆盖整个 `${componentNameReadable}矩形区域`，并尽可能缩小以触达边界。此时可使用 [preserveAspectAlign](~${componentNameInLink}.preserveAspectAlign) 和 [preserveAspectVerticalAlign](~${componentNameInLink}.preserveAspectVerticalAlign) 调整位置。

{{ if: ${isGeoOrMap} }}
注意：当使用 [layoutCenter](~${componentNameInLink}.layoutCenter) 和 [layoutSize](~${componentNameInLink}.layoutSize) 时，始终会保留宽高比，无论 `preserveAspect` 配置为何值。
{{ /if }}

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} preserveAspectAlign(string) = 'center'

<ExampleUIControlEnum options="left,right,center" default="center" />

{{ use: partial-version(version = "6.0.0") }}

可选项：`'left'` | `'right'` | `'center'`。

参见 [preserveAspect](~${componentNameInLink}.preserveAspect)。

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}

#${prefix} preserveAspectVerticalAlign(string) = 'middle'

<ExampleUIControlEnum options="top,bottom,middle" default="middle" />

{{ use: partial-version(version = "6.0.0") }}

Options: `'top'` | `'bottom'` | `'middle'`。

参见 [preserveAspect](~${componentNameInLink}.preserveAspect)。

{{ use: partial-view-coord-sys-indicator-example-link(
    componentNameInLink = ${componentNameInLink}
) }}



{{ target: partial-view-coord-sys-indicator-example-link }}

{{ if: ${componentNameInLink} === 'geo' || ${componentNameInLink} === 'series-map' }}
**参考示例**来理解此概念：[geo roam indicator](${galleryEditorPath}doc-example/geo-roam-indicator&edit=1&reset=1).
{{ elif: ${componentNameInLink} === 'series-graph' }}
**参考示例**来理解此概念：[graph roam indicator](${galleryEditorPath}doc-example/graph-roam-indicator&edit=1&reset=1).
{{ /if }}




{{ target: partial-view-coord-sys-allocated-rect-desc }}

为 ${componentNameReadable} 分配的 `矩形区域` 是通过以下配置决定的：
[${componentNameInLink}.left](~${componentNameInLink}.left) / [.right](~${componentNameInLink}.right) / [.top](~${componentNameInLink}.top) / [.bottom](~${componentNameInLink}.bottom) / [.width](~${componentNameInLink}.width) / [.height](~${componentNameInLink}.height){{ if: ${isGeoOrMap} }} / [.aspectScale](~${componentNameInLink}.aspectScale){{ /if }}。
