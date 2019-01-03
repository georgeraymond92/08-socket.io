'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3002');


const alterFilePromised = (file) => {
  readFile(file)
  .then(data  => {
    let txt = data.toString().toUpperCase();
    writeFile(file, txt)
    .then(socket.emit('write', file))
  })
  .catch(err => {
    socket.emit('err', err);
    console.log(err);
  })
};

let file = process.argv.slice(2).shift();
// socket.emit('write', 'payload');

// socket.emit('err', 'payload');
// socket.emit('write', payload);

alterFilePromised(file);