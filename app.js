var express = require('express');
var bodyParser = require('body-parser');
var users = require('./routes/users');
var app = express();

app.use( bodyParser.json() );
app.use('/user', users);

app.set('port', (process.env.PORT || 5000));

var server = app.listen(app.get('port'), function () {
  console.log("app started!");
});
