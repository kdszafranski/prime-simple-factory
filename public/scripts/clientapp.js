var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {
    console.log('angular rocks!');

    $scope.count = 0;

    $scope.kris = {
        name: 'Kris Szafranski',
        position: 'instructor',
        location: 'Richfield'
    };

    $scope.casie = {
        name: 'Casie Lynch',
        position: 'TA',
        location: 'Uptown'
    };

    $scope.antoinette = {
        name: 'Antoinette Smith',
        position: 'instructor',
        location: 'Saint Paul'
    };

    $scope.people = [$scope.kris, $scope.casie, $scope.antoinette];

    $scope.increment = function() {
        $scope.count++;
    };

    $scope.addPerson = function() {
        $scope.people.push(
            {
                name: 'Scott',
                position: 'Director of something',
                location: 'Bloomington'
            }
        );
    }

}]);