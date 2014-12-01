'use strict';

module.exports = function(socket){
  socket.emit('online');
  socket.on('globalChat', require('./globalChat'));
  socket.on('roomChat', require('./roomChat'));
  socket.on('join', require('./join'));

  //*** SOCKET LOGGING ***//
  console.log('Socket Connected:', socket.id);
  socket.on('disconnect', function(){
    console.log('Socket Disconnected:', socket.id);
  });

  console.log('Active Sockets', this.sockets.length);
};
