var unq = require('..');
var assert = require('assert');

describe('1', function () {
  it('2', function () {
    var o = unq('a=1');
    assert.equal(o.a, 1);
  });
  it('2', function () {
    var o = unq('a[]=1&a[]=2');
    console.log(o);
    assert.equal(o.a[0], 1);
    assert.equal(o.a[1], 2);
  });
});
