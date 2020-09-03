
{{ target: partial-marker }}

{{ use: partial-mark-point(
    prefix = ${prefix},
    seriesType = ${seriesType},
    hasCoord = ${hasCoord},
    hasType = ${hasType},
    name = ${name}
) }}

{{ use: partial-mark-line(
    prefix = ${prefix},
    seriesType = ${seriesType},
    hasCoord = ${hasCoord},
    hasType = ${hasType}
) }}

{{ use: partial-mark-area(
    prefix = ${prefix},
    seriesType = ${seriesType},
    hasCoord = ${hasCoord},
    hasType = ${hasType}
) }}



{{ target: marker-coord-explain }}

**Notice:** For axis with [axis.type](~xAixs.type) `'category'`:

+ If coord value is `number`, it represents index of [axis.data](~xAxis.data).
+ If coord value is `string`, it represents concrete value in [axis.data](~xAxis.data). Please notice that in this case `xAxis.data` must not be written as [number, number, ...], but can only be written [string, string, ...]. Otherwise it is not able to be located by markPoint / markLine.

For example:
```javascript
{
    xAxis: {
        type: 'category',
        data: ['5', '6', '9', '13', '19', '33']
        // As mentioned above, data should not be [5, 6, 9, 13, 19, 33] here.
    },
    series: {
        type: 'line',
        data: [11, 22, 33, 44, 55, 66],
        markPoint: { // markLine is in the same way.
            data: [{
                coord: [5, 33.4], // The number 5 represents xAxis.data[5], that is, '33'.
                // coord: ['5', 33.4] // The string '5' represents the '5' in xAxis.data.
            }]
        }
    }
}
```

