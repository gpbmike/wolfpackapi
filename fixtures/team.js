var ids = require(__dirname + '/../helper.js').ids;

exports.teams = [
  {
    _id    : ids.team1,
    name   : 'Wolf Pack',
    members: [ids.member1, ids.member2],
    games  : [ids.game1, ids.game2],
    sport  : ids.sport2
  },
  {
    _id    : ids.team2,
    name   : 'Cobra Stars',
    members: [ids.member3],
    games  : [ids.game1, ids.game2],
    sport  : ids.sport1
  }
];
