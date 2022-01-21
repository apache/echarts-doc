{{ target: partial-sector-border-radius }}

#${prefix} borderRadius(number|string|Array)

<ExampleUIControlPercentVector min="0" dims="InnerStart,InnerEnd,OuterStart,OuterEnd" default="0,0,0,0" />

{{ use: partial-version(
    version = "5.0.0"
) }}

用于指定${type}扇形区块的内外圆角半径，支持设置固定数值或者相对于扇形区块的半径的百分比值。

从 `v5.3.0` 开始，支持分别配置从内到外顺时针方向四个角的圆角半径，百分比值从相对于内外扇形的半径更改为相对于内外扇形的半径差。

例如：

`v5.3.0` 之前

+ `borderRadius: 10`：表示内圆角半径和外圆角半径都是 `10px`。
+ `borderRadius: '20%'`：表示内圆角半径和外圆角半径都是扇形区块半径的 `20%`。
+ `borderRadius: [10, 20]`：表示为环形图时，内圆角半径是 `10px`、外圆角半径是 `20px`。
+ `borderRadius: ['20%', '50%']`：表示为环形图时，内圆角半径是内圆半径的 `20%`、外圆角半径是外圆半径的 `50%`。

`v5.3.0` 之后

+ `borderRadius: 10`：表示内圆角半径和外圆角半径都是 `10px`。
+ `borderRadius: '20%'`：表示内圆角半径和外圆角半径都是扇形区块半径的 `20%`。
+ `borderRadius: [10, 20]`：表示为环形图时，内圆角半径是 `10px`、外圆角半径是 `20px`。
+ `borderRadius: ['20%', '50%']`：表示为环形图时，内圆角半径是内外圆半径差的 `20%`、外圆角半径是内外圆半径差的 `50%`。
+ `borderRadius: [5, 10, 15, 20]`：表示内圆角半径分别为 `5px` 和 `10px`，外圆角半径分别为 `15px` 和 `20px`。

