+ 入门教程
    + 获取和引入 ECharts
    + 使用 ECharts 画出你的第一个图表

+ 高级教程
    + 在图表中加入交互组件（图例，dataZoom）
    + 异步数据和动态数据
    + 通过 JS API 自定义交互
    + ECharts 中的坐标系
    + ECharts 中的数据和视觉编码（dataRange）
    + 使用主题

+ Option 参考手册
    + Option 的组织方式
    + global
        + backgroundColor
        + color
        + animation
        + animationEasing
        + animationDuration
        + animationEasingUpdate
        + animationDurationUpdate
        + textStyle
    + components
        + {componentCommon}
            + z
            + zlevel
            + show
            + x
            + y
            + x2
            + y2
            + width
            + height
        + title, $mixin({componentCommon})
            + text
            + subtext
            + backgroundColor
            + borderColor
            + borderWidth
            + padding
            + itemGap
            + textStyle
            + subtextStyle
        + legend, $mixin({componentCommon})
            + orient
            + align
            + backgroundColor
            + borderColor
            + borderWidth
            + padding
            + itemGap
            + itemWidth
            + itemHeight
            + textStyle
            + selectedMode
            + selected
            + data
        + axis, $mixin({componentCommon})
            + inverse
            + name
            + nameLocation
            + nameTextStyle
            + nameGap
            + axisLine
            + axisTick
            + axisLabel
            + splitLine
            + splitArea
        + valueAxis, $mixin(axis)
            + boundaryGap
            + splitNumber
            + interval
            + min: null
            + max: null
            + scale: false
        + categoryAxis, $mixin(axis)
            + boundaryGap
            + axisTick
        + timeAxis, $mixin(valueAxis)
            + scale: true
            + min: 'dataMin'
            + max: 'dataMax'
        + logAxis, $mixin(valueAxis)
            + scale: true
        + grid, $mixin({componentCommon})
            + width
            + height
            + containLabel
            + backgroundColor
            + borderWidth
            + borderColor
        + xAxis, $mixin(this.type + 'Axis')
            + type
        + yAxis, $mixin(this.type + 'Axis')
            + type
        + polar, $mixin({componentCommon})
            + center
            + radius
        + angleAxis, $mixin(this.type + 'Axis')
            + type
        + radiusAxis, $mixin(this.type + 'Axis')
            + type
        + geo, $mixin({componentCommon})
            + map
            + roamDetail
            + label
            + itemStyle
        + dataZoom, $mixin({componentCommon})
            + type
            + orient
            + xAxisIndex
            + filterMode
            + start
            + end
            + start2（这俩是否还在用）
            + end2
            + backgroundColor
            + dataBackgroundColor
            + fillerColor
            + handleColor
            + handleSize
            + labelPrecision
            + labelFormatter
            + showDetail
            + showDataShadow
            + realtime
            + zoomLock
            + textStyle
        + dataRange, $mixin({componentCommon})
            + min
            + max
            + categories
            + dimension
            + inRange
            + outOfRange
            + orient
            + inverse
            + seriesIndex
            + splitNumber
            + splitList
            + selectedMode
            + itemGap
            + backgroundColor
            + borderColor
            + contentColor
            + inactiveColor
            + borderWidth
            + padding
            + textGap
            + itemWidth
            + itemHeight
            + precision
            + text
            + textStyle
        + toolbox, $mixin({componentCommon})
        + markLine, $mixin({componentCommon})
        + markPoint, $mixin({componentCommon})
    + series
        + {seriesCommon}
            + z
            + zlevel
            + x
            + y
            + x2
            + y2
            + width
            + height
            + coordinateSystem
            + legendHoverLink
            + animation
            + animationEasing
            + animationUpdate
            + animationEasingUpdate
        + bar, $mixin({seriesCommon})
            + stack
            + xAxisIndex
            + yAxisIndex
            + barMinHeight
            + barMaxWidth
            + barGap
            + barCategoryGap
            + label
            + itemStyle
        + line, $mixin({seriesCommon})
            + stack
            + xAxisIndex
            + yAxisIndex
            + polarIndex
            + hoverAnimation
            + label
            + itemStyle
            + lineStyle
            + areaStyle,
            + smooth
            + symbol
            + symbolSize
            + symbolRotate
            + showSymbol
            + showAllSymbol
        + pie, $mixin({seriesCommon})
            + hoverAnimation
            + center
            + radius
            + clockwise
            + startAngle
            + minAngle
            + selectedOffset
            + avoidLabelOverlap
            + selectedMode
            + roseType
            + label
            + labelLine
            + itemStyle
        + scatter
            + xAxisIndex
            + yAxisIndex
            + polarIndex
            + geoIndex
            + symbol
            + symbolSize
            + large
            + largeThreshold
            + itemStyle
        + funnel
            + min
            + max
            + minSize
            + maxSize
            + sort
            + gap
            + funnelAlign
            + label
            + labelLine
            + itemStyle
        + gauge
            + center
            + radius
            + startAngle
            + endAngle
            + clockwise
            + min
            + max
            + splitNumber
            + axisLine
            + splitLine
            + axisTick
            + axisLabel
            + pointer
            + itemStyle
            + title
            + detail
        + candlestick
        + boxplot
        + heatmap
        + treemap
        + graph
        + geoLine
        + sankey