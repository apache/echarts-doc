import io from 'socket.io-client';
import config from '../../common/config';

export const socket = io(`http://localhost:${config.SOCKET_PORT}`);

export const store = {
    blocks: {},

    targets: []
};

socket.on('initial-blocks', function (blocks) {
    store.blocks = blocks;
    const targets = [];
    for (const fileName in blocks) {
        for (const target of blocks[fileName]) {
            targets.push(target);
        }
    }
    store.targets = targets;
});
