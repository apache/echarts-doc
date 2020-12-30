{{ target: bar-race }}

# Bar Race

Bar race is a chart that shows changes in the ranking of data over time and it is supported by default sinde ECharts 5.

> Bar race charts usually use horizontal bars. If you want to use vertical bars, just take the X axis and Y axis in this tutorial to the opposite.

1. Set `yAxis.realtimeSort` to be `true` to enable bar race
2. Set `yAxis.inverse` to be `true` to display longer bars at top
3. `yAxis.animationDuration` is suggested to be set to be `300` for bar reordering animation for the first time
4. `yAxis.animationDurationUpdate` is suggested to be set to be `300` for bar reordering animation for later times
5. Set `yAxis.max` to be *n - 1* where *n* is the number of bars to be displayed; otherwise, all bars are displayed
6. `xAxis.max` is suggested to be set to be `'dataMax'` so that the maximum of data is used as X maximum.
7. If realtime label changing is required, set `series.label.valueAnimation` to be `true`
8. Set `animationDuration` to be `0` so that the first animation doesn't start from 0; if you wish otherwise, set it to be the same value as `animationDurationUpdate`
9. `animationDurationUpdate` is suggested to be set to be `3000` for animation update duration, which should be the same as the frequency of calling `setOption`
10. Call `setOption` to update data to be of next time with `setInterval` at the frequency of `animationDurationUpdate`

A full example is:

~[700x300](${galleryViewPath}bar-race&edit=1&reset=1)

As you see, there are many options to be set to enable bar race effect. We are going to provide a tool that doesn't require any coding to help you make bar race charts more easily.
