const { parseBlocks } = require('./parseBlocks');
const config = require('../common/config');
const path = require('path');

const io = require('socket.io').listen(config.SOCKET_PORT);

console.log('Server Started');

const fileModified = {};

function initBlocks() {
    return parseBlocks(path.resolve(__dirname, '../../zh/option'));
}

let globalSocket;

function manageFilesStatus(socket) {

}

io.on('connection', function (socket) {
    if (globalSocket) {
        socket.emit('conflicts');
        return;
    }

    console.log('Connected');

    globalSocket = socket;

    socket.on('disconnect', function (reason) {
        globalSocket = null;
    });

    initBlocks().then(data => {
        socket.emit('initial-blocks', data);
    });
});
