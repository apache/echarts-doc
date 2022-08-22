
{{ target: component-tooltip }}

# tooltip(Object)

提示框组件。

---

{{ use: partial-tooltip-introduction() }}

<ExampleBaseOption name="tooltip" title="提示框" title-en="Tooltip">
var base = +new Date(2016, 9, 3);
var oneDay = 24 * 3600 * 1000;
var valueBase = Math.random() * 300;
var valueBase2 = Math.random() * 50;
var data = [];
var data2 = [];

for (var i = 1; i < 10; i++) {
    var now = new Date(base += oneDay);
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);

    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
}

const option = {
    legend: {
        top: 'bottom',
        data: ['意向']
    },
    tooltip: {
        triggerOn: 'none',
        alwaysShowContent: true,
        position: function (pt) {
            return [pt[0], 130];
        }
    },
    xAxis: {
        type: 'time',
        // boundaryGap: [0, 0],
        axisPointer: {
            value: '2016-10-7',
            snap: true,
            label: {
                show: true,
                formatter: function (params) {
                    return echarts.format.formatTime('yyyy-MM-dd', params.value);
                }
            },
            handle: {
                show: true
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            inside: true
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            inside: true
        },
        z: 10
    },
    grid: {
        top: 110,
        left: 15,
        right: 15,
        height: 160
    },
    series: [
        {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'lttb',
            itemStyle: {
                color: '#8ec6ad'
            },
            stack: 'a',
            areaStyle: {
            },
            data: data
        },
        {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 5,
            sampling: 'lttb',
            itemStyle: {
                color: '#d68262'
            },
            areaStyle: {
            },
            data: data2
        }

    ]
};
</ExampleBaseOption>

{{ use: partial-tooltip-coords-common(
    prefix = '#'
) }}

## showContent(boolean) = true

<ExampleUIControlBoolean default="true" />

是否显示提示框浮层，默认显示。只需tooltip触发事件或显示axisPointer而不需要显示内容时可配置该项为`false`。

## alwaysShowContent(boolean) = false

<ExampleUIControlBoolean default="false" />

是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 [一定时间](~tooltip.hideDelay) 后隐藏，设置为 `true` 可以保证一直显示提示框内容。

该属性为 ECharts 3.0 中新加。

## triggerOn(string) = 'mousemove|click'

<ExampleUIControlEnum options="mousemove,click" />

提示框触发的条件，可选：

+ `'mousemove'`

    鼠标移动时触发。

+ `'click'`

    鼠标点击时触发。

+ `'mousemove|click'`

    同时鼠标移动和点击时触发。

+ `'none'`

    不在 `'mousemove'` 或 `'click'` 时触发，用户可以通过 [action.tooltip.showTip](api.html#action.tooltip.showTip) 和 [action.tooltip.hideTip](api.html#action.tooltip.hideTip) 来手动触发和隐藏。也可以通过 [axisPointer.handle](~xAxis.axisPointer.handle) 来触发或隐藏。

该属性为 ECharts 3.0 中新加。

## showDelay(number) = 0

<ExampleUIControlNumber min="0" step="20" />

浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 [triggerOn](~tooltip.triggerOn) 为 `'mousemove'` 时有效。

## hideDelay(number) = 100

<ExampleUIControlNumber min="0" step="20" default="100" />

浮层隐藏的延迟，单位为 ms，在 [alwaysShowContent](~tooltip.alwaysShowContent) 为 `true` 的时候无效。

## enterable(boolean) = false

<ExampleUIControlBoolean default="false" />

鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 `true`。

## renderMode(string) = 'html'

<ExampleUIControlEnum options="html,richText" default="html" />

浮层的渲染模式，默认以 `'html` 即额外的 DOM 节点展示 tooltip；此外还可以设置为 `'richText'` 表示以富文本的形式渲染，渲染的结果在图表对应的 Canvas 中，这对于一些没有 DOM 的环境（如微信小程序）有更好的支持。

## confine(boolean) = false

<ExampleUIControlBoolean default="false" />

是否将 tooltip 框限制在图表的区域内。

当图表外层的 dom 被设置为 `'overflow: hidden'`，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。

## appendToBody(boolean) = false

<ExampleUIControlBoolean default="false" />

{{ use: partial-version(
    version = "4.7.0"
) }}

是否将 tooltip 的 DOM 节点添加为 HTML 的 `<body>` 的子节点。只有当 [renderMode](~tooltip.renderMode) 为 `'html'` 是有意义的。

默认值是 `false`。`false` 表示，tooltip 的 DOM 节点会被添加为本图表的 DOM container 的一个子孙节点。但是这种方式导致，如果本图表的 DOM container 的祖先节点有设置 `overflow: hidden`，那么当 tooltip 超出 container 范围使可能被截断。这个问题一定程度上可以用 [tooltip.confine](~tooltip.confine) 来解决，但是不一定能解决所有场景。

所以这里我们提供了 `appendToBody: true` 来解决这件事。这也是常见的解决此类问题的一种方式。但是 `true` 并不定为默认值，因为要避免 break change，尤其是一些对于 tooltip 深入定制的使用。并且也避免一些未知的 bad case。

注：CSS transform 的场景，这也可以使用。

## className(string)

<ExampleUIControlText />

{{ use: partial-version(
    version = "5.0.0"
) }}

指定 tooltip 的 DOM 节点的 CSS 类。（只在 [`html`](~tooltip.renderMode) 模式下生效）。

Example:
```ts
className: 'echarts-tooltip echarts-tooltip-dark'
```

## transitionDuration(number) = 0.4

<ExampleUIControlNumber min="0" step="0.1" default="0.4" />

提示框浮层的移动动画过渡时间，单位是 s，设置为 0 的时候会紧跟着鼠标移动。

{{ use: partial-tooltip-common(
    scope = 'global',
    prefix = '#'
) }}

## order(string) = 'seriesAsc'

<ExampleUIControlEnum options="seriesAsc,seriesDesc,valueAsc,valueDesc" default="seriesAsc" />

{{ use: partial-version(
    version = "5.0.0"
) }}

多系列提示框浮层排列顺序。默认值为 `'seriesAsc'`

提示框排列顺序可选值:

+ `'seriesAsc'`

    根据系列声明, 升序排列。

+ `'seriesDesc'`

    根据系列声明, 降序排列。

+ `'valueAsc'`

    根据数据值, 升序排列。

+ `'valueDesc'`

    根据数据值, 降序排列。
