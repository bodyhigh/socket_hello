'use strict';

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
    console.log('A user is connected');
    socket.broadcast.emit('hi');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});

server.listen(3000, function() {
    console.log('Listening on port 3000');
});
