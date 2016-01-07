
{{target: component-tooltip}}

# tooltip(Object)

提示框组件。

## show(boolean) = true

是否显示提示框组件，包括提示框浮层和 [axisPointer](~tooltip.axisPointer)。

## showContent(boolean) = true

是否显示提示框浮层，默认显示。只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为`false`。

## trigger(string) = 'item'

触发类型。

可选：
+ `'item'`

    数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。

+ `'axis'`

    坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。

    在 ECharts 2.x 中只支持类目轴上使用 axis trigger，在 ECharts 3 中支持在[直角坐标系](~grid)和[极坐标系](~polar)上的所有类型的轴。并且可以通过 [axisPointer.axis](~tooltip.axisPointer.axis) 指定坐标轴。

## triggerOn(string) = 'mousemove'

提示框触发的条件，可选：

+ `'mousemove'`

    鼠标移动时触发。

+ `'click'`

    鼠标点击时触发。

该属性为 ECharts 3.0 中新加。

## alwaysShowContent(boolean) = false

是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 [一定时间](~tooltip.hideDelay) 后隐藏，设置为 `true` 可以保证一直显示提示框内容。

该属性为 ECharts 3.0 中新加。

## hideDelay(number) = 100

浮层隐藏的延迟，单位为 ms，在 [alwaysShowContent](~tooltip.alwaysShowContent) 为 `true` 的时候无效。

## enterable(boolean) = true

鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 `true`。

## position(string|Array)

提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。

可选：

+ `Array`

    通过数组表示提示框浮层的位置，支持数字设置绝对位置，百分比设置相对位置。

    示例:

    ```js
    // 绝对位置，相对于容器左侧 10px, 上侧 10 px
    position: [10, 10]
    // 相对位置，放置在容器正中间
    position: ['50%', '50%']
    ```

+ `'inside'`

    鼠标所在图形的内部中心位置，只在 [trigger](~tooltip.trigger) 为`'item'`的时候有效。

+ `'top'`

    鼠标所在图形上侧，只在 [trigger](~tooltip.trigger) 为`'item'`的时候有效。

+ `'left'`

    鼠标所在图形左侧，只在 [trigger](~tooltip.trigger) 为`'item'`的时候有效。

+ `'right'`

    鼠标所在图形右侧，只在 [trigger](~tooltip.trigger) 为`'item'`的时候有效。

+ `'bottom'`

    鼠标所在图形底侧，只在 [trigger](~tooltip.trigger) 为`'item'`的时候有效。

## transitionDuration(number) = 0.4

提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。

## formatter(string|Function)

提示框浮层内容格式器，支持字符串模板和回调函数两种形式。

1. 字符串模板。

    模板变量有 `{a}`, `{b}`，`{c}`，`{d}`，`{e}`，分别表示系列名，数据名，数据值等。
    在 [trigger](~tooltip.trigger) 为 `'axis'` 的时候，会有多个系列的数据，此时可以通过 `{a0}`, `{a1}`, `{a2}` 这种后面加索引的方式表示系列的索引。
    不同图表类型下的 `{a}`，`{b}`，`{c}`，`{d}` 含义不一样。
    其中变量`{a}`, `{b}`, `{c}`, `{d}`在不同图表类型下代表数据含义为：

    + 折线（区域）图、柱状（条形）图、K线图 : `{a}`（系列名称），`{b}`（类目值），`{c}`（数值）, `{d}`（无）

    + 散点图（气泡）图 : `{a}`（系列名称），`{b}`（数据名称），`{c}`（数值数组）, `{d}`（无）

    + 地图 : `{a}`（系列名称），`{b}`（区域名称），`{c}`（合并数值）, `{d}`（无）

    + 饼图、仪表盘、漏斗图: `{a}`（系列名称），`{b}`（数据项名称），`{c}`（数值）, `{d}`（百分比）

    更多其它图表模板变量的含义可以见相应的图表的 label.normal.formatter 配置项。

    **示例：**
    ```js
    formatter: '{b0}: {c0}<br />{b1}: {c1}'
    ```

2. 回调函数。

    回调函数格式：

    ```js
    (params: Object|Array, ticket: string, callback: (ticket: string, html: string)) => string
    ```

    第一个参数 `params` 是 formatter 需要的数据集。格式如下：
    {{ use: partial-formatter-params-structure(extra = {
        percent: {
            desc: '饼图的百分比',
            type: 'number'
        }
    }) }}
    在 [trigger](~tooltip.trigger) 为 `'axis'` 的时候 `params` 是多个系列的数据数组。

    第二个参数 `ticket` 是异步回调标识，配合第三个参数 `callback` 使用。
    第三个参数 `callback` 是异步回调，在提示框浮层内容是异步获取的时候，可以通过 callback 传入上述的 `ticket` 和 `html` 更新提示框浮层内容。

    示例：
    ```js
    formatter: function (params, ticket, callback) {
        $.get('detail?name=' + params.name, function (content) {
            callback(ticket, toHTML(content));
        });
        return 'Loading';
    }
    ```

## backgroundColor(Color) = 'rgba(50,50,50,0.7)'

提示框浮层的背景颜色。

## borderColor(Color) = '#333'

提示框浮层的边框颜色。

## borderWidth(number) = 0

提示框浮层的边框宽。

## padding(number) = 5

{{ use: partial-padding(componentName='提示框浮层') }}

## textStyle(Object)

提示框浮层的文本样式。

{{ use: partial-text-style(prefix="##", defaultColor="'#fff'", defaultFontSize=14) }}

## axisPointer(Object)

坐标轴指示器配置项，在 [trigger](~tooltip.trigger) 为 `'axis'` 时有效。

### type(string) = 'line'

指示器类型。

可选
+ `'line'` 直线指示器

+ `'cross'` 十字准星指示器

+ `'shadow'` 阴影指示器

TODO 截图示例

### axis(string) = 'auto'

指示器的坐标轴。可以是 `'x'`, `'y'`, `'radius'`, `'angle'`。默认取类目轴或者时间轴。

{{ use: partial-animation(prefix="##") }}

### lineStyle(Object)

[axisPointer.type](~tooltip.axisPointer.type) 为 `'line'` 时有效。

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType='solid') }}

### crossStyle(Object)

[axisPointer.type](~tooltip.axisPointer.type) 为 `'cross'` 时有效。

{{ use: partial-line-style(prefix="###", defaultColor="#555", defaultWidth=1, defaultType="dashed") }}

#### textStyle(Object)

十字准星准星上的文字样式。

{{ use: partial-text-style(prefix="####") }}

### shadowStyle(Object)

[axisPointer.type](~tooltip.axisPointer.type) 为 `'shadow'` 时有效。

{{ use: partial-area-style(prefix="###", defaultColor="'rgba(150,150,150,0.3)") }}