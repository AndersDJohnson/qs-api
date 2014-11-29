var express = require('express');
var app = express();
var url = require('url');

var unq = require('..');

app.get('/', function (req, res) {
  var query = url.parse(req.url).query;
  var o = unq(query);
  res.json(o);
});

var port = process.env.PORT || 3301;
app.set('port', port);

app.listen(port, function () {
  console.log('listening on ' + port);
});
