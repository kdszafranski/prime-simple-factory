var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', function($scope) {

    $scope.kris = {
        name: 'Kris Szafranski',
        position: 'instructor',
        location: 'Richfield',
        rank: 4
    };

    $scope.casie = {
        name: 'Casie Lynch',
        position: 'TA',
        location: 'Uptown',
        rank: 2
    };

    $scope.antoinette = {
        name: 'Antoinette Smith',
        position: 'instructor',
        location: 'Saint Paul',
        rank: 3
    };

    $scope.ryan = {
        name: 'Ryan Mulchay',
        position: 'instructor',
        location: 'Minneapolis',
        rank: 5
    }

    $scope.people = [$scope.kris, $scope.casie, $scope.antoinette];

    $scope.addPerson = function() {
        $scope.people.push(
            {
                name: 'Scott',
                position: 'Director of something',
                location: 'Bloomington',
                rank: 1
            }
        );
    }

    $scope.getOrders = function(id) {
        console.log(id);
    }

}]);