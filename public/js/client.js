/*globals $:false */
var socket = io();

socket.on('chat message', appendText);

$('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});

function appendText(msg) {
    $('#messages').append($('<li>').text(msg));
}
