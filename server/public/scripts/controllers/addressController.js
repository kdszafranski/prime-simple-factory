myApp.controller('AddressController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('Address Controller');

  $scope.message = 'Addresses!';

  $scope.people = DataFactory.peopleArray;

}]);
