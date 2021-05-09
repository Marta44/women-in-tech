$(document).ready(function() {
    var socket = io.connect();
    socket.on('connect', function() {
        socket.send();
    });
    socket.on('message', function(msg){
        $('#message').append('<li>'+msg+'</li>');
    });
});