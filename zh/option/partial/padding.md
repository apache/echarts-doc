
{{ target: partial-padding }}

<ExampleUIControlVector min="0" dims="T,R,B,L"  />

${componentName}的内边距（内容周围的留白区域），单位为像素 (`px`)。每个方向的默认值为 `${defaultPadding|default(5)}`。支持传入单个数值、双值数组或四值数组来灵活配置。

使用示例：
```ts
// 同时应用于上下左右四个方向
padding: 5
// [上下, 左右] -> 上下内边距为 5，左右内边距为 10
padding: [5, 10]
// 顺时针方向：[上, 右, 下, 左]
padding: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

