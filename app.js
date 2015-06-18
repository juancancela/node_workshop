var express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var app = express();

app.use( bodyParser.json() );
app.use('/user', users);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening in http://%s:%s', host, port);
});
