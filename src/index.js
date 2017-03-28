/* global require module */

'use strict';

/*****************************************************************************/

var chai = require ('chai');
var chaiSpies = require ('chai-spies');
var chaiString = require ('chai-string');
var chaiAsPromised = require ('chai-as-promised');
var chaiAssertType = require ('chai-asserttype');
var dirtyChai = require ('dirty-chai');
var chaiEqualJSX = require ('chai-equal-jsx');

chai.use (chaiEqualJSX);
chai.use (chaiString);
chai.use (chaiAsPromised);
chai.use (chaiAssertType);
chai.use (chaiSpies);
chai.use (dirtyChai);

// Export all chai functions to make them available to mai-chai users:
Object.keys (chai).forEach (function (key) {
  module.exports[key] = chai[key];
});

/*****************************************************************************/

export {clock} from './clock.js';

/*****************************************************************************/
