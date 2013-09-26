var express  = require('express'),
    fs       = require('fs'),
    restful  = require('node-restful'),
    mongoose = restful.mongoose;

var app = express();

app.use(express.bodyParser());
app.use(express.query());

mongoose.connect("mongodb://localhost/wolfpack");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

// bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) {
    require(__dirname + '/app/models/' + file)(app);
  }
});

// var passport = require('passport'),
//     LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy({
//     usernameField: 'email'
//   }, function (username, password, done) {
//     user.findOne({ email: username }, function (err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// app.post('/auth', passport.authenticate('local'));

app.listen(3000);
console.log('Listening on port 3000');
