'use strict';

const io = require('socket.io')(3002);


io.on('connection', (socket) => {
  console.log(`new connection ${socket.id}`);

  socket.on('write' , (payload) => {
    // do something else
    socket.broadcast.emit('success', payload);
  });

  socket.on('err', (payload) => {
    socket.broadcast.emit('error', payload);
  });

});
