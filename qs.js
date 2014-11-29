var qs = require('qs');

var index = function (string) {
  return qs.parse(string);
};

module.exports = index;
