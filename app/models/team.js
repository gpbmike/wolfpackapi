module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var teamSchema = mongoose.Schema({
    _id    : mongoose.Schema.Types.ObjectId,
    name   : String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'member' }],
    sport  : { type: mongoose.Schema.Types.ObjectId, ref: 'sport' },
    games  : [{ type: mongoose.Schema.Types.ObjectId, ref: 'game' }]
  });

  var team = restful.model('team', teamSchema).methods(['get', 'post', 'put', 'delete']);

  team.register(app, '/teams');
};
