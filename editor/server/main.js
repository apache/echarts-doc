const { parseBlocks } = require('./parseBlocks');
const {compositeTargets} = require('../common/blockHelper');
const config = require('../common/config');
const path = require('path');
const fs = require('fs');

const io = require('socket.io').listen(config.SOCKET_PORT);

console.log('Server Started');

const fileModified = {};

function initBlocks() {
    return parseBlocks(path.resolve(__dirname, '../../zh-src/option'));
}

let globalSocket;

function manageFilesStatus(socket) {

}

io.on('connection', function (socket) {
    if (globalSocket) {
        socket.emit('editor-exists');
        socket.disconnect();
        return;
    }

    console.log('Connected');

    globalSocket = socket;

    socket.on('disconnect', function (reason) {
        globalSocket = null;
        console.log('Disconnected', reason);
    });

    initBlocks().then(data => {
        socket.emit('initial-blocks', data);
    });

    socket.on('save', data => {
        try {
            for (let fileName in data) {
                const fileTargets = data[fileName];
                const filePath = path.resolve(__dirname, '../../zh/option/', fileName.replace('.', '/')) + '.md';
                fs.writeFileSync(filePath, compositeTargets(fileTargets), 'utf-8');
            }
            console.log('Saved');
            socket.emit('saved');
        }
        catch (e) {
            console.error('Failed to save');
            console.error(e);
            socket.emit('save-fail');
        }
    });
});