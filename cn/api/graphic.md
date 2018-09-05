{{ target: echarts-graphic }}

## graphic

图形相关帮助方法。

### clipPointsByRect(Function)

输入一组点，和一个矩形，返回被矩形截取过的点。

```js
(
    // 要被截取的点列表，如 [[23, 44], [12, 15], ...]。
    points: Array.<Array.<number>>,
    // 用于截取点的矩形。
    rect: {
        x: number,
        y: number,
        width: number,
        height: number
    }
) => Array.<Array.<number>> // 截取结果。
```

### clipRectByRect(Function)

输入两个矩形，返回第二个矩形截取第一个矩形的结果。

```js
(
    // 要被截取的矩形。
    targetRect: {
        x: number,
        y: number,
        width: number,
        height: number
    },
    // 用于截取点的矩形。
    rect: {
        x: number,
        y: number,
        width: number,
        height: number
    }
) => { // 截取结果。
    x: number,
    y: number,
    width: number,
    height: number
}
```

注意：如果矩形完全被截干净，会返回 `undefined`。
