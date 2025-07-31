const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ENV_TYPE = ['dev', 'localsite', 'asf'];

/**
 * @param envType {string} 'dev' | 'localsite' | 'asf'
 */
exports.readConfigEnvFile = function (envType) {
    assert(ENV_TYPE.indexOf(envType) >= 0, 'envType must be one of ' + ENV_TYPE.join(', '));

    const configEnvRelativePath = '../config/env.' + envType + '.js';
    const configEnvLocalRelativePath = '../config/env.' + envType + '-local.js';

    const config = require(configEnvRelativePath);
    if (fs.existsSync(path.resolve(__dirname, configEnvLocalRelativePath))) {
        const configLocal = require(configEnvLocalRelativePath);
        assert(
            typeof configLocal === 'object' && !Array.isArray(configLocal),
            configEnvLocalRelativePath + ' must be an object.'
        );
        Object.assign(config, configLocal);
    }

    assert(path.isAbsolute(config.releaseDestDir) && path.isAbsolute(config.ecWWWGeneratedDir));

    return config;
};
