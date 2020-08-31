import config from '../../common/config';

import io from 'socket.io-client';

export const socket = io(`http://localhost:${config.SOCKET_PORT}`);

let CB_NAME_START = 1024;

export function socketRequest(action, payload, timeout) {
    return new Promise((resolve, reject) => {
        const token = 'token-' + CB_NAME_START++;
        const successName = 'success-' + token;
        const failName = 'fail-' + token;

        socket.on(successName, success);
        socket.on(failName, fail);

        const timeoutHandle = setTimeout(function () {
            clearListeners();
            reject('Timeout');
        }, timeout || 2000);

        function clearListeners() {
            socket.off(successName, success);
            socket.off(failName, fail);
        }

        function success(data) {
            clearListeners();
            clearTimeout(timeoutHandle);
            resolve(data);
        }

        function fail(reason) {
            clearListeners();
            clearTimeout(timeoutHandle);
            reject(reason);
        }

        socket.emit('socket-request', {
            action,
            payload,
            successCallback: successName,
            failCallback: failName
        });
    });
}
