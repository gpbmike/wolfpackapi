var ids = require(__dirname + '/../helper.js').ids;

exports.games = [
  {
    _id      : ids.game1,
    gameTime : '8:00pm',
    homeTeam : ids.team1,
    awayTeam : ids.team2,
    scoreHome: '4',
    scoreAway: '5',
    winner   : ids.team2
  },
  {
    _id      : ids.game2,
    gameTime : '5:00pm',
    homeTeam : ids.team2,
    awayTeam : ids.team1,
    scoreHome: '7',
    scoreAway: '9',
    winner   : ids.team1
  },
];
