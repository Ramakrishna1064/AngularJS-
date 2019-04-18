'use strict';

sampleApp.factory('loginService', function ($http, $location) {

    return {
        login: function (data, callback) {
            var req = {
                method: 'POST',
                url: 'http://qa-fos.karvy.com:8080/api/v1/auth',
                params: data
            }
            $http(req).then(function (responce) {
                callback(responce);
            }, function (responce) {
                callback(responce);
            });
        },

        logout: function () {
            $location.path('/login');
        }
    }
});