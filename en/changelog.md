## v5.3.0

+ [Feature] Introduce new keyframe based animation to graphic component and custom series. [#16225](https://github.com/apache/echarts/issues/16225) ([pissang](https://github.com/pissang))
+ [Feature] Support transition animation in the graphic component. [#16225](https://github.com/apache/echarts/issues/16225) ([pissang](https://github.com/pissang))
+ [Feature] [svg] New SVG renderer. Improved SVG rendering performance by 2x ~ 10x. [#836](https://github.com/ecomfe/zrender/pull/836)  ([pissang](https://github.com/pissang))
+ [Feature] [svg] Add SVG server-side rendering [#15880](https://github.com/apache/echarts/issues/15880) ([pissang](https://github.com/pissang))
+ [Feature] [axis] Add `alignTicks` for mutliple axis alignment. [#16300](https://github.com/apache/echarts/issues/16300) ([pissang](https://github.com/pissang))
+ [Feature] [state] Add `select.disabled` to disable select state. [#15534](https://github.com/apache/echarts/issues/15534) ([susiwen8](https://github.com/susiwen8))
+ [Feature] [state] Add `selectedModel: 'series'` to selected the whole series. [#15534](https://github.com/apache/echarts/issues/15534) ([susiwen8](https://github.com/susiwen8))
+ [Feature] [state] Add `emphasis.disabled` to disable emphasis state. [#16368](https://github.com/apache/echarts/issues/16368) ([pissang](https://github.com/pissang))
+ [Feature] [map] Introduce projection to map series and geo component. [#16364](https://github.com/apache/echarts/issues/16364) ([pissang](https://github.com/pissang))
+ [Feature] [geo] Support `LineString` and `MultiLineString` in GeoJSON source. [#16364](https://github.com/apache/echarts/issues/16364) ([pissang](https://github.com/pissang))
+ [Feature] [tooltip] Add `valueFormatter` in the tooltip. [#16332](https://github.com/apache/echarts/issues/16332) ([pissang](https://github.com/pissang))
+ [Feature] [pie/sunburst] Supports configuring radius on the four corners of sector. [#16298](https://github.com/apache/echarts/issues/16298) ([plainheart](https://github.com/plainheart))
+ [Feature] [line] Add `triggerLineEvent` to support triggering mouse event on the line area. [#15847](https://github.com/apache/echarts/issues/15847) ([susiwen8](https://github.com/susiwen8))
+ [Feature] [i18n] Add Italian translation. [#16211](https://github.com/apache/echarts/issues/16211) ([andrearoota](https://github.com/andrearoota))
+ [Feature] [i18n] Add Romanian translation. [#15990](https://github.com/apache/echarts/issues/15990) ([szilard-dobai](https://github.com/szilard-dobai))
+ [Feature] [graph] fix error when symbol is none. [#16394](https://github.com/apache/echarts/issues/16394) ([pissang](https://github.com/pissang))
+ [Fix] [dataset] Fix `sourceHeader: false` may not work. [#16376](https://github.com/apache/echarts/issues/16376) ([lefex](https://github.com/lefex))
+ [Fix] [tooltip] Fix the page will be frozen if multiple tooltips are provided. [#16347](https://github.com/apache/echarts/issues/16347) ([plainheart](https://github.com/plainheart))
+ [Fix] [bar] Optimizing bar layout in the large mode. Fix stacked bar when large is enabled. [#16338](https://github.com/apache/echarts/issues/16338) ([pissang](https://github.com/pissang))
+ [Fix] [bar] Fix stacked bar on the log axis. [#16338](https://github.com/apache/echarts/issues/16338) ([pissang](https://github.com/pissang))
+ [Fix] [pie] Optimize label layout and text wrapping [#16034](https://github.com/apache/echarts/issues/16034) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [polar] fix edge symbols are clipped unexpectedly for the tiny offset. [#16329](https://github.com/apache/echarts/issues/16329) ([plainheart](https://github.com/plainheart))
+ [Fix] [map] Some labels won't be shown when legend is enabled and no label formatter specified. [#16322](https://github.com/apache/echarts/issues/16322) ([plainheart](https://github.com/plainheart))
+ [Fix] [pie] Fix tangential rotation with startAngle. [#16307](https://github.com/apache/echarts/issues/16307) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [animation] Fix opacity may be wrong when set `divideShape: 'clone'` in the universal transition [#16250](https://github.com/apache/echarts/issues/16250) ([pissang](https://github.com/pissang))
+ [Fix] [bar] Optimize morphing on the bar with rounded cap. [#16246](https://github.com/apache/echarts/issues/16246) ([pissang](https://github.com/pissang))
+ [Fix] [graph] Support using `dataType` param to specify edge highlighting [#16243](https://github.com/apache/echarts/issues/16243) ([Dingzhaocheng](https://github.com/Dingzhaocheng))
+ [Fix] [pie] Fix label of first sector may not shown. [#16229](https://github.com/apache/echarts/issues/16229) ([116050423](https://github.com/116050423))
+ [Fix] [tooltip] Fix tooltip lagging when transition is disabled. (#16101) [#16212](https://github.com/apache/echarts/issues/16212) ([plainheart](https://github.com/plainheart))
+ [Fix] [axis] Fix axis label width not affect the grid layout. [#16203](https://github.com/apache/echarts/issues/16203) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [lines] fix NPE issue when lines series has no coordinate system. [#16184](https://github.com/apache/echarts/issues/16184) ([plainheart](https://github.com/plainheart))
+ [Fix] [line] Fix using endLabel may throw excpetion when series is totally filtered. [#16339](https://github.com/apache/echarts/issues/16339) ([pissang](https://github.com/pissang))
+ [Fix] [dataZoom] Optimize shadow render performance when dragging on the chart. [#16070](https://github.com/apache/echarts/issues/16070) ([pissang](https://github.com/pissang))
+ [Fix] [line] Fix bezier points calculated wrong when monotone smooth is used. [#16069](https://github.com/apache/echarts/issues/16069) ([pissang](https://github.com/pissang))
+ [Fix] [line] Fix tooltip not shown when all values are null [#16001](https://github.com/apache/echarts/issues/16001) ([kongmoumou](https://github.com/kongmoumou))
+ [Fix] [axis] Fix `scale` on the log axis. [#15998](https://github.com/apache/echarts/issues/15998) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [radar] Fix tooltip displayed wrong when `name.show` is false #15915 [#15985](https://github.com/apache/echarts/issues/15985) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [progressive] Optimize progressive rendering performance [#15870](https://github.com/apache/echarts/issues/15870) ([pissang](https://github.com/pissang))
+ [Fix] [svg] Fix rect path can't be closed bug.
+ [Fix] [svg] Normalize color when using SVG renderer to support more cases. [#767](https://github.com/ecomfe/zrender/issues/767) ([plainheart](https://github.com/plainheart))
+ [Fix] [pictorialBar] Fixed incorrectly display when data is 0 and `borderWidth` is set to a non-0 value [#12793](https://github.com/apache/echarts/issues/12793) ([yanheSu](https://github.com/yanheSu))
+ [Fix] [map] Optimize default label position calculation. [#16364](https://github.com/apache/echarts/issues/16364) ([pissang](https://github.com/pissang))
+ add .js extension in the import statement [#16276](https://github.com/apache/echarts/issues/16276) ([pissang](https://github.com/pissang))

## v5.2.2
<div class="time">2021-11-01</div>

+ [Feature] [line] Add `triggerLineEvent`. Support trigger mouse event on polyline and polygon area. [#15847](https://github.com/apache/echarts/issues/15847) ([susiwen8](https://github.com/susiwen8))
+ [Feature] [i18n] Add Russian translation. [#15867](https://github.com/apache/echarts/issues/15867) ([finkrer](https://github.com/finkrer))
+ [Feature] [i18n] Add Polish translation. [#15891](https://github.com/apache/echarts/issues/15891) ([CaelumNigre](https://github.com/CaelumNigre))
+ [Fix] [line] fix smoothed line with duplicate points failed to draw [#15942](https://github.com/apache/echarts/issues/15942) ([pissang](https://github.com/pissang))
+ [Fix] [line] Fix visual gradient is wrong when coords are between two stops. [#15938](https://github.com/apache/echarts/issues/15938) ([pissang](https://github.com/pissang))
+ [Fix] [calendar] Fix i18n doesn't work in the calendar coordinate system [#15935](https://github.com/apache/echarts/issues/15935) ([plainheart](https://github.com/plainheart))
+ [Fix] [bar] Fix label value animation is not accurate in the bar racing case. [#15916](https://github.com/apache/echarts/issues/15916) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [axis] fix charts render abnormally when `yAxis.max` is set to be a value less than the min value of the series data. [#15878](https://github.com/apache/echarts/issues/15878) ([plainheart](https://github.com/plainheart))
+ [Fix] [tooltip] Fix boolean value display. [#15869](https://github.com/apache/echarts/issues/15869) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [types] Add `undefined` to the return type of `getInstanceByDom` and `getInstanceById` [#15913](https://github.com/apache/echarts/issues/15913) ([plainheart](https://github.com/plainheart))

## v5.2.1
<div class="time">2021-09-21</div>

+ [Feature] [i18n] Adding pt-BR(Portuguese, Brazil) lang. [#15722](https://github.com/apache/echarts/issues/15722) ([williamorim](https://github.com/williamorim))
+ [Feature] [axis] add `axisLabel.hideOverlap`. [#15583](https://github.com/apache/echarts/issues/15583) ([svedova](https://github.com/svedova)) [#15712](https://github.com/apache/echarts/issues/15712) ([pissang](https://github.com/pissang))
+ [Feature] [sunburst] Add `radius` in levels [#15706](https://github.com/apache/echarts/issues/15706) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [line] Fix animation may be wrong when data changes lot. [#15731](https://github.com/apache/echarts/issues/15731) ([pissang](https://github.com/pissang))
+ [Fix] [legend] Fix `icon` not keep aspect. [#15720](https://github.com/apache/echarts/issues/15720) ([pissang](https://github.com/pissang))
+ [Fix] [line] Optimize line gradient leaks on the edge when the range is large. [#15711](https://github.com/apache/echarts/issues/15711) ([pissang](https://github.com/pissang))
+ [Fix] [marker] Fix `markLine`, `markPoint` and `markArea` may not work on time axis if use string time data [#15686](https://github.com/apache/echarts/issues/15686) ([100pah](https://github.com/100pah))
+ [Fix] [tooltip] Fix tooltip may be lagging and shaking in Chrome(with the devtools open) and Firefox. [#15683](https://github.com/apache/echarts/issues/15683) ([plainheart](https://github.com/plainheart))
+ [Fix] [svg] Fix svg mouse event doesn't work normally in Firefox when using shadow. [#812](https://github.com/ecomfe/zrender/issues/812) ([plainheart](https://github.com/plainheart))
+ [Fix] [line] Not stop existing expand animation when update. [#15599](https://github.com/apache/echarts/issues/15599) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [geo]  Fix `href` attribute not work in SVG source. [#803](https://github.com/ecomfe/zrender/issues/803) ([plainheart](https://github.com/plainheart))
+ [Fix] [polar] Fix wrong sector clockwise when previous data is 0. [#15589](https://github.com/apache/echarts/issues/15589) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [type] Improve option types. [#15696](https://github.com/apache/echarts/issues/15696) ([pissang](https://github.com/pissang))
+ [Fix] Fix prototype pollution. [GHSA-fhv8-fx5f-7fxf](https://github.com/ecomfe/zrender/security/advisories/GHSA-fhv8-fx5f-7fxf)


## v5.2.0
<div class="time">2021-09-01</div>

#### Break Changes

+ [Fix] [pie] Negative value will be filtered [#15095](https://github.com/apache/echarts/issues/15095) ([ssthouse](https://github.com/ssthouse))

#### All Changes

+ **[Feature] Introduce universal transition to all series. [#15208](https://github.com/apache/echarts/issues/15208) ([pissang](https://github.com/pissang))**
+ [Feature] [color] Add `series.colorBy` [#13788](https://github.com/apache/echarts/issues/13788) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [label] Support sector label positions for polar bars [#774](https://github.com/ecomfe/zrender/issues/774) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [effectScatter] Add `rippleEffect.number` [#15335](https://github.com/apache/echarts/issues/15335) ([plainheart](https://github.com/plainheart))
+ [Feature] [gauge] Add `pointer.showAbove` to allow pointer show above the title and details. [#15337](https://github.com/apache/echarts/issues/15337) ([AmosChenYQ](https://github.com/AmosChenYQ)) [#15326](https://github.com/apache/echarts/issues/15326) ([susiwen8](https://github.com/susiwen8))
+ [Feature] [emphasis] `emphasis.color` can use `'inherit'` to be not higlighted. [#15172](https://github.com/apache/echarts/issues/15172) ([Foreverwzh](https://github.com/Foreverwzh))
+ [Feature] [pie] Display an empty cicle when pie don't have value. [#15095](https://github.com/apache/echarts/issues/15095) ([ssthouse](https://github.com/ssthouse))
+ [Fix] [dataset] Fix dataset performance drops signifcantly on high dimensions data. [#15355](https://github.com/apache/echarts/issues/15355) ([pissang](https://github.com/pissang))
+ [Fix] [axis] Optimize format in time axis [#15465](https://github.com/apache/echarts/issues/15465) ([leavest](https://github.com/leavest))  [#15434](https://github.com/apache/echarts/issues/15434) ([zhiyuc123](https://github.com/zhiyuc123))
+ [Fix] [custom] Optimize text font compatibility with legacy code. [#15454](https://github.com/apache/echarts/issues/15454) ([AmosChenYQ](https://github.com/AmosChenYQ))
+ [Fix] [memory] Optimize memory when chart instance is still hold after dispose [#15417](https://github.com/apache/echarts/issues/15417) ([pissang](https://github.com/pissang))
+ [Fix] [line] Optimize color gradient when having infinite value. [#15416](https://github.com/apache/echarts/issues/15416) ([plainheart](https://github.com/plainheart))
+ [Fix] [date] Optimize date parsing [#15410](https://github.com/apache/echarts/issues/15410) ([quillblue](https://github.com/quillblue))
+ [Fix] [line] Fix render bug. [#788](https://github.com/ecomfe/zrender/issues/788) ([pissang](https://github.com/pissang))
+ [Fix] [candlestick] Fix style lost after update [#15368](https://github.com/apache/echarts/issues/15368) ([pissang](https://github.com/pissang))
+ [Fix] [sankey] Gradient should follow orient. [#15363](https://github.com/apache/echarts/issues/15363) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [tooltip] Fix tooltip formatter doesn't renders HTMLElement if tooltip position is specified. [#15313](https://github.com/apache/echarts/issues/15313) ([plainheart](https://github.com/plainheart))
+ [Fix] [tooltip] Tooltip should clear content when formatter returns null. [#15313](https://github.com/apache/echarts/issues/15313) ([plainheart](https://github.com/plainheart))
+ [Fix] [bar] Set label to be inside when position is `'middle'` [#15309](https://github.com/apache/echarts/issues/15309) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [marker] Fix 'clampData' undefined error in 'getMarkerPosition'  [#15297](https://github.com/apache/echarts/issues/15297) ([AmosChenYQ](https://github.com/AmosChenYQ))
+ [Fix] [treemap] Fix old nodes not removed when disabled animation [#15283](https://github.com/apache/echarts/issues/15283) ([villebro](https://github.com/villebro))
+ [Fix] [tree] Fix edge may not removed when update data [#15251](https://github.com/apache/echarts/issues/15251) ([ssthouse](https://github.com/ssthouse))
+ [Fix] [pie/sunburst] Fix `borderRadius` can't be reset in pie series and sunburst series when setting it to `null` or `undefined` [#15243](https://github.com/apache/echarts/issues/15243) ([plainheart](https://github.com/plainheart))
+ [Fix] [canvas] Fix unexpected `none` or `null` fillStyle may be warned in firefox [#784](https://github.com/ecomfe/zrender/issues/784) ([plainheart](https://github.com/plainheart))
+ [Fix] [highlight] Hightlight multiple series through `chart.dispatchAction` not work as expected [#15207](https://github.com/apache/echarts/issues/15207) ([ssthouse](https://github.com/ssthouse))
+ [Fix] [sankey] Fix drag bug when using `series.nodes` to represent data. [#15199](https://github.com/apache/echarts/issues/15199) ([DuLinRain](https://github.com/DuLinRain))
+ [Fix] [svg] Optimize exported SVG compatibility for Powerpoint. [#767](https://github.com/ecomfe/zrender/pull/767) ([plainheart](https://github.com/plainheart))
+ [Fix] [legend] Fix `text.lineHeight` not work [#773](https://github.com/ecomfe/zrender/issues/773) ([ssthouse](https://github.com/ssthouse))
+ [Fix] [pie] Change the default `itemStyle.borderJoin` to `round`. [#15145](https://github.com/apache/echarts/issues/15145) ([plainheart](https://github.com/plainheart))
+ [Fix] [radar] Change the default `lineStyle.join` to `round`. [#15381](https://github.com/apache/echarts/issues/15381) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [treemap] Fix `label.show` set to `false` will throw error [#15141](https://github.com/apache/echarts/issues/15141) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [pictorialBar] Fix pictorialBar zero value label display. [#15132](https://github.com/apache/echarts/issues/15132) ([ssthouse](https://github.com/ssthouse))
+ [Fix] [lines] Fix lines can't be cleared by chart.clear() [#15088](https://github.com/apache/echarts/issues/15088) ([plainheart](https://github.com/plainheart))
+ [Fix] [endLabel] Fix endLabel not display when only set `emphasis.show` to `true`.  [#15072](https://github.com/apache/echarts/issues/15072) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [svg] Fix rect path not closed. [#767](https://github.com/ecomfe/zrender/issues/767) ([plainheart](https://github.com/plainheart))
+ [Fix] [treemap] Add `treeAncestors` in callback params [#14976](https://github.com/apache/echarts/issues/14976) ([pissang](https://github.com/pissang))
+ [Fix] [tree] Fix error when running setOption twice with different data [#14930](https://github.com/apache/echarts/issues/14930) ([Map1en](https://github.com/Map1en))
+ [Fix] [radar] Fix radar symbol border is scaled [#15396](https://github.com/apache/echarts/issues/15396) ([pissang](https://github.com/pissang))
+ [Fix] [marker] Fix symbolOffset and symbolKeepAspect doesn't work in markPoint. [#14737](https://github.com/apache/echarts/issues/14737) ([plainheart](https://github.com/plainheart))
+ [Fix] [gauge] Fix data index and series index is missing. [#14688](https://github.com/apache/echarts/issues/14688) ([yufeng04](https://github.com/yufeng04))
+ [Fix] [tooltip] Tooltip arrow will follow borderWidth. [#14393](https://github.com/apache/echarts/issues/14393) ([g7i](https://github.com/g7i))
+ [Fix] [geo] Fix geo switch from hidden to show fail. [#15361](https://github.com/apache/echarts/issues/15361) ([pissang](https://github.com/pissang))
+ [Fix] [type] Optimize type of `renderItem` in custom series.
+ [Fix] [type] Optimize option type of `echarts.init`. [#15487](https://github.com/apache/echarts/issues/15487) ([John60676](https://github.com/John60676))
+ [Fix] [type] There is no `polarIndex` when coordinate of series is polar [#15281](https://github.com/apache/echarts/issues/15281) ([Map1en](https://github.com/Map1en))
+ [Fix] [type] Optimize type when using SVG source in geo component. [#15263](https://github.com/apache/echarts/issues/15263) ([leosxie](https://github.com/leosxie))
+ [Fix] [type] Fix wrong type for `pie` data and `map` data. [#15144](https://github.com/apache/echarts/issues/15144) ([plainheart](https://github.com/plainheart))

## v5.1.2
<div class="time">2021-06-09</div>

+ [Feature] [geo/map] Support skew in transform and svg parser. [#755](https://github.com/ecomfe/zrender/issues/755) ([pissang](https://github.com/pissang))
+ [Feature] [tree] Add `treeAncestors` property in the params of tooltip callback . [#14957](https://github.com/apache/echarts/issues/14957) ([stephenLYZ](https://github.com/stephenLYZ))
+ [Feature] [i18n] Add Slovenian translation. [#14758](https://github.com/apache/echarts/issues/14758) ([dkrat7](https://github.com/dkrat7))
+ [Fix] [canvas] Fix extra `ctx.save` call. [#765](https://github.com/ecomfe/zrender/issues/765) ([pissang](https://github.com/pissang))
+ [Fix] [path] Fix small subpath may be ignored when optimizing small line segments. [#760](https://github.com/ecomfe/zrender/issues/760) ([pissang](https://github.com/pissang))
+ [Fix] [tooltip] When component `tooltip.formatter` is not specified, use a specific default formatter, rather than use global `tooltip.formatter` as default. Fix [#14939](https://github.com/apache/echarts/issues/14939). [#14972](https://github.com/apache/echarts/issues/14972) ([100pah](https://github.com/100pah))
+ [Fix] [resize] Error thrown when resize is called after setOption called with lazyUpdate: true. Fix [#14846](https://github.com/apache/echarts/issues/14846), Fix [#11395](https://github.com/apache/echarts/issues/11395). [#14934](https://github.com/apache/echarts/issues/14934) ([100pah](https://github.com/100pah))
+ [Fix] [treemap] Error when running setOption twice with diff data. [#14930](https://github.com/apache/echarts/issues/14930) ([Map1en](https://github.com/Map1en))
+ [Fix] [tree] Error when running setOption twice with diff data. [#14905](https://github.com/apache/echarts/issues/14905) ([Map1en](https://github.com/Map1en))
+ [Fix] [option] Check the missing component before merge theme. [#14966](https://github.com/apache/echarts/issues/14966) ([pissang](https://github.com/pissang))
+ [Fix] [text] Fix gradient text background cause rendering error. [#756](https://github.com/ecomfe/zrender/issues/756) ([pissang](https://github.com/pissang))
+ [Fix] [clip] Line chart will throw an error when `clip` is set as `false`. [#14813](https://github.com/apache/echarts/issues/14813) ([plainheart](https://github.com/plainheart))
+ [Fix] [legend] Remove unexpected syntax to ensure better compatibility. [#14810](https://github.com/apache/echarts/issues/14810) ([plainheart](https://github.com/plainheart))
+ [Fix] [dataZoom] Type fix for startValue and endValue. Close [#14412](https://github.com/apache/echarts/issues/14412) [#14775](https://github.com/apache/echarts/issues/14775) ([dileepyelleti](https://github.com/dileepyelleti))
+ [Fix] [label] Ensure the label of the temporary symbol is in front of line and area polygon. [#14993](https://github.com/apache/echarts/issues/14993) ([plainheart](https://github.com/plainheart))
+ [Fix] [stack] Fix number getPrecisionSafe incorrect on scientific notation like 3.45e-1. Stack sum eliminate floating arithmetic problem. [#15015](https://github.com/apache/echarts/issues/15015) ([100pah](https://github.com/100pah))
+ [Fix] [dataZoom] Should no dataZoom filtering when `toolbox.feature.dataZoom` not declared. [#15015](https://github.com/apache/echarts/issues/15015) ([100pah](https://github.com/100pah))
+ [Fix] [line] Avoid the infinite value in `linearMap` util. [#14602](https://github.com/apache/echarts/issues/14602) ([plainheart](https://github.com/plainheart))
+ [Fix] [timeline] Trigger `timelineplaychange` event when play to the end. [#14620](https://github.com/apache/echarts/issues/14620) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [custom] Fix progressive rendering in custom series. [#14920](https://github.com/apache/echarts/issues/14920) ([pissang](https://github.com/pissang))
+ [Fix] [brush] Clamp range when brush. [#14569](https://github.com/apache/echarts/issues/14569) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [label] Fix labels are not on the top bug. [#14542](https://github.com/apache/echarts/issues/14542) ([plainheart](https://github.com/plainheart))
+ [Fix] [toolbox] The `show` option of customized toolbox button does not work. [#14408](https://github.com/apache/echarts/issues/14408) ([plainheart](https://github.com/plainheart))
+ [Fix] [type] Changed `LineEndLabelOption.valueAnimation` to be optional. [#14806](https://github.com/apache/echarts/issues/14806) ([Bilge](https://github.com/Bilge))
+ [Fix] [type] Export cbs and their parameter types. [#14871](https://github.com/apache/echarts/issues/14871) ([dougalg](https://github.com/dougalg))
+ [Fix] [type] Fix position callback return type. Fix [#15031](https://github.com/apache/echarts/issues/15031). ([congjiujiu](https://github.com/congjiujiu))
+ [Fix] [type] Remove non-required properties from PatternObject and fix some type issues. [#759](https://github.com/ecomfe/zrender/issues/759). ([plainheart](https://github.com/plainheart))


## v5.1.1
<div class="time">2021-04-27</div>

+ [Fix] [geo] Fix tooltip don't show on `geo` component. [#14767](https://github.com/apache/echarts/issues/14767) ([pissang](https://github.com/pissang))
+ [Fix] [tooltip] Fix the position of tooltip may be incorrect when `appendToBody`. [#14713](https://github.com/apache/echarts/issues/14713) ([plainheart](https://github.com/plainheart))
+ [Fix] [map] Fix tooltip may have error on map series. [#14704](https://github.com/apache/echarts/issues/14704) ([plainheart](https://github.com/plainheart))
+ [Fix] [pie] Fix labelLine may still appear on emphasis when changed from outside to inside. [#14702](https://github.com/apache/echarts/issues/14702) ([villebro](https://github.com/villebro))
+ [Fix] [type] Fix type error on earlier TypeScript versions. Close [#14716](https://github.com/apache/echarts/issues/14716) [#14739](https://github.com/apache/echarts/issues/14739)
+ [Fix] [type] `symbolOffset` incorrectly marked as mandatory. [#14693](https://github.com/apache/echarts/pull/14693) ([villebro](https://github.com/villebro))

## v5.1.0
<div class="time">2021-04-15</div>

+ !![Feature] [geo] [map] geo component and map series support SVG format source. [#14571](https://github.com/apache/echarts/issues/14571) ([100pah](https://github.com/100pah))
+ ![Feature] [legend] Default legend design is more intuitive. [#14497](https://github.com/apache/echarts/issues/14497) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [i18n] Add czech translation [#14468](https://github.com/apache/echarts/issues/14468) ([JiriBalcar](https://github.com/JiriBalcar))
+ [Feature] [animation] Add animaiton configuration in resize [#14553](https://github.com/apache/echarts/issues/14553) ([pissang](https://github.com/pissang))
+ [Feature] [effectScatter] Add clip for effectScatter [#14574](https://github.com/apache/echarts/issues/14574) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [debug] Optimize error log when components or series are missing [#14568](https://github.com/apache/echarts/issues/14568) ([pissang](https://github.com/pissang))
+ [Fix] [tooltip] Improve the performance of tooltip. [#14246](https://github.com/apache/echarts/issues/14246) ([plainheart](https://github.com/plainheart))
+ [Fix] [label] Fix labels may have wrong `z` and not in the front. [#14542](https://github.com/apache/echarts/issues/14542) ([plainheart](https://github.com/plainheart)) [#14417](https://github.com/apache/echarts/issues/14417) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [pattern] Fix `CanvasPatttern#setTransform` may not exists error. [#738](https://github.com/ecomfe/zrender/issues/738) ([pissang](https://github.com/pissang))
+ [Fix] [tooltip] Fix formatter wrong when using time axis [#14471](https://github.com/apache/echarts/issues/14471) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [symbol] Make `symbolOffset` work on all the components using symbols. [#14375](https://github.com/apache/echarts/issues/14375) ([plainheart](https://github.com/plainheart))
+ [Fix] [markArea] Fix markArea background color disappeared bug. Close [#13647](https://github.com/apache/echarts/issues/13647) [#14343](https://github.com/apache/echarts/issues/14343) ([Nick22nd](https://github.com/Nick22nd))
+ [Fix] [markLine] Fix string type data may not work in markLine. Close [#14300](https://github.com/apache/echarts/issues/14300) [#14314](https://github.com/apache/echarts/issues/14314) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [select] Fix null access bug when checking selected status. Close [#14293](https://github.com/apache/echarts/issues/14293) [#14413](https://github.com/apache/echarts/issues/14413) ([leosxie](https://github.com/leosxie))
+ [Fix] [dataZoom] Fix width and height not work in dataZoom labels. [#14388](https://github.com/apache/echarts/issues/14388) ([wf123537200](https://github.com/wf123537200))
+ [Fix] [animation] Fix animation between NaN value may have problem. [#730](https://github.com/ecomfe/zrender/issues/730) ([Nick22nd](https://github.com/Nick22nd))
+ [Fix] [visualMap] Use itemSymbol as default symbol type. Close [#5719](https://github.com/apache/echarts/issues/5719) [#14243](https://github.com/apache/echarts/issues/14243) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [loading] Fix text of loading is not in the front and covered by others. [#14191](https://github.com/apache/echarts/issues/14191) ([yufeng04](https://github.com/yufeng04))
+ [Fix] [custom] Fix series label on custom series not working properly. Close [#14092](https://github.com/apache/echarts/issues/14092) [#14254](https://github.com/apache/echarts/issues/14254) ([Nick22nd](https://github.com/Nick22nd))
+ [Fix] [map] Fix map labels won't update its position when `labelLayout` is used. [#14578](https://github.com/apache/echarts/issues/14578) ([pissang](https://github.com/pissang))
+ [Fix] [calendar] Fix day label drifting. Close [#11508](https://github.com/apache/echarts/issues/11508) [#13902](https://github.com/apache/echarts/issues/13902) ([Nick22nd](https://github.com/Nick22nd))
+ [Fix] [lines] Fix line animation may have extra points and being messed up. [#13638](https://github.com/apache/echarts/issues/13638) ([vially](https://github.com/vially))
+ [Fix] [type] Exporting more necessary types for generating declarations in the extensions [#14289](https://github.com/apache/echarts/issues/14289) ([pissang](https://github.com/pissang))
+ [Fix] [type] Add `LegendComponentOption.icon` property type [#14263](https://github.com/apache/echarts/issues/14263) ([thesiti92](https://github.com/thesiti92))
+ [Fix] Remove legacy usage of transform [#14357](https://github.com/apache/echarts/issues/14357) ([pissang](https://github.com/pissang))

## v5.0.2
<div class="time">2021-02-01</div>

+ [Fix] [dataZoom] Fix icon with `'image://'` won't display [#14056](https://github.com/apache/echarts/issues/14056) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [pie] [gauge] Fix `zero` value sector may be incorrectly drawn as a circle. [#699](https://github.com/ecomfe/zrender/issues/699) ([plainheart](https://github.com/plainheart))
+ [Fix] [pie] Fix hiding wrong labels in pie. [#14108](https://github.com/apache/echarts/issues/14108) ([Nick22nd](https://github.com/Nick22nd))
+ [Fix] [map] Add `geo` as dependency in map. [#14124](https://github.com/apache/echarts/issues/14124) ([pissang](https://github.com/pissang))
+ [Fix] [pie] Fix `labelLine` will not been hidden when `label` is switched from outside to inside [#14017](https://github.com/apache/echarts/issues/14017) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [toolbox] Fix `yAxisIndex: false` in toolbox dataZoom may have error. [#14175](https://github.com/apache/echarts/issues/14175) ([100pah](https://github.com/100pah))
+ [Fix] [toolbox] Fix image download may have error when not using default `pixelRatio`. [#706](https://github.com/ecomfe/zrender/issues/706) ([plainheart](https://github.com/plainheart))
+ [Fix] [toolbox] Use current `devicePixelRatio` by default for exporting crisp and clear images by default. [#14002](https://github.com/apache/echarts/issues/14002) ([plainheart](https://github.com/plainheart))
+ [Fix] [line] endLabel color support `'inherit'` [#14000](https://github.com/apache/echarts/issues/14000) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [svg] fix `opacity` may not work in SVG renderer. [#675](https://github.com/ecomfe/zrender/issues/675) ([plainheart](https://github.com/plainheart))
+ [Fix] [type] Optimize event param types [#14155](https://github.com/apache/echarts/issues/14155) ([pissang](https://github.com/pissang))
## v5.0.1
<div class="time">2021-01-11</div>

+ [Feature] New minimal import API. Improved exported option types. [#13890](https://github.com/apache/incubator-echarts/issues/13890) ([pissang](https://github.com/pissang))
+ [Fix] [tooltip] Fix tooltip of markPoint is wrong [#13992](https://github.com/apache/incubator-echarts/issues/13992) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [loading] Fix `showLoading` center align and `fontSize` not work. Add `fontFamily`, `fontWeight`, `fontStyle` [#13972](https://github.com/apache/incubator-echarts/issues/13972) ([yufeng04](https://github.com/yufeng04))
+ [Fix] [gauge] `pointer.offsetCenter` doesn't work without icon [#13966](https://github.com/apache/incubator-echarts/issues/13966) ([yufeng04](https://github.com/yufeng04))
+ [Fix] [dataset] Fix automatic legend from dataset is wrong. [#13930](https://github.com/apache/incubator-echarts/issues/13930) ([100pah](https://github.com/100pah))
+ [Fix] [handler] Fix tooltip can't be hidden when moving out of the viewport occasionally.  [#693](https://github.com/ecomfe/zrender/issues/693) ([pissang](https://github.com/pissang))
+ [Fix] [tooltip] Fix text color can't be changed in tooltip. [#13848](https://github.com/apache/incubator-echarts/issues/13848) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [tooltip] Fix borderColor can't be changed in tooltip. [#13771](https://github.com/apache/incubator-echarts/issues/13771) ([susiwen8](https://github.com/susiwen8))
+ [fix] [axis] Fix error when category axis max is greater than data length [#13733](https://github.com/apache/incubator-echarts/issues/13733) ([Ovilia](https://github.com/Ovilia))
+ [fix] [svg] Fix chart cannot be exported with SVG renderer in IE. [#13732](https://github.com/apache/incubator-echarts/issues/13732) ([plainheart](https://github.com/plainheart))
+ [Fix] [bar] Improvement and some fixes of bar race chart [#13994](https://github.com/apache/incubator-echarts/issues/13994) ([100pah](https://github.com/100pah))
+ [Fix] Fix unexpected global name usage, which may have error in other environments. [#13984](https://github.com/apache/incubator-echarts/issues/13984) ([pissang](https://github.com/pissang))


## v5.0.0
<div class="time">2020-12-03</div>

+ Migrate codebase to TypeScript:
    + The entire code base have been migrated to TypeScript.
    + Provide DTS for the upper TS based applications, where the TS version supported is down to 3.5.
    + See more details in [#13563](https://github.com/apache/incubator-echarts/pull/13563)
+ [Feature] States enhancement:
    + Support state transition animation, which brings better interaction effect when highlighting or downplaying some part of the chart.
    + Besides the state "emphasis" we already have, v5.0 provides two more configurable state: "select" and "blur" in all series. The option of them are the same as the existing "emphasis". "blur" is used the elements need to fade out when focusing some other elements. "select" is used when the element is selected by mouse/touch click or API triggering.
    + Support to blur other graphic elements when highlighting specified data through mouseover or hover linking. See examples [bar-label-rotation](https://echarts.apache.org/next/examples/en/editor.html?c=bar-label-rotation), [bar-polar-stack](https://echarts.apache.org/next/examples/en/editor.html?c=bar-polar-stack), [bar-stack](https://echarts.apache.org/next/examples/en/editor.html?c=bar-stack), [area-stack](https://echarts.apache.org/next/examples/en/editor.html?c=area-stack), [dataset-link](https://echarts.apache.org/next/examples/en/editor.html?c=dataset-link), [scatter-weight](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-weight), [tree-basic](https://echarts.apache.org/next/examples/en/editor.html?c=tree-basic).
    + Unify the previous different state configurations in series, like `highlightPolicy`, `focusNodeAdjacency`, `hoverOffset`, by the option `focus`, `blurScope` and `scale`. See examples [sankey-energy](https://echarts.apache.org/next/examples/en/editor.html?c=sankey-energy), [graph](https://echarts.apache.org/next/examples/en/editor.html?c=graph), [sunburst-drink](https://echarts.apache.org/next/examples/en/editor.html?c=sunburst-drink).
    + See more details in [#12925](https://github.com/apache/incubator-echarts/pull/12925) and [#12911](https://github.com/apache/incubator-echarts/pull/12911).
+ [Feature] Provide a more powerful label support:
    + Use some strategies to bring better displayed labels, including:
        + Smarter text color strategy to make labels more easy to be distinguished from different background.
        + Smarter label layout in pie chart, especially when there are too many labels or insufficient space. And related issue: [#6050](https://github.com/apache/incubator-echarts/issues/6050).
        + Provide more overflow configurations.
    + Provide option set `labelLayout` to enable more abilities for developers to tweak the layout of the labels after it's originally positioned by the chart itself. With the options in `labelLayout`, developers can:
        + Avoid labels overlap (see [scatter-label-align-right](https://echarts.apache.org/next/examples/en/editor.html?c=graph-label-overlap)),
        + Make special label alignment, and adjust label position, etc.. See the examples [pie-alignTo](https://echarts.apache.org/next/examples/en/editor.html?c=pie-alignTo), [pie-labelLine-adjust](https://echarts.apache.org/next/examples/en/editor.html?c=pie-labelLine-adjust), [pie-label-distanceToLabelLine](https://echarts.apache.org/next/examples/en/editor.html?c=doc-example/pie-label-distanceToLabelLine), [pie-label-bleedMargin](https://echarts.apache.org/next/examples/en/editor.html?c=doc-example/pie-label-bleedMargin).
        + Make label draggable.
    + Support `labelLine` for all series, which is very useful for guiding element to related labels when labels have to be far away from the elements. See examples [scatter-label-align-right](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-label-align-right), [scatter-label-align-top](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-label-align-top). Related issues: [#11534](https://github.com/apache/incubator-echarts/issues/11534), [#12971](https://github.com/apache/incubator-echarts/issues/12971).
    + Support `series.endLabel` in line series. Label can be displayed at the end of a line.
    + Support label text animation, that is, the transition animation on text when the number text changed. Can be enabled by `series.label.valueAnimation`, `series.endLabel.valueAnimation`. See more details in [#13246](https://github.com/apache/incubator-echarts/pull/13246) and [#13045](https://github.com/apache/incubator-echarts/pull/13045).
    + See other details in [#12911](https://github.com/apache/incubator-echarts/pull/12911).
+ [Feature] Support bar realtime sorting by `series.realtimeSort`. See examples [bar-race](https://echarts.apache.org/next/examples/en/editor.html?c=bar-race), and see more details in the original pull request [#12484](https://github.com/apache/incubator-echarts/pull/12484).
+ [Feature] Support data transform plug-in:
    + Data transform is a new set of configurations and APIs to enable data transformation based on `dataset` in declarative way. Built-in or third-party data transformer can be made as plug-ins to provide various transform algorithms. ECharts users can use those transformers in ECharts option.
    + See examples [data-transform-filter](https://echarts.apache.org/next/examples/en/editor.html?c=data-transform-filter), [data-transform-sort-bar](https://echarts.apache.org/next/examples/en/editor.html?c=data-transform-sort-bar), [data-transform-multiple-pie](https://echarts.apache.org/next/examples/en/editor.html?c=data-transform-multiple-pie), [doc-example/data-transform-multiple-sort-bar](https://echarts.apache.org/next/examples/en/editor.html?c=doc-example/data-transform-multiple-sort-bar), [boxplot-light-velocity](https://echarts.apache.org/next/examples/en/editor.html?c=boxplot-light-velocity), [bar-histogram](https://echarts.apache.org/next/examples/en/editor.html?c=bar-histogram), [scatter-clustering](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-clustering), [scatter-exponential-regression](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-exponential-regression), [scatter-linear-regression](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-linear-regression), [scatter-logarithmic-regression](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-logarithmic-regression), [scatter-polynomial-regression](https://echarts.apache.org/next/examples/en/editor.html?c=scatter-polynomial-regression). See more details in [#13065](https://github.com/apache/incubator-echarts/pull/13065), #13127](https://github.com/apache/incubator-echarts/pull/13127).
+ [Feature] Provide more smarter time axis label and tick arrangement:
    + See more details in [#12859](https://github.com/apache/incubator-echarts/pull/12859).
+ [Feature] Support `decal`:
    + Decal provides a new visual type that does not only augment aria scenarios but also enrich visual effects.
    + See more details in [#13304](https://github.com/apache/incubator-echarts/pull/13304).
+ [Feature] Support transition animation in custom series.
    + Transition animation can be auto performed by setting property `transition` for transform related properties, style properties and shape properties. See [custom-gauge](https://echarts.apache.org/next/examples/en/editor.html?c=custom-gauge).
    + Support morphing/combining/separating by setting property `morph` on elements definitions. See examples [custom-combine-separate-morph](https://echarts.apache.org/next/examples/en/editor.html?c=custom-combine-separate-morph), [custom-one-to-one-morph](https://echarts.apache.org/next/examples/en/editor.html?c=custom-one-to-one-morph), [custom-story-transition](https://echarts.apache.org/next/examples/en/editor.html?c=custom-story-transition), [custom-spiral-race](https://echarts.apache.org/next/examples/en/editor.html?c=custom-spiral-race).
    + Support customized transition animation by callback `during`. See the example [custom-spiral-race](https://echarts.apache.org/next/examples/en/editor.html?c=custom-spiral-race), and see more details in [#12775](https://github.com/apache/incubator-echarts/pull/12775).
    + See more details in [#12775](https://github.com/apache/incubator-echarts/pull/12775), [#13468](https://github.com/apache/incubator-echarts/pull/13468), [#13271](https://github.com/apache/incubator-echarts/pull/13271).
+ [Feature] Provide a more powerful gauge:
    + See examples [gauge-barometer](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-barometer), [gauge-clock](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-clock), [gauge-multi-title](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-multi-title), [gauge-progress](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-progress), [gauge-ring](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-ring), [gauge-grade](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-grade), [gauge-simple](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-simple), [gauge-temperature](https://echarts.apache.org/next/examples/en/editor.html?c=gauge-temperature).
    + See more details in [#13416](https://github.com/apache/incubator-echarts/pull/13416).
+ [Feature] The default theme and interaction have been greatly enhanced. Some new options are provided for the style and interaction configuration:
    + Tooltip style enhancement: [#12947](https://github.com/apache/incubator-echarts/pull/12947), [#13398](https://github.com/apache/incubator-echarts/pull/13398), [#13242](https://github.com/apache/incubator-echarts/pull/13242).
    + Provide configurable dash style: [#12961](https://github.com/apache/incubator-echarts/pull/12961).
    + Axis style enhancement: [#13046](https://github.com/apache/incubator-echarts/pull/13046).
    + DataZoom support both brush and drag: [#13025](https://github.com/apache/incubator-echarts/pull/13025).
    + Support `darkMode`. [12911](https://github.com/apache/incubator-echarts/pull/12911).
    + Enhance resize & dataZoom animation: [#12965](https://github.com/apache/incubator-echarts/pull/12965)
    + Change the closing direction of a single bar, [#12543](https://github.com/apache/incubator-echarts/issues/12543).
    + Enhance pie chart animation [#12553](https://github.com/apache/incubator-echarts/issues/12553).
    + Other component style enhancement: [#13008](https://github.com/apache/incubator-echarts/pull/13008), [#13013](https://github.com/apache/incubator-echarts/pull/13013).
+ [Feature] Make i18n registerable and change the product.
    + Build: [#13038](https://github.com/apache/incubator-echarts/pull/13038).
    + Japanese: [#13470](https://github.com/apache/incubator-echarts/pull/13470).
    + German: [#13315](https://github.com/apache/incubator-echarts/pull/13315).
    + French: [#13056](https://github.com/apache/incubator-echarts/pull/13056).
    + FI/ES/TH: [#13055](https://github.com/apache/incubator-echarts/pull/13055).
+ [Feature] Support rounded corner in pie and sunburst:
    + See [#13390](https://github.com/apache/incubator-echarts/pull/13390) and [#13378](https://github.com/apache/incubator-echarts/pull/13378).
+ [Feature] Make tooltip more configurable:
    + Support to add CSS class to tooltip. [#13383](https://github.com/apache/incubator-echarts/pull/13383).
    + Support to return DOM in tooltip formatter. [#13469](https://github.com/apache/incubator-echarts/pull/13469).
+ [Feature] Support to partially remove components or replace components (`replaceMerge`):
    + See details in [#12987](https://github.com/apache/incubator-echarts/pull/12987).
+ [Enhancement] Enhance performance in some scenarios:
    + Improve large line performance, and support data sampling in largest-triangle-three-buckets algorithm.
        + See more details in [#13314](https://github.com/apache/incubator-echarts/pull/13314), [#13317](https://github.com/apache/incubator-echarts/pull/13317), [#13337](https://github.com/apache/incubator-echarts/pull/13337).
        + Fix issues [#12249](https://github.com/apache/incubator-echarts/issues/12249), [#10200](https://github.com/apache/incubator-echarts/issues/10200), [#4556](https://github.com/apache/incubator-echarts/issues/4556).
    + Support dirty rect: [#13170](https://github.com/apache/incubator-echarts/pull/13170)
    + Others: [#13339](https://github.com/apache/incubator-echarts/pull/13339).
+ Other small features, enhancements and bug-fixes:
    + [Feature] Enhance `parseDate` [#13044](https://github.com/apache/incubator-echarts/pull/13044).
    + [Feature] Make line bolder when line is in emphasis state [#13013](https://github.com/apache/incubator-echarts/pull/13013).
    + [Feature] Sankey supports `lineStyle: {color: 'gradient'}`.
    + [Feature] `markPoint.data.type` and `markArea.data.type` support the value `'median'`.
    + [Feature] Support axis filter in specific cases. [#12832](https://github.com/apache/incubator-echarts/pull/12832).
    + [Enhancement] Pause `requestAnimationFrame` when rendering finished.
    + [Fix] Fix bmap first layout may be incorrect if container's layout is flex or grid. [#13432](https://github.com/apache/incubator-echarts/pull/13432).
    + [Fix] Hide tooltip when mouse leaves the chart [#13382](https://github.com/apache/incubator-echarts/pull/13382).
    + [Fix] Fix bmap personalization style does not work. [#13214](https://github.com/apache/incubator-echarts/pull/13214).
    + [Fix] Fix the bug of overriding title when click the stack button. [#13372](https://github.com/apache/incubator-echarts/pull/13372).
    + [Fix] Fix ECharts keeps rendering white blanks with large datasets on single canvas mode [#13283](https://github.com/apache/incubator-echarts/pull/13283).
    + [Fix] Make `contentToOption` totally optional. [#13139](https://github.com/apache/incubator-echarts/pull/13139).
    + [Fix] Keep axis tooltip open on refresh. [#13100](https://github.com/apache/incubator-echarts/pull/13100).
    + [Fix] Skip rendering for data out of axis content in heatmap. [#12991](https://github.com/apache/incubator-echarts/pull/12991).
+ [Break] Breaking changes against v4.9:
    + The default theme colors has been changed. If intending to use the theme of v4.9-, please set `option.color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];`.
    + Remove built-in map geoJSON. [#13565](https://github.com/apache/incubator-echarts/pull/13565).
    + Drop the support of the legacy IE8. The previous VML renderer (necessary in IE8) will not be updated to work in v5.0.
    + The exported modules from `'echarts/lib/export.js'` is not mounted to `'echarts/lib/echarts.js'` by default. If the upper application previously used `import * as echarts from 'echarts/lib/echarts'` and used any of the exported modules in `'echarts/lib/export.js'`, please change the import code to `import echarts from 'echarts/index.blank'`, where the modules from `'echarts/lib/export.js'` are mounted by default.
    + If the upper application previously imported `src/echarts.js`, `src/chart/*.js` and `src/component/*.js`, it can not work any more because all of the files in `/src` folder are migrated to `*.ts`.
    + The priority of the visuals between `visualMap` and `itemStyle`|`lineStyle`|`areaStyle` are reversed. That is, previously, the visuals (i.e., color, symbol, symbolSize, ...) that generated by the component `visualMap` has highest priority, which will overwrite the same visuals specified in `itemStyle`|`lineStyle`|`areaStyle`. That brought trouble to specify specific style to some certain data items. Since v5.0, the visuals specified in `itemStyle`|`lineStyle`|`areaStyle` has highest priority.
    + The behavior of `rich.?.padding` are changed. Previously `rich.?.padding: [11, 22, 33, 44]` indicates that padding-top is `33` and padding-bottom is `11`, which is a buggy implementation because it is different from what CSS did. Since v5.0, we fix it: `rich.?.padding: [11, 22, 33, 44]` indicates padding-top is `11` and padding-bottom is `33`.
    + `aria` is not included in `dist/echarts.simple(.min).js` since v5.0. But it is still included in `dist/echarts.common(.min).js` and `dist/echarts(.min).js`.
+ [Deprecated] Deprecated usages since v5.0:
    + Transform related props of a graphic element are changed:
        + Changes:
            + `position: [number, number]` are changed to `x: number`/`y: number`.
            + `scale: [number, number]` are changed to `scaleX: number`/`scaleY: number`.
            + `origin: [number, number]` are changed to `originX: number`/`originY: number`.
        + The `position`, `scale` and `origin` are still supported but deprecated.
        + It effects these places:
            + In the `graphic` components: the declarations of each element.
            + In `custom series`: the declarations of each element in the return of `renderItem`.
            + Directly use zrender graphic elements.
    + Text related props on graphic elements are changed:
        + Changes:
            + The declaration of attached text (or say, rect text) are changed.
                + Prop `style.text` are deprecated in elements except `Text`. Instead, Prop set `textContent` and `textConfig` are provided to support more powerful capabilities.
                + These related props at the left part below are deprecated. Use the right part below instead.
                    + textPosition => textConfig.position
                    + textOffset => textConfig.offset
                    + textRotation => textConfig.rotation
                    + textDistance => textConfig.distance
            + The props at the left part below are deprecated in `style` and `style.rich.?`. Use the props at the right part below instead.
                + textFill => fill
                + textStroke => stroke
                + textFont => font
                + textStrokeWidth => lineWidth
                + textAlign => align
                + textVerticalAlign => verticalAlign);
                + textLineHeight =>
                + textWidth => width
                + textHeight => hight
                + textBackgroundColor => backgroundColor
                + textPadding => padding
                + textBorderColor => borderColor
                + textBorderWidth => borderWidth
                + textBorderRadius => borderRadius
                + textBoxShadowColor => shadowColor
                + textBoxShadowBlur => shadowBlur
                + textBoxShadowOffsetX => shadowOffsetX
                + textBoxShadowOffsetY => shadowOffsetY
            + Note: these props are not changed:
                + textShadowColor
                + textShadowBlur
                + textShadowOffsetX
                + textShadowOffsetY
        + It effects these places:
            + In the `graphic` components: the declarations of each element. [compat, but not accurately the same in some complicated cases.]
            + In `custom series`: the declarations of each element in the return of `renderItem`. [compat, but not accurately the same in some complicated cases].
            + Directly use zrender API to create graphic elements. [No compat, breaking change].
    + API on chart instance:
        + `chart.one(...)` is deprecated.
    + `label`:
        + In props `color`, `textBorderColor`, `backgroundColor` and `borderColor`, the value `'auto'` is deprecated. Use the value `'inherit'` instead.
    + `hoverAnimation`:
        + option `series.hoverAnimation` is deprecated. Use `series.emphasis.scale` instead.
    + `line series`:
        + option `series.clipOverflow` is deprecated. Use `series.clip` instead.
    + `custom series`:
        + In `renderItem`, the `api.style(...)` and `api.styleEmphasis(...)` are deprecated. Because it is not really necessary and hard to ensure backward compatibility. Users can fetch system designated visual by `api.visual(...)`.
    + `sunburst series`:
        + Action type `highlight` is deprecated. Use `sunburstHighlight` instead.
        + Action type `downplay` is deprecated. Use `sunburstUnhighlight` instead.
        + option `series.downplay` is deprecated. Use `series.blur` instead.
        + option `series.highlightPolicy` is deprecated. Use `series.emphasis.focus` instead.
    + `pie series`:
        + The action type at the left part below are deprecated. Use the right part instead:
            + `pieToggleSelect` => `toggleSelect`
            + `pieSelect` => `select`
            + `pieUnSelect` => `unselect`
        + The event type at the left part below are deprecated. Use the right part instead:
            + `pieselectchanged` => `selectchanged`
            + `pieselected` => `selected`
            + `pieunselected` => `unselected`
        + option `series.label.margin` is deprecated. Use `series.label.edgeDistance` instead.
        + option `series.clockWise` is deprecated. Use `series.clockwise` instead.
        + option `series.hoverOffset` is deprecated. Use `series.emphasis.scaleSize` instead.
    + `map series`:
        + The action type at the left part below are deprecated. Use the right part instead:
            + `mapToggleSelect` => `toggleSelect`
            + `mapSelect` => `select`
            + `mapUnSelect` => `unselect`
        + The event type at the left part below are deprecated. Use the right part instead:
            + `mapselectchanged` => `selectchanged`
            + `mapselected` => `selected`
            + `mapunselected` => `unselected`
        + option `series.mapType` is deprecated. Use `series.map` instead.
        + option `series.mapLocation` is deprecated.
    + `graph series`:
        + option `series.focusNodeAdjacency` is deprecated. Use `series.emphasis: { focus: 'adjacency'}` instead.
    + `gauge series`:
        + option `series.clockWise` is deprecated. Use `series.clockwise` instead.
        + option `series.hoverOffset` is deprecated. Use `series.emphasis.scaleSize` instead.
    + `dataZoom component`:
        + option `dataZoom.handleIcon` need prefix `path://` if using SVGPath.
    + `radar`:
        + option `radar.name` is deprecated. Use `radar.axisName` instead.
        + option `radar.nameGap` is deprecated. Use `radar.axisNameGap` instead.
    + Parse and format:
        + `echarts.format.formatTime` is deprecated. Use `echarts.time.format` instead.
        + `echarts.number.parseDate` is deprecated. Use `echarts.time.parse` instead.
        + `echarts.format.getTextRect` is deprecated.



## v4.9.0
<div class="time">2020-08-06</div>

+ [Feature] [graph] Support multiple edges to link nodes in graph. [#12590](https://github.com/apache/incubator-echarts/pull/12590) ([wf123537200](https://github.com/wf123537200))

+ [Feature] [funnel] Add `orient` option in funnel. Support horizontal layout. [#12754](https://github.com/apache/incubator-echarts/pull/12754) ([regrex](https://github.com/regrex))

+ [Enhancement] [tooltip] Add text shadow options. [#12664](https://github.com/apache/incubator-echarts/pull/12664) ([Ovilia](https://github.com/Ovilia))

+ [Enhancement] [toolbox] Add `brushStyle` option to configuration style of brush rect in the dataZoom feature. [#12550](https://github.com/apache/incubator-echarts/pull/12550) ([zhiyuc123](https://github.com/zhiyuc123))

+ [Fix] [themeRiver] Optimize data process in themeRiver. [#12022](https://github.com/apache/incubator-echarts/pull/12022) ([Zaynex](https://github.com/Zaynex))

+ [Fix] [toolbox] Fix pie series render incorrectly after editing its data in the dataView feature. [#12561](https://github.com/apache/incubator-echarts/pull/12561) ([plainheart](https://github.com/plainheart))

+ [Fix] [toolbox] Fix dataView shows NaN when using dataset. [#11849](https://github.com/apache/incubator-echarts/pull/11849) ([susiwen8](https://github.com/susiwen8))

+ [Fix] [toolbox] Fix saveAsImage may have error in some special environments. [#12643](https://github.com/apache/incubator-echarts/pull/12643) ([lzr900515](https://github.com/lzr900515))

+ [Fix] [lines] Fix lines disappear if setOption again without data. [#12850](https://github.com/apache/incubator-echarts/pull/12850) ([plainheart](https://github.com/plainheart))

+ [Fix] [sunburst] [treemap] Fix label formatter in `levels` not work bug. [#12742](https://github.com/apache/incubator-echarts/pull/12742) ([Ovilia](https://github.com/Ovilia))

+ [Fix] [bmap] Fix bmap event `moveend` is always triggered when dragging or zoomend. [#12558](https://github.com/apache/incubator-echarts/pull/12558) ([plainheart](https://github.com/plainheart))

+ [Fix] [grid] Fix wrong gap calculation when `containLabel`is set in grid. [#12259](https://github.com/apache/incubator-echarts/issues/12259) ([Ling310](https://github.com/Ling310))

+ [Fix] [tooltip] Fix newline in tooltip of radar and map series when using `ricText` render mode. [#12664](https://github.com/apache/incubator-echarts/pull/12664) ([Ovilia](https://github.com/Ovilia))

+ [Fix] [tooltip] Update tooltip position proportionally when chart resized. [#12834](https://github.com/apache/incubator-echarts/pull/12834) ([liulinboyi](https://github.com/liulinboyi))

+ [Fix] [tooltip] Fix tooltip dispose in `richText` render mode. [#12608](https://github.com/apache/incubator-echarts/pull/12608) ([plainheart](https://github.com/plainheart))

+ [Fix] [tree] Fix image symbol not display on first render. [#12367](https://github.com/apache/incubator-echarts/pull/12367) ([plainheart](https://github.com/plainheart))

+ [Fix] [geo] Fix label formatter not work bug. [#12762](https://github.com/apache/incubator-echarts/pull/12762) ([plainheart](https://github.com/plainheart))

+ [Fix] [bar] Fix error when switching `showBackground` from `false` to `true`. [#13085](https://github.com/apache/incubator-echarts/pull/13085) ([easonyq](https://github.com/easonyq))

+ [Fix] [markArea] Fix label is not hidden when markArea is outside the grid. [#12669](https://github.com/apache/incubator-echarts/pull/12669) ([Ovilia](https://github.com/Ovilia))

+ [Fix] [markLine] [markPoint] Fix `symbolRotate` not work bug. [#12737](https://github.com/apache/incubator-echarts/pull/12737) [#12392](https://github.com/apache/incubator-echarts/pull/12392) ([plainheart](https://github.com/plainheart))

+ [Fix] [polar] Fix bar layout on polar with nagive axis. [#12418](https://github.com/apache/incubator-echarts/pull/12418) ([gracelia](https://github.com/gracelia))



## v4.8.0
<div class="time">2020-05-25</div>

+ [Feature] [toolbox] Support download SVG file in toolbox when using SVG render mode. [#12144](https://github.com/apache/incubator-echarts/pull/12144) ([Ovilia](https://github.com/Ovilia))

+ [Feature] Add more parameters in the loading effect. [#12414](https://github.com/apache/incubator-echarts/pull/12414) ([yufeng04](https://github.com/yufeng04))

+ [Feature] Support callback for `symbolRotate`. [#12348](https://github.com/apache/incubator-echarts/pull/12348) [#12354](https://github.com/apache/incubator-echarts/pull/12354) ([plainheart](https://github.com/plainheart))

+ [Feature] [axis] Callbacks of `min`, `max` can return `null` to use the default value now. [#11829](https://github.com/apache/incubator-echarts/pull/12215) ([susiwen8](https://github.com/susiwen8)), [#12371](https://github.com/apache/incubator-echarts/pull/12371) ([100pah](https://github.com/100pah))

+ [Feature] [geo] Add `nameProperty` to specify the name field of GeoJSON source. [#12156](https://github.com/apache/incubator-echarts/pull/12156)  ([alex2wong](https://github.com/alex2wong))

+ [Fix] [sankey] Fix tooltip not displayed on edges. [#12011](https://github.com/apache/incubator-echarts/pull/12011) ([susiwen8](https://github.com/susiwen8))

+ [Fix] [sankey] Fix node may disappear when link value is 0. [#12191](https://github.com/apache/incubator-echarts/pull/12191) ([susiwen8](https://github.com/susiwen8)), [#12472](https://github.com/apache/incubator-echarts/pull/12472) ([100pah](https://github.com/100pah))

+ [Fix] [treemap] Add missing params in the foramtter callback. [#11854](https://github.com/apache/incubator-echarts/pull/11854) ([susiwen8](https://github.com/susiwen8), [100pah](https://github.com/100pah))

+ [Fix] [calendar] Fix calendar chart layout when user is in a timezone with DST. [#12172](https://github.com/apache/incubator-echarts/pull/12172) ([mikeyshing88](https://github.com/mikeyshing88)), [#12466](https://github.com/apache/incubator-echarts/pull/12466) ([100pah](https://github.com/100pah))

+ [Fix] [line] Fix safari may crash because of memory explosion when using gradient, shadow with large wide-range animation. [#12410](https://github.com/apache/incubator-echarts/pull/12410) ([pissang](https://github.com/pissang))

+ [Fix] [line] Fix clip bug in chromium when chart size over 18000px. [#12393](https://github.com/apache/incubator-echarts/pull/12393) ([zhanfang](https://github.com/zhanfang))

+ [Fix] [pie] Fix label may disappear when animation is disabled. [#12243](https://github.com/apache/incubator-echarts/issues/12243) ([Ovilia](https://github.com/Ovilia))

+ [Fix] [title] Fix potential security risk when `'_blank'`  target for link. [#12380](https://github.com/apache/incubator-echarts/issues/12380) ([susiwen8](https://github.com/susiwen8))

+ [Fix] [geo] Fix animation not work when change `center` or `zoom` with `setOption`. [#12340](https://github.com/apache/incubator-echarts/pull/12340) ([Ovilia](https://github.com/Ovilia))

+ [Fix] [heatmap] Remove the 1px gap. [#12342](https://github.com/apache/incubator-echarts/pull/12342) ([SnailSword](https://github.com/SnailSword))

+ [Fix] [sunburst] Fix default downplay style not work bug. [#12264](https://github.com/apache/incubator-echarts/pull/12264) ([pissang](https://github.com/pissang))

+ [Fix] [visualMap] `minOpen` and `maxOpen` is not counted into pieces number now. [#12147](https://github.com/apache/incubator-echarts/pull/12147) ([susiwen8](https://github.com/susiwen8))

+ [Fix] [bmap] [extension] Fix layer may not been cleared when using progressive rendering. ([pissang](https://github.com/pissang))

+ [Fix] [bmap] [extension] Fix unexpected refresh bug.[#12411](https://github.com/apache/incubator-echarts/pull/12411) ([pissang](https://github.com/pissang))


## v4.7.0
<div class="time">2020-03-18</div>

+ [Feature] Provide new layouts for markLine labels. [#11843](https://github.com/apache/incubator-echarts/pull/11843) ([Ovilia](https://github.com/Ovilia))

+ [Feature] Support background option for bar series. [#11951](https://github.com/apache/incubator-echarts/pull/11951) ([Ovilia](https://github.com/Ovilia))

+ [Feature] Support appending tooltip DOM to HTML body. [#8049](https://github.com/apache/incubator-echarts/pull/8049) [#12024](https://github.com/apache/incubator-echarts/pull/12024) ([xinpureZhu](https://github.com/xinpureZhu), [100pah](https://github.com/100pah))

+ [Feature] Add draggable support to group elements on graphic component. [#11959](https://github.com/apache/incubator-echarts/pull/11959) ([pissang](https://github.com/pissang))

+ [Feature] Add polyline edge layout for the tree chart. [#11808](https://github.com/apache/incubator-echarts/pull/11808) ([deqingli](https://github.com/deqingli))

+ [Enhance] Enhance continuity line trail for effect line. [#11893](https://github.com/apache/incubator-echarts/pull/11893) ([alex2wong](https://github.com/alex2wong))

+ [Fix] Fix markPoint position in stacked line/bar series. [#11965](https://github.com/apache/incubator-echarts/pull/11965) ([yikuangli](https://github.com/yikuangli))

+ [Fix] Radar chart data may appear outside of the radar component. [#11841](https://github.com/apache/incubator-echarts/pull/11841) ([susiwen8](https://github.com/susiwen8))

+ [Fix] Fix treemap highlight action not triggered. [#12050](https://github.com/apache/incubator-echarts/pull/12050) ([100pah](https://github.com/100pah))

+ [Fix] Fix geo cannot be restored. [#12035](https://github.com/apache/incubator-echarts/pull/12035) ([100pah](https://github.com/100pah))

+ [Fix] Fix Array.prototype.slice is not defined on typed array [#11956](https://github.com/apache/incubator-echarts/pull/11956) ([pissang](https://github.com/pissang))

+ [Fix] Fix candlestick throw error when some series are filtered by legend. [#12027](https://github.com/apache/incubator-echarts/pull/12027) ([100pah](https://github.com/100pah))

+ [Fix] Fix brush component not follow the pan and zoom of coordinate system. [#11998](https://github.com/apache/incubator-echarts/pull/11998) ([100pah](https://github.com/100pah))

+ [Fix] Fix action `'showTip'` dispatched in radar chart. [#11985](https://github.com/apache/incubator-echarts/pull/11985) ([yufeng04](https://github.com/yufeng04))

+ [Fix] Fix splitArea not work in singleAxis. [#11890](https://github.com/apache/incubator-echarts/pull/11890) ([newraina](https://github.com/newraina))

+ [Fix] Fix legend pagination may disappear. [#11952](https://github.com/apache/incubator-echarts/pull/11952) ([yufeng04](https://github.com/yufeng04))

+ [Fix] Fix emphasis lineStyle options do not work in sankey chart. [#11729](https://github.com/apache/incubator-echarts/pull/11729) ([deqingli](https://github.com/deqingli))

+ [Fix] Fix tooltip formatter has no value in sankey chart. [#11752](https://github.com/apache/incubator-echarts/pull/11752) ([deqingli](https://github.com/deqingli))

## v4.6.0
<div class="time">2019-12-29</div>

+ [Feature] Optimize label layout on pie. Add new `alignTo` option for aligning the labels. Check more detail in PR [#11715](https://github.com/apache/incubator-echarts/pull/11715) ([Ovilia](https://github.com/Ovilia))

+ [Feature] Add `minorTick`, `minorSplitLine` on axis. Check more detail in the PR [#11705](https://github.com/apache/incubator-echarts/pull/11705) ([pissang](https://github.com/pissang))

+ [Feature] Added more themes. [#11566](https://github.com/apache/incubator-echarts/pull/11566) ([WebCodePro719](https://github.com/WebCodePro719))

+ [Enhance] Chart will keep the dragging status when mouse is out of the area. Which will provide a much better dragging experience. [#11710](https://github.com/apache/incubator-echarts/pull/11710) ([100pah](https://github.com/100pah))

+ [Enhance] Legend will display colors from `visualMap` component in `pie`/`funnel`/`radar` series. [#11737](https://github.com/apache/incubator-echarts/pull/11737) ([pissang](https://github.com/pissang))

+ [Enhance] Enhance dataset default encode guess strategy. [#11746](https://github.com/apache/incubator-echarts/pull/11746) ([100pah](https://github.com/100pah))

+ [Enhance] Stack icon on toolbox now is a toggle button. Removed tiled icon. [#11367](https://github.com/apache/incubator-echarts/pull/11367) ([alex2wong](https://github.com/alex2wong))

+ [Enhance] Add a delay to avoid flashing when hovering on nodes and edges of `graph` and `sankey` series. [11572](https://github.com/apache/incubator-echarts/pull/11572) ([deqingli](https://github.com/apache/incubator-echarts/pull/11457))

+ [Fix] Fix bar width calculation with `barMaxWidth` constraint and negative `barGap`. [#11713](https://github.com/apache/incubator-echarts/pull/11713) ([pissang](https://github.com/pissang))

+ [Fix] Fix seams in `heatmap` series. Which may cause unexpected gray lines. [#11689](https://github.com/apache/incubator-echarts/pull/11689) ([pissang](https://github.com/pissang))

+ [Fix] Fix unexpected highlight state after inverse selection in `legend`. [#11547](https://github.com/apache/incubator-echarts/pull/11547) ([SnailSword](https://github.com/SnailSword))

+ [Fix] Fix tooltip may highlight the point out of chart in `line` series. [#11548](https://github.com/apache/incubator-echarts/pull/11548) ([SnailSword](https://github.com/SnailSword))

+ [Fix] Fix label may not disappear on SVG renderer. [ecomfe/zrender#535](https://github.com/ecomfe/zrender/pull/535) ([Ovilia](https://github.com/Ovilia))

+ [Fix] Not display bar on polar when value is `0`. [#11452](https://github.com/apache/incubator-echarts/issues/11452) ([foolzhang](https://github.com/foolzhang))

+ [Fix] Fix logic issue in global `textStyle`. [#11653](https://github.com/apache/incubator-echarts/pull/11653) ([code4fan](https://github.com/code4fan))

+ [Fix] Fix label color of `axisPointer` in dark theme. [#11656](https://github.com/apache/incubator-echarts/pull/11656) ([asiOvOtus](https://github.com/asiOvOtus))

+ [Fix] Fix `markPoint` out of the chart may still display in the wrong position. [#11484](https://github.com/apache/incubator-echarts/pull/11484) ([susiwen8](https://github.com/susiwen8))

+ [Fix] Fix tooltip shows multiple values around both sides of the pointer. [#11648](https://github.com/apache/incubator-echarts/pull/11648) ([100pah](https://github.com/100pah))

+ [Fix] Fix `label.formatter` of leaves in `tree` series not work. [#11556](https://github.com/apache/incubator-echarts/pull/11556) ([deqingli](https://github.com/apache/incubator-echarts/pull/11457))

+ [Fix] Fix overflow symbol not display when `clip` is set `false` in `line` series. [#11552](https://github.com/apache/incubator-echarts/pull/11552) ([SnailSword](https://github.com/SnailSword))

## v4.5.0
<div class="time">2019-11-18</div>

+ [Feature] Add `roundCap` option for round corners on `bar` series width `polar` coordinate system. [#11393](https://github.com/apache/incubator-echarts/pull/11393) ([Ovilia](https://github.com/Ovilia))

+ [Feature] Add event `brushEnd` for `brush` component [#11285](https://github.com/apache/incubator-echarts/pull/11285)([cuijian-dexter](https://github.com/cuijian-dexter))

+ [Feature] Add `friction` option in force layout of `graph`. [#11276](https://github.com/apache/incubator-echarts/pull/11276) ([pissang](https://github.com/pissang))

+ [Feature] Add `ignoreForceLayout` option in the `graph` links. [#11445](https://github.com/apache/incubator-echarts/pull/11445) ([TYzzt](https://github.com/TYzzt))

+ [Feature] Add `axisType` in the indicator of `radar` series. [#11324](https://github.com/apache/incubator-echarts/pull/11324)([zifix](https://github.com/zifix))


+ [Feature] Add `clip` option in `candllestick` series. [#11529](https://github.com/apache/incubator-echarts/pull/11529) ([pissang](https://github.com/pissang))

+ [Fix] Fix lots of label positioning issues in SVG renderer. [ecomfe/zrender#519](https://github.com/ecomfe/zrender/pull/519) ([100pah](https://github.com/100pah))

+ [Fix] Fix interval issues related to category axis tick. Like `areaStyle.color` is incorrect in [#10948](https://github.com/apache/incubator-echarts/issues/10948), `xAxis.axisTick.interval` is calculated incorrectly in [#11176](https://github.com/apache/incubator-echarts/pull/11176) . [#11186](https://github.com/apache/incubator-echarts/pull/11186) ([foolzhang](https://github.com/foolzhang))

+ [Fix] Fix `bar` series can't display on the `log` axis. [#11472](https://github.com/apache/incubator-echarts/pull/11472)([SnailSword](https://github.com/SnailSword))

+ [Fix] Fix tooltip may be covered by the canvas when `-webkit-overflow-scrolling: touch` on iOS 13. [ecomfe/zrender#522](https://github.com/ecomfe/zrender/pull/522) ([100pah](https://github.com/100pah))

+ [Fix] Fix some of labels on category axis may disappear forever after chart resized. [#11536](https://github.com/apache/incubator-echarts/pull/11536) ([100pah](https://github.com/100pah))

+ [Fix] Fix brush drag gets stuck when the mouse leaves the chart area. [#11516](https://github.com/apache/incubator-echarts/pull/11516) ([100pah](https://github.com/100pah))

+ [Fix] Fix image symbol may disappear forever after legend toggled. [#11515](https://github.com/apache/incubator-echarts/pull/11515) ([yufeng04](https://github.com/yufeng04))

+ [Fix] Fix changing from `'scroll'` type to `'plain'` type not work bug in legend. [#11504](https://github.com/apache/incubator-echarts/pull/11504) ([yufeng04](https://github.com/yufeng04))

+ [Fix] Optimize layout and bar width of `bar` series on `time` axis and `value` axis. Make the `barMaxWidth` has higher priority than `barWidth`. Add `barMinWidth` for `bar` series on `time` axis and `value` axis. [#11479](https://github.com/apache/incubator-echarts/pull/11479) ([Ovilia](https://github.com/Ovilia), [100pah](https://github.com/100pah))

+ [Fix] Fix title of toolbox icon may be cut by the container. [#11456](https://github.com/apache/incubator-echarts/pull/11456) ([Ovilia](https://github.com/Ovilia))

+ [Fix] Fix precision issue in the ticks calculating. [#11488](https://github.com/apache/incubator-echarts/pull/11488) ([Ovilia](https://github.com/Ovilia))

+ [Fix] Fix `rotate` property of label not work in `tree` series. [#11457](https://github.com/apache/incubator-echarts/pull/11457) ([deqingli](https://github.com/apache/incubator-echarts/pull/11457))

+ [Fix] Fix edge won't disappear after collapsed if the `id` is duplicated in `tree` series. [#11447](https://github.com/apache/incubator-echarts/pull/11447) ([deqingli](https://github.com/apache/incubator-echarts/pull/11457))

+ [Fix] Fix data disappear when updating with `dataset` in `gauge` series. [#11373](https://github.com/apache/incubator-echarts/pull/11373) ([Ovilia](https://github.com/Ovilia))

+ [Fix] Fix gradient on bar leaked to label in SVG Renderer. ([Ovilia](https://github.com/Ovilia))


## v4.4.0

<div class="time">2019-10-15</div>

+ [Feature] Add option `clip` for `line`, `bar`, `lines`, `scatter` and `custom series`,
which prevents the shapes overflow the area of the coordinate system. And support setting
`filterMode` on `toolbox.dataZoom`. Fix #9200, #10224, #10748, #11086.

+ [Feature] Support "select all" and "reverse select" buttons in `legend`. See `legend.selector` for details.

+ [Feature] Provide `echarts.graphic.registerShape` and `echarts.graphic.getShapeClass`.
The registered shape classes can be used in `custom series` and `graphic component`.

+ [Feature] Support show border style on `legend` item. Support setting `itemStyle` on `legend`. Fix #7340.

+ [Feature] Support expansion animation for data update, support `pie-series.animationTypeUpdate`. Fix #11029.

+ [Feature] Support setting `rippleEffect.color` in `effectScatter`.

+ [Feature] Support using BaiduMap API version 3.0 in bmap by option `bmap.mapStyleV2`.

+ [Fix] Fix that the stacked bar exceed zoom limit.
Fix #7534, #7672, #7732, #7872, #8069, #8520, #8935, #8955, #9200, #9237, #9847, #10359, #10518, #10972.

+ [Fix] Fix that sometimes when using "toolbox dataZoom" it can not return to the original state. Fix #11055.

+ [Fix] Fix the texture pattern rendering in `map` and `geo`. And Fix that the the shadow of them are different between canvas renderer and SVG renderer. Fix #11055, #5429.

+ [Fix] Fix that data does not rendered after a `NaN` value in candlestick. Fix #11101.

+ [Fix] Fix `geo.label.formatter` does not work. Fix #8489.

+ [Fix] Fix the hover style incorrect in `custom series`. Fix #11103.

+ [Fix] Fix that tree root node disappears after roaming. Fix #10291, #10986, #10164, #9580, #9256, #9216.

+ [Fix] Fix that SVG renderer should render normally despite hover layer set. Fix #11054.

+ [Fix] Add dispose checking for chart instance.



## v4.3.0

<div class="time">2019-09-16</div>

+ [Feature] Sankey diagram enhancement:
Add left/right node align, right in sankey diagram.
Support user to specify the depth of the node.
Enhance sankey node tooltip formatter.
Add depth layout info for each node.

+ [Feature] Support callback in `series.symbol`. Contributed by PR #9664 originally.

+ [Feature] Enhance Pie chart:
Support `minShowLabelAngle`. Contributed by PR #8997 originally.
Support label rotate in pie chart. Fix #10045.

+ [Feature] Support `backgroundColor` for connected charts in toolbox. `toolbox.feature.saveAsImage.connectedBackgroundColor` can be used to set the background color. Fix #10099.

+ [Feature] Enhance toolbox:
Enable to set text style of toolbox.
Support tooltip for toolbox. Fix #10202.

+ [Feature] Enhance dataZoom:
Normalize illegal range setting and get accurate `start`/`end`/`startValue`/`endValue` in `'dataZoom'` event.

+ [Feature] Add `dimensionNames` and `encode` info to callback parameters of formatters. Fix #10248 and Close #10250.

+ [Feature] Funnel enhancement:
`series.label.position` support to set `rightTop`, `rightBottom`, `leftTop`, `leftBottom`. And fix style in funnel text position.

+ [Fix] Support mouse event in iOS when css transform used. Fix #9434, #8326, #5009, #5921.

+ [Fix] Use a clearer warning message when initing dom without size. Fix #10478.

+ [Fix] Fix that the rgba opacity does not work in SVG renderer. Fix #9014

+ [Fix] Enhance funnel chart label display policy PR #8759

+ [Fix] Fix the highlight/downplay of pie graphic.

+ [Fix] Fix the mouse pointer in force graph. Fix #7764, contributed by PR #9134.

+ [Fix] Fix that `symbol` and `symbolSize` and `opacity` does not work in `series[i]-graph.categories[i]`. Fix #8009 and #5969, contributed by PR #9171.

+ [Fix] Fix that `axisLine.show` does not work in the gauge. Fix #9194, contributed by PR #9195.

+ [Fix] Fix a display error when the first data item is '-' in radar. Fix 8962.

+ [Fix] Fix polygon rendering bug when the first value is `NaN`. Fix #8962, contributed by PR #9162.

+ [Fix] Fix text truncate bug in treemap when using SVG renderer.

+ [Fix] Fix that `label.rotate` does not work in graph. Fix #9182, contributed by PR #9210.

+ [Fix] Fix the rich content hiding bug and confine bug in tooltip. Fix ecomfe/echarts-for-weixin#360, ecomfe/echarts-for-weixin#347.

+ [Fix] Fix that callback function params.color is incorrect in sunburst area. Fix #8952, contributed by PR #9238.

+ [Fix] Fix that when `axisLabel.interval` of a category axis is set as `0`, all labels are displayed regardless of overlap. Fix #9589.

+ [Fix] Fix sub-pixel in markLine. Move subPixelOptimize to zrender. Fix #9598.

+ [Fix] Fix that when doing clear on click handler error is thrown. Fix #9649.

+ [Fix] Fix that `false` value in data items effect subsequent items in `visualMap`. Fix #8799.

+ [Fix] Enhance `hoverStyle` and `highlight`/`downplay` API. Support keep highlighted when changing style (e.g., `setOption` or `hoverLink`). Fix the highlight conflict.

+ [Fix] Fix radar line disappear on hover when there is empty value in data.

+ [Fix] Fix that geo map panning not working on Edge browser. Fix #9479.

+ [Fix] Fix map label bugs:
Fix map rich label missing when missing data.
Fix map label miss to enter formatter when missing data.
Fix #9682.

+ [Fix] Enable `triggerEvent` for label of `angleAxis`. Fix #9765.

+ [Fix] Fix that the hover style bugs of graph:
Fix that the hover style is disabled by `focusNodeAdjacency` in graph.
Fix that the line label can not be returned to its original opacity after `"focusNodeAdjacency"`.

+ [Fix] Lift the axis line arrow over splitLine and tick.

+ [Fix] Fix that the scrollable legend pager does not work when the target index is illegal. Fix #7568.

+ [Fix] Exclude padding from tooltip position, since it's included in clientWidth. Contributed by PR #9750.

+ [Fix] Fix `barWidth` calculation when stack on multiple polars. Fix #9626.

+ [Fix] Loop to find the first non-NaN angle for clipPath in pie.

+ [Fix] Fix line width in singleAxis. Fix #9965.

+ [Fix] Fix the label bounding rect calculation error when `rich` used (e.g., containLabel: true while axisLabel has rich).

+ [Fix] Part of emphasis in sunburst do not work. Fix #9563, constributed by PR #9993.

+ [Fix] Add `seriesId` in `pieselectchanged`. Fix #9830.

+ [Fix] Fix that axis name align does not work. Fix #9901.

+ [Fix] Fix taht the strange label position when the pie chart series data value is `null`. Fix #10088.

+ [Fix] Do not create an anchor element if you don't need to in `SaveAsImage`. Contributed by PR #10132.

+ [Fix] Fix that `axisLabel` dost not display correctly in radar. Fix #9282, contributed by PR #10036.

+ [Fix] Fix that bar chart is abnormal when `filterMode` of `dataZoom` is 'empty'. Fix #9882.

+ [Fix] Fix `series.label.formatter` callback bug. Fix #10248, contributed by PR #10250.

+ [Fix] Fix that the last axis labels are duplicated. Fix #10304.

+ [Fix] Fix that setting `emphasis.lineStyle.type` as `solid` dose not work. Fix #9704, close #10129.

+ [Fix] Fix that if some negetive numbers or strings existing in the dimensions array, the corresponding line will not show. Fix #10343.

+ [Fix] Fix that when `'0'` existing in dimentions the chart do not work. Make backward compat when dimention is a number-like string. Fix #9363, contributed by PR #9388.

+ [Fix] Fix hover style on `textStroke` bug in custom series.

+ [Fix] Fix graph bug when data is number typed. Fix #10485.

+ [Fix] Fix that `axisPointer` label padding does not work. Fix #10569.

+ [Fix] Add `dimIndex` for callback formatter in radar. Close #10403, #10180, contributed PR #10437.

+ [Fix] Prevent treamap from using hover layer by default. Fix #10521. Ref #10635.

+ [Fix] Update pointer when type is none. Fix #10570.

+ [Fix] Enhance circular layout: based on symbol size and fix overlap when some value are very smaller than the max value. Fix #10462, Close #10615.

+ [Fix] Support click and tooltip in bar large mode. Fix #10699.





## v4.2.1

<div class="time">2019-03-21</div>

+ [Fix] Fix text cache problem. See [#9190](https://github.com/apache/incubator-echarts/issues/9190), [#9597](https://github.com/apache/incubator-echarts/issues/9597), [#9762](https://github.com/apache/incubator-echarts/issues/9762).

+ [Fix] Fix that in some case re-`setOption` in event handler throws error. See [#9649](https://github.com/apache/incubator-echarts/issues/9649).

+ [Fix] Fix that geo region problem causes `showTip` abnormal. See [#9156](https://github.com/apache/incubator-echarts/issues/9156).

+ [Fix] Fix that stacked bars are over cartesian in some cases. See [#9346](https://github.com/apache/incubator-echarts/issues/9346).

+ [Fix] Fix that legend is not able to scroll when the space is not enough to contain one item. See [#6743](https://github.com/apache/incubator-echarts/issues/6743), [#8971](https://github.com/apache/incubator-echarts/issues/8971), [#9471](https://github.com/apache/incubator-echarts/issues/9471).

+ [Fix] Fix that the centered pie label might has some bias on some angles. See [#9657](https://github.com/apache/incubator-echarts/issues/9657).

+ [Fix] Fix that Geo map panning is not working on MS Edge browser See [#9479](https://github.com/apache/incubator-echarts/issues/9479).

+ [Fix] Fix that label dispaly problem in map series. See [#9682](https://github.com/apache/incubator-echarts/issues/9682).

+ [Fix] Fix that `visualMap: false` set on data items makes subsequent items abnormal. See [#8799](https://github.com/apache/incubator-echarts/issues/8799).

+ [Fix] When `axisLabel.interval` of a category axis is set as `0`, all labels show regardless of overlap. See [#9589](https://github.com/apache/incubator-echarts/issues/9589).

+ [Fix] Fix grid(cartesian) did not render when both containLabel and axisLabel.rich used.

+ [Fix] Fix license statement.

+ [Fix] Fix rich text boundingRect bug.



## v4.2.0.rc2

<div class="time">2018-10-15</div>

Recovery build

Fix the problem that bar progressive was blocked.


## v4.2.0.rc1

<div class="time">2018-09-11</div>

+ **[Feature] Support non-html tooltip**, which enable show tooltip on non-html environment, for example, WeChat Mini App. Use [tooltip.renderMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.renderMode) to enable this feature.

+ **[Feature] Support event filtering**, which enable listen event triggered by specified component, series, data items. See [chart.on](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.on) for details, where a new parameter `query` provided this feature. Support event listening for [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom) and [graphic component](https://ecomfe.github.io/echarts-doc/public/en/option.html#graphic.triggerEvent), where specified events from the specified graphic elements can be listened by the `query`.

+ **[Feature] Enable implementing scroll bar** by dataZoom (similar behavior as the browser scroll bar), see [dataZoom-inside.moveOnMouseWheel](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom-inside.moveOnMouseWheel), and see the [Gantt example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=custom-gantt-flight).

+ [Feature] Support focusing node adjacency in sankey diagram. See [focusNodeAdjacency](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.focusNodeAdjacency) and [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=sankey-product).

+ [Feature] Support vertical layout of sankey diagram, see [series-sankey.orient](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey.orient) and [Vertical sankey example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=sankey-vertical).

+ [Feature] Support roam for tree diagram. See [series-tree.roam](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree.roam).

+ [Feature] Enable to set an axis as `-1` in [encode](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.encode) for [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom), which indicates that the axis and its corresponding dataZoom do not control any dimension of the series (either calculate axis extent by this series nor scale or filter this series). See [Gantt example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=custom-gantt-flight).

+ [Feature] Enable layout `'cover'` in [path shape](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.return_path.shape.layout) for [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom), which brings convenience when using [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) create shapes. See [Gantt example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=custom-gantt-flight).

+ [Feature] Enhance [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom): Added [params.actionType](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.params), enables some optimize. And add[params.coordSys.zoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.arguments.params) for geo coordinate system. Add [invisible](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.return_text.invisible) and [ignore](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem.return_text.ignore) to enable show and hide graphic elements in different situation.

+ [Feature] Support inner radius for [radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#radar.radius). See [#8717](https://github.com/apache/incubator-echarts/issues/8717).

+ [Fix] Fix polar category axis interval bug. See [#8791](https://github.com/apache/incubator-echarts/issues/8791).

+ [Fix] Do not support set polar center on series. Center should be set on [polar.center](https://ecomfe.github.io/echarts-doc/public/en/option.html#polar.center).

+ [Fix] Update normal shadow style for [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#8583](https://github.com/apache/incubator-echarts/issues/8583).

+ [Fix] Fix empty [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset) problem. See [#8395](https://github.com/apache/incubator-echarts/issues/8395).

+ [Fix] Fix bar start position when multiple axes exists. See [#8747](https://github.com/apache/incubator-echarts/issues/8747).

+ [Fix] Remove clipPath for expansion animation. See [#8994](https://github.com/apache/incubator-echarts/issues/8994).

+ [Fix] Fix axes overlap when two Y axes are on one X axis. See [#8975](https://github.com/apache/incubator-echarts/issues/8975).




## v4.1.0
<div class="time">2018-05-02</div>

+ [Feature] Enable candlestick and bar chart rendering and zooming in a large amount of data (200K). Add option [series-candlestick.progressiveChunkMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.progressiveChunkMode) to enhance the effect when progressively rendering. See example [candlestick-large](https://ecomfe.github.io/echarts-examples/public/editor.html?c=candlestick-large).

+ [Feature] Add tree directions from right to left, from bottom to top for tree series. [#7351](https://github.com/apache/incubator-echarts/issues/7351) [#7154](https://github.com/apache/incubator-echarts/issues/7154). See example [tree-orient-right-left](https://ecomfe.github.io/echarts-examples/public/editor.html?c=tree-orient-right-left), [tree-vertical](https://ecomfe.github.io/echarts-examples/public/editor.html?c=tree-vertical).

+ [Feature] Support keeping-aspect for legend path. [#7831](https://github.com/apache/incubator-echarts/issues/7831)

+ [Feature] Support node dragging for sankey chart. See example [sankey-energy](https://ecomfe.github.io/echarts-examples/public/editor.html?c=sankey-energy).

+ [Enhance] Category axis enhancement:
    + Optimize the performance in a large amount of data (> 100K ~ 1M)
    + Enhance the auto interval strategy.
    + Enhance the animation when zooming and moving the data window of cartesian.

+ [Enhance] In line chart, enhance symbol display strategy when using category axis (see `showAllSymbol:'auto'`).

+ [Enhance] Support that lift the brushed elements to the top (add option `visualMap.inRange.liftZ`).

+ [Enhance] Enhance the order of nodes for sankey diagram. [#3390](https://github.com/apache/incubator-echarts/issues/3390) [#3543](https://github.com/apache/incubator-echarts/issues/3543) [#6365](https://github.com/apache/incubator-echarts/issues/6365) [#4880](https://github.com/apache/incubator-echarts/issues/4880) [#4986](https://github.com/apache/incubator-echarts/issues/4986)

+ [Enhance] Enhance sampling performance in progressive mode.

+ [Enhance] Enhance parallel performance in progressive mode.

+ [Enhance] Currently do not filter empty data item in data zoom, which makes line chart keeping broken. [#7955](https://github.com/apache/incubator-echarts/issues/7955)

+ [Enhance] Support toolbox.feature merge.

+ [Fix] Resolve browser become unresponsive when the data of sankey series has cycle. [#7495](https://github.com/apache/incubator-echarts/issues/7495) [#8117](https://github.com/apache/incubator-echarts/issues/8117) [#7583](https://github.com/apache/incubator-echarts/issues/7583) [#7325](https://github.com/apache/incubator-echarts/issues/7325) [#6555](https://github.com/apache/incubator-echarts/issues/6555)

+ [Fix] `yAxis` extent did not update when some of the stacked bar series hide. [#8003](https://github.com/apache/incubator-echarts/issues/8003)

+ [Fix] Currently we fetch name from `dateItem.name` firstly in list. [#7966](https://github.com/apache/incubator-echarts/issues/7966)

+ [Fix] Typed array incorrect usage in WeChat app.

+ [Fix] `option` in axis data item did not work. [#7954](https://github.com/apache/incubator-echarts/issues/7954)

+ [Fix] `markArea` only displayed the last one. [#7902](https://github.com/apache/incubator-echarts/issues/7902)

+ [Fix] Fixed the WeChat environment imprecise detection.

+ [Fix] Rounding error in clip symbol for line chart. [#7913](https://github.com/apache/incubator-echarts/issues/7913)

+ [Fix] The default tooltip in candlestick only showed one item. [#8149](https://github.com/apache/incubator-echarts/issues/8149)

+ [Fix] Bar chart start point was incorrect when multiple axes exist. [#7412](https://github.com/apache/incubator-echarts/issues/7412)

+ [Fix] `markArea` did not display when using ordinal string. [#7849](https://github.com/apache/incubator-echarts/issues/7849)

+ [Fix] `dataZoom` threw error when series was empty. [#7666](https://github.com/apache/incubator-echarts/issues/7666)

+ [Fix] Add compatibility of data exceptions for sankey series. [#2867](https://github.com/apache/incubator-echarts/issues/2867)

+ [Fix] Fix error when removing node or rendering again for the tree series. [#8038](https://github.com/apache/incubator-echarts/issues/8038) [#8040](https://github.com/apache/incubator-echarts/issues/8040) [#7720](https://github.com/apache/incubator-echarts/issues/7720) [#7363](https://github.com/apache/incubator-echarts/issues/7363) [#7315](https://github.com/apache/incubator-echarts/issues/7315)

+ [Fix] `sunburst` chart roll-up element was not removed when chart.setOption called. [#8132](https://github.com/apache/incubator-echarts/issues/8132)

+ [Fix] SVG axisPointer text position bug. [#7947](https://github.com/apache/incubator-echarts/issues/7947)

+ [Fix] Large lines chart render bug in large mode.

+ [Fix] The last day of a month was not displayed in calendar. [#8045](https://github.com/apache/incubator-echarts/issues/8045)

+ [Fix] Data sampling of line chart caused incorrect extent when data had NaN.

+ [Fix] Data sampling of line chart worked abnormally when using `series.encode`. [#8017](https://github.com/apache/incubator-echarts/issues/8017)

+ [Fix] `legendHoverLink: false` did not work appropriately when multiple series had the same name. [#8010](https://github.com/apache/incubator-echarts/issues/8010)

+ [Fix] Some of the graph hover style did not work.

+ [Fix] Fix axis extent calculation error when using stack.




## v4.0.4
<div class="time">2018-02-28</div>

[Recovery Build]

+ [^] Fixed bar layout problem. See [#7831](https://github.com/apache/incubator-echarts/issues/7831).


## v4.0.3
<div class="time">2018-02-27</div>

+ **[+] ECharts has been able to work on WeChat Applet.**

+ [+] Added a new smooth policy, which corrects some undesired smooth result. See details in [series-line.smooth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smooth) and [series-line.smoothMonotone](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smoothMonotone). Fixed [#7158](https://github.com/apache/incubator-echarts/issues/7158).

+ [+] Supported [series-line.symbolOffset](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.symbolOffset) of axis arrow. See [#7422](https://github.com/apache/incubator-echarts/issues/7422).

+ [+] Supported [series-sunburst.label.minAngle](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst.label.minAngle), which enables hiding text if the sector is less then the `minAngle`. See [#7614](https://github.com/apache/incubator-echarts/issues/7614).

+ [+] Supported tooltip in [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#7691](https://github.com/apache/incubator-echarts/issues/7691).

+ [+] Supported configuring [series-sunburst.nodeClick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst.nodeClick) in level or single sector. See [#7541](https://github.com/apache/incubator-echarts/issues/7541).

+ [+] Supported [stack data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.stack) by value but not index. Fixed stack bug when using [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset). See [#7535](https://github.com/apache/incubator-echarts/issues/7535), [#7560](https://github.com/apache/incubator-echarts/issues/7560), [#6861](https://github.com/apache/incubator-echarts/issues/6861).

+ [^] Fixed shape clip when [line chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line) is overflow cartesian area.

+ [^] Fixed that the last area of [splitArea](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.splitArea) did not display. See [#7118](https://github.com/apache/incubator-echarts/issues/7118).

+ [^] Fixed gradient color bug of [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#7569](https://github.com/apache/incubator-echarts/issues/7569).

+ [^] Fixed the case when [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) component is not imported for [sunburst](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst). See [#7575](https://github.com/apache/incubator-echarts/issues/7575).

+ [^] Fixed that [apendData](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.appendData) did not work when data amount was less then [progressive](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.progressive) limit. See [#7718](https://github.com/apache/incubator-echarts/issues/7718) and [#7625](https://github.com/apache/incubator-echarts/issues/7625).

+ [^] Fixed that [apendData](api.html#echartsInstance.appendData) caused series color changed if series name was not specified.

+ [^] Fixed that [tooltip.axisPointer.label.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.axisPointer.label.show) did not work when set as `false`. See [#7725](https://github.com/apache/incubator-echarts/issues/7725).

+ [^] Fixed that [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) could not be selected if an area had no data. See [#7629](https://github.com/apache/incubator-echarts/issues/7629).

+ [^] Fixed [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick) encode problem. See [#7715](https://github.com/apache/incubator-echarts/issues/7715).

+ [^] Fixed the data item empty check logic, which caused that [renderItem](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.renderItem) could not enter when value array length not the same, and [dataset](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataset) could not be displayed. See [#7733](https://github.com/apache/incubator-echarts/issues/7733).

+ [^] Fixed the textStyle compatibility logic.




## v4.0.2
<div class="time">2018-01-18</div>

+ [^] Fixed that in some case the scollable legend (`legend.type: 'scroll'`) caused ghost. See [#7502](https://github.com/apache/incubator-echarts/issues/7502).

+ [^] Fixed that the `selected` option did not work in the data item of [pie](option.html#series-pie). See [#7515](https://github.com/apache/incubator-echarts/issues/7515).

+ [^] Fixed [play button](option.html#timeline.controlStyle.showNextBtn) of timeline component could not be disabled. See [#7506](https://github.com/apache/incubator-echarts/issues/7506).


## v4.0.1
<div class="time">2018-01-17</div>

## v4.0.0
<div class="time">2018-01-16</div>

+ [+] Supported to render up to **tens millions of data** directly. ECharts4 has upgrade to stream architecture, and along with detailed optimization, it has supported to render incrementally loaded data and support progressive rendering.
    + Ten millions of GIS data probably take up to about hundreds MB of space. In this case chunked data loading or WebStock is required for the purpose of display graphics as soon as possible and not blocking the browser while processing loaded data. The samples of incremental data loading can be checked here: [scatterGL-gps](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatterGL-gps&gl=1) and [linesGL-ny](https://ecomfe.github.io/echarts-examples/public/editor.html?c=linesGL-ny&gl=1), who use ECharts GL, and [lines-ny](https://ecomfe.github.io/echarts-examples/public/editor.html?c=lines-ny), who only uses ECharts.
    + Supported the human interactions in the big data scenario, where continuous interactions (e.g., roam in geo and cartesian) will not block the browser. Benefit from the using of GPU and avoiding of layout recalculation, ECharts GL provides smooth interactions, which has been demonstrated in the examples above. Without WebGL, the basic ECharts implements progressive rendering to support non-blocking interaction, which can be checked at the pan and zoom in [lines-airline](https://ecomfe.github.io/echarts-examples/public/editor.html?c=lines-airline) and [scatter-large](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-large).

+ [+] **Published ZRender SVG Rendering Engine** as an alternative backend of ECharts besides the existing Canvas Rendering Engine. The choice of rendering engine usually depends on the scenario, for example, benefit from the low memory cost, SVG Rendering Engine is suitable for mobile device, or the case that many ECharts instances exists in a single page, while the Canvas Rendering Engine is suitable for big data rendering or when visual effects required. Canvas Rendering Engine is default rendering engine. See [zrender](https://github.com/ecomfe/zrender).

+ [+] **Published Sunburst Chart** to visualize hierarchical data efficiently with excellent interactions. See [examples] and (excellent) and [docs](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sunburst).

+ [+] **Published [dataset](http://echarts.baidu.com/tutorial.html#%E6%95%B0%E6%8D%AE%E9%9B%86%EF%BC%88dataset%EF%BC%89) component** to support data based configuration, visual encoding and data sharing in different series.

+ [+] **Supported WAI-ARIA (the Accessible Rich Internet Applications Suite）** to help the disabled people to access the data visualization in web.

+ [+] Since ECharts4, the options `label` and `itemStyle` has been flattened. The original level of `normal` is not needed any more, which make ECharts option more neat. As always, **The previous option style in ECharts3 is still be compatible**.

+ [+] Added two color themes, named 'light' and 'dark'. Apply them by `echarts.init(dom, themeName);`.

+ [+] Supported that auto collect legend names when [legend.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#legend.data) is not specified.

+ [+] Supported that auto collect category names when `axis.type` is `'category'` and [axis.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.data) is not specified.


## v3.8.4
<div class="time">2017-11-13</div>

+ [^] Fixed that `registerMap` is null on `index*.js`.
+ [^] Fixed some CommonJS incorrect brought by injection.


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

+ [+] Supported build scripts for creating custom build, including multiple language support. See [custom build tutorial](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts). And added Finnish support, which is contributed by [xvaara](https://github.com/xvaara) in [PR #6863](https://github.com/apache/incubator-echarts/pull/6863).

+ [+] Supported [axis arrow](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLine.symbol). See [#6675](https://github.com/apache/incubator-echarts/issues/6675).

+ [+] Supported [strokeWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.levels.itemStyle.normal.strokeWidth) and [strokeColor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.levels.itemStyle.normal.strokeColor) in treemap. See [#6804](https://github.com/apache/incubator-echarts/issues/6804).

+ [+] Supported [show adjacent nodes](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.focusNodeAdjacency) in graph. See [#6772](https://github.com/apache/incubator-echarts/issues/6772).

+ [^] Fixed the area calculation when [grid.containLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid.containLabel) is `true` and axis is [rotated](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.axisLabel.rotate). Thanks [xvaara](https://github.com/xvaara) for [PR #6951](https://github.com/apache/incubator-echarts/pull/6951).

+ [^] Fixed that the calculation of interval is not incorrect when [axisLabel.rotate](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.rotate) is set in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type). See [#4170](https://github.com/apache/incubator-echarts/issues/4170). Thanks[lanyuechen](https://github.com/lanyuechen) for [PR #6903](https://github.com/apache/incubator-echarts/pull/6903).

+ [^] Fixed the negative problem in `dataTool.prepareBoxplotData`. Thanks [d-rudolf](https://github.com/d-rudolf) for [PR #6749](https://github.com/apache/incubator-echarts/pull/6749).

+ [^] Enhanced the label interval of [time axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type). Thanks [xiaoshan00](https://github.com/xiaoshan00) for [PR #6808](https://github.com/apache/incubator-echarts/pull/6808).

+ [^] Supported [radiusAxis.inverse](https://ecomfe.github.io/echarts-doc/public/en/option.html#radiusAxis.inverse). See [#6805](https://github.com/apache/incubator-echarts/issues/6805) and [#4253](https://github.com/apache/incubator-echarts/issues/4253).

+ [^] Renamed some variables to avoid webpack special variable name. See [#6788](https://github.com/apache/incubator-echarts/issues/6788).

+ [^] Fixed position problem of [scrollable legend](https://ecomfe.github.io/echarts-examples/public/index.html#pie-legend). See [#6756](https://github.com/apache/incubator-echarts/issues/6756).

+ [^] Fixed that the [themeRiver](https://ecomfe.github.io/echarts-examples/public/index.html#themeRiver-basic) legend color is incorrect. See [#6932](https://github.com/apache/incubator-echarts/issues/6932).

+ [^] Fixed that brush empty value caused error thrown. See [#6892](https://github.com/apache/incubator-echarts/issues/6892).

+ `dist/echarts/echarts.simple.js` do not includ utils, which used to be mounted on `echarts`. `dist/echarts/echarts.common.js` and `dist/echarts/echarts.js` keep including them as before. And developers can [custom build](https://ecomfe.github.io/echarts-doc/public/en/option.html#Create%20Custom%20Build%20of%20ECharts) to include them.

+ Changes about `dataTool`: When using `dist/echarts/echarts.simple.js` or `dist/echarts/echarts.common.js`, `dist/echarts/extension/dataTool.js` should be manually included as before, but the namespace `dataTool` will not be mounted to `echarts`. When using `dist/echarts/echarts.js`, `echarts.dataTool` is included automatically by default.





## v3.7.2
<div class="time">2017-09-27</div>

+ [+] Supported English version build (All default text is in English) in <https://github.com/apache/incubator-echarts/tree/master/dist>. See [#2321](https://github.com/apache/incubator-echarts/issues/2321).

+ [+] Supported [pie.hoverOffset](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.hoverOffset). See [#3857](https://github.com/apache/incubator-echarts/issues/3857).

+ [^] Fixed compatibility of data in [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6576](https://github.com/apache/incubator-echarts/issues/6576).

+ [^] Fixed [showMaxLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.showMaxLabel) [showMinLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.showMinLabel).

+ [^] Fixed area chart when all value is negative. See [#6707](https://github.com/apache/incubator-echarts/issues/6707).

+ [^] Made the meaning of `'middle'` and `'center'` consist in [axis.nameLocation](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.nameLocation).

+ [^] Fixed that [markArea.itemStyle.emphasis](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.itemStyle.emphasis) did not work. See [#5245](https://github.com/apache/incubator-echarts/issues/5245).

+ [^] Fixed the problem of right click in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [#6313](https://github.com/apache/incubator-echarts/issues/6313).

+ [^] Fixed that calender did not work because of DST (Day Saving Time). See [#6543](https://github.com/apache/incubator-echarts/issues/6543).

+ [^] Enhanced the "save as image" in IE. See [#6279](https://github.com/apache/incubator-echarts/issues/6279).

+ [^] Fixed cleaning for "motion blur". See [#6577](https://github.com/apache/incubator-echarts/issues/6577).

+ [^] Fix doji for k series [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6583](https://github.com/apache/incubator-echarts/issues/6583).

+ [^] Fixed the compatibility for `markPoint`. See [#6503](https://github.com/apache/incubator-echarts/issues/6503).




## v3.7.1
<div class="time">2017-08-31</div>

[Recovery Build]

+ [+] Supported function in [axis.min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min), [axis.max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max). See [#6465](https://github.com/apache/incubator-echarts/issues/6465).

+ [^] Fixed problems of compatibility and emphasis style about textStyle. See [#6491](https://github.com/apache/incubator-echarts/issues/6491)、[#6529](https://github.com/apache/incubator-echarts/issues/6529), [#6516](https://github.com/apache/incubator-echarts/issues/6516), [#6532](https://github.com/apache/incubator-echarts/issues/6532), [#6237](https://github.com/apache/incubator-echarts/issues/6237).

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

+ [+] Supported [xAxis.axisLine.onZeroAxisIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLine.onZeroAxisIndex), which enables specifing corresponding relationship when multiple axes used and `onZero` is required. See [#5069](https://github.com/apache/incubator-echarts/issues/5069).

+ [+] Supported that do not use [coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom.coordinateSystems) in `custom series`.

+ [+] Supported rotation and alignment of label in bar chart. See [rotate](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.rotate), [align](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.align), [verticalAlign](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.label.normal.verticalAlign). See [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-label-rotation). See [#5309](https://github.com/apache/incubator-echarts/issues/5309).

+ [+] Supported [radar.indicator.color](https://ecomfe.github.io/echarts-doc/public/en/option.html#radar.indicator.color), which enables setting different color for each indicator of radar chart. See [#6128](https://github.com/apache/incubator-echarts/issues/6128).

+ [+] Supported [dataZoom.rangeMode](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.rangeMode), which can fixing zoom window according to data when data updated. See [#6128](https://github.com/apache/incubator-echarts/issues/6040).

+ [+] Supported using `dataIndex` in [action.legend.legendToggleSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendToggleSelect), [action.legend.legendSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendSelect), [action.legend.legendUnSelect](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.legend.legendUnSelect). See [#4242](https://github.com/apache/incubator-echarts/issues/4242).

+ [+] Supported [map.label.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.label.formatter), which enables using rich text in map series. See [Map Labels](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-labels).

+ [+] Supported [title.borderRadius](http://echarts.baidu.com/option.html#title.borderRadius) and [legend.borderRadius](http://echarts.baidu.com/option.html#legend.borderRadius), which enables round corner of background or border in `title` and `legend` component.

+ [^] Fixed that error thrown when using shadow in pie series in some version of IE. See [#5777](https://github.com/apache/incubator-echarts/issues/5777).

+ [^] Fixed that name can not be obtained in `tooltip` when `nameMap` was used in map serise and there was no data in some areas. See [#5633](https://github.com/apache/incubator-echarts/issues/5633).

+ [^] Fixed `tooltip` location incorrect after roamed in bmap extension. See [#6211](https://github.com/apache/incubator-echarts/issues/6211).

+ [^] Fixed null pointer exception of `axisPointer`. See [#6121](https://github.com/apache/incubator-echarts/issues/6121).

+ [^] Fixed that error occured when height of heatmap was 0. See [#6214](https://github.com/apache/incubator-echarts/issues/6214).

+ [+] Fixed the incorrect rendering when the first entry was empty in [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick). See [#6059](https://github.com/apache/incubator-echarts/issues/6059).

+ [^] Fixed that [series-bar.dimensions](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.dimensions) did not work. See [#6252](https://github.com/apache/incubator-echarts/issues/6252).

+ [^] Fixed that when chilren number of group was not fixed, they could not be removed correctly in [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom).

+ [^] Fixed the error that calling `connect` before `setOption` called. See [#6281](https://github.com/apache/incubator-echarts/issues/6281).

+ [^] Fixed the edge judgement of [tooltip.confine](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.confine). See [#6277](https://github.com/apache/incubator-echarts/issues/6277) and [0da06d8](https://github.com/apache/incubator-echarts/commit/0da06d8).

+ [^] Fixed that bar series displayed abnormal when viewport was narrow and bar series were overlapped (both set `barWidth` and `barGap: '-100%'`). See [#6312](https://github.com/apache/incubator-echarts/issues/6312).

+ [^] Fixed precision problems. See [#6371](https://github.com/apache/incubator-echarts/issues/6371).


## v3.6.2
<div class="time">2017-06-15</div>

+ [+] Supported draw [custom series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-custom) on [Baidu Map (bmap)](https://github.com/apache/incubator-echarts/tree/master/extension/bmap). See [example 1](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-polygon) and [example 2](https://ecomfe.github.io/echarts-examples/public/editor.html?c=map-bin).

+ [+] Supported show parent labels in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [example](https://ecomfe.github.io/echarts-examples/public/editor.html?c=treemap-show-parent). See [#5869](https://github.com/apache/incubator-echarts/issues/5869) and [#5579](https://github.com/apache/incubator-echarts/issues/5579).

+ [+] Supported specifying mouse cursor style by: [series-line.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.cursor), [series-bar.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.cursor), [series-pie.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.cursor), [series-scatter.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter.cursor), [series-effectScatter.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-effectScatter.cursor), [series-graph.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.cursor), [series-pictorialBar.cursor](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar.cursor).

+ [+] Support both negative and positive bounding data specified on [series-pictorialBar.symbolBoundingData](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar.symbolBoundingData). See [#5793](https://github.com/apache/incubator-echarts/issues/5793).

+ [+] Supported [fixed](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.data.fixed) in `graph`. See [#5966](https://github.com/apache/incubator-echarts/issues/5966).

+ [+] Supported [label.formatter](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.label.normal.formatter)in `treemap`. See [#5757](https://github.com/apache/incubator-echarts/issues/5757).

+ [+] Supported [label.normal.textStyle.align](https://ecomfe.github.io/echarts-doc/public/en/option.html#timeline.label.normal.textStyle.align) and [label.normal.textStyle.basealign](https://ecomfe.github.io/echarts-doc/public/en/option.html#timeline.label.normal.textStyle.basealign) in `timeline`. See [#5960](https://github.com/apache/incubator-echarts/issues/5960).

+ [^] Fixed that `tooltip` did not work when [large scatter](https://ecomfe.github.io/echarts-examples/public/editor.html?c=scatter-large) was zoomed. See[#5837](https://github.com/apache/incubator-echarts/issues/5837).

+ [^] Fixed that parameter `position` did not work when trigger [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip) action. See [#5874](https://github.com/apache/incubator-echarts/issues/5874).

+ [^] Fixed that sometimes the sum of the percent value is less than `100%` slightly in [pie](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie), which was caused by precision problem. See [#5850](https://github.com/apache/incubator-echarts/issues/5850).

+ [^] Fixed only the last `markPoint` or `markLine` was displayed when `series.name` was the same. See [#5712](https://github.com/apache/incubator-echarts/issues/5712).

+ [^] Fixed that [barBorderRadius](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-bar.itemStyle.normal.barBorderRadius) did not work in horizontal bar. See [#5943](https://github.com/apache/incubator-echarts/issues/5943).

+ [^] Fixed the zoom point error when applying [dataZoom-inside](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom-inside) on Y axis. See [#5278](https://github.com/apache/incubator-echarts/issues/5278).

+ [^] Fixed sometimes [radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) did not display normally. See [#5986](https://github.com/apache/incubator-echarts/issues/5986).



## v3.6.1
<div class="time">2017-05-26</div>

[Recovery Build]

+ [^] Fixed that [data sampling](http://echarts.baidu.com/option.html#series-line.sampling) did not work.
+ [^] Fixed the problem on ie11 when compiled by webpack. See [zrender/#189](https://github.com/ecomfe/zrender/issues/189).


## v3.6.0
<div class="time">2017-05-25</div>

+ **[+] Published [custom series](http://echarts.baidu.com/option.html#series-custom)**, which enables user to customize render logic and make new types of chart. See [samples](http://echarts.baidu.com/examples.html#chart-type-custom).

+ **[+] Supported polar bar chart**. See [sample1](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-stack), [sample2](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-stack-radial), [sample3](https://ecomfe.github.io/echarts-examples/public/editor.html?c=bar-polar-real-estate).

+ [+] Supported [encode](http://echarts.baidu.com/option.html#series-scatter.encode), which enable user to specify which dimensions in [data](http://echarts.baidu.com/option.html#series-scatter.data) are mapped to which axis of coordinate system. Or which dimensions will be displayed in [tooltip](http://echarts.baidu.com/option.html#tooltip) or [label](http://echarts.baidu.com/option.html#series-scatter.label). [Break Change]: The default name of the third dimension in `cartesian2d` is changed from `'z'` to `'value'`. If `'z'` is used in [visualMap.dimension](http://echarts.baidu.com/option.html#visualMap.dimension), please modify it to `'value'` or `2`.

+ [+] Supported [dimensions](http://echarts.baidu.com/option.html#series-scatter.dimensions), which enables that specifying names and types for each dimensions in [data](http://echarts.baidu.com/option.html#series-scatter.data). Name can be displayed in [tooltip](http://echarts.baidu.com/option.html#tooltip).

+ [+] Supported [dataZoom.minSpan](http://echarts.baidu.com/option.html#dataZoom.minSpan) and [dataZoom.maxSpan](http://echarts.baidu.com/option.html#dataZoom.maxSpan). See [#2843](https://github.com/apache/incubator-echarts/issues/2843).

+ [+] Supported [dataZoom.moveOnMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.moveOnMouseMove) and [dataZoom.zoomOnMouseWheel](http://echarts.baidu.com/option.html#dataZoom-inside.zoomOnMouseWheel), which enables that triggering dataZoom only by mouse wheel while holding 'ctrl'/'alt'/'shift'. Moreover, supported [preventDefaultMouseMove](http://echarts.baidu.com/option.html#dataZoom-inside.preventDefaultMouseMove), See [#5769](https://github.com/apache/incubator-echarts/issues/5769).

+ [+] Supported using image in [dataZoom.handleIcon](http://echarts.baidu.com/option.html#dataZoom-slider.handleIcon) setting.

+ [^] Fixed boundary problems on world map.

+ [^] Fixed that [minInterval](http://echarts.baidu.com/option.html#xAxis.minInterval) did not work when [min](http://echarts.baidu.com/option.html#xAxis.min) was set. See [#4838](https://github.com/apache/incubator-echarts/issues/4838).

+ [^] Fixed problems caused by default properties on `Object`. See [#5576](https://github.com/apache/incubator-echarts/issues/5576).

+ [^] Fixed that error was thrown when `setOption` while legend selection changed, which was caused [graphic](http://echarts.baidu.com/option.html#graphic). See [#5783](https://github.com/apache/incubator-echarts/issues/5783).

+ [^] Fixed [parallelAxis.axisLabel.interval](http://echarts.baidu.com/option.html#parallelAxis.axisLabel.interval) supporting. See [#5694](https://github.com/apache/incubator-echarts/issues/5694).

+ [^] Enhanced interaction of `dataZoom`.

+ [^] Fixed the problem about [minAngle](http://echarts.baidu.com/option.html#series-pie.minAngle) on rose chart. See [#5617](https://github.com/apache/incubator-echarts/issues/5617).

+ [^] Fixed the problem when tooltip updating.



## v3.5.4
<div class="time">2017-04-27</div>

+ [^] Fixed the `clipPath` support for [liquidfill](https://github.com/ecomfe/echarts-liquidfill).
+ [^] Fixed the position when `label` is set as `insideTop`.
+ [^] Fixed the problem when transforming [SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData).


## v3.5.3
<div class="time">2017-04-14</div>

+ [^] Fixed the problem when both `left` `right` `width` `top` `bottom` `height` are set. See [#5440](https://github.com/apache/incubator-echarts/issues/5440).

+ [^] Fixed the problem when input x,y to [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip). See [#5449](https://github.com/apache/incubator-echarts/issues/5449).

+ [^] Enhanced the effect of [boundaryGap](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.boundaryGap) when only one data existed. See [#4417](https://github.com/apache/incubator-echarts/issues/4417).

+ [^] Fixed animation easing setting of [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.animationEasing). See [#5451](https://github.com/apache/incubator-echarts/issues/5451).

+ [^] Made the sorting of [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap) stable when values were the same.

+ [^] Fixed that roam and brush conflicted when components overlaped.

+ [^] Enlarged area of [parallel axis name](https://ecomfe.github.io/echarts-doc/public/en/option.html#parallelAxis.nameRotate) when it rotates.

+ [^] Enabled [toolbox clear button](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.brush.type) to be able to clear brush box of [parallelAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#parallelAxis).

+ [^] Improved the performance of zrender up to `50%`.


## v3.5.2
<div class="time">2017-04-05</div>

+ [+] Supported [useUTC](https://ecomfe.github.io/echarts-doc/public/en/option.html#useUTC), which enables display `axisLabel` and `tooltip` in local time or UTC. Related default setttings are modified: `axisLabel` and `tooltip` display local time by default, and `data` recognize time string as local time if timezone not specified. See [the time part in series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.data). Fixed the problem that when `axis.type` is `'time'` tick is determined by UTC and can not align with daytime. Fixed [#5396](https://github.com/apache/incubator-echarts/issues/5396) and [#5393](https://github.com/apache/incubator-echarts/issues/5393).

+ [+] Supported [axisLabel.showMinLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.showMinLabel) and [axisLabel.showMaxLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.axisLabel.showMaxLabel).

+ [+] Supported [funnel.sort](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-funnel.sort), which enables sorting funnel by index or customized function.

+ [^] Fixed float error of `axisTick`. See [#5041](https://github.com/apache/incubator-echarts/issues/5041).

+ [^] Fixed that `axisTick` did not display when value was too small. See [#5386](https://github.com/apache/incubator-echarts/issues/5386).

+ [^] Fixed when [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger) was `'axis'`, `dispatchAction` [showTip](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip) did not work. See [#5423](https://github.com/apache/incubator-echarts/issues/5423).

+ [^] Fixed that [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) disabled `itemStyle` of [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). See [#5388](https://github.com/apache/incubator-echarts/issues/5388).

+ [^] Fixed that [tooltip.trigger](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.trigger) did not support `'none'`. See [#5400](https://github.com/apache/incubator-echarts/issues/5400).

+ [^] Fixed problem of [sankey](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-sankey) on ie11. See [#3306](https://github.com/apache/incubator-echarts/issues/3306).

+ [^] Fixed that `data.lineStyle.color` of [parallel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-parallel) did not work. See [#5363](https://github.com/apache/incubator-echarts/issues/5363).


## v3.5.1
<div class="time">2017-03-23</div>

Recovery Build

+ [^] Fixed [#5352](https://github.com/apache/incubator-echarts/issues/5352).

+ [^] Fixed [#5350](https://github.com/apache/incubator-echarts/issues/5350).


## v3.5.0
<div class="time">2017-03-23</div>

+ **[+] Published [calendar coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#calendar)**. See [examples](https://ecomfe.github.io/echarts-examples/public/index.html#calendar).

+ **[+] Published echarts statistics tools [echarts-stat](https://github.com/ecomfe/echarts-stat)**

+ **[+] Enhanced axis pointer** See examples: [link](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-brush), [mobile (touch device) 1](https://ecomfe.github.io/echarts-examples/public/index.html#line-tooltip-touch), [mobile (touch device) 2](https://ecomfe.github.io/echarts-examples/public/index.html#candlestick-touch), [analysis](https://ecomfe.github.io/echarts-examples/public/index.html#scatter-nutrients-matrix), [multiple Y axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-y-axis), [multiple X axes](https://ecomfe.github.io/echarts-examples/public/index.html#multiple-x-axis). Supported and enhanced [#5040](https://github.com/apache/incubator-echarts/issues/5040), [#5039](https://github.com/apache/incubator-echarts/issues/5039), [#5102](https://github.com/apache/incubator-echarts/issues/5102), [#5262](https://github.com/apache/incubator-echarts/issues/5262), [#4905](https://github.com/apache/incubator-echarts/issues/4905), [#4921](https://github.com/apache/incubator-echarts/issues/4921), [#5091](https://github.com/apache/incubator-echarts/issues/5091).

+ [+] Enhanced method `echarts.util.parseDate`, which have supported parsing different formats of data expression to UTC time. See [time in series.data](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.data)

+ [^] Enhanced processing of geoJSON.

+ [^] Fixed that [toolbox.feature.dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom) can not control multiple x axes. See [#4896](https://github.com/apache/incubator-echarts/issues/4896).

+ [^] Fixed the default extent of category axis in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#5226](https://github.com/apache/incubator-echarts/issues/5226).

+ [^] Fixed function name of "disConnect". See [#5208](https://github.com/apache/incubator-echarts/issues/5208).

+ [^] Remove incorrect warning specifying `width,height` when initialize echart. See [#4569](https://github.com/apache/incubator-echarts/issues/4569).

+ [^] Fixed that tooltip in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge) do not support percentage. See [#4347](https://github.com/apache/incubator-echarts/issues/4347) and [#4332](https://github.com/apache/incubator-echarts/pull/4332).

+ [^] Fixed the behavior when pointer color is 'auto' in [gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series.gauge). See [#5109](https://github.com/apache/incubator-echarts/issues/5109).

+ [^] Fixed the problem when [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) is `false`. See [#4944](https://github.com/apache/incubator-echarts/issues/4944).

+ Fixed the initialization of series-treemap.data is incorrect in one case.

+ Fixed the style of [toolbox](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox). See [#3591](https://github.com/apache/incubator-echarts/issues/3591).

+ Enhanced the behavior of [brush](https://ecomfe.github.io/echarts-doc/public/en/option.html#brush) on category axis.

+ [^] Fixed that visualMap is abnormal when some item of [visualMap-piecewise.categories](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.categories) is numberic string. See [#4960](https://github.com/apache/incubator-echarts/issues/4960).



## v3.4.0
<div class="time">2017-01-12</div>

+ **[+] Published `pictorialBar` chart：[pictorialBar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pictorialBar). See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-pictorialBar).**

+ **[+] Published `themeRiver` chart：[themeRiver](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-themeRiver).See [example](https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-themeRiver).**

+ [+] A specified [geo coordinate system](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) has been able to be used in [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map). (In the past map series could only creat an inner exclusive geo coodinate system). Thus, [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) can be used to control color of a geo component. Moreover, a geo coordinate system can be shared among [map series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) and other series, like [scatter series](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-scatter). See [series-map.geoIndex](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map.geoIndex).

+ [+] Added [focusNodeAdjacency action](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.graph.focusNodeAdjacency), which enables trigger adjacent highlight of [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-geo) through API.

+ [+] Added [series-pie.animationType](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie.animationType), which enables more animation effects.

+ [+] Callback function have been supported in [animationDuration](https://ecomfe.github.io/echarts-doc/public/en/option.html#animationDuration), which enables different animation duration of data items.

+ [+] [min](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.min) and [max](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.max) have been supported in [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type).

+ [+] [category axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#xAxis.type) has been changed to show all categories by default, in spite of whether there is data in categories. In the past, categories in the end that has no data will not be displayed.

+ [+] When using [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis), `series.data` has supported one-dimension array, like `[11, 23, 44]`.

+ [+] [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom) has supported [singleAxis](https://ecomfe.github.io/echarts-doc/public/en/option.html#singleAxis).

+ [+] Exposed throttle util method: `chart.util.throttle`.

+ [+] [candlestick](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick) has supported [barWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barWidth), [barMinWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMinWidth) and [barMaxWidth](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-candlestick.barMaxWidth). See [#4783](https://github.com/apache/incubator-echarts/issues/4783).

+ [+] [lines chart](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines) has supported [symbol](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbol), [symbolSize](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-lines.symbolSize).

+ [+] Added support for show end text and data label at the same time in [visualMap-piecewise](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise). See [visualMap-piecewise.showLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap-piecewise.showLabel), and See [#4845](https://github.com/apache/incubator-echarts/issues/4845).

+ [+] When using [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) to control a series, it has supported that some data items escape from the control by visualMap, but use its series visual settings (color, symbol, ...). See the paragraph of `Configure mapping` in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enhanced the effect of [grid (cartesian)](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid) when on data displayed.

+ [^] Added parameter `dataIndex` in [showTip event](https://ecomfe.github.io/echarts-doc/public/en/api.html#action.tooltip.showTip).

+ [^] Fixed vulnerability about XSS in tooltip. See [#4769](https://github.com/apache/incubator-echarts/issues/4769).

+ [^] Fixed that some attributes did not work in [series-graph.edgeLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph.edgeLabel). See [#4555](https://github.com/apache/incubator-echarts/issues/4555).

+ [^] Fixed tick render problem when `min` `max` is `stirng` in [series-gauge](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge). See [#4617](https://github.com/apache/incubator-echarts/issues/4617).

+ [^] Fixed [series-gauge.pointer.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-gauge.pointer.show) problem. See [#4618](https://github.com/apache/incubator-echarts/issues/4618).

+ [^] Fixed [series-radar](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-radar) render error in a case that no data exists.

+ [^] Fixed [markArea.label.normal.show](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.markArea.label.normal.show) problem. See [#4723](https://github.com/apache/incubator-echarts/issues/4723).

+ [^] Enhanced the process when data is equals or less then zero in [log axis](https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.type). See [#4743](https://github.com/apache/incubator-echarts/issues/4743) and [#3161](https://github.com/apache/incubator-echarts/issues/3161).


## v3.3.2
<div class="time">2016-11-24</div>

+ [+] **Add [graphic](https://ecomfe.github.io/echarts-doc/public/en/option.html#graphic) in option, enable graphic configuration in option. See examples: <http://echarts.baidu.com/gallery/editor.html?c=line-y-category>, <http://echarts.baidu.com/gallery/editor.html?c=line-draggable> and <http://echarts.baidu.com/gallery/editor.html?c=map-province>.**

+ [+] Add [visualMin](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMin) and [visualMax](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap.visualMax), and enhance capability of visual mapping in [treemap](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-treemap). See [#2509](https://github.com/apache/incubator-echarts/issues/2509).

+ [+] Add [tooltip.confine](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip.confine), which can confine tooltip within contianer of echarts instance. It helps a lot in small screen, or in the situation that outer dom is set to be `overflow:hidden`.

+ [^] Fix that erroneously forbiden default pan behavior in touch device. See [#4393](https://github.com/apache/incubator-echarts/issues/4393).

+ [^] Enhance user experience for [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [map](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-map) in touche device.

+ [^] Fix calculation error of [containPixel](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.containPixel) in [geo](https://ecomfe.github.io/echarts-doc/public/en/option.html#geo) / [graph](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-graph). See [#4405](https://github.com/apache/incubator-echarts/issues/4405).

+ [^] Enhance gradient [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap) for [line](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line).

+ [^] Fix symbol mapping in [visualMap](https://ecomfe.github.io/echarts-doc/public/en/option.html#visualMap).

+ [^] Enable [realtime](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom.realtime) upating of label in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4434](https://github.com/apache/incubator-echarts/issues/4434).

+ [^] Fix highlight error in [dataZoom](https://ecomfe.github.io/echarts-doc/public/en/option.html#dataZoom). See [#4475](https://github.com/apache/incubator-echarts/issues/4475).

+ [^] Fix that can not save as image in MS Edge browser. See [#2451](https://github.com/apache/incubator-echarts/issues/2451) and [#3586](https://github.com/apache/incubator-echarts/issues/3586).

+ [^] Fix format problem for `'time'` axis in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip). See [#4398](https://github.com/apache/incubator-echarts/issues/4398).

+ [^] Fix [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) may not show bug when first series have null data.

+ [^] Fix [grid.containLabel](https://ecomfe.github.io/echarts-doc/public/en/option.html#grid.containLabel) not works for large fontSize. See [#3805](https://github.com/apache/incubator-echarts/issues/3805).

+ [^] Fix `echarts.extendSeriesModel` error. See [#4397](https://github.com/apache/incubator-echarts/issues/4397).

+ [^] Fix render error when `clockwise` is `false` and `minAngle` is used in [pie](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-pie). See [#4414](https://github.com/apache/incubator-echarts/issues/4414).

+ [^] Fix erroneously rendering dot in [tooltip](https://ecomfe.github.io/echarts-doc/public/en/option.html#tooltip) when using gradient color. See [#3994](https://github.com/apache/incubator-echarts/issues/3994).


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

+ [^] position optimization of average, minimum and maximum value starting point and finishing point. Fix [#2762](https://github.com/apache/incubator-echarts/issues/2762), [#2688](https://github.com/apache/incubator-echarts/issues/2688).

+ [^] fix the only one configuration for ''none'' bug in markLine symbol. See [#2733](https://github.com/apache/incubator-echarts/issues/2733)

+ [^]optimization of vertically centered multiple yext lines.

+ [^] emphasis configuration item of label in data item as pie chart is normal value by dafualt.

+ [^] when introdcued on need, line chart, pie chart and scatter chart introduce grid component by dafault to avoid problems in[#2758](https://github.com/apache/incubator-echarts/issues/2758).

+ [^] fix floating point precision bug in dataZoom component. Fix [#2757](https://github.com/apache/incubator-echarts/issues/2757)

+ [^] unselected legend chart is grey. See [#2615](https://github.com/apache/incubator-echarts/issues/2615)

+ [^] fix  dataZoom position failure bug in media query of 3.1.1. Fix [#2710](https://github.com/apache/incubator-echarts/issues/2710)

+ [^] fix firefox's incapability of triggering wheel events bug in 3.1.1 中. Fix [#2730](https://github.com/apache/incubator-echarts/issues/2730)

+ [^] IE8 optimization.

+ [^] change to webpack to build code.


## v3.1.2
<div class="time">2016-03-01</div>

+ 【\+】provide theme download,see details in [http://echarts.baidu.com/download-theme.html](http://echarts.baidu.com/download-theme.html)

+ [^] fix `the bug that update data can not be shown in `setOption` after emptying line chart data in v3.1.1.

+ [^] fix possiblity of reporting `id duplicates` error in `setOption(chart.getOption())` . Fix [#2635](https://github.com/apache/incubator-echarts/issues/2635)

+ [^] allow to customize toolbox toobar. See details in [toolbox.feature](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature)

+ [^] scale optimization of `'time'` type axis in large-span time range.

+ [^] fix no show of label formatter return to  0.Fix [#2659](https://github.com/apache/incubator-echarts/issues/2659)

+ [^] fix markPoint label display error in charts with vertical axis as category axis.Fix [#2641](https://github.com/apache/incubator-echarts/issues/2641)

+ [^] optimize dataZoom, fix dynamic data update problem in dataZoom chart. Fix [#2667](https://github.com/apache/incubator-echarts/issues/2667)

+ [^] percentage is 0 rather than NaN when all pie chart data are zero. Fix [#2690](https://github.com/apache/incubator-echarts/issues/2667)

+ [^] title alignment optimization.

+ [^] support display of tooltip when charts update. Fix [#2478](https://github.com/apache/incubator-echarts/issues/2478)

+ [^] dashboard `splitLine.length`, `axisTick.length` supports percentage.

+ [^] optimization of line animation feature.

+ [^] optimization of category axis feature of large data amount .

+ [^] fix error reporting bug of markPoint and markLine in IE8.

+ [^] fix error reporting bug under `'use strict'`model. Fix [#2643](https://github.com/apache/incubator-echarts/issues/2643)


## v3.1.1
<div class="time">2016-02-22</div>

+ 【\+】newly add npm channel to obtain echarts, see details in [webpack + echarts tutorial](http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

+ [^] fix abnormal indynamic markPoint and markLine . Fix [#2522](https://github.com/apache/incubator-echarts/issues/2522)

+ [^] fix parameter error in axis interval callback. Fix [#2470](https://github.com/apache/incubator-echarts/issues/2470)

+ [^] fix failure in customizing lineStyle of every edge in graph. Fix [#2558](https://github.com/apache/incubator-echarts/issues/2558)

+ [^] saveAsImage supports IE9+ and FireFox in toolbox.

+ [^] support cylindrical corner configuration. [#2550](https://github.com/apache/incubator-echarts/issues/2550)

+ [^] fix error in dataZoom location configuration item. Fix [#2619](https://github.com/apache/incubator-echarts/issues/2619)

+ [^] fix possible `id duplicate` error when fix `setOption` for too many times.Fix [#2452](https://github.com/apache/incubator-echarts/issues/2452)

+ [^] candlestick and boxplot chart support markPoint and markLine.Fix [#2566](https://github.com/apache/incubator-echarts/issues/2566)

+ [^] fix reset error in toolbox after use `setOption` in non-merge model.Fix [#2596](https://github.com/apache/incubator-echarts/issues/2596)

+ [^] scatter chart and markPoint support configurating `label` `formatter` in `emphasis`. Fix [#2596](https://github.com/apache/incubator-echarts/issues/2596)

+ [^] Treemap supports `roam` configuration item.

+ [^] axis of time type support time data of string format.

+ [^] fix switch problem in Line and area charts. Fix [#2625](https://github.com/apache/incubator-echarts/issues/2625)

+ [^] location optimization of multiple series of bar chart markPoint. Fix [#2623](https://github.com/apache/incubator-echarts/issues/2623)

+ [^] fix error reporting in init when theme is string and has dataZoom component. Fix [#2619](https://github.com/apache/incubator-echarts/issues/2619)

+ [^] legend and toolbox support setting height and width and wrap automatically through width and height.Fix [#2621](https://github.com/apache/incubator-echarts/issues/2621)

+ [^] optimization of line chart smooth, add in`smoothMonotone` configuration item, see details in [option.html#series-line.smoothMonotone](https://ecomfe.github.io/echarts-doc/public/en/option.html#series-line.smoothMonotone), Fix [#2612](https://github.com/apache/incubator-echarts/issues/2612)

+ [^] fix incapability to trigger mouse events on computers with touch screen like Surface and so on. Fix [#2569](https://github.com/apache/incubator-echarts/issues/2569)

## v3.0.2
<div class="time">2016-01-23</div>

+ [^] fix highlight failture in scatter chart.

+ [^] optimize tooltip linkage. Fix [#2445](https://github.com/apache/incubator-echarts/issues/2445)

+ [^] dataZoom of inside type support zoomLock.

+ [^] add error alert of non-exist map type.

+ [^] optimize legend switch animation of line chart.

+ [^] fix problem about Legends cannot be added dynamically. Fix [#2457](https://github.com/apache/incubator-echarts/issues/2457)

+ [^] fix timeline's incapability to configutate show.

+ [^] fix 0 data shown as undefined in tooltip .Fix [#2463](https://github.com/apache/incubator-echarts/issues/2463)

+ [^] fix incorrect display of dataZoom zoom graphic. Fix [#2462](https://github.com/apache/incubator-echarts/issues/2462)

+ [^] fix the problem of axis `min` `max` as string, PR [#2481](https://github.com/apache/incubator-echarts/pull/2481)

## v3.0.1
<div class="time">2016-01-18</div>

+ [+] add [getOption](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.getOption) and [clear](https://ecomfe.github.io/echarts-doc/public/en/api.html#echartsInstance.clear) method

+ [^] fix average value, maximum value and minimum vaule label and the incapability to show correct value of tooltip. Fix [#2393](https://github.com/apache/incubator-echarts/issues/2393)

+ [^] fix drawing incorrectness when bar chart  has bigger width than height, Fix [#2343](https://github.com/apache/incubator-echarts/issues/2343)

+ [^] fix the function problem of legend `show` configuration item. Fix [#2371](https://github.com/apache/incubator-echarts/issues/2371)

+ [^] map type can choose data attribute.

+ [^] fix average mark and mark calculation errors, Fix [#2367](https://github.com/apache/incubator-echarts/issues/2367)

+ [^] animation optimization when line chart change from `'-'` no data to data.

+ [^] mouse wheel zoom direction change to ommonly used one.

+ [^] data area zoom tool in toolbar support specified axis, see detail in[toolbox document](https://ecomfe.github.io/echarts-doc/public/en/option.html#toolbox.feature.dataZoom.yAxisIndex)

+ [^] fix no data error on timeline, scale change from `[-1, 1]` to `[0, 1]` when data value axis has no data.

+ [^] fix drawing error of axis splitArea.

+ [^] fix multiple chart example linkage problem. Fix [#2391](https://github.com/apache/incubator-echarts/issues/2391)

+ [^] fix the problem that color on legend cannot display correctly with pie chart color being callback function. Fix [#2372](https://github.com/apache/incubator-echarts/issues/2372)

+ [^] fix mouse hover errors when pie chart data is 0.

+ [^] when all pie chart data are 0, secotrs changed to uniform distribution.

+ [^] fix errors in background seeting under IE 8.

+ [^] fix incorrect release event in tooltip component dispose.

## v3.0.0
<div class="time">2016-01-12</div>

+ The new echarts
