myApp.factory('exampleFactory', [function() {
  console.log('example factory running');
  // private
  var people = [];
  var number = 9;

  var increment = function() {
    number++;
    console.log('number now: ', number);
    return number;
  }

  var addPerson = function(name) {
    people.push(name);
  }

  // public API
  return {
    people: people,
    number: function() {
      return number;
    },
    addPerson: function(name) {
      addPerson(name);
    },
    addOne: function() {
      return increment();
    }
  };

}]);
