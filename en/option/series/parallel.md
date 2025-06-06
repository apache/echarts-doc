
{{ target: series-parallel }}

# series.parallel(Object)

The series in parallel coordinate system.

{{ use: partial-parallel-introduce() }}

<ExampleBaseOption name="parallel-series" title="Parallel Series" title-en="Parallel">
const dataBJ = [
    [1,55,9,56,0.46,18,6,"Moderate"],
    [2,25,11,21,0.65,34,9,"Good"],
    [3,56,7,63,0.3,14,5,"Moderate"],
    [4,33,7,29,0.33,16,6,"Good"],
    [5,42,24,44,0.76,40,16,"Good"],
    [6,82,58,90,1.77,68,33,"Moderate"],
    [7,74,49,77,1.46,48,27,"Moderate"],
    [8,78,55,80,1.29,59,29,"Moderate"],
    [9,267,216,280,4.8,108,64,"Very Unhealthy"],
    [10,185,127,216,2.52,61,27,"Unhealthy"],
    [11,39,19,38,0.57,31,15,"Good"],
    [12,41,11,40,0.43,21,7,"Good"],
    [13,64,38,74,1.04,46,22,"Moderate"],
    [14,108,79,120,1.7,75,41,"Unhealthy for Sensitive Groups"],
    [15,108,63,116,1.48,44,26,"Unhealthy for Sensitive Groups"],
    [16,33,6,29,0.34,13,5,"Good"],
    [17,94,66,110,1.54,62,31,"Moderate"],
    [18,186,142,192,3.88,93,79,"Unhealthy"],
    [19,57,31,54,0.96,32,14,"Moderate"],
    [20,22,8,17,0.48,23,10,"Good"],
    [21,39,15,36,0.61,29,13,"Good"],
    [22,94,69,114,2.08,73,39,"Moderate"],
    [23,99,73,110,2.43,76,48,"Moderate"],
    [24,31,12,30,0.5,32,16,"Good"],
    [25,42,27,43,1,53,22,"Good"],
    [26,154,117,157,3.05,92,58,"Unhealthy"],
    [27,234,185,230,4.09,123,69,"Very Unhealthy"],
    [28,160,120,186,2.77,91,50,"Unhealthy"],
    [29,134,96,165,2.76,83,41,"Unhealthy for Sensitive Groups"],
    [30,52,24,60,1.03,50,21,"Moderate"],
    [31,46,5,49,0.28,10,6,"Good"]
];

const dataGZ = [
    [1,26,37,27,1.163,27,13,"Good"],
    [2,85,62,71,1.195,60,8,"Moderate"],
    [3,78,38,74,1.363,37,7,"Moderate"],
    [4,21,21,36,0.634,40,9,"Good"],
    [5,41,42,46,0.915,81,13,"Good"],
    [6,56,52,69,1.067,92,16,"Moderate"],
    [7,64,30,28,0.924,51,2,"Moderate"],
    [8,55,48,74,1.236,75,26,"Moderate"],
    [9,76,85,113,1.237,114,27,"Moderate"],
    [10,91,81,104,1.041,56,40,"Moderate"],
    [11,84,39,60,0.964,25,11,"Moderate"],
    [12,64,51,101,0.862,58,23,"Moderate"],
    [13,70,69,120,1.198,65,36,"Moderate"],
    [14,77,105,178,2.549,64,16,"Moderate"],
    [15,109,68,87,0.996,74,29,"Unhealthy for Sensitive Groups"],
    [16,73,68,97,0.905,51,34,"Moderate"],
    [17,54,27,47,0.592,53,12,"Moderate"],
    [18,51,61,97,0.811,65,19,"Moderate"],
    [19,91,71,121,1.374,43,18,"Moderate"],
    [20,73,102,182,2.787,44,19,"Moderate"],
    [21,73,50,76,0.717,31,20,"Moderate"],
    [22,84,94,140,2.238,68,18,"Moderate"],
    [23,93,77,104,1.165,53,7,"Moderate"],
    [24,99,130,227,3.97,55,15,"Moderate"],
    [25,146,84,139,1.094,40,17,"Unhealthy for Sensitive Groups"],
    [26,113,108,137,1.481,48,15,"Unhealthy for Sensitive Groups"],
    [27,81,48,62,1.619,26,3,"Moderate"],
    [28,56,48,68,1.336,37,9,"Moderate"],
    [29,82,92,174,3.29,0,13,"Moderate"],
    [30,106,116,188,3.628,101,16,"Unhealthy for Sensitive Groups"],
    [31,118,50,0,1.383,76,11,"Unhealthy for Sensitive Groups"]
];

const dataSH = [
    [1,91,45,125,0.82,34,23,"Moderate"],
    [2,65,27,78,0.86,45,29,"Moderate"],
    [3,83,60,84,1.09,73,27,"Moderate"],
    [4,109,81,121,1.28,68,51,"Unhealthy for Sensitive Groups"],
    [5,106,77,114,1.07,55,51,"Unhealthy for Sensitive Groups"],
    [6,109,81,121,1.28,68,51,"Unhealthy for Sensitive Groups"],
    [7,106,77,114,1.07,55,51,"Unhealthy for Sensitive Groups"],
    [8,89,65,78,0.86,51,26,"Moderate"],
    [9,53,33,47,0.64,50,17,"Moderate"],
    [10,80,55,80,1.01,75,24,"Moderate"],
    [11,117,81,124,1.03,45,24,"Unhealthy for Sensitive Groups"],
    [12,99,71,142,1.1,62,42,"Moderate"],
    [13,95,69,130,1.28,74,50,"Moderate"],
    [14,116,87,131,1.47,84,40,"Unhealthy for Sensitive Groups"],
    [15,108,80,121,1.3,85,37,"Unhealthy for Sensitive Groups"],
    [16,134,83,167,1.16,57,43,"Unhealthy for Sensitive Groups"],
    [17,79,43,107,1.05,59,37,"Moderate"],
    [18,71,46,89,0.86,64,25,"Moderate"],
    [19,97,71,113,1.17,88,31,"Moderate"],
    [20,84,57,91,0.85,55,31,"Moderate"],
    [21,87,63,101,0.9,56,41,"Moderate"],
    [22,104,77,119,1.09,73,48,"Unhealthy for Sensitive Groups"],
    [23,87,62,100,1,72,28,"Moderate"],
    [24,168,128,172,1.49,97,56,"Unhealthy"],
    [25,65,45,51,0.74,39,17,"Moderate"],
    [26,39,24,38,0.61,47,17,"Good"],
    [27,39,24,39,0.59,50,19,"Good"],
    [28,93,68,96,1.05,79,29,"Moderate"],
    [29,188,143,197,1.66,99,51,"Unhealthy"],
    [30,174,131,174,1.55,108,50,"Unhealthy"],
    [31,187,143,201,1.39,89,53,"Unhealthy"]
];

const schema = [
    {name: 'date', index: 0, text: 'Date'},
    {name: 'AQIindex', index: 1, text: 'AQI'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: ' CO'},
    {name: 'NO2', index: 5, text: 'NO2'},
    {name: 'SO2', index: 6, text: 'SO2'},
    {name: 'level', index: 7, text: 'Level'}
];

const option = {
    color: [
        '#c23531', '#91c7ae', '#dd8668'
    ],
    legend: {
        top: 10,
        data: ['Beijing', 'Shanghai', 'Guangzhou'],
        itemGap: 20
    },
    parallelAxis: [
        {dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
        type: 'category', data: ['Good', 'Moderate', 'Unhealthy for Sensitive Groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous']}
    ],
    parallel: {
        left: '5%',
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI Index',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 12
            }
        }
    },
    series: [
        {
            name: 'Beijing',
            type: 'parallel',
            data: dataBJ
        },
        {
            name: 'Shanghai',
            type: 'parallel',
            data: dataSH
        },
        {
            name: 'Guangzhou',
            type: 'parallel',
            data: dataGZ
        }
    ]
};
</ExampleBaseOption>

## type(string) = 'parallel'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-coord-sys(
    seriesType = "parallel",
    coordSysDefault = "'parallel'",
    parallel = true
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-parallel-line-style(
    prefix = "#"
) }}

## inactiveOpacity(number) = 0.05

<ExampleUIControlNumber min="0" max="1" default="0.05" step="0.01" />

When perform brush selection, the unselected lines will be set as this transparency rate (which could darken those lines).

## activeOpacity(number) = 1

<ExampleUIControlNumber min="0" max="1" default="1" step="0.01" />

When perform brush selection, the selected lines will be set as this transparency rate (which could highlight those lines).

## realtime(boolean) = true

<ExampleUIControlBoolean default="true" />

Whether to update view in realtime.

## smooth(boolean|number) = false

<ExampleUIControlBoolean />

Whether to smooth the line. It defaults to be `false` and can be set as `true` or the values from 0 to 1 which indicating the smoothness.

{{ use: partial-progressive(
    prefix = '#',
    supportProgressiveChunkMode = true,
    defaultProgressive = 500
) }}

## data(Array)

{{ use: partial-parallel-data-example() }}

### name(string)

The name of a data item.

### value(Array)

The value of a data item.

{{ use: partial-parallel-line-style(
    prefix = "##"
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "parallel"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#",
    defaultAnimationEasing = 'linear'
) }}



{{ target: partial-parallel-line-style }}

#${prefix} lineStyle(Object)

Line style.

{{ use: partial-line-style(
    prefix = "#" + ${prefix},
    defaultWidth = 1,
    defaultOpacity = 0.45
) }}

#${prefix} emphasis(Object)

{{ use: partial-emphasis-disabled(
    prefix = "#" + ${prefix}
) }}

##${prefix} lineStyle(Object)

Line style in emphasis state.

{{ use: partial-line-style(
    prefix = "##" + ${prefix},
    defaultWidth = 1,
    defaultOpacity = 0.45
) }}

