var fs = require('fs');
var buildingsData = JSON.parse(fs.readFileSync('./buildings.json', 'utf-8'));
var compress = require('./compress');

var features = buildingsData.features.map(function (feature, idx) {
    return {
        type: 'Feature',
        properties: {
            name: idx.toString()
        },
        geometry: feature.geometry
    };
}).slice(0, 8000);

fs.writeFileSync('buildings.json.js', 'buildingsGeoJSON = ' + JSON.stringify(compress({ features: features })), 'utf-8');