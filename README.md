# mai-chai
The [chai](http://chaijs.com) testing framework, configured by default
with following plugins:

* [chai-spies](http://chaijs.com/plugins/chai-spies) &rarr; adds spy ability.
* [chai-string](http://chaijs.com/plugins/chai-string) &rarr; help with common
  string comparison assertions.
* [dirty-chai](https://github.com/prodatakey/dirty-chai) &rarr; provides a
  function-call form for chai _property getter_ assertions.

## Installing mai-chai

First install the `mai-chai` NPM module.

```bash
npm install mai-chai --save-dev
```

This will also install `chai`, `chai-spies`, `chai-string` and `dirty-chai`.

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

or use the various assertions added by [chai-string](http://chaijs.com/plugins/chai-string)
and spy on methods with [chai-spies](http://chaijs.com/plugins/chai-spies).
