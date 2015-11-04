'use strict';

var chai = require ('chai');
var chaiString = require ('chai-string');
var dirtyChai = require ('dirty-chai');

chai.use (chaiString);
chai.use (dirtyChai);

module.exports = {
  expect: chai.expect,
  should: chai.should
};
