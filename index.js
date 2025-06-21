const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Gửi file HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client.html"));
});

// Kết nối WebSocket
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    console.log("Received:", message);
    ws.send("Server nhận: " + message);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Cổng mặc định cho Render
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
