var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'PeopleController'
        })
        .when('/addresses', {
            templateUrl: '/views/templates/addresses.html',
            controller: 'AddressController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);



