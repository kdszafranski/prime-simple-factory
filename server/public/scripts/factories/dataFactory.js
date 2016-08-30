myApp.factory('DataFactory', [function() {
  console.log("data factory running");

  // Private
  var people = [];
  var recentPerson = {};
  var count = 0;

  var addPerson = function(name) {
    var newPerson = {name: name};
    people.push(newPerson);
    // make sure you use a property on this object!
    // otherwise the controller/view won't reflect the new value
    recentPerson.name = newPerson;
  }

  var increment = function() {
    count++;
    console.log("factory count: ", count);
    return count;
  }

  // public API for access to our private data
  return {
    peopleArray: people,
    recentPerson: recentPerson,
    count: function() {
      return count;
    },
    addOne: function() {
      return increment();
    },
    addPerson: function(person) {
      addPerson(person);
    }
  };

}]);
