/* global BUILD_CONFIG, UglifyJS, ActiveXObject */
define(function (require) {

    // var mangleString = require('./mangleString');
    var saveAs = require('./lib/FileSaver');
    var rollup = require('rollup');

    var TOP_MODULE_NAME = 'topModuleInRequireES';

    var $log = document.getElementById('log');

    var baseURL = dir(location.pathname);
    var suffix = BUILD_CONFIG.version === 3 ? '3' : '';
    var pathsConfig = {
        'echarts/src': './src/echarts' + suffix,
        'zrender/src': './src/zrender' + suffix
    };
    var urlArgs = '__v__=' + (+new Date());

    var topCode = [
        'import "echarts/src/config";',
        'export * from "echarts/src/echarts";'
    ];

    if (BUILD_CONFIG.api) {
        topCode.push('export * from "echarts/src/export";');
    }

    // Including charts
    (BUILD_CONFIG.charts || '').split(',').forEach(function (chart) {
        chart && topCode.push('import "echarts/src/chart/' + chart + '";');
    });

    if (topCode.indexOf('echarts/src/chart/scatter') >= 0) {
        topCode.push('import "echarts/src/chart/effectScatter"');
    }

    // Including components
    (BUILD_CONFIG.components || '').split(',').forEach(function (component) {
        component && topCode.push('import "echarts/src/component/' + component + '";');
    });

    if (BUILD_CONFIG.vml) {
        topCode.push('import "zrender/src/vml/vml";');
    }
    if (BUILD_CONFIG.svg) {
        topCode.push('import "zrender/src/svg/svg";');
    }

    // Always require log and time axis
    topCode.push(
        'import "echarts/src/scale/Time";',
        'import "echarts/src/scale/Log";'
    );

    // Loading scripts and build
    rollup.rollup({
        input: TOP_MODULE_NAME,
        legacy: true,
        plugins: [{
            resolveId: function (importee, importor) {
                if (importee === TOP_MODULE_NAME) {
                    return importee;
                }
                // console.log('resolveid', importee, importor);
                return getAbsolutePath(
                    importee,
                    importor !== TOP_MODULE_NAME ? importor : null
                );
            },
            load: function (path) {
                if (path === TOP_MODULE_NAME) {
                    return topCode.join('\n');
                }
                return ajax(location.origin + path)
                    .then(function (content) {
                        builderLog('Loaded module: "' + path + '"');
                        return content;
                    });
            }
        }]
    }).then(function (bundle) {
        return bundle.generate({
            name: 'echarts',
            format: 'umd',
            legacy: true
        });
    }).then(function (result) {
        var code = result.code;

        if (!BUILD_CONFIG.source) {
            builderLog('<br />Compressing code...');
            // code = mangleString(code);
            // Otherwise uglify will throw error.
            code = code.replace(/\t/g, '    ');
            code = jsCompress(code);
        }

        download(code);

        builderLog('<br />Completed');

        document.getElementById('tip').innerHTML = '构建完毕';
    });

    function download(code) {
        try {
            var blob = new Blob([code], {
                type: 'text/plain;charset=utf8'
            });

            // var URL = window.URL || window.webkitURL;
            // var scriptUrl = URL.createObjectURL(blob);

            // URL.revokeObjectURL(blob);

            // window.open(scriptUrl);
            // return;

            var fileName = ['echarts'];
            if (BUILD_CONFIG.amd) {
                fileName.push('amd');
            }
            if (!BUILD_CONFIG.source) {
                fileName.push('min');
            }
            fileName.push('js');

            saveAs(blob, fileName.join('.'));
        }
        catch (e) {
            console.error(e);
            window.open('data:text/plain;charset=utf-8,' + encodeURIComponent(code));
        }
    }

    function builderLog(msg) {
        $log.innerHTML += msg + '<br />';
        $log.scrollTop = $log.scrollHeight;
    }

    function jsCompress(source) {
        var ast = UglifyJS.parse(source);
        /* jshint camelcase: false */
        // compressor needs figure_out_scope too
        ast.figure_out_scope();
        ast = ast.transform(UglifyJS.Compressor());

        // need to figure out scope again so mangler works optimally
        ast.figure_out_scope();
        ast.compute_char_frequency();
        ast.mangle_names();

        return ast.print_to_string();
    }

    // Get absolute path. `basePath` can be omitted if moduleId is absolute.
    function getAbsolutePath(moduleId, basePath) {
        moduleId = addExt(moduleId);

        for (var path in pathsConfig) {
            if (pathsConfig.hasOwnProperty(path)) {
                if (moduleId.indexOf(path) === 0) {
                    moduleId = moduleId.replace(path, pathsConfig[path]);
                    return resolve(baseURL, moduleId);
                }
            }
        }

        if (basePath) {
            moduleId = resolve(dir(basePath), moduleId);
        }

        if (moduleId.charAt(0) !== '/') {
            throw new Error('"' + moduleId + '" can not be found.');
        }

        return moduleId;
    }

    function addExt(moduleId) {
        if (moduleId.split('/').pop().indexOf('.') < 0) {
            moduleId += '.js';
        }
        return moduleId;
    }

    function ajax(toUrl) {
        toUrl += '?' + urlArgs;

        return new Promise(function (promiseResolve, promiseReject) {
            var xhr = window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject('Microsoft.XMLHTTP');

            xhr.open('GET', toUrl, true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    (xhr.status >= 200 && xhr.status < 300)
                        ? promiseResolve(xhr.responseText)
                        : promiseReject({
                            status: xhr.status,
                            content: xhr.responseText
                        });
                    xhr.onreadystatechange = new Function();
                    xhr = null;
                }
            };

            xhr.send(null);
        });
    }

    // Nodejs `path.resolve`.
    function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute;

        for (var i = arguments.length - 1; i >= 0 && !resolvedAbsolute; i--) {
            var path = arguments[i];
            if (path) {
                resolvedPath = path + '/' + resolvedPath;
                resolvedAbsolute = path[0] === '/';
            }
        }

        if (!resolvedAbsolute) {
            throw new Error('At least one absolute path should be input.');
        }

        // Normalize the path
        resolvedPath = normalizePathArray(resolvedPath.split('/'), false).join('/');

        return '/' + resolvedPath;
    }

    // resolves . and .. elements in a path array with directory names there
    // must be no slashes or device names (c:\) in the array
    // (so also no leading and trailing slashes - it does not distinguish
    // relative and absolute paths)
    function normalizePathArray(parts, allowAboveRoot) {
        var res = [];
        for (var i = 0; i < parts.length; i++) {
            var p = parts[i];

            // ignore empty parts
            if (!p || p === '.') {
                continue;
            }

            if (p === '..') {
                if (res.length && res[res.length - 1] !== '..') {
                    res.pop();
                } else if (allowAboveRoot) {
                    res.push('..');
                }
            } else {
                res.push(p);
            }
        }

        return res;
    }

    function dir(path) {
        if (path) {
            return path.charAt(path.length - 1) === '/' ? path : resolve(path, '..');
        }
    }

});