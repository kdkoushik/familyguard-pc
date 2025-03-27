const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.on('screen-stream', (stream) => {
    socket.broadcast.emit('child-screen', stream);
  });
});

http.listen(3000, () => {
  console.log('PC Server running on port 3000');
});
