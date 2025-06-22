// server.js trên Render
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: process.env.PORT || 8080 });

server.on('connection', ws => {
    console.log('Client connected');

    ws.on('message', msg => {
        console.log('Received data from client:', msg);
        // Xử lý hoặc lưu data tùy ý
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
