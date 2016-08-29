myApp.factory('exampleFactory', [function() {
  console.log('example factory running');
  // private
  var people = [];
  var thing = {name: ''};
  var number = 0;

  var increment = function() {
    number++;
    console.log('factory number now: ', number);
    return number;
  }

  var addPerson = function(name) {
    people.push(name);
    thing.name = name;
  }

  // public API
  // accessors (setters and getters)
  return {
    people: people, // arrays and objects can be shared
    thing: thing,
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
