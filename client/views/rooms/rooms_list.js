(function(){
    'use strict';

    angular.module('hapi-auth')
        .controller('RoomsListCtrl', ['$rootScope', '$scope', '$state', function($rootScope, $scope, $state){

            $scope.chat = function(msg){
                var usr = $rootScope.rootuser.username,
                    message = usr + ': ' + msg;
                socket.emit('globalChat', message);
                $scope.message = null;
            };

            socket.on('bGlobalChat', function(data){
                $('#messages').append('<div>' + data + '</div>');
            });
        }]);
})();
