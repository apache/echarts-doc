
{{ target: component-circular-layout }}

{{ use: partial-z-zlevel() }}

## center(Array) = ${defaultCenter|default("['50%', '50%']")}

<ExampleUIControlPercentVector dims="x,y" />

${componentName}的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。

支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。

**使用示例：**
```
// 设置成绝对的像素值
center: [400, 300]
// 设置成相对的百分比
center: ['50%', '50%']
```

## radius(number|string|Array) = ${defaultRadius}

<ExampleUIControlPercentVector dims="inner,outer" default="0%, 75%" />

${componentName}的半径。可以为如下类型：

+ `number`：直接指定外半径值。
+ `string`：例如，`'20%'`，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。

{{ if: !${disableArray} }}
+ `Array.<number|string>`：数组的第一项是内半径，第二项是外半径。每一项遵从上述 `number` `string` 的描述。
{{ /if }}

