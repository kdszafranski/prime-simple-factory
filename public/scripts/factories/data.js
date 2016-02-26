myApp.factory('DataFactory', ['$http', function($http){
    var data = ['Kris', 'Antoinette'];

    //PRIVATE
    var getData = function(){
        return data;
    };

    var addPerson = function(name) {
        data.push(name);
    };

    //PUBLIC
    var publicApi = {
        peopleData: function(){
            return data;
        },
        addName: function(name) {
            addPerson(name);
        }
    };

    return publicApi;
}]);