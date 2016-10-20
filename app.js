'use strict';

var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

app.use('/rooms', require('./routes/rooms'));
app.use(express.static(__dirname + '/public'));

io.on('connection', onConnection);

server.listen(3000, function() {
    console.log('Listening on port 3000');
});

function onConnection (socket) {
    socket.emit('chat message', 'Welcome to the chat!');
    socket.on('chat message', (txt) => io.emit('chat message', txt));
}
