var myApp = angular.module('myApp', []);

myApp.controller('IndexController', ['$scope', '$http', function($scope, $http) {

    $scope.kris = {
        name: 'Kris Szafranski',
        position: 'instructor',
        location: 'Richfield',
        rank: 2
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

    $scope.people = [$scope.kris, $scope.casie, $scope.antoinette, $scope.ryan];

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

    $scope.doStuff = function(num) {
        //$http({
        //    method: 'GET',
        //    url: '/data'
        //}).then(function(response) {
        //    var data = response.data;
        //    console.log('Async reponse: ', data);
        //});

        $http({
            method: 'POST', // 'PUT', 'DELETE'
            url: '/data/' + num,
            data: {number: num}
        }).then(function(response) {
            console.log(response.data);
        });
    }

}]);