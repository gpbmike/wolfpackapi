var ids = require(__dirname + '/../helper.js').ids;

exports.users = [
  {
    _id      : ids.user1,
    firstName: 'Mike',
    lastName : 'Horn',
    members  : [ids.member1, ids.member3],
    email    : 'gpbmike@wolfpack.com'
  },
  {
    _id      : ids.user2,
    firstName: 'Michael',
    lastName : 'Narciso',
    members  : [ids.member2],
    email    : 'narkeeso@wolfpack.com'
  }
];
