module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var userSchema = mongoose.Schema({
    _id      : Number,
    firstName: String,
    lastName : String,
    email    : String,
    members  : [{ type: mongoose.Schema.Types.ObjectId, ref: 'member' }]
  });

  var user = restful.model('user', userSchema).methods(['get', 'post', 'put', 'delete']);

  user.register(app, '/users');
};
