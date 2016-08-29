myApp.controller('PeopleController', ['$scope', 'exampleFactory', function($scope, exampleFactory) {
  console.log('People Controller');

  $scope.message = 'People!';
  $scope.formName = '';
  $scope.dataFactory = exampleFactory;
  $scope.people = $scope.dataFactory.people;
  $scope.number = $scope.dataFactory.number();

  // Adds a person and then is visible, via the factory, to the Addresses page.
  // Does not store in the DB
  $scope.addPerson = function() {
    // exampleFactory.people.push($scope.formName);
    $scope.dataFactory.addPerson($scope.formName);
    $scope.formName = '';
  }

  $scope.addOne = function() {
    $scope.number = $scope.dataFactory.addOne();
  }

  // if($scope.dataFactory.peopleData() === undefined) {
  //     // initial load
  //     $scope.dataFactory.retrieveData().then(function() {
  //         $scope.people = $scope.dataFactory.peopleData();
  //     });
  // } else {
  //     $scope.people = $scope.dataFactory.peopleData();
  // }

}]);
