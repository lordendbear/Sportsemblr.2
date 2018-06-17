import dataInit from './message.data';
import Message from './message.model';

export default (app, auth) => {
    const data = dataInit(Message);

    const io = require('socket.io')(app.server);
    io.on('connection', (socket) => {
        socket.on('chat message', (msg) => {
            data.addMessage(msg)
                .then((savedMessage) => {
                    io.emit('chat message', savedMessage);
                });
        });
    });
};