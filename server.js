var express  = require('express'),
    fs       = require('fs'),
    restful  = require('node-restful'),
    mongoose = restful.mongoose;

var app = express();

app.use(express.bodyParser());
app.use(express.query());

mongoose.connect("mongodb://localhost/wolfpack");

// bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) {
    require(__dirname + '/app/models/' + file)(app);
  }
});

app.listen(3000);
console.log('Listening on port 3000');
