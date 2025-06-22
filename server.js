const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Tạo app Express
const app = express();
const server = http.createServer(app);

// Bật socket.io 2.x
const io = socketIO(server, {
  cors: {
    origin: '*', // Tạm thời mở toàn bộ cho test
    methods: ['GET', 'POST']
  }
});

// Khi có client kết nối
io.on('connection', (socket) => {
  console.log('Client connected');

  // Nhận dữ liệu từ client (sự kiện 'hmi-data')
  socket.on('hmi-data', (data) => {
    console.log('Received HMI Data:', data);
    // xử lý hoặc lưu DB tại đây
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Khởi động server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
