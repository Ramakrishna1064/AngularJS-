'use strict';

sampleApp.factory('Auth', function ($http, $location) {
    var user;
    return {

        setUser: function (aUser) {
            user = aUser;
        },
        isLoggedIn: function () {
            return user;
        }
    }
});