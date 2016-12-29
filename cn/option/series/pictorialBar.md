{{target:series-pictorialBar}}

# series.pictoialBar(Object)

**异变柱状图**

异变柱状图是可以设置各种具象图形元素（如图片、[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) 等）的柱状图。往往用在信息图中。用于有至少一个类目轴或时间轴的[直角坐标系](~grid)上。

## type(string) = 'pictorialBar'

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType="pictorialBar",
    coordSysDefault="'cartesian2d'",
    cartesian2d=true,
    polar=false,
    geo=false
) }}

## label(Object)
{{use:partial-label-desc}}
### normal(Object)
{{use:partial-label(
    prefix="###",
    defaultPosition="'inside'",
    formatter=true
)}}
### emphasis(Object)
{{use:partial-label(
    prefix="###",
    formatter=true
)}}

## itemStyle(Object)
{{use:partial-item-style-desc}}
### normal(Object)
{{use:partial-item-style(
    prefix="###",
    useColorPalatte=true,
    hasCallback=false
)}}
### emphasis(Object)
{{use:partial-item-style(
    prefix="###"
)}}

{{use: partial-barGrid}}

{{use: pictorialBar-symbol-attrs(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}


## data(Array)

{{ use: partial-2d-data-desc(
    galleryEditorPath = ${galleryEditorPath}
)}}

### name(string)
数据项名称。

### value(number)
单个数据项的数值。

{{use: pictorialBar-symbol-attrs(
    prefix="##",
    galleryEditorPath=${galleryEditorPath}
)}}


### label(Object)
单个柱条文本的样式设置。
#### normal(Object)
{{ use:partial-label(
    prefix="####",
    defaultPosition="inside"
) }}
#### emphasis(Object)
{{ use:partial-label(prefix="####") }}

### itemStyle(Object)
#### normal(Object)
{{use:partial-item-style(
    prefix="####"
)}}
#### emphasis(Object)
{{use:partial-item-style(
    prefix="####"
)}}

{{use: partial-marker(
    prefix="#",
    seriesType="pictorialBar",
    galleryEditorPath=${galleryEditorPath},
    hasCoord=true,
    hasType=true
)}}

{{use:partial-z-zlevel(
    prefix="#",
    componentName="异变柱状图"
) }}
{{ use:partial-silent(
    prefix="#"
) }}

{{use:partial-animation(
    prefix="#",
    galleryEditorPath=${galleryEditorPath}
)}}






{{target: pictorialBar-symbol-attrs}}

#${prefix} symbol(string) = 'circle'

图形类型。

{{ use: partial-icon }}

#${prefix} symbolSize(number|Array) = ['100%', '100%']

图形的大小。

可以用数组分开表示宽和高，例如 `[20, 10]` 表示标记宽为`20`，高为`10`，也可以设置成诸如 `10` 这样单一的数字，表示 `[10, 10]`。

可以设置成绝对值（如 `10`），也可以设置成百分比（如 `'120%'`、`['55%', 23]`）。

当设置为百分比时，图形的大小是基于柱子的尺寸计算出来的。

假如柱子基于 x 轴（即柱子是纵向的），[symbolSize](~series-pictorialBar.symbolSize) 设置为 `['30%', '50%']`，那么最终图形的尺寸是：

+ 宽度：`柱子的宽度 * 30%`。
+ 高度：
    + 如果 [symbolRepeat](~series-pictorialBar.symbolRepeat) 为 `false`：`柱子的高度 * 50%`。
    + 如果 [symbolRepeat](~series-pictorialBar.symbolRepeat) 为 `true`：`柱子的宽度 * 50%`。

柱子基于 y 轴（即柱子是横向的）的情况类似对调可得出。

#${prefix} symbolPosition(string) = 'start'

图形的定位位置。可取值：

+ `'start'`：图形边缘与柱子开始的地方内切（可以理解为轴线）。
+ `'end'`：图形边缘与柱子结束的地方内切（可以理解为柱子原理轴线的边）。
+ `'center'`：图形在柱子里居中。

例子：

#${prefix} symbolOffset(Array) = [0, 0]

图形相对于原本位置的偏移。`symbolOffset` 是图形定位中，最后计算的一个步骤，可以对图形计算出来的位置进行微调。

可以设置成绝对值（如 `10`），也可以设置成百分比（如 `'120%'`、`['55%', 23]`）。

当设置为百分比时，表示相对于自身尺寸 [symbolSize](~series-pictorialBar.symbolSize) 的百分比。

例如 `[0, '50%']` 就是把图形向上移动了自身尺寸的一半的位置。

例子：

#${prefix} symbolMargin(number|string)

图形的两边间隔。

// start margin and end margin. Can be a number or a percent string.
                      // Auto margin by defualt.
symbolRepeat: false,  // false/null/undefined, means no repeat.
                      // Can be a number, specifies repeat times, and do not cut by data.
                      // Can be 'fixed', means auto calculate repeat times but do not cut by data.
symbolRepeatDirection: 'end', // 'end' means from 'start' to 'end'.

symbolClip: false,
symbolBoundingData: null,
symbolPatternSize: 400, // 400 * 400 px

#${prefix} symbolRotate(number)

图形的旋转角度。

注意，当 [symbolRepeat](~series-pictorialBar.symbolRepeat) 为 `true` 时，`symbolRotate` 并不会影响图形的布局，而只是单纯得绕自身圆心旋转。

#${prefix} z2(number)

指定图形元素间的覆盖关系。

#${prefix} hoverAnimation(boolean) = false

是否开启 hover 在图形上的提示动画效果。



