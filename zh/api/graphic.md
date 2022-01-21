{{ target: echarts-graphic }}

## graphic

图形相关帮助方法。



### extendShape(Function)

创建一个新的 shape class。

```ts
(
    opts: Object
) => zrender.graphic.Path
```

更多的关于参数 `opts` 的细节，请参阅 [zrender.graphic.Path](https://ecomfe.github.io/zrender-doc/public/api.html#zrenderpath)。


### registerShape(Function)

注册一个开发者定义的 shape class。

```ts
(
    name: string,
    ShapeClass: zrender.graphic.Path
)
```

`ShapeClass` 须用 [echarts.graphic.extendShape](~echarts.graphic.extendShape) 生成。
注册后，这个 class 可以用 [echarts.graphic.getShapeClass](~echarts.graphic.getShapeClass) 方法得到。
`registerShape` 会覆盖已注册的 class，如果用相同的 `name` 的话。
注册的 class，可以被用于 [自定义系列（custom series）](option.html#series-custom) 和
[图形组件（graphic component）](option.html#graphic)，声明 `{type: name}` 即可。

例如：
```ts
var MyShape = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    buildPath: function (ctx, shape) {
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + shape.width, shape.y);
        ctx.lineTo(shape.x, shape.y + shape.height);
        ctx.lineTo(shape.x + shape.width, shape.y + shape.height);
        ctx.closePath();
    }
});
echarts.graphic.registerShape('myCustomShape', MyShape);

var option = {
    series: {
        type: 'custom',
        coordinateSystem: 'none',
        renderItem: function (params, api) {
            return {
                type: 'myCustomShape',
                shape: {
                    x: api.value(0),
                    y: api.value(1),
                    width: api.value(2),
                    height: api.value(3)
                },
                style: {
                    fill: 'red'
                }
            };
        },
        data: [[10, 20, 30, 40]]
    }
};
```


### getShapeClass(Function)

得到一个 [注册](~echarts.graphic.registerShape) 好的 class。

```ts
(
    name: String
) => zrender.graphic.Path
```

这些内置 shape class 会被默认预先注册进去:
`'circle'`, `'sector'`, `'ring'`, `'polygon'`, `'polyline'`, `'rect'`, `'line'`, `'bezierCurve'`, `'arc'`.


### clipPointsByRect(Function)

输入一组点，和一个矩形，返回被矩形截取过的点。

```ts
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

```ts
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
