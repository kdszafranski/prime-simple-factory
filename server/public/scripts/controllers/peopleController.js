myApp.controller('PeopleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log('People Controller');
  $scope.message = 'People!';
  $scope.formName = '';
  $scope.dataFactory = DataFactory;
  $scope.recent = $scope.dataFactory.recentPerson;
  $scope.people = $scope.dataFactory.peopleArray;

  $scope.addPerson = function() {
    $scope.dataFactory.addPerson($scope.formName);
    $scope.formName = '';
  }

}]);
