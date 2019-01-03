'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3002');

const toUpper = data => Buffer.from(data.toString().toUpperCase());


const alterFilePromised = (file) => {
  readFile(file)
    .then( data  => toUpper(data) )
    .then( buffer => writeFile(file , buffer) )
    .then( () => socket.emit('success', file) )
    .catch( err => socket.emit('err', err) );
};

let file = process.argv.slice(2).shift();


alterFilePromised(file);