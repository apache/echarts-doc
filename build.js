var marked = require('marked');
var etpl = require('etpl');
var glob = require('glob');
var fs = require('fs');

etpl.config({
    commandOpen: '{{',
    commandClose: '}}'
});

glob('src/**/*.md', function (err, files) {
    var mdTpl = files.filter(function (fileName) {
        return fileName.indexOf('__') !== 0;
    }).map(function (fileName) {
        return fs.readFileSync(fileName, 'utf-8');
    });

    // Render tpl
    etpl.compile(mdTpl.join('\n'));
    var mdStr = etpl.getRenderer('echarts')();

    // Markdown to JSON
    var schema = mdToJsonSchema(mdStr);

    var topLevel = schema.option.properties;
    var newProperties = {
    };
    for (var name in topLevel) {
        if (name.indexOf('series.') >= 0) {
            newProperties.series = newProperties.series || {
                'type': 'Array',
                'items': {
                    'anyOf': []
                }
            };
            newProperties.series.items.anyOf.push(topLevel[name]);
        }
        else {
            newProperties[name] = topLevel[name];
        }
    }
    schema.option.properties = newProperties;

    console.log(JSON.stringify(schema, null, 2));
});

function mdToJsonSchema(mdStr) {

    var renderer = new marked.Renderer();

    var currentLevel = 0;
    var result = {
        '$schema': 'http://echarts.baidu.com/doc/json-schem',
        'option': {
            'type': 'Object',
            'properties': {
            },
        }
    };
    var current = result.option;
    var stacks = [current];

    var blocks = [
        'blockquote', 'code', 'html', 'hr', 'list', 'listitem', 'paragraph', 'table', 'tablerow', 'tablecell'
    ];
    var inlines = [
        'strong', 'em', 'codespan', 'br', 'del', 'link', 'image'
    ];

    var descriptionHTML = '';

    function top() {
        return stacks[stacks.length - 1];
    }

    function convertType(val) {
        val = val.trim();
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

    renderer.heading = function (text, level) {

        if (top() && descriptionHTML) {
            top().descriptionCN = descriptionHTML;
        }

        descriptionHTML = '';

        var parts = /(.*)\(([\w\|\*]*)\)(\s*=\s*(.*))*/.exec(text);
        var title;
        var type = '*';
        var defaultValue = null;
        if (parts === null) {
            title = text;
        }
        else {
            title = parts[1];
            type = parts[2];
            defaultValue = parts[4] || null;
        }
        var property = {
            "type": type.split('|').map(function (item) {
                return item.trim();
            })
        };
        if (defaultValue != null) {
            property['default'] = convertType(defaultValue);
        }
        if (level < currentLevel) {
            stacks.pop();
            stacks.pop();
            top().properties[title] = property;
            current = property;
            stacks.push(current);
        }
        else if (level > currentLevel) {
            current = property;
            top().properties = top().properties || {};
            top().properties[title] = property;
            stacks.push(current);
        }
        else {
            stacks.pop();
            top().properties[title] = property;
            stacks.push(property);
        }
        currentLevel = level;
    };

    if (top() && descriptionHTML) {
        top().descriptionCN = descriptionHTML;
    }

    blocks.forEach(function (methodName) {
        var oldMethod = renderer[methodName];
        renderer[methodName] = function () {
            descriptionHTML += oldMethod.apply(this, arguments);
        };
    });

    marked(mdStr, {
        renderer: renderer
    });
    return result;
}