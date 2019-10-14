var static = require('node-static');
var open = require('open');

var fileServer = new static.Server('./public');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(3001);

open('http://127.0.0.1:3001/en/option.html');
