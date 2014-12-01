'use strict';

module.exports = function(data){
    var socket = this;
    socket.emit('globalChat', data);   //sends back to original sender
    socket.broadcast.emit('globalChat', data);  //sends to everyone else connected on the socket
};
