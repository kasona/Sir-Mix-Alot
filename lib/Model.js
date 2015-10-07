var DataStore = require('./DataStore');

function Model(schema, id) {
  this.schema = schema;
  this.id = null;
  for ( var key in schema ) {
    //set key to null, use [] when 'key' is undefined
    this[key] = null;
  }
  DataStore.store[this.constructor.name] = [];
}

// Static method, dont need the protottype in method name
Model.getNextId = function() {
  // return next successive number in the datastore for this model
  // highest id + 1
  // Set counter to know where we are
  // checking for length of constructor.name
  for (var i = 0; i < DataStore.store[this.prototype.constructor.name].length; i++) {
    // if constructor.name's id is greater than 0 assign it to counter to keep looping
    if (DataStore.store[this.prototype.constructor.name][i].id > 0) {
      counter = DataStore.store[this.prototype.constructor.name].id;
    }
  }
  return counter + 1;
};

Model.find = function(id) {
  //Accept single argument id
  //Returns stored data object in datastore for model
  var a = DataStore.store[this.prototype.constructor.name];
  console.log("test", a);

  // Have same id value passsed from the find argument

};

Model.save = function( ) {

  // set next id in model's db to be null
  // get array of ids, dont know what id is
  //push id onto the db name
  DataStore.store[this.constructor.name].push(this);

};

Model.prototype.destory = function(id) {
  // remove stored data from data store for this model if it had an id set
};

module.exports = Model;