module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var positionSchema = mongoose.Schema({
    _id  : mongoose.Schema.Types.ObjectId,
    name : String,
    sport: { type: mongoose.Schema.Types.ObjectId, ref: 'sport' }
  });

  var position = restful.model('position', positionSchema).methods(['get', 'post', 'put', 'delete']);

  position.register(app, '/positions');
};
