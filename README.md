# mai-chai
The chai testing framework, configured with dirty-chai.

## Installing mai-chai

First install the `mai-chai` NPM module.

```bash
npm install mai-chai --save-dev
```

This will also install `chai` and `dirty-chai`.

## Using mai-chai

Import `expect` from `mai-chai`, as you would from `chai`:

```js
import {expect} from 'mai-chai';
```

and then write your BDD assertions with [methods rather than
properties](https://github.com/prodatakey/dirty-chai#function-form-for-terminating-assertion-properties),
such as:

```js
expect(true).to.be.true();
foo.should.be.ok();
```
