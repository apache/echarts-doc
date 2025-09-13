
{{ target: component-tooltip }}

# tooltip(Object)

Tooltip component.

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
            sampling: 'average',
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
            sampling: 'average',
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

Whether to show the tooltip floating layer, whose default value is true. It should be configurated to be `false`, if you only need tooltip to trigger the event or show the axisPointer without content.

## alwaysShowContent(boolean) = false

<ExampleUIControlBoolean default="false" />

Whether to show tooltip content all the time. By default, it will be hidden [after some time](~tooltip.hideDelay). It can be set to be `true` to preserve displaying.

This attribute is newly added to ECharts 3.0.

## triggerOn(string) = 'mousemove|click'

<ExampleUIControlEnum options="mousemove,click" />

Conditions to trigger tooltip. Options:

+ `'mousemove'`

    Trigger when mouse moves.

+ `'click'`

    Trigger when mouse clicks.

+ `'mousemove|click'`

    Trigger when mouse clicks and moves.

+ `'none'`

    Do not triggered by `'mousemove'` and `'click'`. Tooltip can be triggered and hidden manually by calling [action.tooltip.showTip](api.html#action.tooltip.showTip) and [action.tooltip.hideTip](api.html#action.tooltip.hideTip). It can also be triggered by [axisPointer.handle](~xAxis.axisPointer.handle) in this case.

This attribute is new to ECharts 3.0.

## showDelay(number) = 0

<ExampleUIControlNumber min="0" step="20" />

Delay time for showing tooltip, in ms. No delay by default, and it is not recommended to set. Only valid when [triggerOn](~tooltip.triggerOn) is set to be `'mousemove'`.

## hideDelay(number) = 100

<ExampleUIControlNumber min="0" step="20" default="100" />

Delay time for hiding tooltip, in ms. It will be invalid when [alwaysShowContent](~tooltip.alwaysShowContent) is `true`.

## enterable(boolean) = true

<ExampleUIControlBoolean default="false" />

Whether mouse is allowed to enter the floating layer of tooltip, whose default value is false. If you need to interact in the tooltip like with links or buttons, it can be set as `true`.

## renderMode(string) = 'html'

<ExampleUIControlEnum options="html,richText" default="html" />

Render mode for tooltip. By default, it is set to be `'html'` so that extra DOM element is used for tooltip. It can also set to be `'richText'` so that the tooltip will be rendered inside Canvas. This is very useful for environments that don't have DOM, such as Wechat applications.

## confine(boolean) = false

<ExampleUIControlBoolean default="false" />

Whether confine tooltip content in the view rect of chart instance.

Useful when tooltip is cut because of `'overflow: hidden'` set on outer dom of chart instance, or because of narrow screen on mobile.

## appendToBody(boolean) = false

<ExampleUIControlBoolean default="false" />

{{ use: partial-version(
    version = "4.7.0"
) }}

(DEPRECATED since `v5.5.0`, use [appendTo](~tooltip.appendTo) instead.)

Whether to append the tooltip DOM element as a child of the `<body>` of the HTML page, when using [renderMode](~tooltip.renderMode) `'html'`.

The default value is `false`, which means that the tooltip DOM element will be one of a descendant of its echarts DOM container. But that means that the tooltip might be cut when overflow the container if some of the ancestors DOM element of the echarts container are styled with `overflow: hidden`. This case could also be resolved by setting [tooltip.confine](~tooltip.confine), but it might not suitable for all scenarios.

Here we provide `appendToBody: true` to auto append the tooltip element to `<body>`, which is a common way to resolve this kind of issue. But `true` is not set as a default value because to void to bring break change for some cases where tooltip is deeply customized and to void some unexpected bad cases.

Note that it also works when CSS transform used.

## appendTo(string|HTMLElement|Function)

{{ use: partial-version(
    version = "5.5.0"
) }}

Which DOM element to append the tooltip to. Only available when using [renderMode](~tooltip.renderMode) `'html'`.

The default value is `null`, which means that the tooltip's DOM node will be added as a descendant node of the chart’s DOM container. However, this approach can cause the tooltip to be truncated if it extends beyond the container, due to ancestors of the chart's DOM container having overflow: hidden set. This issue can be partially addressed using tooltip.confine, but it may not cover all scenarios.

For such scenarios, `appendTo` can be specified. When it is a function, the interface is in the form of

```ts
(chartContainer: HTMLElement) => HTMLElement | undefined | null
```

which means it returns the node that the tooltip's DOM node should be added to. Returning `undefined` or `null` indicates that the default logic described above should be used. Returning an HTMLElement means that it should be added under that node.

Note that it also works when CSS transform used.

## className(string)

<ExampleUIControlText />

{{ use: partial-version(
    version = "5.0.0"
) }}

Specify the classes for the tooltip root DOM. (Only works in [`html`](~tooltip.renderMode) render mode).

Example:
```ts
className: 'echarts-tooltip echarts-tooltip-dark'
```

## transitionDuration(number) = 0.4

<ExampleUIControlNumber min="0" step="0.1" default="0.4" />

The transition duration of tooltip's animation, in seconds. When it is set to be 0, it would move closely with the mouse.

## displayTransition(boolean) = true

<ExampleUIControlBoolean default="true" />

{{ use: partial-version(
    version = "6.0.0"
) }}

Whether to enable the display transition.

By default, the tooltip uses the opacity fading to make itself invisible rather than setting the DOM element's `display` property to `'none'`. This might cause the scrollbar to be always visible when the tooltip content size is large, even if the tooltip is already invisible. In this scenario, or if you just want no fading, you can set this option to `false` to disable the display transition.

{{ use: partial-tooltip-common(
    scope = 'global',
    prefix = '#'
) }}

## order(string) = 'seriesAsc'

<ExampleUIControlEnum options="seriesAsc,seriesDesc,valueAsc,valueDesc" default="seriesAsc" />

{{ use: partial-version(
    version = "5.0.0"
) }}

Tooltip order for multiple series. Defaults is `'seriesAsc'`.

Conditions to order tooltip. Options:

+ `'seriesAsc'`

    Base on series declaration, ascending order tooltip.

+ `'seriesDesc'`

    Base on series declaration, descending order tooltip.

+ `'valueAsc'`

    Base on value, ascending order tooltip, only for numeric value.

+ `'valueDesc'`

    Base on value, descending order tooltip, only for numeric value.
