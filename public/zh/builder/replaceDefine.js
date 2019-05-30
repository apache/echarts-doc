define(function (require) {

    var esprima = require('esprima');
    var estraverse = require('estraverse');
    var SYNTAX = estraverse.Syntax;

    return function (code, defines) {
        var ast = esprima.parse('var __ec__tmp__func__ = ' + code, {
            loc: true, range: true, tokens: true, comment: true
        });

        estraverse.replace(ast, {
            enter: function (node, parent) {
                if (node.type === SYNTAX.Identifier) {
                    if (defines.hasOwnProperty(node.name)) {
                        var val = defines[node.name];
                        var literalType;
                        switch (typeof val) {
                            case 'string':
                            case 'number':
                            case 'boolean':
                                literalType = typeof val;
                                break;
                            default:
                                throw new Error('Unsupported define type');
                        }
                        return {
                            type: SYNTAX.Literal,
                            value: val,
                            range: [node.range[0], node.range[0] + JSON.stringify(val).length]
                        };
                    }
                }
            }
        });

        // escodegen has a fucked up API for attaching comments
        // https://github.com/estools/escodegen/issues/10
        ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
        return escodegen.generate(
            ast,
            {
                format: {escapeless: true},
                comment: true
            }
        ).replace(/^var\s+__ec__tmp__func__\s*=\s*/, '')
        // Remove last comma
        .replace(/;$/, '');
    };
});