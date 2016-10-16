'use strict';

var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    // res.status(200).send('Hello Socket!!!');
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket) {
    console.log('A user is connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg) {
        console.log('Message: ' + msg);
    })
})

http.listen(3000, function() {
    console.log('Listening on port 3000');
});
