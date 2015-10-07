var Model = require('./Model');

var UserSchema = {
  username : String,
  password : String
};

function User() {
  var myModel = new Model();
  Model.call(this, UserSchema);
}
Model.extend(User);

module.exports = User;