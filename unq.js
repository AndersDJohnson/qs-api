var qs = require('qs');

var unq = function (string) {
  return qs.parse(string);
};

module.exports = unq;
