myApp.controller('PeopleController', ['$scope', function($scope) {
  console.log('People Controller');

  $scope.message = 'People!';
  $scope.formName = '';

  $scope.people = [];

  $scope.addPerson = function() {
    $scope.people.push({name: $scope.formName});
    $scope.formName = '';
  }

}]);
