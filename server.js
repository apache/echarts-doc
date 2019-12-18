const nStatic = require('node-static');
const open = require('open');

const fileServer = new nStatic.Server('./public');
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(3001);

// Wait bundling to be finished
setTimeout(() => {
    open('http://127.0.0.1:3001/en/option.html');
}, 7000);
