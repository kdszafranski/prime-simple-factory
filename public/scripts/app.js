var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/another', {
            templateUrl: '/views/templates/another.html',
            controller: 'AnotherController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);



