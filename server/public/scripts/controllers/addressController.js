myApp.controller('AddressController', ['$scope', 'exampleFactory', function($scope, exampleFactory) {
  console.log('Address Controller');

  $scope.dataFactory = exampleFactory;
  $scope.message = 'Addresses!';
  $scope.people = $scope.dataFactory.people;

  // if($scope.dataFactory.peopleData() === undefined) {
  //     // initial load
  //     $scope.dataFactory.retrieveData().then(function() {
  //         $scope.people = $scope.dataFactory.peopleData();
  //     });
  // } else {
  //     $scope.people = $scope.dataFactory.peopleData();
  // }

}]);
