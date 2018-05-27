import expressWs from 'express-ws';

export default function initializeWebSockets(app) {
    expressWs(app);
    
    app.ws('/', function(ws, req) {
      ws.on('message', function(msg) {
        console.log(msg);
      });
      console.log('socket', req.testing);
    });
}