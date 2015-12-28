
{{target: component-parallel}}

# parallel(Object)

{{use: component-common}}

## parallelAxisDefault(Object)

### name(string)

默认坐标轴名称

### inverse(boolean)

是否逆向在坐标轴上展示刻度，默认false，即从下到上

### nameLocation(string)

坐标轴名称显示位置，取值start、end

### nameGap(number)

坐标轴名称距离坐标轴的距离，如20

### nameTextStyle(Object)
坐标轴名称样式
{{use: partial-text-style(prefix="###")}}

### axisLine(Object)
刻度线样式
#### lineStyle(Object)
{{use: partial-line-style(prefix="####")}}

### axisTick(Object)
刻度样式
#### lineStyle(Object)
{{use: partial-line-style(prefix="####")}}

### axisLabel(Object)
刻度文字样式
#### lineStyle(Object)
{{use: partial-line-style(prefix="####")}}

### max(number)

坐标轴刻度最大值，只在坐标轴取值为数值型时有效

### type(string)

坐标轴类型，默认value，可选category

### data(Array)

仅当type为category时有效，坐标轴数据数组，只支持字符串类型，如['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']




