module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var gameSchema = mongoose.Schema({
    _id      : Number,
    gameTime : String,
    homeTeam : { type: Number, ref: 'team' },
    awayTeam : { type: Number, ref: 'team' },
    scoreHome: String,
    scoreAway: String,
    winner   : { type: Number, ref: 'team' }
  });

  var game = restful.model('game', gameSchema).methods(['get', 'post', 'put', 'delete']);

  game.register(app, '/games');
};
