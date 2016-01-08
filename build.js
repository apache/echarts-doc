var marked = require('marked');
var etpl = require('etpl');
var glob = require('glob');
var fs = require('fs');

etpl.config({
    commandOpen: '{{',
    commandClose: '}}'
});

etpl.addFilter('default', function (source, defaultVal) {
    return (source === '' || source == null) ? defaultVal : source;
});

var componentsHasType = ['visualMap', 'dataZoom', 'series'];
glob('cn/option/**/*.md', function (err, files) {
    var mdTpl = files.filter(function (fileName) {
        return fileName.indexOf('__') !== 0;
    }).map(function (fileName) {
        return fs.readFileSync(fileName, 'utf-8');
    });

    // Render tpl
    etpl.compile(mdTpl.join('\n'));
    var mdStr = etpl.getRenderer('echarts')(require('./config'));
    // Markdown to JSON
    var schema = mdToJsonSchema(mdStr);
    // console.log(mdStr);
    var topLevel = schema.option.properties;
    componentsHasType.forEach(function (componentName) {
        var newProperties = schema.option.properties = {};
        for (var name in topLevel) {
            if (name.indexOf(componentName) >= 0) {
                newProperties[componentName] = newProperties[componentName] || {
                    'type': 'Array',
                    'items': {
                        'anyOf': []
                    }
                };
                // Use description in excatly #series
                if (componentName === name) {
                    newProperties[componentName].descriptionCN = topLevel[name].descriptionCN;
                }
                else {
                    newProperties[componentName].items.anyOf.push(topLevel[name]);
                }
            }
            else {
                newProperties[name] = topLevel[name];
            }
        }
        topLevel = newProperties;
    });

    console.log(JSON.stringify(schema, null, 2));
});

var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    if (href.match(/^~/)) { // Property link
        return '<a href="#' + href.slice(1) + '">' + text + '</a>';
    }
    else {
        // All other links are opened in new page
        return '<a href="' + href + '" target="_blank">' + text + '</a>';
    }
};

function mdToJsonSchema(mdStr) {

    var currentLevel = 0;
    var result = {
        '$schema': 'http://echarts.baidu.com/doc/json-schem',
        'option': {
            'type': 'Object',
            'properties': {},
        }
    };
    var current = result.option;
    var stacks = [current];

    function top() {
        return stacks[stacks.length - 1];
    }

    function _unescape(html) {
        return html.replace(/&([#\w]+);/g, function(_, n) {
            n = n.toLowerCase();
            if (n === 'colon') return ':';
            if (n.charAt(0) === '#') {
                return n.charAt(1) === 'x'
                    ? String.fromCharCode(parseInt(n.substring(2), 16))
                    : String.fromCharCode(+n.substring(1));
            }
            return '';
        });
    }

    function convertType(val) {
        val = _unescape(val.trim());
        switch (val) {
            case 'null':
                return null;
            case 'true':
                return true;
            case 'false':
                return false;
        }
        if (!isNaN(val)) {
            return +val;
        }
        return val;
    }

    function appendProperty(name, property) {
        var parent = top();
        var types = parent.type;
        var properties;
        if (types[0] === 'Array') {
            // Name is index
            // if (name == +name) {
            //     if (top().items && !(top().items instanceof Array)) {
            //         throw new Error('Can\'t mix number indices with string properties');
            //     }
            //     properties = top().items = top().items || [];
            // }
            // else {
                top().items = top().items || {
                    type: 'Object',
                    properties: {}
                };
                if (top().items instanceof Array) {
                    throw new Error('Can\'t mix number indices with string properties');
                }
                properties = top().items.properties;
            // }
        }
        else {
            top().properties = top().properties || {};
            properties = top().properties;
        }
        properties[name] = property;
    }

    function repeat(str, count) {
        var res = '';
        for (var i = 0; i < count; i++) {
            res += str;
        }
        return res;
    }


    var headers = [];

    // FIXME
    mdStr.replace(/(?:^|\n) *(#+) *([^\n]+)/g, function (header, headerPrefix, text) {
        headers.push({
            text: text,
            level: headerPrefix.length
        });
    });

    mdStr.split(/(?:^|\n) *(?:#+) *(?:[^\n]+)/).slice(1).forEach(move);

    function move(section, idx) {
        var text = headers[idx].text;
        var parts = /(.*)\(([\w\|\*]*)\)(\s*=\s*(.*))*/.exec(text);
        var key;
        var type = '*';
        var defaultValue = null;
        var level = headers[idx].level;
        if (parts === null) {
            key = text;
        }
        else {
            key = parts[1];
            type = parts[2];
            defaultValue = parts[4] || null;
        }
        var types = type.split('|').map(function (item) {
            return item.trim();
        });

        section = section.replace(/~\[(.*)\]\((.*)\)/g, function (text, size, href) {
            size = size.split('x');
            var width = +size[0];
            var height = +size[1];
            var iframe = ['<iframe data-src="', href, '"'];
            if (!isNaN(width) && !isNaN(height)) {
                iframe.push(' width=', width, ' height=', height);
            }
            iframe.push(' ></iframe>\n');
            return iframe.join('');
        });
        var property = {
            "type": types,
            "descriptionCN": marked(section, {
                renderer: renderer
            })
        };

        if (defaultValue != null) {
            property['default'] = convertType(defaultValue);
        }
        if (level < currentLevel) {
            var diff = currentLevel - level;
            var count = 0;
            while (count <= diff) {
                stacks.pop();
                count++;
            }
            appendProperty(key, property);
            current = property;
            stacks.push(current);
        }
        else if (level > currentLevel) {
            if (level - currentLevel > 1) {
                throw new Error(
                    text + '\n标题层级 "' + repeat('#', level) + '" 不能直接跟在标题层级 "' + repeat('#', currentLevel) + '"后'
                );
            }
            current = property;
            appendProperty(key, property);
            stacks.push(current);
        }
        else {
            stacks.pop();
            appendProperty(key, property);
            stacks.push(property);
        }
        currentLevel = level;
    }

    return result;
}