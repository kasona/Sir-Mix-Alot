var DataStore = require('./DataStore');

function Model(schema, id) {
  this.schema = schema;
  this.id = null;
  for ( var key in schema ) {
    //set key to null, use [] when 'key' is undefined
    this[key] = null;

  }

  // Checks if key exists in the DataStore.store
  if (!DataStore.store.hasOwnProperty(this.constructor.name)) {
    DataStore.store[this.constructor.name] = [];
  }
}

// Static method, dont need the prototype in method name
Model.getNextId = function() {
  var dataBase = DataStore.store[this.name];
  //Create a counter to keep track of where the loop is
  //id is already defined as null
  var highest = 0;
  //Create a loop using the .name.length
  for (var i = 0; i < dataBase.length; i++) {
    // if id is > 0 then add it to the counter, (this is not the end, keep looping)
    if (dataBase[i].id > highest) {
      //Add the id index to the counter
      highest  = dataBase[i].id;
    }
  }
  //Yes! We reached the highest value number, getNextId wants +1
  return highest + 1;
};

Model.find = function(id) {
  //Make a variable for DataStore.store[this.name] <- too long
  var dataBase = DataStore.store[this.name];
  //Loop through db to find the id
  for ( var i = 0; i < dataBase.length; i++) {
    //If you find it, return it.
    if ( dataBase[i].id === id) {
      return dataBase[i];
    }
  }

  // Else return null, doesn't exist
  return null;
};

Model.prototype.save = function () {
  if (this.id === null) {
    this.id = this.constructor.getNextId();
    DataStore.store[this.constructor.name].push(this);
  }
};

Model.prototype.destroy = function() {
  //Set DataStore to a variable
  var dataBase = DataStore.store[this.constructor.name];
  //Set id to a variable
  var current = this.constructor.find(this.id);
  //Find the index of what you want to remove/destroy
  var index = dataBase.indexOf(current);
  //Check to see if id is null
  if (this.id !== null) {
    //Splice off the index you want to remove/destory
    dataBase.splice(index, 1);
  }
};

Model.extend = function (klass) {
  var methodName;

  //For methodName in Model, extending static
  for (methodName in Model) {
    klass[methodName] = Model[methodName];
  }

  // For methodName in prototype, extend member methods
  for (methodName in Model.prototype) {
    klass.prototype[methodName] = Model.prototype[methodName];
  }
};

module.exports = Model;