var Model = require('./Model');

var LocationSchema = {
  lng : Number,
  lat : Number
};

function Location() {
  var myLocation = new Location();
  Model.call(this, LocationSchema);


}

Model.extend(Location);

module.exports = Location;