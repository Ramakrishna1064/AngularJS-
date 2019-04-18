//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['ngRoute', 'ngStorage','darthwade.dwLoading']);
//Define Routing for app
sampleApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            }).
            when('/dashBoard', {
                templateUrl: 'templates/dashBoard.html',
                controller: 'DashBoardController',
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);

sampleApp.run(['$rootScope', '$location', 'Auth', 'localstorage',
    function ($rootScope, $location, Auth, localstorage) {

        // $rootScope.$on('$routeChangeStart', function (event) {
        //     // if (localstorage.get('isLogined')) {
        //     //     console.log('ALLOW');
        //     //     //event.preventDefault();
        //     //     $location.path('/dashBoard');
        //     // }
        //     // else {
        //     //     console.log('DENY');
        //     //     $location.path('/login');
        //     // }
        // });

    }]);

sampleApp.controller('LoginController', ['$scope', 'loginService', 'localstorage', '$location','$loading',
    function ($scope, loginService, localstorage, $location,$loading) {

        $scope.submit = function () {
            $loading.start('sample-1');
            var data = {
                email: 'krishna.kovilampati@karvy.com',
                password: 'password', role: 'executive', imei: '352929087439786'
            };
            loginService.login(data, function (response) {
                $loading.finish('sample-1');
                if (isNaN(response.data.token)) {
                    localstorage.set('isLogined', true);
                    $location.path('/dashBoard');
                } else {
                    $loading.finish('sample-1');
                    //localstorage.set('isLogined', false);
                }
            })
        }
    }]);

sampleApp.controller('DashBoardController', function ($scope, loginService, localstorage,$loading) {
    $scope.logOut = function () {
       loginService.logout();
       localstorage.set('isLogined', false);
    }
});


      // localstorage.setObject('post', {
        //     name: 'Thoughts',
        //     text: 'Today was a good day'
        // });
        // var post = localstorage.getObject('post');
        // console.log(post);