var DataStore = require('./DataStore');

function Model(schema, id) {
  this.schema = schema;
  this.id = null;

  for ( var key in schema ) {
    //set key to null, use [] when 'key' is undefined
    this[key] = null;
  }

  DataStore.store[this.constructor.name] = [];
};

module.exports = Model;