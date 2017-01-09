'use strict';

import {expect} from '../src/index.js';
import {clock} from '../src/index.js';

/*****************************************************************************/

describe ('chai-as-promised', () => {
  describe ('Promise...to.eventually.equal()', () => {
    it ('assert works', () => {
      return expect (Promise.resolve (2 + 2)).to.eventually.equal (4);
    });
  });
});

/*****************************************************************************/

describe ('clock()', () => {
  it ('measures time', () => {
    const time = clock ();
    const ms = clock (time);
    expect (ms).to.be.at.least (0);
    expect (ms).to.be.at.most (0.1);
  });
});

/*****************************************************************************/
