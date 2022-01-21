{{ target: series-surface }}

# series.surface(Object)

Surface. Support to drawn the [Parameter surface] (https://en.wikipedia.org/wiki/Parametric_surface) by [parametric](~series-surface.parametric).

The figure below is a parametric surface similar to a metal part configured as a metal material.

![500xauto](~parametric-surface.png)

## type(string) = 'surface'

{{ use: partial-series-name() }}

{{ use: series-common-coordinate-system(
    defaultCoordinateSystem='cartesian3D',
    cartesian3D=true
) }}

## parametric(boolean) = false

Whether it is a parametric surface.

## wireframe(Object)

The wireframe of the surface.

### show(boolean) = true

Whether to display wireframe. Default is Display.


### lineStyle(Object)

The style of the wireframe.

{{ use: partial-line-style(
    prefix="###",
    defaultColor="#222",
    defaultWidth=1
) }}

## equation(Object)

The function expression of the surface. If you need to display a function surface, you can set the function expression by [equation](~series-surface.equation) without setting [data](~series-surface.data). For example, the ripple effect can be simulated by the following function.

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
Independent variable x.

#### step(number)
The step size of x.

#### min(number)
The minimum value of x.

#### max(number)
The maximum value of x.

### y(Object)
The independent variable y.

#### step(number)
The step size of x.

#### min(number)
The minimum value of y.

#### max(number)
The maximum value of y.

### z(Function)
The dependent variable z.

z is a function for [x](~series-surface.equation.x), [y](~series-surface.equation.y).

```ts
(x: number, y: number) => number
```

## parametricEquation(Object)

The [parameter equation] of the surface (https://zh.wikipedia.org/wiki/%E5%8F%83%E6%95%B8%E6%96%B9%E7%A8%8B). When [data](~series-surface.data) is not set, the parameter parameter equation can be declared by [parametricEquation](~series-surface.equation). Valid when [parametric](~series-surface) is `true`.

The parametric equations is [x](~series-surface.parametricEquation.x), [y](~series-surface.parametricEquation.y), [z](~series-surface.parametricEquation.z) about the equations of the parameters [u](~series-surface.parametricEquation.u), [v](~series-surface.parametricEquation.v).

The following parametric equation is to plot the parametric surface of a similar metal part in the previous figure:

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
The argument u.

#### step(number)
The step size of u.

#### min(number)
The minimum value of u.

#### max(number)
The maximum value of u.

### v(Object)
Independent variable v.

#### step(number)
The step size of v.

#### min(number)
The minimum value of v.

#### max(number)
The maximum value of v.

### x(Function)

x is a function for [u](~series-surface.equation.u), [v](~series-surface.equation.v).

```ts
(u: number, v: number) => number
```

### y(Function)

y is a function for [u](~series-surface.equation.u), [v](~series-surface.equation.v).

```ts
(u: number, v: number) => number
```

### z(Function)

z is a function for [u](~series-surface.equation.u), [v](~series-surface.equation.v).

```ts
(u: number, v: number) => number
```


## itemStyle(Object)

The color, opacity, and other styles of the surface.

{{ use: partial-item-style(
    componentType='series-surface',
    componentName='surface'
) }}

## data(Array)

The data array of the surface.

The data is an array of linear stores containing multiply `X vertices ` by `Y vertices` data. A 5 x 5 surface has a total of 25 vertices, and the index of the data in the array is as follows

![400xauto](~surface-index.png)

The data used in the above figure:

```ts
data: [
    [-1,-1,0],[-0.5,-1,0],[0,-1,0],[0.5,-1,0],[1,-1,0],
    [-1,-0.5,0],[-0.5,-0.5,1],[0,-0.5,0],[0.5,-0.5,-1],[1,-0.5,0],
    [-1,0,0],[-0.5,0,0],[0,0,0],[0.5,0,0],[1,0,0],
    [-1,0.5,0],[-0.5,0.5,-1],[0,0.5,0],[0.5,0.5,1],[1,0.5,0],
    [-1,1,0],[-0.5,1,0],[0,1,0],[0.5,1,0],[1,1,0]
]
```

Each item is `x`, `y`, `z`.

For the parametric equation, each item needs to store five data, namely `x`, `y`, `z` and the parameters `u`, `v`. The index of the data is in the order of `u`, `v`. For example the following data:

```ts
data: [
    // v is 0, u is from -3.14 to 3.13
    [0,0,1,-3.14,0],[0,0,1,-1.57,0],[0,0,1,0,0],[0,0,1,1.57,0],[0,0,1,3.14,0],
    // v is 1.57, u is from -3.14 to 3.13
    [0,-1,0,-3.14,1.57],[-1,0,0,-1.57,1.57],[0,1,0,0,1.57],[1,0,0,1.57,1.57],[0,-1,0,3.14,1.57],
    // v is 3.14, u is from -3.14 to 3.13
    [0,0,-1,-3.14,3.14],[0,0,-1,-1.57,3.14],[0,0,-1,0,3.14],[0,0,-1,1.57,3.14],[0,0,-1,3.14,3.14]]
]
```

{{ use: common-data-option-desc() }}

### name(string)
The name of the data item.

### value(Array)
Data item value.

### itemStyle(Object)
The style setting for a single data item.

{{ use: partial-item-style(
    prefix="###"
) }}

{{ use: partial-shading(
    componentType='series-surface',
    componentName='surface'
) }}

{{ use: partial-zlevel }}

{{ use: partial-silent }}

{{ use: partial-animation }}