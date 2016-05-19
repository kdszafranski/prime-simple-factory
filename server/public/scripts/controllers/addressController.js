myApp.controller('AddressController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    console.log('Address Controller');

    $scope.dataFactory = DataFactory;
    $scope.message = 'Addresses!';
    $scope.people = [];

    if($scope.dataFactory.peopleData() === undefined) {
        // initial load
        $scope.dataFactory.retrieveData().then(function() {
            $scope.people = $scope.dataFactory.peopleData();
        });
    } else {
        $scope.people = $scope.dataFactory.peopleData();
    }

}]);