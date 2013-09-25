module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var positionSchema = mongoose.Schema({
    _id  : Number,
    name : String,
    sport: { type: Number, ref: 'sport' }
  });

  var position = restful.model('position', positionSchema).methods(['get', 'post', 'put', 'delete']);

  position.register(app, '/positions');
};
