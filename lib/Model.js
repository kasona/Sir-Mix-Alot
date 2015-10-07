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

Model.getNextId = function() {
  // return next successive number in the datastore for this model
  // highest id + 1
  // Set counter to know where we are
  var counter = 0;
  // checking for length of constructor.name
  for (var i = 0; i < DataStore.store[this.prototype.constructor.name].length; i++) {
    // if constructor.name's id is greater than 0 assign it to counter to keep looping
    if (DataStore.store[this.prototype.constructor.name][i].id > 0) {
      counter = DataStore.store[this.prototype.constructor.name].id;
    }
  }
  return counter + 1;
};

Model.prototype.save = function( ) {
  // set next id in model's db to be null
  // get array of ids, dont know what id is

  // if ([this.constructor.name].indexOf(this.id)< last id) {
  //push id onto the db name
  // [this.constructor.name].push(this.id);
  // this.id is already set to null in Model
  // this.id = null;s
  // }

};

Model.prototype.destory = function(id) {
  // remove stored data from data store for this model if it had an id set
};

module.exports = Model;