'use strict';

import {expect} from '../src/index.js';

describe ('chai-as-promised', () => {
  describe ('Promise...to.eventually.equal()', () => {
    it ('assert works', () => {
      return expect (Promise.resolve (2 + 2)).to.eventually.equal (4);
    });
  });
});
