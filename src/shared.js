// Shared function in both client and toolchain.


module.exports.getDocJSONPVarNname = function (path) {
    const prefix = '__EC_DOC_';
    path = path.replace(/\.js$/, '')
        .replace(/\.json$/, '')
        .replace(/[-.\/]/g, '_');
    return prefix + path;
}