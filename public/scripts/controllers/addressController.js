myApp.controller('AddressController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('Address Controller');

    $scope.message = 'Address Controller!';
    $scope.people = [];
    $scope.dataFactory = DataFactory;

    $scope.people = $scope.dataFactory.peopleData();
}]);