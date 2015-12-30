
{{target: component-parallelAxis}}

# parallelAxis(Object)
依赖parallel组建里面的[parallelAxisDefault](~component(parallel).parallelAxisDefault)默认配置

{{use: component-common}}

纵向坐标轴数组，如'{dim: 0, name: "pm2.5", inverse: true, max: 31, nameLocation: "start"}'

## dim(number)

单个坐标系纬度标示

## name(string)

坐标轴名称

## inverse(boolean)

是否逆向在坐标轴上展示刻度，默认false，即从下到上

## nameLocation(string)

坐标轴名称显示位置，取值start、end

## max(number)

坐标轴刻度最大值，只在坐标轴取值为数值型时有效

### type(string)

坐标轴类型，默认value，可选category

### data(Array)

仅当type为category时有效，坐标轴数据数组，只支持字符串类型，如['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']