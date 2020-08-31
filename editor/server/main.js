const { parseBlocks } = require('./parseBlocks');
const {compositeTargets} = require('../common/blockHelper');
const config = require('../common/config');
const path = require('path');
const fs = require('fs');
const { fail } = require('assert');

const io = require('socket.io').listen(config.SOCKET_PORT);

console.log('Server Started');

const fileModified = {};

function fetchBlocks() {
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

    // Response the request
    socket.on('socket-request', ({ action, payload, successCallback, failCallback }) => {
        if (!requestActions[action]) {
            socket.emit(failCallback, 'Unkown action');
        }
        else {
            try {
                Promise.resolve(requestActions[action](payload))
                    .then(result => {
                        socket.emit(successCallback, result);
                    })
                    .catch(e => {
                        socket.emit(failCallback, e.toString());
                    })
            }
            catch (e) {
                socket.emit(failCallback, e.toString());
            }
        };
    });
});


const requestActions = {
    save(data) {
        for (let fileName in data) {
            const fileTargets = data[fileName];
            const filePath = path.resolve(__dirname, '../../zh/option/', fileName.replace('.', '/')) + '.md';
            fs.writeFileSync(filePath, compositeTargets(fileTargets), 'utf-8');
        }
        console.log('Saved');
    },

    fetch() {
        return fetchBlocks();
    }
}
