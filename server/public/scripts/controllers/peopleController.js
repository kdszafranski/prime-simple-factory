myApp.controller('PeopleController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('People Controller');

    $scope.people = [];
    $scope.dataFactory = DataFactory;
    $scope.message = 'People!';
    $scope.formName = '';

    if($scope.dataFactory.peopleData() === undefined) {
        // initial load
        $scope.dataFactory.retrieveData().then(function() {
            $scope.people = $scope.dataFactory.peopleData();
        });
    } else {
        $scope.people = $scope.dataFactory.peopleData();
    }

    // Adds a person and then is visible, via the factory, to the Addresses page.
    // Does not store in the DB
    $scope.addPerson = function() {
        $scope.dataFactory.addName($scope.formName);
        $scope.formName = '';
    }

}]);
