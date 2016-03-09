{{target: component-circular-layout}}

{{use: partial-z-zlevel}}


## center(Array) = ${defaultCenter|default("['50%', '50%']")}

${componentName}的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。

支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。

**使用示例：**
```
// 设置成绝对的像素值
center: [400, 300]
// 设置成相对的百分比
center: ['50%', '50%']
```

## radius(${defaultRadiusType|default("Array")}) = ${defaultRadius}

${componentName}的半径，数组的第一项是内半径，第二项是外半径。

支持设置成百分比，相对于容器高宽中较小的一项的一半。
