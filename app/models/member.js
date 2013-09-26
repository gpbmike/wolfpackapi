module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var memberSchema = mongoose.Schema({
    _id     : mongoose.Schema.Types.ObjectId,
    team    : { type: mongoose.Schema.Types.ObjectId, ref: 'team' },
    user    : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    position: [{ type: mongoose.Schema.Types.ObjectId, ref: 'position' }]
  });

  var member = restful.model('member', memberSchema).methods(['get', 'post', 'put', 'delete']);

  member.register(app, '/members');
};
