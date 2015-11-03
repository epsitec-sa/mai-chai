'use strict';

var chai = require ('chai');
var dirty = require ('dirty-chai');

chai.use (dirty);

module.exports = {
  expect: chai.expect,
  should: chai.should
};
