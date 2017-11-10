## v3.8.2
<div class="time">2017-11-10</div>

+ [^] Fixed backward compatibility problems brounght by `3.8.0`:
    + In `3.8.0`, the content in `lib` directory is the same as the content in `src` directory (both are ES Module), which may not compatible with the old verisons of node and webpack. So rollback to commonJS format in `lib` of `3.8.2`.
    + In `3.8.0`, the source code in `src` constains global variable `__DEV__` (which prints dev helper info for echarts users). To get the declaration of the global variable, users should include `echarts/src/config.js` manually or make some settings in `webpack`/`rollup` (Check [custom build tutorial](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts) please), which is not backward compatible. So we have removed `__DEV__` from the codes in `echarts/lib/**` in `3.8.2`. If dev helper info is required, use codes in `echarts/src/**`.
    + After `3.8`, `echarts/src/echarts.js` (the same as `echarts/lib/echarts.js` in `3.8.0`) does not include util methods, which used to be mounted on it. Now util methods are listed in `echarts/src/export` and mounted on `echarts/echarts*.js`. But it is not backward compatibility, so we have rollbacked to mount them on `echarts/lib/echarts.js` in `3.8.2`.
    + The way of including `echarts/extension/dataTool`, havs been rollbacked to the original approach before `3.8`, where it must be included explicitly, and the namespace will be mounted on `echarts` namespame.
+ [^] Fixed the problem that SVG renderer throws error when encounter null value.


## v3.8,0
<div class="time">2017-11-07</div>

+ [+] **Supported [Tree Chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree)**, including [horizontal layout](https://ecomfe.github.io/echarts-examples/public/index.html#tree-basic), [vertical layout](https://ecomfe.github.io/echarts-examples/public/index.html#tree-vertical), [radial layout](https://ecomfe.github.io/echarts-examples/public/index.html#tree-radial).

+ [+] **Supported [SVG Renderer (beta)](https://ecomfe.github.io/echarts-doc/public/en/option.html#Render%20by%20Canvas%20or%20SVG)**, enable developers to choose SVG or Canvas renderer based on their platfroms and functional requirments.

+ [+] Source code of echarts has been switched to ES Module, which enabled tree shaking of bundle and reduced size.

+ [+] Supported build scripts for creating custom build, including multiple language support. See [custom build tutorial](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts). And added Finnish support, which is contributed by [xvaara](https://github.com/xvaara) in [PR #6863](https://github.com/ecomfe/echarts/pull/6863).

+ [+] Supported [axis arrow](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLine.symbol). See [#6675](https://github.com/ecomfe/echarts/issues/6675).

+ [+] Supported [strokeWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.levels.itemStyle.normal.strokeWidth) and [strokeColor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.levels.itemStyle.normal.strokeColor) in treemap. See [#6804](https://github.com/ecomfe/echarts/issues/6804).

+ [+] Supported [show adjacent nodes](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.focusNodeAdjacency) in graph. See [#6772](https://github.com/ecomfe/echarts/issues/6772).

+ [^] Fixed the area calculation when [grid.containLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid.containLabel) is `true` and axis is [rotated](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.axisLabel.rotate). Thanks [xvaara](https://github.com/xvaara) for [PR #6951](https://github.com/ecomfe/echarts/pull/6951).

+ [^] Fixed that the calculation of interval is not incorrect when [axisLabel.rotate](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.rotate) is set in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type). See [#4170](https://github.com/ecomfe/echarts/issues/4170). Thanks[lanyuechen](https://github.com/lanyuechen) for [PR #6903](https://github.com/ecomfe/echarts/pull/6903).

+ [^] Fixed the negative problem in `dataTool.prepareBoxplotData`. Thanks [d-rudolf](https://github.com/d-rudolf) for [PR #6749](https://github.com/ecomfe/echarts/pull/6749).

+ [^] Enhanced the label interval of [time axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type). Thanks [xiaoshan00](https://github.com/xiaoshan00) for [PR #6808](https://github.com/ecomfe/echarts/pull/6808).

+ [^] Supported [radiusAxis.inverse](https://ecomfe.github.io/echarts-doc/public/en/option.html#radiusAxis.inverse). See [#6805](https://github.com/ecomfe/echarts/issues/6805) and [#4253](https://github.com/ecomfe/echarts/issues/4253).

+ [^] Renamed some variables to avoid webpack special variable name. See [#6788](https://github.com/ecomfe/echarts/issues/6788).

+ [^] Fixed position problem of [scrollable legend](https://ecomfe.github.io/echarts-examples/public/index.html#pie-legend). See [#6756](https://github.com/ecomfe/echarts/issues/6756).

+ [^] Fixed that the [themeRiver](https://ecomfe.github.io/echarts-examples/public/index.html#themeRiver-basic) legend color is incorrect. See [#6932](https://github.com/ecomfe/echarts/issues/6932).

+ [^] Fixed that brush empty value caused error thrown. See [#6892](https://github.com/ecomfe/echarts/issues/6892).

+ `dist/echarts/echarts.simple.js` do not includ utils, which used to be mounted on `echarts`. `dist/echarts/echarts.common.js` and `dist/echarts/echarts.js` keep including them as before. And developers can [custom build](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts) to include them.

+ Changes about `dataTool`: When using `dist/echarts/echarts.simple.js` or `dist/echarts/echarts.common.js`, `dist/echarts/extension/dataTool.js` should be manually included as before, but the namespace `dataTool` will not be mounted to `echarts`. When using `dist/echarts/echarts.js`, `echarts.dataTool` is included automatically by default.





## v3.7.2
<div class="time">2017-09-27</div>

+ [+] Supported English version build (All default text is in English) in <https://github.com/ecomfe/echarts/tree/master/dist>. See [#2321](https://github.com/ecomfe/echarts/issues/2321).

+ [+] Supported [pie.hoverOffset](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.hoverOffset). See [#3857](https://github.com/ecomfe/echarts/issues/3857).

+ [^] Fixed compatibility of data in [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6576](https://github.com/ecomfe/echarts/issues/6576).

+ [^] Fixed [showMaxLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.showMaxLabel) [showMinLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.showMinLabel).

+ [^] Fixed area chart when all value is negative. See [#6707](https://github.com/ecomfe/echarts/issues/6707).

+ [^] Made the meaning of `'middle'` and `'center'` consist in [axis.nameLocation](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.nameLocation).

+ [^] Fixed that [markArea.itemStyle.emphasis](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.itemStyle.emphasis) did not work. See [#5245](https://github.com/ecomfe/echarts/issues/5245).

+ [^] Fixed the problem of right click in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [#6313](https://github.com/ecomfe/echarts/issues/6313).

+ [^] Fixed that calender did not work because of DST (Day Saving Time). See [#6543](https://github.com/ecomfe/echarts/issues/6543).

+ [^] Enhanced the "save as image" in IE. See [#6279](https://github.com/ecomfe/echarts/issues/6279).

+ [^] Fixed cleaning for "motion blur". See [#6577](https://github.com/ecomfe/echarts/issues/6577).

+ [^] Fix doji for k series [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6583](https://github.com/ecomfe/echarts/issues/6583).

+ [^] Fixed the compatibility for `markPoint`. See [#6503](https://github.com/ecomfe/echarts/issues/6503).




## v3.7.1
<div class="time">2017-08-31</div>

[Recovery Build]

+ [+] Supported function in [axis.min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min), [axis.max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max). See [#6465](https://github.com/ecomfe/echarts/issues/6465).

+ [^] Fixed problems of compatibility and emphasis style about textStyle. See [#6491](https://github.com/ecomfe/echarts/issues/6491)、[#6529](https://github.com/ecomfe/echarts/issues/6529), [#6516](https://github.com/ecomfe/echarts/issues/6516), [#6532](https://github.com/ecomfe/echarts/issues/6532), [#6237](https://github.com/ecomfe/echarts/issues/6237).

+ [^] Add sub-pixel optimize to [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick).

+ [^] Fixed that emphasis style was not applied when using [graph.focusNodeAdjacency](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.focusNodeAdjacency).




## v3.7.0
<div class="time">2017-08-16</div>

+ **[+] Supported [Rich Text](https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#%E5%AF%8C%E6%96%87%E6%9C%AC%E6%A0%87%E7%AD%BE)**, which has enabled style configuring to some text snippets or the entire text block, and supported using images in text, and supported alignment or rotation of text block or snippets.

+ **[+] Supported [Scrollable Legend](https://ecomfe.github.io/echarts-doc/public/en/option.html#legend.type)**, which provides a solution for displays planty of legend items. See [vertical legend](https://ecomfe.github.io/echarts-examples/public/editor.html?c=pie-legend) 或 [horizontal legend](https://ecomfe.github.io/echarts-examples/public/editor.html?c=radar2).

+ [+] Flatten `textStyle` option. `textStyle` exist in echarts option everywhere, for example, [series-bar.label.normal.textStyle](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.textStyle), [xAxis.axisLabel.textStyle](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.textStyle). It seems that some of them are to deep and verbose. So we removed the level of `textStyle` to flatten them. That is, previous `label.normal.textStyle.fontSize`, `axisLabel.textStyle.fontSize` is modified to `label.normal.fontSize`, `axisLabel.fontSize` after `v3.7`. Of course, the previous style is compatible all the same. Those options are flattened:
    + `axisPointer.textStyle`
    + `xAxis.axisLabel.textStyle`
    + `yAxis.axisLabel.textStyle`
    + `radar.axisLabel.textStyle`
    + `singleAxis.axisLabel.textStyle`
    + `radiusAxis.axisLabel.textStyle`
    + `angleAxis.axisLabel.textStyle`
    + `parallel.parallelAxisDefault.axisLabel.textStyle`
    + `parallelAxis.axisLabel.textStyle`
    + `series.label[normal|emphasis].textStyle`
    + `series.data.label[normal|emphasis].textStyle`
    + `series-gauge.axisLabel.textStyle`
    + `series-gauge.title.textStyle`
    + `series-gauge.detail.textStyle`
    + `series-treemap.upperLabel[normal|emphasis].textStyle`
    + `series-graph.edgeLabel[normal|emphasis].textStyle`
    + `calendar.dayLabel.textStyle`
    + `calendar.monthLabel.textStyle`
    + `calendar.yearLabel.textStyle`
    + `markPoint.label[normal|emphasis].textStyle`
    + `markPoint.data.label[normal|emphasis].textStyle`
    + `markLine.label[normal|emphasis].textStyle`
    + `markLine.data.label[normal|emphasis].textStyle`
    + `markArea.label[normal|emphasis].textStyle`
    + `markArea.data.label[normal|emphasis].textStyle`
    + `tooltip.axisPointer.crossStyle.textStyle`
    + `axisPointer.label.textStyle`
    + `timeline.label.textStyle`
    + `radar.name.textStyle`

+ [+] Supported [minInterval](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.minInterval) on time axis (that is, [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) is `'time'`), and supported [maxInterval](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.maxInterval) on value axis (that is [axis.type](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) is `'value'`). So that it is enabled to controll the precision of label when data zooming.

+ [+] Supported [xAxis.axisLine.onZeroAxisIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLine.onZeroAxisIndex), which enables specifing corresponding relationship when multiple axes used and `onZero` is required. See [#5069](https://github.com/ecomfe/echarts/issues/5069)。

+ [+] Supported that do not use [coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.coordinateSystems) in `custom series`.

+ [+] Supported rotation and alignment of label in bar chart. See [rotate](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.rotate), [align](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.align), [verticalAlign](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.verticalAlign). See [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation). See [#5309](https://github.com/ecomfe/echarts/issues/5309).

+ [+] Supported [radar.indicator.color](https://ecomfe.github.io/echarts-doc/public/en/option.html#radar.indicator.color), which enables setting different color for each indicator of radar chart. See [#6128](https://github.com/ecomfe/echarts/issues/6128).

+ [+] Supported [dataZoom.rangeMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.rangeMode), which can fixing zoom window according to data when data updated. See [#6128](https://github.com/ecomfe/echarts/issues/6040).

+ [+] Supported using `dataIndex` in [action.legend.legendToggleSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendToggleSelect), [action.legend.legendSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendSelect), [action.legend.legendUnSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendUnSelect). See [#4242](https://github.com/ecomfe/echarts/issues/4242).

+ [+] Supported [map.label.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.label.formatter), which enables using rich text in map series. See [Map Labels](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-labels).

+ [+] Supported [title.borderRadius](http://echarts.baidu.com/option.html#title.borderRadius) and [legend.borderRadius](http://echarts.baidu.com/option.html#legend.borderRadius), which enables round corner of background or border in `title` and `legend` component.

+ [^] Fixed that error thrown when using shadow in pie series in some version of IE. See [#5777](https://github.com/ecomfe/echarts/issues/5777).

+ [^] Fixed that name can not be obtained in `tooltip` when `nameMap` was used in map serise and there was no data in some areas. See [#5633](https://github.com/ecomfe/echarts/issues/5633).

+ [^] Fixed `tooltip` location incorrect after roamed in bmap extension. See [#6211](https://github.com/ecomfe/echarts/issues/6211).

+ [^] Fixed null pointer exception of `axisPointer`. See [#6121](https://github.com/ecomfe/echarts/issues/6121).

+ [^] Fixed that error occured when height of heatmap was 0. See [#6214](https://github.com/ecomfe/echarts/issues/6214).

+ [+] Fixed the incorrect rendering when the first entry was empty in [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6059](https://github.com/ecomfe/echarts/issues/6059).

+ [^] Fixed that [series-bar.dimensions](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.dimensions) did not work. See [#6252](https://github.com/ecomfe/echarts/issues/6252)。

+ [^] Fixed that when chilren number of group was not fixed, they could not be removed correctly in [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom).

+ [^] Fixed the error that calling `connect` before `setOption` called. See [#6281](https://github.com/ecomfe/echarts/issues/6281).

+ [^] Fixed the edge judgement of [tooltip.confine](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.confine). See [#6277](https://github.com/ecomfe/echarts/issues/6277) and [0da06d8](https://github.com/ecomfe/echarts/commit/0da06d8).

+ [^] Fixed that bar series displayed abnormal when viewport was narrow and bar series were overlapped (both set `barWidth` and `barGap: '-100%'`). See [#6312](https://github.com/ecomfe/echarts/issues/6312).

+ [^] Fixed precision problems. See [#6371](https://github.com/ecomfe/echarts/issues/6371).


## v3.6.2
<div class="time">2017-06-15</div>

+ [+] Supported draw [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom) on [Baidu Map (bmap)](https://github.com/ecomfe/echarts/tree/master/extension/bmap). See [example 1](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-polygon) and [example 2](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-bin)。

+ [+] Supported show parent labels in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=treemap-show-parent). See [#5869](https://github.com/ecomfe/echarts/issues/5869) and [#5579](https://github.com/ecomfe/echarts/issues/5579).

+ [+] Supported specifying mouse cursor style by: [series-line.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.cursor), [series-bar.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.cursor), [series-pie.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.cursor), [series-scatter.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.cursor), [series-effectScatter.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-effectScatter.cursor), [series-graph.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.cursor), [series-pictorialBar.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar.cursor).

+ [+] Support both negative and positive bounding data specified on [series-pictorialBar.symbolBoundingData](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar.symbolBoundingData). See [#5793](https://github.com/ecomfe/echarts/issues/5793).

+ [+] Supported [fixed](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.data.fixed) in `graph`. See [#5966](https://github.com/ecomfe/echarts/issues/5966).

+ [+] Supported [label.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.label.normal.formatter)in `treemap`. See [#5757](https://github.com/ecomfe/echarts/issues/5757).

+ [+] Supported [label.normal.textStyle.align](https://ecomfe.github.io/echarts-doc/public/en/option.html#timeline.label.normal.textStyle.align) and [label.normal.textStyle.basealign](https://ecomfe.github.io/echarts-doc/public/en/option.html#timeline.label.normal.textStyle.basealign) in `timeline`. See [#5960](https://github.com/ecomfe/echarts/issues/5960).

+ [^] Fixed that `tooltip` did not work when [large scatter](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-large) was zoomed. See[#5837](https://github.com/ecomfe/echarts/issues/5837).

+ [^] Fixed that parameter `position` did not work when trigger [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip) action. See [#5874](https://github.com/ecomfe/echarts/issues/5874).

+ [^] Fixed that sometimes the sum of the percent value is less than `100%` slightly in [pie](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie), which was caused by precision problem. See [#5850](https://github.com/ecomfe/echarts/issues/5850).

+ [^] Fixed only the last `markPoint` or `markLine` was displayed when `series.name` was the same. See [#5712](https://github.com/ecomfe/echarts/issues/5712).

+ [^] Fixed that [barBorderRadius](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.normal.barBorderRadius) did not work in horizontal bar. See [#5943](https://github.com/ecomfe/echarts/issues/5943).

+ [^] Fixed the zoom point error when applying [dataZoom-inside](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom-inside) on Y axis. See [#5278](https://github.com/ecomfe/echarts/issues/5278).

+ [^] Fixed sometimes [radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) did not display normally. See [#5986](https://github.com/ecomfe/echarts/issues/5986).



## v3.6.1
<div class="time">2017-05-26</div>

[Recovery Build]

+ [^] Fixed that [data sampling](http://echarts.baidu.com/option.html#series-line.sampling) did not work.
+ [^] Fixed the problem on ie11 when compiled by webpack. See [zrender/#189](https://github.com/ecomfe/zrender/issues/189).


## v3.6.0
<div class="time">2017-05-25</div>

+ **[+] Published [custom series](http://echarts.baidu.com/option.html#series-custom)**, which enables user to customize render logic and make new types of chart. See [samples](http://echarts.baidu.com/examples.html#chart-type-custom)。

+ **[+] Supported polar bar chart**. See [sample1](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-stack), [sample2](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-stack-radial), [sample3](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-real-estate)。

+ [+] Supported [encode](http://echarts.baidu.com/option.html#series-scatter.encode), which enable user to specify which dimensions in [data](http://echarts.baidu.com/option.html#series-scatter.data) are mapped to which axis of coordinate system. Or which dimensions will be displayed in [tooltip](http://echarts.baidu.com/option.html#tooltip) or [label](http://echarts.baidu.com/option.html#series-scatter.label). [Break Change]: The default name of the third dimension in `cartesian2d` is changed from `'z'` to `'value'`. If `'z'` is used in [visualMap.dimension](http://echarts.baidu.com/option.html#visualMap.dimension), please modify it to `'value'` or `2`.

+ [+] Supported [dimensions](http://echarts.baidu.com/option.html#series-scatter.dimensions), which enables that specifying names and types for each dimensions in [data](http://echarts.baidu.com/option.html#series-scatter.data). Name can be displayed in [tooltip](http://echarts.baidu.com/option.html#tooltip).

+ [+] Supported [dataZoom.minSpan](http://echarts.baidu.com/option.html#dataZoom.minSpan) and [dataZoom.maxSpan](http://echarts.baidu.com/option.html#dataZoom.maxSpan). See [#2843](https://github.com/ecomfe/echarts/issues/2843).

+ [+] Supported [dataZoom.moveOnMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.moveOnMouseMove) and [dataZoom.zoomOnMouseWheel](http://echarts.baidu.com/option.html#dataZoom-inside.zoomOnMouseWheel), which enables that triggering dataZoom only by mouse wheel while holding 'ctrl'/'alt'/'shift'. Moreover, supported [preventDefaultMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.preventDefaultMouseMove), See [#5769](https://github.com/ecomfe/echarts/issues/5769).

+ [+] Supported using image in [dataZoom.handleIcon](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) setting.

+ [^] Fixed boundary problems on world map.

+ [^] Fixed that [minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval) did not work when [min](http://echarts.baidu.com/option.html#xAxis.min) was set. See [#4838](https://github.com/ecomfe/echarts/issues/4838).

+ [^] Fixed problems caused by default properties on `Object`. See [#5576](https://github.com/ecomfe/echarts/issues/5576).

+ [^] Fixed that error was thrown when `setOption` while legend selection changed, which was caused [graphic](http://echarts.baidu.com/option.html#graphic). See [#5783](https://github.com/ecomfe/echarts/issues/5783).

+ [^] Fixed [parallelAxis.axisLabel.interval](http://echarts.baidu.com/option.html#parallelAxis.axisLabel.interval) supporting. See [#5694](https://github.com/ecomfe/echarts/issues/5694).

+ [^] Enhanced interaction of `dataZoom`.

+ [^] Fixed the problem about [minAngle](http://echarts.baidu.com/option.html#series-pie.minAngle) on rose chart. See [#5617](https://github.com/ecomfe/echarts/issues/5617).

+ [^] Fixed the problem when tooltip updating.



## v3.5.4
<div class="time">2017-04-27</div>

+ [^] Fixed the `clipPath` support for [liquidfill](https://github.com/ecomfe/echarts-liquidfill).
+ [^] Fixed the position when `label` is set as `insideTop`.
+ [^] Fixed the problem when transforming [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData).


## v3.5.3
<div class="time">2017-04-14</div>

+ [^] Fixed the problem when both `left` `right` `width` `top` `bottom` `height` are set. See [#5440](https://github.com/ecomfe/echarts/issues/5440).

+ [^] Fixed the problem when input x,y to [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip). See [#5449](https://github.com/ecomfe/echarts/issues/5449).

+ [^] Enhanced the effect of [boundaryGap](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.boundaryGap) when only one data existed. See [#4417](https://github.com/ecomfe/echarts/issues/4417).

+ [^] Fixed animation easing setting of [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.animationEasing). See [#5451](https://github.com/ecomfe/echarts/issues/5451).

+ [^] Made the sorting of [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap) stable when values were the same.

+ [^] Fixed that roam and brush conflicted when components overlaped.

+ [^] Enlarged area of [parallel axis name](https://ecomfe.github.io/echarts-doc/public/en/option.html#parallelAxis.nameRotate) when it rotates.

+ [^] Enabled [toolbox clear button](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.brush.type) to be able to clear brush box of [parallelAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#parallelAxis).

+ [^] Improved the performance of zrender up to `50%`.


## v3.5.2
<div class="time">2017-04-05</div>

+ [+] Supported [useUTC](https://ecomfe.github.io/echarts-doc/public/en/option.html#useUTC), which enables display `axisLabel` and `tooltip` in local time or UTC. Related default setttings are modified: `axisLabel` and `tooltip` display local time by default, and `data` recognize time string as local time if timezone not specified. See [the time part in series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.data). Fixed the problem that when `axis.type` is `'time'` tick is determined by UTC and can not align with daytime. Fixed [#5396](https://github.com/ecomfe/echarts/issues/5396) and [#5393](https://github.com/ecomfe/echarts/issues/5393)。

+ [+] Supported [axisLabel.showMinLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.showMinLabel) and [axisLabel.showMaxLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.showMaxLabel).

+ [+] Supported [funnel.sort](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.sort), which enables sorting funnel by index or customized function.

+ [^] Fixed float error of `axisTick`. See [#5041](https://github.com/ecomfe/echarts/issues/5041)。

+ [^] Fixed that `axisTick` did not display when value was too small. See [#5386](https://github.com/ecomfe/echarts/issues/5386).

+ [^] Fixed when [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger) was `'axis'`, `dispatchAction` [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip) did not work. See [#5423](https://github.com/ecomfe/echarts/issues/5423).

+ [^] Fixed that [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) disabled `itemStyle` of [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). See [#5388](https://github.com/ecomfe/echarts/issues/5388).

+ [^] Fixed that [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger) did not support `'none'`. See [#5400](https://github.com/ecomfe/echarts/issues/5400)。

+ [^] Fixed problem of [sankey](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey) on ie11. See [#3306](https://github.com/ecomfe/echarts/issues/3306).

+ [^] Fixed that `data.lineStyle.color` of [parallel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-parallel) did not work. See [#5363](https://github.com/ecomfe/echarts/issues/5363).


## v3.5.1
<div class="time">2017-03-23</div>

Recovery Build

+ [^] Fixed [#5352](https://github.com/ecomfe/echarts/issues/5352).

+ [^] Fixed [#5350](https://github.com/ecomfe/echarts/issues/5350).


## v3.5.0
<div class="time">2017-03-23</div>

+ **[+] Published [calendar coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#calendar)**. See [examples](https://ecomfe.github.io/echarts-examples/public/index.html#calendar).

+ **[+] Published echarts statistics tools [echarts-stat](https://github.com/ecomfe/echarts-stat)**

+ **[+] Enhanced axis pointer** See examples: [link](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-brush), [mobile (touch device) 1](https://ecomfe.github.io/echarts-examples/public/index.html#line-tooltip-touch), [mobile (touch device) 2](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-touch), [analysis](https://ecomfe.github.io/echarts-examples/public/index.html#scatter-nutrients-matrix), [multiple Y axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-y-axis), [multiple X axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-x-axis). Supported and enhanced [#5040](https://github.com/ecomfe/echarts/issues/5040), [#5039](https://github.com/ecomfe/echarts/issues/5039), [#5102](https://github.com/ecomfe/echarts/issues/5102), [#5262](https://github.com/ecomfe/echarts/issues/5262), [#4905](https://github.com/ecomfe/echarts/issues/4905), [#4921](https://github.com/ecomfe/echarts/issues/4921), [#5091](https://github.com/ecomfe/echarts/issues/5091).

+ [+] Enhanced method `echarts.util.parseDate`, which have supported parsing different formats of data expression to UTC time. See [time in series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.data)

+ [^] Enhanced processing of geoJSON.

+ [^] Fixed that [toolbox.feature.dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom) can not control multiple x axes. See [#4896](https://github.com/ecomfe/echarts/issues/4896).

+ [^] Fixed the default extent of category axis in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#5226](https://github.com/ecomfe/echarts/issues/5226).

+ [^] Fixed function name of "disConnect". See [#5208](https://github.com/ecomfe/echarts/issues/5208).

+ [^] Remove incorrect warning specifying `width,height` when initialize echart. See [#4569](https://github.com/ecomfe/echarts/issues/4569).

+ [^] Fixed that tooltip in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge) do not support percentage. See [#4347](https://github.com/ecomfe/echarts/issues/4347) and [#4332](https://github.com/ecomfe/echarts/pull/4332).

+ [^] Fixed the behavior when pointer color is 'auto' in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge). See [#5109](https://github.com/ecomfe/echarts/issues/5109).

+ [^] Fixed the problem when [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) is `false`. See [#4944](https://github.com/ecomfe/echarts/issues/4944).

+ Fixed the initialization of series-treemap.data is incorrect in one case.

+ Fixed the style of [toolbox](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox). See [#3591](https://github.com/ecomfe/echarts/issues/3591).

+ Enhanced the behavior of [brush](https://ecomfe.github.io/echarts-doc/public/en/option.html#brush) on category axis.

+ [^] Fixed that visualMap is abnormal when some item of [visualMap-piecewise.categories](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.categories) is numberic string. See [#4960](https://github.com/ecomfe/echarts/issues/4960).



## v3.4.0
<div class="time">2017-01-12</div>

+ **[+] Published `pictorialBar` chart：[pictorialBar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar)。See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-pictorialBar)。**

+ **[+] Published `themeRiver` chart：[themeRiver](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-themeRiver)。See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-themeRiver)。**

+ [+] A specified [geo coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) has been able to be used in [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). (In the past map series could only creat an inner exclusive geo coodinate system). Thus, [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) can be used to control color of a geo component. Moreover, a geo coordinate system can be shared among [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) and other series, like [scatter series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter). See [series-map.geoIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.geoIndex).

+ [+] Added [focusNodeAdjacency action](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.graph.focusNodeAdjacency), which enables trigger adjacent highlight of [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-geo) through API.

+ [+] Added [series-pie.animationType](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.animationType), which enables more animation effects.

+ [+] Callback function have been supported in [animationDuration](https://ecomfe.github.io/echarts-doc/public/en/option.html#animationDuration), which enables different animation duration of data items.

+ [+] [min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min) and [max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max) have been supported in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type).

+ [+] [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) has been changed to show all categories by default, in spite of whether there is data in categories. In the past, categories in the end that has no data will not be displayed.

+ [+] When using [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis), `series.data` has supported one-dimension array, like `[11, 23, 44]`.

+ [+] [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom) has supported [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis).

+ [+] Exposed throttle util method: `chart.util.throttle`.

+ [+] [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick) has supported [barWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barWidth), [barMinWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMinWidth) and [barMaxWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMaxWidth). See [#4783](https://github.com/ecomfe/echarts/issues/4783).

+ [+] [lines chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines) has supported [symbol](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbol), [symbolSize](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbolSize).

+ [+] Added support for show end text and data label at the same time in [visualMap-piecewise](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise). See [visualMap-piecewise.showLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.showLabel), and See [#4845](https://github.com/ecomfe/echarts/issues/4845).

+ [+] When using [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) to control a series, it has supported that some data items escape from the control by visualMap, but use its series visual settings (color, symbol, ...). See the paragraph of `Configure mapping` in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enhanced the effect of [grid (cartesian)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid) when on data displayed.

+ [^] Added parameter `dataIndex` in [showTip event](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip).

+ [^] Fixed vulnerability about XSS in tooltip. See [#4769](https://github.com/ecomfe/echarts/issues/4769).

+ [^] Fixed that some attributes did not work in [series-graph.edgeLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.edgeLabel). See [#4555](https://github.com/ecomfe/echarts/issues/4555).

+ [^] Fixed tick render problem when `min` `max` is `stirng` in [series-gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge). See [#4617](https://github.com/ecomfe/echarts/issues/4617).

+ [^] Fixed [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) problem. See [#4618](https://github.com/ecomfe/echarts/issues/4618).

+ [^] Fixed [series-radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) render error in a case that no data exists.

+ [^] Fixed [markArea.label.normal.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.label.normal.show) problem. See [#4723](https://github.com/ecomfe/echarts/issues/4723).

+ [^] Enhanced the process when data is equals or less then zero in [log axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.type). See [#4743](https://github.com/ecomfe/echarts/issues/4743) and [#3161](https://github.com/ecomfe/echarts/issues/3161).


## v3.3.2
<div class="time">2016-11-24</div>

+ [+] **Add [graphic](https://ecomfe.github.io/echarts-doc/public/en/option.html#graphic) in option, enable graphic configuration in option. See examples: <http://echarts.baidu.com/gallery/editor.html?c=line-y-category>, <http://echarts.baidu.com/gallery/editor.html?c=line-draggable> and <http://echarts.baidu.com/gallery/editor.html?c=map-province>.**

+ [+] Add [visualMin](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMin) and [visualMax](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMax), and enhance capability of visual mapping in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [#2509](https://github.com/ecomfe/echarts/issues/2509).

+ [+] Add [tooltip.confine](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.confine), which can confine tooltip within contianer of echarts instance. It helps a lot in small screen, or in the situation that outer dom is set to be `overflow:hidden`.

+ [^] Fix that erroneously forbiden default pan behavior in touch device. See [#4393](https://github.com/ecomfe/echarts/issues/4393).

+ [^] Enhance user experience for [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) in touche device。

+ [^] Fix calculation error of [containPixel](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.containPixel) in [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph). See [#4405](https://github.com/ecomfe/echarts/issues/4405).

+ [^] Enhance gradient [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) for [line](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line).

+ [^] Fix symbol mapping in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enable [realtime](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.realtime) upating of label in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4434](https://github.com/ecomfe/echarts/issues/4434).

+ [^] Fix highlight error in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4475](https://github.com/ecomfe/echarts/issues/4475).

+ [^] Fix that can not save as image in MS Edge browser. See [#2451](https://github.com/ecomfe/echarts/issues/2451) and [#3586](https://github.com/ecomfe/echarts/issues/3586).

+ [^] Fix format problem for `'time'` axis in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip). See [#4398](https://github.com/ecomfe/echarts/issues/4398).

+ [^] Fix [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) may not show bug when first series have null data.

+ [^] Fix [grid.containLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid.containLabel) not works for large fontSize. See [#3805](https://github.com/ecomfe/echarts/issues/3805).

+ [^] Fix `echarts.extendSeriesModel` error. See [#4397](https://github.com/ecomfe/echarts/issues/4397).

+ [^] Fix render error when `clockwise` is `false` and `minAngle` is used in [pie](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie). See [#4414](https://github.com/ecomfe/echarts/issues/4414).

+ [^] Fix erroneously rendering dot in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) when using gradient color. See [#3994](https://github.com/ecomfe/echarts/issues/3994).


## v3.3.1
<div class="time">2016-11-03</div>


## v3.3.0
<div class="time">2016-11-01</div>


## v3.2.3
<div class="time">2016-08-16</div>


## v3.2.2
<div class="time">2016-07-11</div>


## v3.2.1
<div class="time">2016-07-04</div>


## v3.2.0
<div class="time">2016-06-30</div>


## v3.1.10
<div class="time">2016-05-19</div>


## v3.1.9
<div class="time">2016-05-12</div>


## v3.1.8
<div class="time">2016-05-11</div>


## v3.1.7
<div class="time">2016-04-21</div>


## v3.1.6
<div class="time">2016-04-11</div>


## v3.1.5
<div class="time">2016-03-29</div>


## v3.1.4
<div class="time">2016-03-21</div>


## v3.1.3
<div class="time">2016-03-10</div>

+ 【\+】add in radar chart, see [https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar)

+ [^] position optimization of average, minimum and maximum value starting point and finishing point. Fix [#2762](https://github.com/ecomfe/echarts/issues/2762), [#2688](https://github.com/ecomfe/echarts/issues/2688).

+ [^] fix the only one configuration for ''none'' bug in markLine symbol. See [#2733](https://github.com/ecomfe/echarts/issues/2733)

+ [^]optimization of vertically centered multiple yext lines.

+ [^] emphasis configuration item of label in data item as pie chart is normal value by dafualt.

+ [^] when introdcued on need, line chart, pie chart and scatter chart introduce grid component by dafault to avoid problems in[#2758](https://github.com/ecomfe/echarts/issues/2758).

+ [^] fix floating point precision bug in dataZoom component. Fix [#2757](https://github.com/ecomfe/echarts/issues/2757)

+ [^] unselected legend chart is grey. See [#2615](https://github.com/ecomfe/echarts/issues/2615)

+ [^] fix  dataZoom position failure bug in media query of 3.1.1. Fix [#2710](https://github.com/ecomfe/echarts/issues/2710)

+ [^] fix firefox's incapability of triggering wheel events bug in 3.1.1 中. Fix [#2730](https://github.com/ecomfe/echarts/issues/2730)

+ [^] IE8 optimization.

+ [^] change to webpack to build code.


## v3.1.2
<div class="time">2016-03-01</div>

+ 【\+】provide theme download,see details in [http://echarts.baidu.com/download-theme.html](http://echarts.baidu.com/download-theme.html)

+ [^] fix `the bug that update data can not be shown in `setOption` after emptying line chart data in v3.1.1.

+ [^] fix possiblity of reporting `id duplicates` error in `setOption(chart.getOption())` . Fix [#2635](https://github.com/ecomfe/echarts/issues/2635)

+ [^] allow to customize toolbox toobar. See details in [toolbox.feature](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature)

+ [^] scale optimization of `'time'` type axis in large-span time range.

+ [^] fix no show of label formatter return to  0.Fix [#2659](https://github.com/ecomfe/echarts/issues/2659)

+ [^] fix markPoint label display error in charts with vertical axis as category axis.Fix [#2641](https://github.com/ecomfe/echarts/issues/2641)

+ [^] optimize dataZoom, fix dynamic data update problem in dataZoom chart. Fix [#2667](https://github.com/ecomfe/echarts/issues/2667)

+ [^] percentage is 0 rather than NaN when all pie chart data are zero. Fix [#2690](https://github.com/ecomfe/echarts/issues/2667)

+ [^] title alignment optimization.

+ [^] support display of tooltip when charts update. Fix [#2478](https://github.com/ecomfe/echarts/issues/2478)

+ [^] dashboard `splitLine.length`, `axisTick.length` supports percentage.

+ [^] optimization of line animation feature.

+ [^] optimization of category axis feature of large data amount .

+ [^] fix error reporting bug of markPoint and markLine in IE8.

+ [^] fix error reporting bug under `'use strict'`model. Fix [#2643](https://github.com/ecomfe/echarts/issues/2643)


## v3.1.1
<div class="time">2016-02-22</div>

+ 【\+】newly add npm channel to obtain echarts, see details in [webpack + echarts tutorial](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

+ [^] fix abnormal indynamic markPoint and markLine . Fix [#2522](https://github.com/ecomfe/echarts/issues/2522)

+ [^] fix parameter error in axis interval callback. Fix [#2470](https://github.com/ecomfe/echarts/issues/2470)

+ [^] fix failure in customizing lineStyle of every edge in graph. Fix [#2558](https://github.com/ecomfe/echarts/issues/2558)

+ [^] saveAsImage supports IE9+ and FireFox in toolbox.

+ [^] support cylindrical corner configuration. [#2550](https://github.com/ecomfe/echarts/issues/2550)

+ [^] fix error in dataZoom location configuration item. Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] fix possible `id duplicate` error when fix `setOption` for too many times.Fix [#2452](https://github.com/ecomfe/echarts/issues/2452)

+ [^] candlestick and boxplot chart support markPoint and markLine.Fix [#2566](https://github.com/ecomfe/echarts/issues/2566)

+ [^] fix reset error in toolbox after use `setOption` in non-merge model.Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] scatter chart and markPoint support configurating `label` `formatter` in `emphasis`. Fix [#2596](https://github.com/ecomfe/echarts/issues/2596)

+ [^] Treemap supports `roam` configuration item.

+ [^] axis of time type support time data of string format.

+ [^] fix switch problem in Line and area charts. Fix [#2625](https://github.com/ecomfe/echarts/issues/2625)

+ [^] location optimization of multiple series of bar chart markPoint. Fix [#2623](https://github.com/ecomfe/echarts/issues/2623)

+ [^] fix error reporting in init when theme is string and has dataZoom component. Fix [#2619](https://github.com/ecomfe/echarts/issues/2619)

+ [^] legend and toolbox support setting height and width and wrap automatically through width and height.Fix [#2621](https://github.com/ecomfe/echarts/issues/2621)

+ [^] optimization of line chart smooth, add in`smoothMonotone` configuration item, see details in [option.html#series-line.smoothMonotone](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smoothMonotone), Fix [#2612](https://github.com/ecomfe/echarts/issues/2612)

+ [^] fix incapability to trigger mouse events on computers with touch screen like Surface and so on. Fix [#2569](https://github.com/ecomfe/echarts/issues/2569)

## v3.0.2
<div class="time">2016-01-23</div>

+ [^] fix highlight failture in scatter chart.

+ [^] optimize tooltip linkage. Fix [#2445](https://github.com/ecomfe/echarts/issues/2445)

+ [^] dataZoom of inside type support zoomLock.

+ [^] add error alert of non-exist map type.

+ [^] optimize legend switch animation of line chart.

+ [^] fix problem about Legends cannot be added dynamically. Fix [#2457](https://github.com/ecomfe/echarts/issues/2457)

+ [^] fix timeline's incapability to configutate show.

+ [^] fix 0 data shown as undefined in tooltip .Fix [#2463](https://github.com/ecomfe/echarts/issues/2463)

+ [^] fix incorrect display of dataZoom zoom graphic. Fix [#2462](https://github.com/ecomfe/echarts/issues/2462)

+ [^] fix the problem of axis `min` `max` as string, PR [#2481](https://github.com/ecomfe/echarts/pull/2481)

## v3.0.1
<div class="time">2016-01-18</div>

+ [+] add [getOption](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.getOption) and [clear](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.clear) method

+ [^] fix average value, maximum value and minimum vaule label and the incapability to show correct value of tooltip. Fix [#2393](https://github.com/ecomfe/echarts/issues/2393)

+ [^] fix drawing incorrectness when bar chart  has bigger width than height, Fix [#2343](https://github.com/ecomfe/echarts/issues/2343)

+ [^] fix the function problem of legend `show` configuration item. Fix [#2371](https://github.com/ecomfe/echarts/issues/2371)

+ [^] map type can choose data attribute.

+ [^] fix average mark and mark calculation errors, Fix [#2367](https://github.com/ecomfe/echarts/issues/2367)

+ [^] animation optimization when line chart change from `'-'` no data to data.

+ [^] mouse wheel zoom direction change to ommonly used one.

+ [^] data area zoom tool in toolbar support specified axis, see detail in[toolbox document](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom.yAxisIndex)

+ [^] fix no data error on timeline, scale change from `[-1, 1]` to `[0, 1]` when data value axis has no data.

+ [^] fix drawing error of axis splitArea.

+ [^] fix multiple chart example linkage problem. Fix [#2391](https://github.com/ecomfe/echarts/issues/2391)

+ [^] fix the problem that color on legend cannot display correctly with pie chart color being callback function. Fix [#2372](https://github.com/ecomfe/echarts/issues/2372)

+ [^] fix mouse hover errors when pie chart data is 0.

+ [^] when all pie chart data are 0, secotrs changed to uniform distribution.

+ [^] fix errors in background seeting under IE 8.

+ [^] fix incorrect release event in tooltip component dispose.

## v3.0.0
<div class="time">2016-01-12</div>

+ The new echarts