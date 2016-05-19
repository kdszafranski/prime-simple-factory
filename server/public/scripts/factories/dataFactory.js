myApp.factory('DataFactory', ['$http', function($http) {
    // PRIVATE
    var people = undefined;

    var getData = function() {
        console.log('getting data from server');
        var promise = $http.get('/data').then(function(response) {
            people = response.data;
            console.log('Async data response:', people);
        });

        return promise;
    };

    var addPerson = function(name) {
        people.push(name);
    };


    //PUBLIC
    var publicApi = {
        peopleData: function() {
            return people;
        },
        retrieveData: function() {
            return getData();
        },
        addName: function(name) {
            addPerson(name);
        }
    };

    return publicApi;

}]);