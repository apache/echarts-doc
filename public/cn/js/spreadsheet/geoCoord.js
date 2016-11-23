/**
 * @file geoCoord query.
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var dtLib = require('dt/lib');
    var latinize = require('latinize');
    var latlong = require('./geoData/latlong.json');
    var globalRegions = {
        'zh_CN': require('./geoData/globalRegion-zh_CN.json'),
        'en': require('./geoData/globalRegion-en.json')
    };
    var globalRegionAlias = require('./geoData/globalRegionAlias');

    var REPLACE_LIST = [
        ['&', 'and'],
        ['St. ', 'Saint ']
    ];

    var geoMap = makeGeoMap();

    function makeGeoMap() {
        var geoMap = [];

        for (var a2 in latlong) {
            if (latlong.hasOwnProperty(a2)) {
                var item = {
                    a2: a2,
                    coord: [latlong[a2].longitude, latlong[a2].latitude],
                    names: {},
                    namesLowerCase: {},
                    alias: {},
                    aliasLowerCase: {}
                };

                geoMap.push(item);

                addNames('zh_CN', item);
                addNames('en', item, true);

                addAlias('zh_CN', item);
                addAlias('en', item, true);
            }
        }

        function addNames(lang, item, en) {
            var names = item.names[lang] = [];
            var namesLowerCase = item.namesLowerCase[lang] = [];
            var name = globalRegions[lang][item.a2];

            if (name) {
                doAdd(name, names, namesLowerCase, en);
            }
        }

        function addAlias(lang, item, en) {
            var alias = item.alias[lang] = [];
            var aliasLowerCase = item.aliasLowerCase[lang] = [];
            var al = globalRegionAlias[lang][item.a2];

            if (al) {
                for (var i = 0; i < al.length; i++) {
                    doAdd(al[i], alias, aliasLowerCase, en);
                }
            }
        }

        function doAdd(name, names, namesLowerCase, en) {
            names.push(name);
            namesLowerCase.push(name.toLowerCase());

            // Convert some latin character to ASCII, e.g., Åland Islands.
            if (en) {
                var nameASC = latinize(name);
                if (nameASC !== name) {
                    names.push(nameASC);
                    namesLowerCase.push(nameASC.toLowerCase());
                }

                var nameReplaced = name;
                for (var i = 0; i < REPLACE_LIST.length; i++) {
                    var item = REPLACE_LIST[i];
                    if (nameReplaced.indexOf(item[0]) >= 0) {
                        nameReplaced = nameReplaced.replace(item[0], item[1]);
                        names.push(nameReplaced);
                        namesLowerCase.push(nameReplaced.toLowerCase());
                    }
                }
            }
        }

        return geoMap;
    }

    function findInLang(names, name) {
        if (names) {
            for (var j = 0; j < names.length; j++) {
                if (names[j] === name) {
                    return true;
                }
            }
        }
    }

    return {
        query: function (name) {
            if (name == null) {
                name = '';
            }
            name = $.trim(name + '').toLowerCase();

            for (var i = 0; i < geoMap.length; i++) {
                var item = geoMap[i];

                if (item.a2.toLowerCase() === name) {
                    return dtLib.clone(item);
                }
                if (findInLang(item.namesLowerCase['zh_CN'], name)
                    || findInLang(item.namesLowerCase['en'], name)
                    || findInLang(item.aliasLowerCase['zh_CN'], name)
                    || findInLang(item.aliasLowerCase['en'], name)
                ) {
                    return dtLib.clone(item);
                }
            }
        }
    };
});
