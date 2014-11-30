var express = require('express');
var url = require('url');
var ua = require("universal-analytics");
var qs = require('..');

var app = express();

var gaId = app.set('ga id', 'UA-57178149-1');

app.use(ua.middleware(gaId));

app.get('/', function (req, res) {

  // TODO: expose option to change options key, in case '_' is used
  var optsKey = '_';

  var query = url.parse(req.url).query;
  var o = qs(query);

  var opts = o[optsKey];
  delete o[optsKey];

  var opts = makeOpts(opts);

  var settingsBackup = {
    'json spaces': app.get('json spaces')
  };
  // TODO: Is setting safe for concurrency?
  app.set('json spaces', opts.spaces);

  res.json(o);

  app.set('json spaces', settingsBackup['json spaces']);
});

var defaultOpts = {
  spaces: 2
};

var makeOpts = function (param) {
  param = param || {};
  param.spaces = param.spaces ? parseInt(param.spaces) : defaultOpts.spaces;
  return param;
};

var port = process.env.PORT || 3301;
app.set('port', port);

app.listen(port, function () {
  console.log('listening on ' + port);
});
