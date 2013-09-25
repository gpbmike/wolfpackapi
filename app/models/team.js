module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var teamSchema = mongoose.Schema({
    _id    : Number,
    name   : String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'member' }],
    sport  : { type: Number, ref: 'sport' },
    game   : { type: Number, ref: 'game' }
  });

  var team = restful.model('team', teamSchema).methods(['get', 'post', 'put', 'delete']);

  team.register(app, '/teams');
};
