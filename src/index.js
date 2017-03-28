/* global require module */

/*****************************************************************************/

const chai = require ('chai');
const chaiSpies = require ('chai-spies');
const chaiString = require ('chai-string');
const chaiAsPromised = require ('chai-as-promised');
const chaiAssertType = require ('chai-asserttype');
const dirtyChai = require ('dirty-chai');
const chaiEqualJSX = require ('chai-equal-jsx');

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
