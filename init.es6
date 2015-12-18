var fs = require('fs');
[
    'grid', 'polar', 'xAxis', 'yAxis', 'radiusAxis', 'angleAxis', 'legend', 'title', 'dataZoom', 'dataRange', 'tooltip', 'parallel', 'parallelAxis'
].forEach(function (compName) {
    var fileName = 'src/component/' + compName + '.md';
    var content = `
{{target: component-${compName}}}

# ${compName}(Object)

{{use: component-common}}
    `;
    fs.writeFileSync(fileName, content, 'utf-8');
});
[
   'treemap', 'boxplot', 'candlestick', 'effectScatter', 'funnel', 'gauge', 'geoLine', 'graph', 'heatmap', 'map', 'parallel', 'radar'
].forEach(function (seriesType) {
    var fileName = 'src/series/' + seriesType + '.md';
    var content = `
{{target: series-${seriesType}}}

# series.${seriesType}(Object)

## type(string) = '${seriesType}'

{{use: series-common}}
    `;
    fs.writeFileSync(fileName, content, 'utf-8');
});

