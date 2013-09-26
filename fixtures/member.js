var ids = require(__dirname + '/../helper.js').ids;

exports.members = [
  {
    _id     : ids.member1,
    team    : ids.team1,
    user    : ids.user1,
    position: [ids.position2]
  },
  {
    _id     : ids.member2,
    team    : ids.team1,
    user    : ids.user2,
    position: [ids.position1, ids.position3]
  },
  {
    _id     : ids.member3,
    team    : ids.team2,
    user    : ids.user1,
    position: [ids.position1]
  }
];
