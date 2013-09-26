var ids = require(__dirname + '/../helper.js').ids;

exports.sports = [
  {
    _id      : ids.sport1,
    name     : 'Soccer',
    positions: [ids.position1, ids.position2, ids.position3]
  },
  {
    _id      : ids.sport2,
    name     : 'Football',
    positions: [ids.position4, ids.position5, ids.position6]
  }
];
