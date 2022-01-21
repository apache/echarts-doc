
{{ target: partial-padding }}

<ExampleUIControlVector min="0" dims="T,R,B,L"  />

${componentName}内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。

使用示例：
```ts
// 设置内边距为 5
padding: 5
// 设置上下的内边距为 5，左右的内边距为 10
padding: [5, 10]
// 分别设置四个方向的内边距
padding: [
    5,  // 上
    10, // 右
    5,  // 下
    10, // 左
]
```

