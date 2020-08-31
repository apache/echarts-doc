import config from '../../common/config';
import { Notify } from 'quasar';

import io from 'socket.io-client';

export const socket = io(`http://localhost:${config.SOCKET_PORT}`);

// Some global handler
socket.on('saved', function () {
    Notify.create({
        message: 'Saved Successfuly'
    })
});
socket.on('save-fail', function () {
    Notify.create({
        message: 'Failed to Save'
    })
});
