
{{ target: partial-emphasis-disabled }}

#${prefix} disabled(boolean)

<ExampleUIControlBoolean default="false" />

{{ use: partial-version(
    version = "5.3.0"
) }}

是否关闭高亮状态。

关闭高亮状态可以在鼠标移到图形上，tooltip 触发，或者图例联动的时候不再触发高亮效果。在图形非常多的时候可以关闭以提升交互流畅性。



{{ target: partial-focus-blur-scope }}

### focus(string) = 'none'

{{ if: ${isGeoCoordSys} }}
{{ use: partial-version(
    version = "5.1.0"
) }}
{{ else }}
{{ use: partial-version(
    version = "5.0.0"
) }}
{{ /if }}

在高亮图形时，是否淡出其它数据的图形已达到聚焦的效果。支持如下配置：

+ `'none'` 不淡出其它图形，默认使用该配置。
+ `'self'` 只聚焦（不淡出）当前高亮的数据的图形。

{{ if: !${isGeoCoordSys} }}
+ `'series'` 聚焦当前高亮的数据所在的系列的所有图形。
{{ /if }}

{{ if: ${isGraph} }}
+ `'adjacency'` 聚焦关系图中的邻接点和边的图形。

{{ elif: ${isTree} }}
+ `'ancestor'` 聚焦所有祖先节点。
+ `'descendant'` 聚焦所有子孙节点。
{{ /if }}
{{ if: ${hasRelative} }}
+ `'relative'` 聚焦所有子孙和祖先节点。（从 `v${relativeVersion}` 开始支持）
{{ /if }}
{{ if: ${hasTrajectory} }}
+ `'trajectory'` 聚焦所有连接到当前高亮的数据的节点和边。（从 `v${trajectoryVersion}` 开始支持）
{{ /if }}

**示例：**

{{ if: !${isGeoCoordSys} }}
下面代码配置了柱状图在高亮一个图形的时候，淡出当前直角坐标系所有其它的系列。

```ts
emphasis: {
    focus: 'series',
    blurScope: 'coordinateSystem'
}
```

~[600x400](${galleryViewPath}bar-y-category-stack&reset=1&edit=1)
{{ else }}
下面代码配置了 geo 在高亮一个图形的时候，淡出所有其它的图形。

```ts
emphasis: {
    focus: 'self'
}
```

~[600x400](${galleryViewPath}geo-organ&reset=1&edit=1)
{{ /if }}

{{ if: !${isGeoCoordSys} }}
### blurScope(string) = 'coordinateSystem'

{{ use: partial-version(
    version = "5.0.0"
) }}

在开启`focus`的时候，可以通过`blurScope`配置淡出的范围。支持如下配置

+ `'coordinateSystem'` 淡出范围为坐标系，默认使用该配置。
+ `'series'` 淡出范围为系列。
+ `'global'` 淡出范围为全局。
{{ /if }}

