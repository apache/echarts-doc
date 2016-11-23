/**
 * @file 加载模板的amd模块
 */
/* jshint evil:true */
define(
    function (require, exports, module) {
        var etpl = require('etpl');

        return {
            load: function (resourceId, req, load, config) {
                var toUrl = req.toUrl( resourceId );

                // For r.js
                if (typeof window === 'undefined') {
                    load();
                    return;
                }

                var xhr = window.XMLHttpRequest
                    ? new XMLHttpRequest()
                    : new ActiveXObject('Microsoft.XMLHTTP');
                xhr.open('GET', toUrl, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status >= 200 && xhr.status < 300) {
                            var source = xhr.responseText;
                            var moduleConfig = module.config();
                            if (typeof moduleConfig.autoCompile === 'undefined'
                                || moduleConfig.autoCompile
                            ) {
                                etpl.compile(source);
                            }

                            load(source);
                        }

                        xhr.onreadystatechange = new Function();
                        xhr = null;
                    }
                };

                xhr.send(null);
            }
        };
    }
);
