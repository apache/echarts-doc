{{ target: series-surface }}

# series.surface(Object)

曲面图。支持通过 [parametric](~series-surface.parametric) 绘制[参数曲面](https://en.wikipedia.org/wiki/Parametric_surface)。

下图就是一个配置成金属材质的类似一个金属零件的参数曲面。

![500xauto](~parametric-surface.png)

## type(string) = 'surface'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    defaultCoordinateSystem='cartesian3D',
    cartesian3D=true
) }}

## parametric(boolean) = false

是否为参数曲面。

## wireframe(Object)

曲面图的网格线。

### show(boolean) = true

是否显示网格线。默认显示。

### lineStyle(Object)

网格线的样式。

{{ use: partial-line-style(
    prefix="###",
    defaultColor="#222",
    defaultWidth=1
) }}

## equation(Object)

曲面的函数表达式。如果需要展示的是函数曲面，可以不设置 [data](~series-surface.data)，通过 [equation](~series-surface.equation) 去声明函数表达式。例如通过下面这个函数可以模拟波纹效果。

```ts
equation: {
    x: {
        step: 0.1,
        min: -3,
        max: 3,
    },
    y: {
        step: 0.1,
        min: -3,
        max: 3,
    },
    z: function (x, y) {
        return Math.sin(x * x + y * y) * x / 3.14
    }
}
```

### x(Object)
自变量 x。

#### step(number)
x 的步长。

#### min(number)
x 的最小值。

#### max(number)
x 的最大值。

### y(Object)
自变量 y。

#### step(number)
y 的步长。

#### min(number)
y 的最小值。

#### max(number)
y 的最大值。

### z(Function)
因变量 z。

z 为关于 [x](~series-surface.equation.x), [y](~series-surface.equation.y) 的函数。

```ts
(x: number, y: number) => number
```

## parametricEquation(Object)

曲面的[参数方程](https://zh.wikipedia.org/wiki/%E5%8F%83%E6%95%B8%E6%96%B9%E7%A8%8B)。在[data](~series-surface.data)没被设置的时候，可以通过 [parametricEquation](~series-surface.equation) 去声明参数参数方程。在 [parametric](~series-surface) 为`true`时有效。

参数方程是 [x](~series-surface.parametricEquation.x)、[y](~series-surface.parametricEquation.y)、 [z](~series-surface.parametricEquation.z) 关于参数 [u](~series-surface.parametricEquation.u)、[v](~series-surface.parametricEquation.v) 的方程。

下面的参数方程就是绘制前面图中类似一个金属零件的参数曲面的：

```ts
var aa = 0.4;
var r = 1 - aa * aa;
var w = sqrt(r);
...
parametricEquation: {
    u: {
        min: -13.2,
        max: 13.2,
        step: 0.5
    },
    v: {
        min: -37.4,
        max: 37.4,
        step: 0.5
    },
    x: function (u, v) {
        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
        return -u + (2 * r * cosh(aa * u) * sinh(aa * u) / denom);
    },
    y: function (u, v) {
        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
        return 2 * w * cosh(aa * u) * (-(w * cos(v) * cos(w * v)) - (sin(v) * sin(w * v))) / denom;
    },
    z: function (u, v) {
        var denom = aa * (pow(w * cosh(aa * u), 2) + aa * pow(sin(w * v), 2))
        return  2 * w * cosh(aa * u) * (-(w * sin(v) * cos(w * v)) + (cos(v) * sin(w * v))) / denom
    }
}
```

### u(Object)
自变量 u。

#### step(number)
u 的步长。

#### min(number)
u 的最小值。

#### max(number)
u 的最大值。

### v(Object)
自变量 v。

#### step(number)
v 的步长。

#### min(number)
v 的最小值。

#### max(number)
v 的最大值。

### x(Function)

x 为关于 [u](~series-surface.equation.u), [v](~series-surface.equation.v) 的函数。

```ts
(u: number, v: number) => number
```

### y(Function)

x 为关于 [u](~series-surface.equation.u), [v](~series-surface.equation.v) 的函数。

```ts
(u: number, v: number) => number
```

### z(Function)

x 为关于 [u](~series-surface.equation.u), [v](~series-surface.equation.v) 的函数。

```ts
(u: number, v: number) => number
```


## itemStyle(Object)

曲面的颜色、不透明度等样式。

{{ use: partial-item-style(
    componentType='series-surface',
    componentName='曲面图'
) }}

## data(Array)

曲面图的数据数组。

数据是线性存储的数组，包含`X 顶点数`x`Y 顶点数`个数据。一个 5 x 5 的曲面共有 25 个顶点，数据在数组中的索引如下

![400xauto](~surface-index.png)

上图使用的数据：

```ts
data: [
    [-1,-1,0],[-0.5,-1,0],[0,-1,0],[0.5,-1,0],[1,-1,0],
    [-1,-0.5,0],[-0.5,-0.5,1],[0,-0.5,0],[0.5,-0.5,-1],[1,-0.5,0],
    [-1,0,0],[-0.5,0,0],[0,0,0],[0.5,0,0],[1,0,0],
    [-1,0.5,0],[-0.5,0.5,-1],[0,0.5,0],[0.5,0.5,1],[1,0.5,0],
    [-1,1,0],[-0.5,1,0],[0,1,0],[0.5,1,0],[1,1,0]
]
```

每一项分别为 `x`, `y`, `z`。

对于参数方程来说，每一项需要存储五个数据，分别是 `x`, `y`, `z` 和参数 `u`, `v`。而数据的索引按照`u`, `v` 的顺序。例如下面的数据：

```ts
data: [
    // v 为 0，u 从 -3.14 到 3.13
    [0,0,1,-3.14,0],[0,0,1,-1.57,0],[0,0,1,0,0],[0,0,1,1.57,0],[0,0,1,3.14,0],
    // v 为 1.57，u 从 -3.14 到 3.13
    [0,-1,0,-3.14,1.57],[-1,0,0,-1.57,1.57],[0,1,0,0,1.57],[1,0,0,1.57,1.57],[0,-1,0,3.14,1.57],
    // v 为 3.14，u 从 -3.14 到 3.13
    [0,0,-1,-3.14,3.14],[0,0,-1,-1.57,3.14],[0,0,-1,0,3.14],[0,0,-1,1.57,3.14],[0,0,-1,3.14,3.14]]
]
```

{{ use: common-data-option-desc() }}

### name(string)
数据项名称。

### value(Array)
数据项值。

### itemStyle(Object)
单个数据项的样式设置。

{{ use: partial-item-style(
    prefix="###"
) }}

{{ use: partial-shading(
    componentType='series-surface',
    componentName='曲面图'
) }}

{{ use: partial-zlevel }}

{{ use: partial-silent }}

{{ use: partial-animation }}