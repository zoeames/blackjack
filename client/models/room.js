(function(){
    'use strict';

    angular.module('hapi-auth')
        .factory('Room', ['$http', function($http){

            function create(room){
                return $http.post('/rooms', room);
            }

            function all(room){
                return $http.get('/rooms');
            }

            function join(room){
                return $http.post('/rooms/' + room.name, {password:room.password});
            }

            function find(roomId){
                return $http.get('/rooms/' + roomId);
            }

            return {create:create, all:all, join:join, find:find};
        }]);
})();
