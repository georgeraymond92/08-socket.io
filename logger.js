'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3002');

socket.on('error', (payload) => {
  console.log(payload + ' error => triggered by emit');
});

socket.on('success' , (payload) => {
  console.log(payload + ' converted to upper case => triggered by emit');
});