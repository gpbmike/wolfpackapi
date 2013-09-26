var ObjectId = require('mongoose').Types.ObjectId;

var ids = {};

for (var i = 1; i <= 20; i++) {
  ids['game' + i]     = new ObjectId();
  ids['member' + i]   = new ObjectId();
  ids['position' + i] = new ObjectId();
  ids['sport' + i]    = new ObjectId();
  ids['team' + i]     = new ObjectId();
  ids['user' + i]     = new ObjectId();
}

exports.ids = ids;
