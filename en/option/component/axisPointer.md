
{{ target: component-axisPointer }}

# axisPointer(Object)

This is the global configurations of axisPointer.


---

{{ use: partial-axisPointer-introduction() }}

---

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-axisPointer-common(
    prefix = "#"
) }}

## link(Array)

axisPointers can be linked to each other. The term "link" represents that axes are synchronized and move together. Axes are linked according to the value of axisPointer.

See [sampleA](${galleryViewPath}candlestick-brush&edit=1&reset=1) and [sampleB](${galleryViewPath}scatter-nutrients-matrix&edit=1&reset=1).

link is an array, where each item represents a "link group". Axes will be linked when they are referred in the same link group. For example:

```ts
link: [
    {
        // All axes with xAxisIndex 0, 3, 4 and yAxisName 'sameName' will be linked.
        xAxisIndex: [0, 3, 4],
        yAxisName: 'someName'
    },
    {
        // All axes with xAxisId 'aa', 'cc' and all angleAxis will be linked.
        xAxisId: ['aa', 'cc'],
        angleAxis: 'all'
    },
    ...
]
```

As illustrated above, axes can be referred in these approaches in a link group:

```ts
{
    // 'some' represent the dimension name of a axis, namely, 'x', 'y', 'radius', 'angle', 'single'
    someAxisIndex: [...], // can be an array or a value or 'all'
    someAxisName: [...],  // can be an array or a value or 'all'
    someAxisId: [...],    // can be an array or a value or 'all'
}
```

---


---

**How to link axes with different [axis.type](~xAxis.type)?**

For example, the type of axisA is 'category', and the type of axisB type is 'time', we can write conversion function (mapper) in link group to convert values from an axis to another axis. For example:

```ts
link: [{
    xAxisIndex: [0, 1],
    yAxisName: ['yy'],
    mapper: function (sourceVal, sourceAxisInfo, targetAxisInfo) {
        if (sourceAxisInfo.axisName === 'yy') {
            // from timestamp to '2012-02-05'
            return echarts.time.format('yyyy-MM-dd', sourceVal);
        }
        else if (targetAxisInfo.axisName === 'yy') {
            // from '2012-02-05' to date
            return echarts.time.parse(dates[sourceVal]);
        }
        else {
            return sourceVal;
        }
    }
}]
```

Input parameters of mapper:

`{number}` sourceVal

`{Object}` sourceAxisInfo Including {axisDim, axisId, axisName, axisIndex, ...}

`{Object}` targetAxisInfo Including {axisDim, axisId, axisName, axisIndex, ...}

Return of mapper:

`{number}` The result of conversion.

## triggerOn(string) = 'mousemove|click'

<ExampleUIControlEnum options="mousemove,click,none" />

Conditions to trigger tooltip. Options:

+ `'mousemove'`

    Trigger when mouse moves.

+ `'click'`

    Trigger when mouse clicks.

+ `'mousemove|click'`

    Trigger when mouse clicks and moves.

+ `'none'`

    Do not triggered by `'mousemove'` and `'click'`

