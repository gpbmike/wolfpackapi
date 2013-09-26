module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var gameSchema = mongoose.Schema({
    _id      : mongoose.Schema.Types.ObjectId,
    gameTime : String,
    homeTeam : { type: mongoose.Schema.Types.ObjectId, ref: 'team' },
    awayTeam : { type: mongoose.Schema.Types.ObjectId, ref: 'team' },
    scoreHome: String,
    scoreAway: String,
    winner   : { type: mongoose.Schema.Types.ObjectId, ref: 'team' }
  });

  var game = restful.model('game', gameSchema).methods(['get', 'post', 'put', 'delete']);

  game.register(app, '/games');
};
