myApp.controller('AddressController', ['$scope', 'exampleFactory', function($scope, exampleFactory) {
  console.log('Address Controller');

  $scope.dataFactory = exampleFactory;
  $scope.message = 'Addresses!';
  $scope.people = $scope.dataFactory.people;
  $scope.recentName = $scope.dataFactory.thing;

}]);
