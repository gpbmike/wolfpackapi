module.exports = function (app) {
  var restful  = require('node-restful'),
      mongoose = restful.mongoose;

  var sportSchema = mongoose.Schema({
    _id      : Number,
    name     : String,
    positions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'position' }]
  });

  var sport = restful.model('sport', sportSchema).methods(['get', 'post', 'put', 'delete']);

  sport.register(app, '/sports');
};
